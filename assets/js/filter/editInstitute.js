$(document).ready(function () {
    if (id != "") {
        institute.get(id).then(({ status, data, message }) => {
            if (status == 200) {
                displayInstitute(data);
            }
            else {
                showAlert("warning", "white", message);
            }
        })
    }
})
const editInstitute = (() => {
    const instituteForm = document.querySelector("#instituteForm");
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
                window.location.href = "list-institute.php"

            }, 700);
        }
        else {
            showAlert("warning", "white", message);
        }
    }).catch(function (message) {
        console.log(message);

    })
})
const displayInstitute = ((data) => {

    setElements(data);
    const { state, district, block, village } = data;
    setFormDemographics(state, district, block, village)
});