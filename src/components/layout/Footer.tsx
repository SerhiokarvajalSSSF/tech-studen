import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">Tech-Student</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Plataforma educativa impulsada por IA para estudiantes de secundaria y universidad.
              Obtenga respuestas precisas a sus preguntas académicas con fuentes verificadas.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#00FFFF] transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00FFFF] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00FFFF] transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-[#00FFFF] tracking-wider uppercase">Asignaturas</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/subject/historia" className="text-sm text-gray-400 hover:text-white">Historia</Link>
              </li>
              <li>
                <Link to="/subject/filosofia" className="text-sm text-gray-400 hover:text-white">Filosofía</Link>
              </li>
              <li>
                <Link to="/subject/matematicas" className="text-sm text-gray-400 hover:text-white">Matemáticas</Link>
              </li>
              <li>
                <Link to="/subject/español" className="text-sm text-gray-400 hover:text-white">Español/Literatura</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-[#00FFFF] tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/privacy" className="text-sm text-gray-400 hover:text-white">Política de Privacidad</Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-400 hover:text-white">Términos de Uso</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-gray-400 hover:text-white">Política de Cookies</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-white">Acerca de Nosotros</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex justify-center">
          <p className="text-sm text-gray-400 flex items-center">
            Hecho con <Heart className="h-4 w-4 mx-1 text-red-500" /> para estudiantes - © {new Date().getFullYear()} Tech-Student
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;