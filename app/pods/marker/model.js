import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.belongsTo('category', {
    async: true
  }),
  user: DS.belongsTo('user', {
    async: true
  }),
  respondent: DS.belongsTo('respondent', {
    async: true
  }),
  weather: DS.belongsTo('weather', {
    async: true
  }),
  category_id: DS.attr('number'),
  user_id: DS.attr('number'),
  respondent_id: DS.attr('number'),
  respondentName: DS.attr('string', {defaultValue: ''}),
  respondentContact: DS.attr('string', {defaultValue: ''}),
  weather_id: DS.attr('number'),
  lat: DS.attr('number'),
  lng: DS.attr('number'),
  created: DS.attr('string'),
  modified: DS.attr('string'),
  info: DS.attr('string'),
  pinned: DS.attr('boolean', {defaultValue: 0}),
  cleared: DS.attr('boolean', {defaultValue: 0}),
  active: DS.attr('boolean', {defaultValue: 1})
});
