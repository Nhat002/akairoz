import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import Ember from 'ember';
import ENV from 'fyp-app/config/environment';

export default OAuth2PasswordGrant.extend({
  store: Ember.inject.service(),
  cookies: Ember.inject.service(),
  serverTokenEndpoint: `http://${ENV.APP.Hera}/v1/authenticate`,
  authenticate(identification, password, scope = [], headers = {}) {
    let authenticator = this;
    return new Ember.RSVP.Promise((resolve, reject) => {
      let data = { grant_type: 'password', username: identification, password:password };
      const serverTokenEndpoint = this.get('serverTokenEndpoint');
      const useResponse = this.get('rejectWithResponse');
      const scopesString = scope.join(' ');
      if (!Ember.isEmpty(scopesString)) {
        data.scope = scopesString;
      }
      this.makeRequest(serverTokenEndpoint, data, headers).then((response) => {
          Ember.run(() => {
            resolve(response);
            console.log(response);
            let store = this.get('store');
            store.push({
              data :{
                id:1,
                type: "user",
                attributes:{
                  "userId": response.user_id,
                },
              }
            });
            let cookieService = this.get('cookies');
            cookieService.write("userId", response.user_id);
          });
      }, (response) => {
        Ember.run(() => {
            reject(response);
          });
      });
    });

  },
   makeRequest(url, data, headers = {}) {
    headers['Content-Type'] = 'application/json';

    const clientIdHeader = this.get('_clientIdHeader');
    if (!Ember.isEmpty(clientIdHeader)) {
      merge(options.headers, clientIdHeader);
    }
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: url,
        type: 'POST',
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: "application/json; charset=UTF-8",
        success: function(data) {
          resolve(data);
        },
        error: function (request, textStatus, error) {
          reject(error);
        }
      })
    });
  },
});