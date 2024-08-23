let tableData = {
  columns: [
    {
      title: "Sr. No.",
      field: "id",

      //   width: 100,
      headerFilter: false,
      headerTooltip: "ID",
      formatter: "rownum",
    },
    {
      title: "Exam Title",
      field: "exam_title",
      headerFilter: false,
      headerTooltip: "Exam Title",
    },
    {
      title: "Created At",
      field: "created_at",
      headerFilter: false,
      headerTooltip: "Created At",
    },

    {
      title: "Actions",
      headerSort: false,
      headerFilter: false,
      formatter: function (cell) {
        const teacher_id = cell.getData().teacher_id;
        const exam_title = cell.getData().exam_title;

        return `
            <td class="text-center">
              <button type="button" class="btn btn-primary btn-sm" onclick="enrollInExam('${teacher_id}', '${exam_title}')">Enroll</button>
            </td>
          `;
      },
    },
  ],
};
