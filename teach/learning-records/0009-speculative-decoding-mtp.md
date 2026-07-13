# 0009 — Phase 2 flagship: speculative decoding / MTP

**Date:** 2026-07-10

## Context
Learner asked to move to the Phase 2 flagship topic after Lesson 8, deferring other side-quests
("다른거는 뭐 또 보다가 보충할게"). The prior session died on context overflow right after writing
the lesson HTML; this record + glossary + RESOURCES updates were completed in a follow-up session.

## Delivered
- Lesson `0009-speculative-decoding-mtp.html`:
  - Reopens the L1 waste ("whole weight-read per single token") and asks the new question:
    one weight-read → multiple tokens for the *same* user (vs batching = multiple users).
  - **Draft-then-verify**: cheap draft of K tokens, big model verifies all K in ONE parallel
    (compute-bound, prefill-like) pass — verification is nearly free because compute is ~940×
    cheaper than memory (L1 callback).
  - **Lossless**: min(1, p/q) acceptance rule preserves the big model's exact output distribution —
    the decisive contrast with quantization (lossy). A bad draft only slows, never corrupts.
  - **MTP** = self-speculation: extra future-token heads on the big model itself, no separate
    draft model (GLM/DeepSeek style — what the Sionic post means by "MTP").
  - **The headline numbers derived by hand**: bytes/token = bytes/pass ÷ acceptance length →
    6.65 ÷ 1 / ÷3.5 / ÷10 = 6.65 → 1.9 → 0.67 GB/token → the post's ~100 → ~600 tok/s.
  - **Quantization↔MTP coupling paid off** (L6 hook): quantization accuracy loss → draft quality ↓
    → acceptance length ↓ → throughput can *drop*. Plus workload dependence (code ↑, creative ↓)
    and the Sionic 3-layer structure (ⓐ MTP tuning → ⓑ runtime/SGLang → ⓒ kernels).
- Glossary: Speculative decoding (new), MTP (expanded from stub), Acceptance length (new).
- RESOURCES: BentoML + NVIDIA overviews, Leviathan 2022, Gloeckle 2024.

## Addendum (same day) — §5 added from learner Q&A
Two sharp questions ("작고 빠른 예측기가 LLM 내부에 있는 거야?", "t+2를 찍으려면 t+1을 모르는데
어떻게 예측해?" — the second shows real autoregressive understanding) → answered in chat, then
learner asked to preserve. Added **§5 "초안은 어디서, 어떻게 나오나"** (old §5/§6 renumbered to §6/§7):
- 5a: draft location — separate small model (classic, costs weights+KV memory) vs MTP heads on the
  trunk (self-speculation, ~free). "Same brain, extra output ports."
- 5b: how t+2 is drafted without t+1 — parallel heads (independent, trajectory-rich final hidden
  state, accuracy decays with distance) vs chained (condition on own t+1 guess, one thin MTP module
  per step; DeepSeek-V3/GLM style).
- 5c: why blind drafting is safe — verify truncates at first mismatch; cost is slowness, never
  wrongness. Plus "generation is sequential, verification is parallel" (draft tokens are given).
- Retrieval check ⑸ added; ask-hooks refreshed (EAGLE/Medusa, why acceptance reaches 3.5–10).

## Deliberately deferred (ask-me hooks in lesson)
- Why min(1,p/q) preserves the distribution (the proof); how MTP heads are trained;
  how acceptance reaches 3.5–10 despite first-mismatch truncation (tree drafts); EAGLE/Medusa
  differences; how to measure acceptance length in practice (Phase 3 hands-on candidate).

## Set up for next lesson
- Lesson nav points to **MoE** as the remaining Phase 2 topic (glossary stub exists: GLM-5.2 = 753B
  total, only ~a fraction active per token → where the 6.65 GB/pass figure comes from). After MoE,
  a Phase-2 checkpoint quiz, then Phase 3 (hands-on serving — GPU access confirmed).

## Open / next
- Still need the learner's exact GPU (arch/VRAM) before designing Phase 3 exercises.
- Spaced-retrieval backlog: L1 tok/s calc, attention→KV derivation, prefill-stall=compute-time,
  now + acceptance-length division. Fold into the Phase-2 checkpoint.
