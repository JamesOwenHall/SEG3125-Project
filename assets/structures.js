module.exports = (function() {

    var MenuItem = Backbone.Model.extend({
        data: ""
    });

    var Cart = Backbone.Collection.extend({
        model: MenuItem
    });

    return {
        MenuItem: MenuItem,
        Cart: Cart
    };
})();