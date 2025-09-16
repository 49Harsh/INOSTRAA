'use client';

import React from 'react';
import { websiteContent, services, companyInfo } from '@/data';
import { Service, Feature } from '@/types';

/**
 * Test component to validate TypeScript types and data consumption
 * This demonstrates how to use the typed website content in components
 */
export default function ContentTest() {
  // Test individual imports
  const handleServiceClick = (service: Service) => {
    console.log('Service clicked:', service.title);
  };

  const renderFeature = (feature: Feature) => (
    <li key={feature.id} className="mb-2">
      <strong>{feature.title}:</strong> {feature.description}
    </li>
  );

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Website Content Test
      </h1>

      {/* Company Info Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Company Information</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium">{companyInfo.name}</h3>
          <p className="text-gray-600 mb-2">{companyInfo.tagline}</p>
          <div className="mb-4">
            <h4 className="font-medium">Our Vision:</h4>
            <p className="text-sm text-gray-700">{companyInfo.visionMission.vision}</p>
          </div>
          <div className="mb-4">
            <h4 className="font-medium">Our Mission:</h4>
            <p className="text-sm text-gray-700">{companyInfo.visionMission.mission}</p>
          </div>
          <div>
            <h4 className="font-medium">Tech Stack:</h4>
            <p className="text-sm text-gray-700">{companyInfo.techStack.join(', ')}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Services</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleServiceClick(service)}
            >
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{service.description}</p>
              <ul className="text-xs text-gray-500">
                {service.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
              <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                {service.category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Portfolio</h2>
        <div className="space-y-4">
          {websiteContent.portfolio.map((project) => (
            <div key={project.id} className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold">{project.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{project.description}</p>
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-sm underline"
              >
                Visit Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Why Choose Us</h2>
        <ul className="space-y-2">
          {websiteContent.features.map(renderFeature)}
        </ul>
      </section>

      {/* Type Safety Demo */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">TypeScript Validation ✅</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-700">
            All content is properly typed! Try hovering over variables in VS Code to see IntelliSense.
          </p>
          <ul className="text-xs text-green-600 mt-2">
            <li>• Services count: {websiteContent.services.length}</li>
            <li>• Portfolio items: {websiteContent.portfolio.length}</li>
            <li>• Features count: {websiteContent.features.length}</li>
            <li>• Tech stack: {websiteContent.companyInfo.techStack.length} technologies</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
