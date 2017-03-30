"use strict"

class PhoneCatalogue {
    constructor(options) {
        this._el = options.element;
        this._phones = options.phones;
        this.onPhoneSelectedCallback = options.onPhoneSelected;
        this._template = document.getElementById('phone-catalogue-template').innerHTML;

        this._el.addEventListener('click', this._onPhoneClick.bind(this));

        this._render();
    }

    _onPhoneClick (e) {
        var link= e.target.closest('[data-selector = "openTrigger"]');

        if(!link) {
            return;
        }
        let phoneId = e.target.closest('[data-selector = "phoneItemContainer"]').dataset.phoneId;
        alert(phoneId);
        this.onPhoneSelectedCallback(phoneId);
    }
    _render()
    {
        this._el.innerHTML = _.template(this._template)({
            title: 'Phones to sell',
            phones: this._phones
        });
    }
}



   /* function PhoneCatalogue (options) {
        this._el = options.element;
        this._phones = options.phones;
        this._template = document.getElementById('phone-catalogue-template').innerHTML;

        this._el.addEventListener('click', _onPhoneClick);

        this._render();
    }

    PhoneCatalogue.prototype._onPhoneClick = function(e) {

    }
    PhoneCatalogue.prototype._render = function() {
        this._el.innerHTML = _.template(this._template)({
            title: 'Phones to sell',
            phones: this._phones
        });
    }
*/