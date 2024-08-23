let questionBankTable;
const listquestionBank = () => {
  const { data } = questionBankListApi();
  const rowData = data?.map((element, i) => {
    return ` <tr class="text-center">
    <td>${i + 1}</td>
   
    <td>${element?.exam_title}</td>
    <td>${element?.created_at}</td>
    <th class="text-center">
    <button type="button" class="btn btn-primary btn-sm" onclick="enrollInExam('${
      element?.teacher_id
    }', '${element?.exam_title}')">Enroll</button>
    
    </th>
    
  </tr>`;
  });

  $("#listQuestionBankData").html(rowData.join(""));
  questionBankTable = new DataTable("#listQuestionBankTable");
};

const enrollInExam = (teacher_id, exam_title) => {
  window.location.href = `enroll-in-exam.php?id=${encodeURIComponent(
    teacher_id
  )}&exam_title=${encodeURIComponent(exam_title)}`;
};

let examData;
const detailenrollInExam = (teacher_id, exam_title) => {
  return fetch(
    `https://triuttarakhand.in/api-exam-portal/public/teacher/questions/showById/${teacher_id}/${exam_title}`
  )
    .then((response) => response.json())
    .then((data) => {
      examData = data;
      const examDetail = document.querySelector("#examDetail");
      examDetail.innerHTML = `
          <div class="card-body">
            <h3>Enroll in Exam</h3>
            <p><strong>Exam Title:</strong> ${exam_title}</p>
          </div>
        `;

      const questionsSection = document.querySelector("#questionsSection");
      if (data.data && data.data.length > 0) {
        console.log(data.data, "data.data");
        const questionsHTML = data.data
          .map((question, index) => {
            const optionsHTML = question.options
              .map((option) => {
                return `<div class="form-check">
                      <input class="form-check-input" type="checkbox" value="${option.id}" id="question${index}_option${option.id}">
                      <label class="form-check-label" for="question${index}_option${option.id}">
                        ${option.option_text}
                      </label>
                    </div>`;
              })
              .join("");

            return `<div class="mb-3">
                    <strong>Question ${index + 1}:</strong> ${
              question.question.question_text
            }
                    <div>${optionsHTML}</div>
                  </div>`;
          })
          .join("");

        questionsSection.innerHTML = `
            <div class="card-body">
              <h3>Exam Questions</h3>
              ${questionsHTML}
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-primary" id="submitExam">Submit</button>
            </div>
          `;

        questionsSection.style.display = "block";

        data.data.forEach((question, index) => {
          question.options.forEach((option) => {
            const checkbox = document.getElementById(
              `question${index}_option${option.id}`
            );
            checkbox.addEventListener("change", () => {
              const selectedOptionId = checkbox.checked ? option.id : null;

              console.log("Question ID:", question.question.id);
              console.log("Question Text:", question.question.question_text);
              console.log("Selected Option ID:", selectedOptionId);
            });
          });
        });
      } else {
        questionsSection.style.display = "none";
      }
      return data;
    })
    .catch((error) => {
      console.error("Error fetching details:", error);
    });
};

const applyToQuestionBank = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;
  const params = new URLSearchParams(window.location.search);
  const exam_title = params.get("exam_title");

  const selectedOptions = [];

  document.querySelector("#submitExam").addEventListener("click", function () {
    const selectedOptions = [];
    examData.data.forEach((question, index) => {
      question.options.forEach((option) => {
        const checkbox = document.getElementById(
          `question${index}_option${option.id}`
        );
        if (checkbox.checked) {
          selectedOptions.push({
            question_id: question.question.id,
            selected_option_id: option.id,
          });
        }
      });
    });

    console.log("Selected Options:", selectedOptions);

    const payload = {
      user_id: id,
      exam_title: exam_title,
      responses: selectedOptions,
    };

    console.log("Payload:", payload);

    QuestionBankApi.apply(payload)
      .then((response) => {
        console.log("API Response:", response);

        if (response.status === 200) {
          showAlert("success", "white", "Exam Successfully Submitted. ");
          setTimeout(() => {
            window.location.href = "list-question-bank.php";
          }, 1000);
        } else {
          console.error("Error:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
};
