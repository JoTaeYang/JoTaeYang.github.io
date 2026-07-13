# Config injection (ConfigMap/Secret) understood, incl. env-vs-volume update semantics

Lesson 0005 quizzes 3/3: env injection frozen at process start (rollout restart to refresh), volume mounts synced by kubelet, Secret base64 as reversible encoding not encryption. The rollout-restart question doubled as a spaced re-test of the ReplicaSet-swap mechanism (LR-0003) — answered correctly, so the ownership chain can now be treated as solid.

**Implications:** Level 1 core loop (workloads, Service/EndpointSlice, probes, config) is covered with lab evidence. Remaining before a KCNA gap-check: scheduling/resources (requests/limits, Pending debugging — diagnostic Q7 was memory-based), namespaces/label hygiene, and KCNA's ecosystem breadth (runtime, CNI/CSI, observability vocabulary) which no lesson has touched yet.
