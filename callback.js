function doAsyncTask(cb) {
  setTimeout(() => {
    console.log("Async Task Calling Callback");
    cb();
  }, 1000);
}
function callbackCalled() {
  console.log("callback called");
}
doAsyncTask(callbackCalled);
