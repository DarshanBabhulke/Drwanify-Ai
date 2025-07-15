import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Eye, FileText, Share2, Palette, Network, Sparkles, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Assistance",
      description: "Get intelligent suggestions and automated diagram generation",
      path: "/ai-feature"
    },
    {
      icon: Eye,
      title: "Real-time Preview",
      description: "See your diagrams come to life as you type",
      path: "/preview-feature"
    },
    {
      icon: FileText,
      title: "Multiple Export Options",
      description: "Export to PNG, SVG, PDF, and more formats",
      path: "/export-feature"
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share your diagrams with team members instantly",
      path: "/sharing-feature"
    },
    {
      icon: Palette,
      title: "Theme Support",
      description: "Dark and light themes with customizable colors",
      path: "/theme-feature"
    },
    {
      icon: Network,
      title: "Mermaid Integration",
      description: "Full support for Mermaid diagram syntax",
      path: "/mermaid-feature"
    },
    {
      icon: Sparkles,
      title: "Diagram Templates",
      description: "Pre-built templates for common diagram types",
      path: "/diagrams-feature"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance for large diagrams",
      path: "/diagrams-feature"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
            Drwanify AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Transform your ideas into beautiful diagrams with AI-powered assistance
          </p>
          <div className="flex gap-4 justify-center animate-scale-in">
            <Link to="/ai-feature" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Get Started
            </Link>
            <Link to="/preview-feature" className="border border-border px-8 py-3 rounded-lg hover:bg-accent transition-colors">
              Live Preview
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.path}
                className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Code Editor Preview */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Create Diagrams with Code</h2>
          <div className="bg-card rounded-lg border border-border p-6 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <pre className="text-foreground">
{`graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Process]
    B -->|No| D[Alternative]
    C --> E[End]
    D --> E`}
            </pre>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;