import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('disclaimer');
  this.route('journey');
  this.route('markers');
  this.route('marker');
  this.route('categories');
  this.route('category');
  this.route('weathers');
  this.route('weather');
  this.route('respondents');
  this.route('respondent');
  this.route('markerview');
  this.route('markerviews');
  this.route('loading');
});

export default Router;
