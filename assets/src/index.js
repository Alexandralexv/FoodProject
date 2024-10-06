import Carousel from "../blocks/Carousel.js";
import slides from "../storages/slides.js";

import RibbonMenu from "../blocks/RibbonMenu.js";
import categories from "../storages/categories.js";

export default class Main {
  constructor() {}

  async render() {
    this.renderCarousel();
    this.renderRibbon();
  }

  renderCarousel() {
    this.carousel = new Carousel(slides);
    document.querySelector("[data-carousel-holder]").append(this.carousel.elem);
  }

  renderRibbon() {
    this.ribbonMenu = new RibbonMenu(categories);

    document.querySelector("[data-ribbon-holder]").append(this.ribbonMenu.elem);
  }
}
