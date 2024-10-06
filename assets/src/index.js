import Carousel from "../blocks/Carousel.js";
import slides from "../storages/slides.js";

import RibbonMenu from "../blocks/RibbonMenu.js";
import categories from "../storages/categories.js";

import StepSlider from "../blocks/StepSlider.js";

export default class Main {
  constructor() {}

  async render() {
    this.renderCarousel();
    this.renderRibbon();
    this.renderStepSlider();
  }

  renderCarousel() {
    this.carousel = new Carousel(slides);
    document.querySelector("[data-carousel-holder]").append(this.carousel.elem);
  }

  renderRibbon() {
    this.ribbonMenu = new RibbonMenu(categories);

    document.querySelector("[data-ribbon-holder]").append(this.ribbonMenu.elem);
  }

  renderStepSlider() {
    this.stepSlider = new StepSlider({
      steps: 5,
      value: 3,
    });

    document.querySelector("[data-slider-holder]").append(this.stepSlider.elem);
  }
}
