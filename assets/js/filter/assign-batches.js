let tachersArr;
let subjectsArr ;
const assignBatch = ((id, instituteId) => {
    $("#batch_id").val(id)
    teacherApi.listAll(instituteId).then(({ status, data }) => {
        let subjectArr = [];
        if (status != 200) return;
        subjectArr.push("<option value=''>Select</option>")
        data.forEach(element => {
            subjectArr.push(`<option value="${element?.id}" >${element?.f_name + " " + element?.f_name + " " + element?.l_name}</option>`)
        });
        $("#teacher_id").html(subjectArr.join(""))
    })
    // $('#assignBatchModal').modal('show');

})

    subjectApi.listAll().then(({ status, data, message }) => {
        let subjectArr = [];
        if (status != 200) return;
        subjectArr.push("<option value=''>Select</option>")
        data.forEach(element => {
            subjectArr.push(`<option value="${element?.id}" >${element?.title}</option>`)
        });
        $("#subject_id").html(subjectArr.join(""))
    })

const registerAssignBatch = (() => {
    const batchForm = document.querySelector("#assignBatchForm");

    const formData = new FormData(batchForm);
    const batchObj = Object.fromEntries(formData);
    const batchData = {
        ...batchObj,
    };
    assignBatchesApi.register(batchData).then(({ status, data, message }) => {
        
        $("#submit").html(`Assign`)
        $("#submit").removeAttr(`Disabled`)
        if (status == 200) {
            showBatchAlert("success","Batch assigned succesfully")

            setTimeout(() => {
                $('#assignBatchModal').modal('hide');
                
            }, 2000);
            return;
        }
        showBatchAlert("danger",message)
        return;
    }).catch((message)=>{
        console.error(message);
    })
})

// $("#assignBatchForm").validate({
//     submitHandler: function (e) {
//         $("#submit").attr("disabled", true)
//         $("#submit").html(`Please wait ...  <div class="spinner-border spinner-border-sm text-white mt-1" role="status">
//       <span class="visually-hidden"></span>
//     </div>`)
//         e.preventDefault;
//         setTimeout(() => {
//             registerAssignBatch();
//         }, 70);

//     },
//     rules: {
//         // simple rule, converted to {required:true}

//         subject_id: {
//             required: true,
//             minlength: 1,
//         },
//         teacher_id: {
//             required: true,
//             minlength: 1,
//         },
//         batch_id: {
//             required: true,
//             minlength: 1,
//         },
//     },
// });