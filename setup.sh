# This is a bash script that automatically installs
# Tor and Snowflake client and also directs you
# to Telegram app to easily set up the appropriate
# Socks5 proxy for Tor. It's especially designed
# for Iranian users, and works perfectly over Irancell.
#
# To use it, first turn on a VPN, and then run this command in your Termux app:
# curl https://javadbayat.github.io/TorArticles/setup.sh | sh
#
# After the installation, close and relaunch Termux.
# Whenever you want to run Tor, simply press CTRL+T in
# your Termux app! Enjoy!

cd ~
pkg upgrade -y
pkg install tor golang git -y
git clone https://git.torproject.org/pluggable-transports/snowflake.git
clear
echo "You no longer need your VPN! Please turn it off and press Enter to continue installation."
read
clear
cd snowflake/client
go get
go build
cd ~
rm $PREFIX/etc/tor/torrc
curl https://javadbayat.github.io/TorArticles/torrc -o $PREFIX/etc/tor/torrc
curl https://javadbayat.github.io/TorArticles/tor-shortcut.sh >> ~/.bashrc
clear
echo "The final step is to set the Tor Network proxy in your Telegram! So please select Telegram app on the pop-up box that appears, then after Telegram app launches, you must confirm the creation of the new proxy."
termux-open-url 'https://t.me/socks?server=127.0.0.1&port=9050&user=admin&pass=admin'