// throttling inputs
function throttle(fn, interval) {
  let flag = false; // flag to indicate whether the callback is running
  return function (e) {
    if (flag) {
      // if callback is running, return immediately
      return;
    }
    flag = true; // stack the callback
    setTimeout(() => {
      fn(e);
      flag = false; // when callback is finished, set the flag to false
    }, interval);
  };
}

// test case
window.onscroll = throttle(e => {
  console.log(e);
}, 1000);
