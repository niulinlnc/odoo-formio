// Copyright Nova Code (http://www.novacode.nl)
// See LICENSE file for full licensing details.

import { OdooFormioForm } from "./formio_form.js";

/**
FIX / WORKAROUND browser compatibility error.
Wrap Component class and bootstrap into functions and put template in
Component env.

OS/platform: browsers
=====================
- Mac: Safari 13.1
- iOS: Safari, Firefox

Error
=====
- Safari 13.1 on Mac experiences error:
  unexpected token '='. expected an opening '(' before a method's parameter list
- iOS not debugged yet. Dev Tools not present in browser.

More info
=========
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Browser_compatibility
*/

function app() {
    class App extends OdooFormioForm {
        initForm() {
            if (!!document.getElementById('formio_form_uuid')) {
                this.form_uuid = document.getElementById('formio_form_uuid').value;
            }
            this.config_url = '/formio/form/' + this.form_uuid + '/config';
            this.submission_url = '/formio/form/' + this.form_uuid + '/submission';
            this.submit_url = '/formio/form/' + this.form_uuid + '/submit';
        }
    }

    const app = new App();
    app.mount(document.getElementById('formio_form_app'));
}

async function start() {
    const templates = await owl.utils.loadFile('/formio/static/src/js/form/backend_app.xml');
    const env = { qweb: new owl.QWeb({templates})};
    owl.Component.env = env;
    await owl.utils.whenReady();
    app();
}

start();
