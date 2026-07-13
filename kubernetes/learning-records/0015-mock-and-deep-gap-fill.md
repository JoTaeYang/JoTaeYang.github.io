# Full-domain mock 17/18; then 7 deep lessons (0016-0022) filling KCNA blind spots

Lesson 0015 mock diagnostic: 17/18 across all five domains. The learner then asked for a theory audit and, on finding thin spots, requested each be its own DEEP lesson (not a single vocab batch).

**Evidence (2026-07-07):** 0015 mock 17/18 (one miss, domain not specified by learner — result-by-domain still pending). Audit surfaced KCNA-curriculum items that earlier lessons only grazed. Built 7 lessons via 7 parallel subagents, all self-verified + independently re-verified (details 10/10, 3 quizzes each with exactly one data-correct, divs balanced, internal links resolve):

- **0016 Service Mesh** (Orchestration, 심화) — sidecar/data-vs-control-plane, auto mTLS (SPIFFE↔0008 SA identity), L7 traffic mgmt vs kube-proxy L4 (0013), free observability (0014), Istio vs Linkerd, ambient mesh. Install = CKAD+.
- **0017 Serverless/Knative** (Architecture, 심화) — scale-to-zero vs HPA min≥1 (0012), cold start, FaaS vs container, ties to 12-factor disposable (0014) and cost (0019).
- **0018 CNCF community/governance** (Architecture, 심화) — Governing Board vs TOC, maturity promotion by TOC vote, open governance = vendor-neutral, personas/roles mapped onto prior lessons.
- **0019 Cost Management/FinOps** (Observability, 심화) — the easy-to-miss observability item; requests(0006)=cost lever is the spine, OpenCost/Kubecost, showback/chargeback, autoscaling/scale-to-zero as levers.
- **0020 QoS classes & eviction** (Fundamentals 심화, hands-on) — Guaranteed/Burstable/BestEffort derivation from 0006 requests/limits, eviction order, OOMKill(137, container) vs eviction(node) distinction.
- **0021 Operators & CRD** (심화, hands-on) — CRD extends the API, custom controller = 0007 control loop for your domain, Operator = day-2 automation vs Helm day-1; "rule inert without controller" pattern reused from 0010/0008.
- **0022 ResourceQuota/LimitRange/Namespace** (Fundamentals 심화, hands-on) — namespace-level budget above 0006's per-pod, LimitRange defaults + Quota-forces-requests trap, namespace≠network isolation (NetworkPolicy seed → KCSA).

**Implications:** index.html gained a "심화 보완" section; gap-check gained rows for all 7 (Service Mesh, Serverless, Governance, Cost Mgmt, QoS, ResourceQuota, CRD/Operator) marked ✅ and updated the 4C/보안 row to point NetworkPolicy seeds at 0013/0022. KCNA coverage now exceeds curriculum at required depth. Next: collect 0015 by-domain result if any weak cell, otherwise schedule the actual KCNA exam, then pivot to Level 2 (KCSA) where NetworkPolicy/4C become the main track. Learner pace stays intensive and keeps probing below the exam line.
