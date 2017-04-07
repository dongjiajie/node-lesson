const Elasticsearch = require('elasticsearch');
const dbClient = new Elasticsearch.Client({ host: 'registry:reguser123@lb-qa-elasticsearch-20170317-1743847226.us-east-1.elb.amazonaws.com:8080' });

const id = '945d448a-9920-4381-aa9d-212325e15952';

// sync
function getCoupleById(id) {
	dbClient.get({
	  index: 'couple',
	  type: 'couple',
	  id: id
	}, function (error, response) {
	  console.log(response);
	});
}

// async
async function asyncGetCoupleById(id) {
	const res = await dbClient.get({
	  index: 'couple',
	  type: 'couple',
	  id: id
	});
	console.log(res);
}

async function getCoupleByQuery(id) {
	const res = await dbClient.search({
		index: 'couple',
		type: 'couple',
		q: `coupleUUID:${id}`
	});
	console.log(res);
}

// asyncGetCoupleById(id);
// getCoupleById(id);
getCoupleByQuery(id);