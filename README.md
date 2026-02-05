# Switchwon Frontend

스위치원 프론트엔드 과제 기술스택 및 실행방법 입니다.
개발작업에 대한 문서화 내용은 README.MD에 작성해두었습니다.

## 기술 스택

- **React 19** - UI 라이브러리
- **Vite 7** - 빌드 도구
- **TypeScript** - 타입 안정성
- **Tailwind CSS 4** - 스타일링
- **React Router** - 라우팅
- **TanStack Query** - 서버 상태 관리
- **Zustand** - 클라이언트 상태 관리
- **Vitest** - 테스팅

## 시작하기

### 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
# 개발 환경
pnpm run dev:dev

# 프로덕션 환경
pnpm run dev:prod
```

### 빌드

```bash
# 개발 환경 빌드
pnpm run build:dev

# 프로덕션 환경 빌드
pnpm run build:prod
```

### 테스트

```bash
# 테스트 실행
pnpm run test

# 테스트 감시 모드
pnpm run test:watch

# 커버리지 확인
pnpm run test:coverage
```

### 린트 및 타입 체크

```bash
# 린트
pnpm run lint

# 린트 자동 수정
pnpm run lint:fix

# 타입 체크
pnpm run type-check
```

## 프로젝트 구조

```
src/
├── domains/          # 도메인별 기능 모듈
│   └── (도메인별 폴더)
├── shared/           # 공통 모듈
│   ├── api/          # API 설정
│   ├── components/   # 공통 컴포넌트
│   ├── constants/    # 상수
│   ├── hooks/        # 공통 훅
│   ├── pages/        # 공통 페이지
│   ├── provider/     # Provider 컴포넌트
│   ├── router/       # 라우터 설정
│   ├── style/        # 스타일
│   └── utils/        # 유틸리티 함수
├── App.tsx           # 루트 컴포넌트
└── main.tsx          # 진입점
```

## 환경 변수

이메일에 첨부된 내용을 확인해주세요!

