# Component Guide

This guide covers the structure and usage of components in the Con-firm platform.

## Directory Structure

```
src/components/
├── common/           # Reusable UI components
├── layout/           # Layout and navigation
├── dashboard/        # Dashboard components
├── verification/     # Certificate verification
├── university/       # University portal
├── admin/           # Admin interface
└── auth/            # Authentication
```

## Common Components

### Logo
```jsx
import Logo from '../common/Logo';

// Usage
<Logo size="default" />  // small, default, large
```

### StatusBadge
```jsx
import StatusBadge from '../common/StatusBadge';

// Usage
<StatusBadge
  status="verified"
  confidence={0.96}
  size="default"
/>
```

### LoadingSpinner
```jsx
import LoadingSpinner from '../common/LoadingSpinner';

// Usage
<LoadingSpinner size="default" message="Loading..." />
```

### ErrorBoundary
```jsx
import ErrorBoundary from '../common/ErrorBoundary';

// Usage
<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

### ConfirmationModal
```jsx
import ConfirmationModal from '../common/ConfirmationModal';

// Usage
<ConfirmationModal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  onConfirm={handleConfirm}
  title="Confirm Action"
  message="Are you sure you want to proceed?"
  type="warning"
/>
```

## Layout Components

### Navigation
The main navigation component automatically adapts based on user role:
- Employer: Dashboard, Verify Certificate, History
- University: Dashboard, Submit Degree, Manage Degrees, Analytics
- Admin: Dashboard, Universities, System Health, Analytics

### Layout
Wraps the entire application with navigation and provides consistent styling.

## Dashboard Components

### StatsCard
```jsx
import StatsCard from '../dashboard/StatsCard';

// Usage
<StatsCard
  title="Total Verifications"
  value="1,247"
  icon={CheckCircle}
  color="green"
  description="Certificates verified"
/>
```

### RecentActivity
Displays role-specific recent activities with real-time updates.

### QuickActions
Provides quick access to common actions based on user role.

## Verification Components

### FileUpload
```jsx
import FileUpload from '../verification/FileUpload';

// Usage
<FileUpload
  onFileSelect={handleFileSelect}
  accept=".png,.jpg,.jpeg,.pdf"
  maxSize={10485760}
  multiple={false}
/>
```

### PaymentSelector
```jsx
import PaymentSelector from '../verification/PaymentSelector';

// Usage
<PaymentSelector
  selectedMethod={paymentMethod}
  onMethodChange={setPaymentMethod}
  amount={10.00}
/>
```

### VerificationResults
```jsx
import VerificationResults from '../verification/VerificationResults';

// Usage
<VerificationResults
  result={verificationData}
  onDownloadReport={handleDownload}
  onShare={handleShare}
/>
```

## Authentication Components

### Login
Full-featured login form with validation and error handling.

### Register
Registration form with role selection and validation.

### ProtectedRoute
```jsx
import ProtectedRoute from '../auth/ProtectedRoute';

// Usage
<ProtectedRoute allowedRoles={['employer', 'admin']}>
  <YourProtectedComponent />
</ProtectedRoute>
```

## Styling Guidelines

### Tailwind Classes
Use consistent Tailwind utility classes:
- Primary green: `bg-green-600`, `text-green-600`
- Borders: `border-gray-200`, `border-green-200`
- Shadows: `shadow-sm`, `shadow-md`
- Rounded corners: `rounded-lg`, `rounded-md`

### Color System
- **Primary**: Green (#059669) for trust and security
- **Secondary**: Gray scale for hierarchy
- **Success**: Green variations
- **Warning**: Yellow/amber
- **Error**: Red variations

### Typography
- **Font Family**: Roboto
- **Headings**: `text-xl`, `text-2xl`, `text-3xl`
- **Body**: `text-sm`, `text-base`
- **Small**: `text-xs`

## State Management

### Context Usage
```jsx
// Auth Context
const { user, login, logout, loading } = useAuth();

// Notification Context
const { showSuccess, showError, showInfo } = useNotification();
```

### API Integration
```jsx
// Using custom hooks
const { data, loading, error } = useApi('/api/endpoint');
const mutation = useApiMutation('/api/endpoint', 'POST');
```

## Best Practices

1. **Component Composition**: Break down complex components into smaller, reusable pieces
2. **Props Interface**: Use descriptive prop names and provide default values
3. **Error Handling**: Always handle loading and error states
4. **Accessibility**: Include proper ARIA labels and keyboard navigation
5. **Responsive Design**: Ensure components work on all screen sizes
6. **Performance**: Use React.memo for expensive components
7. **Testing**: Write tests for complex logic and user interactions

## Adding New Components

1. Create component file in appropriate directory
2. Add to index.js if creating a module
3. Include TypeScript props interface (if using TypeScript)
4. Write unit tests
5. Update this documentation
6. Add to Storybook (if available)

## Common Patterns

### Loading States
```jsx
if (loading) {
  return <LoadingSpinner message="Loading data..." />;
}
```

### Error States
```jsx
if (error) {
  return (
    <div className="text-center py-8">
      <p className="text-red-600">{error}</p>
    </div>
  );
}
```

### Empty States
```jsx
if (!data?.length) {
  return (
    <div className="text-center py-8">
      <p className="text-gray-500">No data available</p>
    </div>
  );
}
```
