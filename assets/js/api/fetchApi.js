// const server="http://localhost:8080"
// const server="https://kitintellect.tech/api-exam-portal/public/"
// const server = "https://kitintellect.tech/api-exam-portal-master/public";
const server = "https://triuttarakhand.in/api-exam-portal/public/";

const FetchApi = (data, path, method) => {
  let res;
  var settings = {
    url: server + path,
    data: data,
    dataType: "json",
    method: method,
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    res = response;
  });
  return res;
};

const FetchApi2 = (data, path, method) => {
  let res;
  var settings = {
    url: `${"https://kitintellect.tech/demographic-info/public"}${path}`,
    data: data,
    dataType: "json",
    method: method,
    timeout: 0,
    async: false,
    headers: {
      "Content-Type": "application/json",
    },
  };

  $.ajax(settings).done(function (response) {
    res = response;
  });
  return res;
};
const FetchAuthApi = (data, path, method) => {
  let res;
  var settings = {
    url: server + path,
    data: data,
    dataType: "json",
    method: method,
    timeout: 0,
    async: false,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  $.ajax(settings).done(function (response) {
    res = response;
  });
  return res;
};

const uploadImageaApi = (file) => {
  let res;
  var form = new FormData();
  form.append("file", file);
  var settings = {
    url: "https://kitintellect.tech/storage/public/api/upload/asmita",
    method: "POST",
    timeout: 0,
    processData: false,
    mimeType: "multipart/form-data",
    contentType: false,
    data: form,
    async: false,
  };
  $.ajax(settings).done(function (response) {
    res = response;
  });
  return res;
};
