# Learner-initiated question: Pod network vs Service network → deep-dive Lesson 0013

After Lesson 0012 (CRI/CNI/CSI), the learner asked unprompted: "pod network 와 service 네트워크, 무엇이 다른가?" — pulling on the one-line kube-proxy/CNI FAQ answer in 0012. This is a good signal: questions are now going *below* the curriculum level rather than lagging it.

**What was taught (Lesson 0013, 심화):** Pod network is real (CNI creates actual interfaces + IPs, dies with the Pod); the Service network is virtual (ClusterIP is bound to no interface anywhere — it exists only as kube-proxy's iptables/IPVS DNAT rules that rewrite the destination to a live Pod IP from EndpointSlice before the packet leaves the node). This explains *why* 0003's "ClusterIP is immutable" holds: there is no physical thing to die. Lab evidence: separate CIDRs (10.244.x vs 10.96.x), ping-fails-but-curl-works asymmetry against the ClusterIP, optional iptables KUBE-SERVICES inspection.

**Status:** Lesson 0013 delivered; quiz results pending. Content is slightly beyond KCNA depth (flagged in-lesson) but pays off in CKA network troubleshooting.

**Implications:** Main track resumes at cloud-native vocabulary batch (CNCF ecosystem, 12-factor, observability three pillars, GitOps, Helm) → then full-domain KCNA mock → exam scheduling. NetworkPolicy question in 0013's ask-box seeds Level 2 (KCSA).
