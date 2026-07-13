# Workload family understood via one frame: which Deployment assumption breaks

Lesson 0009 quizzes 3/3. The five workload kinds were taught as one decision, not five facts: Deployment assumes replicas are interchangeable, N-anywhere, and run forever — StatefulSet breaks "interchangeable" (stable name/order/storage), DaemonSet breaks "N-anywhere" (one per node), Job breaks "runs forever" (Completed), CronJob = Job on a schedule.

**Evidence (2026-07-06):** Quizzes 3/3 (Q1 CronJob for scheduled backup, Q2 StatefulSet pod returns with same name web-1, Q3 Completed vs CrashLoopBackOff). Hands-on: Job → `Completed` with RESTARTS 0 (contrast 0006 CrashLoopBackOff), StatefulSet → ordered `web-0/1/2` with stable-name recreation (contrast 0002 random-hash pods). DaemonSet/CronJob kept at vocabulary level (KCNA weight low; CKAD revisits).

**Implications:** KCNA Fundamentals (~46%) nearly complete. Remaining ⬜ Fundamentals items: external exposure (NodePort/LoadBalancer/Ingress) → Lesson 0010, and storage (PV/PVC/StorageClass). StatefulSet `volumeClaimTemplates` was previewed as the bridge into the storage lesson. FAQ sections are now authored into new lessons from the start (0009 shipped with 10).
