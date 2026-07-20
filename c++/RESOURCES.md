# C++ IOCP 게임서버 마스터리 Resources

## Knowledge

### C++ 기본기
- [Learn C++ (learncpp.com)](https://www.learncpp.com/)
  사실상 표준인 무료 체계적 C++ 코스, 모던 C++ 반영. Use for: 문법·메모리·클래스 등 언어 기초 전반의 주 교재.
- [cppreference.com](https://en.cppreference.com/)
  업계 표준 언어/표준라이브러리 레퍼런스. Use for: 정확한 규칙 확인 (예: [std::memory_order](https://en.cppreference.com/w/cpp/atomic/memory_order.html)).
- [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)
  Stroustrup 주도 공식 가이드라인. Use for: RAII, 소유권, 리소스 관리 관행.

### CS 기초 (OS · 메모리 · 캐시)
- [OSTEP — Operating Systems: Three Easy Pieces](https://pages.cs.wisc.edu/~remzi/OSTEP/)
  무료 공개 표준 OS 교과서. Use for: 가상 메모리, 스레드, 락, 스케줄링 이론.
- [CS:APP — Computer Systems: A Programmer's Perspective 3/e](https://csapp.cs.cmu.edu/)
  CMU 15-213 교재. Use for: 메모리 계층·CPU 캐시·가상 메모리·링킹을 프로그래머 관점에서.

### 네트워크 · Winsock
- [Beej's Guide to Network Programming](https://beej.us/guide/bgnet/)
  25년 된 소켓 프로그래밍 고전(무료). Use for: TCP/IP·소켓 개념 입문.
- [Getting Started with Winsock — Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/winsock/getting-started-with-winsock)
  1차 소스 Winsock 튜토리얼. Use for: WSAStartup부터 첫 서버까지 정확한 API 사용법.
- 책: *Network Programming for Microsoft Windows, 2nd Ed.* (Jones/Ohlund) — [중고 구입](https://www.amazon.com/Network-Programming-Microsoft-Windows-Pro-Developer/dp/0735615799)
  Winsock I/O 모델(select/이벤트/overlapped/IOCP)의 결정판. Use for: I/O 모델 비교와 IOCP 설계 근거.

### Windows 시스템 · IOCP
- [I/O Completion Ports — Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/fileio/i-o-completion-ports)
  IOCP 스레딩 모델의 1차 소스 설명. Use for: IOCP 동작 원리의 근거 자료.
- [CreateIoCompletionPort](https://learn.microsoft.com/en-us/windows/win32/api/ioapiset/nf-ioapiset-createiocompletionport) · [GetQueuedCompletionStatus](https://learn.microsoft.com/en-us/windows/win32/api/ioapiset/nf-ioapiset-getqueuedcompletionstatus)
  핵심 두 API의 공식 레퍼런스. Use for: 파라미터·반환값·에러 케이스 정밀 확인.
- [Write Scalable Winsock Apps Using Completion Ports (MSDN Magazine 2000)](https://learn.microsoft.com/en-us/archive/msdn-magazine/2000/october/windows-sockets-2-0-write-scalable-winsock-apps-using-completion-ports)
  Microsoft의 IOCP 서버 설계 심층 아티클. Use for: AcceptEx·워커 스레드 수 등 실전 설계.
- 책: *Windows via C/C++, 5th Ed.* (Richter/Nasarre) — [Microsoft Press](https://www.microsoftpressstore.com/store/windows-via-c-c-plus-plus-9780735639218)
  Win32 내부 구조 고전. Use for: 스레드, 가상 메모리, 동기화, 디바이스 I/O.

### 멀티스레드 · 락프리
- 책: *C++ Concurrency in Action, 2nd Ed.* (Anthony Williams) — [Manning](https://www.manning.com/books/c-plus-plus-concurrency-in-action-second-edition)
  C++ 표준 스레드 라이브러리 저자의 결정판. Use for: atomic, 메모리 오더링, 락프리 자료구조.
- [Preshing: An Introduction to Lock-Free Programming](https://preshing.com/20120612/an-introduction-to-lock-free-programming/)
  가장 널리 인용되는 실전 입문. Use for: 락프리·CAS 첫 진입.
- [Preshing: Acquire and Release Semantics](https://preshing.com/20120913/acquire-and-release-semantics/)
  메모리 오더링의 정석 해설. Use for: acquire/release 직관 잡기.
- [Preshing: This Is Why They Call It a Weakly-Ordered CPU](https://preshing.com/20121019/this-is-why-they-call-it-a-weakly-ordered-cpu/)
  실제 하드웨어 재배열 실증. Use for: "이론이 아니라 진짜 일어난다"는 감각.

### 한국어 자료
- [Rookiss — Part4: 게임 서버 (Windows IOCP Server), 인프런](https://www.inflearn.com/course/%EC%96%B8%EB%A6%AC%EC%96%BC-3d-mmorpg-4)
  ex-Krafton(TERA 서버)/ex-NCsoft 강사가 IOCP 서버를 밑바닥부터 구현. Use for: 미션과 정확히 일치하는 실습 강의.
- [널널한 개발자 — 네트워크 핵심이론(기초), 인프런](https://www.inflearn.com/course/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%ED%95%B5%EC%8B%AC%EC%9D%B4%EB%A1%A0-%EA%B8%B0%EC%B4%88)
  30년차 C/C++ 개발자의 TCP/IP 이론 (YouTube 무료 강의도 다수). Use for: 한국어로 네트워크 이론 기초.
- [jacking75(최흥배) — 뉴비 게임서버 프로그래머 학습자료](https://github.com/jacking75/NewbieGameServerProgrammerLearningMaterials) · [edu_cpp_IOCP](https://github.com/jacking75/edu_cpp_IOCP)
  현업 20년+ 게임서버 개발자의 무료 커리큘럼, 10단계 IOCP 실습 포함. Use for: 단계별 IOCP 손코딩 연습 문제.

## Wisdom (Communities)

- [r/cpp](https://www.reddit.com/r/cpp/)
  표준·컨퍼런스·라이브러리 논의가 활발한 고신호 커뮤니티. Use for: C++ 설계 질문, 코드 비평.
- [r/gamedev](https://www.reddit.com/r/gamedev/)
  게임/서버 아키텍처 논의. Use for: 서버 구조 설계 피드백.
- jacking75의 GitHub Discussions/이슈 — 한국 게임서버 개발자 생태계의 허브 역할. Use for: 한국어로 실무 질문.

## Gaps

- MSVC 특화 저수준 디버깅(WinDbg, 덤프 분석)에 대한 체계적 자료 미확보 — 크래시 덤프 레슨 전에 탐색 필요.
- `InterlockedCompareExchange128`/DCAS의 x64 심층 자료(공식 문서 외) 부족 — 락프리 레슨 시점에 재조사.
