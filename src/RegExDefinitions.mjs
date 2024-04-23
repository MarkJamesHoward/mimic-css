//border-style-solid
//flex-direction-row
export const double_hyphen_no_colon =
  /^(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+)-(?<value>[A-Za-z0-9]+)(?<![hover|-])$/gi;

export const double_hyphen_no_colon_media =
  /^(?<media>extrasmall|small|large|extralarge+)\?(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+)-(?<value>[A-Za-z0-9]+)$/gi;
//////////////

//border-width:5
//border-width:5:hover
//large?border-width:5
//large?border-width:5:hover
export const single_hyphen_then_colon =
  /^(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+):(?<value>[A-Za-z0-9]+)$/gi;

export const single_hyphen_then_colon_hover =
  /^(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+):(?<value>[A-Za-z0-9]+):hover$/gi;

export const media_single_hyphen_then_colon =
  /^(?<media>extrasmall|small|medium|large|extralarge+)\?(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+):(?<value>[A-Za-z0-9]+)$/gi;

export const media_single_hyphen_then_colon_hover =
  /^(?<media>extrasmall|small|medium|large|extralarge+)\?(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+):(?<value>[A-Za-z0-9]+):hover$/gi;
//////////////

//justify-content: space-between
export const single_hyphen_then_colon_then_another_hyphen =
  /^(?<style>[A-Za-z]+-[A-Za-z]+):(?<value>[A-Za-z]+-[A-Za-z]+)$/gi;

// display:flex
// padding:1px
// height:10px
// height:100%
export const single_colon =
  /^(?<style>[A-Za-z]+):(?<value>[A-Za-z0-9\%\.#]+)$/gi;
export const single_colon_media =
  /^(?<media>extrasmall|small|medium|large|extralarge+)\?(?<style>[A-Za-z0-9]+):(?<value>[A-Za-z0-9\%\.#]+)$/gi;

// display:flex:hover
export const single_colon_hover =
  /(?<!.)(?<style>[A-Za-z0-9]+):(?<value>[A-Za-z]+):hover/gi;

//Padding shorthand
export const single_colon_padding_shorthand =
  /^(?<style>[A-Za-z0-9]+):(?<value1>[0-9]+)(?<value1type>[a-z]{2})(?<value2>[0-9]+)(?<value2type>[a-z]{2})(?<value3>[0-9]+)(?<value3type>[a-z]{2})(?<value4>[0-9]+)(?<value4type>[a-z]{2})$/gi;

//Padding shorthand snappable
export const single_colon_padding_shorthand_snappable =
  /^(?<style>[A-Za-z0-9]+):(?<snap1>[xs|sm|md|lg|xl|2xl])(?<snap2>[a-z]{2})(?<snap3>[a-z]{2})(?<snap4>[a-z]{2})$/gi;
