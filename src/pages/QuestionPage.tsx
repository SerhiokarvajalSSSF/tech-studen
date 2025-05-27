import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookmarkCheck, Bookmark, ThumbsUp, MessageSquare, Share2, ExternalLink } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useUser } from '../context/UserContext';
import { RECENT_QUESTIONS, SAMPLE_ANSWERS, SUBJECTS, getIconComponent } from '../data/mock-data';

const QuestionPage = () => {
  const { questionId } = useParams<{ questionId: string }>();
  const navigate = useNavigate();
  const { toggleFavorite } = useUser();
  
  const [activeTab, setActiveTab] = useState<'answer' | 'sources'>('answer');
  
  const question = RECENT_QUESTIONS.find(q => q.id === questionId);
  const answer = SAMPLE_ANSWERS[questionId || ''];
  
  if (!question || !answer) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-white">Pregunta no encontrada</h1>
          <p className="mt-4 text-gray-400">La pregunta que buscas no existe o ha sido eliminada.</p>
          <Button 
            variant="primary" 
            className="mt-6" 
            onClick={() => navigate('/')}
          >
            Volver al inicio
          </Button>
        </div>
      </Layout>
    );
  }

  const subject = SUBJECTS.find(s => s.id === question.subject) || SUBJECTS[0];
  const IconComponent = getIconComponent(subject.icon);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-1.5 rounded-full bg-gradient-to-br ${subject.color}`}>
              <IconComponent className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-400">{subject.name}</span>
            <span className="text-sm text-gray-500">
              {new Date(question.createdAt).toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              })}
            </span>
          </div>
          
          <div className="flex justify-between items-start">
            <h1 className="text-2xl md:text-3xl font-bold text-white">{question.text}</h1>
            <button
              onClick={() => toggleFavorite(question.id)}
              className="ml-2 p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              {question.isFavorite ? (
                <BookmarkCheck className="h-6 w-6 text-[#00FFFF]" />
              ) : (
                <Bookmark className="h-6 w-6 text-gray-400" />
              )}
            </button>
          </div>
          
          <div className="mt-8">
            <div className="border-b border-gray-800 mb-6">
              <div className="flex space-x-8">
                <button
                  className={`pb-2 px-1 font-medium text-sm transition-colors ${
                    activeTab === 'answer'
                      ? 'text-[#00FFFF] border-b-2 border-[#00FFFF]'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                  onClick={() => setActiveTab('answer')}
                >
                  Respuesta
                </button>
                <button
                  className={`pb-2 px-1 font-medium text-sm transition-colors ${
                    activeTab === 'sources'
                      ? 'text-[#00FFFF] border-b-2 border-[#00FFFF]'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                  onClick={() => setActiveTab('sources')}
                >
                  Fuentes ({answer.sources.length})
                </button>
              </div>
            </div>
            
            {activeTab === 'answer' && (
              <Card glassEffect className="prose prose-invert max-w-none">
                <div className="whitespace-pre-line">
                  {answer.text}
                </div>
              </Card>
            )}
            
            {activeTab === 'sources' && (
              <Card glassEffect>
                <h3 className="text-lg font-medium text-white mb-4">Fuentes consultadas</h3>
                <div className="space-y-4">
                  {answer.sources.map((source, index) => (
                    <div key={index} className="p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex justify-between">
                        <h4 className="font-medium text-white">{source.title}</h4>
                        <span className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-300">
                          {source.type}
                        </span>
                      </div>
                      <a 
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 text-sm text-[#00FFFF] hover:text-blue-400 flex items-center"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" /> 
                        {source.url}
                      </a>
                    </div>
                  ))}
                </div>
              </Card>
            )}
            
            <div className="mt-6 flex justify-between">
              <div className="flex space-x-2">
                <button className="flex items-center space-x-1 text-gray-400 hover:text-white">
                  <ThumbsUp className="h-5 w-5" />
                  <span className="text-sm">Útil</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-400 hover:text-white">
                  <MessageSquare className="h-5 w-5" />
                  <span className="text-sm">Comentar</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-400 hover:text-white">
                  <Share2 className="h-5 w-5" />
                  <span className="text-sm">Compartir</span>
                </button>
              </div>
              <button className="text-sm text-gray-400 hover:text-[#00FFFF]">
                Reportar error
              </button>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-bold text-white mb-4">Preguntas relacionadas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {RECENT_QUESTIONS.filter(q => q.id !== questionId).slice(0, 2).map(q => (
                <Card 
                  key={q.id} 
                  glassEffect 
                  className="cursor-pointer"
                  onClick={() => navigate(`/question/${q.id}`)}
                >
                  <h4 className="text-white font-medium">{q.text}</h4>
                  <div className="mt-2 flex justify-between text-sm">
                    <span className="text-gray-400">
                      {new Date(q.createdAt).toLocaleDateString('es-ES', { 
                        day: 'numeric', 
                        month: 'short' 
                      })}
                    </span>
                    <span className="text-[#00FFFF]">Ver respuesta →</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default QuestionPage;