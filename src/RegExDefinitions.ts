export const double_hyphen_then_colon =
  /^(?<media>extrasmall\?|small\?|medium\?|large\?|extralarge\?)?(?<style>[A-Za-z]+-[A-Za-z]+-[A-Za-z]+):(?<value1>[A-Za-z0-9\%\.#]+)(?<customclass>\@[A-Za-z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?$/gi;

export const double_hyphen_no_colon =
  /^(?<media>extrasmall\?|small\?|medium\?|large\?|extralarge\?)?(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+)-(?<value1>[A-Za-z0-9]+)(?<customclass>\@[A-Za-z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?$/gi;
// //////////////

//border-width:5
//border-width:5:hover
//large?border-width:5
//large?border-width:5:hover
//background-color:red
//box-shadow:10px
export const single_hyphen_then_colon_snappable =
  /^(?<media>extrasmall\?|small\?|medium\?|large\?|extralarge\?)?(?<style>[A-Za-z]+-[A-Za-z]+):(?<value1>xs|sm|md|lg|xl|c1|2|c3|c4|c5)(?<value2>xs|sm|md|lg|xl|c1|2|c3|c4|c5)?(?<value3>xs|sm|md|lg|xl|c1|2|c3|c4|c5)?(?<value4>xs|sm|md|lg|xl|c1|2|c3|c4|c5)?(?<pseudo>:hover|:focus)?(?<customclass>\@[A-Za-z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?$/gi;

export const single_hyphen_then_colon =
  /^(?<media>extrasmall\?|small\?|medium\?|large\?|extralarge\?)?(?<style>[A-Za-z]+-[A-Za-z]+):(?<value1>[0-9a-z\.]+)(?<value1type>px|ch|rem|\%)?(?<value2>[0-9a-z]+)?(?<value2type>px|ch|rem|\%)?(?<value3>[0-9a-z]+)?(?<value3type>px|ch|rem|\%)?(?<value4>[0-9a-z]+)?(?<value4type>px|ch|rem|\%)?(?<pseudo>:hover|:focus)?(?<customclass>\@[A-Za-z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?$/gi;

export const single_hyphen_hash_value =
  /^(?<media>extrasmall\?|small\?|medium\?|large\?|extralarge\?)?(?<style>[A-Za-z]+-[A-Za-z]+):(?<value1>#[A-Za-z0-9]+)(?<pseudo>:hover|:focus)?(?<customclass>\@[A-Za-z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?$/gi;

// export const single_hyphen_percentage_value =
//   /^(?<media>extrasmall\?|small\?|medium\?|large\?|extralarge\?)?(?<style>[A-Za-z]+-[A-Za-z]+):(?<value1>[A-Za-z0-9\%]+)(?<pseudo>:hover|:focus)?(?<customclass>\@[A-Za-z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?$/gi;

//justify-content: space-between
export const single_hyphen_then_colon_then_another_hyphen =
  /^(?<style>[A-Za-z]+-[A-Za-z]+):(?<value1>[A-Za-z]+-[A-Za-z]+)?(?<customclass>\@[A-Za-z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?$/gi;

// display:flex
// display:flex:hover
// padding:1px
// padding:1px:focus
// height:10px
// height:100%
export const single_colon =
  /^(?<media>extrasmall\?|small\?|medium\?|large\?|extralarge\?)?(?<style>[A-Za-z]+):(?<value1>[A-Za-z0-9\%\.#]+)(?<value2type>px|ch|rem)?(?<pseudo>:hover|:focus)?(?<customclass>\@[A-Za-z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?$/gi;

//////////////////////////////////
// box-shadow: 10px 10px
export const single_hyphen_then_colon_box_shadow =
  /^(?<media>extrasmall\?|small\?|medium\?|large\?|extralarge\?)?(?<style>[A-Za-z]+-[A-Za-z]+):(?<value1>[0-9]+)(?<value1type>px|ch|rem)(?<value2>[0-9]+)(?<value2type>px|ch|rem)(?<value3>[0-9]+)?(?<value3type>px|ch|rem)?(?<value4>[0-9]+)?(?<value4type>px|ch|rem)?(?<color>[a-zA-Z]+)?(?<pseudo>:hover|:focus)??(?<customclass>\@[A-Za-z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?$/gi;

export const no_hyphen_snappable =
  /^(?<media>extrasmall\?|small\?|medium\?|large\?|extralarge\?)?(?<style>[A-Za-z]+):(?<value1>xs|sm|md|lg|xl|c1|2|c3|c4|c5)(?<value2>xs|sm|md|lg|xl|c1|2|c3|c4|c5)?(?<value3>xs|sm|md|lg|xl|c1|2|c3|c4|c5)?(?<value4>xs|sm|md|lg|xl|c1|2|c3|c4|c5)?(?<pseudo>:hover|:focus)?(?<customclass>\@[A-Za-z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?$/gi;

export const no_hyphen =
  /^(?<media>extrasmall\?|small\?|medium\?|large\?|extralarge\?)?(?<style>[A-Za-z]+):(?<value1>[0-9A-Za-z\%#]+)(?<value1type>px|ch|rem)?(?<value2>[0-9A-Za-z]+)?(?<value2type>px|ch|rem)?(?<value3>[0-9A-Za-z]+)?(?<value3type>px|ch|rem)?(?<value4>[0-9A-Za-z]+)?(?<value4type>px|ch|rem)?(?<pseudo>:hover|:focus)?(?<customclass>\@[A-Za-z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?$/gi;

export const no_hyphen_pixel_values =
  /^(?<media>extrasmall\?|small\?|medium\?|large\?|extralarge\?)?(?<style>[A-Za-z]+):(?<value1>[0-9]+)(?<value1type>px|ch|rem)?(?<value2>[0-9]+)?(?<value2type>px|ch|rem)?(?<value3>[0-9]+)?(?<value3type>px|ch|rem)?(?<value4>[0-9]+)?(?<value4type>px|ch|rem)?(?<pseudo>:hover|:focus)?(?<customclass>\@[A-Za-z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?$/gi;
