import { css } from "lit";
export const TWStyles = css`
/* NoHypen Media=none*/
.display\\:flex {
	display: flex;
}
/* SingleHypen Media=none*/
.flex-direction\\:row {
	flex-direction: row;
}
 /* NoHypenMedia Media=large*/
@media (min-width: 1280px) {
.large\\?display\\:flex {
	display: flex;
	}
}

  /* SingleHypenMedia Media=medium*/
@media (min-width: 1024px) {
.medium\\?flex-direction\\:row {
	flex-direction: row;
	}
}

     /* SingleHyphenSnapable Media=none*/
.font-size\\:lg {
	font-size: 24px;
}
   /* SingleHyphenSnapableMedia Media=large*/
@media (min-width: 1280px) {
.large\\?font-size\\:xs {
	font-size: 8px;
	}
}

        `
    