# 0005 — Chunked prefill enshrined; learner reasons by systems analogy

**Date:** 2026-07-10

## Context
After Lesson 4, learner drilled into prefill scheduling via clarifiers: "chunked prefill이 뭐야?"
→ asked for a concrete 2-user worked example → surfaced a misconception ("메모리를 일부씩 점유해서
안 멈추는 것") → corrected to compute-time axis → learner spontaneously mapped it to
"멀티 프로세스 아키텍처" → asked to enshrine as HTML.

## Signal about the learner (important for pacing)
- **Strong systems/OS/concurrency mindset.** Reached for time-slicing / multiprocess on their own; the
  SMT (hyperthreading) analogy for prefill+decode co-scheduling landed well. Repo has an
  "art of multiprocessor programming" study — lean on OS/architecture analogies; they accelerate this learner.
- Learns by concrete worked traces (the iter-by-iter table was what made it click). Keep using them.
- Catches and voices their own misconceptions — engage them, don't just lecture.

## Delivered
- Lesson `0005-chunked-prefill-scheduling.html`: 2-user iter-by-iter timelines (with vs without chunking),
  the compute-time-vs-memory correction made central, the resource-mixing ASCII diagram, and an explicit
  OS-scheduling + SMT mapping table. Quiz targets the exact misconception (answer: compute-time, not memory).
- Glossary: Prefill stalling, Chunked prefill; annotated PagedAttention as the memory-axis counterpart.
- Primary source: SARATHI (arXiv 2308.16369).

## Correction captured (teach-back worthy)
Misconception: "chunked prefill splits *memory* occupation." Reality: it caps *compute per iteration*
(step length). Memory-axis splitting is PagedAttention — a separate concern. This distinction is now the
quiz's discriminator.

## Open / next
- **Phase 1 fully done (L1–L5).** Next: **Phase 2 — quantization (FP8/FP4)**, first, then MoE, then MTP.
  Given the systems mindset, frame quantization as "fewer bytes per weight → the Lesson-1 numerator shrinks →
  everything downstream (bandwidth, KV cache, batch) improves" and connect FP4 to the Blackwell/Sionic thread.
- Deferred (ask-me hooks left): multi-request scheduler priority/fairness; disaggregated prefill/decode serving;
  how chunk size is chosen in practice → good Phase 3 material.
- STILL unconfirmed: GPU/serving hardware access. Ask before Phase 3 (hands-on).
- Spaced retrieval backlog: L1 tok/s calc; attention→KV derivation; prefill-stalling = compute-time (not memory).
