'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Building, Calendar, MessageSquare, Eye, EyeOff, Lock, Users, TrendingUp, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ContactService } from '@/services/contactService';
import { ContactFormData } from '@/lib/supabase';

interface AdminStats {
  totalSubmissions: number;
  todaySubmissions: number;
  thisWeekSubmissions: number;
  thisMonthSubmissions: number;
}

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simple password check - in production, use proper authentication
    if (password === 'admin123') {
      localStorage.setItem('adminAuth', 'true');
      onLogin();
    } else {
      setError('Invalid password');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock size={32} className="text-white" />
            </div>
            <CardTitle className="text-2xl text-white">Admin Access</CardTitle>
            <p className="text-gray-300">Enter password to view contact submissions</p>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              
              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm"
                >
                  {error}
                </motion.p>
              )}

              <Button
                type="submit"
                loading={isLoading}
                className="w-full bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600"
              >
                Access Dashboard
              </Button>
            </form>
            
            {/* <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <p className="text-yellow-300 text-sm">
                <strong>Demo Password:</strong> admin123
              </p>
            </div> */}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

function StatsCard({ title, value, icon: Icon, color, change }: {
  title: string;
  value: number;
  icon: any;
  color: string;
  change?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="relative overflow-hidden"
    >
      <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm font-medium">{title}</p>
              <p className="text-3xl font-bold text-white mt-2">{value}</p>
              {change && (
                <p className="text-emerald-400 text-sm mt-1 flex items-center gap-1">
                  <TrendingUp size={14} />
                  {change}
                </p>
              )}
            </div>
            <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-lg flex items-center justify-center`}>
              <Icon size={24} className="text-white" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function SubmissionCard({ submission, index }: { submission: ContactFormData; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative"
    >
      <Card className="bg-white/10  backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">{submission.name}</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail size={16} />
                  <span className="text-sm">{submission.email}</span>
                </div>
                {submission.company && (
                  <div className="flex items-center gap-2 text-gray-300">
                    <Building size={16} />
                    <span className="text-sm">{submission.company}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar size={16} />
                  <span className="text-sm">{formatDate(submission.created_at || '')}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium mb-2">
                {submission.service}
              </span>
              {submission.budget && (
                <div className="text-emerald-400 text-sm font-medium">
                  {submission.budget}
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-white/10 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-300">
                <MessageSquare size={16} />
                <span className="text-sm">Message</span>
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-purple-400 hover:text-purple-300 text-sm font-medium"
              >
                {isExpanded ? 'Show Less' : 'Show More'}
              </button>
            </div>
            
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? 'auto' : '60px' }}
              className="overflow-hidden mt-2"
            >
              <p className="text-gray-300 text-sm leading-relaxed">
                {submission.message}
              </p>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function AdminDashboard() {
  const [submissions, setSubmissions] = useState<ContactFormData[]>([]);
  const [stats, setStats] = useState<AdminStats>({
    totalSubmissions: 0,
    todaySubmissions: 0,
    thisWeekSubmissions: 0,
    thisMonthSubmissions: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [submissionsResult, statsResult] = await Promise.all([
        ContactService.getAllSubmissions(),
        ContactService.getSubmissionStats()
      ]);

      if (submissionsResult.success) {
        setSubmissions(submissionsResult.data || []);
        
        // Calculate stats
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const thisWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);

        const data = submissionsResult.data || [];
        setStats({
          totalSubmissions: data.length,
          todaySubmissions: data.filter(s => new Date(s.created_at || '') >= today).length,
          thisWeekSubmissions: data.filter(s => new Date(s.created_at || '') >= thisWeek).length,
          thisMonthSubmissions: data.filter(s => new Date(s.created_at || '') >= thisMonth).length,
        });
      } else {
        setError(submissionsResult.error || 'Failed to load data');
      }
    } catch (err) {
      setError('Network error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    window.location.reload();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-gray-300">Contact form submissions overview</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            Logout
          </Button>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
            {error}
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Submissions"
            value={stats.totalSubmissions}
            icon={Users}
            color="from-purple-500 to-purple-600"
          />
          <StatsCard
            title="Today"
            value={stats.todaySubmissions}
            icon={Clock}
            color="from-emerald-500 to-emerald-600"
            change="+12% from yesterday"
          />
          <StatsCard
            title="This Week"
            value={stats.thisWeekSubmissions}
            icon={TrendingUp}
            color="from-blue-500 to-blue-600"
            change="+8% from last week"
          />
          <StatsCard
            title="This Month"
            value={stats.thisMonthSubmissions}
            icon={Calendar}
            color="from-orange-500 to-orange-600"
            change="+15% from last month"
          />
        </div>

        {/* Submissions */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Recent Submissions</h2>
          {submissions.length === 0 ? (
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-12 text-center">
                <MessageSquare size={48} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-300 text-lg">No submissions yet</p>
                <p className="text-gray-400 text-sm mt-2">Contact form submissions will appear here</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {submissions.map((submission, index) => (
                <SubmissionCard
                  key={submission.id}
                  submission={submission}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('adminAuth');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  if (!isAuthenticated) {
    return <LoginForm onLogin={() => setIsAuthenticated(true)} />;
  }

  return <AdminDashboard />;
}