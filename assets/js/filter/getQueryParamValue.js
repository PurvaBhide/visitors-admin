

const getQueryParamValue = (value) => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  return params[value]; // "some_value"
};

const showAlert = ((type, textColor, message) => {
  $("#alert-div").html(` <div class="alert alert-${type} alert-dismissible" role="alert">
${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`)
  $("#alert-div").removeClass("d-none")
  $("#alert-div").attr("tabindex", -1).focus();
  setTimeout(() => {

    $("#alert-div").addClass("d-none")
  }, 3000);
})

const showBatchAlert = ((type, message) => {
  $("#batch-alert-div").html(` <div class="alert alert-${type} alert-dismissible" role="alert">
${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`)
  $("#batch-alert-div").removeClass("d-none")
  $("#batch-alert-div").attr("tabindex", -1).focus();
  setTimeout(() => {

    $("#batch-alert-div").addClass("d-none")
  }, 3000);
})
const showDeleteAlert = ((type, message) => {
  $("#delete-alert-div").html(` <div class="alert alert-${type} alert-dismissible" role="alert">
${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`)
  $("#delete-alert-div").removeClass("d-none")
  $("#delete-alert-div").attr("tabindex", -1).focus();
  // setTimeout(() => {

  //   $("#delete-alert-div").addClass("d-none")
  // }, 3000);
})

const changeBtnState = ((element, state, enableText = null) => {
  // console.log($(element))
  element = $("#" + element);
  if (state == "disable") {
    $(element).attr("disabled", true)
    $(element).text("Please wait ...")
    return
  } else if (state == "enable") {
    console.log('enableeeeeeee');

    $(element).removeAttr("disabled");
    if (enableText == null) enableText = "Register"
    $(element).text(enableText);
    return
  }
})


function isValid$Digit() {
  return "^[0-9]{4}$"
}

const setElements = ((data) => {
  Object.keys(data).forEach(key => {
    if (key == "password") return;
    $("#" + key).val(data[key]);
  });
})
const setDropDown = (() => {
  $('option').each(function () {
    var optionText = this.text;
    var newOption = optionText.substring(0, 36);
    $(this).text(newOption + '...');
  });
})

const logout = (() => {
  localStorage.clear();
  window.location.href = "./login.php";
})
$("#logout").click(logout);