import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SearchBar from '../ui/SearchBar';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FFFF]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tu asistente educativo <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-[#00FFFF]">
            potenciado por IA
          </span>
        </motion.h1>
        
        <motion.p 
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Obtén respuestas académicas verificadas, explicaciones paso a paso y fuentes confiables para tus estudios de Historia, Filosofía, Matemáticas y Español.
        </motion.p>
        
        <motion.div 
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SearchBar onSearch={handleSearch} />
        </motion.div>
        
        <motion.div 
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-sm font-medium text-gray-400 flex items-center">
            Ejemplos:
          </div>
          {[
            '¿Qué causó la Revolución Francesa?',
            '¿Cómo resolver integrales por partes?',
            '¿Quién fue Simone de Beauvoir?',
            '¿Cuáles son las reglas de acentuación?'
          ].map((example, index) => (
            <button
              key={index}
              onClick={() => handleSearch(example)}
              className="text-sm px-3 py-1 bg-gray-800/50 hover:bg-gray-700/50 rounded-full border border-gray-700 text-gray-300 transition-colors flex items-center"
            >
              {example}
              <ArrowRight className="ml-1 h-3 w-3" />
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;