# نحوه استفاده از مرورگر تور برای وصل شدن به تلگرام در ایران
> کپی بدون ذکر منبع مجاز و حلال است!

با شدیدتر شدن فیلترینگ، بسیاری از VPNها دیگر وصل نمی شوند و استفاده از VPN برای بازکردن تلگرام به راحتی ممکن نیست. در این شرایط، یک راه آسان تر برای دورزدن فیلترینگ و وصل شدن به تلگرام، استفاده از سرویس Tor است. سرویس Tor برای ناشناس ماندن کاربران در محیط اینترنت به کار می رود و می تواند داده هایی از کاربران را مانند موقعیّت مکانی و آدرس IP پنهان کند. در حال حاضر، Tor امن ترین سامانه ارتباطی جهان در فضای سایبری است به گونه ای که تاکنون هیچ سازمان و نهاد امنیّتی قادر به شکافتن کدهای آن نبوده است.

در حال حاضر، در بسیاری از سایت های فارسی زبان، آموزش هایی در زمینه چگونگی وصل شدن به سرویس Tor وجود دارد، که دیگر قدیمی شده اند و بخاطر گسترده تر شدن فیلترینگ، دیگر در شرایط کنونی مفید نیستند. آن آموزش ها اغلب به تنظیم پل های obfs4 در پیکربندی Tor پرداخته اند که این پل ها اکنون فیلتر شده اند و اگر از آن ها استفاده کنید، طبیعتاً با پیغام خطای «General SOCKS server failure» مواجه خواهید شد. لذا جهت وصل شدن به سرویس Tor، لازم است که از پل های snowflake استفاده کنید ~~و ویژگی uTLS آن را نیز فعّال کنید~~، که در این صفحه نحوه این کار را توضیح خواهیم داد.

اگر می خواهید بدانید که Snowflake چیست یا تمایل به کسب اطّلاعات بیشتر پیرامون عملکرد آن را دارید، می توانید [این مقاله فارسی را در ویکی پدیا](https://fa.m.wikipedia.org/wiki/%D8%AF%D8%A7%D9%86%D9%87_%D8%A8%D8%B1%D9%81_(%D9%86%D8%B1%D9%85%E2%80%8C%D8%A7%D9%81%D8%B2%D8%A7%D8%B1)) مطالعه کنید.

**به روزرسانی:** از وقتی که ورژن جدید 11.5.6 مرورگر تور عرضه شد، تنظیم پل Snowflake برای تور بسیار راحت تر شده است. در این نسخه، ویژگی uTLS در پل های Snowflake به طور پیشفرض فعّال شده است و شما دیگر نیازی به تنظیم دستی پل ندارید. لذا ما این صفحه را ویرایش کردیم تا روش بسیار ساده تری را برای وصل شدن به تور شرح دهیم.

**به روزرسانی 2:** طبق بررسی های انجام شده، در حال حاضر Snowflake به طرز عجیبی [روی اپراتور های **همراه اوّل** در ایران مسدود شده است](Snowflake_via_HA.md). لذا ضمن استفاده از روشی که در این مقاله توضیح داده شده، از طریق اپراتور ایرانسل، اینترنت خانگی و.. برای اتّصال به شبکه تور اقدام کنید.

در زیر، روش وصل شدن به تلگرام از طریق سرویس Tor شرح داده شده است. البتّه این روش فقط برای برنامه تلگرام روی کامپیوتر با سیستم عامل ویندوز جواب می دهد.

## دستورالعمل ها
1. آخرین نسخه مرورگر Tor را از صفحه زیر دانلود و نصب کنید. اگر هم از قبل این مرورگر را دارید آن را بروزرسانی نمایید (توجّه کنید که شما به ورژن 11.5.6 یا بالاتر نیاز دارید).  
[https://tor.calyxinstitute.org/download](https://tor.calyxinstitute.org/download)  
**راهنمایی:** گزینه دانلود در این صفحه، نسخه 64-بیتی مرورگر Tor به زبان انگلیسی را ارائه می دهد. اگر سیستم شما 32-بیتی است، گزینه «Download in another language or platform» را انتخاب کنید. سپس صفحه جدیدی باز می شود که از جدول موجود در ستون «Windows» گزینه «32-bit» را انتخاب کنید. در ضمن می توانید از این جدول نسخه فارسی یا هر زبان دیگری که تمایل دارید را نیز دانلود کنید.
2. مرورگر Tor را اجرا کنید. سپس در صفحه آغازین مرورگر، روی دکمه «Configure connection» کلیک کنید تا صفحه تنظیمات مرورگر باز شود.  
![بازکردن تنظیمات مرورگر Tor](/assets/images/open_tor_settings.png)
**نکته:** اگر شما قبلاً مرورگر تور را نصب کرده بودید و پل های obfs4 برای آن تنظیم کرده بودید، اکنون باید تمامی آن پل ها را با کلیک کردن روی «Remove All Bridges» در سربرگ «Connection» حذف کنید؛ و گرنه در اتّصال به تور با مشکل مواجه خواهید شد.
3. حال بایستی یک پل تنظیم کنید. برای این کار، از پانل سمت چپ به سربرگ «Connection» بروید. به پایین صفحه اسکرول کنید و در قسمت «Add a New Bridge»، روی دکمه اوّل یعنی «Select a Built-In Bridge» کلیک کنید.
![تنظیم کردن پل](/assets/images/bridge_settings2.png)
4. پنجره ای با عنوان «Built-In Bridges» ظاهر می شود. از بین گزینه های موجود، «Snowflake» را انتخاب کنید.
![انتخاب گزینه Snowflake](/assets/images/builtin_bridges.png)
5. روی دکمه «OK» کلیک کنید و به صفحه اصلی مرورگر برگردید.
6. روی دکمه «Connect» کلیک کنید و صبر کنید تا عملیّات اتّصال به پایان برسد. در صورت اتّصال موفّقیّت آمیز به شبکه Tor، صفحه بنفش رنگی شبیه تصویر زیر را مشاهده خواهید کرد. 
![اتّصال موفّقیّت آمیز به شبکه تور](/assets/images/connection_success.png)
7. حال باید پروکسی Tor را در تلگرام تنظیم کنید. برای این کار تلگرام را باز کنید و به بخش تنظیمات بروید. سپس روی گزینه «Advanced» کلیک کنید (تصویر زیر).  
![تنظیمات تلگرام](/assets/images/telegram_settings.png)
8. سپس روی گزینه «Connection type» کلیک کنید (تصویر زیر).  
![تنظیمات پیشرفته تلگرام](/assets/images/tg_advanced_settings.png)
9. پنجره ای با عنوان «Proxy settings» باز می شود (تصویر زیر). در این پنجره روی دکمه «Add proxy» کلیک کنید تا یک پروکسی جدید اضافه کنید.  
![پنجره Proxy settings](/assets/images/tg_proxy_settings.png)
10. در پنجره ظاهر شده، نوع پروکسی را روی «SOCKS5» بگذارید. در قسمت «Socket address»، مقادیر زیر را وارد کنید.  
Hostname: `127.0.0.1`  
Port: `9150`  
قسمت های Username و Password را هم خالی بگذارید.  
![تنظیم کردن پروکسی تور در تلگرام](/assets/images/tor_local_proxy.png)
11. در نهایت روی دکمه «Save» کلیک کنید و دیگر کار تمام است! کمی صبر کنید تا تلگرام شما وصل شود.  البتّه این نکته مهم را یادتان نرود که تا وقتی که برنامه تلگرام باز است، مرورگر Tor نیز باید باز باشد تا اتّصال شما قطع نشود. پس از اینکه کار شما با تلگرام تمام شد و تلگرام را بستید، آنگاه می توانید مرورگر Tor را نیز با خیال راحت ببندید.

برای دفعات بعدی هم که خواستید به تلگرام وصل شوید، فقط کافی است مرورگر تور را باز کنید، روی دکمه «Connect» کلیک کنید و بعد از اینکه به شبکه تور وصل شدید، تلگرام را باز کنید.

## منابع
1. [https://forum.torproject.net/t/iran-circumventing-censorship-with-tor/4590/23](https://forum.torproject.net/t/iran-circumventing-censorship-with-tor/4590/23)
2. [تیم بلک سکوریتی](https://blacksecurityteam.com/troubleshoot-a-tor-broswer-connection/)
