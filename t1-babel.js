function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Promise = require('bluebird');

class Model {

	timeout(ms) {
		return new Promise(resolve => {
			setTimeout(resolve, ms);
		});
	}

	asyncPrint() {
		var _this = this;

		return _asyncToGenerator(function* () {
			const now = Date.now();
			yield _this.timeout(3000);
			console.log(Date.now() - now);
		})();
	}
};

model = new Model();
model.asyncPrint();
