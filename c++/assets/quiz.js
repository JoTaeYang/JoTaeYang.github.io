// Shared quiz widget. Usage in a lesson:
//   <div class="quiz" data-quiz></div>
//   <script>
//     Quiz(document.querySelector('[data-quiz]'), {
//       q: '질문?',
//       options: ['답 하나', '답 둘', '답 셋'],   // keep options the same length!
//       answer: 1,                                // index of correct option
//       explain: '정답 해설.'
//     });
//   </script>
function Quiz(el, spec) {
  el.classList.add('quiz');
  const q = document.createElement('div');
  q.className = 'quiz-q';
  q.textContent = spec.q;
  el.appendChild(q);

  const feedback = document.createElement('div');
  feedback.className = 'quiz-feedback';

  spec.options.forEach((text, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt';
    btn.textContent = text;
    btn.addEventListener('click', () => {
      if (el.dataset.done) return;
      el.dataset.done = '1';
      const buttons = el.querySelectorAll('.quiz-opt');
      buttons[spec.answer].classList.add('correct');
      if (i !== spec.answer) btn.classList.add('wrong');
      feedback.textContent = (i === spec.answer ? '정답! ' : '오답. ') + (spec.explain || '');
      feedback.classList.add('show');
    });
    el.appendChild(btn);
  });
  el.appendChild(feedback);
}
