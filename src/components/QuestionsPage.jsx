import React, { useState } from 'react';
import Filter from './Filter';
import questionsData from './data/QuestionsData'; // Assuming you have questionsData file with your questions
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import QuestionComponent from './QuestionComponent';

const QuestionsPage = () => {
  // const [filteredQuestions, setFilteredQuestions] = useState(questionsData);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const navigate = useNavigate();

  const handleEdit = (question) => {
    navigate('/editquestion', { state: { question } });
  };

  const handleDelete = (questionId) => {
    axios.post('/delete/question', { id: questionId })
      .then(response => {
        console.log('Question deleted successfully');
      })
      .catch(error => {
        console.error('Error deleting question:', error);
      });
  };

  const handleFilter = (filters) => {
    let filteredData = questionsData;

    if (filters.subject) {
      filteredData = filteredData.filter(question => question.subject === filters.subject);
    }
    if (filters.subTopic) {
      filteredData = filteredData.filter(question => question.subTopic === filters.subTopic);
    }
    if (filters.difficulty) {
      filteredData = filteredData.filter(question => question.difficulty === filters.difficulty);
    }
    if (filters.questionType) {
      filteredData = filteredData.filter(question => question.questionType === filters.questionType);
    }

    // setFilteredQuestions(filteredData);
    if (filteredData.length === questionsData.length) {
      setFilteredQuestions([]);
    } else {
      setFilteredQuestions(filteredData);
    }
  };

  return (
    <div>
      <h1>Questions Page</h1>
      <Filter onFilter={handleFilter} />

      <div>
        <h2>Filtered Questions</h2>
        <ol>
          {/* {filteredQuestions.map(question => (
            <li key={question.id}>
              <h3>{question.question}</h3>
              <p>Subject: {question.subject}</p>
              <p>Sub-Topic: {question.subTopic}</p>
              <p>Difficulty: {question.difficulty}</p>
              <p>Question Type: {question.questionType}</p>
              <button onClick={() => handleEdit(question)}>Edit</button>
              <button onClick={() => handleDelete(question.id)}>Delete</button>
            </li>
          ))} */}
          {filteredQuestions.length === 0 ? (
            <p>No questions found</p>
          ) : (
            <ol>
              {filteredQuestions.map(question => (
                <QuestionComponent key={question.id} question={question} onEdit={handleEdit} onDelete={handleDelete} />
              ))}
            </ol>
          )}
        </ol>
      </div>
    </div>
  );
};

export default QuestionsPage;