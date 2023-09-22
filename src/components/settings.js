import React, { useState } from 'react';


const Settings = () => {
  const questions = [
    {
      id: 1,
      questionText: '1. Which shape is the net of a cube?',
      options: [
        { id: 1, text: 'Square', isCorrect: true },
        { id: 2, text: 'Triangle', isCorrect: false },
        { id: 3, text: 'Hexagon', isCorrect: false },
        { id: 4, text: 'Pentagon', isCorrect: false },
      ],
    },
    {
      id: 2,
      questionText:
        '2. What 3D shape is formed when you fold a rectangular piece of paper in half along its length?',
      options: [
        { id: 1, text: 'Cylinder', isCorrect: false },
        { id: 2, text: 'Sphere', isCorrect: true },
        { id: 3, text: 'Cone', isCorrect: false },
        { id: 4, text: 'Cuboid', isCorrect: false },
      ],
    },
    {
      id: 3,
      questionText: '3. Which shape is symmetrical along its vertical axis?',
      options: [
        { id: 1, text: 'Triangle', isCorrect: false },
        { id: 2, text: 'Rectangle', isCorrect: true },
        { id: 3, text: 'Pentagon', isCorrect: false },
        { id: 4, text: 'Circle', isCorrect: false },
      ],
    },
    {
      id: 4,
      questionText: '4. How many faces does a rectangular prism have?',
      options: [
        { id: 1, text: '4', isCorrect: false },
        { id: 2, text: '5', isCorrect: true },
        { id: 3, text: '6', isCorrect: false },
        { id: 4, text: '8', isCorrect: false },
      ],
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);

  const handleOptionSelect = (questionId, optionId) => {
    const updatedAnswers = { ...selectedAnswers };
    updatedAnswers[questionId] = optionId;
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmitQuiz = () => {
    let totalScore = 0;
    questions.forEach((question) => {
      const selectedOptionId = selectedAnswers[question.id];
      const correctOption = question.options.find(
        (option) => option.isCorrect
      );
      if (selectedOptionId === correctOption.id) {
        totalScore++;
      }
    });
    setScore(totalScore);
  };

  return (
    <div className="projects-section ">
      <div className="project-boxes ">
        <div>
          <div className="projects-section-header">
            <p>Take a Quiz</p>
            <p className="time">September, 15</p>
          </div>
          <table style={{ width: '1303px' }}>
            <tbody>
              {questions.map((question) => (
                <tr key={question.id}>
                  <td>
                    <div>
                      <p className="question">{question.questionText}</p>
                      <ul style={{ listStyleType: "none" }}>
                        {question.options.map((option) => (
                          <div className="box-content-header">

                            <li key={option.id}>
                              <input
                                className="answer"
                                type="radio"
                                name={`q${question.id}`}
                                value={option.id}
                                onChange={() =>
                                  handleOptionSelect(question.id, option.id)
                                }
                              />
                              <label>{option.text}</label>
                            </li>
                            <br />
                          </div>
                        ))}
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <div className="submitter">
            <button
              className="quizSubmit btn btn-primary"
              onClick={handleSubmitQuiz}
              type="button"
            >
              Submit
            </button>
          </div>
          <br />
          {/* Display the user's score upon submission */}
          {score !== null && (
            <div>
              <h2 className="quizScore">Your Score: {score} / {questions.length}</h2>
            </div>
          )}
        </div>
      </div>
    </div>


  );
};

export default Settings;
