import { MemoryRouter } from "react-router-dom";

import NotFoundPage from "./not-found-page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

// QueryClient 생성
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

// useNavigate 모킹
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("404 페이지", () => {
  const renderWithQueryClient = (component: React.ReactElement) => {
    const queryClient = createTestQueryClient();
    return render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>{component}</QueryClientProvider>
      </MemoryRouter>,
    );
  };

  it("404 제목이 렌더링되어야 한다", () => {
    renderWithQueryClient(<NotFoundPage />);

    expect(screen.getByText("404")).toBeInTheDocument();
  });

  it("페이지를 찾을 수 없습니다 메시지가 렌더링되어야 한다", () => {
    renderWithQueryClient(<NotFoundPage />);

    expect(screen.getByText("페이지를 찾을 수 없습니다")).toBeInTheDocument();
  });

  it("설명 문구가 렌더링되어야 한다", () => {
    renderWithQueryClient(<NotFoundPage />);

    expect(screen.getByText("요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.")).toBeInTheDocument();
  });

  it("홈으로 돌아가기 버튼이 렌더링되어야 한다", () => {
    renderWithQueryClient(<NotFoundPage />);

    const homeButton = screen.getByRole("button", { name: "홈으로 돌아가기" });
    expect(homeButton).toBeInTheDocument();
  });

  it("이전 페이지 버튼이 렌더링되어야 한다", () => {
    renderWithQueryClient(<NotFoundPage />);

    const backButton = screen.getByRole("button", { name: "이전 페이지" });
    expect(backButton).toBeInTheDocument();
  });

  it("홈으로 돌아가기 버튼 클릭 시 홈으로 이동해야 한다", async () => {
    const user = userEvent.setup();
    renderWithQueryClient(<NotFoundPage />);

    const homeButton = screen.getByRole("button", { name: "홈으로 돌아가기" });
    await user.click(homeButton);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("이전 페이지 버튼 클릭 시 window.history.back이 호출되어야 한다", async () => {
    const user = userEvent.setup();
    const backSpy = vi.spyOn(window.history, "back");
    renderWithQueryClient(<NotFoundPage />);

    const backButton = screen.getByRole("button", { name: "이전 페이지" });
    await user.click(backButton);

    expect(backSpy).toHaveBeenCalled();
    backSpy.mockRestore();
  });
});
