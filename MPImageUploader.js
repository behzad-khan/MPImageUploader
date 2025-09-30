(function () {
  function fileListFromFiles(files) {
    const dt = new DataTransfer();
    for (const f of files) dt.items.add(f);
    return dt.files;
  }

  class ImageUploader {
    constructor(selector, options = {}) {
      this.opt = Object.assign(
        {
          existingImage: null,
          emptyText: "تصویر انتخاب نشده",
        },
        options
      );

      if (typeof selector === "string")
        this.inputs = Array.from(document.querySelectorAll(selector));
      else if (selector instanceof HTMLElement) this.inputs = [selector];
      else this.inputs = [];

      this.inputs
        .filter((inp) => inp && inp.type === "file")
        .forEach((inp) => this._enhance(inp));
    }

    _enhance(input) {
      input.classList.add("mp-iu-hidden-input");

      const root = document.createElement("div");
      root.className = "mp-iu-container";

      const box = document.createElement("div");
      box.className = "mp-iu-box";

      const empty = document.createElement("div");
      empty.className = "mp-iu-empty";
      const emptyText = document.createElement("div");
      emptyText.className = "mp-iu-empty-text";
      emptyText.textContent = this.opt.emptyText;
      empty.appendChild(emptyText);

      const img = document.createElement("img");
      img.className = "mp-iu-img";
      img.alt = "پیش‌نمایش تصویر";

      const btnChoose = document.createElement("button");
      btnChoose.type = "button";
      btnChoose.className = "mp-iu-btn mp-iu-btn-choose";
      btnChoose.title = "انتخاب تصویر";
      btnChoose.setAttribute("aria-label", "انتخاب تصویر");

      const btnClear = document.createElement("button");
      btnClear.type = "button";
      btnClear.className = "mp-iu-btn mp-iu-btn-clear";
      btnClear.title = "حذف تصویر";
      btnClear.setAttribute("aria-label", "حذف تصویر");

      const meta = document.createElement("div");
      meta.className = "mp-iu-meta";
      meta.innerHTML =
        "<span>برای انتخاب تصویر روی باکس کلیک کنید یا فایل را در همین بخش رها کنید.</span>";

      box.appendChild(empty);
      box.appendChild(img);
      box.appendChild(btnChoose);
      box.appendChild(btnClear);
      root.appendChild(box);
      root.appendChild(meta);
      input.insertAdjacentElement("afterend", root);

      if (this.opt.existingImage) {
        this._setPreview(img, this.opt.existingImage, root);
      }

      box.addEventListener("click", (e) => {
        if (e.target === btnChoose || e.target === btnClear) return;
        input.click();
      });

      input.addEventListener("change", () => {
        const file = input.files && input.files[0];
        if (!file) {
          if (root.classList.contains("mp-iu-has-image")) {
            this._clear(img, input, root, false);
          }
          return;
        }
        this._readAsDataURL(file).then((dataUrl) => {
          this._setPreview(img, dataUrl, root);
        });
      });

      btnChoose.addEventListener("click", () => input.click());
      btnClear.addEventListener("click", () => this._clear(img, input, root));

      // Drag & Drop
      box.addEventListener("dragover", (e) => {
        e.preventDefault();
        root.classList.add("mp-iu-dragover");
      });
      box.addEventListener("dragleave", (e) => {
        e.preventDefault();
        root.classList.remove("mp-iu-dragover");
      });
      box.addEventListener("drop", (e) => {
        e.preventDefault();
        root.classList.remove("mp-iu-dragover");
        if (!e.dataTransfer.files || !e.dataTransfer.files.length) return;
        input.files = fileListFromFiles(e.dataTransfer.files);
        input.dispatchEvent(new Event("change", { bubbles: true }));
      });
    }

    _readAsDataURL(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = (e) => reject(e);
        reader.readAsDataURL(file);
      });
    }

    _setPreview(img, src, root) {
      img.src = src;
      root.classList.add("mp-iu-has-image");
    }

    _clear(img, input, root, triggerChange = true) {
      img.src = "";
      root.classList.remove("mp-iu-has-image");
      input.value = "";
      if (triggerChange) {
        input.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  }

  window.ImageUploader = ImageUploader;
})();
