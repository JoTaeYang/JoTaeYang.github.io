# 0006 — Phase 2 begun: quantization; GPU access confirmed

**Date:** 2026-07-10

## Two things happened
1. Learner **confirmed they have practice-GPU access** → Phase 3 will be hands-on (see NOTES).
2. Entered **Phase 2 (the knobs)** with quantization.

## Delivered
- Lesson `0006-quantization.html`: framed via the Lesson-1 formula for the systems learner —
  quantization cuts *bytes per parameter*, not param count. Worked table FP16(2B)→FP8(1B)→FP4(0.5B)
  with tok/s doubling each halving (57→114→228). "Double win": memory axis (traffic + KV cache + batch)
  and compute axis (tensor cores faster at low precision — revealed that Lesson 1's "15 PFLOPS FP4" was
  exactly this). Then the accuracy-cost tension (FP8 ~free, FP4 risky on math/code/reasoning), and the
  Sionic insight that quantization accuracy loss lowers MTP acceptance length → coupled, not free.
- Glossary: Quantization, FP formats (E4M3/E5M2/FP4), Tensor Core (+tcgen05 forward-ref), weight-only vs
  weight+activation (GPTQ/AWQ).
- RESOURCES Phase 2 populated (BentoML primary + format/method refs).

## Deliberately deferred (ask-me hooks in lesson)
- GPTQ vs AWQ calibration mechanics; per-block scaling detail; activation-outlier problem;
  KV-cache quantization specifics. Teach on demand or fold into a Phase 3 hands-on ("try FP8 vs FP16").

## Set up for next lesson
- Lesson 6 ends on the quantization↔MTP coupling as an explicit hook. **Next: MTP / speculative decoding** —
  the Sionic post's headline algorithmic breakthrough (6.65→1.9→0.67 GB/token; ~100→~600 tok/s). This closes
  Phase 2's most important idea and directly explains the blog's biggest number.

## Open / next
- Ask which exact GPU(s) the learner has before designing Phase 3 exercises (arch/VRAM tailors them).
- Spaced-retrieval backlog still open: L1 tok/s calc cold; attention→KV derivation; prefill-stall=compute-time.
  Consider a short Phase-2 checkpoint quiz after MTP.
