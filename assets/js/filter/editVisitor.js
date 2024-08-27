$(document).ready(async function () {
    const id = getQueryParamValue("id"); 
    if (id) {
        try {
            const data = await visitors.ShowByID(id);
        console.log(data,"data")
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

const editInstitute = (() => {
    const instituteForm = document.querySelector("#visitorForm");
    const formData = new FormData(instituteForm);
    const instObj = Object.fromEntries(formData);
    const instData = {
        ...instObj,
    };
    institute.update(id,instData).then(({ status, message, data }) => {
        $("#submit").removeAttr("disabled")
        $("#submit").html("Update")
        if (status == 200) {
            showAlert("success", "white", "Record updated successfully");
            
            setTimeout(() => {
                // window.location.href = "list-institute.php"

            }, 700);
        }
        else {
            showAlert("warning", "white", message);
        }
    }).catch(function (message) {
        console.log(message);

    })
})

const displayVisitors = (data) => {
    document.getElementById('visitorName').value = data.fullName;
    document.getElementById('contactNumber').value = data.contactNumber;
    document.getElementById('emailAddress').value = data.emailAddress;
    document.getElementById('age').value = data.age;
    document.getElementById('gender').value = data.gender;
    document.getElementById('organizationName').value = data.organizationName;
    // document.getElementById('appointmentDate').value = data.appointmentendDateTime.split('T')[0];
    // document.getElementById('appointmentTime').value=data.appointmentstartDateTime;
    document.getElementById('designation').value = data.designation;
    document.getElementById('departmentName').value = data.departmentName;
    document.getElementById('purposeOfVisit').value = data.purposeOfVisit;
    document.getElementById('officialAddress').value = data.officialAddress;
    document.getElementById('grievanceDetails').value = data.grievanceDetails;
    document.getElementById('status').value = data.status;

    // Handle appointment date and time if they exist
    if (data.appointmentstartDateTime) {
        const appointmentDate = new Date(data.appointmentstartDateTime);
        document.getElementById('appointmentDate').value = appointmentDate.toISOString().split('T')[0];
        const hours = appointmentDate.getHours();
        const minutes = appointmentDate.getMinutes().toString().padStart(2, '0');
        const timePeriod = hours >= 12 ? 'PM' : 'AM';
        document.getElementById('appointmentTime').value = `${hours % 12 || 12}:${minutes}`;
        document.getElementById('timePeriod').value = timePeriod;
    }
};
