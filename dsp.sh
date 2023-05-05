tor --SocksPort $(ifconfig | grep inet | tail -1 | awk '{print $2}'):9050
