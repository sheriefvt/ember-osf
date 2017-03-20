/**
 * @module ember-osf
 * @submodule utils
 */

/**
 * @class host-service-name-helper
 */

/**
 * This function is useful for retrieving the hostname from the environment.js for the hosting app. This is needed to
 * allow ember-osf addons identify their hosting apps.
 *
 * @method hostservicename
 * @return {String}
 */
function hostServiceName() {
    return config.modulePrefix;
}

export { hostServiceName };