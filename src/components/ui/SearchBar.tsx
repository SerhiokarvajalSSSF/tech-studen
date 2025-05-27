import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar = ({ 
  onSearch, 
  placeholder = '¿Qué quieres aprender hoy?', 
  className = '' 
}: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <motion.form 
      className={`relative w-full max-w-3xl mx-auto ${className}`}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`
        flex items-center rounded-full 
        bg-gray-900/80 backdrop-blur-md
        border-2 transition-all duration-300
        ${isFocused 
          ? 'border-[#00FFFF] shadow-[0_0_15px_rgba(0,255,255,0.3)]' 
          : 'border-gray-700'}
      `}>
        <Search 
          className="ml-4 h-5 w-5 text-gray-400" 
          aria-hidden="true" 
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
          placeholder={placeholder}
        />
        <Button 
          type="submit"
          variant="primary"
          className="m-1 rounded-full"
          disabled={!query.trim()}
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </motion.form>
  );
};

export default SearchBar;