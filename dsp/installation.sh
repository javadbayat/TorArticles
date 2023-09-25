curl https://javadbayat.github.io/TorArticles/dsp/dsp.sh -o $PREFIX/bin/tor-dsp
chmod +x $PREFIX/bin/tor-dsp
echo source tor-dsp q1 > ~/.bashrc

curl https://javadbayat.github.io/TorArticles/dsp/cnt.c -o cnt.c
clang cnt.c -o $PREFIX/bin/cnt
