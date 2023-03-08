/**
 * @file
 * Browser version of plugin scripts, includign polyfills and external
 * libraries.
 */

import PluginComponent from './component';
import './modal-dialog';
import './accordion';
import './accordion-item';
import './toggle-button';
import cookieConsent, {googleConsentMode} from './cookie-consent';

window.PluginComponent = new PluginComponent();

googleConsentMode();

document.addEventListener('DOMContentLoaded', () => {
  cookieConsent(document.querySelector('.cookie-consent'));
});
