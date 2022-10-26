# TorArticles
At the moment, here we publish Persian tutorials about the Tor Anonymity network based on valid sources.

# نحوه استفاده از مرورگر تور برای وصل شدن به تلگرام در ایران
> کپی بدون ذکر منبع مجاز و حلال است!

به گفته NetBlocks، ایران در معرض شدیدترین محدودیّت های اینترنت است. بر خلاف چیزی که سایت های فارسی زبان توضیح داده اند، پل های obfs4 دیگر مشکل وصل شدن به شبکه tor را حل نمی کنند و در حال حاضر شما بایستی از پل های snowflake برای اتّصال استفاده کنید. این پل ها نیز تاحدودی فیلتر شده اند و برای دورزدن فیلترینگ آنها، بایستی ویژگی uTLS آنها را فعّال کنید.

منبع: https://forum.torproject.net/t/iran-circumventing-censorship-with-tor/4590/23#snowflake-with-utls-support-in-tor-browser-1154-1

## دستورالعمل ها
1. آخرین نسخه مرورگر Tor را از صفحه زیر دانلود و نصب کنید. اگر هم از قبل این مرورگر را دارید آن را بروزرسانی نمایید (توجّه کنید که شما به ورژن 11.5.4 یا بالاتر نیاز دارید).  
https://tor.calyxinstitute.org/download/  
**راهنمایی:** گزینه دانلود در این صفحه، نسخه 64-بیتی مرورگر Tor به زبان انگلیسی را ارائه می دهد. اگر سیستم شما 32-بیتی است، گزینه «Download in another language or platform» را انتخاب کنید. سپس صفحه جدیدی باز می شود که از جدول موجود در ستون «Windows» گزینه «32-bit» را انتخاب کنید. در ضمن می توانید از این جدول نسخه فارسی یا هر زبان دیگری را که تمایل دارید را نیز دانلود کنید.
2. حال بایستی یک پل تنظیم کنید. در صفحه آغازین مرورگر، روی دکمه «Configure connection» کلیک کنید. از پانل سمت چپ به سربرگ «Connection» بروید. به پایین صفحه اسکرول کنید و در قسمت «Add a New Bridge»، روی دکمه سوم یعنی «Add a Bridge Manually» کلیک کنید تا یک پنجره حاوی یک کادر متنی ظاهر شود. آدرس پل زیر را کپی کنید و در آن کادر متنی پیست کنید:  
```
snowflake 192.0.2.3:80 2B280B23E1107BB62ABFC40DDCC8824814F80A72 fingerprint=2B280B23E1107BB62ABFC40DDCC8824814F80A72 url=https://snowflake-broker.torproject.net.global.prod.fastly.net/ front=cdn.sstatic.net ice=stun:stun.voip.blackberry.com:3478,stun:stun.altar.com.pl:3478,stun:stun.antisip.com:3478,stun:stun.bluesip.net:3478,stun:stun.dus.net:3478,stun:stun.epygi.com:3478,stun:stun.sonetel.com:3478,stun:stun.sonetel.net:3478,stun:stun.stunprotocol.org:3478,stun:stun.uls.co.za:3478,stun:stun.voipgate.com:3478,stun:stun.voys.nl:3478 utls-imitate=hellochrome_auto
```
3. روی دکمه «OK» کلیک کنید و به صفحه اصلی مرورگر برگردید.
4. روی دکمه «Connect» کلیک کنید. حال حدود یک دقیقه صبر کنید تا به شبکه تور وصل شوید، که در این صورت صفحه بنفش رنگی با یک سری متون مشاهده خواهید کرد. اگر بعد از گذشت یک دقیقه وصل نشدید، احتمالاً خطایی در اتّصال رخ داده است.
5. حال به تلگرام رفته و یک پروکسی از نوع SOCKS5 با مشخّصات زیر تنظیم کنید.  
Hostname: `127.0.0.1`  
Port: `9150`  
قسمت های Username و Password را هم خالی بگذارید (نترسید مشکلی پیش نمیاد).
6. کار تمام است! کمی صبر کنید تا تلگرام شما وصل شود.  البتّه این نکته مهم را یادتان نرود که تا وقتی که برنامه تلگرام باز است، مرورگر Tor نیز باید باز باشد تا اتّصال شما قطع نشود. پس از اینکه کار شما با تلگرام تمام شد و تلگرام را بستید، آنگاه می توانید مرورگر Tor را نیز با خیال راحت ببندید.
