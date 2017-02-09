const Elasticsearch = require('elasticsearch');
const dbClient = new Elasticsearch.Client({ host: 'http://localhost:9200/' });

dbClient.get({
  index: 'couple_samson2',
  type: 'couple',
  id: '47ac0ea0-ed00-11e6-829b-7d658fe6d55c'
}, function (error, response) {
  console.log(response);
});