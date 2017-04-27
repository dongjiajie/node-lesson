const Elasticsearch = require('elasticsearch');
const dbClient = new Elasticsearch.Client({ host: 'http://registry:reguser123@qa-es.regsvcs.theknot.com' });

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

async function getCoupleBySearch() {
	const res = await dbClient.search({
		index: 'couple',
		type: 'couple',
		body: {
			query: {
				bool: {
					must: [
						{
							term: {
								coupleId: 196507
							}
						},
						{
							term: {
								eventTypeId: 1
							}
						}
					]
				}
			}
		}
	});
	console.log(res);
	console.log('----');
	console.log(res.hits.hits[0]);
}

// asyncGetCoupleById(id);
// getCoupleById(id);
// getCoupleByQuery(id);
getCoupleBySearch();