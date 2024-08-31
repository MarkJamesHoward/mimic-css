import { mimicConfig } from "./configurationLoader";
import { MediaBreakPointsText } from "./mediaBreakpoints";
import { ColorSizes, Sizes } from "./Sizes";

export let double_hyphen_then_colon = new RegExp("");
export let double_hyphen_no_colon = new RegExp("");
export let single_hyphen_then_colon_snappable = new RegExp("");
export var single_hyphen_then_colon = new RegExp("");
export var single_hyphen_hash_value = new RegExp("");
export var single_hyphen_then_colon_then_another_hyphen = new RegExp("");
export var single_hyphen_then_colon_box_shadow = new RegExp("");
export var no_hyphen_snappable = new RegExp("");
export var no_hyphen = new RegExp("");
export var no_hyphen_pixel_values = new RegExp("");

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
    `^(?<media>${MediaTags})?(?<style>[A-Za-z]+-[A-Za-z]+-[A-Za-z]+):(?<value1>[A-Za-z0-9\%\.#]+)(?<customclass>\@[A-Za-z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?$`,
    `gi`
  );

  double_hyphen_no_colon = new RegExp(
    `^(?<media>${MediaTags})?(?<style>[A-Za-z0-9]+-[A-Za-z0-9]+)-(?<value1>[A-Za-z0-9]+)(?<customclass>\@[A-Za-z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?$`,
    `gi`
  );

  //border-width:5
  //border-width:5:hover
  //large?border-width:5
  //large?border-width:5:hover
  //background-color:red
  //box-shadow:10px
  single_hyphen_then_colon_snappable = new RegExp(
    `^(?<media>${MediaTags})?(?<style>[A-Za-z]+-[A-Za-z]+):(?<value1>${Snapping})(?<value2>${Snapping})?(?<value3>${Snapping})?(?<value4>${Snapping})?(?<pseudo>:hover|:focus)?(?<customclass>\@[A-Za-z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?$`,
    `gi`
  );

  single_hyphen_then_colon = new RegExp(
    `^(?<media>${MediaTags})?(?<style>[A-Za-z]+-[A-Za-z]+):(?<value1>[0-9a-z\.]+)(?<value1type>px|ch|rem|\%)?(?<value2>[0-9a-z]+)?(?<value2type>px|ch|rem|\%)?(?<value3>[0-9a-z]+)?(?<value3type>px|ch|rem|\%)?(?<value4>[0-9a-z]+)?(?<value4type>px|ch|rem|\%)?(?<pseudo>:hover|:focus)?(?<customclass>\@[A-Za-z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?$`,
    `gi`
  );

  single_hyphen_hash_value = new RegExp(
    `^(?<media>${MediaTags})?(?<style>[A-Za-z]+-[A-Za-z]+):(?<value1>#[A-Za-z0-9]+)(?<pseudo>:hover|:focus)?(?<customclass>\@[A-Za-z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?$`,
    `gi`
  );

  //justify-content: space-between
  single_hyphen_then_colon_then_another_hyphen = new RegExp(
    `^(?<style>[A-Za-z]+-[A-Za-z]+):(?<value1>[A-Za-z]+-[A-Za-z]+)?(?<customclass>\@[A-Za-z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?$`,
    `gi`
  );

  //////////////////////////////////
  // box-shadow: 10px 10px
  single_hyphen_then_colon_box_shadow = new RegExp(
    `^(?<media>${MediaTags})?(?<style>[A-Za-z]+-[A-Za-z]+):(?<value1>[0-9]+)(?<value1type>px|ch|rem)(?<value2>[0-9]+)(?<value2type>px|ch|rem)(?<value3>[0-9]+)?(?<value3type>px|ch|rem)?(?<value4>[0-9]+)?(?<value4type>px|ch|rem)?(?<color>[a-zA-Z]+)?(?<pseudo>:hover|:focus)??(?<customclass>\@[A-Za-z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?$`,
    `gi`
  );

  no_hyphen_snappable = new RegExp(
    `^(?<media>${MediaTags})?(?<style>[A-Za-z]+):(?<value1>${Snapping})(?<value2>${Snapping})?(?<value3>${Snapping})?(?<value4>${Snapping})?(?<pseudo>:hover|:focus)?(?<customclass>\@[A-Za-z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?$`,
    `gi`
  );

  no_hyphen = new RegExp(
    `^(?<media>${MediaTags})?(?<style>[A-Za-z]+):(?<value1>[0-9A-Za-z\%\#]+)(?<value1type>px|ch|rem)?(?<value2>[0-9A-Za-z]+)?(?<value2type>px|ch|rem)?(?<value3>[0-9A-Za-z]+)?(?<value3type>px|ch|rem)?(?<value4>[0-9A-Za-z]+)?(?<value4type>px|ch|rem)?(?<pseudo>:hover|:focus)?(?<customclass>\@[A-Za-z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?$`,
    `gi`
  );

  no_hyphen_pixel_values = new RegExp(
    `^(?<media>${MediaTags})?(?<style>[A-Za-z]+):(?<value1>[0-9]+)(?<value1type>px|ch|rem)?(?<value2>[0-9]+)?(?<value2type>px|ch|rem)?(?<value3>[0-9]+)?(?<value3type>px|ch|rem)?(?<value4>[0-9]+)?(?<value4type>px|ch|rem)?(?<pseudo>:hover|:focus)?(?<customclass>\@[A-Za-z0-9]+(?<customclass_subgroup_pseudo>:hover|:focus)?)?$`,
    `gi`
  );
}
