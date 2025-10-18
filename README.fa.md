# پلاگین MP ImageUploader

🌍 زبان‌ها: [English](./README.md)

پلاگین **MP ImageUploader** یک کامپوننت ساده و کاربردی جاوااسکریپتی برای آپلود تصویر است که امکانات زیر را فراهم می‌کند:

✅ پیش‌نمایش تصویر قبل از آپلود  
✅ پشتیبانی از کشیدن و رها کردن (Drag & Drop)  
✅ دکمه افزودن تصویر  
✅ دکمه حذف تصویر  
✅ امکان نمایش تصویر موجود در حالت ویرایش (با گزینه `existingImage`)

---

## 📦 نحوه استفاده (Basic Usage)

```html
<link rel="stylesheet" href="dist/MP-ImageUploader.min.css" />
<script src="dist/MP-ImageUploader.min.js"></script>

<div id="imageUploader"></div>

<script>
  const uploader = new MPImageUploader("#imageUploader");
</script>
✏️ استفاده در حالت ویرایش با تصویر موجود در صورتی که در صفحه ویرایش هستید و
می‌خواهید تصویر قبلی نمایش داده شود:

<div id="imageUploader"></div>

<script>
  const uploader = new MPImageUploader("#imageUploader", {
    existingImage: "/uploads/sample.jpg",
  });
</script>
📁 ساختار پوشه‌ها (پیشنهادی) arduino Copy code MPImageUploader/ ├─ src/ │ ├─
MP-ImageUploader.js │ ├─ MP-ImageUploader.css ├─ dist/ │ ├─
MP-ImageUploader.min.js │ ├─ MP-ImageUploader.min.css ├─ README.md ├─
README.fa.md ⚙️ بیلد و خروجی نهایی (Build) در صورت استفاده از نسخه NPM و توسعه:
npm install npm run build فایل‌های مینیفای شده در پوشه dist/ ساخته خواهند شد.
```
