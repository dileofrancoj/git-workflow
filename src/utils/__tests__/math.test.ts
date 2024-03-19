import { describe, expect, it } from "vitest";
import { sum, multiply } from "../math";
describe("math", () => {
    it("should sum two numbers", () => {
      const result = sum(1, 2);
      expect(result).toBe(3);
    });
    it('should multiply two numbers', () => {
        const result = multiply(2,2)
        expect(result).toBe(4)
    })
});
