# Resources

High-trust materials to ground lessons. Grade: ⭐ = quality/trust, not difficulty.

## Foundations — memory-bound inference & roofline
- ⭐⭐⭐ **Pierre Lienhart — LLM Inference Series #5: Dissecting model performance**
  https://medium.com/@plienhar/llm-inference-series-5-dissecting-model-performance-6144aa93168f
  The clearest walkthrough of arithmetic intensity, roofline, and why decode is memory-bound. Primary source for Phase 0.
- ⭐⭐⭐ **LLM Inference Unveiled: Survey and Roofline Model Insights** (arXiv 2402.16363)
  https://arxiv.org/html/2402.16363v4
  Rigorous survey framing every optimization through the roofline. Good reference, denser read.
- ⭐⭐ **APXML — LLM Inference Bottlenecks (memory vs compute)**
  https://apxml.com/courses/llm-compression-acceleration/chapter-1-foundations-llm-efficiency-challenges/memory-compute-bottlenecks-inference
- ⭐⭐ **Towards Data Science — Understanding Application Performance with Roofline Modeling**
  https://towardsdatascience.com/understanding-application-performance-with-roofline-modeling/

## The workload (transformer decode, KV cache, batching)
- ⭐⭐⭐ **MachineLearningMastery — From Prompt to Prediction: Prefill, Decode, and the KV Cache**
  https://machinelearningmastery.com/from-prompt-to-prediction-understanding-prefill-decode-and-the-kv-cache-in-llms/
  Primary source for Lesson 2 — the three concepts in one clean flow.
- ⭐⭐⭐ **Google — How To Scale Your Model: Inference** (jax-ml scaling book)
  https://jax-ml.github.io/scaling-book/inference/
  The rigorous reference for prefill/decode, KV cache, batching math. Denser; return to it repeatedly.
- ⭐⭐ **Morph — KV Cache Explained**
  https://www.morphllm.com/kv-cache-explained
- ⭐⭐⭐ **Jay Alammar — The Illustrated Transformer** (primary source for Lesson 3, attention)
  https://jalammar.github.io/illustrated-transformer/
- ⭐⭐⭐ **Vaswani et al. — Attention Is All You Need** (2017, the original transformer paper)
  https://arxiv.org/abs/1706.03762
- ⭐⭐⭐ **Anyscale — Continuous batching for LLM inference (23x throughput)** (primary source, Lesson 4)
  https://www.anyscale.com/blog/continuous-batching-llm-inference
- ⭐⭐ **BentoML — Static, dynamic and continuous batching**
  https://bentoml.com/llm/inference-optimization/static-dynamic-continuous-batching

## Quantization / MoE / speculative decoding
- ⭐⭐⭐ **BentoML — LLM Quantization** (primary source, Lesson 6 — formats & methods, practical)
  https://bentoml.com/llm/model-preparation/llm-quantization
- ⭐⭐ **RCR Tech — LLMs and quantization: FP8, FP4, and INT8 explained** (E4M3/E5M2 format sense)
  https://rcrtech.com/semiconductor-news/llms-quantization-fp8-fp4-int8/
- ⭐⭐ **Gingerlabs — LLM Quantization: INT4 vs INT8 vs FP16** (throughput multipliers)
  https://www.gingerlabs.ai/blog/llm-quantization-int4-int8-fp16
- ⭐⭐ **VRLA Tech — INT4, INT8, FP8, AWQ, GPTQ in 2026** (calibration methods GPTQ/AWQ)
  https://vrlatech.com/llm-quantization-explained-int4-int8-fp8-awq-and-gptq-in-2026/
- ⭐⭐⭐ **BentoML — Speculative decoding** (primary source, Lesson 9 — practical overview)
  https://bentoml.com/llm/inference-optimization/speculative-decoding
- ⭐⭐⭐ **NVIDIA — An Introduction to Speculative Decoding**
  https://developer.nvidia.com/blog/an-introduction-to-speculative-decoding-for-reducing-latency-in-ai-inference/
- ⭐⭐⭐ **Leviathan et al. — Fast Inference from Transformers via Speculative Decoding** (2022, the original; the min(1,p/q) lossless proof)
  https://arxiv.org/abs/2211.17192
- ⭐⭐ **Gloeckle et al. — Better & Faster LLMs via Multi-token Prediction** (2024, the MTP-heads idea)
  https://arxiv.org/abs/2404.19737

## Serving stacks
- **SGLang** (the framework the Sionic post patches) — https://github.com/sgl-project/sglang
- **vLLM** — https://github.com/vllm-project/vllm
- ⭐⭐⭐ **vLLM docs — Engine Arguments** (primary source, Lesson 10 — the authoritative flag list)
  https://docs.vllm.ai/en/stable/configuration/engine_args/
- ⭐⭐⭐ **vLLM docs — Optimization & Tuning** (gpu-memory-utilization, chunked prefill, preemption)
  https://docs.vllm.ai/en/stable/configuration/optimization/
- ⭐⭐ **vLLM docs — Speculative Decoding** (speculative-config JSON incl. MTP/EAGLE/ngram)
  https://docs.vllm.ai/en/stable/features/speculative_decoding/

## GPU architecture & CUDA (Phase 4)
- _(to populate — likely NVIDIA CUDA C++ Programming Guide + PMPP book)_

## The catalyst source
- **Sionic — GLM-5.2 x10 (Korean)** https://blog.sionic.ai/glm-5-2-x10
  The post that motivates the whole course. Re-read at the capstone.

## Communities (to test skills / acquire wisdom)
- r/LocalLLaMA (Reddit) — practical serving/quantization discussion.
- GPU MODE (formerly CUDA MODE) Discord + lecture series — for the CUDA-kernel phase.
