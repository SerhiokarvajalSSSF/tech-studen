import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SearchBar from '../components/ui/SearchBar';
import Card from '../components/ui/Card';
import { SAMPLE_ANSWERS } from '../data/mock-data';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';
  const subjectFilter = searchParams.get('subject');
  
  const [isLoading, setIsLoading] = useState(true);
  const [searchResult, setSearchResult] = useState<string | null>(null);
  
  const handleSearch = (newQuery: string) => {
    navigate(`/search?q=${encodeURIComponent(newQuery)}${subjectFilter ? `&subject=${subjectFilter}` : ''}`);
  };

  useEffect(() => {
    // Simular tiempo de búsqueda para demostración
    setIsLoading(true);
    const timer = setTimeout(() => {
      // Simplemente usamos una respuesta existente para la demostración
      const randomAnswerKey = Object.keys(SAMPLE_ANSWERS)[0];
      setSearchResult(SAMPLE_ANSWERS[randomAnswerKey].text);
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [query, subjectFilter]);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <SearchBar 
          onSearch={handleSearch} 
          placeholder="Buscar..." 
          className="mb-8" 
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white">
              Resultados para: <span className="text-[#00FFFF]">"{query}"</span>
            </h1>
            {subjectFilter && (
              <p className="mt-1 text-gray-400">
                Filtrado por: {subjectFilter}
                <button 
                  className="ml-2 text-[#00FFFF] text-sm"
                  onClick={() => navigate(`/search?q=${encodeURIComponent(query)}`)}
                >
                  [Eliminar filtro]
                </button>
              </p>
            )}
          </div>
          
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="h-12 w-12 text-[#00FFFF] animate-spin mb-4" />
              <p className="text-gray-400 animate-pulse">Buscando la mejor respuesta para ti...</p>
            </div>
          ) : (
            <div className="space-y-8">
              <Card glassEffect neonBorder className="prose prose-invert max-w-none">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-white m-0">Respuesta</h2>
                  <button 
                    className="text-sm text-[#00FFFF] hover:underline"
                    onClick={() => navigate('/question/1')}
                  >
                    Ver detalles →
                  </button>
                </div>
                <div className="whitespace-pre-line">
                  {searchResult}
                </div>
              </Card>
              
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Preguntas relacionadas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.values(SAMPLE_ANSWERS).map((answer, index) => (
                    <Card 
                      key={index} 
                      glassEffect 
                      className="cursor-pointer"
                      onClick={() => navigate(`/question/${answer.questionId}`)}
                    >
                      <h4 className="text-white font-medium">
                        {SAMPLE_ANSWERS[answer.questionId]?.text.substring(0, 100)}...
                      </h4>
                      <div className="mt-2 text-[#00FFFF] text-sm">Ver respuesta →</div>
                    </Card>
                  )).slice(0, 2)}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
};

export default SearchPage;