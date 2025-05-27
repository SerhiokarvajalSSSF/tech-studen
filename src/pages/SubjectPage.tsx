import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Card from '../components/ui/Card';
import SearchBar from '../components/ui/SearchBar';
import { useNavigate } from 'react-router-dom';
import { SUBJECTS, getIconComponent } from '../data/mock-data';
import { motion } from 'framer-motion';

const SubjectPage = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  
  const subject = SUBJECTS.find(s => s.id === subjectId);
  
  if (!subject) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-white">Materia no encontrada</h1>
          <p className="mt-4 text-gray-400">La materia que buscas no existe.</p>
        </div>
      </Layout>
    );
  }

  const IconComponent = getIconComponent(subject.icon);

  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}&subject=${subject.id}`);
  };

  const topics = [
    { id: 1, title: 'Tema destacado 1', description: 'Descripción breve del tema destacado' },
    { id: 2, title: 'Tema destacado 2', description: 'Descripción breve del tema destacado' },
    { id: 3, title: 'Tema destacado 3', description: 'Descripción breve del tema destacado' },
    { id: 4, title: 'Tema destacado 4', description: 'Descripción breve del tema destacado' },
    { id: 5, title: 'Tema destacado 5', description: 'Descripción breve del tema destacado' },
    { id: 6, title: 'Tema destacado 6', description: 'Descripción breve del tema destacado' },
  ];

  return (
    <Layout>
      <section className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent h-64 z-0"></div>
        
        <div className="relative z-10 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <motion.div 
                className={`p-5 rounded-full bg-gradient-to-br ${subject.color}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <IconComponent className="h-12 w-12 text-white" />
              </motion.div>
              
              <div className="text-center md:text-left">
                <motion.h1 
                  className="text-4xl font-bold text-white"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {subject.name}
                </motion.h1>
                <motion.p 
                  className="mt-4 text-xl text-gray-300 max-w-3xl"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {subject.description}
                </motion.p>
              </div>
            </div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <SearchBar 
                onSearch={handleSearch} 
                placeholder={`Buscar en ${subject.name}...`} 
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Temas destacados</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <motion.div 
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card 
                  glassEffect 
                  className="h-full cursor-pointer hover:border-[#00FFFF]/30"
                  onClick={() => navigate(`/topic/${topic.id}`)}
                >
                  <h3 className="text-lg font-bold text-white">{topic.title}</h3>
                  <p className="mt-2 text-gray-400">{topic.description}</p>
                  <div className="mt-4 text-[#00FFFF] text-sm font-medium">
                    Explorar tema →
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SubjectPage;