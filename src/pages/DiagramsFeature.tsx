import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Network, GitBranch, Database, Users, Workflow, Layers, Target, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DiagramsFeature = () => {
  const templates = [
    {
      icon: Network,
      title: "Network Diagrams",
      description: "Visualize network topology and connections",
      code: `graph TD
    A[Router] --> B[Switch]
    B --> C[Server 1]
    B --> D[Server 2]
    B --> E[Workstation]`
    },
    {
      icon: GitBranch,
      title: "Flowcharts",
      description: "Create decision trees and process flows",
      code: `flowchart TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Process]
    B -->|No| D[Alternative]
    C --> E[End]
    D --> E`
    },
    {
      icon: Database,
      title: "Database Schema",
      description: "Design database relationships",
      code: `erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    PRODUCT ||--o{ LINE-ITEM : includes`
    },
    {
      icon: Users,
      title: "Organizational Chart",
      description: "Map organizational structure",
      code: `graph TD
    A[CEO] --> B[CTO]
    A --> C[CFO]
    B --> D[Dev Team]
    B --> E[QA Team]`
    },
    {
      icon: Workflow,
      title: "Sequence Diagrams",
      description: "Show interaction sequences",
      code: `sequenceDiagram
    participant A as User
    participant B as System
    A->>B: Login Request
    B->>A: Login Response`
    },
    {
      icon: Layers,
      title: "Architecture Diagrams",
      description: "Design system architecture",
      code: `graph TB
    A[Frontend] --> B[API Gateway]
    B --> C[Microservice 1]
    B --> D[Microservice 2]
    C --> E[Database 1]
    D --> F[Database 2]`
    },
    {
      icon: Target,
      title: "Mind Maps",
      description: "Organize ideas and concepts",
      code: `mindmap
  root((Project))
    Planning
      Requirements
      Timeline
    Development
      Frontend
      Backend
    Testing
      Unit Tests
      Integration`
    },
    {
      icon: Zap,
      title: "User Journey",
      description: "Map user experience flows",
      code: `journey
    title User Registration
    section Discovery
      Visit Website: 5: User
      Browse Features: 4: User
    section Registration
      Sign Up: 3: User
      Verify Email: 2: User
    section Onboarding
      Complete Profile: 4: User
      First Use: 5: User`
    }
  ];

  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Network className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Diagram Templates
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose from our collection of professional diagram templates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {templates.map((template, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <template.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">{template.title}</h3>
                    <p className="text-sm text-muted-foreground">{template.description}</p>
                  </div>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <pre className="text-sm text-foreground font-mono overflow-x-auto">
                    {template.code}
                  </pre>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    Use Template
                  </button>
                  <button className="px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors">
                    Preview
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20">
              <h2 className="text-2xl font-bold mb-4">Need a Custom Template?</h2>
              <p className="text-muted-foreground mb-6">
                Our AI can create custom templates based on your specific needs
              </p>
              <Link 
                to="/ai-feature" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Request Custom Template
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DiagramsFeature;