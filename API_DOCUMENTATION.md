# API Documentation

## Overview

The Ignite Company Showcase application is a client-side React application that does not require a backend API. However, this document outlines the structure for potential API integration and data management patterns.

## Current Architecture

### Client-Side Data Management
- Static content rendering
- Client-side routing
- No external API dependencies
- Self-contained application

### Data Flow
```
User Interaction → React Components → State Management → UI Updates
```

## Future API Integration

### Recommended API Structure

#### Base Configuration
```typescript
// API Configuration
const API_CONFIG = {
  baseURL: process.env.VITE_API_URL || 'https://api.ignite.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}
```

#### Company Data Endpoints

##### Get All Companies
```typescript
GET /api/companies
Response: {
  companies: [
    {
      id: string,
      name: string,
      slug: string,
      description: string,
      logo: string,
      heroImage: string,
      services: Service[],
      contact: ContactInfo
    }
  ]
}
```

##### Get Company by Slug
```typescript
GET /api/companies/{slug}
Response: {
  company: {
    id: string,
    name: string,
    slug: string,
    description: string,
    fullDescription: string,
    logo: string,
    heroImage: string,
    services: Service[],
    features: Feature[],
    testimonials: Testimonial[],
    contact: ContactInfo,
    socialMedia: SocialMedia
  }
}
```

#### Service Data Structure
```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing?: PricingTier[];
}

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  benefits: string[];
}

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  website?: string;
}

interface SocialMedia {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
}
```

### API Integration Patterns

#### TanStack Query Implementation
```typescript
// hooks/useCompanies.ts
import { useQuery } from '@tanstack/react-query';

export const useCompanies = () => {
  return useQuery({
    queryKey: ['companies'],
    queryFn: async () => {
      const response = await fetch('/api/companies');
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useCompany = (slug: string) => {
  return useQuery({
    queryKey: ['company', slug],
    queryFn: async () => {
      const response = await fetch(`/api/companies/${slug}`);
      return response.json();
    },
    enabled: !!slug,
  });
};
```

#### API Client Implementation
```typescript
// lib/api-client.ts
class ApiClient {
  private baseURL: string;
  private timeout: number;

  constructor(baseURL: string, timeout: number = 10000) {
    this.baseURL = baseURL;
    this.timeout = timeout;
  }

  async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const controller = new AbortController();
    
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export const apiClient = new ApiClient(API_CONFIG.baseURL);
```

### Error Handling

#### API Error Types
```typescript
interface ApiError {
  message: string;
  status: number;
  code: string;
  details?: any;
}

class ApiException extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string,
    public details?: any
  ) {
    super(message);
    this.name = 'ApiException';
  }
}
```

#### Error Boundary Implementation
```typescript
// components/ErrorBoundary.tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### Loading States

#### Loading Component
```typescript
// components/LoadingSpinner.tsx
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`} />
      {text && <p className="mt-2 text-sm text-gray-600">{text}</p>}
    </div>
  );
};
```

### Caching Strategy

#### Cache Configuration
```typescript
// lib/query-client.ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
    mutations: {
      retry: 1,
    },
  },
});
```

### Environment Configuration

#### Environment Variables
```typescript
// types/env.ts
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_ENVIRONMENT: 'development' | 'staging' | 'production';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

#### Environment Setup
```typescript
// lib/config.ts
export const config = {
  api: {
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    timeout: 10000,
  },
  app: {
    name: import.meta.env.VITE_APP_NAME || 'Ignite Company Showcase',
    version: import.meta.env.VITE_APP_VERSION || '1.0.0',
    environment: import.meta.env.VITE_ENVIRONMENT || 'development',
  },
};
```

### Testing API Integration

#### Mock API for Development
```typescript
// lib/mock-api.ts
export const mockCompanies = [
  {
    id: '1',
    name: 'MwanaWev',
    slug: 'mwanawev',
    description: 'Innovation Hub',
    // ... other properties
  },
  // ... other companies
];

export const mockApiClient = {
  get: async (endpoint: string) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    switch (endpoint) {
      case '/api/companies':
        return { companies: mockCompanies };
      case '/api/companies/mwanawev':
        return { company: mockCompanies[0] };
      default:
        throw new Error('Endpoint not found');
    }
  },
};
```

#### API Testing Utilities
```typescript
// __tests__/utils/api-test-utils.ts
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export const renderHookWithQueryClient = <T,>(
  hook: () => T
) => {
  return renderHook(hook, { wrapper: createWrapper() });
};
```

### Security Considerations

#### API Security
- HTTPS enforcement
- CORS configuration
- Rate limiting implementation
- Input validation and sanitization
- Authentication token management

#### Data Protection
- No sensitive data in client code
- Secure API communication
- Environment variable protection
- Content Security Policy headers

### Performance Optimization

#### API Performance
- Request deduplication
- Response caching
- Pagination for large datasets
- Compression for API responses
- CDN integration for static assets

#### Client-Side Optimization
- Lazy loading for API data
- Optimistic updates
- Background refetching
- Error retry mechanisms
- Offline support with service workers

This documentation provides a comprehensive guide for API integration when the application requires backend services. The current implementation is fully functional as a static application, but these patterns can be implemented when API integration becomes necessary.
