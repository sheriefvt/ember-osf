import Ember from 'ember';
import config from 'ember-get-config';

export function hostService() {
    return config.APP.host;
}

export default Ember.Helper.helper(hostService);