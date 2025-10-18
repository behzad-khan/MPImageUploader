# MPImageUploader

**MPImageUploader** is a lightweight JavaScript plugin that enables users to upload images with:
- ✅ Drag & Drop support  
- ✅ Image preview  
- ✅ Add button  
- ✅ Delete button  
- ✅ Support for loading an existing image (Edit Mode)

It’s a simple, dependency-free plugin designed for fast integration into any web project.

---

## ✅ Features
- Drag & Drop image upload  
- Preview selected image  
- Add button to select files manually  
- Delete button to remove the selected image  
- Load a pre-existing image when editing (via `existingImage` option)

---

## ✅ Installation

Include the plugin files directly using `<link>` and `<script>` tags:

```html
<link rel="stylesheet" href="MP-ImageUploader.css" />
<script src="MP-ImageUploader.js"></script>

## ✅ Basic Usage
<div id="imageUploader"></div>

<script>
  const uploader = new MPImageUploader("#imageUploader", {
    //existingImage: "/uploads/user-image.jpg" // existing image path
  });
</script>

