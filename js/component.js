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
    on(eventName, handler) {
        this._el.addEventListener(eventName, handler);
    }
    trigger(eventName, data, options) {
        options = options || {};
        if(data != undefined) {
            options.detail = data;
        }
        alert(9);
        let event = new CustomEvent('phoneSelected', options);
        this._el.dispatchEvent(event);
    }
}
