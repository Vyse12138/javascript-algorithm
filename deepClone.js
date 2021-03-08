function deepClone(target,set = new WeakSet()) {
  if (set.has(target)) { // maek sure there is no loop reference
    return target;
  }
  if (typeof target === 'function') {
    if (!target.prototype) { // no prototype means its a arrow function
      return target;
    }
    const funcString = target.toString();
    const param = /(?<=\().+(?=\)\s+{)/.exec(funcString);
    const body = /(?<={)(.|\n)+(?=})/m.exec(funcString);
    if(!body) return null;
    if (param) {
      const paramArr = param[0].split(',');
      return new Function(...paramArr, body[0]);
    } else {
      return new Function(body[0]);
    }
  }
  if (typeof target === "object" && typeof target !== "null") {
  set.add(target);

    const result = Array.isArray(target) ? [] : {};
    for (let prop in target) {
      result[prop] = deepClone(target[prop],set);
    }
    return result;
  } else {
    return target;
  }
}
