$(document).ready(async function () {
  const id = getQueryParamValue("id");
  if (id) {
    try {
      const data = await visitors.ShowByID(id);
      if (data) {
        displayVisitors(data);
      } else {
        showAlert("warning", "white", "No data found.");
      }
    } catch (error) {
      console.error("Error fetching visitor data:", error);
      showAlert("error", "white", "Failed to fetch data.");
    }
  }
});

const editVisitor = async () => {
  const visitorForm = document.querySelector("#visitorForm");
  const formData = new FormData(visitorForm);
  const visitorData = Object.fromEntries(formData.entries());

  const currentDate = new Date().toISOString().split("T")[0];

  let appointmentTime = document.getElementById("appointmentendDateTime").value;
  const timePeriod = document.getElementById("timePeriod").value;

  let timeToUse = "00:00";
  if (appointmentTime) {
    let [hours, minutes] = appointmentTime.split(":");
    hours = parseInt(hours);

    if (timePeriod === "PM" && hours < 12) {
      hours += 12;
    } else if (timePeriod === "AM" && hours === 12) {
      hours = 0;
    }

    timeToUse = `${hours.toString().padStart(2, "0")}:${minutes}`;
  }

  const appointmentendDateTime = `${currentDate}T${timeToUse}:00`;

  visitorData.appointmentendDateTime = appointmentendDateTime;

  const appointmentDate = document.getElementById(
    "appointmentstartDateTime"
  ).value;
  let startTime = document.getElementById("appointmentendDateTime").value;
  const timePeriodStart = document.getElementById("timePeriod").value;

  const startDateToUse = appointmentDate || currentDate;
  let startTimeToUse = "00:00";

  if (startTime) {
    let [hours, minutes] = startTime.split(":");
    hours = parseInt(hours);

    if (timePeriodStart === "PM" && hours < 12) {
      hours += 12;
    } else if (timePeriodStart === "AM" && hours === 12) {
      hours = 0;
    }

    startTimeToUse = `${hours.toString().padStart(2, "0")}:${minutes}`;
  }

  const appointmentstartDateTime = `${startDateToUse}T${startTimeToUse}:00`;
  visitorData.appointmentstartDateTime = appointmentstartDateTime;
  //    console.log("visitorData",visitorData);
  const id = getQueryParamValue("id");
  try {
    const response = await visitors.UpdateData(id, visitorData);
    if (response) {
      showAlert("success", "white", "Record updated successfully");
      setTimeout(() => {
        window.location.href = "visitors.php";
      }, 700);
    } else {
      showAlert("warning", "white", response.message);
    }
  } catch (error) {
    console.error("Error updating visitor data:", error);
    showAlert("error", "white", "Failed to update data.");
  }
};

const displayVisitors = (data) => {
  document.getElementById("visitorName").value = data.fullName;
  document.getElementById("contactNumber").value = data.contactNumber;
  document.getElementById("emailAddress").value = data.emailAddress;
  document.getElementById("age").value = data.age;
  document.getElementById("gender").value = data.gender;
  document.getElementById("organizationName").value = data.organizationName;
  document.getElementById("designation").value = data.designation;
  document.getElementById("departmentName").value = data.departmentName;
  document.getElementById("purposeOfVisit").value = data.purposeOfVisit;
  document.getElementById("officialAddress").value = data.officialAddress;
  document.getElementById("grievanceDetails").value = data.grievanceDetails;
  document.getElementById("remark").value = data.remark;
  document.getElementById("adminRemark").value = data.adminRemark;
  document.getElementById("meetingDuration").value = data.meetingDuration;
  document.getElementById("querySolvingDepartment").value =
    data.querySolvingDepartment;
  document.getElementById("querysolvingdepartmentName").value =
    data.querysolvingdepartmentName;

  if (data.appointmentstartDateTime) {
    const appointmentStart = new Date(data.appointmentstartDateTime);
    document.getElementById("appointmentstartDateTime").value = appointmentStart
      .toISOString()
      .split("T")[0];

    const startHours = appointmentStart.getHours();
    const startMinutes = appointmentStart
      .getMinutes()
      .toString()
      .padStart(2, "0");
    const startTimePeriod = startHours >= 12 ? "PM" : "AM";
    const startHours12 = startHours % 12 || 12;
    document.getElementById("appointmentendDateTime").value = `${startHours12
      .toString()
      .padStart(2, "0")}:${startMinutes}`;
    document.getElementById("timePeriod").value = startTimePeriod;
  }

  if (data.appointmentendDateTime) {
    const appointmentEnd = new Date(data.appointmentendDateTime);
    const endHours = appointmentEnd.getHours();
    const endMinutes = appointmentEnd.getMinutes().toString().padStart(2, "0");
    const endTimePeriod = endHours >= 12 ? "PM" : "AM";
    const endHours12 = endHours % 12 || 12;
    document.getElementById("appointmentendDateTime").value = `${endHours12
      .toString()
      .padStart(2, "0")}:${endMinutes}`;
    document.getElementById("timePeriod").value = endTimePeriod;
  }

  // Handle status if it exists
  if (data.status) {
    document.getElementById("status").value = data.status;
  }

  // Handle remarks if they exist
  if (data.remark) {
    document.getElementById("remark").value = data.remark;
  }
  if (data.adminRemark) {
    document.getElementById("adminRemark").value = data.adminRemark;
  }
  if (data.querySolvingDepartment) {
    document.getElementById("querySolvingDepartment").value =
      data.querySolvingDepartment;
  }
  if (data.querysolvingdepartmentName) {
    document.getElementById("querysolvingdepartmentName").value =
      data.querysolvingdepartmentName;
  }
};

document.getElementById("sendemail").addEventListener("click", function () {
  var departmentEmail = document.getElementById("querySolvingDepartment").value;
  var querysolvingdepartmentName = document.getElementById(
    "querysolvingdepartmentName"
  ).value;

  var purposeOfVisit = document.getElementById("purposeOfVisit").value;

  var fullName = document.getElementById("visitorName").value;
  var emailAddress = document.getElementById("emailAddress").value;

  const data = {
    fullName: fullName,
    emailAddress: emailAddress,
    querySolvingDepartment: departmentEmail,
    querysolvingdepartmentName: querysolvingdepartmentName,
    purposeOfVisit: purposeOfVisit,
    organizationName: "Tribal Department",
  };

  visitors
    .sendEmail(data)
    .then((emailData) => {
      if (emailData.data.status) {
        alert("Email sent successfully");
        showAlert("success", "white", emailData?.data?.message);
      } else {
        showAlert("warning", "white", "Error sending email");
      }
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
});



function populateDepartmentDropdowns() {
  listallDepartments()
  
  .then(function (data) {
    const departmentNameDropdown = document.getElementById('querysolvingdepartmentName');
  const departmentEmailDropdown = document.getElementById('querySolvingDepartment');

  departmentNameDropdown.innerHTML = '<option value="" selected>Select</option>';
  departmentEmailDropdown.innerHTML = '<option value="" selected>Select</option>';

  data?.data.forEach(department => {
    //  Create options for department names
    const nameOption = document.createElement('option');
    nameOption.value = department.departmentName; 
    nameOption.textContent = department.departmentName;
    departmentNameDropdown.appendChild(nameOption);

  
    const emailOption = document.createElement('option');
    emailOption.value = department.departmentemail; 
    emailOption.textContent = department.departmentemail; 
    departmentEmailDropdown.appendChild(emailOption);
  });
})
.catch(function (error) {
  console.error("Error fetching department data:", error);
});

}

// Function to fetch data from the API
function listallDepartments() {
  return new Promise(function (resolve, reject) {
    let data = FetchApi("", "/listAll/departments", "GET");
   
    if (data) {
      resolve(data);
    } else {
      reject("Something went wrong. Please check API.");
    }
  });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', populateDepartmentDropdowns);
