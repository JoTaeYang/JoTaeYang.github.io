# 0001 — Mission set, baseline established, Phase 0 begun

**Date:** 2026-07-10

## Context
Learner arrived via the Sionic "GLM-5.2 x10" blog post and asked to learn it "from zero."

## What we established
- **Mission:** production LLM inference serving/optimization at work.
- **Baseline:** near-zero on GPU / CUDA / LLM-inference internals ("진짜 zero").
- **Ambition:** wants to eventually write CUDA kernels themselves — high ceiling.
- Because the ceiling is high but the floor is zero, the path is long; sequenced into
  Phases 0→4 + capstone in `MISSION.md`.

## Decision: start with the memory-bound mental model (Phase 0), not hardware
Rationale: the entire Sionic post is downstream of one idea — decode-phase inference is
memory-bandwidth-bound. Teaching tcgen05/TMEM first would be out of the zone of proximal
development and ungrounded. Lesson 0001 delivers the tokens/sec-floor calculation as the
first tangible win.

## Delivered
- Workspace scaffold (MISSION, RESOURCES, NOTES, glossary, shared style.css + quiz.js).
- Lesson `0001-why-inference-is-memory-bound.html`: worked calc showing memory ≈ 940× slower
  than compute for batch-1 decode, tied to the blog's 6.65→0.67 GB/token MTP numbers.

## Open / next
- Confirm learner has (or wants) real GPU/serving hardware to practice on — gates Phase 3+.
- Next lesson (ZPD): the transformer decode loop + KV cache — *why* weights get re-read every
  token, and what the KV cache is. This makes prefill-vs-decode and batching land.
- Watch for: whether the tokens/sec calculation actually stuck (ask learner to redo it cold
  next session — spaced retrieval).
