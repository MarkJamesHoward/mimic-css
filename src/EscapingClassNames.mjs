export function Escape(className) {
  let final = className.replace("#", "\\#");
  final = final.replace("%", "\\%");

  return final;
}
