if [ "$1" = "q1" ]
then
bind -x '"\C-x": cnt && source tor-dsp q2'
elif [ "$1" = "q2" ]
then
bind -x '"\C-x": tor-dsp'
else
tor SocksPort 9050 SocksPort $(ifconfig | grep inet | tail -1 | awk '{print $2}'):9050
fi
