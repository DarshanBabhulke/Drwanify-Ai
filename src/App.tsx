import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import AIFeature from './pages/AIFeature';
import PreviewFeature from './pages/PreviewFeature';
import ExportFeature from './pages/ExportFeature';
import SharingFeature from './pages/SharingFeature';
import MermaidFeature from './pages/MermaidFeature';
import ThemeFeature from './pages/ThemeFeature';
import DiagramsFeature from './pages/DiagramsFeature';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai-feature" element={<AIFeature />} />
          <Route path="/preview-feature" element={<PreviewFeature />} />
          <Route path="/export-feature" element={<ExportFeature />} />
          <Route path="/sharing-feature" element={<SharingFeature />} />
          <Route path="/mermaid-feature" element={<MermaidFeature />} />
          <Route path="/theme-feature" element={<ThemeFeature />} />
          <Route path="/diagrams-feature" element={<DiagramsFeature />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;