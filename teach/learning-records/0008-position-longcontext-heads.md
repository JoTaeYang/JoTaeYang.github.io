# 0008 — Position / long-context / head-specialization (separate lesson)

**Date:** 2026-07-10

## Context
Follow-up to L7 §6 (coreference). Learner asked three deepening questions and to split them into their own
lesson (chose "Lesson 8 로 별도로 빼줘"):
1. long-context coreference — same mechanism? 2. are per-head hypotheses actually observed? 3. where does
positional/order info enter?

## Delivered
- Lesson `0008-position-longcontext-heads.html`: (1) attention is permutation-invariant → RoPE injects
  relative distance into Q·K; (2) long-context = same mechanism, degraded quality (softmax dilution,
  lost-in-the-middle, past-trained-length) + memory tie-in (KV ∝ context) + YaRN/position-interpolation as
  Phase-3 hook; (3) head specialization is empirically real (induction / name-mover / IOI, via activation
  patching), with the honest polysemanticity caveat. Synthesis diagram links all three.
- Glossary: Positional encoding/RoPE, Long context, Head specialization.
- Sources: RoFormer (2104.09864), Lost in the Middle (2307.03172), Induction Heads (Anthropic 2022),
  IOI circuit (2211.00593).

## Learner arc note
The foundations detour (L7 + L8) is now genuinely deep — embeddings, layers, coreference mechanism, position,
long-context, interpretability. Started at "진짜 zero" ~2 hours ago. The learner drives depth; this is working.
Watch that we don't lose the Phase-2 through-line (MTP) — it's the next hard checkpoint and directly serves the
mission + the Sionic post's headline number.

## Deliberately deferred (ask-me hooks in lesson)
- YaRN/position-interpolation mechanics; why lost-in-the-middle arises; activation patching detail;
  sinusoidal-vs-RoPE tradeoff.

## Open / next
- **Strongly steer to MTP next** (Phase 2 through-line): the Sionic headline (6.65→0.67 GB/token; ~100→~600
  tok/s). All prerequisites are now over-satisfied. If the learner keeps branching, that's fine, but offer MTP
  as the default forward each time.
- Then: MoE, Phase-2 checkpoint quiz, then Phase 3 (hands-on — need learner's exact GPU/VRAM).
- Spaced-retrieval backlog growing; schedule a consolidation quiz before Phase 3.
