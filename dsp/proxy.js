// Check the script host (wscript.exe or cscript.exe) used to run this script
// If the host program is not cscript.exe, then
// automatically re-launch the script using cscript.exe
var fso = WSH.CreateObject("Scripting.FileSystemObject");
var wshShell = WSH.CreateObject("WScript.Shell");
if (fso.GetBaseName(WSH.FullName).toLowerCase() != "cscript") {
    wshShell.Run('cscript "' + WSH.ScriptFullName + '"');
    WSH.Quit();
}

// The main code!
try {
    var proxyEnabled = wshShell.RegRead("HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\\ProxyEnable");
    WSH.StdOut.WriteLine("Welcome to TOR-DSP Proxy Configuration Utility!");
    WSH.StdOut.WriteLine("- To configure TOR-DSP as your system proxy, enter your device token");
    WSH.StdOut.WriteLine("- Your system proxy is currently " + (proxyEnabled ? "enabled" : "disabled") + ". To " + (proxyEnabled ? "disable" : "enable") + " it, enter a single dot (.)");
    var input = WSH.StdIn.ReadLine();
    if (!input) // The user has entered nothing (an empty line)
        WSH.Quit(); // So the operation is considered to be canceled
    
    if (input == ".") {
        WSH.StdOut.WriteLine("Changing the state of system proxy...");
        wshShell.RegWrite("HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\\ProxyEnable", proxyEnabled ? 0 : 1, "REG_DWORD");
        
        WSH.StdOut.WriteLine("Enforcing system proxy settings... Please wait...");
        WSH.CreateObject("InternetExplorer.Application").Quit();
    }
    else {
        WSH.StdOut.WriteLine("Configuring system proxy...");
        var ipAddress = ipAddressFromToken(input);
        var port = 9050;
        
        wshShell.RegWrite("HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\\ProxyServer", "socks=" + ipAddress + ":" + port);
        wshShell.RegWrite("HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\\ProxyEnable", 1, "REG_DWORD");
        
        WSH.StdOut.WriteLine("Enforcing system proxy settings... Please wait...");
        WSH.CreateObject("InternetExplorer.Application").Quit();
        
        var configPath = foxyproxyConfigFile();
        if (configPath) {
            WSH.StdOut.WriteLine("Configuring the Tor Proxy within FoxyProxy...");
            var configDoc = WSH.CreateObject("Microsoft.XMLDOM");
            if (!configDoc.load(configPath))
                throw new Error("Unable to load the configuration file of FoxyProxy");
            
            var proxy = configDoc.selectSingleNode("//proxy[@name='Tor Network']");
            if (!proxy)
                throw new Error("Unable to find the Tor Network proxy within FoxyProxy settings");
            
            var mc = proxy.getElementsByTagName("manualconf").nextNode();
            if (!mc)
                throw new Error("There's no 'manualconf' element within the 'proxy' element");
            
            mc.setAttribute("host", ipAddress);
            proxy.setAttribute("enabled", "true");
            configDoc.save(configPath);
        }
    }
}
catch (err) {
    WSH.StdErr.WriteLine("Error: " + err.message);
    WSH.StdErr.WriteLine("Error code: " + getHRESULT(err.number));
}

WSH.StdOut.Write("Press Enter to quit");
WSH.StdIn.SkipLine();

function getHRESULT(errno) {
    if (!errno)
        return "N/A";
    
    var hr = (0x100000000 + errno).toString(16).toUpperCase();
    if (hr.length > 8)
        throw new Error("Number too large for HRESULT.");
    
    while (hr.length != 8)
        hr = "0" + hr;
    
    return "0x" + hr;
}

function ipAddressFromToken(token) {
    var rawIP = parseInt(token, 36);
    if (isNaN(rawIP))
        throw new Error("Invalid device token");
    
    var bytes = new Array(4);
    bytes[0] = (rawIP & 0xFF000000) >> 24;
    bytes[1] = (rawIP & 0x00FF0000) >> 16;
    bytes[2] = (rawIP & 0x0000FF00) >> 8;
    bytes[3] = (rawIP & 0x000000FF);
    
    return bytes.join(".");
}

function foxyproxyConfigFile() {
    try {
        return wshShell.RegRead("HKCU\\Software\\tor-dsp\\foxyproxy-config");
    }
    catch (err) {
        return "";
    }
}