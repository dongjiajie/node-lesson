const Elasticsearch = require('elasticsearch');
const dbClient = new Elasticsearch.Client({ host: 'http://localhost:9200/' });

dbClient.get({
  index: 'couple_samson',
  type: 'couple',
  id: '7f0437b0-ec15-11e6-adf8-759c2d526a84'
}, function (error, response) {
  console.log(response);
});

async function getCouple() {
	// dbClient.get({
	//   index: 'couple_samson',
	//   type: 'couple',
	//   id: '7f0437b0-ec15-11e6-adf8-759c2d526a84'
	// }, function (error, response) {
	//   console.log(response);
	// });

	return dbClient.get({
	  index: 'couple_samson',
		type: 'couple',
		id: '7f0437b0-ec15-11e6-adf8-759c2d526a84'
	})
}

const res = getCouple();
console.log(res);
