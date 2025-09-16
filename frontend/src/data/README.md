# Website Content Data

This directory contains all the structured, typed content for the Innos IT company website. All content is organized using TypeScript interfaces for type safety and maintainability.

## Structure

```
src/
├── data/
│   ├── websiteContent.ts  # Main content data object
│   ├── index.ts          # Barrel exports
│   └── README.md         # This documentation
└── types/
    ├── websiteContent.ts  # TypeScript interfaces
    └── index.ts          # Barrel exports
```

## Usage

### Import Everything
```typescript
import websiteContent from '@/data/websiteContent';
// or
import { websiteContent } from '@/data';
```

### Import Specific Sections (Recommended for Tree-shaking)
```typescript
import { services, companyInfo, portfolio } from '@/data';
```

### Import Types
```typescript
import { Service, WebsiteContent, Feature } from '@/types';
```

## Examples

### Using Services in a Component
```typescript
'use client';
import { services } from '@/data';
import { Service } from '@/types';

export default function ServicesSection() {
  return (
    <div>
      {services.map((service: Service) => (
        <div key={service.id}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <ul>
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
```

### Using Company Information
```typescript
import { companyInfo } from '@/data';

export default function Hero() {
  return (
    <header>
      <h1>{companyInfo.name}</h1>
      <p>{companyInfo.tagline}</p>
      <div>
        <h2>Vision</h2>
        <p>{companyInfo.visionMission.vision}</p>
        <h2>Mission</h2>
        <p>{companyInfo.visionMission.mission}</p>
      </div>
    </header>
  );
}
```

## Available Content Sections

- **companyInfo**: Company name, tagline, vision/mission, tech stack
- **services**: Array of service offerings with features and categories
- **portfolio**: Project portfolio with URLs and descriptions
- **features**: Company highlights and benefits
- **milestones**: Company achievements and growth milestones
- **techSolutions**: Additional technology solutions offered
- **teamIntro**: Team introduction content for trust-building
- **seoContent**: SEO best practices and content guidelines
- **socialContact**: Social media and contact information guidance
- **responsivenessContent**: Mobile responsiveness importance content

## Adding New Content

### 1. Update TypeScript Interface
First, add new fields to the appropriate interface in `src/types/websiteContent.ts`:

```typescript
export interface WebsiteContent {
  // ... existing fields
  newSection: NewSectionType;
}

export interface NewSectionType {
  title: string;
  items: string[];
}
```

### 2. Add Content Data
Then add the actual content in `src/data/websiteContent.ts`:

```typescript
const websiteContent: WebsiteContent = {
  // ... existing content
  newSection: {
    title: "New Section Title",
    items: ["Item 1", "Item 2", "Item 3"]
  }
};
```

### 3. Export for Tree-shaking (Optional)
Add the new section to the named exports at the bottom of `websiteContent.ts`:

```typescript
export const { 
  companyInfo, 
  services, 
  portfolio, 
  // ... existing exports
  newSection  // Add your new section
} = websiteContent;
```

## TypeScript Benefits

- **IntelliSense**: VS Code will provide autocompletion for all content fields
- **Type Safety**: Catch typos and missing fields at compile time
- **Refactoring**: Easily rename fields across the entire codebase
- **Documentation**: Self-documenting code with interface definitions

## Content Categories

The content is organized into logical sections:

1. **Company Information** - Core company details and messaging
2. **Services** - Service offerings with detailed features
3. **Portfolio** - Completed projects and case studies
4. **Marketing Content** - Features, benefits, and selling points
5. **SEO Content** - Content guidelines and best practices
6. **Technical Content** - Developer-focused information

## Best Practices

1. Always use the TypeScript interfaces when creating new components
2. Import only the sections you need for better bundle size
3. Use the `id` field for React keys when mapping over arrays
4. Keep content organized by logical sections
5. Add JSDoc comments for complex interfaces
6. Use union types for categorization (e.g., `ServiceCategory`)
