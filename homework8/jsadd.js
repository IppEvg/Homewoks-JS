'use strict';
let products = document.querySelectorAll('.position');
let buttonsAddToBasket = document.querySelectorAll('button[data-productId]');
function addEventListenersForAddButtons(){
buttonsAddToBasket.forEach(function(element){
    element.addEventListener('click',addProductHandler);
});
}
function addProductHandler(event){
    let productId = event.currentTarget.getAttribute('data-productId');
    addProductIntoBasket(productId);
}










addEventListenersForAddButtons();
