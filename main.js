let question = document.querySelectorAll("p.faq__question");
let arrow = document.querySelectorAll("img.faq__arrow");
let answer = document.querySelectorAll("p.faq__answer-deactivated");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", () => activateQuestion(question[i], arrow[i], answer[i]));
  arrow[i].addEventListener("click", () => activateQuestion(question[i], arrow[i], answer[i]));
}

function activateQuestion(question, arrow, answer) {
  if (question.className == "faq__question") {
    question.className = "faq__question-active";
    arrow.className = "faq__arrow-active";
    answer.className = "faq__answer";
  } else {
    question.className = "faq__question";
    arrow.className = "faq__arrow";
    answer.className = "faq__answer-deactivated";
  }
}
