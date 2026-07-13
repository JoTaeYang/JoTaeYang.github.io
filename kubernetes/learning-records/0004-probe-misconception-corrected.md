# Probe misconception corrected: readiness vs liveness

Diagnostic (LR-0002) showed the learner confused liveness and readiness outcomes. After lesson 0004 (hands-on: watched readiness failure drop a Pod from EndpointSlice with RESTARTS staying 0, and liveness failure increment RESTARTS), all quizzes correct — including the warmup-scenario question that retests the exact diagnostic miss, and the combined empty-Endpoints debugging question spanning lessons 0002–0003.

**Evidence:** Lesson 0004 quizzes 3/3 (2026-07-02), labs run hands-on. This also served as the spaced re-test of the ownership chain and Service/EndpointSlice model (Q3), partially satisfying LR-0003's re-test requirement.

**Implications:** The workload-model gap trio from the diagnostic (Q3 ownership, Q5 probes) is now covered with lab evidence; only Q8 (NetworkPolicy default-allow) remains untouched, reserved for Level 2. Learner has now applied their first hand-written YAML manifests — ready to progress toward manifest-authoring lessons (ConfigMap/Secret, then resources/namespaces) to round out Level 1.
