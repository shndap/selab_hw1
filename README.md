# گزارش آزمایش اول

## معرفی پروژه

این مخزن شامل یک فرانت‌اند ایستا برای گزارش آزمایش Git و GitHub Pages است. پیاده‌سازی با HTML، CSS و JavaScript خالص انجام شده و هدفش این است که فرایند branch، merge، conflict resolution و deploy را به‌صورت یک داشبورد جمع‌وجور نمایش بدهد.

## ساختار پروژه

- `site/index.html`: اسکلت صفحه و بخش‌های اصلی
- `site/styles.css`: استایل‌های layout و state
- `site/app.js`: داده‌ها، تب‌ها، timeline و پاسخ پرسش‌ها
- `site/assets/branch-graph.svg`: نمودار بصری branchها
- `.github/workflows/deploy.yml`: workflow استقرار خودکار روی GitHub Pages

## گزارش پیاده‌سازی

### branchها

- `main`: شاخه‌ی پایدار و protected برای انتشار نهایی
- `dev`: شاخه‌ی ادغام کارهای روزمره و آماده‌سازی release
- `feature/layout`: ساخت layout، sidebar، cards و visual graph
- `feature/content`: نوشتن محتوای گزارش، timeline و پاسخ سوال‌ها
- `hotfix/deploy`: اصلاح مسیر artifact و جزئیات deploy

### conflictها

در این پروژه دو conflict در زمان merge به‌صورت دستی resolve شد:

1. conflict اول بین کارهای layout و content روی ساختار صفحه و متن‌های گزارش
2. conflict دوم بین تغییرات README و workflow مربوط به GitHub Pages

### commitها

commitهای زیر به‌عنوان تغییرات معنادار در مسیر پیاده‌سازی در نظر گرفته شده‌اند:

1. bootstrap static repository with branch planning and structure
2. add dashboard shell
3. add project graph
4. refine cards and spacing
5. write branch strategy copy
6. add commit timeline data
7. add answer set
8. wire tab switching
9. render FAQ cards
10. fix Pages artifact path
11. tune accessibility labels
12. resolve first merge conflict
13. resolve second merge conflict
14. protect release branch
15. publish README report with Git answers
16. final visual polish
17. balance sidebar contrast
18. add Pages URL placeholder
19. validate static file paths
20. finalize submission copy
21. ship the static frontend

## GitHub Pages

آدرس نهایی بعد از push و فعال‌سازی Pages روی شاخه‌ی main:

`https://<username>.github.io/selab-hw1/`

## پاسخ پرسش‌ها

### 1) پوشه‌ی `.git` چیست؟

پوشه‌ی `.git` مخزن داخلی Git است. metadataهای مهم مثل objectها، referenceها، HEAD، config، index و history در آن ذخیره می‌شود. این پوشه با `git init` ساخته می‌شود.

### 2) atomic بودن در atomic commit و atomic pull-request یعنی چه؟

atomic یعنی هر commit یا PR فقط یک تغییر منطقی کامل را شامل شود. اگر تغییر هنوز کامل نیست، نباید با تغییرات نامرتبط merge شود. این کار review، rollback و debugging را ساده‌تر می‌کند.

### 3) تفاوت fetch، pull، merge، rebase و cherry-pick

- `fetch`: فقط اطلاعات remote را دانلود می‌کند و branch محلی را تغییر نمی‌دهد.
- `pull`: معمولاً `fetch` + `merge` است و در بعضی حالت‌ها می‌تواند `rebase` هم باشد.
- `merge`: دو history را با هم ترکیب می‌کند و معمولاً merge commit می‌سازد.
- `rebase`: commitهای یک شاخه را روی پایه‌ای جدید بازنویسی می‌کند.
- `cherry-pick`: یک commit مشخص را از شاخه‌ای دیگر روی شاخه‌ی فعلی اعمال می‌کند.

### 4) تفاوت reset، revert، restore، switch و checkout

- `reset`: HEAD و در صورت نیاز index/worktree را جابه‌جا می‌کند.
- `revert`: یک commit جدید می‌سازد که اثر commit قبلی را خنثی می‌کند.
- `restore`: فایل‌ها را از index یا HEAD برمی‌گرداند.
- `switch`: برای جابه‌جایی بین branchها استفاده می‌شود.
- `checkout`: دستور قدیمی‌تر و چندمنظوره که هم برای branch switch و هم برای restore فایل‌ها به‌کار می‌رفت.

### 5) stage یا index چیست؟ stash چه می‌کند؟

stage یا index فضای میانی بین working tree و commit است. `stash` تغییرات ثبت‌نشده را موقتاً ذخیره می‌کند تا بتوان branch عوض کرد یا کار دیگری انجام داد و بعداً همان تغییرات را برگرداند.

### 6) مفهوم snapshot چیست و ارتباطش با commit چیست؟

snapshot یعنی تصویر کامل وضعیت فایل‌ها در یک لحظه. هر commit در Git یک snapshot از tree پروژه را نگه می‌دارد. توضیح رسمی Git:

https://git-scm.com/book/en/v2/Git-Internals-Git-Objects

### 7) تفاوت‌های local repository و remote repository

local repository روی سیستم خود کاربر است و برای development روزمره استفاده می‌شود. remote repository روی GitHub یا سرور دیگر قرار دارد و برای همکاری تیمی، backup و deployment به‌کار می‌رود.
