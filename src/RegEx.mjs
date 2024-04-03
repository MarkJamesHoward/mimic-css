  // border-style-solid border-width-5 flex-direction-row
  export const classRegEx3Parts =
    /(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+)-(?<value>[A-Za-z0-9]+)/gi;

  export const classRegEx3PartsWithMedia =
    /(?<media>small|large|xtraLarge+)\?(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+)-(?<value>[A-Za-z0-9]+)/gi;
  //////////////  

  //border-width:5 
  export const classRegEx1HyphenThenColumn =
  /(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+):(?<value>[A-Za-z0-9]+)/gi;

  export const classRegEx1HyphenThenColumnWithMedia =
    /(?<media>small|large|xtraLarge+)\?(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+):(?<value>[A-Za-z0-9]+)/gi;
  ////////////// 


  // display: flex
  export const classRegExSingleHyphen =
    /(?<style>[A-Za-z0-9]+):(?<value>[A-Za-z]+)/gi;