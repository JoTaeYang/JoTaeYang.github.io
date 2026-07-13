# Notes (teaching scratchpad)

## Learner profile
- Goal: production LLM inference serving/optimization at work.
- Baseline: near-zero on GPU/CUDA/LLM-inference internals.
- Ambition: wants to reach the level of writing CUDA kernels.
- Language: explanations to the learner in **Korean**; artifacts/docs in English.

## Teaching preferences (update as learned)
- Wants depth ("직접 CUDA 커널까지 짜보는 수준") — do not over-simplify away the real machinery,
  but respect zone-of-proximal-development: one tangible win per lesson.
- Motivated by a concrete artifact (the Sionic GLM-5.2 post) → keep tying lessons back to it.

## Pacing
- Each lesson: short, one concept, one calculation or quiz, one primary source.
- Phase 0 first: build the memory-bound mental model before any hardware detail.

## Learner has GPU access ✅ (confirmed 2026-07-10)
- Practice GPU available → Phase 3 CAN and SHOULD be hands-on. Plan real exercises:
  run vLLM/SGLang, measure tok/s at batch sizes, watch KV-cache OOM, try FP8 vs FP16, observe
  chunked-prefill scheduling. Design a lesson that has them reproduce the Lesson-1/4/6 numbers on real HW.
- TODO before Phase 3: ask what GPU(s) exactly (arch/VRAM) to tailor exercises.

## Strong systems/OS mindset (see LR 0005)
- Learner reasons via OS scheduling / multiprocessor / SMT analogies unprompted. Lean on architecture
  analogies heavily — they accelerate this learner. Concrete worked traces (iter-by-iter tables) land best.

## Course hub (index.html)
- `teach/index.html` is the central entry point — all lessons/phases/glossary linked, with status badges.
  **When adding a lesson: add its row to index.html and update the phase status.** Lesson footers and the
  glossary link back to it via "🏠 Hub". Open the hub (not individual lessons) when resuming.

## Mission update (2026-07-13)
- Learner is now **assigned vLLM deployment/inference-optimization at work** — mission got real.
  Phase 3 opened early at their request (L10 vLLM engine args); MoE deferred to L11.
  Bias upcoming lessons toward vLLM-operational skills; SGLang still matters for the capstone.

## Open threads
- (resolved) GPU access confirmed.
- STILL NEED: exact GPU model (arch/VRAM) → design the hands-on `vllm serve` lesson
  (verify KV-block hand-calc vs startup log, sweep max-num-batched-tokens, ITL/TTFT).
