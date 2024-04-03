import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
const EditQuestionComponent = () => {
    const location = useLocation();
    const { question } = location.state;
    const [editedQuestion, setEditedQuestion] = useState({ ...question });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedQuestion(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleOptionsChange = (index, value) => {
        const newOptions = [...editedQuestion.options];
        newOptions[index] = value;
        setEditedQuestion(prevState => ({
            ...prevState,
            options: newOptions
        }));
    };

    const handleUpdate = () => {
        // Handle update logic here, you can send editedQuestion to your backend or update state in parent component
        console.log("Updated Question:", editedQuestion);
    };

    return (
        <div>
            <label>
                Question:
                <input
                    type="text"
                    name="question"
                    value={editedQuestion.question}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Options:
                {editedQuestion.options && editedQuestion.options.map((option, index) => (
                    <input
                        key={index}
                        type="text"
                        value={option}
                        onChange={e => handleOptionsChange(index, e.target.value)}
                    />
                ))}
            </label>
            <br />
            <label>
                Correct Option:
                <input
                    type="text"
                    name="correctOption"
                    value={editedQuestion.correctOption}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Question Type:
                <select
                    name="questionType"
                    value={editedQuestion.questionType}
                    onChange={handleInputChange}
                >
                    <option value="direct">Direct</option>
                    <option value="scenario">Scenario</option>
                </select>
            </label>
            <br />
            <label>
                Difficulty:
                <select
                    name="difficulty"
                    value={editedQuestion.difficulty}
                    onChange={handleInputChange}
                >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </label>
            <br />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default EditQuestionComponent;
