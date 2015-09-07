import Ember from 'ember';

export default Ember.Controller.extend({
  geolocation: Ember.inject.service(),
  userLocation: null,
  times: [
    {label: '30 minutes', value: 30},
    {label: '1 hour', value: 60},
    {label: '6 hours', value: 360},
    {label: '12 hours', value: 720},
    {label: '1 day', value: 1440},
    {label: '1 week', value: 10080}
  ],
  init: function () {
    var that = this;
    this.get('geolocation').getLocation().then(function () {
      var currentLocation = that.get('geolocation').get('currentLocation');
      that.set('userLocation', currentLocation);

      // if user share her location, relocate lat and lng, otherwise it will use defaul
      // value which is suarasurabaya office
      that.set('lat', currentLocation[0]);
      that.set('lng', currentLocation[1]);
    });
  },
  queryParams: ['lastminutes'],
  lastminutes: 30,
  lat: -7.290293,
  lng: 112.727226,
  newLat: 0,
  newLng: 0,
  zoom: 14,
  isShowingModal: false,
  triggerSuggestions: 1,
  actions: {
    refreshPlace(lat, lng){
      this.set('lat', lat);
      this.set('lng', lng);
    }
  }
});
