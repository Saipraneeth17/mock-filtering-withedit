import './App.css';
import EditQuestionComponent from './components/EditQuestionComponent';
import QuestionsPage from './components/QuestionsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuestionsPage />} />
        <Route path="/editquestion" element={<EditQuestionComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
