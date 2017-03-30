"use strict";

class PhoneCatalogue extends Component {
    constructor(options) {
        super(options);
        this._phones = options.phones;
       // this.onPhoneSelectedCallback = options.onPhoneSelected;
        this._template = document.getElementById('phone-catalogue-template').innerHTML;

        this._el.addEventListener('click', this._onPhoneClick.bind(this));

        this._render();
    }
    _onPhoneClick (e) {
       let link= e.target.closest('[data-selector = "openTrigger"]');

        if(!link) {
            return;
        }
        let phoneId = e.target.closest('[data-selector = "phoneItemContainer"]').dataset.phoneId;
        this._triggerPhoneSelected(phoneId);
        //this.onPhoneSelectedCallback(phoneId);
    }
    _triggerPhoneSelected(phoneId) {
        let event = new CustomEvent('phoneSelected',{
            detail: phoneId
        });
        this._el.dispatchEvent(event);
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