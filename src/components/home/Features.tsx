import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, BookmarkCheck, Lock, LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: BookOpen,
    title: 'Contenido Académico Verificado',
    description: 'Todas las respuestas están respaldadas por fuentes confiables como Google Scholar y enciclopedias académicas.'
  },
  {
    icon: Clock,
    title: 'Respuestas Instantáneas',
    description: 'Obtén explicaciones claras y concisas en segundos, sin importar la complejidad de tu pregunta.'
  },
  {
    icon: BookmarkCheck,
    title: 'Guarda tus Favoritos',
    description: 'Marca preguntas y respuestas para acceder fácilmente más tarde durante tus sesiones de estudio.'
  },
  {
    icon: Lock,
    title: 'Seguro y Privado',
    description: 'Tu historial de búsqueda y datos personales están protegidos con los más altos estándares de seguridad.'
  }
];

const Features = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">¿Por qué elegir Tech-Student?</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Nuestra plataforma está diseñada específicamente para estudiantes, ofreciendo herramientas que hacen el aprendizaje más efectivo y accesible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-[#00FFFF] mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;