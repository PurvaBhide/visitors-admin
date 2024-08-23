const assignStudents=(()=>{
    let assignJson={
        batch_id:id,
        students:$("#students").val()
    };
    assignedStudentsApi.register(assignJson).then(({status,data,message})=>{
        $("#assignStudentBtn").removeAttr("disabled")
        $("#assignStudentBtn").html(`Assign Students`)
        if(status!=200)
        {
            showAlert("warning","white",message)
            return;
        }
        showAlert("success","white","Students assigned successfully");
        return;
        
    }).catch(function(message){
        console.error(message);
    })
})

$("#assignStudentForm").validate({
    submitHandler: function (e) {
        $("#assignStudentBtn").attr("disabled", true)
        $("#assignStudentBtn").html(`Please wait ...  <div class="spinner-border spinner-border-sm text-white mt-1" role="status">
        <span class="visually-hidden"></span>
        </div>`)
        e.preventDefault; 
        setTimeout(() => {
            assignStudents();
        }, 100);           
    },
    rules: {
        students:{
            required:true
        }
    }
})
