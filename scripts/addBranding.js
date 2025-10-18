/*!

* This script automatically adds or updates branding information
* including header in JS/CSS files, developer info in README files,
* and copyright in LICENSE. It ensures your name appears in all
* important project files.
*
* این اسکریپت به‌صورت خودکار اطلاعات برندینگ را اضافه یا به‌روز می‌کند،
* شامل هدر در فایل‌های JS/CSS، اطلاعات توسعه‌دهنده در README و
* حق نشر در LICENSE. با این کار نام شما در تمام فایل‌های مهم پروژه
* درج می‌شود.
  */
const fs = require("fs");
const path = require("path");

// اطلاعات برندینگ
const BRAND_NAME_EN = "Mehrdad Pakniat";
const BRAND_NAME_FA = "مهرداد پاک‌نیت";
const VERSION = "1.0.0";
const GITHUB_URL = "https://github.com/behzad-khan/MPImageUploader";
const YEAR = new Date().getFullYear();

// فایل‌های JS و CSS که Header دارند
const filesToBrand = ["src/MP-ImageUploader.js", "src/MP-ImageUploader.css"];

// اضافه کردن Header و Console Branding
filesToBrand.forEach((file) => {
  const filePath = path.join(__dirname, "..", file);
  try {
    let content = fs.readFileSync(filePath, "utf8");

    const header = `/*!
 * MP ImageUploader v${VERSION}
 * (c) ${YEAR} ${BRAND_NAME_EN} (${BRAND_NAME_FA})
 * License: MIT
 * GitHub: ${GITHUB_URL}
 */
`;

    // اگر فایل JS است، Console Branding اضافه شود
    if (file.endsWith(".js")) {
      const consoleBranding = `
console.log(
  "%cMP ImageUploader v${VERSION} - Developed by ${BRAND_NAME_EN} (${BRAND_NAME_FA})",
  "color: #1e90ff; font-weight: bold;"
);
`;
      content = content.startsWith("/*!")
        ? content.replace(/\/\*![\s\S]*?\*\//, header.trim())
        : header + "\n" + content;

      // اگر consoleBranding قبلاً وجود ندارد، اضافه کن
      if (!content.includes("Developed by")) {
        content += consoleBranding;
      }
    } else {
      content = content.startsWith("/*!")
        ? content.replace(/\/\*![\s\S]*?\*\//, header.trim())
        : header + "\n" + content;
    }

    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ Header and branding updated in ${file}`);
  } catch (err) {
    console.warn(`⚠️ Could not process ${file}: ${err.message}`);
  }
});

// بروزرسانی README.md
const readmeFiles = ["README.md", "README.fa.md"];
readmeFiles.forEach((file) => {
  const filePath = path.join(__dirname, "..", file);
  try {
    let content = fs.readFileSync(filePath, "utf8");

    if (file.includes(".fa")) {
      const devText = `👨‍💻 تهیه‌کننده: **${BRAND_NAME_FA} (${BRAND_NAME_EN})**`;
      content = content.replace(/👨‍💻.+/g, devText);
      if (!content.includes("👨‍💻")) content = devText + "\n\n" + content;
    } else {
      const devText = `👨‍💻 Developed by **${BRAND_NAME_EN} (${BRAND_NAME_FA})**`;
      content = content.replace(/👨‍💻.+/g, devText);
      if (!content.includes("👨‍💻")) content = devText + "\n\n" + content;
    }

    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ ${file} updated with branding info`);
  } catch (err) {
    console.warn(`⚠️ Could not process ${file}: ${err.message}`);
  }
});

// بروزرسانی License
const licensePath = path.join(__dirname, "..", "LICENSE");
try {
  let licenseContent = fs.readFileSync(licensePath, "utf8");
  licenseContent = licenseContent.replace(
    /Copyright \(c\) \d+ .*/,
    `Copyright (c) ${YEAR} ${BRAND_NAME_EN} (${BRAND_NAME_FA})`
  );
  fs.writeFileSync(licensePath, licenseContent, "utf8");
  console.log("✅ LICENSE updated with branding info");
} catch (err) {
  console.warn(`⚠️ Could not process LICENSE: ${err.message}`);
}
