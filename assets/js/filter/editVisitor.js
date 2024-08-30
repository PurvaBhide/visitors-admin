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

    // Get the current date in 'YYYY-MM-DD' format
    const currentDate = new Date().toISOString().split('T')[0];

    // Get the selected time and time period from the form
    let appointmentTime = document.getElementById('appointmentendDateTime').value;
    const timePeriod = document.getElementById('timePeriod').value;

    // Default time if not provided
    let timeToUse = '00:00';
    if (appointmentTime) {
        let [hours, minutes] = appointmentTime.split(':');
        hours = parseInt(hours);

        // Convert to 24-hour format if necessary
        if (timePeriod === 'PM' && hours < 12) {
            hours += 12;
        } else if (timePeriod === 'AM' && hours === 12) {
            hours = 0;
        }

        timeToUse = `${hours.toString().padStart(2, '0')}:${minutes}`;
    }

    // Combine current date and selected time into the desired format
    const appointmentendDateTime = `${currentDate}T${timeToUse}:00`;

    // Update the visitorData object
    visitorData.appointmentendDateTime = appointmentendDateTime;

    // If appointmentstartDateTime is provided, ensure it’s in the correct format
    const appointmentDate = document.getElementById('appointmentstartDateTime').value;
    let startTime = document.getElementById('appointmentendDateTime').value;
    const timePeriodStart = document.getElementById('timePeriod').value;
    
    const startDateToUse = appointmentDate || currentDate;
    let startTimeToUse = '00:00';

    if (startTime) {
        let [hours, minutes] = startTime.split(':');
        hours = parseInt(hours);

        if (timePeriodStart === 'PM' && hours < 12) {
            hours += 12;
        } else if (timePeriodStart === 'AM' && hours === 12) {
            hours = 0;
        }

        startTimeToUse = `${hours.toString().padStart(2, '0')}:${minutes}`;
    }

    const appointmentstartDateTime = `${startDateToUse}T${startTimeToUse}:00`;
    visitorData.appointmentstartDateTime = appointmentstartDateTime;

    const id = getQueryParamValue("id");
    try {
        const response = await visitors.UpdateData(id, visitorData);
            if (response) {
            showAlert("success", "white", "Record updated successfully");
            setTimeout(() => {
                // Redirect or perform any other actions after a successful update
                 window.location.href = "visitors.php"
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
       document.getElementById('remark').value = data.remark;

    // Handle appointment start date and time if they exist
    if (data.appointmentstartDateTime) {
        const appointmentStart = new Date(data.appointmentstartDateTime);
        document.getElementById('appointmentstartDateTime').value = appointmentStart.toISOString().split('T')[0];

        const startHours = appointmentStart.getHours();
        const startMinutes = appointmentStart.getMinutes().toString().padStart(2, '0');
        const startTimePeriod = startHours >= 12 ? 'PM' : 'AM';
        const startHours12 = startHours % 12 || 12;
        document.getElementById('appointmentendDateTime').value = `${startHours12.toString().padStart(2, '0')}:${startMinutes}`;
        document.getElementById('timePeriod').value = startTimePeriod;
    }

    // Handle appointment end date and time if they exist
    if (data.appointmentendDateTime) {
        const appointmentEnd = new Date(data.appointmentendDateTime);
        const endHours = appointmentEnd.getHours();
        const endMinutes = appointmentEnd.getMinutes().toString().padStart(2, '0');
        const endTimePeriod = endHours >= 12 ? 'PM' : 'AM';
        const endHours12 = endHours % 12 || 12;
        document.getElementById('appointmentendDateTime').value = `${endHours12.toString().padStart(2, '0')}:${endMinutes}`;
        document.getElementById('timePeriod').value = endTimePeriod;
    }

    // Handle status if it exists
    if (data.status) {
        document.getElementById('status').value = data.status;
    }

    // Handle remarks if they exist
    if (data.remark) {
        document.getElementById('remark').value = data.remark;
    }
};
