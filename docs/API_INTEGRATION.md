# API Integration Guide

This document describes how the frontend integrates with the backend APIs.

## API Architecture

The frontend communicates with three main services:
1. **Certificate Verification API** - Direct certificate processing
2. **API Gateway** - Centralized routing and authentication
3. **WebSocket Service** - Real-time updates

## Authentication

All authenticated requests include a Bearer token:
```javascript
Authorization: Bearer <jwt-token>
```

## API Endpoints

### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `POST /auth/logout` - User logout
- `GET /auth/profile` - Get user profile

### Certificate Verification
- `POST /api/v1/verify/` - Verify certificate
- `POST /api/v1/verify/batch` - Batch verification
- `POST /api/v1/verify/extract-hash` - Extract hash

### University Portal
- `POST /api/v1/degrees/submit` - Submit degree
- `GET /api/v1/degrees/` - List degrees
- `PUT /api/v1/degrees/:id` - Update degree
- `POST /api/v1/degrees/:id/revoke` - Revoke degree

### Employer Portal
- `GET /api/v1/verifications/` - Verification history
- `GET /api/v1/verifications/:id` - Get verification

### Admin Portal
- `GET /api/v1/admin/universities` - List universities
- `GET /api/v1/admin/health` - System health
- `GET /api/v1/admin/analytics` - Analytics data

## Error Handling

The frontend handles various HTTP status codes:
- `400` - Bad Request
- `401` - Unauthorized (redirect to login)
- `403` - Forbidden
- `404` - Not Found
- `422` - Validation Error
- `429` - Rate Limited
- `500` - Server Error

## Request/Response Examples

### Certificate Verification
```javascript
// Request
const formData = new FormData();
formData.append('file', certificateFile);
formData.append('use_enhanced_extraction', 'true');

// Response
{
  "verification_id": "ver_123",
  "certificate_number": "BSc-12700",
  "verification_status": "VERIFIED",
  "confidence": 0.96,
  "student_name": "John Doe",
  "degree_name": "Bachelor of Science",
  "university_name": "Tech University"
}
```

### Degree Submission
```javascript
// Request
{
  "student_name": "John Doe",
  "student_id": "ST2024001",
  "degree_name": "Bachelor of Science in Computer Science",
  "certificate_number": "BSc-12700",
  "issuance_date": "2024-06-15"
}

// Response
{
  "success": true,
  "degree_id": "deg_456",
  "blockchain_hash": "0x1234...abcd"
}
```

## Rate Limiting

The API implements rate limiting:
- Default: 60 requests per minute
- Burst: 120 requests per minute
- Headers returned: `X-RateLimit-Limit`, `X-RateLimit-Remaining`

## WebSocket Integration

Real-time updates for:
- Verification status changes
- System notifications
- Progress updates

```javascript
const ws = new WebSocket('wss://api.confirm-degrees.com/ws?token=<jwt>');

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.type === 'verification_complete') {
    // Handle verification completion
  }
};
```

## Testing API Integration

Use the provided mock data for development:
- Mock verification responses
- Simulated delays
- Error scenarios

## Production Considerations

- Configure proper CORS settings
- Use HTTPS for all requests
- Implement request retry logic
- Add request/response logging
- Monitor API performance
