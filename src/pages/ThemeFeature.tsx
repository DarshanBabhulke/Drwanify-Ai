import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Palette, Sun, Moon, Monitor, Brush, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ThemeFeature = () => {
  const [activeTheme, setActiveTheme] = React.useState('dark');

  const themes = [
    {
      id: 'light',
      name: 'Light Mode',
      icon: Sun,
      description: 'Clean and bright interface',
      preview: 'bg-white text-black border-gray-200'
    },
    {
      id: 'dark',
      name: 'Dark Mode',
      icon: Moon,
      description: 'Easy on the eyes',
      preview: 'bg-gray-900 text-white border-gray-700'
    },
    {
      id: 'system',
      name: 'System',
      icon: Monitor,
      description: 'Follows system preference',
      preview: 'bg-gradient-to-r from-gray-900 to-white text-gray-500 border-gray-600'
    }
  ];

  const colorSchemes = [
    { name: 'Blue', color: 'bg-blue-500' },
    { name: 'Purple', color: 'bg-purple-500' },
    { name: 'Green', color: 'bg-green-500' },
    { name: 'Orange', color: 'bg-orange-500' },
    { name: 'Pink', color: 'bg-pink-500' },
    { name: 'Cyan', color: 'bg-cyan-500' }
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
            <Palette className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Theme Support
            </h1>
            <p className="text-xl text-muted-foreground">
              Customize your workspace with beautiful themes and color schemes
            </p>
          </div>

          {/* Theme Selection */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Theme</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme.id)}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    activeTheme === theme.id 
                      ? 'border-primary bg-primary/10' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <theme.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{theme.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{theme.description}</p>
                  <div className={`w-full h-20 rounded-lg ${theme.preview} border flex items-center justify-center`}>
                    <span className="text-sm font-mono">Preview</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Color Schemes */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Color Schemes</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {colorSchemes.map((scheme, index) => (
                <button
                  key={index}
                  className="group flex flex-col items-center gap-2 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-full ${scheme.color} group-hover:scale-110 transition-transform`}></div>
                  <span className="text-sm font-medium">{scheme.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Theme Builder */}
          <div className="bg-card rounded-lg border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Brush className="h-6 w-6 text-primary" />
              Custom Theme Builder
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Primary Color</label>
                  <div className="flex items-center gap-2">
                    <input type="color" className="w-12 h-12 rounded border border-border" defaultValue="#3b82f6" />
                    <input type="text" className="flex-1 bg-muted rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" defaultValue="#3b82f6" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Secondary Color</label>
                  <div className="flex items-center gap-2">
                    <input type="color" className="w-12 h-12 rounded border border-border" defaultValue="#8b5cf6" />
                    <input type="text" className="flex-1 bg-muted rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" defaultValue="#8b5cf6" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Background Style</label>
                  <select className="w-full bg-muted rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Solid Color</option>
                    <option>Gradient</option>
                    <option>Pattern</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Corner Radius</label>
                  <input type="range" min="0" max="20" className="w-full" />
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex gap-4">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Save Theme
              </button>
              <button className="border border-border px-6 py-3 rounded-lg hover:bg-accent transition-colors">
                Reset to Default
              </button>
            </div>
          </div>

          {/* Theme Gallery */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20 text-center">
            <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              Community Themes
            </h2>
            <p className="text-muted-foreground mb-6">
              Discover themes created by the community and share your own
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Browse Gallery
              </button>
              <button className="border border-border px-6 py-3 rounded-lg hover:bg-accent transition-colors">
                Submit Theme
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ThemeFeature;