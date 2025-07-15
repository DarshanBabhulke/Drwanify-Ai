import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Network, GitBranch, Database, Users, Workflow, PieChart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MermaidFeature = () => {
  const diagramTypes = [
    {
      icon: GitBranch,
      title: "Flowchart",
      description: "Decision trees and process flows",
      code: `flowchart TD
    A[Start] --> B{Decision?}
    B -->|Yes| C[Process]
    B -->|No| D[End]
    C --> D`
    },
    {
      icon: Users,
      title: "Sequence Diagram",
      description: "Interaction between entities",
      code: `sequenceDiagram
    participant A as Alice
    participant B as Bob
    A->>B: Hello Bob!
    B-->>A: Hello Alice!`
    },
    {
      icon: Network,
      title: "Graph",
      description: "Network relationships",
      code: `graph LR
    A[Node A] --> B[Node B]
    B --> C[Node C]
    C --> A`
    },
    {
      icon: Database,
      title: "Entity Relationship",
      description: "Database schema design",
      code: `erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    PRODUCT ||--o{ LINE-ITEM : includes`
    },
    {
      icon: Workflow,
      title: "User Journey",
      description: "User experience mapping",
      code: `journey
    title My Journey
    section Section A
      Task 1: 5: Me
      Task 2: 3: Me
    section Section B
      Task 3: 1: Me`
    },
    {
      icon: PieChart,
      title: "Pie Chart",
      description: "Data visualization",
      code: `pie title Pets adopted by volunteers
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15`
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
              Mermaid Integration
            </h1>
            <p className="text-xl text-muted-foreground">
              Full support for Mermaid diagram syntax with live preview
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {diagramTypes.map((type, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <type.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">{type.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
                <div className="bg-muted/50 rounded-lg p-3 mb-4">
                  <pre className="text-xs font-mono text-foreground overflow-x-auto">
                    {type.code}
                  </pre>
                </div>
                <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Try Example
                </button>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-lg border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Mermaid Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Syntax Highlighting</h3>
                <p className="text-muted-foreground">
                  Full syntax highlighting for Mermaid code with error detection and auto-completion.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Live Preview</h3>
                <p className="text-muted-foreground">
                  See your diagrams update in real-time as you type with instant rendering.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Theme Support</h3>
                <p className="text-muted-foreground">
                  Multiple built-in themes and custom styling options for your diagrams.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Export Options</h3>
                <p className="text-muted-foreground">
                  Export to PNG, SVG, PDF, and other formats with custom styling preserved.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/diagrams-feature" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Explore All Templates
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MermaidFeature;