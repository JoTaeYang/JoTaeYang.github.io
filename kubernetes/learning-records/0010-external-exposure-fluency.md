# External exposure understood as a staircase; LoadBalancer <pending> is the lesson

Lesson 0010 quizzes 3/3. Service types taught as a nesting staircase: ClusterIP (internal, 0003) → NodePort (opens 30000–32767 on every node, keeps ClusterIP underneath) → LoadBalancer (cloud provisions an external IP). Ingress framed separately as L7 (reads HTTP host/path, routes to many ClusterIP Services) needing a controller — structurally the same "rule without an executor" shape as RBAC Role-without-Binding (0008).

**Evidence (2026-07-06):** Quizzes 3/3 (Q1 NodePort keeps ClusterIP underneath — `80:31842` proof, Q2 LoadBalancer `<pending>` = no cloud controller, Q3 path routing = Ingress/L7). Hands-on: `patch` svc through the type ladder, read `kubectl get svc` deltas; reached the app via `port-forward` (kind node-IP caveat stated honestly); observed LoadBalancer EXTERNAL-IP stuck at `<pending>` as the intended teaching point. Ingress kept conceptual (KCNA depth; CKAD does the hands-on).

**Continuity fix:** 0009's FAQ/warn wrongly called PV/PVC "the next lesson" when the plan order put exposure (0010) first. Corrected 0009 wording to "storage lesson (0011), with exposure (0010) in between."

**Implications:** KCNA Fundamentals (~46%) ⬜ items nearly closed. Next: storage (PV/PVC/StorageClass) → Lesson 0011, fulfilling the StatefulSet `volumeClaimTemplates` bridge from 0009. After storage, Fundamentals is effectively complete and the track moves to the breadth domains (CRI/CNI/CSI, cloud-native vocabulary) before a KCNA mock.
