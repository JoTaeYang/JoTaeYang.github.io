# Mission

## The learner
An engineer who needs to **serve and optimize LLM inference in production** at work.
Starting from near-zero on GPU / CUDA / LLM-inference internals, but wants to go all
the way down to **writing CUDA kernels** eventually.

## Why this topic
The trigger was the Sionic blog post *"GLM-5.2 를 단일 GPU에서 10배 빠르게"*
(https://blog.sionic.ai/glm-5-2-x10). That post assumes fluency in a whole stack:
memory-bandwidth roofline reasoning, MoE, FP8 quantization, tcgen05 / TMEM tensor-core
kernels, Split-K, and Multi-Token Prediction. The learner wants to be able to read that
post — and, more importantly, do the underlying work — with real understanding.

## The destination (what "done" looks like)
Able to:
1. Reason about *why* an inference workload is fast or slow (roofline / memory-bound thinking).
2. Operate and tune a serving stack (batching, quantization, speculative/MTP decoding).
3. Read and eventually write GPU kernels that matter for inference.
4. Re-read the Sionic post and follow every claim, including the numbers.

## Grounding principle
Every lesson ties back to a *serving/optimization decision the learner would actually make*.
Concepts are introduced only when a concrete performance question forces them.

## Learning path (living outline — will evolve)
- **Phase 0 — Mental model:** why decode-phase inference is memory-bound; tokens/sec floor. ← current
- **Phase 1 — The workload:** transformer decode loop, KV cache, prefill vs decode, batching.
- **Phase 2 — The knobs:** quantization (FP8/FP4), MoE, speculative & Multi-Token Prediction.
- **Phase 3 — The stack:** serving frameworks (vLLM/SGLang), CUDA graphs, kernel fusion.
- **Phase 4 — The metal:** GPU architecture (SMs, warps, HBM, tensor cores), then writing CUDA kernels.
- **Capstone:** read the Sionic GLM-5.2 post end to end and explain every optimization.

_Last reviewed: 2026-07-10_
