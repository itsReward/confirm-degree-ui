# Con-firm Degree Attestation Platform

A secure, blockchain-based certificate verification platform built with React.js.

## 🚀 Features

- **Certificate Verification**: Upload and verify degree certificates with AI-powered analysis
- **Blockchain Security**: Immutable verification records stored on blockchain
- **Multi-Role Support**: Separate interfaces for employers, universities, and administrators
- **Real-time Updates**: WebSocket integration for live status updates
- **Payment Integration**: Support for multiple payment methods
- **Analytics Dashboard**: Comprehensive insights and reporting

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router, React Query
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast
- **Form Handling**: React Hook Form
- **Testing**: Jest, React Testing Library

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd confirm-degree-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.development
   # Edit .env.development with your configuration
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

## 🔧 Configuration

### Environment Variables

```env
REACT_APP_API_BASE_URL=http://localhost:8000/api/v1
REACT_APP_GATEWAY_URL=http://localhost:8080
REACT_APP_WS_URL=ws://localhost:8000/ws
REACT_APP_ENVIRONMENT=development
```

### API Integration

The application integrates with:
- Certificate Verification API (`/api/v1/verify/`)
- University Portal API (`/api/v1/degrees/`)
- Employer Portal API (`/api/v1/verifications/`)
- Admin API (`/api/v1/admin/`)

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── common/          # Reusable components
│   ├── layout/          # Layout components
│   ├── dashboard/       # Dashboard components
│   ├── verification/    # Verification workflow
│   ├── university/      # University portal
│   ├── admin/          # Admin interface
│   └── auth/           # Authentication
├── hooks/              # Custom React hooks
├── services/           # API services
├── utils/              # Utility functions
├── contexts/           # React contexts
└── styles/             # CSS files
```

## 🎨 Design System

### Colors
- **Primary Green**: #059669 (instills trust and security)
- **Background**: White and light gray
- **Text**: Gray scale for hierarchy

### Typography
- **Font Family**: Roboto
- **Weights**: 300, 400, 500, 600, 700

### Components
- Modern, clean corporate design
- Consistent spacing and shadows
- Responsive design for all devices

## 📱 User Roles

### Employers
- Verify certificate authenticity
- View verification history
- Make payments for verification services

### Universities
- Submit new degree certificates
- Manage existing degrees
- View analytics and reports

### Administrators
- Manage university registrations
- Monitor system health
- Access platform-wide analytics

## 🔒 Security Features

- JWT-based authentication
- Role-based access control
- File upload validation
- XSS protection
- CSRF protection

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test Dashboard.test.js
```

## 📦 Building for Production

```bash
# Create production build
npm run build

# Serve production build locally
npx serve -s build
```

## 🚀 Deployment

### Docker

```bash
# Build Docker image
docker build -t confirm-degree-ui .

# Run container
docker run -p 3000:80 confirm-degree-ui
```

### Using Docker Compose

```bash
docker-compose up -d
```

## 📊 Performance

- Lazy loading for components
- Image optimization
- Bundle size optimization
- Caching strategies
- CDN integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Check the [documentation](./docs/)
- Open an issue on GitHub
- Contact the development team

## 🔄 Updates

See [CHANGELOG.md](./CHANGELOG.md) for version history and updates.
