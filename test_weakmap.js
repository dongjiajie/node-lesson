const _counter = new WeakMap();
const _action = new WeakMap();
class Countdown {
    constructor(counter, action) {
        _counter.set(this, counter);
        _action.set(this, action);
    }
    async dec() {
        let counter = _counter.get(this);
        if (counter < 1) return;
        await counter--;
        _counter.set(this, counter);
        if (counter === 0) {
            _action.get(this)();
        }
        console.log(counter);
    }
}

const cd = new Countdown(100);
cd.dec();