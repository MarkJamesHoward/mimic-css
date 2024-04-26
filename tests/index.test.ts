import { DoWork } from "../src/main";

describe("display flex", () => {
  test("display flex", () => {
    expect(DoWork("./tests/display_flex.html", "")).toContain(
      `.display\\:flex {\r\n\tdisplay: flex;\r\n}`
    );
  });

  test("display flex with Media", () => {
    expect(DoWork("./tests/display_flex.html", "")).toContain(
      `@media (min-width: 1280px) {\r\n.large\\?display\\:flex {\r\n\tdisplay: flex;\r\n\t}\r\n}`
    );
  });
});

describe("Padding Snap", () => {
  test("Padding Snapping MD", () => {
    expect(DoWork("./tests/padding_md.html", "")).toContain(
      `.padding\\:md {\r\n\tpadding: 8px;\r\n}`
    );
  });
});
