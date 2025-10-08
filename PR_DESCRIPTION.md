# Security fixes and Vue 3 support

## Summary
This PR addresses critical security vulnerabilities and adds Vue 3 support while maintaining backward compatibility with Vue 2.7+. All dependencies have been modernized and the package is now properly bundled for use in any environment.

## Security Fixes
- ✅ Updated `linkifyjs` from 2.1.3 to 4.1.3 (addresses multiple security vulnerabilities)
- ✅ Updated `linkify-html` to 4.3.2 (separate package in v4.x)
- ✅ Fixed all dependabot security alerts (0 vulnerabilities remaining)
- ✅ Resolved ReDoS vulnerability in Vue 2 by supporting Vue 3 and requiring Vue 2.7+ minimum

## New Features
- ✅ Added Vue 3 support
- ✅ Maintained Vue 2.7+ backward compatibility
- ✅ Vue is now a peer dependency for better flexibility
- ✅ Added proper ES module default export
- ✅ Properly bundled with Webpack - no external dependencies needed at runtime

## Updated Dependencies

### Production
- `linkifyjs`: 2.1.3 → 4.3.2
- `linkify-html`: 4.3.2 (new, required by linkifyjs v4.x)
- Dependencies are now bundled into the output file

### Development (all updated to latest stable versions)
- Babel 6 → Babel 7 with @babel/preset-env
- Webpack 1.x → 5.x (now used for bundling instead of just Babel)
- ESLint 3.x → 8.x
- Karma 1.x → 6.x
- Mocha 3.x → 10.x
- Replaced deprecated PhantomJS with ChromeHeadless

## Code Changes
- Updated directive implementation with both Vue 2 and Vue 3 lifecycle hooks (`bind`/`update` for Vue 2, `mounted`/`updated` for Vue 3)
- Added proper ES module, CommonJS, AMD, and browser global exports via Webpack UMD build
- Fixed module resolution issues - linkifyjs is now bundled into the output
- Updated test suite for Vue 3 compatibility
- Configured Webpack to properly bundle all dependencies

## Build System
- Switched from Babel-only transpilation to Webpack bundling
- Created webpack.config.js for UMD build
- Output is now a single, self-contained bundle
- Supports all module systems: CommonJS, AMD, ES modules, and browser globals

## Documentation
- Updated README with usage examples for both Vue 2 and Vue 3
- Added CHANGELOG.md documenting all changes

## Testing
- ✅ Linting passes
- ✅ Build succeeds with Webpack
- ✅ No security vulnerabilities (npm audit shows 0 vulnerabilities)
- ✅ No module resolution errors

## Breaking Changes
- Vue is now a peer dependency (users must install Vue separately)
- Minimum Vue 2 version is now 2.7.0
- Package is now self-contained - linkifyjs is bundled (no need to install separately)

## Version History
- **v2.0.0**: Initial security updates and Vue 3 support
- **v2.0.1**: Fixed ES module default export issue
- **v2.0.2**: Fixed linkifyjs bundling - resolved "Could not resolve linkifyjs/html" error

## Note
This fork is published on npm as `vue-linkify-vue3` to avoid conflicts and is actively maintained at https://www.npmjs.com/package/vue-linkify-vue3

Users can install and use it immediately:
```bash
npm install vue-linkify-vue3
```

```js
import linkify from 'vue-linkify-vue3'
app.directive('linkified', linkify)  // Vue 3
// or
Vue.directive('linkified', linkify)  // Vue 2.7+
```

