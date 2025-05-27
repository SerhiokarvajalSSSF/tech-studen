export interface User {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
}

export interface Question {
  id: string;
  text: string;
  subject: Subject;
  createdAt: Date;
  isFavorite: boolean;
}

export interface Answer {
  id: string;
  questionId: string;
  text: string;
  sources: Source[];
  createdAt: Date;
}

export interface Source {
  title: string;
  url: string;
  type: 'academic' | 'website' | 'book' | 'article';
}

export type Subject = 'historia' | 'filosofia' | 'matematicas' | 'español';

export interface SubjectInfo {
  id: Subject;
  name: string;
  description: string;
  icon: string;
  color: string;
}