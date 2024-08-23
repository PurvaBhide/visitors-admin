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
      title: "Name",
      field: "name",
      formatter: function (cell) {
        // Extract the values from the cell data
        const fname = cell.getData().f_name;
        const mname = cell.getData().m_name;
        const lname = cell.getData().l_name;
        const id = cell.getData().user_id;

        // Combine first name, middle name, and last name
        const fullName = [fname, mname, lname].filter(Boolean).join(" ");

        // Construct the URL based on the entry ID
        const url = `./participantExamDetail.php?participantId=${id}`;

        // Return the anchor tag with the constructed URL and combined name
        return `<a href="${url}">${fullName}</a>`;
      },
    },

    {
      title: "Institute Name",
      field: "institute",
      headerFilter: false,
      headerTooltip: "Institute Name",
    },
    {
      title: "Qualifications",
      field: "qualifications",
      //   width: 100,
      headerFilter: false,
      headerTooltip: "Qualifications",
    },
    {
      title: "Email",
      field: "email",
      //   width: 100,
      headerFilter: false,
      headerTooltip: "Email",
    },
    {
      title: "Contact number",
      field: "contact_number",
      //   width: 100,
      headerFilter: false,
      headerTooltip: "Contact number",
    },
    {
      title: "Actions",
      headerSort: false,
      headerFilter: false,
      formatter: function (cell) {
        const id = cell.getData().id;
        const user_id = cell.getData().user_id;
        const name = cell.getData().f_name;
        console.log(id, name, "IDDD");
        return `
            <td class="text-center">
              <a href="edit-teacher.php?id=${user_id}" class="mt-2 btn btn-primary"><i class="fas fa-edit"></i></a>
              <a href="javascript:void(0)" onclick=openDeleteModal(this,${id}) class="mt-2 btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></a>
            </td>
          `;
      },
    },
  ],
};
