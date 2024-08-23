function ChangeQuestionType(element) {
  if ($(element).val() != "mcq" && $(element).val() != "dropdown") {
    console.log(
      $(element)
        .parent()
        .parent()
        .parent()
        .parent()
        .find(".option-disc")
        .html("")
    );
  }
}

function addAnswerOption(element) {
  let questionType = $(element)
    .parent()
    .parent()
    .parent()
    .parent()
    .find(".question-type")
    .val();
  console.log(questionType);

  if (questionType != "mcq" && questionType != "dropdown") return;

  let parent = $(element).parent().parent().parent().append(`
      <div class="ans-field d-flex">
        <div class="form-check col-10 mt-3 d-flex align-items-center">
          <input name="default-checkbox-1" class="form-check-input" type="checkbox" value="">
          <input type="text" class="form-control mx-2" placeholder="Enter your answer here">
        </div>
        <div class="mt-1 d-flex align-items-center">
          <i style="font-size: 1.8rem;" class='bx bxs-image-alt text-primary'></i>
        </div>
        <div class="answer-acn-btns d-flex align-items-center">
          <a href="javascript:void(0)" onclick="addAnswerOption(this)" class="mx-2 text-secondary">
            <i style="font-size:1.5rem" class='bx bxs-plus-circle'></i>
          </a>
          <a href="javascript:void(0)"  onclick="removeAnswerOption(this)"  class="mx-2 text-secondary">
            <i style="font-size:1.5rem" class='bx bx-minus-circle'></i>
          </a>
        </div>
      </div>`);
}

function removeAnswerOption(element) {
  if ($(element).parent().parent().parent().find(".ans-field").length == 1) {
    return;
  }
  $(element).parent().parent().remove();
}

function addQuestionTemp() {
  let questionTemplate = $(`
        <div class="border p-2 rounded question-temp mb-2">
        <div class="row">
        <div class="col-12  d-flex justify-content-end">

            <div class="ms-auto">
                <a href="javascript:void(0)">

                    <i onclick="deleteQuestionTemp(this)" style="font-size: 1.2rem;" class='bx bx-trash-alt text-danger '></i>
                </a>
            </div>
        </div>
        <div class="col-10 row pe-0 me-0 justify-content-end">

            <div class="col-4 pe-0 me-0 ms-1 mb-2">

                <label for="institute_id" class="form-label ">Question type</label>
                <select name="question_type" class="form-control question-type">
                <option value="mcq">Mutiple choice question </option>
                    <option value="text">Text </option>
                    <option value="text">Long text </option>
                    <option value="dropdown">Dropdown</option>
                    <option value="file">File </option>
                </select>
            </div>
        </div>
        <div class="d-flex">

            <div class="col-10">
                <div class="editor-wrap">
                    <div id="toolbar-container"></div>
                    <div id="editor">
                    </div>

                </div>
            </div>
            <div class="img-icon mt-1 ms-1 d-flex align-items-center ">
                <a href="javascript:void(0)">

                    <i style="font-size: 1.8rem;" class='bx bxs-image-alt text-primary'></i>
                </a>
            </div>
        </div>

    </div>
    <div class="option-disc">
        <div class="ans-field d-flex">
            <div class="form-check col-10 mt-3 d-flex align-items-center">
            <input name="default-checkbox-1" class="form-check-input" type="checkbox" value="" id="que" readonly>
                <input type="text" class="form-control mx-2" placeholder="Enter your answer here">
            </div>
            <div class="mt-1 d-flex align-items-center ">

                <i style="font-size: 1.8rem;" class='bx bxs-image-alt text-primary'></i>
            </div>
            <div class="answer-acn-btns d-flex align-items-center">
                <a href="javascript:void(0)" onclick="addAnswerOption(this)" class=" mx-2 text-secondary"> <i style="font-size:1.5rem" class='bx bxs-plus-circle'></i> </a>
                <a href="javascript:void(0)" onclick="removeAnswerOption(this)" class=" mx-2 text-secondary"> <i style="font-size:1.5rem" class='bx bx-minus-circle'></i> </a>
            </div>
        </div>
    </div>
        </div>`);

  // Append the question template to the question holder
  $("#question-holder").append(questionTemplate);

  // Replace CKEditor with a normal textarea
  let textareaElement = questionTemplate.find("#editor")[0];
  textareaElement.outerHTML =
    '<textarea class="form-control" rows="4" placeholder="Add question here"></textarea>';
}

function deleteQuestionTemp(element) {
  $(element).parent().parent().parent().parent().parent().remove();
}

function submitQuestionBank() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    console.error("Teacher ID not found in local storage.");
    return;
  }

  const teacherId = user.id;
  // Collect data for the question bank title
  let title = $("#title").val();
  console.log("Question Bank Title: ", title);

  // Collect questions data from question-holder
  const questions = [];
  $(".question-temp").each(function () {
    const questionText = $(this).find("textarea").val();

    const questionType = $(this).find(".question-type").val();

    // Collect answer options for the question
    const options = [];
    $(this)
      .find(".ans-field")
      .each(function () {
        const optionText = $(this).find("input[type='text']").val();
        const isCorrect = $(this)
          .find("input[type='checkbox']")
          .prop("checked");

        options.push({ text: optionText, is_correct: isCorrect });
      });

    // Add the question data to the questions array
    questions.push({
      text: questionText,
      question_type: questionType,
      options: options,
    });
  });

  // Create the payload
  const payload = {
    teacher_id: teacherId,
    exam_title: title,
    questions: questions,
  };

  // Log the payload
  console.log(payload);

  createQuestionBankApi
    .register(payload)
    .then((response) => {
      console.log("API Response:", response);

      // Check if the response status is 200
      if (response.status === 200) {
        console.log("Question bank created successfully.");
        showAlert("success", "white", "Exam Sucessfully created. ");
        setTimeout(() => {
          // Navigate to list-question-bank.php
          window.location.href = "list-question-bank.php";
        }, 1000);
      } else {
        console.error("Error:", response.statusText);
        // Handle other status codes as needed
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle errors
    });
}
