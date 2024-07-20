import { css } from "lit";
export const TWStyles = css`
/* SingleHyphenSnapable*/
.font-size\\:xs {
	font-size: 8px;
}

/* SingleHyphenSnapable*/
.border-radius\\:2xl {
	border-radius: 50px;
}

 /* SingleHyphenSnapableMedia*/
@media (min-width: 640px) {
.extrasmall\\?font-size\\:xs {
	font-size: 8px;
	}
}

/* SingleHyphenSnapableMedia*/
@media (min-width: 768px) {
.small\\?font-size\\:sm {
	font-size: 12px;
	}
}

/* SingleHyphenSnapableMedia*/
@media (min-width: 1024px) {
.medium\\?font-size\\:md {
	font-size: 16px;
	}
}

/* SingleHyphenSnapableMedia*/
@media (min-width: 1280px) {
.large\\?font-size\\:lg {
	font-size: 24px;
	}
}

/* SingleHyphenSnapableMedia*/
@media (min-width: 1536px) {
.extralarge\\?font-size\\:xl {
	font-size: 48px;
	}
}

 `
    