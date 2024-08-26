const stringifyData = (data) => {
    return JSON.stringify(data);
  };
  
  const visitors = {
        listAll: function () {
        return new Promise(function (resolve, reject) {
          let data = FetchApi("", "/getallvisitors", "GET");
          if (data) {
            resolve(data);
          } else {
            reject("Something went wrong. Please check api");
          }
        })
    },
  
}