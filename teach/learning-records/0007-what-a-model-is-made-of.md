# 0007 — Foundations lesson enshrined from a clarifier chain (what a model is made of)

**Date:** 2026-07-10

## Context
Mid-Phase-2 (after the quantization lesson), the learner drilled all the way down through a chain of
"what is this really?" questions, in order:
1. "파라미터당 바이트가 무슨 말이야?"  → bytes-per-parameter = storage width choice (C-type analogy)
2. "700억 개의 숫자가 하는 게 뭐야?"    → parameters = multiply-add coefficients (mixing-console knobs)
3. "레이어란 무엇인가?"                 → repeating attention+FFN stage; function composition; depth
4. "토큰은 왜 벡터로 표현돼?"           → embeddings; meaning coordinates; closes L3's dot-product=similarity
5. "벡터 값(+1/−1)은 뭐고 축 의미는 누가 정해?" → coordinates; emergent + distributed representation
Then asked to enshrine the chain (items 1–5) as HTML.

## Delivered
- Lesson `0007-what-a-model-is-made-of.html` (labeled *Foundations*, sits conceptually beneath P1/P2):
  the five-step arc as one story, ending in a unified flow diagram tying back to L1 (why all weights are read)
  and L6 (quantization = bytes/param). Includes the honest correction that axes aren't individually meaningful
  (distributed representation) — the learner probed exactly the simplification I'd flagged earlier.
- Glossary: Parameter/Weight, Bytes per parameter, Layer/Block, FFN, Embedding, Distributed representation,
  Gradient descent.
- Primary sources: 3Blue1Brown Neural Networks, Illustrated Transformer.

## Learner signal
- Relentlessly bottoms-out concepts before moving on — will not accept a black box. This is a feature: the
  foundation is now unusually solid for someone who started at "진짜 zero." Keep honoring it; flag simplifications
  honestly because they WILL come back and probe them (they did, re: axis meaning).
- Systems framing keeps working (C types, function composition, pipeline stages all landed).

## Update — §6 added (coreference mechanism)
Learner then asked "그것이 동물인 걸 어떻게 알아내?" and asked to fold it into Lesson 7. Added as section 6:
a concrete step-by-step of Q(pronoun)·K(noun) alignment → V absorption across layers/heads, with the
"why 동물 not 길" semantic-cue (Winograd) explanation and the honest interpretability caveat. This is the
capstone of the foundations arc — it operationalizes attention + embeddings + training on one sentence.
Retrieval self-check extended with a coreference item.

## Deliberately deferred (ask-me hooks in lesson)
- Backprop mechanics (how gradient descent "nudges"); FFN exact math; LM head (vector→token); why depth helps;
  positional encoding (order info); long-context coreference; whether per-head hypotheses are empirically observed.

## Open / next
- **Return to the Phase 2 through-line: MTP / speculative decoding** — the Sionic headline (6.65→0.67 GB/token,
  ~100→~600 tok/s). All prerequisites now in place (autoregressive loop, weights-per-token, quantization coupling).
- After MTP, consider MoE (also a Sionic term) then a Phase-2 checkpoint quiz.
- Hands-on Phase 3 pending: still need the learner's exact GPU/VRAM to tailor exercises.
- Spaced-retrieval backlog: L1 tok/s calc; attention→KV; prefill-stall=compute-time; quantization=bytes/param.
