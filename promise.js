let error = true;
function doAsyncTask() {
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Work Complete");
      if (error) {
        reject();
      } else {
        resolve();
      }
    }, 1000);
  });
  return promise;
}

doAsyncTask()
  .then(() => console.log("Task Complete!"))
  .catch(() => console.log("complete with errors"));
