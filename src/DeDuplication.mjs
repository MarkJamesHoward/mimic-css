export function DeDuplication(CurrentCSS, NewCSS) {
  let result = "";
  if (NewCSS != undefined) {
    if (!CurrentCSS?.includes(NewCSS)) {
      result = NewCSS;
    }
  }
  return result;
}
