import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Play, Pause, RotateCcw, Download } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PreviewFeature = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [code, setCode] = React.useState(`graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Process]
    B -->|No| D[Alternative]
    C --> E[End]
    D --> E`);

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
            <Eye className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Real-time Preview
            </h1>
            <p className="text-xl text-muted-foreground">
              See your diagrams come to life as you type
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Code Editor */}
            <div className="bg-card rounded-lg border border-border">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="text-lg font-semibold">Code Editor</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </button>
                  <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-80 bg-muted/50 rounded-lg p-4 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your diagram code here..."
                />
              </div>
            </div>

            {/* Preview */}
            <div className="bg-card rounded-lg border border-border">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="text-lg font-semibold">Live Preview</h3>
                <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                  <Download className="h-4 w-4" />
                </button>
              </div>
              <div className="p-4">
                <div className="w-full h-80 bg-muted/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Eye className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Your diagram will appear here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Instant Updates</h3>
              <p className="text-sm text-muted-foreground">
                See changes immediately as you type
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Play className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Animation Support</h3>
              <p className="text-sm text-muted-foreground">
                Watch your diagrams animate and transition
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Export Ready</h3>
              <p className="text-sm text-muted-foreground">
                Export directly from the preview
              </p>
            </div>
          </div>

          {/* Sample Diagrams */}
          <div className="bg-muted/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Sample Diagrams</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg border border-border p-4">
                <h3 className="text-lg font-semibold mb-2">Flowchart</h3>
                <pre className="text-sm text-muted-foreground font-mono">
{`graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Process]
    B -->|No| D[End]
    C --> D`}
                </pre>
                <button className="mt-4 text-primary hover:text-primary/80 transition-colors">
                  Try this example →
                </button>
              </div>

              <div className="bg-card rounded-lg border border-border p-4">
                <h3 className="text-lg font-semibold mb-2">Sequence Diagram</h3>
                <pre className="text-sm text-muted-foreground font-mono">
{`sequenceDiagram
    Alice->>Bob: Hello Bob
    Bob-->>Alice: Hello Alice
    Alice->>Bob: How are you?
    Bob-->>Alice: I'm good!`}
                </pre>
                <button className="mt-4 text-primary hover:text-primary/80 transition-colors">
                  Try this example →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PreviewFeature;