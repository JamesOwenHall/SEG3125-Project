var Menu = Menu || {};
Menu.items = Menu.items || {};

Menu.items.chickenWings = {
    name: '10 Chicken Wings',
    price: 7.99,
    options: [
        {
            name: 'Breaded',
            type: 'radio',
            values: ['breaded', 'unbreaded']
        }
    ]
};

Menu.items.onionRings = {
    name: 'Onion Rings',
    price: 2.99,
    options: [
        {
            name: 'Size',
            type: 'radio',
            values: ['small', 'large']
        }
    ]
};

Menu.init = function() {
    $('#modal-basic .add-to-cart').click(function() {
        var itemName = $('#modal-basic .modal-title').text();
        var item = Menu.itemWithName(itemName);
        console.log('Adding '+itemName+' to cart...');
        console.log(item);
    });
};

Menu.itemWithName = function(name) {
    for (var item in Menu.items) {
        if (Menu.items[item].name === name) {
            return Menu.items[item];
        }
    }
};

Menu.showModal = function(menuItem) {
    var modal = $('#modal-basic');
    var modalBody = modal.find('.modal-body');
    modal.find('.modal-title').text(menuItem.name);

    var fragment = document.createDocumentFragment();
    var form = document.createElement('form');

    menuItem.options.forEach(function(option) {
        switch (option.type) {
            case 'radio':
                var optionLabel = document.createElement('label');
                optionLabel.appendChild(document.createTextNode(option.name));
                form.appendChild(optionLabel);

                var formGroup = document.createElement('div');
                formGroup.setAttribute('class', 'form-group');

                option.values.forEach(function(value) {
                    var label = document.createElement('label');
                    var input = document.createElement('input');

                    input.setAttribute('name', option.name);
                    input.setAttribute('type', 'radio');
                    input.setAttribute('value', value);

                    label.setAttribute('class', 'radio-inline');
                    label.appendChild(input);
                    label.appendChild(document.createTextNode(' ' + value));

                    formGroup.appendChild(label);
                });

                formGroup.childNodes[0].childNodes[0].setAttribute('checked', 'checked');
                form.appendChild(formGroup);
                break;
        }

        var priceLabel =  document.createElement('label');
        priceLabel.appendChild(document.createTextNode('Price: $'+menuItem.price));
        form.appendChild(priceLabel);

        fragment.appendChild(form);
    });

    modalBody.empty();
    modalBody.append(fragment);
    modal.modal();
};
