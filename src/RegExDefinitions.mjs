//border-style-solid
//flex-direction-row
export const double_hyphen_no_colon =
  /(?<!.)(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+)-(?<value>[A-Za-z0-9]+)(?<![hover|-])/gi;

export const double_hyphen_no_colon_media =
  /(?<!.)(?<media>small|large|xtraLarge+)\?(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+)-(?<value>[A-Za-z0-9]+)/gi;
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
  /^(?<media>small|medium|large|xtraLarge+)\?(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+):(?<value>[A-Za-z0-9]+)$/gi;

export const media_single_hyphen_then_colon_hover =
  /^(?<media>small|medium|large|xtraLarge+)\?(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+):(?<value>[A-Za-z0-9]+):hover$/gi;
//////////////

//justify-content: space-between
export const single_hyphen_then_colon_then_another_hyphen =
  /(?<!.)(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+):(?<value>[A-Za-z0-9]+-[A-Za-z0-9]+)(?<![hover])/gi;

// display:flex
// padding:1px
// display:flex:hover
export const single_colon = /^(?<style>[A-Za-z0-9]+):(?<value>[A-Za-z0-9]+)$/gi;

export const single_colon_hover =
  /(?<!.)(?<style>[A-Za-z0-9]+):(?<value>[A-Za-z]+):hover/gi;
