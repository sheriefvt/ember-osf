import Ember from 'ember';
import layout from './template';
import hostService from 'ember-osf/utils/host-service';

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
    currentYear: (new Date()).getUTCFullYear().toString(),
    hostName: hostService(this)
});
