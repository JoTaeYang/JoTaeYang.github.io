# 0003 — Attention taught as the root concept (out of logical order, on demand)

**Date:** 2026-07-10

## Context
While in Phase 1, learner asked a chain of clarifying questions that drilled *downward*:
K/V → GQA → "어텐션이 뭐야?". So we taught Lesson 2 (KV cache) and GQA *before* attention itself.
Learner then asked to enshrine attention as a formal lesson (chose option 1).

## What this tells us about the learner
- Follows curiosity downward to first principles — good sign; comfortable being told "you'll get
  the root in a moment." Keep answering clarifiers inline, then enshrine the important ones as lessons.
- Prefers concept-first (no code yet), consistent with earlier stated pref; ambition to reach CUDA
  is still the destination, not the current rung.

## Delivered
- Lesson `0003-what-is-attention.html`: pronoun-resolution intuition ("그것"→"동물" with an attention-weight
  bar chart), Q/K/V as a library search, self-attention, heads, why-it-was-revolutionary, and an explicit
  "one property → KV cache → GQA → memory-bound" tie-back. Notes in-lesson that it sits *below* Lesson 2
  conceptually and that the out-of-order path is deliberate (interleaving).
- Glossary: expanded Attention; added Self-attention, Head, MHA/GQA/MQA, Transformer.
- Primary sources: Illustrated Transformer (Alammar), Attention Is All You Need (Vaswani 2017).

## Pedagogy note
Taught KV/GQA before attention, then rooted it — a natural interleaving/spacing setup. Next session,
test retention by asking the learner to derive "why does a KV cache exist?" starting from attention,
cold. If they can, the root landed.

## Deliberately deferred (ask-me hooks left in lesson)
- Why dot-product = similarity; softmax mechanics; how Q/K/V projection weights are learned;
  positional encoding (not yet mentioned — introduce when it matters).

## Open / next
- **Next lesson (ZPD):** Batching — throughput vs memory. Still the top mission-relevant serving lever;
  KV cache + GQA now fully set it up.
- Still unconfirmed: GPU/serving hardware access (gates hands-on from Phase 3).
- Spaced retrieval backlog: (a) Lesson 1 tokens/sec floor calc cold; (b) "attention → KV cache" derivation.
