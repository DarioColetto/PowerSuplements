/**
 * ModalComponent
 * @extends {HTMLElement}
 */
export class ModalComponent extends HTMLElement {
  /** @type {HTMLElement} content */
  content;
  /** @type {HTMLElement} btnClose */
  btnClose;

  /**
   * Constructor
   */
  constructor() {
    super();
    this.className = "modal";
    this.id = "myModal";

    this.initContent();
    this.initCloseButton();
  }

  /**
   * Initializes the content of the modal
   */
  initContent() {
    this.content = document.createElement("div");
    this.content.className = "modal-content";
    this.appendChild(this.content);
  }

  /**
   * Initializes the close button of the modal
   */
  initCloseButton() {
    this.btnClose = document.createElement("span");
    this.btnClose.className = "close";
    this.btnClose.innerText = "X";
    this.content.appendChild(this.btnClose);

    // When the user clicks on <span> (x), close the modal
    this.btnClose.addEventListener("click", () => {
      this.style.display = "none";
      this.remove();
    });
  }

  /**
   * Called when the element is added to the DOM
   */
  connectedCallback() {
    console.log("modal open");
  }

  /**
   * Called when the element is removed from the DOM
   */
  disconnectedCallback() {
    console.log("modal close");
  }
}

customElements.define("modal-component", ModalComponent);