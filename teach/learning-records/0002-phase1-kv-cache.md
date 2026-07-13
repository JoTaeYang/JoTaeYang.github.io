# 0002 — Phase 1 begun: the decode loop & KV cache

**Date:** 2026-07-10

## Context
Learner asked to proceed to Phase 1 immediately after Lesson 1 (no questions raised on the
memory-bound model — treat as tentatively understood; verify with cold retrieval later).

## Decision: lead Phase 1 with the KV cache, not batching or attention math
Rationale: Lesson 1 left an implicit question ("does the model re-process the whole context
every token?"). The KV cache is the answer and the prerequisite for everything else in Phase 1
— prefill/decode split, and especially batching (batch is capped by KV-cache memory). Teaching
batching first would dangle on an unexplained memory consumer.

## Delivered
- Lesson `0002-decode-loop-and-kv-cache.html`: what K/V are, why caching them turns quadratic
  into linear, the prefill-vs-decode table (TTFT/TPOT), and a KV-cache size calc
  (~320 KB/token → 3.2 GB per 10K-token user → ~100 GB at batch 32). Punchline: KV cache is the
  *second* memory consumer after weights and caps batch size.
- Glossary: added Attention, KV cache, Batching; fleshed out Prefill vs Decode.
- RESOURCES: (Phase 1 sources still to be added to the file — noted below.)

## Deliberately deferred (kept out of ZPD)
- Attention math internals (softmax, scaling), GQA/MHA head details, PagedAttention — flagged as
  ask-me hooks in the lesson, to teach on demand or in later lessons.
- Exact origin of "KV dim 1024" — simplified; will unpack if asked.

## Open / next
- **Next lesson (ZPD):** Batching — throughput vs memory tradeoff; continuous batching; why batch
  amortizes the weight-read from Lesson 1. This is the most mission-relevant serving lever.
- TODO: add Phase 1 sources to RESOURCES.md (MLMastery prefill/decode, Google scaling book, Morph KV).
- Still unconfirmed: whether learner has GPU/serving hardware (gates hands-on from Phase 3).
- Spaced retrieval due: have learner redo the Lesson 1 tokens/sec floor calc cold.
