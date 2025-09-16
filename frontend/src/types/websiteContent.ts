/**
 * TypeScript interfaces for the IT company website content
 * Provides type safety and IntelliSense support for all website sections
 */

/**
 * Company's vision and mission statements
 */
export interface VisionMission {
  vision: string;
  mission: string;
}

/**
 * Service categories offered by the company
 */
export type ServiceCategory = 'mobile-app' | 'website' | 'custom-software' | 'consulting' | 'technology-solutions' | 'customer-support';

/**
 * Individual service offering details
 */
export interface Service {
  id: string;
  category: ServiceCategory;
  title: string;
  description: string;
  features: string[];
  icon?: string;
}

/**
 * Portfolio/project item structure
 */
export interface PortfolioItem {
  id: string;
  name: string;
  url: string;
  description?: string;
  technologies?: string[];
  category?: ServiceCategory;
}

/**
 * Company features/benefits highlight
 */
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

/**
 * Company milestones and achievements
 */
export interface Milestone {
  id: string;
  title: string;
  description: string;
  year?: number;
  category: 'growth' | 'achievement' | 'expansion' | 'technology';
}

/**
 * Technology solution details
 */
export interface TechSolution {
  id: string;
  title: string;
  description: string;
  technologies?: string[];
}

/**
 * Team introduction and trust-building content
 */
export interface TeamIntro {
  importance: string;
  qualifications: string;
  clientTrust: string;
}

/**
 * SEO best practices content
 */
export interface SEOContent {
  userExperience: string;
  keywordOptimization: string;
  metaDescriptions: string;
  profileOptimization: string;
}

/**
 * Social media and contact information content
 */
export interface SocialContact {
  socialMediaImportance: string;
  contactInformation: string;
  clientRelationships: string;
}

/**
 * Mobile responsiveness content
 */
export interface ResponsivenessContent {
  importance: string;
  accessibility: string;
  userExperience: string;
}

/**
 * Company information section
 */
export interface CompanyInfo {
  name?: string;
  tagline?: string;
  visionMission: VisionMission;
  techStack: string[];
}

/**
 * Main website content structure
 * Contains all sections and data for the IT company website
 */
export interface WebsiteContent {
  companyInfo: CompanyInfo;
  services: Service[];
  portfolio: PortfolioItem[];
  features: Feature[];
  milestones: Milestone[];
  techSolutions: TechSolution[];
  teamIntro: TeamIntro;
  seoContent: SEOContent;
  socialContact: SocialContact;
  responsivenessContent: ResponsivenessContent;
}

/**
 * Navigation menu item structure
 */
export interface NavItem {
  id: string;
  label: string;
  href: string;
  children?: NavItem[];
}

/**
 * Contact information structure
 */
export interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
  socialMedia?: {
    platform: string;
    url: string;
    handle?: string;
  }[];
}

/**
 * Meta information for SEO
 */
export interface MetaInfo {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}
