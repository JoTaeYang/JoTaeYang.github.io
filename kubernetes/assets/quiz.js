/* ============================================================
   재사용 퀴즈 위젯 — 모든 레슨이 공유.
   마크업 규약:
     <div class="quiz">
       <p class="q">질문?</p>
       <div class="opts">
         <button class="opt" data-correct="true">정답</button>
         <button class="opt">오답</button>
       </div>
       <div class="explain">정답 설명 (HTML 가능)</div>
     </div>
   동작: 보기 클릭 → 즉시 채점(정/오답 색) → 설명 공개 → 잠금(재시도 불가).
   목적: 회상 연습(retrieval practice) 으로 storage strength 강화.
   ============================================================ */
(function () {
  function wire(quiz) {
    var opts = quiz.querySelectorAll("button.opt");
    var explain = quiz.querySelector(".explain");
    opts.forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (quiz.dataset.done === "1") return;
        quiz.dataset.done = "1";
        var isCorrect = btn.dataset.correct === "true";
        opts.forEach(function (b) {
          b.disabled = true;
          if (b.dataset.correct === "true") b.classList.add("correct");
        });
        if (!isCorrect) btn.classList.add("wrong");
        if (explain) {
          var verdict = document.createElement("span");
          verdict.className = "verdict " + (isCorrect ? "ok" : "no");
          verdict.textContent = isCorrect ? "정답입니다. " : "다시 보기. ";
          explain.insertBefore(verdict, explain.firstChild);
          explain.classList.add("show");
        }
      });
    });
  }
  function init() {
    document.querySelectorAll(".quiz").forEach(wire);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
