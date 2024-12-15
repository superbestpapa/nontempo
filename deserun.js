return new Set([
  this.transform.regression, // Add the regression property from the transform object
  this.transform.on, // Add the on property from the transform object
  ...((_this$transform$group = this.transform.groupby) !== null && _this$transform$group !== void 0 ? _this$transform$group : []) // Add elements from the groupby property if it exists
]);
