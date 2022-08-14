'use strict';
let basketCounterEl = document.querySelector('.basket_span');
let basket = {};
let basketTotalEl = document.querySelector('.basket_menu>.mega_item>.mega_item_section');

function addCodeIntoListBasket(productId){
let productAdded = document.querySelector(`.productCount[data-productId ="${productId}" ]`);
  if (productAdded){
    increaseProductCount(productId);
    recalculateSummProducts(productId);
  }  else {
    renderNewProductInBasket(productId);
  }
}

function increaseProductCount(productId){
let productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
productCountEl.textContent++;
}

function recalculateSummProducts(productId){
let recalcProdutInRow = document.querySelector(`.mega_item_section_local[data-productId ="${productId}"]`);
let stringValueProduct = products[productId].childNodes[1].childNodes[3].childNodes[5].innerText;
let totalPriseForRow = (basket[productId]*(parseInt(stringValueProduct.match(/[0-9]+/)[0], 10))).toFixed(2);
recalcProdutInRow.textContent = "$"+totalPriseForRow;
}

function addTotalPriseOfBasket(){
let totalPrise = document.querySelector('.basket_menu>.mega_item>.mega_item_section');
let summ = 0;
for (let productId in basket){
    let stringValueProduct = document.querySelector(`.mega_item_section_local[data-productId= "${productId}"]`);
    let innerStringValueProduct = stringValueProduct.innerText;
    summ +=  (Number((parseInt(innerStringValueProduct.match(/[0-9]+/)[0], 10))));
    }
    totalPrise.textContent = `Стоимость товаров в корзине: $${summ}`;
}
function renderNewProductInBasket(productId){
    let productRow = `
    <div class="basket_row">
    <div> ${products[productId].childNodes[1].childNodes[3].childNodes[1].innerText}</div>
    <div>
        <span class="productCount" data-productId = "${productId}">1</span>
    </div>
    <div> ${products[productId].childNodes[1].childNodes[3].childNodes[5].innerText}</div>
    <div>
        <span class = "mega_item_section_local" data-productId ="${productId}">${products[productId].childNodes[1].childNodes[3].childNodes[5].innerText}</span>
    </div>
    `;
    basketTotalEl.insertAdjacentHTML('beforebegin',productRow);
}

function addProductToObject(productId){
if(!(productId in basket)){
    basket[productId]=1;
} else {
    basket[productId]++;
}
}

function addNumberToSpan(){
    basketCounterEl.textContent++;
}
function addProductIntoBasket(productId){
    addNumberToSpan();
    addProductToObject(productId);
    addCodeIntoListBasket(productId);
    addTotalPriseOfBasket();
}
