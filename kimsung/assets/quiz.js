// Reusable quiz widget. Markup contract:
//   <div class="quiz" data-answer="1">
//     <div class="q">Question?</div>
//     <button class="opt">wrong</button>
//     <button class="opt">right</button>   <!-- index 1 == data-answer -->
//     <div class="feedback" data-correct="..." data-wrong="..."></div>
//   </div>
// Answer index is 0-based. Feedback text comes from data-correct / data-wrong.
document.querySelectorAll('.quiz').forEach(function (quiz) {
  var answer = parseInt(quiz.getAttribute('data-answer'), 10);
  var opts = quiz.querySelectorAll('.opt');
  var fb = quiz.querySelector('.feedback');
  var done = false;
  opts.forEach(function (opt, i) {
    opt.addEventListener('click', function () {
      if (done) return;
      done = true;
      var right = i === answer;
      opt.classList.add(right ? 'correct' : 'wrong');
      if (!right) opts[answer].classList.add('correct');
      fb.classList.add(right ? 'correct' : 'wrong');
      fb.textContent = right ? (fb.dataset.correct || 'Correct.') : (fb.dataset.wrong || 'Not quite.');
    });
  });
});
