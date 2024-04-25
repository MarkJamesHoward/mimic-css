export function DeDuplication(CurrentCSS: string, NewCSS: string) {
  let result = "";
  if (NewCSS != undefined) {
    if (!CurrentCSS?.includes(NewCSS)) {
      result = NewCSS;
    }
  }
  return result;
}
