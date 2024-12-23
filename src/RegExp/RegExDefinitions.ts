import { mimicConfig } from "../ConfigurationLoader";
import { MediaBreakPointsText } from "../Snapping/MediaBreakpoints";
import { ColorSizes, Sizes } from "../Snapping/Sizes";

export let double_hyphen_no_colon = new RegExp("");

export let double_hyphen_then_colon = new RegExp("");
export let double_hyphen_then_colon_snappable = new RegExp("");

export var single_hyphen_hash_value = new RegExp("");
export var single_hyphen_then_colon = new RegExp("");

export var single_hyphen_then_colon_then_another_hyphen = new RegExp("");

export var single_hyphen_then_colon_box_shadow = new RegExp("");
export var single_hyphen_then_colon_box_shadow_snappable = new RegExp("");

export var no_hyphen_pixel_values = new RegExp("");
export var no_hyphen = new RegExp("");

export var border_shorthand = new RegExp("");

const CustomClass: string = `(?<customclass>\@[A-Z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?`;

export function RegenerateRegExExpressions() {
  const MediaTags = `${
    mimicConfig?.MediaBreakPointsTextOverride?.extrasmall ??
    MediaBreakPointsText.extrasmall
  }\\?|${
    mimicConfig?.MediaBreakPointsTextOverride?.small ??
    MediaBreakPointsText.small
  }\\?|${
    mimicConfig?.MediaBreakPointsTextOverride?.medium ??
    MediaBreakPointsText.medium
  }\\?|${
    mimicConfig?.MediaBreakPointsTextOverride?.large ??
    MediaBreakPointsText.large
  }\\?|${
    mimicConfig?.MediaBreakPointsTextOverride?.extralarge ??
    MediaBreakPointsText.extralarge
  }\\?`;

  const SnappingButNotOnColor = `${
    mimicConfig?.SnappingOverride?.xs ?? Sizes.xs
  }|${mimicConfig?.SnappingOverride?.sm ?? Sizes.sm}|${
    mimicConfig?.SnappingOverride?.md ?? Sizes.md
  }|${mimicConfig?.SnappingOverride?.lg ?? Sizes.lg}|${
    mimicConfig?.SnappingOverride?.xl ?? Sizes.xl
  }|${mimicConfig?.SnappingOverride?.xl2 ?? Sizes.xl2}`;

  const SnappingColorOnly = `${
    mimicConfig?.ColorPalette1TextOverride?.colora ?? ColorSizes.c1a
  }|${mimicConfig?.ColorPalette1TextOverride?.colorb ?? ColorSizes.c1b}|${
    mimicConfig?.ColorPalette1TextOverride?.colorc ?? ColorSizes.c1c
  }|${mimicConfig?.ColorPalette1TextOverride?.colord ?? ColorSizes.c1d}`;

  const Snapping = `${mimicConfig?.SnappingOverride?.xs ?? Sizes.xs}|${
    mimicConfig?.SnappingOverride?.sm ?? Sizes.sm
  }|${mimicConfig?.SnappingOverride?.md ?? Sizes.md}|${
    mimicConfig?.SnappingOverride?.lg ?? Sizes.lg
  }|${mimicConfig?.SnappingOverride?.xl ?? Sizes.xl}|${
    mimicConfig?.SnappingOverride?.xl2 ?? Sizes.xl2
  }|${mimicConfig?.ColorPalette1TextOverride?.colora ?? ColorSizes.c1a}|${
    mimicConfig?.ColorPalette1TextOverride?.colorb ?? ColorSizes.c1b
  }|${mimicConfig?.ColorPalette1TextOverride?.colorc ?? ColorSizes.c1c}|${
    mimicConfig?.ColorPalette1TextOverride?.colord ?? ColorSizes.c1d
  }`;

  double_hyphen_then_colon = new RegExp(
    `^(?<media>${MediaTags})?(?<style>[A-Z]+-[A-Z]+-[A-Z]+):(?<value1>[A-Z0-9\%\.#]+)${CustomClass}$`,
    `gi`
  );

  // text-decoration-color: c1a
  double_hyphen_then_colon_snappable = new RegExp(
    `^(?<media>${MediaTags})?(?<style>[A-Z]+-[A-Z]+-[A-Z]+):` +
      `(?<value1>${Snapping})(?<value2>${Snapping})?(?<value3>${Snapping})?(?<value4>${Snapping})?` +
      `(?<pseudo>:hover|:focus)?${CustomClass}$`,
    `gi`
  );

  // text-decoration-color: red
  double_hyphen_no_colon = new RegExp(
    `^(?<media>${MediaTags})?(?<style>[A-Z0-9]+-[A-Z0-9]+)-(?<value1>[A-Z0-9]+)${CustomClass}$`,
    `gi`
  );

  //border-width:5
  //border-width:md
  //border-width:xl
  //border-width:5:hover
  //large?border-width:5
  //large?border-width:5:hover
  //background-color:red
  //background-color:c1a
  single_hyphen_then_colon = new RegExp(
    `^(?<media>${MediaTags})?(?<style>[A-Z]+-[A-Z]+):` +
      `((?<value1>(?!${Snapping})[0-9A-Z\.#]+)(?<value1type>px|ch|rem|\%)?|(?<value1snap>${Snapping}))` +
      `((?<value2>(?!${Snapping})[0-9A-Z]+)?(?<value2type>px|ch|rem|\%)?|(?<value2snap>${Snapping}))` +
      `((?<value3>(?!${Snapping})[0-9A-Z]+)?(?<value3type>px|ch|rem|\%)?|(?<value3snap>${Snapping}))` +
      `((?<value4>(?!${Snapping})[0-9A-Z]+)?(?<value4type>px|ch|rem|\%)?|(?<value4snap>${Snapping}))` +
      `(?<pseudo>:hover|:focus)?${CustomClass}$`,
    `gi`
  );

  //Border Shorthand
  //border:10px solid red
  border_shorthand = new RegExp(
    `^(?<media>${MediaTags})?(?<style>[A-Z]+):` +
      `((?<value1>(?!${Snapping})[0-9]+)(?<value1type>px)|(?<value1snap>${Snapping}))` +
      `((?<value2>solid|dashed|dotted))` +
      `(?<color>[A-Z0-9#]+)?` +
      `(?<pseudo>:hover|:focus)??${CustomClass}$`,
    `gi`
  );

  //justify-content: space-between
  single_hyphen_then_colon_then_another_hyphen = new RegExp(
    `^(?<media>${MediaTags})?(?<style>[A-Z]+-[A-Z]+):(?<value1>[A-Z]+-[A-Z]+)?${CustomClass}$`,
    `gi`
  );

  //////////////////////////////////
  // box-shadow: 10px 10px
  // border-width: 10px 10px
  single_hyphen_then_colon_box_shadow = new RegExp(
    `^(?<media>${MediaTags})?(?<style>[A-Z]+-[A-Z]+):` +
      `((?<value1>(?!${Snapping})[0-9]+)(?<value1type>px|ch|rem)|(?<value1snap>${Snapping}))` +
      `((?<value2>(?!${Snapping})[0-9]+)(?<value2type>px|ch|rem)|(?<value2snap>${Snapping}))` +
      `((?<value3>(?!${Snapping})[0-9]+)?(?<value3type>px|ch|rem)?|(?<value3snap>${Snapping})?)` +
      `((?<value4>(?!${Snapping})[0-9]+)?(?<value4type>px|ch|rem)?|(?<value4snap>${Snapping})?)` +
      `(?<color>[A-Z]+)?` +
      `(?<pseudo>:hover|:focus)??${CustomClass}$`,
    `gi`
  );

  single_hyphen_then_colon_box_shadow_snappable = new RegExp(
    `^(?<media>${MediaTags})?(?<style>[A-Z]+-[A-Z]+):` +
      `(?<value1>${SnappingButNotOnColor})(?<value2>${SnappingButNotOnColor})?(?<value3>${SnappingButNotOnColor})?(?<value4>${SnappingButNotOnColor})?` +
      `(?<color>[A-Z0-9]+)?` +
      `(?<pseudo>:hover|:focus)??${CustomClass}$`,
    `gi`
  );

  //display: flex
  //color: red
  //color: c1a
  no_hyphen = new RegExp(
    `^(?<media>${MediaTags})?(?<style>[A-Z]+):` +
      `((?<value1>(?!${Snapping})[0-9A-Z\%\#]+)(?<value1type>px|ch|rem)?|(?<value1snap>${Snapping}))` +
      `((?<value2>(?!${Snapping})[0-9A-Z]+)?(?<value2type>px|ch|rem)?|(?<value2snap>${Snapping}))` +
      `((?<value3>(?!${Snapping})[0-9A-Z]+)?(?<value3type>px|ch|rem)?|(?<value3snap>${Snapping}))` +
      `((?<value4>(?!${Snapping})[0-9A-Z]+)?(?<value4type>px|ch|rem)?|(?<value4snap>${Snapping}))` +
      `(?<pseudo>:hover|:focus)?${CustomClass}$`,
    `gi`
  );

  no_hyphen_pixel_values = new RegExp(
    `^(?<media>${MediaTags})?(?<style>[A-Z]+):(?<value1>[0-9]+)` +
      `(?<value1type>px|ch|rem)?(?<value2>[0-9]+)?(?<value2type>px|ch|rem)?(?<value3>[0-9]+)?` +
      `(?<value3type>px|ch|rem)?` +
      `(?<value4>[0-9]+)?(?<value4type>px|ch|rem)?` +
      `(?<pseudo>:hover|:focus)?${CustomClass}$`,
    `gi`
  );
}
