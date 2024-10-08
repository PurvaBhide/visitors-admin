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
  deleteVisitor: function (id) {
    return new Promise(function (resolve, reject) {
      let data = FetchApi("", `/delete/visitor/${id}`, "DELETE");
      if (data) {
        resolve(data);
      } else {
        reject("Failed to delete the visitor. Please check the API.");
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
    return FetchApiUpdate(json, `/updatevisitor/${id}`, "POST")
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return Promise.reject("Something went wrong. Please check the API.");
      });
  },
  sendEmail: function (json) {
    return FetchApiUpdate(json, "/sendQueryEmail", "POST")
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return Promise.reject("Something went wrong. Please check the API.");
      });
  },

  // Function for login
  Login: function (contactNumber, password) {
    return new Promise(function (resolve, reject) {
      FetchApi3(
        "",
        `/auth/login?contactNumber=${contactNumber}&password=${password}`,
        "POST"
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

  // check time slot avialable or not
  checkTimeSlot: function (start, meetingDuration) {
    return new Promise(function (resolve, reject) {
      FetchApi3(
        "",
        `/check-availability?start=${start}&duration=${meetingDuration}`,
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

  // Departments
  listallDepartments: function () {
    return new Promise(function (resolve, reject) {
      let data = FetchApi("", "/listAll/departments", "GET");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },

  DepartmentShowByID: function (id) {
    return new Promise(function (resolve, reject) {
      let data = FetchApi("", `/department/${id}`, "GET");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },

  DeleteDepartment: function (id) {
    return new Promise(function (resolve, reject) {
      let data = FetchApi("", `/delete/department/${id}`, "DELETE");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },

  UpdateDepartmentData: function (id, json) {
    return FetchApiUpdate(json, `/update/department/${id}`, "PUT")
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return Promise.reject("Something went wrong. Please check the API.");
      });
  },

  CreateDEpartment: function (json) {
    return FetchApi(json, "/create/department", "POST")
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return Promise.reject("Something went wrong. Please check the API.");
      });
  },
};
