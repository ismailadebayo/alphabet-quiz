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
    question: "Question 1: Identify the letter in the sound?",
    choices: [
      { text: "Haa", image: "../alphabet/haa-start.jpeg" },
      { text: "Goin", image: "../alphabet/goin-mid.jpeg" },
      { text: "Ain", image: "../alphabet/ain-middle.jpeg" },
      { text: "Hhaa", image: "../alphabet/haa-end.jpeg" },
    ],
    correctAnswer: "Haa",
    audio: "../audio/haa-audio.ogg",
  },
  {
    question: "Question 2: Identify the letter in the sound?",
    choices: [
      { text: "Haa", image: "../alphabet/haa-start.jpeg" },
      { text: "Goin", image: "../alphabet/goin-mid.jpeg" },
      { text: "Ain", image: "../alphabet/ain-middle.jpeg" },
      { text: "Hhaa", image: "../alphabet/haa-end.jpeg" },
    ],
    correctAnswer: "Hhaa",
    audio: "../audio/haaa-audio.ogg",
  },
  {
    question: "Question 3: Identify the letter in the sound?",
    choices: [
      { text: "Haa", image: "../alphabet/haa-start.jpeg" },
      { text: "Goin", image: "../alphabet/goin-mid.jpeg" },
      { text: "Ain", image: "../alphabet/ain-middle.jpeg" },
      { text: "Hhaa", image: "../alphabet/haa-end.jpeg" },
    ],
    correctAnswer: "Goin",
    audio: "../audio/goin-audio.ogg",
  },
  {
    question: "Question 4: Identify the letter in the sound?",
    choices: [
      { text: "Haa", image: "../alphabet/haa-start.jpeg" },
      { text: "Goin", image: "../alphabet/goin-mid.jpeg" },
      { text: "Ain", image: "../alphabet/ain-middle.jpeg" },
      { text: "Hhaa", image: "../alphabet/haa-end.jpeg" },
    ],
    correctAnswer: "Ain",
    audio: "../audio/ain-audio.ogg",
  },
  {
    question: "Question 5: Identify the letter in the sound?",
    choices: [
      { text: "Haa", image: "../alphabet/haa-end.jpeg" },
      { text: "Goin", image: "../alphabet/goin-end.jpeg" },
      { text: "Khaa", image: "../alphabet/khaa-start.jpeg" },
      { text: "Hamza", image: "../alphabet/hamza-end.jpeg" },
    ],
    correctAnswer: "Khaa",
    audio: "../audio/khaa-audio.ogg",
  },
  {
    question: "Question 6: Identify the letter in the sound?",
    choices: [
      { text: "Haa", image: "../alphabet/haa-end.jpeg" },
      { text: "Goin", image: "../alphabet/goin-end.jpeg" },
      { text: "Khaa", image: "../alphabet/khaa-start.jpeg" },
      { text: "Hamza", image: "../alphabet/hamza-middle.jpeg" },
    ],
    correctAnswer: "Hamza",
    audio: "../audio/hamza-audio.ogg",
  },
  {
    question: "Question 7: Identify the letter in the sound?",
    choices: [
      { text: "Yaa", image: "../alphabet/yaa-middle.jpeg" },
      { text: "Raa", image: "../alphabet/raa-end.jpeg" },
      { text: "Mim", image: "../alphabet/mim-beg.jpeg" },
      { text: "Lam", image: "../alphabet/lam-middle.jpeg" },
    ],
    correctAnswer: "Lam",
    audio: "../audio/laam.ogg",
  },
  {
    question: "Question 8: Identify the letter in the sound?",
    choices: [
      { text: "Yaa", image: "../alphabet/yaa-middle.jpeg" },
      { text: "Raa", image: "../alphabet/raa-end.jpeg" },
      { text: "Mim", image: "../alphabet/mim-beg.jpeg" },
      { text: "Lam", image: "../alphabet/lam-middle.jpeg" },
    ],
    correctAnswer: "Raa",
    audio: "../audio/raa-audio.ogg",
  },
  {
    question: "Question 9: Identify the letter in the sound?",
    choices: [
      { text: "Yaa", image: "../alphabet/yaa-middle.jpeg" },
      { text: "Raa", image: "../alphabet/raa-end.jpeg" },
      { text: "Mim", image: "../alphabet/mim-beg.jpeg" },
      { text: "Lam", image: "../alphabet/lam-middle.jpeg" },
    ],
    correctAnswer: "Mim",
    audio: "../audio/mim-audio.ogg",
  },
  {
    question: "Question 10: Identify the letter in the sound?",
    choices: [
      { text: "Yaa", image: "../alphabet/yaa-middle.jpeg" },
      { text: "Raa", image: "../alphabet/raa-end.jpeg" },
      { text: "Mim", image: "../alphabet/mim-beg.jpeg" },
      { text: "Lam", image: "../alphabet/lam-middle.jpeg" },
    ],
    correctAnswer: "Yaa",
    audio: "../audio/yaa-audio.ogg",
  },
  {
    question: "Question 11: Identify the letter in the sound?",
    choices: [
      { text: "Waw", image: "../alphabet/waw-middle.jpeg" },
      { text: "Raa", image: "../alphabet/raa-end.jpeg" },
      { text: "Mim", image: "../alphabet/mim-beg.jpeg" },
      { text: "Nun", image: "../alphabet/nun-middle.jpeg" },
    ],
    correctAnswer: "Nun",
    audio: "../audio/nun-audio.ogg",
  },
  {
    question: "Question 12: Identify the letter in the sound?",
    choices: [
      { text: "Waw", image: "../alphabet/waw-middle.jpeg" },
      { text: "Raa", image: "../alphabet/raa-end.jpeg" },
      { text: "Mim", image: "../alphabet/mim-beg.jpeg" },
      { text: "Nun", image: "../alphabet/nun-middle.jpeg" },
    ],
    correctAnswer: "Waw",
    audio: "../audio/wow-audio.ogg",
  },
  {
    question: "Question 13: Identify the letter in the sound?",
    choices: [
      { text: "Baa", image: "../alphabet/baa-mid.jpeg" },
      { text: "Thaa", image: "../alphabet/thaa-beg.jpeg" },
      { text: "Taa", image: "../alphabet/taa-middle.jpeg" },
      { text: "Jim", image: "../alphabet/jim-start.jpeg" },
    ],
    correctAnswer: "Baa",
    audio: "../audio/baa-audio.ogg",
  },
  {
    question: "Question 14: Identify the letter in the sound?",
    choices: [
      { text: "Baa", image: "../alphabet/baa-mid.jpeg" },
      { text: "Thaa", image: "../alphabet/thaa-beg.jpeg" },
      { text: "Taa", image: "../alphabet/taa-middle.jpeg" },
      { text: "Jim", image: "../alphabet/jim-start.jpeg" },
    ],
    correctAnswer: "Jim",
    audio: "../audio/jim-audio.ogg",
  },
  {
    question: "Question 15: Identify the letter in the sound?",
    choices: [
      { text: "Baa", image: "../alphabet/baa-mid.jpeg" },
      { text: "Thaa", image: "../alphabet/thaa-beg.jpeg" },
      { text: "Taa", image: "../alphabet/taa-middle.jpeg" },
      { text: "Jim", image: "../alphabet/jim-start.jpeg" },
    ],
    correctAnswer: "Thaa",
    audio: "../audio/thaa-audio.ogg",
  },
  {
    question: "Question 16: Identify the letter in the sound?",
    choices: [
      { text: "Baa", image: "../alphabet/baa-mid.jpeg" },
      { text: "Thaa", image: "../alphabet/thaa-beg.jpeg" },
      { text: "Taa", image: "../alphabet/taa-middle.jpeg" },
      { text: "Jim", image: "../alphabet/jim-start.jpeg" },
    ],
    correctAnswer: "Taa",
    audio: "../audio/taa-audio.ogg",
  },
  {
    question: "Question 17: Identify the letter in the sound?",
    choices: [
      { text: "Sin", image: "../alphabet/sin-end.jpeg" },
      { text: "Dhal", image: "../alphabet/dhaal-end.jpeg" },
      { text: "Zayun", image: "../alphabet/zayun-end.jpeg" },
      { text: "Dal", image: "../alphabet/daal-end.jpeg" },
    ],
    correctAnswer: "Zayun",
    audio: "../audio/zayun-audio.ogg",
  },
  {
    question: "Question 18: Identify the letter in the sound?",
    choices: [
      { text: "Sin", image: "../alphabet/sin-end.jpeg" },
      { text: "Dhal", image: "../alphabet/dhaal-end.jpeg" },
      { text: "Zayun", image: "../alphabet/zayun-end.jpeg" },
      { text: "Dal", image: "../alphabet/daal-end.jpeg" },
    ],
    correctAnswer: "Sin",
    audio: "../audio/sin-audio.ogg",
  },
  {
    question: "Question 19: Identify the letter in the sound?",
    choices: [
      { text: "Sin", image: "../alphabet/sin-end.jpeg" },
      { text: "Dhal", image: "../alphabet/dhaal-end.jpeg" },
      { text: "Zayun", image: "../alphabet/zayun-end.jpeg" },
      { text: "Dal", image: "../alphabet/daal-end.jpeg" },
    ],
    correctAnswer: "Dal",
    audio: "../audio/daal-audio.ogg",
  },
  {
    question: "Question 20: Identify the letter in the sound?",
    choices: [
      { text: "Sin", image: "../alphabet/sin-end.jpeg" },
      { text: "Dhal", image: "../alphabet/dhaal-end.jpeg" },
      { text: "Zayun", image: "../alphabet/zayun-end.jpeg" },
      { text: "Dal", image: "../alphabet/daal-end.jpeg" },
    ],
    correctAnswer: "Dhal",
    audio: "../audio/dhaal-audio.ogg",
  },
  {
    question: "Question 21: Identify the letter in the sound?",
    choices: [
      { text: "Sod", image: "../alphabet/sad-middle.jpeg" },
      { text: "Zoo", image: "../alphabet/zoo-end.jpeg" },
      { text: "Dood", image: "../alphabet/dood-end.jpeg" },
      { text: "Shin", image: "../alphabet/shin-mid.jpeg" },
    ],
    correctAnswer: "Shin",
    audio: "../audio/shin-audio.ogg",
  },
  {
    question: "Question 22: Identify the letter in the sound?",
    choices: [
      { text: "Sod", image: "../alphabet/sad-middle.jpeg" },
      { text: "Zoo", image: "../alphabet/zoo-end.jpeg" },
      { text: "Dood", image: "../alphabet/dood-end.jpeg" },
      { text: "Shin", image: "../alphabet/shin-mid.jpeg" },
    ],
    correctAnswer: "Zoo",
    audio: "../audio/zoo-audio.ogg",
  },
  {
    question: "Question 23: Identify the letter in the sound?",
    choices: [
      { text: "Sod", image: "../alphabet/sad-middle.jpeg" },
      { text: "Zoo", image: "../alphabet/zoo-end.jpeg" },
      { text: "Dood", image: "../alphabet/dood-end.jpeg" },
      { text: "Shin", image: "../alphabet/shin-mid.jpeg" },
    ],
    correctAnswer: "Sod",
    audio: "../audio/sad-audio.ogg",
  },
  {
    question: "Question 24: Identify the letter in the sound?",
    choices: [
      { text: "Sod", image: "../alphabet/sad-middle.jpeg" },
      { text: "Zoo", image: "../alphabet/zoo-end.jpeg" },
      { text: "Dood", image: "../alphabet/dood-end.jpeg" },
      { text: "Shin", image: "../alphabet/shin-mid.jpeg" },
    ],
    correctAnswer: "Dood",
    audio: "../audio/dod-audio.ogg",
  },
  {
    question: "Question 25: Identify the letter in the sound?",
    choices: [
      { text: "Too", image: "../alphabet/too-mid.jpeg" },
      { text: "Kaf", image: "../alphabet/kaf-beg.jpeg" },
      { text: "Qof", image: "../alphabet/qaf-middle.jpeg" },
      { text: "Faa", image: "../alphabet/faa-middle.jpeg" },
    ],
    correctAnswer: "Faa",
    audio: "../audio/faa-audio.ogg",
  },
  {
    question: "Question 26: Identify the letter in the sound?",
    choices: [
      { text: "Too", image: "../alphabet/too-mid.jpeg" },
      { text: "Kaf", image: "../alphabet/kaf-beg.jpeg" },
      { text: "Qof", image: "../alphabet/qaf-middle.jpeg" },
      { text: "Faa", image: "../alphabet/faa-middle.jpeg" },
    ],
    correctAnswer: "Too",
    audio: "../audio/too-audio.ogg",
  },
  {
    question: "Question 27: Identify the letter in the sound?",
    choices: [
      { text: "Too", image: "../alphabet/too-mid.jpeg" },
      { text: "Kaf", image: "../alphabet/kaf-beg.jpeg" },
      { text: "Qof", image: "../alphabet/qaf-middle.jpeg" },
      { text: "Faa", image: "../alphabet/faa-middle.jpeg" },
    ],
    correctAnswer: "Kaf",
    audio: "../audio/kaaf.ogg",
  },
  {
    question: "Question 28: Identify the letter in the audio?",
    choices: [
      { text: "Too", image: "../alphabet/too-mid.jpeg" },
      { text: "Kaf", image: "../alphabet/kaf-beg.jpeg" },
      { text: "Qof", image: "../alphabet/qaf-middle.jpeg" },
      { text: "Faa", image: "../alphabet/faa-middle.jpeg" },
    ],
    correctAnswer: "Qof",
    audio: "../audio/qaf-audio.ogg",
  },
  {
    question: "Question 29: Identify the letter in the sound?",
    choices: [
      { text: "Hamza", image: "../alphabet/hamza-end.jpeg" },
      { text: "Goin", image: "../alphabet/goin-end.jpeg" },
      { text: "Dood", image: "../alphabet/dood-end.jpeg" },
      { text: "Dal", image: "../alphabet/dal.jpeg" },
    ],
    correctAnswer: "Hamza",
    audio: "../audio/hamza-audio.ogg",
  },
  {
    question: "Question 30: Identify the letter in the sound?",
    choices: [
      { text: "Haa", image: "../alphabet/haa-end.jpeg" },
      { text: "Goin", image: "../alphabet/goin-end.jpeg" },
      { text: "Dood", image: "../alphabet/dood-end.jpeg" },
      { text: "Ain", image: "../alphabet/ain-end.jpeg" },
    ],
    correctAnswer: "Ain",
    audio: "../audio/ain-audio.ogg",
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
