import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Github, Twitter, Linkedin, Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Anime-style floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-secondary/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-primary/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 right-1/3 w-2 h-2 bg-secondary/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <Bot className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Drwanify AI
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transform your ideas into beautiful diagrams with the power of AI
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors group">
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors group">
                <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors group">
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Features
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-feature" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link to="/preview-feature" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Live Preview
                </Link>
              </li>
              <li>
                <Link to="/export-feature" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Export Options
                </Link>
              </li>
              <li>
                <Link to="/sharing-feature" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Team Sharing
                </Link>
              </li>
            </ul>
          </div>

          {/* Templates */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Templates</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/diagrams-feature" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Flowcharts
                </Link>
              </li>
              <li>
                <Link to="/mermaid-feature" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Mermaid Diagrams
                </Link>
              </li>
              <li>
                <Link to="/diagrams-feature" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  UML Diagrams
                </Link>
              </li>
              <li>
                <Link to="/diagrams-feature" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Network Diagrams
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              © 2024 Drwanify AI. Made with 
              <Heart className="h-4 w-4 text-red-500 animate-pulse" /> 
              for creators
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;