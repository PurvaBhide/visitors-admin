$(document).ready(function () {
    if (id != "") {
        subjectApi.get(id).then(({ status, data, message }) => {
            if (status == 200) {
                displaySubject(data);
            }
            else {
                showAlert("warning", "white", message);
            
                setTimeout(() => {
                    window.location.href = "list-subjects.php"
    
                }, 700);
            }
        }).catch(function(message){
            console.error(message);
            setTimeout(() => {
                window.location.href = "list-subjects.php"
    
            }, 700);
        })
    }else{
        showAlert("warning", "white", "Id not found");
    
        setTimeout(() => {
            window.location.href = "list-subjects.php"

        }, 700);

    }
})
const editSubject = (() => {
    const subjectForm = document.querySelector("#subjectForm");
    const formData = new FormData(subjectForm);
    const subjectObj = Object.fromEntries(formData);
    const subjectData = {
        ...subjectObj,
    };
    subjectApi.update(id,subjectData).then(({ status, message, data }) => {
        $("#submit").removeAttr("disabled")
        $("#submit").html("Update")
        if (status == 200) {
            showAlert("success", "white", "Record updated successfully");
            
            setTimeout(() => {
                window.location.href = "list-subjects.php"

            }, 700);
        }
        else {
            showAlert("warning", "white", message);
        }
    }).catch(function (message) {
        console.log(message);

    })
})
const displaySubject = ((data) => {

    setElements(data);
});