# This is a bash script that automatically installs
# Tor and Snowflake client and also directs you
# to Telegram app to easily set up the appropriate
# Socks5 proxy for Tor. It's especially designed
# for Iranian users.
#
# To use it, simply run this command in your Termux app:
# curl https://javadbayat.github.io/TorArticles/setup.sh | sh

cd ~
pkg upgrade -y
pkg install tor golang git nano -y
git clone https://git.torproject.org/pluggable-transports/snowflake.git
cd snowflake/client
go get
go build
cd ~
clear
echo -en "\e[1;34m You no longer need your VPN! Please turn it off and press Enter to continue installation. \e[0m"
read
clear
rm $PREFIX/etc/tor/torrc
curl https://javadbayat.github.io/TorArticles/torrc -o $PREFIX/etc/tor/torrc
curl https://javadbayat.github.io/TorArticles/tor-shortcut.sh >> ~/.bashrc
clear
echo -e "\e[1;35m The final step is to set the Tor Network proxy in your Telegram! So please select Telegram app on the pop-up box that appears, then after Telegram app launches, you must confirm the creation of the new proxy. \e[0m"
termux-open-url 'https://t.me/socks?server=127.0.0.1&port=9050&user=admin&pass=admin'