// debouncing inputs
function debounce(fn, interval) {
  let callback = null;
  return function (e) {
    clearTimeout(callback);
    callback = setTimeout(() => {
      fn(e);
    }, interval);
  };
}

// test case
window.onscroll = debounce(e => {
  console.log(e);
}, 1000);
