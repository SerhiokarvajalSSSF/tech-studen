import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SubjectPage from './pages/SubjectPage';
import QuestionPage from './pages/QuestionPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/subject/:subjectId" element={<SubjectPage />} />
      <Route path="/question/:questionId" element={<QuestionPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;