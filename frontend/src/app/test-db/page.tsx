'use client';

import React, { useState } from 'react';
import { ContactService } from '@/services/contactService';

export default function TestDBPage() {
  const [result, setResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const testConnection = async () => {
    setIsLoading(true);
    setResult('Testing connection...');
    
    try {
      const testResult = await ContactService.getAllSubmissions();
      if (testResult.success) {
        setResult(`✅ Connection successful! Found ${testResult.data?.length || 0} submissions.`);
      } else {
        setResult(`❌ Connection failed: ${testResult.error}`);
      }
    } catch (error) {
      setResult(`❌ Network error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const testSubmission = async () => {
    setIsLoading(true);
    setResult('Testing form submission...');
    
    try {
      const testData = {
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Company',
        service: 'Website Development',
        budget: '₹1,00,000 - ₹2,50,000 ($1,200 - $3,000)',
        message: 'This is a test submission to verify the database connection.'
      };
      
      const submitResult = await ContactService.submitContactForm(testData);
      if (submitResult.success) {
        setResult('✅ Test submission successful! Check your admin dashboard.');
      } else {
        setResult(`❌ Submission failed: ${submitResult.error}`);
      }
    } catch (error) {
      setResult(`❌ Submission error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Database Test</h1>
        
        <div className="space-y-4">
          <button
            onClick={testConnection}
            disabled={isLoading}
            className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white rounded-lg transition-colors"
          >
            {isLoading ? 'Testing...' : 'Test Connection'}
          </button>
          
          <button
            onClick={testSubmission}
            disabled={isLoading}
            className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white rounded-lg transition-colors"
          >
            {isLoading ? 'Testing...' : 'Test Submission'}
          </button>
        </div>
        
        {result && (
          <div className="mt-6 p-4 bg-gray-800/50 border border-gray-600 rounded-lg">
            <p className="text-white text-sm whitespace-pre-wrap">{result}</p>
          </div>
        )}
        
        <div className="mt-6 text-center">
          <a href="/admin" className="text-purple-400 hover:text-purple-300 text-sm">
            Go to Admin Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}