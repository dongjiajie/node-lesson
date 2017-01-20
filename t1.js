const Promise = require('bluebird');

class Model{

	timeout(ms) {
	  return new Promise((resolve) => {
	    setTimeout(resolve, ms);
	  });
	}

	async asyncPrint() {
			const now = Date.now();
		  await this.timeout(3000);
		  console.log(Date.now() - now);
		}
};

model = new Model();
model.asyncPrint();