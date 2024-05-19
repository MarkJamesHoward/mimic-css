//border-style:solid
//flex-direction:row
export const double_hyphen_then_colon =
  /^(?<media>extrasmall\?|small\?|medium\?|large\?|extralarge\?)?(?<style>[A-Za-z]+-[A-Za-z]+-[A-Za-z]+):(?<value1>[A-Za-z0-9\%\.#]+)$/gi;

export const double_hyphen_no_colon =
  /^(?<media>extrasmall\?|small\?|medium\?|large\?|extralarge\?)?(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+)-(?<value>[A-Za-z0-9]+)$/gi;
// //////////////

//border-width:5
//border-width:5:hover
//large?border-width:5
//large?border-width:5:hover
//background-color:red
//box-shadow:10px
export const single_hyphen_then_colon_snappable =
  /^(?<media>extrasmall\?|small\?|medium\?|large\?|extralarge\?)?(?<style>[A-Za-z]+-[A-Za-z]+):(?<value1>xs|sm|md|lg|xl|2xl)(?<value2>xs|sm|md|lg|xl|2xl)?(?<value3>xs|sm|md|lg|xl|2xl)?(?<value4>xs|sm|md|lg|xl|2xl)?(?<pseudo>:hover|:focus)?$/gi;

export const single_hyphen_then_colon =
  /^(?<media>extrasmall\?|small\?|medium\?|large\?|extralarge\?)?(?<style>[A-Za-z]+-[A-Za-z]+):(?<value1>[0-9A-Za-z]+)(?<value1type>px|ch|rem)?(?<value2>[0-9A-Za-z]+)?(?<value2type>px|ch|rem)?(?<value3>[0-9A-Za-z]+)?(?<value3type>px|ch|rem)?(?<value4>[0-9A-Za-z]+)?(?<value4type>px|ch|rem)?(?<pseudo>:hover|:focus)?$/gi;

export const single_hyphen_hash_value =
  /^(?<media>extrasmall\?|small\?|medium\?|large\?|extralarge\?)?(?<style>[A-Za-z]+-[A-Za-z]+):(?<value1>#[A-Za-z0-9]+)(?<pseudo>:hover|:focus)?$/gi;

//justify-content: space-between
export const single_hyphen_then_colon_then_another_hyphen =
  /^(?<style>[A-Za-z]+-[A-Za-z]+):(?<value>[A-Za-z]+-[A-Za-z]+)$/gi;

// display:flex
// display:flex:hover
// padding:1px
// padding:1px:focus
// height:10px
// height:100%
export const single_colon =
  /^(?<media>extrasmall\?|small\?|medium\?|large\?|extralarge\?)?(?<style>[A-Za-z]+):(?<value1>[A-Za-z0-9\%\.#]+)(?<value2type>px|ch|rem)?(?<pseudo>:hover|:focus)?$/gi;

//////////////////////////////////
// box-shadow: 10px 10px
export const single_hyphen_then_colon_box_shadow =
  /^(?<media>extrasmall\?|small\?|medium\?|large\?|extralarge\?)?(?<style>[A-Za-z]+-[A-Za-z]+):(?<value1>[0-9]+)(?<value1type>px|ch|rem)(?<value2>[0-9]+)(?<value2type>px|ch|rem)(?<value3>[0-9]+)?(?<value3type>px|ch|rem)?(?<value4>[0-9]+)?(?<value4type>px|ch|rem)?(?<color>[a-zA-Z]+)?(?<pseudo>:hover|:focus)?$/gi;

export const no_hyphen_snappable =
  /^(?<media>extrasmall\?|small\?|medium\?|large\?|extralarge\?)?(?<style>[A-Za-z]+):(?<value1>xs|sm|md|lg|xl|2xl)(?<value2>xs|sm|md|lg|xl|2xl)?(?<value3>xs|sm|md|lg|xl|2xl)?(?<value4>xs|sm|md|lg|xl|2xl)?(?<pseudo>:hover|:focus)?$/gi;

export const no_hyphen =
  /^(?<media>extrasmall\?|small\?|medium\?|large\?|extralarge\?)?(?<style>[A-Za-z]+):(?<value1>[0-9A-Za-z]+)(?<value1type>px|ch|rem)?(?<value2>[0-9A-Za-z]+)?(?<value2type>px|ch|rem)?(?<value3>[0-9A-Za-z]+)?(?<value3type>px|ch|rem)?(?<value4>[0-9A-Za-z]+)?(?<value4type>px|ch|rem)?(?<pseudo>:hover|:focus)?$/gi;

export const no_hyphen_pixel_values =
  /^(?<media>extrasmall\?|small\?|medium\?|large\?|extralarge\?)?(?<style>[A-Za-z]+):(?<value1>[0-9]+)(?<value1type>px|ch|rem)?(?<value2>[0-9]+)?(?<value2type>px|ch|rem)?(?<value3>[0-9]+)?(?<value3type>px|ch|rem)?(?<value4>[0-9]+)?(?<value4type>px|ch|rem)?(?<pseudo>:hover|:focus)?$/gi;
