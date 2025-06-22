# Deployment Guide

This guide covers deploying the Con-firm Degree Attestation Platform frontend.

## Prerequisites

- Node.js 16+
- npm 8+
- Docker (optional)

## Environment Configuration

### Development
```bash
cp .env.example .env.development
# Edit with your development API endpoints
```

### Production
```bash
cp .env.example .env.production
# Edit with your production API endpoints
```

## Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Deployment Options

### 1. Static Hosting (Recommended)

Deploy the `build` folder to:
- **Netlify**: Drag and drop deployment
- **Vercel**: Git integration
- **AWS S3 + CloudFront**: Scalable CDN
- **GitHub Pages**: Free hosting

### 2. Docker Deployment

```bash
# Build image
docker build -f docker/Dockerfile -t confirm-degree-ui .

# Run container
docker run -p 3000:80 confirm-degree-ui
```

### 3. Docker Compose

```bash
cd docker
docker-compose up -d
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_API_BASE_URL` | Backend API URL | `https://api.confirm-degrees.com/api/v1` |
| `REACT_APP_GATEWAY_URL` | API Gateway URL | `https://gateway.confirm-degrees.com` |
| `REACT_APP_WS_URL` | WebSocket URL | `wss://api.confirm-degrees.com/ws` |

## Performance Optimization

- Enable gzip compression
- Configure CDN caching
- Set appropriate cache headers
- Use HTTP/2
- Enable service worker (if needed)

## Monitoring

- Set up error tracking (Sentry)
- Configure analytics (Google Analytics)
- Monitor performance metrics
- Set up uptime monitoring

## Security Considerations

- Use HTTPS in production
- Configure CSP headers
- Set secure cookie flags
- Validate all environment variables
- Regular security updates

## Troubleshooting

### Build Issues
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall
- Check Node.js version compatibility

### Runtime Issues
- Check browser console for errors
- Verify API endpoint connectivity
- Check CORS configuration
- Validate environment variables
