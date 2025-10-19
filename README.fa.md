# پلاگین MP ImageUploader

👨‍💻 تهیه‌کننده: **مهرداد پاک‌نیت (Mehrdad Pakniat)**

🌍 زبان‌ها: [English](./README.md)

## Demo

شما می‌توانید MP ImageUploader را بصورت زنده در GitHub Pages مشاهده کنید:

🌐 [نسخه فارسی](https://behzad-khan.github.io/MPImageUploader/index.fa.html)

**MPImageUploader** یک پلاگین سبک و مستقل جاوااسکریپتی است که امکان آپلود تصویر را فراهم می‌کند:

- ✅ پیش‌نمایش تصویر قبل از آپلود
- ✅ پشتیبانی از کشیدن و رها کردن (Drag & Drop)
- ✅ دکمه افزودن تصویر
- ✅ دکمه حذف تصویر
- ✅ نمایش تصویر موجود در حالت ویرایش (`existingImage`)
- ✅ پشتیبانی از چندزبانگی با گزینه `multilingual` یا فایل JSON

---

## 📌 ویژگی‌های جدید (v1.1.1)

- امکان ارائه فایل JSON خارجی برای متن‌های چندزبانگی:
  ```javascript
  const uploader = new MPImageUploader("#imageUploader", {
    multilingual: { lang: "fa", url: "/lang/fa.json" }
  });
  اگر آدرس فایل JSON معتبر نباشد، پلاگین از متن‌های پیشفرض داخلی استفاده می‌کند.
  ```

امکان override دستی متن‌ها با گزینه texts.

بهبود fallback داخلی برای متن‌ها و دکمه‌ها.

📦 نصب

با استفاده از فایل‌های آماده CSS و JS در پروژه خود:

<link rel="stylesheet" href="dist/MP-ImageUploader.min.css" />
<script src="dist/MP-ImageUploader.min.js"></script>

📌 نحوه استفاده (Basic Usage)

<div id="imageUploader"></div>

<script>
  const uploader = new MPImageUploader("#imageUploader");
</script>

✏️ استفاده در حالت ویرایش با تصویر موجود:

<div id="imageUploader"></div>

<script>
  const uploader = new MPImageUploader("#imageUploader", {
    existingImage: "/uploads/sample.jpg"
  });
</script>

✏️ استفاده از فایل JSON خارجی برای چندزبانگی:

<div id="imageUploader"></div>

<script>
  const uploader = new MPImageUploader("#imageUploader", {
    multilingual: { lang: "fa", url: "/lang/fa.json" }
  });
</script>

📁 ساختار پیشنهادی پوشه‌ها:

MPImageUploader/
├─ src/
│ ├─ MP-ImageUploader.js
│ ├─ MP-ImageUploader.css
├─ dist/
│ ├─ MP-ImageUploader.min.js
│ ├─ MP-ImageUploader.min.css
├─ lang/
│ ├─ en.json
│ ├─ fa.json
├─ README.md
├─ README.fa.md

⚙️ بیلد و خروجی نهایی (در صورت استفاده از NPM):

npm install
npm run build

فایل‌های مینیفای شده در پوشه dist/ ساخته خواهند شد.
