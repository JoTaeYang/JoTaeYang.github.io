# Prior exposure: Kubernetes architecture track in sibling workspace

The learner runs a separate teaching workspace (`../teach/`) grounded in real production clusters (mgmt, tkai3). Its lessons 0001–0006 covered control plane vs worker nodes, control plane components, worker node components, the `kubectl apply` lifecycle, ServiceAccount/RBAC, and the two-cluster architecture, with hands-on labs and FAQ sessions.

This is exposure evidence, not yet verified mastery for this track. It suggests the learner is NOT a zero-beginner: architecture vocabulary (API server, etcd, scheduler, kubelet, RBAC) is likely familiar. Lesson 0001 here is a placement diagnostic to convert this assumption into evidence.

**Implications:** Skip "what is a container/what is Kubernetes" hand-holding unless the diagnostic says otherwise. Likely gaps: authoring workload manifests from scratch, cluster installation/upgrade, exam-style time-boxed troubleshooting, security hardening.
