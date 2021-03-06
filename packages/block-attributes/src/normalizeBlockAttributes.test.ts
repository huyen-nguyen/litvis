import { sharedTestCases } from "./__fixtures__/testCases";
import { normalizeBlockAttributes } from "./normalizeBlockAttributes";

describe("normalizeBlockAttributes()", () => {
  sharedTestCases.map(({ attributes = null, normalizedAttributes = null }) => {
    if (!attributes || !normalizedAttributes) {
      return;
    }
    test(`works for ${JSON.stringify(attributes)}`, () => {
      const result = normalizeBlockAttributes(attributes);
      expect(result).toEqual(normalizedAttributes);
    });
  });
});
