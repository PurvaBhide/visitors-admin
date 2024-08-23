const InstitutesList = () => {
  institute.listAll().then(({ status, message, data }) => {
    if (status == 200) {
      let intstArr = [];
      intstArr.push("<option value='' >Select</option>");

      data.forEach(({ id, name }) => {
        if (loggedRole != "admin" && loginUserData.institute_id != id) return;
        intstArr.push(`<option value='${id}' >${name}</option>`);
      });
      $("#institute_id").html(intstArr.join(""));
    }
  });
};

const appendInstitutes = (instituteType) => {
  institute.listByType(instituteType).then(({ status, message, data }) => {
    if (status == 200) {
      let intstArr = [];
      intstArr.push("<option value='' >Select</option>");

      data.forEach(({ id, name }) => {
        if (loggedRole != "admin" && loginUserData.institute_id != id) return;
        intstArr.push(`<option value='${id}' >${name}</option>`);
      });

      $("#institute_id").html(intstArr.join(""));
    }
  });
};
