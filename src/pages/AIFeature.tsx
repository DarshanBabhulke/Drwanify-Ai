import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, ArrowLeft, Sparkles, Brain, Zap, MessageSquare, Code, Lightbulb } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AIFeature = () => {
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
            <Bot className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI-Powered Assistance
            </h1>
            <p className="text-xl text-muted-foreground">
              Let artificial intelligence help you create better diagrams faster
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-lg border border-border p-6">
              <Brain className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Suggestions</h3>
              <p className="text-muted-foreground">
                Get intelligent recommendations for diagram structure, layout, and content based on your input.
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <Zap className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Auto-generation</h3>
              <p className="text-muted-foreground">
                Generate complete diagrams from text descriptions or existing data sources automatically.
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <MessageSquare className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Natural Language</h3>
              <p className="text-muted-foreground">
                Describe your diagram in plain English and watch as AI transforms it into visual form.
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <Code className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Code Integration</h3>
              <p className="text-muted-foreground">
                Analyze code repositories and generate architecture diagrams automatically.
              </p>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              Try AI Assistant
            </h2>
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium mb-2">AI Assistant</p>
                  <p className="text-sm text-muted-foreground">
                    I can help you create diagrams! Just describe what you want to visualize, and I'll generate the appropriate diagram code for you.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-secondary-foreground">U</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium mb-2">You</p>
                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-sm">Create a flowchart for user authentication process</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/preview-feature" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Lightbulb className="h-5 w-5" />
              Try Live Preview
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AIFeature;