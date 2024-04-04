import React from 'react';

const QuestionComponent = ({ question, onEdit, onDelete }) => {
  return (
    <li key={question.id}>
      <h3>{question.question}</h3>
      <p>Subject: {question.subject}</p>
      <p>Sub-Topic: {question.subTopic}</p>
      <p>Difficulty: {question.difficulty}</p>
      <p>Question Type: {question.questionType}</p>
      <button onClick={() => onEdit(question)}>Edit</button>
      <button onClick={() => onDelete(question.id)}>Delete</button>
    </li>
  );
};

export default QuestionComponent;
