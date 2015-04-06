var Menu = Menu || {};

Menu.chickenWings = {
    name: '10 Chicken Wings',
    price: 7.99,
    options: [
        {
            name: 'breaded',
            type: 'radio',
            values: ['breaded', 'unbreaded']
        }
    ]
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
