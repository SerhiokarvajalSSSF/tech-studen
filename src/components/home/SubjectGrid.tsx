import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Card from '../ui/Card';
import { SUBJECTS, getIconComponent } from '../../data/mock-data';

const SubjectGrid = () => {
  const navigate = useNavigate();

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

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Explora por materia</h2>
          <p className="mt-4 text-lg text-gray-400">
            Selecciona una categoría para comenzar a explorar contenido académico
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SUBJECTS.map((subject) => {
            const IconComponent = getIconComponent(subject.icon);
            
            return (
              <motion.div key={subject.id} variants={item}>
                <Card 
                  glassEffect 
                  neonBorder 
                  className={`h-full bg-gradient-to-br ${subject.color}/10 hover:${subject.color}/20`}
                  onClick={() => navigate(`/subject/${subject.id}`)}
                >
                  <div className="flex flex-col h-full">
                    <div className={`p-3 rounded-full bg-gradient-to-br ${subject.color} w-fit`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-white">{subject.name}</h3>
                    <p className="mt-2 text-gray-400 flex-grow">{subject.description}</p>
                    <div className="mt-4 flex items-center text-[#00FFFF] text-sm font-medium">
                      Explorar
                      <motion.div
                        className="ml-1"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        →
                      </motion.div>
                    </div>
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

export default SubjectGrid;