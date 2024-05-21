import { renderHook } from "@testing-library/react";
import useHash from "../use-hash";

describe("useHash", () => {
  test("should initialize hash correctly", () => {
    const { result } = renderHook(() => useHash());
    expect(result.current[0]).toBe('');
  })
})