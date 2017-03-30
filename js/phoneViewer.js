"use strict";

class PhoneViewer extends Component {
    constructor(options) {
        super(options);

        this._template = document.getElementById("phone-viewer-template").innerHTML;

        this._el.addEventListener('click', this._onBackClick.bind(this));
    }
    show(phoneDetailes) {

        this._el.innerHTML = _.template(this._template)({
            phone: phoneDetailes
        });
        super.show();
    }
    _onBackClick(e) {
        let backButton = e.target.closest('[data-selector="backButton"]');
        if(!backButton) { return; }
        this.trigger('back');
    }

}