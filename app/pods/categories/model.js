import DS from 'ember-data';

export default DS.Model.extend({
  markers: DS.hasMany('marker', {async: true}),
  name: DS.attr('string'),
  active: DS.attr('boolean', {defaultValue: 1})
});
