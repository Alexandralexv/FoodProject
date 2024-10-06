import createElement from "../lib/create-element.js";
import ProductCard from "./ProductCard.js";

export default class ProductGrid extends ProductCard {
  constructor(products) {
    super(products[0]);
    this.products = products;
    this.filters = {};
    this.elem = this.createGrid(products);
    this.renderContent(); // Добавил
  }
  createGrid(products) {
    const grid = createElement(`
        <div class="products-grid">
          <div class="products-grid__inner">
            
          </div>
        </div>
      `);

    return grid;
  }

  renderContent() {
    this.elem.querySelector(".products-grid__inner").innerHTML = "";

    for (let product of this.products) {
      if (this.filters.noNuts && product.nuts) {
        continue;
      }

      if (this.filters.vegeterianOnly && !product.vegeterian) {
        continue;
      }

      if (
        this.filters.maxSpiciness !== undefined &&
        product.spiciness > this.filters.maxSpiciness
      ) {
        continue;
      }

      if (this.filters.category && product.category != this.filters.category) {
        continue;
      }

      let card = new ProductCard(product);
      this.elem.querySelector(".products-grid__inner").append(card.elem);
    }
  }

  updateFilter(filters) {
    Object.assign(this.filters, filters);
    this.renderContent();
  }
}