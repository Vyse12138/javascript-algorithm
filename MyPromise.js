const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  value = null;
  reason = null;
  state = null;
  onFulfilledList = []; // callback when promise is fulfilled
  onRejectedList = []; // callback when promise is rejected

  constructor(executor) {
    try {
      executor(this.resolve, this.reject);
      this.state = PENDING;
    } catch (error) {
      this.reject(error);
    }


  }
  resolve(value) {
    if (this.state !== PENDING) return;
      this.state = FULFILLED;
      this.value = value;
      while (this.onFulfilledList.length) {
        this.onFulfilledList.shift()(); // trigger onFulfilled callback
      }
  }
  reject(reason) {
    if (this.state !== PENDING) return;
      this.state = REJECTED;
      this.reason = reason;
      while (this.onRejectedList.length) {
        this.onRejectedList.shift()(); // trigger onFulfilled callback
      }
  }
  
  then(onFulfilled, onRejected) {

  }
}
