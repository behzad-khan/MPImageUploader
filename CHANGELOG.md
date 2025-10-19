# Changelog

All notable changes to this project will be documented in this file.

The format is based on **Keep a Changelog**,  
and this project adheres to **Semantic Versioning (SemVer)**.

---

## [1.1.2] - 2025-10-19

### Fixed

- Minor bug fixes and stability improvements in multi-language loading.
- Corrected issue with `fetch()` failing silently when URL is invalid.
- Improved fallback mechanism for missing JSON files.

---

## [1.1.1] - 2025-10-19

### Added

- Option to provide direct URL to external JSON translation file (`multilingual.url`).
- Automatic fallback to built-in texts if external JSON is not accessible.
- `texts` option allows manual override of UI texts.
- Better error handling and warnings in console when JSON file cannot be loaded.

### Changed

- Refactored language loading logic for clarity and maintainability.

### Fixed

- Corrected minor issues with preview and button labels not updating dynamically.

---

## [1.1.0] - 2025-10-19

### Added

- Multi-language support system based on external JSON translation file.
- Built-in fallback texts included in JavaScript in case JSON file is inaccessible.
- All UI texts (placeholders, button labels, meta messages) are now dynamically loaded.

### Changed

- No breaking changes. Core functionality (Preview, Drag & Drop, Add/Delete) remains the same.

---

## [1.0.0] - 2025-10-11

### Initial Release

- Basic image upload with live preview.
- Drag & Drop support.
- Choose and Clear buttons.
