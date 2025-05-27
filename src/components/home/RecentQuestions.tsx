import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Bookmark, BookmarkCheck, ArrowRight } from 'lucide-react';
import Card from '../ui/Card';
import { useUser } from '../../context/UserContext';
import { SUBJECTS, getIconComponent } from '../../data/mock-data';

const RecentQuestions = () => {
  const navigate = useNavigate();
  const { questionHistory, toggleFavorite } = useUser();
  
  const recentQuestions = questionHistory.slice(0, 4);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const getSubjectDetails = (subjectId: string) => {
    return SUBJECTS.find(s => s.id === subjectId) || SUBJECTS[0];
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Preguntas recientes</h2>
          <button 
            onClick={() => navigate('/history')}
            className="text-[#00FFFF] hover:text-blue-400 flex items-center text-sm font-medium"
          >
            Ver todas
            <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {recentQuestions.map((question) => {
            const subject = getSubjectDetails(question.subject);
            const IconComponent = getIconComponent(subject.icon);
            
            return (
              <motion.div key={question.id} variants={item}>
                <Card 
                  glassEffect 
                  className="h-full"
                  onClick={() => navigate(`/question/${question.id}`)}
                >
                  <div className="flex justify-between">
                    <div className={`p-2 rounded-full bg-gradient-to-br ${subject.color} w-fit`}>
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(question.id);
                      }}
                      className="text-gray-400 hover:text-[#00FFFF]"
                    >
                      {question.isFavorite ? (
                        <BookmarkCheck className="h-5 w-5 text-[#00FFFF]" />
                      ) : (
                        <Bookmark className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <h3 className="mt-3 text-lg font-medium text-white">{question.text}</h3>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-400">
                      {new Date(question.createdAt).toLocaleDateString('es-ES', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="text-sm font-medium text-gray-300">{subject.name}</span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default RecentQuestions;