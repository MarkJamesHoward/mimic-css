import { DoWork } from "../src/main";

describe("display flex", () => {
  test("display flex", () => {
    expect(DoWork("./tests/flex/display_flex.html", "")).toContain(
      `.display\\:flex {\r\n\tdisplay: flex;\r\n}`
    );
  });

  test("display flex with Media", () => {
    expect(DoWork("./tests/flex/display_flex.html", "")).toContain(
      `@media (min-width: 1280px) {\r\n.large\\?display\\:flex {\r\n\tdisplay: flex;\r\n\t}\r\n}`
    );
  });
});

/////////////////////////
describe("flex direction", () => {
  test("flex direction", () => {
    expect(DoWork("./tests/flex/flex_direction.html", "")).toContain(
      `.flex-direction\\:row {\r\n\tflex-direction: row;\r\n}`
    );
  });

  test("flex direction with Media", () => {
    expect(DoWork("./tests/flex/flex_direction.html", "")).toContain(
      `@media (min-width: 768px) {\r\n.small\\?flex-direction\\:row {\r\n\tflex-direction: row;\r\n\t}\r\n}`
    );
  });
});

/////////////////////////////
describe("Padding Snap", () => {
  test("Padding Snapping XS", () => {
    expect(DoWork("./tests/padding/padding_xs.html", "")).toContain(
      `.padding\\:xs {\r\n\tpadding: 2px;\r\n}`
    );
  });
  test("Padding Snapping SM", () => {
    expect(DoWork("./tests/padding/padding_sm.html", "")).toContain(
      `.padding\\:sm {\r\n\tpadding: 4px;\r\n}`
    );
  });
  test("Padding Snapping MD", () => {
    expect(DoWork("./tests/padding/padding_md.html", "")).toContain(
      `.padding\\:md {\r\n\tpadding: 8px;\r\n}`
    );
  });
  test("Padding Snapping LG", () => {
    expect(DoWork("./tests/padding/padding_lg.html", "")).toContain(
      `.padding\\:lg {\r\n\tpadding: 20px;\r\n}`
    );
  });
  test("Padding Snapping XL", () => {
    expect(DoWork("./tests/padding/padding_xl.html", "")).toContain(
      `.padding\\:xl {\r\n\tpadding: 50px;\r\n}`
    );
  });
  test("Padding Snapping 2XL", () => {
    expect(DoWork("./tests/padding/padding_2xl.html", "")).toContain(
      `.padding\\:2xl {\r\n\tpadding: 200px;\r\n}`
    );
  });
});

/////////////////////////////////
describe("Background Color", () => {
  test("BackGround Color", () => {
    expect(DoWork("./tests/background_color.html", "")).toContain(
      `.background-color\\:red {\r\n\tbackground-color: red;\r\n}`
    );
  });

  test("BackGround Color Media", () => {
    expect(DoWork("./tests/background_color.html", "")).toContain(
      `@media (min-width: 768px) {\r\n.small\\?background-color\\:red {\r\n\tbackground-color: red;\r\n\t}\r\n}`
    );
  });

  test("BackGround Color Hover", () => {
    expect(DoWork("./tests/background_color.html", "")).toContain(
      `.background-color\\:red\\:hover:hover {\r\n\tbackground-color: red;\r\n}`
    );
  });
});

/////////////////////////////
describe("Border", () => {
  test("Border Width Snapping XS", () => {
    expect(DoWork("./tests/border/border_xs.html", "")).toContain(
      `.border-width\\:xs {\r\n\tborder-width: 1px;\r\n}`
    );
  });
  test("Border Width Snapping SM", () => {
    expect(DoWork("./tests/border/border_sm.html", "")).toContain(
      `.border-width\\:sm {\r\n\tborder-width: 2px;\r\n}`
    );
  });
  test("Border Width Snapping MD", () => {
    expect(DoWork("./tests/border/border_md.html", "")).toContain(
      `.border-width\\:md {\r\n\tborder-width: 4px;\r\n}`
    );
  });
  test("Border Width Snapping LG", () => {
    expect(DoWork("./tests/border/border_lg.html", "")).toContain(
      `.border-width\\:lg {\r\n\tborder-width: 6px;\r\n}`
    );
  });
  test("Border Width Snapping XL", () => {
    expect(DoWork("./tests/border/border_xl.html", "")).toContain(
      `.border-width\\:xl {\r\n\tborder-width: 8px;\r\n}`
    );
  });
  test("Border Width Snapping 2XL", () => {
    expect(DoWork("./tests/border/border_2xl.html", "")).toContain(
      `.border-width\\:2xl {\r\n\tborder-width: 10px;\r\n}`
    );
  });
});
