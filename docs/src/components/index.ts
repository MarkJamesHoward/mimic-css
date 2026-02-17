import { LitElement, html } from "lit";

import { property, customElement, state } from "lit/decorators.js";

// export const tagName = "scroll-to-top-wc";

@customElement("scroll-to-top-wc")
export class ScrollToTop extends LitElement {
  @property()
  activatewhen: number = 200;

  @state()
  showToast: Boolean = false;

  @property({ type: Boolean }) fancy: Boolean = false;

  render() {
    return html`
      <style>
        :host {
          position: fixed;
          bottom: 20px;
          display: block;
        }

        .showToast {
          opacity: 0.9;
          //transition: 1s all ease-in-out;
        }

        .hideToast {
          visibility: hidden;
          transform: rotateY(90deg);
          //transition: 1s all ease-in-out;
          opacity: 0;
        }

        .fancy {
          transition: 1s all ease-in-out;
        }

        .FlipContainer {
          perspective: 800px;
        }

        .card {
          transform-style: preserve-3d;
        }

        .showToast,
        .hideToast {
          background-color: var(--scroll-top-background-color, white);
          color: var(--scroll-top-color, black);
          cursor: pointer;
          padding: 1rem;
          border-radius: 1rem;
          border: 1px solid black;
        }
      </style>

      <div class="FlipContainer">
        <div class="card">
          <div
            part="container"
            class="${this.showToast ? "showToast " : "hideToast "} +
            ${this.fancy ? " fancy" : " "} "
            @click="${this.topFunction}"
          >
            <slot name="text">Top</slot>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    // When the user scrolls down XXpx from the top of the document, show the button
    window.onscroll = this.scrollFunction.bind(this);
  }

  scrollFunction() {
    if (
      document.body.scrollTop > this.activatewhen ||
      document.documentElement.scrollTop > this.activatewhen
    ) {
      // console.log("time to show the toast!");
      this.showToast = true;
    } else {
      // console.log("not showing the toast ");
      this.showToast = false;
    }
  }

  //When the user clicks on the button, scroll to the top of the document
  topFunction() {
    //console.log("scroll-to-top-wc: initiating scroll");

    let event = new CustomEvent("scrolling", {
      detail: {
        message: "activated scroll to top",
      },

      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
