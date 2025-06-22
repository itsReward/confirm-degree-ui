# Troubleshooting Guide

Common issues and solutions for the Con-firm platform.

## Development Issues

### Build Errors

#### Module Not Found Errors
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear npm cache
npm cache clean --force
```

#### Tailwind Classes Not Working
1. Check `tailwind.config.js` content paths
2. Ensure `@tailwind` directives are in `src/index.css`
3. Restart development server

#### Import Errors
1. Check file paths and extensions
2. Ensure exports are correct
3. Verify component file exists

### Runtime Errors

#### Authentication Issues
```javascript
// Check localStorage for token
console.log(localStorage.getItem('authToken'));

// Verify API endpoints
console.log(process.env.REACT_APP_API_BASE_URL);
```

#### API Connection Issues
1. Verify environment variables are set
2. Check CORS configuration on backend
3. Inspect network tab in browser dev tools
4. Ensure backend services are running

#### WebSocket Connection Failures
1. Check WebSocket URL format
2. Verify authentication token
3. Check firewall/proxy settings
4. Inspect browser console for errors

## Production Issues

### Build Failures

#### Out of Memory
```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max_old_space_size=4096"
npm run build
```

#### Missing Environment Variables
1. Check `.env.production` file exists
2. Verify all required variables are set
3. Ensure variables start with `REACT_APP_`

### Runtime Issues

#### Blank Page After Deployment
1. Check browser console for errors
2. Verify build files are served correctly
3. Check routing configuration
4. Ensure proper base URL in deployment

#### API Calls Failing
1. Check CORS configuration
2. Verify SSL certificates
3. Check network connectivity
4. Inspect response headers

### Performance Issues

#### Slow Loading
1. Check bundle size with `npm run build`
2. Implement code splitting
3. Optimize images
4. Enable gzip compression
5. Use CDN for static assets

#### Memory Leaks
1. Check for uncleaned event listeners
2. Verify useEffect cleanup functions
3. Monitor component unmounting
4. Check for circular references

## Common Error Messages

### "Cannot read property of undefined"
**Cause**: Accessing properties on undefined/null objects
**Solution**: Use optional chaining or default values
```javascript
// Instead of
user.name

// Use
user?.name || 'Unknown'
```

### "Network Error"
**Cause**: API connection issues
**Solution**:
1. Check API endpoint URLs
2. Verify backend is running
3. Check CORS configuration
4. Validate authentication

### "Unexpected token '<'"
**Cause**: Receiving HTML instead of JSON (usually 404 error)
**Solution**:
1. Check API endpoint paths
2. Verify routing configuration
3. Check server response

### "Loading chunk failed"
**Cause**: Code splitting chunks not loaded properly
**Solution**:
1. Check deployment static file serving
2. Verify correct base URL
3. Clear browser cache

## Browser Compatibility

### Internet Explorer Issues
**Note**: IE is not supported. Recommend modern browsers.

### Safari Issues
1. Check for Safari-specific CSS issues
2. Verify JavaScript features support
3. Test on actual Safari, not just Webkit

### Mobile Browser Issues
1. Test on actual devices
2. Check viewport meta tag
3. Verify touch event handling
4. Test different screen sizes

## Performance Debugging

### React Developer Tools
1. Install React DevTools browser extension
2. Use Profiler to identify slow components
3. Check component re-renders
4. Monitor props and state changes

### Network Analysis
1. Open browser Network tab
2. Check API response times
3. Identify large resources
4. Monitor failed requests

### Bundle Analysis
```bash
# Analyze bundle size
npm install -g webpack-bundle-analyzer
npx webpack-bundle-analyzer build/static/js/*.js
```

## Testing Issues

### Test Failures
```bash
# Run tests in watch mode
npm test

# Run specific test file
npm test -- Dashboard.test.js

# Run tests with coverage
npm test -- --coverage
```

### Mock Issues
1. Check mock implementations
2. Verify mock paths
3. Clear mock cache between tests
4. Check async test handling

## Getting Help

### Debug Information to Collect
1. Browser and version
2. Error messages (full stack trace)
3. Steps to reproduce
4. Environment (development/production)
5. Recent changes made

### Useful Commands
```bash
# Check versions
node --version
npm --version

# Verbose build output
npm run build --verbose

# Check environment variables
npm run start -- --verbose

# Clear all caches
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Resources
- [React Documentation](https://reactjs.org/docs)
- [Create React App Troubleshooting](https://create-react-app.dev/docs/troubleshooting)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/docs)

## Contact Support

For additional help:
1. Check existing GitHub issues
2. Search documentation
3. Create detailed bug report
4. Include reproduction steps and environment details
