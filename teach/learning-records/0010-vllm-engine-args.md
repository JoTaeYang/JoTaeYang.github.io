# 0010 — Phase 3 opens: vLLM engine parameters

**Date:** 2026-07-13

## Context
Learner got assigned **vLLM deployment / inference optimization at work** and explicitly asked
to learn vLLM parameters ("vllm parameter 의 종류와 각 키가 어떤 역할을 하는지"), tied to prior
lessons. This is a user-directed jump into Phase 3, ahead of the planned MoE lesson (MoE
renumbered to L11, still pending). The mission gets more concrete: not just reading the Sionic
post, but operating vLLM in production.

## Delivered
- Lesson `0010-vllm-engine-args.html` — framing: "nothing new, just translation" — every flag
  is a physical quantity already derived in L2/L4/L5/L6/L7/L9:
  - Group ① memory budget: `gpu-memory-utilization` (default 0.92), `max-model-len`,
    `kv-cache-dtype fp8`, `block-size` (PagedAttention teased, not taught).
    Worked calc: A100 80GB → ~55GB KV budget → ~54 concurrent 8k sequences; told learner
    vLLM prints this as `# GPU blocks` at startup (Phase 3 first hands-on = verify by hand).
  - Group ② scheduler: `max-num-seqs` (L4 batch cap — usually KV budget binds first),
    `max-num-batched-tokens` (= the chunked-prefill chunk budget from L5; ITL vs TTFT lever).
  - Group ③ `dtype` vs `quantization` distinction, `speculative-config` JSON
    (methods mtp/eagle/eagle3/draft_model/ngram; num_speculative_tokens = K from L9);
    re-raised the L9 quantization×spec-decode coupling as a production warning.
  - Group ④ TP (vertical split, every GPU per token) vs PP (horizontal, layer ranges) — 세로 vs 가로 only.
  - Engine args (server-wide, set once) vs SamplingParams (per-request) distinction.
  - 3 retrieval quizzes: KV-budget-binds-concurrency, max-num-batched-tokens=ITL lever,
    kv-cache-dtype vs quantization independence.
- Reference `reference/vllm-params.html` — printable cheat sheet: 5 flag groups + SamplingParams
  + a **symptom → first suspect** table (startup OOM, low concurrency, ITL spikes, slow TTFT,
  low single-user tok/s, model doesn't fit).
- Grounding: current vLLM stable docs via context7 (confirmed gpu_memory_utilization default
  0.92, max_num_batched_tokens defaulting logic, speculative_config method names).
- RESOURCES: vLLM engine-args / optimization / spec-decode doc pages.
- Hub: Phase 3 now "진행 중", L10 row added, cheat sheet linked, MoE → L11.

## Deliberately deferred (ask-hooks in lesson)
- PagedAttention mechanics (named + OS-paging analogy only — strong candidate for next
  theory lesson given learner's OS mindset, LR 0005).
- Why TP wins despite All-Reduce traffic (Phase 4 entry point).
- enable-prefix-caching details; CUDA graphs / enforce-eager.

## Open / next
- **Still blocked on learner's GPU model (arch/VRAM)** for the hands-on lesson: run
  `vllm serve`, verify the KV-block hand-calc against startup logs, sweep
  max-num-batched-tokens and watch ITL/TTFT.
- Spaced-retrieval backlog unchanged (L1 tok/s, KV derivation, prefill stall, acceptance
  length) + new: symptom→flag mapping. Fold into a Phase 2/3 checkpoint quiz.
