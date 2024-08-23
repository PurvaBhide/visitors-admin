let i = 1;

const assignTeacher = (() => {
  let assignJson = [];
  assignJson={
    batch_id:id,
    teachers:[]
  }
  $(".rowElement").each(function (i, obj) {

    let arr = {
      teacher_id: $(obj).find(".teacher-id").val(),
      subject_id: $(obj).find(".subject-id").val(),
      batch_id: id
    }
    assignJson.teachers.push(arr)
  });
  
  assignBatchesApi.register(assignJson).then(({ status, data, message }) => {
    if (status == 200) {
      showAlert("success", "white", "Teachers assigned to subject successfully");
      setTimeout(() => {
        $("#assignBtn").removeAttr("disabled")
        $("#assignBtn").html("Update")
      }, 100);
      return;
    }
    showAlert("danger", "white", message);
  });

})
const deleteRow = ((element) => {
  $(element).parent().parent().parent().remove();
  if ($(".rowElement").length == 0) {
    $("#addRowBtn").removeClass("d-none");
  };

})
const addRow = (() => {
  $("#teacherRow").append(`
    <div class="row rowElement">
    <div class="col-md-4 mb-3">
    <label for="subject_id-${i}" class="form-label ">Select Subject<sup class="text-danger">*</sup></label>
    <select name="subject_id-${i}" class="form-control subject-id" id="subject_id-${i}"   required>
    ${subjectHtml}
    </select>
  </div>
  <div class="col-md-4 mb-3">
  <label for="teacher_id${i}" class="form-label ">Select Teacher<sup class="text-danger">*</sup></label>
    <select name="teacher_id-${i}" class="form-control teacher-id" id="teacher_id-${i}" required >
    ${teacherHtml}
      </select>
      
    </div>
    <div class="col-md-4 mb-3  d-flex align-items-center flex-column">
    <label for="teacher_id" class="form-label ">&nbsp;</label>
    <div class="">
    
    <a href="javascript:void(0)" onclick="addRow()" class="btn btn-warning mx-2">Add  <i class="fas fa-plus"></i> </a>
    <a href="javascript:void(0)" onclick="deleteRow(this)" class="btn btn-danger mx-2">Delete  <i class="fas fa-plus"></i> </a>
    </div>
    </div>
    </div>`);
  i++;
  $("#addRowBtn").addClass("d-none");
  $("#assignBtn").removeClass("d-none");
})


const addInitRow = ((subjectId, teacherId) => {
  let teacherArr = [];
  let teacherHtml;
  let subjectHtml;
  let subjectArr = [];

  teacherArr.push("<option value=''>Select</option>")
  subjectArr.push("<option value=''>Select</option>")
  teacherData.forEach(element => {
    teacherArr.push(`<option value="${element?.id}" ${element?.id == teacherId ? "selected" : ""} >${element?.f_name + " " + element?.f_name + " " + element?.l_name}</option>`)
  });
  subjectData.forEach(element => {
    subjectArr.push(`<option value="${element?.id}" ${element?.id == subjectId ? "selected" : ""}  >${element?.title}</option>`)

  });
  teacherHtml = teacherArr.join("");
  subjectHtml = subjectArr.join("");

  $("#teacherRow").append(`
  <div class="row rowElement">
  <div class="col-md-4 mb-3">
  <label for="subject_id-${i}" class="form-label ">Select Subject<sup class="text-danger">*</sup></label>
  <select name="subject_id-${i}" class="form-control subject-id" id="subject_id-${i}"   required>
  ${subjectHtml}
  </select>
</div>
<div class="col-md-4 mb-3">
<label for="teacher_id${i}" class="form-label ">Select Teacher<sup class="text-danger">*</sup></label>
  <select name="teacher_id-${i}" class="form-control teacher-id" id="teacher_id-${i}" required >
  ${teacherHtml}
    </select>
    
  </div>
  <div class="col-md-4 mb-3  d-flex align-items-center flex-column">
  <label for="teacher_id" class="form-label ">&nbsp;</label>
  <div class="">
  
  <a href="javascript:void(0)" onclick="addRow()" class="btn btn-warning mx-2">Add  <i class="fas fa-plus"></i> </a>
  <a href="javascript:void(0)" onclick="deleteRow(this)" class="btn btn-danger mx-2">Delete  <i class="fas fa-plus"></i> </a>
  </div>
  </div>
  </div>`);
  i++;
  $("#addRowBtn").addClass("d-none");
  $("#assignBtn").removeClass("d-none");


})
$("#addRowBtn").click(addRow);

$("#assignForm").validate({
  submitHandler: function (e) {
    $("#assignBtn").attr("disabled", true)
    $("#assignBtn").html(`Please wait ...  <div class="spinner-border spinner-border-sm text-white mt-1" role="status">
        <span class="visually-hidden"></span>
      </div>`)
    e.preventDefault;
    setTimeout(() => {
      assignTeacher();

    }, 100);

  },
});


