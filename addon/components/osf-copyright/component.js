import Ember from 'ember';
import layout from './template';
import ENV from "../config/environment";

/**
 * @module ember-osf
 * @submodule components
 */

/**
 * Display copyright information as a footer
 * @class osf-copyright
 */
export default Ember.Component.extend({
    layout,
    hostName: ENV.APP.host,
    currentYear: (new Date()).getUTCFullYear().toString()
});
