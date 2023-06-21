# Testing Tor and Snowflake via Hamrah Aval operator
Snowflake does not work in Iran via the Hamrah Aval mobile operator, as Tor Browser takes a very long time attempting to establish a connection, and it never succeeds to connect.

However, Snowflake currently works properly via other Iranian ISPs, such as Irancell, Ritel, .etc, and also via residential internet connections.

The Tor logs, when trying to connect to Tor on Windows, is shown below:

```
2023-06-21 09:57:50.259 [NOTICE] New control connection opened from 127.0.0.1.
2023-06-21 09:57:50.260 [NOTICE] New control connection opened from 127.0.0.1.
2023-06-21 09:57:50.273 [NOTICE] DisableNetwork is set. Tor will not make or accept non-control network connections. Shutting down all existing connections.
2023-06-21 09:57:56.482 [NOTICE] Opening Socks listener on 127.0.0.1:9150
2023-06-21 09:57:56.483 [NOTICE] Opened Socks listener connection (ready) on 127.0.0.1:9150
2023-06-21 09:57:57.549 [NOTICE] Bootstrapped 1% (conn_pt): Connecting to pluggable transport
2023-06-21 09:57:57.551 [NOTICE] Bootstrapped 2% (conn_done_pt): Connected to pluggable transport
2023-06-21 09:57:57.718 [NOTICE] Bootstrapped 10% (conn_done): Connected to a relay
2023-06-21 09:57:58.244 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 09:57:58.244 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 09:58:19.773 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 09:58:20.161 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 09:58:20.162 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 09:58:20.552 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 09:58:39.823 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 09:58:39.824 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 09:58:41.850 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 09:58:41.850 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 09:59:00.098 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 09:59:01.112 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 09:59:02.127 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 09:59:05.169 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 09:59:23.230 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 09:59:23.655 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 09:59:25.231 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 09:59:25.232 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 09:59:30.885 [NOTICE] New control connection opened from 127.0.0.1.
2023-06-21 09:59:43.715 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 09:59:43.934 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 09:59:44.714 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 09:59:45.230 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 10:00:03.980 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 10:00:03.981 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 10:00:04.214 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 10:00:04.994 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 10:00:23.256 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 10:00:24.230 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 10:00:25.931 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 10:00:26.232 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 10:00:43.230 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 10:00:43.528 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 10:00:45.560 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 10:00:45.789 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 10:01:02.793 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 10:01:03.027 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 10:01:05.056 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 10:01:05.836 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 10:01:22.231 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 10:01:23.073 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 10:01:25.101 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 10:01:25.230 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 10:01:42.231 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 10:01:42.231 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 10:01:44.601 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 10:01:45.230 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 10:02:04.650 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 10:02:04.650 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 10:02:04.650 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 10:02:04.884 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 10:02:24.147 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 10:02:24.930 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 10:02:26.959 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 10:02:26.959 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 10:02:44.193 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 10:02:44.194 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 10:02:46.220 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": broker failure read tcp [scrubbed]->[scrubbed]: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
2023-06-21 10:02:46.455 [NOTICE] Managed proxy "TorBrowser\Tor\PluggableTransports\snowflake-client.exe": offer created
2023-06-21 10:02:57.638 [WARN] Problem bootstrapping. Stuck at 10% (conn_done): Connected to a relay. (DONE; DONE; count 1; recommendation warn; host 8838024498816A039FCBBAB14E6F40A0843051FA at 192.0.2.4:80)
2023-06-21 10:02:57.639 [WARN] 1 connections have failed:
2023-06-21 10:02:57.640 [WARN] 1 connections died in state handshaking (TLS) with SSL state SSLv3/TLS write client hello in HANDSHAKE
2023-06-21 10:02:57.644 [WARN] Problem bootstrapping. Stuck at 10% (conn_done): Connected to a relay. (DONE; DONE; count 2; recommendation warn; host 2B280B23E1107BB62ABFC40DDCC8824814F80A72 at 192.0.2.3:80)
2023-06-21 10:02:57.645 [WARN] 2 connections have failed:
2023-06-21 10:02:57.646 [WARN] 2 connections died in state handshaking (TLS) with SSL state SSLv3/TLS write client hello in HANDSHAKE
2023-06-21 10:02:57.662 [NOTICE] Closing no-longer-configured Socks listener on 127.0.0.1:9150
2023-06-21 10:02:57.662 [NOTICE] DisableNetwork is set. Tor will not make or accept non-control network connections. Shutting down all existing connections.
2023-06-21 10:02:58.240 [WARN] Pluggable Transport process terminated with status code 0
2023-06-21 10:03:40.865 [NOTICE] New control connection opened from 127.0.0.1.
```

Here is the Tor logs, using stand-alone Tor and Snowflake client on Android:

```
Jun 21 13:57:53.966 [notice] Tor 0.4.7.13 running on Linux with Libevent 2.1.12-stable, OpenSSL 3.1.1, Zlib 1.2.13, Liblzma 5.4.3, Libzstd N/A and Unknown N/A as libc.
Jun 21 13:57:53.966 [notice] Tor can't help you if you use it wrong! Learn how to be safe at https://support.torproject.org/faq/staying-anonymous/
Jun 21 13:57:53.967 [notice] Read configuration file "/data/data/com.termux/files/usr/etc/tor/torrc".
Jun 21 13:57:53.976 [notice] Opening Socks listener on 127.0.0.1:9050
Jun 21 13:57:53.976 [notice] Opened Socks listener connection (ready) on 127.0.0.1:9050
Jun 21 13:57:54.000 [notice] Parsing GEOIP IPv4 file /data/data/com.termux/files/usr/share/tor/geoip.
Jun 21 13:57:54.000 [notice] Parsing GEOIP IPv6 file /data/data/com.termux/files/usr/share/tor/geoip6.
Jun 21 13:57:55.000 [notice] Bootstrapped 0% (starting): Starting
Jun 21 13:57:58.000 [notice] Starting with guard context "bridges"
Jun 21 13:57:58.000 [notice] Delaying directory fetches: No running bridges
Jun 21 13:57:58.000 [notice] new bridge descriptor 'flakey8' (cached): $2B280B23E1107BB62ABFC40DDCC8824814F80A72~flakey8 [1zOHpg+FxqQfi/6jDLtCpHHqBTH8gjYmCKXkus1D5Ko] at 192.0.2.3
Jun 21 13:57:58.000 [notice] new bridge descriptor 'flakey9' (cached): $2B280B23E1107BB62ABFC40DDCC8824814F80A72~flakey9 [1zOHpg+FxqQfi/6jDLtCpHHqBTH8gjYmCKXkus1D5Ko] at 192.0.2.3
Jun 21 13:57:58.000 [notice] Application request when we haven't received a consensus with exits. Optimistically trying known bridges again.
Jun 21 13:57:58.000 [notice] Bootstrapped 1% (conn_pt): Connecting to pluggable transport
Jun 21 13:57:58.000 [notice] Bootstrapped 2% (conn_done_pt): Connected to pluggable transport
Jun 21 13:57:58.000 [notice] Bootstrapped 10% (conn_done): Connected to a relay
Jun 21 13:58:03.000 [notice] Managed proxy "/data/data/com.termux/files/home/snowflake/client/client": offer created
Jun 21 13:59:53.000 [notice] Managed proxy "/data/data/com.termux/files/home/snowflake/client/client": broker failure read tcp [scrubbed]->[scrubbed]: read: connection timed out
Jun 21 13:59:58.000 [notice] Managed proxy "/data/data/com.termux/files/home/snowflake/client/client": offer created
Jun 21 14:00:00.000 [notice] Delaying directory fetches: No running bridges
Jun 21 14:00:12.000 [notice] Application request when we haven't received a consensus with exits. Optimistically trying known bridges again.
Jun 21 14:00:39.000 [notice] Tried for 120 seconds to get a connection to [scrubbed]:443. Giving up. (waiting for circuit)
Jun 21 14:00:39.000 [notice] Tried for 120 seconds to get a connection to [scrubbed]:443. Giving up. (waiting for circuit)
Jun 21 14:00:40.000 [notice] Tried for 120 seconds to get a connection to [scrubbed]:443. Giving up. (waiting for circuit)
```

It hangs on 10% forever.

Here is the content of my `torrc` file:

```
UseBridges 1
ClientTransportPlugin obfs4 exec /data/data/com.termux/files/usr/bin/obfs4proxy
ClientTransportPlugin snowflake exec /data/data/com.termux/files/home/snowflake/client/client -log /data/data/com.termux/files/home/snowflake.log

#Bridge snowflake 192.0.2.3:80 2B280B23E1107BB62ABFC40DDCC8824814F80A72 fingerprint=2B280B23E1107BB62ABFC40DDCC8824814F80A72 url=https://snowflake-broker.torproject.net.global.prod.fastly.net/ front=cdn.sstatic.net ice=stun:stun.voip.blackberry.com:3478,stun:stun.altar.com.pl:3478,stun:stun.antisip.com:3478,stun:stun.bluesip.net:3478,stun:stun.dus.net:3478,stun:stun.epygi.com:3478,stun:stun.sonetel.com:3478,stun:stun.sonetel.net:3478,stun:stun.stunprotocol.org:3478,stun:stun.uls.co.za:3478,stun:stun.voipgate.com:3478,stun:stun.voys.nl:3478 utls-imitate=hellochrome_auto
Bridge snowflake 192.0.2.3:80 2B280B23E1107BB62ABFC40DDCC8824814F80A72 fingerprint=2B280B23E1107BB62ABFC40DDCC8824814F80A72 url=https://snowflake-broker.torproject.net.global.prod.fastly.net/ front=cdn.sstatic.net ice=stun:stun.l.google.com:19302,stun:stun.altar.com.pl:3478,stun:stun.antisip.com:3478,stun:stun.bluesip.net:3478,stun:stun.dus.net:3478,stun:stun.epygi.com:3478,stun:stun.sonetel.com:3478,stun:stun.sonetel.net:3478,stun:stun.stunprotocol.org:3478,stun:stun.uls.co.za:3478,stun:stun.voipgate.com:3478,stun:stun.voys.nl:3478 utls-imitate=hellorandomizedalpn
```

And here is the Snowflake logs:

```
2023/06/21 09:27:54 Started SOCKS listener at [scrubbed].
2023/06/21 09:27:58 SOCKS accepted: {[scrubbed] fingerprint=2B280B23E1107BB62ABFC40DDCC8824814F80A72;url=https://snowflake-broker.torproject.net.global.prod.fastly.net/;front=cdn.sstatic.net;ice=stun:stun.l.google.com:19302,stun:stun.altar.com.pl:3478,stun:stun.antisip.com:3478,stun:stun.bluesip.net:34 78,stun:stun.dus.net:3478,stun:stun.epygi.com:3478,stun:stun.sonetel.com:3478,stun:stun.sonetel.net:3478,stun:stun.stunprotocol.org:3478,stun:stun.uls.co.za:3478,stun:stun.voipgate.com:3478,stun:stun.voys.nl:3478;utls-imitate=hellorandomizedalpn map[fingerprint:[2B280B23E1107BB62ABFC40DDCC8824814F80A72] front:[cdn.sstatic.net] ice:[stun:stun.l.google.com:19302,stun:stun.altar.com.pl:3478,stun:stun.antisip.com:3478,stun:stun.bluesip.net:3478,stun:stun.dus.net:3478,stun:stun.epygi.com:3478,stun:stun.sonetel.com:3478,stun:stun.sonetel.net:3478,stun:stun.stunprotocol.org:3478,stun:stun.uls.co.za:3478,stun:stun.voipgate.com:3478,stun:stun.voys.nl:3478] url:[https://snowflake-broker.torproject.net.global.prod.fastly.net/] utls-imitate:[hellorandomizedalpn]]}
2023/06/21 09:27:58 


 --- Starting Snowflake Client ---
2023/06/21 09:27:58 Using ICE servers:
2023/06/21 09:27:58 url: stun:stun.altar.com.pl:3478
2023/06/21 09:27:58 url: stun:stun.bluesip.net:3478
2023/06/21 09:27:58 url: stun:stun.voipgate.com:3478
2023/06/21 09:27:58 url: stun:stun.dus.net:3478
2023/06/21 09:27:58 url: stun:stun.l.google.com:19302
2023/06/21 09:27:58 url: stun:stun.antisip.com:3478
2023/06/21 09:27:58 Rendezvous using Broker at: https://snowflake-broker.torproject.net.global.prod.fastly.net/
2023/06/21 09:27:58 Domain fronting using: cdn.sstatic.net
2023/06/21 09:27:58 ---- SnowflakeConn: begin collecting snowflakes ---
2023/06/21 09:27:58 ---- SnowflakeConn: starting a new session ---
2023/06/21 09:27:58 WebRTC: Collecting a new Snowflake. Currently at [0/1]
2023/06/21 09:27:58 snowflake-93249cf765c679e2  connecting...
2023/06/21 09:27:58 redialing on same connection
2023/06/21 09:27:58 ---- SnowflakeConn: begin stream 3 ---
2023/06/21 09:27:58 WebRTC: DataChannel created.
2023/06/21 09:27:58 WebRTC: Created offer
2023/06/21 09:27:58 WebRTC: Set local description
2023/06/21 09:28:03 WebRTC: PeerConnection created.
2023/06/21 09:28:03 Negotiating via HTTP rendezvous...
2023/06/21 09:28:03 Target URL:  snowflake-broker.torproject.net.global.prod.fastly.net
2023/06/21 09:28:03 Front URL:   cdn.sstatic.net
2023/06/21 09:28:08 Warning: NAT checking failed for server at stun.altar.com.pl:3478: Error completing roundtrip map test: timed out waiting for response
2023/06/21 09:28:08 NAT Type: unrestricted
2023/06/21 09:29:53 WebRTC: closing DataChannel
2023/06/21 09:29:53 WebRTC: closing PeerConnection
2023/06/21 09:29:53 WebRTC: Closing
2023/06/21 09:29:53 WebRTC: read tcp [scrubbed]->[scrubbed]: read: connection timed out  Retrying...
2023/06/21 09:29:53 WebRTC: Collecting a new Snowflake. Currently at [0/1]
2023/06/21 09:29:53 snowflake-53ee857b8325b83b  connecting...
2023/06/21 09:29:53 WebRTC: DataChannel created.
2023/06/21 09:29:53 WebRTC: Created offer
2023/06/21 09:29:53 WebRTC: Set local description
2023/06/21 09:29:58 WebRTC: PeerConnection created.
2023/06/21 09:29:58 Negotiating via HTTP rendezvous...
2023/06/21 09:29:58 Target URL:  snowflake-broker.torproject.net.global.prod.fastly.net
2023/06/21 09:29:58 Front URL:   cdn.sstatic.net
```