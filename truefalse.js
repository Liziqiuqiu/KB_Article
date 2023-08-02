// quiz.js
function createTrueFalseQuiz(question, trueOption, falseOption, correctAnswer) {
    // Get the quiz container element
    const quizContainer = document.querySelector('.quiz');
  
    // Create quiz body
    const quizBody = document.createElement('div');
    quizBody.classList.add('quiz-body');
    quizBody.innerHTML = `<p>${question}</p>
                          <label>
                            <input type="radio" name="answer" value="true"> ${trueOption}
                          </label>
                          <label>
                            <input type="radio" name="answer" value="false"> ${falseOption}
                          </label>`;
  
    // Create submit button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', showResult);
  
    // Create feedback div
    const feedbackDiv = document.createElement('div');
    feedbackDiv.classList.add('feedback');
  
    // Append quiz body, submit button, and feedback div to the quiz container
    quizContainer.appendChild(quizBody);
    quizContainer.appendChild(submitButton);
    quizContainer.appendChild(feedbackDiv);
  
    function showResult() {
      // Get the user's selected answer
      const userAnswer = document.querySelector('input[name="answer"]:checked');
  
      if (!userAnswer) {
        feedbackDiv.textContent = 'Please select an answer.';
        return;
      }
  
      // Compare the user's answer with the correct answer
      if (userAnswer.value === correctAnswer) {
        feedbackDiv.textContent = 'Correct! You chose the right answer.';
      } else {
        feedbackDiv.textContent = 'Incorrect. You chose the wrong answer.';
      }
    }
  }
  
  // Call the createTrueFalseQuiz function with question, options, and correct answer parameters

  