# 0004 — Batching: the throughput vs memory tradeoff (Phase 1 near-complete)

**Date:** 2026-07-10

## Delivered
- Lesson `0004-batching-throughput-vs-memory.html`: batching amortizes the Lesson-1 weight-read across
  N users (batch 1 ≈114 tok/s → batch 32 ≈3,650 tok/s *throughput*, per-user latency ~flat); KV cache caps
  the batch (worked "190GB − 70GB weights = 120GB → ~37 users" wall); static vs continuous batching, with
  the prefill-stalling caveat flagged for Phase 3 (chunked prefill). Explicit tie to how the Sionic post
  stacks batching + quantization + kernels on this same tension.
- Glossary: Batching (expanded), Throughput vs Latency, Static vs Continuous batching, PagedAttention.
- RESOURCES: Anyscale continuous-batching, BentoML batching (to add to file if not yet).

## Pedagogical arc so far (Phase 1)
L1 memory-bound → L2 KV cache → L3 attention (root) → L4 batching. The four now form a closed loop:
attention's "all-attends-to-all" ⇒ KV cache ⇒ memory-bound decode ⇒ batching to amortize ⇒ KV cache caps
batching. The learner has the full mental model to reason about serving throughput. Good place to pause/verify.

## Deliberately deferred
- PagedAttention internals, chunked prefill, disaggregated prefill/decode → Phase 3 (serving stack).
- Exact throughput roll-off curve / compute-bound crossover math → mentioned as simplification, teach if asked.

## Open / next
- **Phase 1 is essentially done.** Next is **Phase 2: the knobs** — start with **quantization (FP8/FP4)**,
  the single most mission-relevant lever (shrinks both weights *and* KV cache → more batch + speed), and the
  first Sionic-post term (FP8/FP4) we can now fully motivate. Then MoE, then MTP/speculative decoding.
- Consider a **Phase 1 recap/checkpoint lesson or quiz** before Phase 2 to consolidate (spaced retrieval:
  L1 tok/s calc, attention→KV derivation). Offer this to the learner.
- STILL unconfirmed: GPU/serving hardware access (gates hands-on from Phase 3). Ask again before Phase 3.
