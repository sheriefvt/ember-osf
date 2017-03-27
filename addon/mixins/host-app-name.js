import Ember from 'ember';
import config from 'ember-get-config';

export default Ember.Mixin.create({
    hostAppName : config.modulePrefix
});