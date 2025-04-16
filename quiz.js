const quizQuestions = [
    {
     question: "Which of the following is not a fruit?",
     answers: ["Avocado", "Olives","Broccoli","Pumpkin"],
     correctIndex: 2
    },
    {
     question:"Which country is the biggest producer of potatoes in the world?",
     answers: ["China", "Ireland", "India", "USA"],
     correctIndex: 0
    },
   {
     question: "The biggest tomato (according to Guinness World Records) was grown in Minnesota, USA in 2022. How much did it weigh?",
     answers: ["2.568 kg", "4.021 kg", "5.284 kg", "7.192 kg"],
     correctIndex: 2
   },
    {
     question:"Which fruit is also known as the Chinese gooseberry?",
     answers: ["Honeydew melon", "Kiwi fruit", "Greengage", "Lychee"],
     correctIndex: 1
    },
    {
      question:"Where did coffee originate from?",
      answers: ["Brazil", "Ethiopia", "Turkey", "Java"],
      correctIndex: 1
    }
   ];

   let currentQuestionIndex = 0;
   let currentQuestion = quizQuestions[currentQuestionIndex];
   let score = 0;
   let quizStarted = false;

   const startButton = document.getElementById("start-button");
   const quizContent = document.getElementById("quiz-content");
   const questionContainer = document.getElementById("question-container");
   const result = document.getElementById("result");
   
  startButton.addEventListener('click', quizBegin);

  function quizBegin() {
    quizStarted = true;
    startButton.classList.add("hidden");
    quizContent.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion (){
    if (currentQuestionIndex === quizQuestions.length-1){
        endQuiz();
        return;
    }
  }

    questionContainer.innerHTML = `
      <div class="question active">
        <h2 class="text-lg font-medium font-semibold m-5 text-white"> Q ${currentQuestionIndex+1}/${quizQuestions.length}: </h2>
        <p class="text-md m-5 text-white">${currentQuestion.question}</p>
        <div class="space-y-5">
          ${currentQuestion.answers.map((answer, i) => `
            <button class="option-btn w-full text-left bg-yellow-50 hover:bg-yellow-200 text-black font-medium p-5 rounded-md transition duration-500 ease-in-out" 
            onclick="checkAnswer(${i})">${answer}</button>`)
          .join('')}
         </div>
      </div>`;
  