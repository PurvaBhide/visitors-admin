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
      let data = FetchApi("", "/getallvisitors", "GET");
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
      let data = FetchApi("", "/getallvisitors", "GET");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },

  // listAll Previous request
  listAllprevious: function () {
    return new Promise(function (resolve, reject) {
      let data = FetchApi("", "/getallvisitors", "GET");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
};
