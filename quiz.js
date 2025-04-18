   const questions = [
    {
     question: "Which of the following is not a fruit?",
     options: ["Avocado", "Olives","Broccoli","Pumpkin"],
     correctIdx: 2
    },
    {
     question:"Which country is the biggest producer of potatoes in the world?",
     options: ["China", "Ireland", "India", "USA"],
     correctIdx: 0
    },
   {
     question: "The biggest tomato (according to Guinness World Records) was grown in Minnesota, USA in 2022. How much did it weigh?",
     options: ["2.568 kg", "4.021 kg", "5.284 kg", "7.192 kg"],
     correctIdx: 2
   },
    {
     question:"Which fruit is also known as the Chinese gooseberry?",
     options: ["Honeydew melon", "Kiwi fruit", "Greengage", "Lychee"],
     correctIdx: 1
    },
    {
      question:"Where did coffee originate from?",
      options: ["Brazil", "Turkey", "Java", "Ethiopia"],
      correctIdx: 3
    }
   ];

  let currentQuestionIdx = 0;
  let score = 0;


  const startButton = document.getElementById('start-button');
  const quizContent = document.getElementById('quiz-content');
  const questionContainer = document.getElementById('question-container');
  const resultDiv = document.getElementById('result');

  startButton.addEventListener('click', startQuiz);

  function startQuiz() {
    startButton.classList.add('hidden');
    quizContent.classList.remove('hidden');
    showQuestion();
  }

  function showQuestion() {
    if (currentQuestionIdx >= questions.length) {
      showResult();
      return;
    }

    const question = questions[currentQuestionIdx];
    questionContainer.innerHTML = `
      <div class="question active">
        <h2 class="text-md font-semibold mb-5 text-white">Question ${currentQuestionIdx + 1} of ${questions.length}</h2>
        <p class="text-md m-5 text-white">${question.question}</p>
        <div class="space-y-5">
          ${question.options.map((option, index) => `
            <button class="option-button w-full text-left bg-yellow-50 hover:bg-yellow-200 text-black font-medium font-medium p-5 rounded-md" onclick="checkAnswer(${index})">${option}</button>
          `).join('')}
        </div>
      </div>
    `;
  }

  function checkAnswer(selectedIndex) {

    const question = questions[currentQuestionIdx];
    const buttons = document.querySelectorAll('.option-button');
    
    buttons.forEach(button => button.disabled = true);
    
    if (selectedIndex === question.correctIdx) {
      buttons[selectedIndex].classList.remove('bg-yellow-50', 'hover:bg-yellow-200');
      buttons[selectedIndex].classList.add('bg-lime-600', 'text-white');
      score++;
    } else {
      buttons[selectedIndex].classList.remove('bg-yellow-50', 'hover:bg-yellow-200');
      buttons[selectedIndex].classList.add('bg-rose-500', 'text-white');
      buttons[question.correctIdx].classList.remove('bg-yellow-50', 'hover:bg-yellow-200');
      buttons[question.correctIdx].classList.add('bg-lime-600', 'text-white');
    }

    setTimeout(() => {
      currentQuestionIdx++;
      showQuestion();
    }, 2000);
  }

  function showResult() {
    questionContainer.innerHTML = '';
    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = `
      <h2 class="text-lg font-semibold m-5 text-white text-center">All done!</h2>
      <p class="text-md m-5 text-white text-center">You scored ${score} out of 5.</p>
      <button onclick="resetQuiz()" class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold p-5 text-center items-center rounded-md">
        &#127817 Have another go! &#127817
      </button>
    `;
  }

  function resetQuiz() {
    currentQuestionIdx = 0;
    score = 0;
    resultDiv.classList.add('hidden');
    startButton.classList.remove('hidden');
    quizContent.classList.add('hidden');
  }

  