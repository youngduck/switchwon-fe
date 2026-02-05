/**
 * 작성자: KYD
 * 기능: Switchwon 라우트 상수 정의
 * 프로세스 설명: 모든 라우트 경로를 중앙 집중식으로 관리하여 타입 안전성과 유지보수성 향상시키기
 */

// 기본 라우트 상수
export const ROUTES = {
  // 홈
  HOME: "/",
} as const;

// 타입 정의
export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
