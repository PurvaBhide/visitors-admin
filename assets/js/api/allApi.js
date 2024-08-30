const stringifyData = (data) => {
  return JSON.stringify(data);
};

const visitors = {
  // list all visotors
  listAll: function () {
    return new Promise(function (resolve, reject) {
      let data = FetchApi("", "/getallvisitors", "GET");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },



  // visitor show by id
  ShowByID: function (id) {
    return new Promise(function (resolve, reject) {
      let data = FetchApi("", `/getvisitorbyid/${id}`, "GET");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  // listAll pending request
  listAllPending: function () {
    return new Promise(function (resolve, reject) {
      let data = FetchApi("", "/pending", "GET");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },

  // listAll Approved request
  listAllApproved: function () {
    return new Promise(function (resolve, reject) {
      let data = FetchApi("", "/approved", "GET");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },

  // listAll Rejected request
  listAllRejected: function () {
    return new Promise(function (resolve, reject) {
      let data = FetchApi("", "/rejected", "GET");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },

  // listAll Previous request
  listAllprevious: function (fromDate, toDate, page = 0, size = 10) {
    return new Promise(function (resolve, reject) {
      FetchApi3(
        "",
        `/past?from=${fromDate}&to=${toDate}&page=${page}&size=${size}`,
        "GET"
      )
        .then((data) => {
          if (data) {
            resolve(data);
          } else {
            reject("No data found.");
          }
        })
        .catch((error) => {
          reject("Something went wrong. Please check the API.");
        });
    });
  },

  // update visitor info
  UpdateData: function (id, json) {
    json = stringifyData(json);
    let data = FetchApiUpdate( json, `/updatevisitor/${id}`,"POST");
    return new Promise(function (resolve, reject) {
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },


};
