var Cart = Cart || {};

Cart.init = function() {

};

Cart.addToCart = function(chosenItem) {
    var fragment = document.createDocumentFragment();

    var div1 = document.createElement('div');
    fragment.appendChild(div1);

    var div2 = document.createElement('div');
    div1.appendChild(div2);

    var editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn btn btn-xs btn-default');
    editBtn.appendChild(document.createTextNode('Edit'));
    div2.appendChild(editBtn);

    var removeBtn = document.createElement('button');
    removeBtn.setAttribute('class', 'remove-btn btn btn-xs btn-danger');
    removeBtn.appendChild(document.createTextNode('Remove'));
    div2.appendChild(removeBtn);

    var title = document.createElement('h3');
    title.setAttribute('class', 'cart-title');
    title.appendChild(document.createTextNode(chosenItem.item.name));
    div1.appendChild(title);

    var extras = document.createElement('p');
    extras.setAttribute('class', 'cart-extras');
    div1.appendChild(extras);

    var price = document.createElement('p');
    price.setAttribute('class', 'cart-price');
    price.appendChild(document.createTextNode('$'+chosenItem.item.price));
    div1.appendChild(price);

    $('.cart').append(fragment);
};
