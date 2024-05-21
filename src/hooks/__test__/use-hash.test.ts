import { renderHook, act } from "@testing-library/react";
import useHash from "../use-hash";

describe("useHash", () => {
  test("should initialize hash correctly", () => {
    const { result } = renderHook(() => useHash());
    expect(result.current[0]).toBe('');
  })


  test('should update hash correctly when hash changes', () => {
    const { result } = renderHook(() => useHash());
    act(() => {
      window.location.hash = '#newhash';
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });

    expect(result.current[0]).toBe('#newhash');
  });
})