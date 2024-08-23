let tableData = {
  columns: [
    {
      title: "Sr. No.",
      field: "id",
      formatter: "rownum", // This will automatically increment the row number
      headerFilter: false,
      headerTooltip: "ID",
    },
    {
      title: "Name",
      field: "fullName",
      formatter: function (cell) {
        const f_name = cell.getData().f_name || "";
        const m_name = cell.getData().m_name || "";
        const l_name = cell.getData().l_name || "";
        const fullName = `${f_name} ${m_name} ${l_name}`.trim();
        return fullName;
      },
      headerFilter: false,
      headerTooltip: "Name",
    },

    {
      title: "Institute Name",
      field: "institute",
      headerFilter: false,
      headerTooltip: "Institute Name",
    },
    {
      title: "Email",
      field: "email",
      //   width: 100,
      headerFilter: false,
      headerTooltip: "Result",
    },
    {
      title: "Contact number",
      field: "contact_number",
      //   width: 100,
      headerFilter: false,
      headerTooltip: "Created At",
    },
    {
      title: "Gender",
      field: "gender",
      //   width: 100,
      headerFilter: false,
      headerTooltip: "Gender",
    },

    {
      title: "Actions",
      headerSort: false,
      headerFilter: false,
      formatter: function (cell) {
        const id = cell.getData().id;
        const user_id = cell.getData().user_id;

        return `
            <td class="text-center">
              <a href="edit-student.php?id=${user_id}" class="mt-2 btn btn-primary"><i class="fas fa-edit"></i></a>
              <a href="javascript:void(0)" onclick="openDeleteModal(this,${id})" class="mt-2 btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></a>
            </td>
          `;
      },
    },
  ],
};
