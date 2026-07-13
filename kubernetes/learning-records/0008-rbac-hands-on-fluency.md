# RBAC turned from shaky recall into lab evidence; controller-manager solidified

Lesson 0008 quizzes 3/3. The RBAC deny→grant→boundary lab (`kubectl auth can-i` with `--as`) converted the 0007 self-reported uncertainty into hands-on evidence: SA with no rights → `no`, add Role+RoleBinding → `yes`, then two boundary `no`s (verb not granted = `delete`; Role is namespace-scoped = `-n default`). Q3 re-tested the one 0007 miss (control loops run in kube-controller-manager) — now correct.

**Evidence (2026-07-06):** Quizzes 3/3. Q1 (Role inert without Binding), Q2 (all-namespace = ClusterRole not "delete namespace field"), Q3 (kube-controller-manager). Lab is the CKA/CKS-reusable `auth can-i` workflow.

**Implications:** Gap-check RBAC cell → ✅ and architecture cell already ✅ (0007). Both 🔶 carryovers from the sibling `../teach/` track are now closed with this-track evidence. KCNA Fundamentals (~46%) core is complete except the ⬜ breadth items: other workload kinds, external exposure, storage. Plan resumes at workload 4형제 (Lesson 0009). Note: FAQ ("초보자 질문") sections were backfilled into 0001–0008 as a standing format — new lessons include one from the start.
