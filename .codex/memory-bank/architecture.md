# 프로젝트 아키텍처

## 프로젝트 개요
- **프로젝트명**: The Blog (블로그 웹사이트)
- **프레임워크**: Next.js 16.2.4 (App Router)
- **스타일링**: Tailwind CSS 4.2.0
- **언어**: TypeScript
- **패키지 매니저**: pnpm

## 디렉토리 구조

### 루트 레벨
```
v0-blog-website/
├── app/                      # Next.js App Router
├── components/               # React 컴포넌트
├── hooks/                    # 커스텀 훅
├── lib/                      # 유틸리티 함수
├── posts/                    # 블로그 마크다운 포스트
├── public/                   # 정적 리소스
├── styles/                   # 전역 스타일
├── .codex/                   # 프로젝트 메모리/컨텍스트
├── components.json           # shadcn/ui 설정
├── next.config.mjs          # Next.js 설정
├── postcss.config.mjs        # PostCSS 설정
├── tailwind.config.ts        # Tailwind 설정
└── tsconfig.json             # TypeScript 설정
```

### app/ (Next.js App Router)
- `layout.tsx` - 루트 레이아웃 (헤더, 푸터 포함)
- `page.tsx` - 홈 페이지
- `globals.css` - 전역 스타일
- `posts/[slug]/page.tsx` - 동적 블로그 포스트 페이지

### components/
- `blog-list.tsx` - 블로그 목록 표시
- `blog-post.tsx` - 블로그 포스트 내용 표시
- `header.tsx` - 네비게이션 헤더
- `footer.tsx` - 페이지 푸터
- `related-posts.tsx` - 관련 포스트 표시
- `theme-provider.tsx` - 다크모드 테마 프로바이더
- `ui/` - shadcn/ui 컴포넌트 라이브러리 (50+ 컴포넌트)

### hooks/
- `use-mobile.ts` - 모바일 디바이스 감지
- `use-toast.ts` - 토스트 알림 기능

### lib/
- `posts.ts` - 마크다운 포스트 파일 로딩 및 파싱
- `utils.ts` - 유틸리티 함수

### posts/
마크다운 형식의 블로그 포스트 파일들:
- `getting-started-with-nextjs.md`
- `mastering-tailwind-css.md`
- `building-accessible-interfaces.md`
- `modern-typescript-patterns.md`
- `react-server-components.md`

## 핵심 기술 스택

### 프론트엔드
- **React 19.2.4** - UI 라이브러리
- **Next.js 16.2.4** - React 프레임워크 (Turbopack)
- **TypeScript 5.7.3** - 타입 안정성
- **Tailwind CSS 4.2.0** - 유틸리티-퍼스트 CSS
- **Radix UI** - 접근성 컴포넌트 라이브러리
- **shadcn/ui** - 재사용 가능한 UI 컴포넌트

### 상태 관리 & 폼
- **React Hook Form 7.71.1** - 폼 상태 관리
- **Zod 3.25.76** - 스키마 검증

### 콘텐츠 처리
- **gray-matter 4.0.3** - 마크다운 프론트매터 파싱
- **remark 15.0.1** - 마크다운 프로세서
- **remark-html 16.0.1** - 마크다운 → HTML 변환
- **reading-time 1.5.0** - 읽기 시간 계산

### UI/UX 라이브러리
- **lucide-react 0.564.0** - 아이콘 라이브러리
- **embla-carousel-react 8.6.0** - 카루셀 컴포넌트
- **recharts 2.15.0** - 차트 컴포넌트
- **sonner 1.7.4** - 토스트 알림
- **date-fns 4.1.0** - 날짜 유틸리티

### 개발 도구
- **PostCSS 8.5.6** - CSS 후처리
- **ESLint** - 코드 검증
- **@tailwindcss/typography** - 타이포그래피 플러그인

## 기능

### 홈 페이지 (/)
- 블로그 소개
- 최신 블로그 포스트 카루셀 표시
- 포스트 메타데이터 (날짜, 읽기 시간, 태그)

### 블로그 포스트 페이지 (/posts/[slug])
- 동적 라우팅으로 마크다운 파일을 HTML로 변환
- 포스트 메타데이터 표시
- 관련 포스트 추천
- 다크모드 지원

### UI/UX
- 반응형 디자인
- 다크모드 지원 (next-themes)
- 접근성 준수 (Radix UI)
- 부드러운 애니메이션

## 개발 설정

### 실행 명령어
- `pnpm dev` - 개발 서버 시작 (localhost:3000)
- `pnpm build` - 프로덕션 빌드
- `pnpm start` - 프로덕션 서버 시작
- `pnpm lint` - ESLint 검증

### Tailwind CSS 설정 (v4)
- `app/globals.css` - Tailwind 임포트
- `tailwind.config.ts` - Tailwind 커스텀 설정
- `postcss.config.mjs` - PostCSS 플러그인 설정

## 파일 확장자
- `.tsx` - TypeScript React 컴포넌트
- `.ts` - TypeScript 유틸리티/훅
- `.md` - 마크다운 블로그 포스트
- `.css` - 스타일시트
- `.mjs` - JavaScript 모듈 (설정 파일)

## 성능 최적화
- Next.js Turbopack을 통한 빠른 빌드
- 동적 라우팅으로 효율적인 페이지 생성
- Tailwind CSS purging으로 최소 CSS 번들 크기
- 이미지 최적화 (next/image)

## 접근성
- Radix UI의 WAI-ARIA 준수
- 시맨틱 HTML 마크업
- 키보드 네비게이션 지원
- 스크린 리더 호환성
