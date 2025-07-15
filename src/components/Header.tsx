import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Bot className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Drwanify AI
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 ml-auto">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/ai-feature" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link to="/diagrams-feature" className="text-sm font-medium hover:text-primary transition-colors">
            Templates
          </Link>
        </nav>

        <button
          className="md:hidden ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col space-y-2 p-4">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/ai-feature" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link to="/diagrams-feature" className="text-sm font-medium hover:text-primary transition-colors">
              Templates
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;