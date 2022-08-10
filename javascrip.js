const addToShopingCartButtons=document.querySelectorAll('.btn')
addToShopingCartButtons.forEach(addToCartButton => {
    addToCartButton,addEventListener('click', addToCartClicked);
})

function addToCartClicked (event){
    const button = event.target ;
    button.closest('.card')
    console.log (addToCartClicked);

    const itemTitle = item.querySelectorAll ('item-title');
}