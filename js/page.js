"use strict"

class Page {
    constructor(options) {
        this._el = options.element;
        this._phones = options.phones;
        /*   this._search = new Search( {
         element: document.querySelector('[data-component="filter"]')
         });*/
        this.phoneViewer = new PhoneViewer({
            elem: document.querySelector('[data-component="phoneViewer"]')
        });

        this._phoneCatalogue= new PhoneCatalogue( {
            element: document.querySelector('[data-component = "phoneCatalogue"]'),
            phones: this._phones,
            onPhoneSelected: this._onPhoneSelected.bind(this)
        })
    }
    _onPhoneSelected(phoneId) {

        let phoneDetailes = this._getPhoneDetailes(phoneId);
        this.phoneViewer.show(phoneId);
    }
    _getPhoneDetailes(phoneId) {
        return {};
    }
}