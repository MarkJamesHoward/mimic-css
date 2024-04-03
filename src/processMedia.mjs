
import {
  small,
  large,
  xtraLarge,
  smallText,
  largeText,
  xtraLargeText,
} from "../src/mediaBreakpoints.mjs";

export function ProcessMedia(matches, colon) {
    let output = "";
    
        for (const match of matches) {
            //console.log(match);
      
        let style = match.groups["style"];
          let value = match.groups["value"];
          let media = match.groups["media"];
    
         // console.log(`MEDIA FOUND ${media} ${style} ${value}`);
          let width;
    
          switch (media) {
            case smallText:
              width=small
              break;
            case largeText:
              width=large
              break;
            case xtraLargeText:
              width=xtraLarge
              break;
            default:
              console.log("unknown media!!");
          }
    
          output +=
                `@media (min-width: ${width}px) {\r\n.${media}\\?${style}${colon == false ? '\\:' : '-'}${value} {\r\n\t` +
                style +
                ": " +
                value +
                `;\r\n}\r\n}\r\n`;
            }
            return output
}