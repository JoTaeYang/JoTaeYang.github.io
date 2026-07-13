# Mission: 쿠버네티스 마스터리 (초보 → 숙련자 → 5개 자격증 전부)

> 상태: 초안 — "왜"와 제약 조건은 학습자 확인 후 확정한다.

## Why
쿠버네티스를 이론과 실습 양쪽에서 단계적으로 완주하고, 그 증거로 CNCF 쿠버네티스 자격증 5종
(KCNA, KCSA, CKA, CKAD, CKS — 전부 보유 시 **Kubestronaut**)을 모두 취득한다.
단순 시험 합격이 아니라, 클러스터를 스스로 구축·운영·보안 강화할 수 있는 실전 역량이 목표다.

## Success looks like
- 빈 VM(또는 로컬)에서 kubeadm/kind 로 클러스터를 직접 구축하고 업그레이드할 수 있다
- 애플리케이션을 Deployment/Service/Ingress/ConfigMap/Secret 으로 설계·배포·디버깅할 수 있다 (CKAD 수준)
- etcd 백업/복구, 노드 장애, 인증서 문제 등 운영 시나리오를 제한 시간 내 해결할 수 있다 (CKA 수준)
- RBAC, NetworkPolicy, Pod Security, 이미지 스캐닝 등으로 클러스터를 강화할 수 있다 (CKS 수준)
- KCNA → KCSA → CKAD → CKA → CKS 순서로 5개 자격증을 모두 취득한다

## Constraints
- 기존 워크스페이스(`../teach/`)는 실제 운영 클러스터(mgmt, tkai3) 아키텍처 이해 전용 — 이 워크스페이스와 분리 유지
- 실습은 운영 클러스터가 아닌 **로컬/일회용 클러스터**(kind, minikube, killercoda)에서 한다
- 한 레슨은 짧게, 하나의 확실한 win 으로 끝낸다
- 학습 강도: 집중 몰입("미친듯이") — 시간 제약 없음. 자격증 응시 시기/예산은 KCNA 준비가 무르익으면 확정

## Out of scope (지금은)
- mgmt/tkai3 운영 클러스터 관련 학습 (기존 `../teach/` 트랙에서 진행)
- Helm 차트 고급 작성, GitOps(ArgoCD), 서비스 메시 — 자격증 범위 밖 심화는 5종 취득 후
