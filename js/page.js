"use strict"

function Page (options) {
    this._el = options.element;
    this._phones = options.phones;
    this._search = new Search( {
        element: document.querySelector('[data-component = "search"]')
    });

    this._phoneCatalogue= new PhoneCatalogue( {
        element: document.querySelector('[data-component = "phoneCatalogue"]'),
        phones: this._phones
    })
}