# Resources/scheduling understood: requests-as-reservation, limits-as-cap, status triage

Lesson 0006 quizzes 3/3: scheduler works off the requests ledger not real usage (Pending on an idle cluster), compressible-vs-incompressible asymmetry (CPU throttle vs memory OOMKill), and status-based triage (Pending → describe Events; CrashLoop → logs/Last State). Labs run in a dedicated `lab` namespace — namespace-per-lab habit established.

**Evidence:** Quizzes 3/3 plus hands-on Pending/OOMKilled reproduction (2026-07-02). Diagnostic Q7 (memory-based at the time) now backed by lab evidence.

**Implications:** Level 1 core loop complete (workloads, Service, probes, config, resources/scheduling). Next: KCNA gap-check — remaining domains are ecosystem breadth (container runtime/CRI, CNI/CSI, other workload kinds like StatefulSet/DaemonSet/Job, autoscaling, observability vocabulary, cloud-native architecture/delivery concepts). Architecture components and RBAC have prior coverage in the sibling ../teach/ track — verify via quiz rather than re-teaching.
