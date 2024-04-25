export function Escape(className: string) {
  let final = className.replace("#", "\\#");
  final = final.replace("%", "\\%");

  return final;
}
