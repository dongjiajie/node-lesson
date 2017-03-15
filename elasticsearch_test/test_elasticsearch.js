const Elasticsearch = require('elasticsearch');
const dbClient = new Elasticsearch.Client({ host: 'http://localhost:9200/' });

const id = '47ac0ea0-ed00-11e6-829b-7d658fe6d55c';

// sync（同步）
function getCoupleById(id) {
	dbClient.get({
	  index: 'couple_samson',
	  type: 'couple',
	  id: id
	}, function (error, response) {
	  console.log(response);
	});
}

// async(异步)
async function asyncGetCoupleById(id) {
	const res = await dbClient.get({
	  index: 'couple_samson',
	  type: 'couple',
	  id: id
	});
	console.log(res);
}

asyncGetCoupleById(id);
getCoupleById(id);