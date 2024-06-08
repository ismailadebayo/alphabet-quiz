const questionElement = document.getElementById("question");
const choicesForm = document.getElementById("choices");
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");
const audioElement = document.getElementById("audio");
const resultDiv = document.getElementById("result");
const answeredSpan = document.getElementById("answered");
const correctSpan = document.getElementById("correct");
const incorrectSpan = document.getElementById("incorrect");

const questions = [
  {
    question: "Question 1/30: Identify the letter in the sound?",
    choices: [
      { text: "Haa", image: "./alphabet/haastart.jpg" },
      { text: "Goin", image: "./alphabet/goin-mid.jpg" },
      { text: "Ain", image: "./alphabet/ain-middle.jpg" },
      { text: "Hhaa", image: "./alphabet/haa-end.jpg" },
    ],
    correctAnswer: "Haa",
    audio: "./audio/haa-audio.ogg",
  },
  {
    question: "Question 2/30: Identify the letter in the sound?",
    choices: [
      { text: "Haa", image: "./alphabet/haastart.jpg" },
      { text: "Goin", image: "./alphabet/goin-mid.jpg" },
      { text: "Ain", image: "./alphabet/ain-middle.jpg" },
      { text: "Hhaa", image: "./alphabet/haa-end.jpg" },
    ],
    correctAnswer: "Hhaa",
    audio: "./audio/haaa-audio.ogg",
  },
  {
    question: "Question 3/30: Identify the letter in the sound?",
    choices: [
      { text: "Haa", image: "./alphabet/haastart.jpg" },
      { text: "Goin", image: "./alphabet/goin-mid.jpg" },
      { text: "Ain", image: "./alphabet/ain-middle.jpg" },
      { text: "Hhaa", image: "./alphabet/haa-end.jpg" },
    ],
    correctAnswer: "Goin",
    audio: "./audio/goin-audio.ogg",
  },
  {
    question: "Question 4/30: Identify the letter in the sound?",
    choices: [
      { text: "Haa", image: "./alphabet/haastart.jpg" },
      { text: "Goin", image: "./alphabet/goin-mid.jpg" },
      { text: "Ain", image: "./alphabet/ain-middle.jpg" },
      { text: "Hhaa", image: "./alphabet/haa-end.jpg" },
    ],
    correctAnswer: "Ain",
    audio: "./audio/ain-audio.ogg",
  },
  {
    question: "Question 5/30: Identify the letter in the sound?",
    choices: [
      { text: "Haa", image: "./alphabet/haa-end.jpg" },
      { text: "Goin", image: "./alphabet/goin-end.jpg" },
      { text: "Khaa", image: "./alphabet/khaa-start.jpg" },
      { text: "Hamza", image: "./alphabet/hamza-end.jpg" },
    ],
    correctAnswer: "Khaa",
    audio: "./audio/khaa-audio.ogg",
  },
  {
    question: "Question 6/30: Identify the letter in the sound?",
    choices: [
      { text: "Haa", image: "./alphabet/haa-end.jpg" },
      { text: "Goin", image: "./alphabet/goin-end.jpg" },
      { text: "Khaa", image: "./alphabet/khaa-start.jpg" },
      { text: "Hamza", image: "./alphabet/hamza-middle.jpg" },
    ],
    correctAnswer: "Hamza",
    audio: "./audio/hamza-audio.ogg",
  },
  {
    question: "Question 7/30: Identify the letter in the sound?",
    choices: [
      { text: "Yaa", image: "./alphabet/yaa-middle.jpg" },
      { text: "Raa", image: "./alphabet/raa-end.jpg" },
      { text: "Mim", image: "./alphabet/mim-beg.jpg" },
      { text: "Lam", image: "./alphabet/lam-middle.jpg" },
    ],
    correctAnswer: "Lam",
    audio: "./audio/laam.ogg",
  },
  {
    question: "Question 8/30: Identify the letter in the sound?",
    choices: [
      { text: "Yaa", image: "./alphabet/yaa-middle.jpg" },
      { text: "Raa", image: "./alphabet/raa-end.jpg" },
      { text: "Mim", image: "./alphabet/mim-beg.jpg" },
      { text: "Lam", image: "./alphabet/lam-middle.jpg" },
    ],
    correctAnswer: "Raa",
    audio: "./audio/raa-audio.ogg",
  },
  {
    question: "Question 9/30: Identify the letter in the sound?",
    choices: [
      { text: "Yaa", image: "./alphabet/yaa-middle.jpg" },
      { text: "Raa", image: "./alphabet/raa-end.jpg" },
      { text: "Mim", image: "./alphabet/mim-beg.jpg" },
      { text: "Lam", image: "./alphabet/lam-middle.jpg" },
    ],
    correctAnswer: "Mim",
    audio: "./audio/mim-audio.ogg",
  },
  {
    question: "Question 10/30: Identify the letter in the sound?",
    choices: [
      { text: "Yaa", image: "./alphabet/yaa-middle.jpg" },
      { text: "Raa", image: "./alphabet/raa-end.jpg" },
      { text: "Mim", image: "./alphabet/mim-beg.jpg" },
      { text: "Lam", image: "./alphabet/lam-middle.jpg" },
    ],
    correctAnswer: "Yaa",
    audio: "./audio/yaa-audio.ogg",
  },
  {
    question: "Question 11/30: Identify the letter in the sound?",
    choices: [
      { text: "Waw", image: "./alphabet/waw-middle.jpg" },
      { text: "Raa", image: "./alphabet/raa-end.jpg" },
      { text: "Mim", image: "./alphabet/mim-beg.jpg" },
      { text: "Nun", image: "./alphabet/nun-middle.jpg" },
    ],
    correctAnswer: "Nun",
    audio: "./audio/nun-audio.ogg",
  },
  {
    question: "Question 12/30: Identify the letter in the sound?",
    choices: [
      { text: "Waw", image: "./alphabet/waw-middle.jpg" },
      { text: "Raa", image: "./alphabet/raa-end.jpg" },
      { text: "Mim", image: "./alphabet/mim-beg.jpg" },
      { text: "Nun", image: "./alphabet/nun-middle.jpg" },
    ],
    correctAnswer: "Waw",
    audio: "./audio/wow-audio.ogg",
  },
  {
    question: "Question 13/30: Identify the letter in the sound?",
    choices: [
      { text: "Baa", image: "./alphabet/baa-mid.jpg" },
      { text: "Thaa", image: "./alphabet/thaa-beg.jpg" },
      { text: "Taa", image: "./alphabet/taa-middle.jpg" },
      { text: "Jim", image: "./alphabet/jim-start.jpg" },
    ],
    correctAnswer: "Baa",
    audio: "./audio/baa-audio.ogg",
  },
  {
    question: "Question 14/30: Identify the letter in the sound?",
    choices: [
      { text: "Baa", image: "./alphabet/baa-mid.jpg" },
      { text: "Thaa", image: "./alphabet/thaa-beg.jpg" },
      { text: "Taa", image: "./alphabet/taa-middle.jpg" },
      { text: "Jim", image: "./alphabet/jim-start.jpg" },
    ],
    correctAnswer: "Jim",
    audio: "./audio/jim-audio.ogg",
  },
  {
    question: "Question 15/30: Identify the letter in the sound?",
    choices: [
      { text: "Baa", image: "./alphabet/baa-mid.jpg" },
      { text: "Thaa", image: "./alphabet/thaa-beg.jpg" },
      { text: "Taa", image: "./alphabet/taa-middle.jpg" },
      { text: "Jim", image: "./alphabet/jim-start.jpg" },
    ],
    correctAnswer: "Thaa",
    audio: "./audio/thaa-audio.ogg",
  },
  {
    question: "Question 16/30: Identify the letter in the sound?",
    choices: [
      { text: "Baa", image: "./alphabet/baa-mid.jpg" },
      { text: "Thaa", image: "./alphabet/thaa-beg.jpg" },
      { text: "Taa", image: "./alphabet/taa-middle.jpg" },
      { text: "Jim", image: "./alphabet/jim-start.jpg" },
    ],
    correctAnswer: "Taa",
    audio: "./audio/taa-audio.ogg",
  },
  {
    question: "Question 17/30: Identify the letter in the sound?",
    choices: [
      { text: "Sin", image: "./alphabet/sin-end.jpg" },
      { text: "Dhal", image: "./alphabet/dhaal-end.jpg" },
      { text: "Zayun", image: "./alphabet/zayun-end.jpg" },
      { text: "Dal", image: "./alphabet/daal-end.jpg" },
    ],
    correctAnswer: "Zayun",
    audio: "./audio/zayun-audio.ogg",
  },
  {
    question: "Question 18/30: Identify the letter in the sound?",
    choices: [
      { text: "Sin", image: "./alphabet/sin-end.jpg" },
      { text: "Dhal", image: "./alphabet/dhaal-end.jpg" },
      { text: "Zayun", image: "./alphabet/zayun-end.jpg" },
      { text: "Dal", image: "./alphabet/daal-end.jpg" },
    ],
    correctAnswer: "Sin",
    audio: "./audio/sin-audio.ogg",
  },
  {
    question: "Question 19/30: Identify the letter in the sound?",
    choices: [
      { text: "Sin", image: "./alphabet/sin-end.jpg" },
      { text: "Dhal", image: "./alphabet/dhaal-end.jpg" },
      { text: "Zayun", image: "./alphabet/zayun-end.jpg" },
      { text: "Dal", image: "./alphabet/daal-end.jpg" },
    ],
    correctAnswer: "Dal",
    audio: "./audio/daal-audio.ogg",
  },
  {
    question: "Question 20/30: Identify the letter in the sound?",
    choices: [
      { text: "Sin", image: "./alphabet/sin-end.jpg" },
      { text: "Dhal", image: "./alphabet/dhaal-end.jpg" },
      { text: "Zayun", image: "./alphabet/zayun-end.jpg" },
      { text: "Dal", image: "./alphabet/daal-end.jpg" },
    ],
    correctAnswer: "Dhal",
    audio: "./audio/dhaal-audio.ogg",
  },
  {
    question: "Question 21/30: Identify the letter in the sound?",
    choices: [
      { text: "Sod", image: "./alphabet/sad-middle.jpg" },
      { text: "Zoo", image: "./alphabet/zoo-end.jpg" },
      { text: "Dood", image: "./alphabet/dood-end.jpg" },
      { text: "Shin", image: "./alphabet/shin-mid.jpg" },
    ],
    correctAnswer: "Shin",
    audio: "./audio/shin-audio.ogg",
  },
  {
    question: "Question 22/30: Identify the letter in the sound?",
    choices: [
      { text: "Sod", image: "./alphabet/sad-middle.jpg" },
      { text: "Zoo", image: "./alphabet/zoo-end.jpg" },
      { text: "Dood", image: "./alphabet/dood-end.jpg" },
      { text: "Shin", image: "./alphabet/shin-mid.jpg" },
    ],
    correctAnswer: "Zoo",
    audio: "./audio/zoo-audio.ogg",
  },
  {
    question: "Question 23/30: Identify the letter in the sound?",
    choices: [
      { text: "Sod", image: "./alphabet/sad-middle.jpg" },
      { text: "Zoo", image: "./alphabet/zoo-end.jpg" },
      { text: "Dood", image: "./alphabet/dood-end.jpg" },
      { text: "Shin", image: "./alphabet/shin-mid.jpg" },
    ],
    correctAnswer: "Sod",
    audio: "./audio/sad-audio.ogg",
  },
  {
    question: "Question 24/30: Identify the letter in the sound?",
    choices: [
      { text: "Sod", image: "./alphabet/sad-middle.jpg" },
      { text: "Zoo", image: "./alphabet/zoo-end.jpg" },
      { text: "Dood", image: "./alphabet/dood-end.jpg" },
      { text: "Shin", image: "./alphabet/shin-mid.jpg" },
    ],
    correctAnswer: "Dood",
    audio: "./audio/dod-audio.ogg",
  },
  {
    question: "Question 25/30: Identify the letter in the sound?",
    choices: [
      { text: "Too", image: "./alphabet/too-mid.jpg" },
      { text: "Kaf", image: "./alphabet/kaf-beg.jpg" },
      { text: "Qof", image: "./alphabet/qaf-middle.jpg" },
      { text: "Faa", image: "./alphabet/faa-middle.jpg" },
    ],
    correctAnswer: "Faa",
    audio: "./audio/faa-audio.ogg",
  },
  {
    question: "Question 26/30: Identify the letter in the sound?",
    choices: [
      { text: "Too", image: "./alphabet/too-mid.jpg" },
      { text: "Kaf", image: "./alphabet/kaf-beg.jpg" },
      { text: "Qof", image: "./alphabet/qaf-middle.jpg" },
      { text: "Faa", image: "./alphabet/faa-middle.jpg" },
    ],
    correctAnswer: "Too",
    audio: "./audio/too-audio.ogg",
  },
  {
    question: "Question 27/30: Identify the letter in the sound?",
    choices: [
      { text: "Too", image: "./alphabet/too-mid.jpg" },
      { text: "Kaf", image: "./alphabet/kaf-beg.jpg" },
      { text: "Qof", image: "./alphabet/qaf-middle.jpg" },
      { text: "Faa", image: "./alphabet/faa-middle.jpg" },
    ],
    correctAnswer: "Kaf",
    audio: "./audio/kaaf.ogg",
  },
  {
    question: "Question 28/30: Identify the letter in the audio?",
    choices: [
      { text: "Too", image: "./alphabet/too-mid.jpg" },
      { text: "Kaf", image: "./alphabet/kaf-beg.jpg" },
      { text: "Qof", image: "./alphabet/qaf-middle.jpg" },
      { text: "Faa", image: "./alphabet/faa-middle.jpg" },
    ],
    correctAnswer: "Qof",
    audio: "./audio/qaf-audio.ogg",
  },
  {
    question: "Question 29/30: Identify the letter in the sound?",
    choices: [
      { text: "Hamza", image: "./alphabet/hamza-end.jpg" },
      { text: "Goin", image: "./alphabet/goin-end.jpg" },
      { text: "Dood", image: "./alphabet/dood-end.jpg" },
      { text: "Dal", image: "./alphabet/dal.jpg" },
    ],
    correctAnswer: "Hamza",
    audio: "./audio/hamza-audio.ogg",
  },
  {
    question: "Question 30/30: Identify the letter in the sound?",
    choices: [
      { text: "Haa", image: "./alphabet/haa-end.jpg" },
      { text: "Goin", image: "./alphabet/goin-end.jpg" },
      { text: "Dood", image: "./alphabet/dood-end.jpg" },
      { text: "Ain", image: "./alphabet/ain-end.jpg" },
    ],
    correctAnswer: "Ain",
    audio: "./audio/ain-audio.ogg",
  },
  // Add more questions here...
];

let currentQuestionIndex = 0;
let answeredCount = 0;
let correctCount = 0;

function loadQuestion(questionIndex) {
  const question = questions[questionIndex];
  questionElement.textContent = question.question;
  choicesForm.innerHTML = "";
  question.choices.forEach((choice, index) => {
    const choiceElement = document.createElement("input");
    choiceElement.type = "radio";
    choiceElement.id = "choice" + index;
    choiceElement.name = "choices";
    choiceElement.value = choice.text;
    const labelElement = document.createElement("label");
    labelElement.htmlFor = "choice" + index;
    if (choice.image) {
      const imgElement = document.createElement("img");
      imgElement.style.width = "40px";
      imgElement.style.height = "40px";
      imgElement.style.paddingTop = "15px";
      imgElement.src = choice.image;
      labelElement.appendChild(imgElement);
    } else {
      labelElement.textContent = choice.text;
    }
    choicesForm.appendChild(choiceElement);
    choicesForm.appendChild(labelElement);
    choicesForm.appendChild(document.createElement("br"));
  });
  audioElement.src = question.audio;
  audioElement.volume = 0.5;
}

function checkAnswer(selectedAnswer, correctAnswer) {
  answeredCount++;
  if (selectedAnswer === correctAnswer) {
    correctCount++;
    return true;
  }
  return false;
}

submitButton.addEventListener("click", () => {
  const selectedChoice = document.querySelector(
    'input[name="choices"]:checked'
  );
  if (selectedChoice) {
    const selectedAnswer = selectedChoice.value;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (checkAnswer(selectedAnswer, correctAnswer)) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
    if (currentQuestionIndex === questions.length - 1) {
      displayResult();
    } else {
      currentQuestionIndex++;
      loadQuestion(currentQuestionIndex);
    }
  } else {
    alert("Please select an answer.");
  }
});

function displayResult() {
  submitButton.style.display = "none";
  resetButton.style.display = "block";
  resultDiv.style.display = "block";
  answeredSpan.textContent = answeredCount;
  correctSpan.textContent = correctCount;
  incorrectSpan.textContent = answeredCount - correctCount;
}

resetButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  answeredCount = 0;
  correctCount = 0;
  submitButton.style.display = "block";
  resetButton.style.display = "none";
  resultDiv.style.display = "none";
  loadQuestion(currentQuestionIndex);
});

loadQuestion(currentQuestionIndex);
