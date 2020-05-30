let error = false;
function doAsyncTask() {
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Work Complete");
      if (error) {
        reject("complete with errors");
      } else {
        resolve("complete without errors");
      }
    }, 1000);
  });
  return promise;
}

const response = async () => {
  try {
    const data = await doAsyncTask();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
response();
