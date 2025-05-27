import React, { createContext, useState, useContext, ReactNode } from 'react';
import { User, Question } from '../types';
import { RECENT_QUESTIONS } from '../data/mock-data';

interface UserContextType {
  user: User | null;
  isLoggedIn: boolean;
  questionHistory: Question[];
  favoriteQuestions: Question[];
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  toggleFavorite: (questionId: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [questionHistory, setQuestionHistory] = useState<Question[]>(RECENT_QUESTIONS);

  const favoriteQuestions = questionHistory.filter(q => q.isFavorite);

  const login = async (email: string, password: string) => {
    // Simulación de login
    setUser({
      id: '1',
      name: 'Estudiante Demo',
      email: email,
      avatar: 'https://i.pravatar.cc/150?img=32'
    });
  };

  const logout = () => {
    setUser(null);
  };

  const toggleFavorite = (questionId: string) => {
    setQuestionHistory(prev => 
      prev.map(question => 
        question.id === questionId 
          ? { ...question, isFavorite: !question.isFavorite } 
          : question
      )
    );
  };

  return (
    <UserContext.Provider value={{
      user,
      isLoggedIn: !!user,
      questionHistory,
      favoriteQuestions,
      login,
      logout,
      toggleFavorite
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};