var h=Object.defineProperty;var m=(o,e,t)=>e in o?h(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var c=(o,e,t)=>m(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function a(o){const e=document.createElement("div");return e.innerHTML=o,e.firstElementChild}class p{constructor(e){this.slides=e,this.elem=this.createInner()}createInner(){const e=a(`
        <div class="carousel">
  
          <div class="carousel__arrow carousel__arrow_right">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon">
          </div>
          <div class="carousel__arrow carousel__arrow_left">
            <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
          </div>
  
          <div class="carousel__inner">
          </div>
        </div>
      `);return this.createCard(e),this.carouselShift(e),this.addToBascet(e),e}createCard(e){const t=e.querySelector(".carousel__inner");for(let i=0;i<this.slides.length;i++){let s=this.slides[i];const r=a(`
          <div class="carousel__slide" data-id="${s.id}">
            <img src="/assets/images/carousel-img/${s.image}" class="carousel__img" alt="slide">
            <div class="carousel__caption">
              <span class="carousel__price">€${s.price.toFixed(2)}</span>
              <div class="carousel__title">${s.name}</div>
              <button type="button" class="carousel__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
              </button>
            </div>
          </div>
        `);t.appendChild(r)}}addToBascet(e){const t=e.querySelector(".carousel__inner");t.addEventListener("product-add",i=>{i.detail}),t.addEventListener("click",({target:i})=>{let s=i.closest("button");if(s){let r=s.closest("div[data-id]").getAttribute("data-id");const n=new CustomEvent("product-add",{detail:r,bubbles:!0});t.dispatchEvent(n)}})}carouselShift(e){let t=this.slides.length-1;const i=e.querySelector(".carousel__inner"),s=e.querySelector(".carousel__arrow_right"),r=e.querySelector(".carousel__arrow_left");r.style.display="none";let n=0;s.addEventListener("click",function(){n+=-i.offsetWidth,i.style.transform=`translateX(${n}px)`,n==-(i.offsetWidth*t)?s.style.display="none":(s.style.display="",r.style.display="")}),r.addEventListener("click",function(){n+=i.offsetWidth,i.style.transform=`translateX(${n}px)`,n==0?r.style.display="none":(r.style.display="",s.style.display="")})}}const _=[{name:"Penang shrimp",price:16,image:"penang_shrimp.png",id:"penang-shrimp"},{name:"Chicken cashew",price:14,image:"chicken_cashew.png",id:"chicken-cashew"},{name:"Red curry veggies",price:12.5,image:"red_curry_vega.png",id:"red-curry-veggies"},{name:"Chicken springrolls",price:6.5,image:"chicken_loempias.png",id:"chicken-springrolls"}];class v{constructor(e){this.categories=e,this.elem=this.createRibbon()}createRibbon(){const e=a(`
        <!--Корневой элемент RibbonMenu-->
        <div class="ribbon">
          <!--Кнопка прокрутки влево-->
          <button class="ribbon__arrow ribbon__arrow_left">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon">
          </button>
  
          <!--Ссылки на категории-->
          <nav class="ribbon__inner">
          </nav>
  
          <!--Кнопка прокрутки вправо-->
          <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon">
          </button>
        </div>
        `);return this.createCategories(e),this.ribbonShift(e),this.addToBascet(e),e}addToBascet(e){const t=e.querySelector(".ribbon__inner");t.addEventListener("ribbon-select",i=>{const s=e.querySelector(".ribbon__item_active");s&&s.classList.remove("ribbon__item_active"),e.querySelector(`.ribbon__item[data-id="${i.detail}"]`).classList.add("ribbon__item_active")}),t.addEventListener("click",i=>{const{target:s}=i,r=new CustomEvent("ribbon-select",{detail:s.dataset.id,bubbles:!0});t.dispatchEvent(r)})}createCategories(e){const t=e.querySelector(".ribbon__inner");for(let i=0;i<this.categories.length;i++){let s=this.categories[i],r;s.id==""?r=a(`
            <a href="#" class="ribbon__item ribbon__item_active" data-id="${s.id}">${s.name}</a>
            `):r=a(`
            <a href="#" class="ribbon__item" data-id="${s.id}">${s.name}</a>
            `),t.appendChild(r)}}ribbonShift(e){const t=e.querySelector(".ribbon__inner"),i=e.querySelector(".ribbon__arrow_right"),s=e.querySelector(".ribbon__arrow_left");t.addEventListener("scroll",function(){t.scrollWidth-t.scrollLeft-t.clientWidth<1?i.classList.remove("ribbon__arrow_visible"):t.scrollLeft==0?s.classList.remove("ribbon__arrow_visible"):(i.classList.add("ribbon__arrow_visible"),s.classList.add("ribbon__arrow_visible"))}),s.addEventListener("click",()=>{t.scrollBy(-350,0)}),i.addEventListener("click",()=>{t.scrollBy(350,0)})}}const b=[{id:"",name:"All"},{id:"salads",name:"Salads"},{id:"soups",name:"Soups"},{id:"chicken-dishes",name:"Chicken dishes"},{id:"beef-dishes",name:"Beef dishes"},{id:"seafood-dishes",name:"Seafood dishes"},{id:"vegetable-dishes",name:"Vegetable dishes"},{id:"bits-and-bites",name:"Bits and bites"},{id:"on-the-side",name:"On the side"}];class g{constructor({steps:e,value:t=0}){c(this,"onPointerMove",e=>{e.preventDefault();let t=(e.clientX-this.elem.getBoundingClientRect().left)/this.elem.offsetWidth;t<0&&(t=0),t>1&&(t=1),this.elem.querySelector(".slider__thumb").style.left=`${t*100}%`,this.elem.querySelector(".slider__progress").style.width=`${t*100}%`,this.value=Math.round(this.segments*t),this.elem.querySelector(".slider__value").innerHTML=this.value,this.elem.querySelector(".slider__step-active")&&this.elem.querySelector(".slider__step-active").classList.remove("slider__step-active"),this.elem.querySelector(".slider__steps").children[this.value].classList.add("slider__step-active")});c(this,"onPointerUp",()=>{document.removeEventListener("pointermove",this.onPointerMove),document.removeEventListener("pointerup",this.onPointerUp),this.elem.classList.remove("slider_dragging"),this.elem.querySelector(".slider__thumb").style.left=`${this.value/this.segments*100}%`,this.elem.querySelector(".slider__progress").style.width=`${this.value/this.segments*100}%`,this.elem.dispatchEvent(new CustomEvent("slider-change",{detail:this.value,bubbles:!0}))});this.steps=e,this.createSlider(),this.segments=e-1,this.setValue(t),this.ClickOnSlider(),this.addDragEvent()}createSlider(){this.elem=a(`
        <!--Корневой элемент слайдера-->
        <div class="slider">
  
          <!--Ползунок слайдера с активным значением-->
          <div class="slider__thumb" style="left: 0%;">
            <span class="slider__value">0</span>
          </div>
  
          <!--Заполненная часть слайдера-->
          <div class="slider__progress" style="width: 0%;"></div>
  
          <!--Шаги слайдера-->
          <div class="slider__steps">
            ${"<span></span>".repeat(this.steps)}
          </div>
        </div>
      `),this.elem.querySelector(".slider__steps").children[0].classList.add("slider__step-active")}ClickOnSlider(){this.elem.addEventListener("click",e=>{let s=(e.clientX-this.elem.getBoundingClientRect().left)/this.elem.offsetWidth*this.segments,r=Math.round(s);this.setValue(r),this.elem.dispatchEvent(new CustomEvent("slider-change",{detail:r,bubbles:!0}))})}addDragEvent(){this.elem.querySelector(".slider__thumb").addEventListener("pointerdown",t=>{t.preventDefault(),this.elem.classList.add("slider_dragging"),document.addEventListener("pointermove",this.onPointerMove),document.addEventListener("pointerup",this.onPointerUp)})}setValue(e){var l;const t=e/this.segments*100,i=this.elem.querySelector(".slider__thumb"),s=this.elem.querySelector(".slider__progress"),r=this.elem.querySelector(".slider__value"),n=this.elem.querySelector(".slider__steps");i.style.left=`${t}%`,s.style.width=`${t}%`,r.innerHTML=e,(l=n.querySelector(".slider__step-active"))==null||l.classList.remove("slider__step-active"),n.children[e].classList.add("slider__step-active")}}class d{constructor(e){this.product=e,this.elem=this.createCard(e)}createCard(e){const t=a(`
          <div class="card">
              <div class="card__top">
                  <img src="/assets/images/products-img/${e.image}" class="card__image" alt="product">
                  <span class="card__price">€${e.price.toFixed(2)}</span>
              </div>
              <div class="card__body">
                  <div class="card__title">${e.name}</div>
                  <button type="button" class="card__button">
                      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                  </button>
              </div>
          </div>
    `);return this.addToBascet(t),t}addToBascet(e){let t=e.querySelector(".card__button");t.addEventListener("product-add",i=>{}),t.addEventListener("click",()=>{if(t){let i=new CustomEvent("product-add",{detail:this.product.id,bubbles:!0});t.dispatchEvent(i)}})}}class y extends d{constructor(e){super(e[0]),this.products=e,this.filters={},this.elem=this.createGrid(e),this.renderContent()}createGrid(e){return a(`
        <div class="products-grid">
          <div class="products-grid__inner">
            
          </div>
        </div>
      `)}renderContent(){this.elem.querySelector(".products-grid__inner").innerHTML="";for(let e of this.products){if(this.filters.noNuts&&e.nuts||this.filters.vegeterianOnly&&!e.vegeterian||this.filters.maxSpiciness!==void 0&&e.spiciness>this.filters.maxSpiciness||this.filters.category&&e.category!=this.filters.category)continue;let t=new d(e);this.elem.querySelector(".products-grid__inner").append(t.elem)}}updateFilter(e){Object.assign(this.filters,e),this.renderContent()}}class f{constructor(){this.render(),this.addEventListeners()}render(){this.elem=a('<div class="cart-icon"></div>')}update(e){e.isEmpty()?this.elem.classList.remove("cart-icon_visible"):(this.elem.classList.add("cart-icon_visible"),this.elem.innerHTML=`
          <div class="cart-icon__inner">
            <span class="cart-icon__count">${e.getTotalCount()}</span>
            <span class="cart-icon__price">€${e.getTotalPrice().toFixed(2)}</span>
          </div>`,this.updatePosition(),this.elem.classList.add("shake"),this.elem.addEventListener("transitionend",()=>{this.elem.classList.remove("shake")},{once:!0}))}addEventListeners(){document.addEventListener("scroll",()=>this.updatePosition()),window.addEventListener("resize",()=>this.updatePosition())}updatePosition(){if(!this.elem.offsetHeight||!this.elem.offsetWidth)return;let t=document.querySelector(".container").getBoundingClientRect(),i=document.documentElement.clientWidth;if(i<=767){this.elem.style.position="",this.elem.style.top="",this.elem.style.left="",this.elem.style.zIndex="";return}let s=this.elem.getBoundingClientRect().top,r=window.scrollY,n=t.right+20,l=i-this.elem.offsetWidth-10;if(s<50||this.elem.style.position==="fixed")this.elem.style.position="fixed",this.elem.style.top="50px",this.elem.style.zIndex=1e3,this.elem.style.left=`${Math.min(n,l)}px`;else{let u=Math.min(r-t.top+50,t.bottom-this.elem.offsetHeight);this.elem.style.position="absolute",this.elem.style.top=`${u}px`,this.elem.style.left=`${Math.min(n,l)}px`,this.elem.style.zIndex=""}}}const L=o=>Array.from(o).map(e=>{switch(e){case"&":return"&amp;";case'"':return"&quot;";case"'":return"&#39;";case"<":return"&lt;";case">":return"&gt;";default:return e}}).join("");class S{constructor(){this.render(),this.elem.addEventListener("click",e=>this.onClick(e))}render(){this.elem=a(`
        <div class="modal">
          <div class="modal__overlay"></div>
          <div class="modal__inner">
            <div class="modal__header">
              <button type="button" class="modal__close">
                <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
              </button>
              <h3 class="modal__title"></h3>
            </div>
            <div class="modal__body"></div>
          </div>
        </div>
      `)}sub(e){return this.elem.querySelector(`.modal__${e}`)}open(){document.body.append(this.elem),document.body.classList.add("is-modal-open"),this._keydownEventListener=e=>this.onDocumentKeyDown(e),document.addEventListener("keydown",this._keydownEventListener),this.elem.querySelector("[autofocus]")&&this.elem.querySelector("[autofocus]").focus()}onClick(e){e.target.closest(".modal__close")&&(e.preventDefault(),this.close())}onDocumentKeyDown(e){e.code==="Escape"&&(e.preventDefault(),this.close())}setTitle(e){this.sub("title").textContent=e}setBody(e){this.sub("body").innerHTML="",this.sub("body").append(e)}close(){document.removeEventListener("keydown",this._keydownEventListener),document.body.classList.remove("is-modal-open"),this.elem.remove()}}class E{constructor(e){c(this,"cartItems",[]);c(this,"onModalBodyClick",e=>{if(e.target.closest(".cart-counter__button")){let i=e.target.closest("[data-product-id]").dataset.productId;this.updateProductCount(i,e.target.closest(".cart-counter__button_plus")?1:-1)}});this.cartIcon=e,this.addEventListeners()}addProduct(e){let t=this.cartItems.find(i=>i.product.id==e.id);t?t.count++:(t={product:e,count:1},this.cartItems.push(t)),this.onProductUpdate(t)}updateProductCount(e,t){let i=this.cartItems.find(s=>s.product.id==e);i.count+=t,i.count==0&&this.cartItems.splice(this.cartItems.indexOf(i),1),this.onProductUpdate(i)}isEmpty(){return this.cartItems.length===0}getTotalCount(){return this.cartItems.reduce((e,t)=>e+t.count,0)}getTotalPrice(){return this.cartItems.reduce((e,t)=>e+t.product.price*t.count,0)}renderProduct(e,t){return a(`
      <div class="cart-product" data-product-id="${e.id}">
        <div class="cart-product__img">
          <img src="/assets/images/products-img/${e.image}" alt="product">
        </div>
        <div class="cart-product__info">
          <div class="cart-product__title">${L(e.name)}</div>
          <div class="cart-product__price-wrap">
            <div class="cart-counter">
              <button type="button" class="cart-counter__button cart-counter__button_minus">
                <img src="/assets/images/icons/square-minus-icon.svg" alt="minus">
              </button>
              <span class="cart-counter__count">${t}</span>
              <button type="button" class="cart-counter__button cart-counter__button_plus">
                <img src="/assets/images/icons/square-plus-icon.svg" alt="plus">
              </button>
            </div>
            <div class="cart-product__price">€${e.price.toFixed(2)}</div>
          </div>
        </div>
      </div>`)}renderOrderForm(){return a(`<form class="cart-form">
        <h5 class="cart-form__title">Delivery</h5>
        <div class="cart-form__group cart-form__group_row">
          <input name="name" type="text" class="cart-form__input" placeholder="Name" required value="Santa Claus">
          <input name="email" type="email" class="cart-form__input" placeholder="Email" required value="john@gmail.com">
          <input name="tel" type="tel" class="cart-form__input" placeholder="Phone" required value="+1234567">
        </div>
        <div class="cart-form__group">
          <input name="address" type="text" class="cart-form__input" placeholder="Address" required value="North, Lapland, Snow Home">
        </div>
        <div class="cart-buttons">
          <div class="cart-buttons__buttons btn-group">
            <div class="cart-buttons__info">
              <span class="cart-buttons__info-text">total</span>
              <span class="cart-buttons__info-price">€${this.getTotalPrice().toFixed(2)}</span>
            </div>
            <button type="submit" class="cart-buttons__button btn-group__button button">order</button>
          </div>
        </div>
      </form>`)}renderModal(){this.modal=new S,this.modal.setTitle("Your order"),this.modalBody=document.createElement("div");for(let{product:e,count:t}of this.cartItems)this.modalBody.append(this.renderProduct(e,t));this.modalBody.append(this.renderOrderForm()),this.modalBody.addEventListener("click",this.onModalBodyClick),this.modalBody.querySelector("form").onsubmit=e=>this.onSubmit(e),this.modal.setBody(this.modalBody),this.modal.elem.addEventListener("modal-close",()=>{this.modal=null,this.modalBody=null}),this.modal.open()}onProductUpdate({product:e,count:t}){if(this.cartIcon.update(this),!(!this.modal||!document.body.classList.contains("is-modal-open"))){if(this.cartItems.length==0){this.modal.close();return}t==0?this.modalBody.querySelector(`[data-product-id="${e.id}"]`).remove():(this.modalBody.querySelector(`[data-product-id="${e.id}"] .cart-counter__count`).innerHTML=t,this.modalBody.querySelector(`[data-product-id="${e.id}"] .cart-product__price`).innerHTML="€"+(t*e.price).toFixed(2)),this.modalBody.querySelector(".cart-buttons__info-price").innerHTML="€"+this.getTotalPrice().toFixed(2)}}async onSubmit(e){e.preventDefault(),this.modalBody.querySelector('button[type="submit"]').classList.add("is-loading");let t=this.modalBody.querySelector(".cart-form"),i=new FormData(t);await fetch("https://httpbin.org/post",{method:"POST",body:i}),this.modal.setTitle("Success!"),this.modalBody.querySelector('button[type="submit"]').classList.remove("is-loading"),this.cartItems=[],this.cartIcon.update(this),this.modalBody.innerHTML=`
        <div class="modal__body-inner">
          <p>
            Order successful! Your order is being cooked :) <br>
            We’ll notify you about delivery time shortly.<br>
            <img src="/assets/images/gif/delivery.gif">
          </p>
        </div>
        `}addEventListeners(){this.cartIcon.elem.onclick=()=>this.renderModal()}}class w{constructor(){}async render(){this.renderCarousel(),this.renderRibbon(),this.renderStepSlider(),this.renderCartIcon(),this.cart=new E(this.cartIcon),this.products=await this.fetchProducts(),this.renderProductsGrid(),this.productsGrid.updateFilter({noNuts:document.getElementById("nuts-checkbox").checked,vegeterianOnly:document.getElementById("vegeterian-checkbox").checked,maxSpiciness:this.stepSlider.value,category:this.ribbonMenu.value}),document.body.addEventListener("product-add",({detail:e})=>{let t=this.products.find(i=>i.id==e);this.cart.addProduct(t)}),this.stepSlider.elem.addEventListener("slider-change",({detail:e})=>{this.productsGrid.updateFilter({maxSpiciness:e})}),this.ribbonMenu.elem.addEventListener("ribbon-select",({detail:e})=>{this.productsGrid.updateFilter({category:e})}),document.getElementById("nuts-checkbox").onchange=e=>{this.productsGrid.updateFilter({noNuts:e.target.checked})},document.getElementById("vegeterian-checkbox").onchange=e=>{this.productsGrid.updateFilter({vegeterianOnly:e.target.checked})}}renderCarousel(){this.carousel=new p(_),document.querySelector("[data-carousel-holder]").append(this.carousel.elem)}renderRibbon(){this.ribbonMenu=new v(b),document.querySelector("[data-ribbon-holder]").append(this.ribbonMenu.elem)}renderStepSlider(){this.stepSlider=new g({steps:5,value:3}),document.querySelector("[data-slider-holder]").append(this.stepSlider.elem)}renderCartIcon(){let e=document.querySelector("[data-cart-icon-holder]");this.cartIcon=new f,e.append(this.cartIcon.elem)}renderProductsGrid(){this.productsGrid=new y(this.products),document.querySelector("[data-products-grid-holder]").innerHTML="",document.querySelector("[data-products-grid-holder]").append(this.productsGrid.elem)}async fetchProducts(){return await(await fetch("../products.json")).json()}}let q=new w;q.render().then(()=>console.log("Страница готова!"));
