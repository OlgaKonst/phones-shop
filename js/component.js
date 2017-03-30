"use strict";

class Component {
    constructor(options) {
        this._el = options.elem;
    }
    show(phoneDetailes) {

        this._el.classList.remove('js-hidden');
    }
    hide() {
        this._el.classList.add('js-hidden');
    }
    getElement() {
        return this._el;
    }
    _con(){console.log('component', this._el);}
}
