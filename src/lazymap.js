// lazy map and lazy index
Array.prototype.lazyMap = function (cb) {
  if (this.cb) {
    let oldCb = this.cb;
    this.cb = (v) => cb(oldCb(v));
  }
  else {
    this.cb = cb;
  }
  return this;
};

Array.prototype.lazyIndexOf = function(val) {
  if(!this.cb) return this.indexOf(val);

  for (let i = 0; i < this.length; i++) {
    if (this.cb(this[i]) === val) return i;
  }

  return -1;
};



