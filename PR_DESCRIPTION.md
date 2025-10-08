# Security fixes and Vue 3 support

## Summary
This PR addresses critical security vulnerabilities and adds Vue 3 support while maintaining backward compatibility with Vue 2.7+.

## Security Fixes
- ✅ Updated `linkifyjs` from 2.1.3 to 4.1.3 (addresses multiple security vulnerabilities)
- ✅ Fixed all dependabot security alerts (0 vulnerabilities remaining)
- ✅ Resolved ReDoS vulnerability in Vue 2 by supporting Vue 3 and requiring Vue 2.7+ minimum

## New Features
- ✅ Added Vue 3 support
- ✅ Maintained Vue 2.7+ backward compatibility
- ✅ Vue is now a peer dependency for better flexibility
- ✅ Added proper ES module default export

## Updated Dependencies

### Production
- `linkifyjs`: 2.1.3 → 4.1.3

### Development (all updated to latest stable versions)
- Babel 6 → Babel 7 with @babel/preset-env
- Webpack 1.x → 5.x
- ESLint 3.x → 8.x
- Karma 1.x → 6.x
- Mocha 3.x → 10.x
- Replaced deprecated PhantomJS with ChromeHeadless

## Code Changes
- Updated directive implementation with both Vue 2 and Vue 3 lifecycle hooks (`bind`/`update` for Vue 2, `mounted`/`updated` for Vue 3)
- Added proper ES module, CommonJS, AMD, and browser global exports
- Updated test suite for Vue 3 compatibility

## Documentation
- Updated README with usage examples for both Vue 2 and Vue 3
- Added CHANGELOG.md documenting all changes

## Testing
- ✅ Linting passes
- ✅ Build succeeds
- ✅ No security vulnerabilities

## Breaking Changes
- Vue is now a peer dependency (users must install Vue separately)
- Minimum Vue 2 version is now 2.7.0

## Note
This fork is published on npm as `vue-linkify-vue3` to avoid conflicts and is actively maintained at https://www.npmjs.com/package/vue-linkify-vue3

