// lazy map and lazy index
Array.prototype.lazyMap = function (cb) {
  let newArr = Array.from(this);
  newArr.cb = this.cb;
  if (newArr.cb) {
    let oldCb = newArr.cb;
    newArr.cb = (v) => cb(oldCb(v));
  }
  else {
    newArr.cb = cb;
  }
  return newArr;
};

Array.prototype.lazyIndexOf = function(val) {
  if(!this.cb) return this.indexOf(val);

  for (let i = 0; i < this.length; i++) {
    if (this.cb(this[i]) === val) return i;
  }

  return -1;
};



