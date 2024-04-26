import { DoWork } from "../bin/index";

describe("display flex", () => {
  test("display flex plain", () => {
    expect(DoWork("./tests/display_flex_plain.html", "", "")).toContain(
      `.display\\:flex {\r\n\tdisplay: flex;\r\n}`
    );
  });
});
