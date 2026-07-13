# Six foundational-mechanism deep dives (0023-0028): the real engine behind already-learned resources

After the 0016-0022 deep-fill, the learner asked whether any Kubernetes *theory* was still missing, or if going to KCSA would cover it. Audit answer: KCSA fills only the security lens (its B-table row + some CKA components, security-angle only); the "A" list — foundational mechanisms that were scattered as fragments across earlier lessons — is not security-shaped and stays open. Learner chose "A 전부 먼저" (all of A first, before KCSA).

**Evidence (2026-07-09):** Built 6 lessons via parallel subagents. The orchestrator died on "Prompt is too long" before wrap-up, so lessons landed on disk but index/gap-check/record were unwired; this session finished the wiring and re-verified. All 6 pass markup checks (details 10/10, exactly 3 quizzes each with one correct marker, divs balanced), and all internal cross-links resolve after fixing one dead link (0025 referenced `0023-pod-lifecycle-restartpolicy.html` → corrected to `0023-pod-lifecycle-states.html`):

- **0023 Pod lifecycle state machine** (심화) — Pod phase (Pending/Running/Succeeded/Failed/Unknown) vs container state (Waiting/Running/Terminated) vs restartPolicy (Always/OnFailure/Never), consolidating fragments from 0004 (probe), 0006 (OOMKill), 0009 (Job).
- **0024 Graceful termination** (심화) — preStop → SIGTERM → terminationGracePeriodSeconds (default 30s) → SIGKILL, postStart hook; the back side of 0002 rolling update and 0004 probes.
- **0025 Init containers & native sidecars** (심화) — start-order guarantee, 1.28+ sidecar (restartPolicy:Always initContainer); the base concept under 0016 mesh sidecar. init restart follows Pod restartPolicy (0023).
- **0026 ownerReferences · GC · finalizers** (심화) — the actual cascade-delete mechanism behind 0002's ownership chain (why deleting a Deployment removes its Pods), plus finalizers holding deletion.
- **0027 API groups·versions·deprecation** (심화) — how `apiVersion: apps/v1` is shaped, group/version/deprecation policy; manifest literacy for the line written every time.
- **0028 Static Pods** (심화) — kubelet watches /etc/kubernetes/manifests and creates mirror pods; how the control-plane components from 0007 actually boot themselves.

**Implications:** index.html gained a "기초 메커니즘 딥다이브" section (0023-0028); gap-check gained a matching subsection under Fundamentals with all 6 marked ✅ and nav updated to 0028. KCNA is now well past curriculum depth. B-table items (KCSA/CKAD/CKA) remain intentionally deferred to their cert levels. Next: schedule the actual KCNA exam, then Level 2 (KCSA) where 0013/0022 NetworkPolicy seeds + 4C become the main track. Learner keeps probing below the exam line.
