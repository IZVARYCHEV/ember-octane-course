import Route from '@ember/routing/route';
// eslint-disable-next-line ember/no-mixins
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default class BookEditRoute extends Route.extend(AuthenticatedRouteMixin) {
  model({ id }) {
    return this.store.findRecord('book', id);
  }
}
