let participantsTable;
const setparticipantsList = () => {
  const { data } = participantsListApi();
  console.log(data);
  const listData = data?.map((value, index) => {
    return ` <tr class="text-center">
          <td>${++index}</td>
          <td><a href="participantExamDetail.php?participantId=${
            value?.user_id
          }">${value?.name}</a></td>
          <td>${value?.institute_name}</td>
          <td>${value?.exam_title}</td>
          <td>${value?.totalMarks}</td>
          
        </tr>`;
  });

  $("#listParticipantsData").html(listData.join(""));
  ParticipantsTable = new DataTable("#listParticipants");
};

const detailParticipantEntry = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const participantId = urlParams.get("participantId");

  if (participantId) {
    fetch(
      `https://triuttarakhand.in/api-exam-portal/public/getUserDetails/${participantId}`
    )
      .then((response) => response.json())
      .then((dataa) => {
        console.log("Fetched Participant Details:", dataa);
        const { data } = dataa;
        console.log("Participant Details:", data?.enrolled_exams);
        const studentInfoContainer = document.getElementById("studentInfo");

        studentInfoContainer.innerHTML = `
          <h3 class="text-center">Student Details</h3>
          <div class="col-md-6">
              <div class="card">
                  <div class="card-body">
                      <p><strong>Name :</strong> ${data?.f_name} ${data?.m_name} ${data?.l_name}</p>
                    
                  </div>
              </div>
          </div>
          <div class="col-md-6">
              <div class="card">
                  <div class="card-body">
                  <p><strong>Institute :</strong> ${data?.institute_name}</p>
                  </div>
              </div>
          </div>
        `;

        const questionsAnswerSection = document.getElementById(
          "questionsAnswerSection"
        );

        // Assuming `data` holds the API response
        const { enrolled_exams } = data;
        console.log(enrolled_exams, "enrolled_exams");
        questionsAnswerSection.innerHTML = `
        ${enrolled_exams
          .map(
            (exam, index) => `
            <div class="card mt-4 mb-4">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <h3>Exam : ${exam.exam_title}</h3>
                  <span><strong>Total Marks :</strong> ${
                    exam.total_marks
                  }</span>
                </div>
                ${exam.questions
                  .map(
                    (question, qIndex) => `
                    <div class="mb-3">
                      <div class="d-flex justify-content-between">
                        <strong>Question ${index + 1}.${qIndex + 1} :</strong>
                        <span><strong>Marks :</strong> ${
                          question.total_marks
                        }</span>
                      </div>
                      ${question.question_text}
                      <div class="mt-2">
                        ${question.options
                          .map(
                            (option, oIndex) => `
                            <input type="checkbox" name="question${index}_option" value="${
                              option.option_text
                            }" id="question${index}_${qIndex}_option_${oIndex}" ${
                              option.selected ? "checked" : ""
                            } disabled>
                            <label class="${
                              option.selected ? "selected" : ""
                            }" for="question${index}_${qIndex}_option_${oIndex}">${
                              option.option_text
                            }</label><br>
                          `
                          )
                          .join("")}
                      </div>
                    </div>
                    <hr>
                  `
                  )
                  .join("")}
              </div>
            </div>
          `
          )
          .join("")}
      `;
      })

      .catch((error) => {
        console.error("Error fetching participant details:", error);
      });
  } else {
    console.error("participantId not available in the URL.");
  }
};
