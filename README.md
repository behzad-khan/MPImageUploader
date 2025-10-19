# MPImageUploader

👨‍💻 Developed by **Mehrdad Pakniat (مهرداد پاک‌نیت)**

🌍 Languages: [فارسی](./README.fa.md)

## Demo

You can try MP ImageUploader live on GitHub Pages:

🌐 [View Demo](https://behzad-khan.github.io/MPImageUploader/)

**MPImageUploader** is a lightweight JavaScript plugin that enables users to upload images with:

- ✅ Drag & Drop support
- ✅ Image preview
- ✅ Add button
- ✅ Delete button
- ✅ Support for loading an existing image (Edit Mode)
- ✅ Multilingual support (English, Persian, or custom JSON)
- ✅ Option to load language texts from external JSON via URL

It’s a simple, dependency-free plugin designed for fast integration into any web project.

---

## ✅ Features

- Drag & Drop image upload
- Preview selected image
- Add button to select files manually
- Delete button to remove the selected image
- Load a pre-existing image when editing (via `existingImage` option)
- Multilingual text support:
  - Use built-in English or Persian
  - Load from local JSON file (`lang/en.json`, `lang/fa.json`)
  - Load from external URL (`multilingual.url` option)

---

## ✅ Installation

Include the plugin files directly using `<link>` and `<script>` tags:

```html
<link rel="stylesheet" href="dist/MP-ImageUploader.min.css" />
<script src="dist/MP-ImageUploader.min.js"></script>
```

✅ Basic Usage

<div id="imageUploader"></div>

<script>
  // Example: Basic usage
  const uploader = new MPImageUploader("#imageUploader", {
    // existingImage: "/uploads/user-image.jpg" // optional existing image
  });

  // Example: Multilingual via local JSON
  const uploaderFa = new MPImageUploader("#imageUploader", {
    multilingual: { lang: "fa" } // uses ./lang/fa.json
  });

  // Example: Multilingual via external URL
  const uploaderExternal = new MPImageUploader("#imageUploader", {
    multilingual: { url: "https://mehpak.ir/plugins/mp-imageuploader/lang/fa.json" }
  });

  </script>
