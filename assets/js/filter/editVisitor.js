// $(document).ready(async function () {
//     const id = getQueryParamValue("id"); 
//     if (id) {
//         try {
//             const data = await visitors.ShowByID(id);
//         console.log(data,"data")
//             if (data) {
//                 displayVisitors(data);
//             } else {
//                 showAlert("warning", "white", "No data found.");
//             }
//         } catch (error) {
//             console.error("Error fetching visitor data:", error);
//             showAlert("error", "white", "Failed to fetch data.");
//         }
//     }
// });

// const editVisitor = (() => {
//     const instituteForm = document.querySelector("#visitorForm");
//     const formData = new FormData(instituteForm);
//     console.log(formData,"formData");
//     const instObj = Object.fromEntries(formData);
//     const instData = {
//         ...instObj,
//     };
//     console.log(instData,"instData");
//     visitors.UpdateData(id,instData).then(({ status, message, data }) => {
//         $("#submit").removeAttr("disabled")
//         $("#submit").html("Update")
//         if (status == 200) {
//             showAlert("success", "white", "Record updated successfully");
            
//             setTimeout(() => {
//                 // window.location.href = "list-institute.php"

//             }, 700);
//         }
//         else {
//             showAlert("warning", "white", message);
//         }
//     }).catch(function (message) {
//         console.log(message);

//     })
// })

// const displayVisitors = (data) => {
//     document.getElementById('visitorName').value = data.fullName;
//     document.getElementById('contactNumber').value = data.contactNumber;
//     document.getElementById('emailAddress').value = data.emailAddress;
//     document.getElementById('age').value = data.age;
//     document.getElementById('gender').value = data.gender;
//     document.getElementById('organizationName').value = data.organizationName;
//     // document.getElementById('appointmentDate').value = data.appointmentendDateTime.split('T')[0];
//     // document.getElementById('appointmentTime').value=data.appointmentstartDateTime;
//     document.getElementById('designation').value = data.designation;
//     document.getElementById('departmentName').value = data.departmentName;
//     document.getElementById('purposeOfVisit').value = data.purposeOfVisit;
//     document.getElementById('officialAddress').value = data.officialAddress;
//     document.getElementById('grievanceDetails').value = data.grievanceDetails;
//     document.getElementById('status').value = data.status;

//     // Handle appointment date and time if they exist
//     if (data.appointmentstartDateTime) {
//         const appointmentDate = new Date(data.appointmentstartDateTime);
//         document.getElementById('appointmentDate').value = appointmentDate.toISOString().split('T')[0];
//         const hours = appointmentDate.getHours();
//         const minutes = appointmentDate.getMinutes().toString().padStart(2, '0');
//         const timePeriod = hours >= 12 ? 'PM' : 'AM';
//         document.getElementById('appointmentTime').value = `${hours % 12 || 12}:${minutes}`;
//         document.getElementById('timePeriod').value = timePeriod;
//     }
// };




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

    // Log each form field's name and value
    // for (const [key, value] of formData.entries()) {
    //     console.log(`${key}: ${value}`);
    // }

    const visitorData = Object.fromEntries(formData);
    const id = getQueryParamValue("id");
    try {
        console.log(visitorData,"visitorData");

        const response = await visitors.UpdateData(id, visitorData);
        console.log(response,"response");
        if (!response == 0) {
            showAlert("success", "white", "Record updated successfully");
            setTimeout(() => {
                // Redirect or perform any other actions after a successful update
            }, 700);
        } else {
            showAlert("warning", "white", response.message);
        }
        // if (response.status === 200) {
        //     showAlert("success", "white", "Record updated successfully");
        //     setTimeout(() => {
        //         // Redirect or perform any other actions after a successful update
        //     }, 700);
        // } else {
        //     showAlert("warning", "white", response.message);
        // }
    } catch (error) {
        console.error("Error updating visitor data:", error);
        showAlert("error", "white", "Failed to update data.");
    }
};

// Event listener for the submit button
document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    editVisitor();
});

// const editVisitor = async () => {
//     const visitorForm = document.querySelector("#visitorForm");
//     const formData = new FormData(visitorForm);
//     console.log(formData,"formData");
//     const visitorData = Object.fromEntries(formData);
//     const id = getQueryParamValue("id");

//     try {
//         const response = await visitors.UpdateData(id, visitorData);
//         if (response.status === 200) {
//             showAlert("success", "white", "Record updated successfully");
//             setTimeout(() => {
//                 // Redirect or perform any other actions after successful update
//             }, 700);
//         } else {
//             showAlert("warning", "white", response.message);
//         }
//         // if (!response == 0) {
//         //     showAlert("success", "white", "Record updated successfully");
//         //     setTimeout(() => {
//         //         // Redirect or perform any other actions after successful update
//         //     }, 700);
//         // } else {
//         //     showAlert("warning", "white", response.message);
//         // }
//     } catch (error) {
//         console.error("Error updating visitor data:", error);
//         showAlert("error", "white", "Failed to update data.");
//     }
// };

const displayVisitors = (data) => {
    document.getElementById('visitorName').value = data.fullName;
    document.getElementById('contactNumber').value = data.contactNumber;
    document.getElementById('emailAddress').value = data.emailAddress;
    document.getElementById('age').value = data.age;
    document.getElementById('gender').value = data.gender;
    document.getElementById('organizationName').value = data.organizationName;
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
