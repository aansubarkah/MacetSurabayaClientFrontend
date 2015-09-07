//to make JSHint happy
/*global Hashids:false*/
import Ember from 'ember';
var hashids = new Hashids("m4c3tsur4b4y4");

export default Ember.Controller.extend({
  displayMap: false,
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
  origin: [-7.290293, 112.727226],
  destination: [0, 0],
  zoom: 14,
  isShowingModal: false,
  triggerSuggestions: 1,
  actions: {
    refreshPlace(lat, lng){
      this.set('lat', lat);
      this.set('lng', lng);
    },
    getOriginCoordinate(lat, lng){
      //console.log('origin lat:' + lat + ' lng:' + lng);
      this.set('origin', [lat, lng]);
    },
    getDestinationCoordinate(lat, lng){
      //console.log('destination lat:' + lat + ' lng:' + lng);
      this.set('destination', [lat, lng]);
    },
    getRoute(){
      //@todo refresh map before add route
      //@todo or remove route before adding
      //this.get('target.router').refresh();
      //this.transitionToRoute('journey');

      this.set('displayMap', true);

      //console.log(this.get('origin'));
      //console.log(this.get('destination'));
      this.set('routesForDisplay', []);
      var origin = this.get('origin');

      this.set('lat', origin[0]);
      this.set('lng', origin[1]);

      this.routesForDisplay.addObject({
        id: hashids.encode(new Date().getTime()),
        origin: this.get('origin'),
        destination: this.get('destination'),
        travelMode: 'driving',
        strokeColor: '#3333FF',
        strokeOpacity: 0.6,
        strokeWeight: 6,
        region: 'id'
      });
    },
    refreshPage(){
      this.set('lastminutes', 30);
      this.set('displayMap', false);
      this.transitionToRoute('journey');
    }
  }
});
