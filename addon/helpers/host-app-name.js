import Ember from 'ember';
import config from 'ember-get-config';

/**
 Apply the `fix-special-char` utility function to clean up malformed text sent from the server.

 Usage example:
 ```handlebars
 This is text we want to fix: {{fix-special-char 'Now &amp; then'}}
 ```

 @class fix-special-char-helper
 @uses fix-special-char
 */
export function hostAppName() {
    return config.APP.host;
}

export default Ember.Helper.helper(hostAppName);