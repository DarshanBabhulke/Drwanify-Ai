import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Download, Image, File, Share2, Settings } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ExportFeature = () => {
  const exportFormats = [
    {
      icon: Image,
      title: "PNG",
      description: "High-quality raster image",
      size: "Perfect for presentations",
      color: "bg-blue-500"
    },
    {
      icon: File,
      title: "SVG",
      description: "Scalable vector graphics",
      size: "Infinite resolution",
      color: "bg-green-500"
    },
    {
      icon: FileText,
      title: "PDF",
      description: "Professional document format",
      size: "Print-ready quality",
      color: "bg-red-500"
    },
    {
      icon: Share2,
      title: "HTML",
      description: "Interactive web format",
      size: "Embeddable in websites",
      color: "bg-purple-500"
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

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Download className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Export Options
            </h1>
            <p className="text-xl text-muted-foreground">
              Export your diagrams in multiple formats for any use case
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {exportFormats.map((format, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${format.color} rounded-lg flex items-center justify-center`}>
                    <format.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{format.title}</h3>
                    <p className="text-sm text-muted-foreground">{format.description}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{format.size}</p>
                <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Export as {format.title}
                </button>
              </div>
            ))}
          </div>

          {/* Export Settings */}
          <div className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Settings className="h-6 w-6 text-primary" />
              Export Settings
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Resolution</label>
                  <select className="w-full bg-muted rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Standard (1080p)</option>
                    <option>High (4K)</option>
                    <option>Ultra (8K)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Background</label>
                  <select className="w-full bg-muted rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Transparent</option>
                    <option>White</option>
                    <option>Dark Theme</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Format Options</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Include title</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Include timestamp</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Optimize for print</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Batch Export */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20 text-center">
            <h2 className="text-2xl font-bold mb-4">Batch Export</h2>
            <p className="text-muted-foreground mb-6">
              Export multiple diagrams at once in your preferred format
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Select Multiple
              </button>
              <button className="border border-border px-6 py-3 rounded-lg hover:bg-accent transition-colors">
                Export All
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExportFeature;