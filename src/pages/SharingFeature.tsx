import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Share2, Users, Link as LinkIcon, Lock, Globe, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SharingFeature = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Share2 className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Easy Sharing
            </h1>
            <p className="text-xl text-muted-foreground">
              Share your diagrams with team members instantly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-lg border border-border p-6">
              <LinkIcon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Share Links</h3>
              <p className="text-muted-foreground mb-4">
                Generate shareable links with custom permissions and expiration dates.
              </p>
              <div className="bg-muted/50 rounded-lg p-3 font-mono text-sm">
                https://drwanify.ai/share/abc123
              </div>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
              <p className="text-muted-foreground">
                Invite team members to view, comment, or edit your diagrams in real-time.
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <Lock className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Privacy Controls</h3>
              <p className="text-muted-foreground">
                Set viewing permissions, password protection, and access restrictions.
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <Globe className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Public Gallery</h3>
              <p className="text-muted-foreground">
                Showcase your work in our public gallery and inspire others.
              </p>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Share Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                <LinkIcon className="h-5 w-5 text-primary" />
                <span>Copy Link</span>
              </button>
              <button className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                <Mail className="h-5 w-5 text-primary" />
                <span>Email</span>
              </button>
              <button className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                <Share2 className="h-5 w-5 text-primary" />
                <span>Embed</span>
              </button>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/theme-feature" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Explore Themes
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SharingFeature;