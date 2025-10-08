# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2025-10-08

### Security
- **FIXED:** Updated `linkifyjs` from ^2.1.3 to ^4.1.3 to address security vulnerabilities
- **FIXED:** Resolved all dependabot security alerts
- **FIXED:** Updated Vue to support both Vue 2.7+ and Vue 3 (addressing Vue 2 ReDoS vulnerability)

### Changed
- **BREAKING:** Vue is now a peer dependency instead of a direct dependency
- **BREAKING:** Minimum Vue 2 version is now 2.7.0
- Added support for Vue 3 while maintaining Vue 2.7+ compatibility
- Updated directive implementation to support both Vue 2 and Vue 3 lifecycle hooks
- Migrated from Babel 6 to Babel 7
- Updated all dev dependencies to latest stable versions:
  - Webpack 1.x → 5.x
  - Karma 1.x → 6.x
  - Mocha 3.x → 10.x
  - ESLint 3.x → 8.x
  - And many more...
- Replaced deprecated PhantomJS with ChromeHeadless for testing
- Updated test suite to work with both Vue 2 and Vue 3

### Added
- Babel configuration file (.babelrc) for modern ES6+ transpilation
- Updated ESLint configuration for modern JavaScript
- Comprehensive documentation for Vue 2 and Vue 3 usage in README

### Removed
- Removed Vue from direct dependencies (now peer dependency)
- Removed outdated babel-preset-babili
- Removed deprecated phantomjs-prebuilt

## [1.0.1] - Original Release
- Initial release with Vue 2.1.6 and linkifyjs 2.1.3

