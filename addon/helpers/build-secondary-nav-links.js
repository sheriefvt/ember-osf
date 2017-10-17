import Ember from 'ember';
import { serviceLinks } from '../const/service-links';

/**
 * @module ember-osf
 * @submodule helpers
 */

/**
 * Returns secondary links corresponding to a given service
 *
 * @class buildSecondaryNavLinks
 * @param {String} currentService name of current service (HOME, PREPRINTS, REGISTRIES, or MEETINGS)
 * @return {Array} Returns array of secondary link information
 */

export default Ember.Helper.extend({  // Helper defined using a class, so can inject dependencies.
    session: Ember.inject.service(),
    currentUser: Ember.inject.service(),
    compute(params) { // Helpers defined using a class need a compute function
        const currentService = params[0].toUpperCase();
        const serviceSubmitLink = Ember.isEmpty(params[1]) ? serviceLinks.preprintsSubmit : params[1] + 'submit';
        const serviceDiscoverLink = Ember.isEmpty(params[1]) ? serviceLinks.preprintsDiscover: params[1] + 'discover';
        const session = this.get('session');
        let links = Ember.Object.create({
            HOME: [
                {
                    name: session.get('isAuthenticated') ? 'eosf.navbar.myProjects' : 'eosf.navbar.browse',
                    href: session.get('isAuthenticated') ? serviceLinks.myProjects : serviceLinks.exploreActivity,
                },
                {
                    name: 'eosf.navbar.search',
                    href: serviceLinks.search,
                    type: 'search'
                },
                {
                    name: 'eosf.navbar.donate',
                    href: 'https://cos.io/donate',
                    type: 'donateToCOS'
                },

            ],
            PREPRINTS: [
                {
                    name: 'eosf.navbar.addAPreprint',
                    href: serviceSubmitLink,
                    type: 'addAPreprint'
                },
                {
                    name: 'eosf.navbar.search',
                    href: serviceDiscoverLink,
                    type: 'search'
                },
                {
                    name: 'eosf.navbar.support',
                    href: serviceLinks.preprintsSupport
                },
                {
                    name: 'eosf.navbar.donate',
                    href: 'https://cos.io/donate',
                    type: 'donateToCOS'
                },

            ],
            REGISTRIES: [
                {
                    name: 'eosf.navbar.search',
                    href: serviceLinks.registriesDiscover,
                    type: 'search'
                },
                {
                    name: 'eosf.navbar.support',
                    href: serviceLinks.registriesSupport
                },
                {
                    name: 'eosf.navbar.donate',
                    href: 'https://cos.io/donate',
                    type: 'donateToCOS'
                },

            ],
            MEETINGS: [
                {
                    name: 'eosf.navbar.search',
                    href: serviceLinks.meetingsHome,
                    type: 'search'
                },
                {
                    name: 'eosf.navbar.donate',
                    href: 'https://cos.io/donate',
                    type: 'donateToCOS'
                },

            ]
        });

        // If unauthenticated, add support link to HOME links. (If authenticated, support link can be found under Auth dropdown)
        if(session.get('isAuthenticated')) {
            links.HOME.unshift(
                {
                    name: 'eosf.navbar.myQuickFiles',
                    href: serviceLinks.myQuickFiles
                }
            );
        } else {
            links.HOME.push(
                {
                    name: 'eosf.navbar.support',
                    href: serviceLinks.osfSupport
                }
            );
        }

        if (session.get('isAuthenticated')) {
            this.get('currentUser.user').then((user) => {
                if (user.get('canViewReviews')) {
                    links.PREPRINTS.insertAt(1, {
                        name: 'eosf.navbar.reviews',
                        href: serviceLinks.reviewsHome,
                    });
                }
            })
        }

        if (Object.keys(links).includes(currentService)) {
            return links[currentService];
        }
        return links.HOME;  // Return Home links by default

    }
});
