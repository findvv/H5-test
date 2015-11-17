function resLoader({resources=[],onStart=null,onProgress=null,onComplete=null}) {
  this.status = 0;
  this.total = resources.length || 0;
  this.currentIndex = 0;
  this.resources = resources;
  this.onStart = onStart;
  this.onProgress = onProgress;
  this.onComplete = onComplete;
}
resLoader.prototype.start = function() {
  this.status = 1;
  var _this = this;
  for (var i = 0, l = this.resources.length; i < l; i++) {
    var url = this.resources[i];
    var image = new Image();
    image.onload = function() {
      _this.loaded();
    }
    image.onerror = function() {
      _this.loaded();
    }
    image.src = url;
  }
  this.onStart(this.total);
}
resLoader.prototype.loaded = function() {
  this.onProgress(++this.currentIndex, this.total);
  if (this.currentIndex === this.total) {
      this.onComplete(this.total);
  }
}
exports.resLoader = resLoader;
