import Carousel from "./assets/blocks/Carousel.js";
import slides from "./assets/storages/slides.js";

export default class Main {
  constructor() {}

  async render() {
    this.renderCarousel();
  }

  renderCarousel() {
    this.carousel = new Carousel(slides);
    document.querySelector("[data-carousel-holder]").append(this.carousel.elem);
  }
}
