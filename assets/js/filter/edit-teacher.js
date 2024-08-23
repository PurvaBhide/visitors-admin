$(document).ready(function () {
  // Get the 'id' parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  console.log("Extracted id:", id);

  if (id !== null && id !== "") {
    // Fetch teacher details and display them
    teacherApi
      .get(id)
      .then(({ status, data, message }) => {
        console.log(id, status, "IDDDDDDDDDDDDDDDD");
        if (status == 200) {
          displayteacher(data);
        } else {
          showAlert("warning", "white", message);

          setTimeout(() => {
            // window.location.href = "list-teachers.php";
            console.log("NO id");
          }, 1000);
        }
      })
      .catch(function (error) {
        console.error(error);
        setTimeout(() => {
          // window.location.href = "list-teachers.php";
          console.log("NO id found");
        }, 700);
      });
  } else {
    showAlert("warning", "white", "Id not found");

    setTimeout(() => {
      // window.location.href = "list-teachers.php";
      console.log("NO id found");
    }, 700);
  }

  // Event listener for the update button
  $("#submit").on("click", function () {
    editTeacher(id);
  });
});

const editTeacher = (id) => {
  const teacherForm = document.querySelector("#teacherForm");
  const formData = new FormData(teacherForm);
  const teacherObj = Object.fromEntries(formData);
  const teacherData = {
    ...teacherObj,
  };

  // Update teacher details using the 'id'
  teacherApi
    .update(id, teacherData)
    .then(({ status, message, data }) => {
      $("#submit").removeAttr("disabled");
      $("#submit").html("Update");
      if (status == 200) {
        showAlert("success", "white", "Record updated successfully");

        setTimeout(() => {
          window.location.href = "list-teachers.php";
        }, 700);
      } else {
        showAlert("warning", "white", message);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

const displayteacher = (data) => {
  if (data.length > 0) {
    const { institute_id, institute } = data[0];
    console.log(institute_id, institute, "institute_id, institute");
    $("#institute_id").append(
      `<option value="${institute_id}" selected>${institute}</option>`
    );
    setElements(data[0]);
  } else {
    console.error("Teacher data is empty.");
  }
  //   const { state, district, block, village } = data;
  //   setFormDemographics(state, district, block, village);
};
