# Architecture verified; RBAC recall shaky → convert to hands-on before ✅

Lesson 0007 was a recall-only verification of the two 🔶 gap-check cells (architecture, RBAC) carried over from the sibling `../teach/` track. Result: Part A 4/5, Part B 3/3-but-self-reported-shaky. Total 7/8 ≥ 6 → over threshold.

**Evidence (2026-07-06):**
- Part A (architecture): only Q4 missed — *where the control loops actually run* (kube-controller-manager). API server as sole etcd client (Q2), scheduler-only-fills-nodeName (Q3), scheduler-down → new Pods Pending (Q5) all correct. So the request-path mental model is solid; the one gap is the runtime *home* of the controllers.
- Part B (RBAC): answers correct but learner reported "조금 헷갈렸다". Correct-under-uncertainty = storage strength not yet high. RBAC is namespaced Role vs cluster-wide ClusterRole (Q6), Role-is-inert-without-Binding (Q7), SA-as-Pod-identity (Q8).

**Verdict / gap-check update:**
- Architecture cell → ✅ (controller-manager fact corrected in-record; re-tested as spaced-repetition Q in Lesson 0008).
- RBAC cell → stays 🔶 until Lesson 0008 (hands-on) turns recall into lab evidence. Rationale: RBAC is imperative-heavy and directly reused in CKA/CKS, so a `kubectl auth can-i` deny→grant→boundary lab is a higher-yield fix than a re-quiz — and it advances the practical-cert track at the same time.

**Implications:** After 0008, RBAC → ✅ and the plan resumes at workload 4형제 (StatefulSet/DaemonSet/Job/CronJob). The controller-manager miss and the RBAC uncertainty both fold into 0008's recall section, so no separate remediation lesson is needed.
