const stringifyData = (data) => {
  return JSON.stringify(data);
};

const institute = {
  register: function (json) {
    const stringifyObj = JSON.stringify(json);
    return new Promise(function (resolve, reject) {
      resolve(FetchAuthApi(stringifyObj, "/institute/create", "POST"));
    });
  },
  listAll: function () {
    return new Promise(function (resolve, reject) {
      let data = FetchApi("", "/institute/listAll", "GET");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  listByType: function (instituteType) {
    return new Promise(function (resolve, reject) {
      let data = FetchApi(
        "",
        `institute/typewiselisting/${instituteType}`,
        "GET"
      );
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check the API");
      }
    });
  },

  get: function (id) {
    return new Promise(function (resolve, reject) {
      let data = FetchApi("", `/institute/get/${id}`, "GET");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  update: function (id, json) {
    json = stringifyData(json);
    let data = FetchAuthApi(json, "/institute/update/" + id, "PATCH");
    return new Promise(function (resolve, reject) {
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  delete: function (id) {
    return new Promise(function (resolve, reject) {
      let data = FetchAuthApi(null, `/institute/delete/${id}`, "DELETE");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
};
const teacherApi = {
  register: function (json) {
    const stringifyObj = JSON.stringify(json);
    return new Promise(function (resolve, reject) {
      resolve(FetchAuthApi(stringifyObj, "/teacher/create", "POST"));
    });
  },
  listAll: function (instituteId) {
    return new Promise(function (resolve, reject) {
      let data = FetchApi("", "/teacher/listAll/" + instituteId, "GET");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  get: function (id) {
    return new Promise(function (resolve, reject) {
      let data = FetchApi("", `/teacher/get/${id}`, "GET");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  update: function (id, json) {
    json = stringifyData(json);
    let data = FetchAuthApi(json, "/teacher/update/" + id, "PATCH");
    return new Promise(function (resolve, reject) {
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  delete: function (id) {
    return new Promise(function (resolve, reject) {
      let data = FetchAuthApi(null, `/teacher/delete/${id}`, "DELETE");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
};
const subjectApi = {
  register: function (json) {
    const stringifyObj = JSON.stringify(json);
    return new Promise(function (resolve, reject) {
      resolve(FetchAuthApi(stringifyObj, "/subject/create", "POST"));
    });
  },
  listAll: function () {
    return new Promise(function (resolve, reject) {
      let data = FetchApi("", "/subject/listAll", "GET");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  get: function (id) {
    return new Promise(function (resolve, reject) {
      let data = FetchApi("", `/subject/get/${id}`, "GET");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  update: function (id, json) {
    json = stringifyData(json);
    let data = FetchAuthApi(json, "/subject/update/" + id, "PATCH");
    return new Promise(function (resolve, reject) {
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  delete: function (id) {
    return new Promise(function (resolve, reject) {
      let data = FetchAuthApi(null, `/subject/delete/${id}`, "DELETE");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
};
const batchesApi = {
  register: function (json) {
    const stringifyObj = JSON.stringify(json);
    return new Promise(function (resolve, reject) {
      resolve(FetchAuthApi(stringifyObj, "/batches/create", "POST"));
    });
  },
  listAll: function (instituteId) {
    return new Promise(function (resolve, reject) {
      let data = FetchApi("", "/batches/listAll/" + instituteId, "GET");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  get: function (id) {
    return new Promise(function (resolve, reject) {
      let data = FetchApi("", `/batches/get/${id}`, "GET");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  update: function (id, json) {
    json = stringifyData(json);
    let data = FetchAuthApi(json, "/batches/update/" + id, "PATCH");
    return new Promise(function (resolve, reject) {
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  delete: function (id) {
    return new Promise(function (resolve, reject) {
      let data = FetchAuthApi(null, `/batches/delete/${id}`, "DELETE");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
};
const assignBatchesApi = {
  register: function (json) {
    const stringifyObj = JSON.stringify(json);
    return new Promise(function (resolve, reject) {
      resolve(FetchAuthApi(stringifyObj, "/assigned-batches/create", "POST"));
    });
  },
  listAll: function (instituteId) {
    return new Promise(function (resolve, reject) {
      let data = FetchApi(
        "",
        "/assigned-batches/listAll/" + instituteId,
        "GET"
      );
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  get: function (id) {
    return new Promise(function (resolve, reject) {
      let data = FetchApi("", `/assigned-batches/get/${id}`, "GET");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  getAssignedteachers: function (id) {
    return new Promise(function (resolve, reject) {
      let data = FetchApi(
        "",
        `/assigned-batches/getAssignedTeachers/${id}`,
        "GET"
      );
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  update: function (id, json) {
    json = stringifyData(json);
    let data = FetchAuthApi(json, "/assigned-batches/update/" + id, "PATCH");
    return new Promise(function (resolve, reject) {
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  delete: function (id) {
    return new Promise(function (resolve, reject) {
      let data = FetchAuthApi(null, `/assigned-batches/delete/${id}`, "DELETE");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
};
const studentsApi = {
  register: function (json) {
    const stringifyObj = JSON.stringify(json);
    return new Promise(function (resolve, reject) {
      resolve(FetchAuthApi(stringifyObj, "/students/create", "POST"));
    });
  },
  listAll: function (instituteId) {
    return new Promise(function (resolve, reject) {
      let data = FetchApi("", "/students/listAll/" + instituteId, "GET");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  get: function (id) {
    return new Promise(function (resolve, reject) {
      let data = FetchApi("", `/students/get/${id}`, "GET");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  update: function (id, json) {
    json = stringifyData(json);
    let data = FetchAuthApi(json, "/students/update/" + id, "PATCH");
    return new Promise(function (resolve, reject) {
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  delete: function (id) {
    return new Promise(function (resolve, reject) {
      let data = FetchAuthApi(null, `/students/delete/${id}`, "DELETE");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
};
const assignedStudentsApi = {
  register: function (json) {
    const stringifyObj = JSON.stringify(json);
    return new Promise(function (resolve, reject) {
      resolve(FetchAuthApi(stringifyObj, "/assigned-students/create", "POST"));
    });
  },
  listAll: function (instituteId) {
    return new Promise(function (resolve, reject) {
      let data = FetchApi(
        "",
        "/assigned-students/listAll/" + instituteId,
        "GET"
      );
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  get: function (id) {
    return new Promise(function (resolve, reject) {
      let data = FetchApi("", `/assigned-students/get/${id}`, "GET");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  update: function (id, json) {
    json = stringifyData(json);
    let data = FetchAuthApi(json, "/assigned-students/update/" + id, "PATCH");
    return new Promise(function (resolve, reject) {
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  delete: function (id) {
    return new Promise(function (resolve, reject) {
      let data = FetchAuthApi(
        null,
        `/assigned-students/delete/${id}`,
        "DELETE"
      );
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
};

const createQuestionBankApi = {
  register: function (json) {
    const stringifyObj = JSON.stringify(json);
    return new Promise(function (resolve, reject) {
      resolve(FetchAuthApi(stringifyObj, "teacher/createmcq", "POST"));
    });
  },

  get: function (teacher_id, exam_title) {
    return new Promise(function (resolve, reject) {
      let data = FetchApi(
        "",
        `/teacher/questions/showById/${teacher_id}/${exam_title}`,
        "GET"
      );
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
};
const QuestionBankApi = {
  apply: function (json) {
    const stringifyObj = JSON.stringify(json);
    return new Promise(function (resolve, reject) {
      resolve(
        FetchAuthApi(stringifyObj, "participants/createParticipant", "POST")
      );
    });
  },
};

const demographic = {
  getAllStates: function () {
    return FetchApi2("", "/states/all", "GET");
  },
  getDistricts: function (stateCode) {
    return FetchApi2("", "/districts/" + stateCode, "GET");
  },
  getBlocks: function (districtCode) {
    return FetchApi2("", "/blocks/" + districtCode, "GET");
  },
  getVillages: function (blockCode) {
    return FetchApi2("", "/block/get/villages/" + blockCode, "GET");
  },
};

const user = {
  login: function (userData) {
    userData = stringifyData(userData);
    return new Promise(function (resolve, reject) {
      let data = FetchApi(userData, "user/login", "POST");
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong. Please check api");
      }
    });
  },
  // generateToken: function (userData) {
  //   userData = stringifyData(userData);
  //   return new Promise(function (resolve, reject) {
  //     let data = FetchApi(userData, "/user/generateToken", "POST");
  //     if (data) {
  //       resolve(data);
  //     } else {
  //       reject("Something went wrong. Please check api");
  //     }
  //   });
  // },
  // checkToken: function () {
  //   return new Promise(function (resolve, reject) {
  //     let data = FetchAuthApi("", "/user/checkToken", "GET");
  //     if (data) {
  //       resolve(data);
  //     } else {
  //       reject("Something went wrong. Please check api");
  //     }
  //   });
  // },
};
const questionBankListApi = () => {
  return FetchApi("", `teacher/listAllExam`, "GET");
};
const participantsListApi = () => {
  return FetchApi("", `participants/listAllData`, "GET");
};
