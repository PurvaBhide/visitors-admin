class TabulatorTable extends CommanClass {
  table;
  curretUrl;
  user;
  role;
  paginationSizeSelector;
  paginationSize;
  paginationDataReceived;
  paginationDataSent;
  tableSelector;
  tabulator;
  STRUCTType;
  #tableData;
  constructor(
    tableSelectorID,
    curretUrl,
    tableData,
    paginationSizeSelector = [10, 25, 50, 100],
    paginationSize = 10,
    paginationDataSent = {
      page: "page",
      size: "perPage",
    },
    paginationDataReceived = {
      last_page: "last_page",
      current_page: "current_page",
      data: "data",
    }
  ) {
    super();
    this.tableSelector = this.querySelector(tableSelectorID);
    this.#tableData = tableData;
    this.user = this.getLocalStorageData("user");
    this.paginationSizeSelector = paginationSizeSelector;
    this.curretUrl = curretUrl;
    this.paginationSize = paginationSize;
    this.paginationDataSent = paginationDataSent;
    this.paginationDataReceived = paginationDataReceived;
    // this.tabulator = this.loadTabulatorTable();
    this.tabulator = this.loadTabulatorTable();
  }

  getURL() {
    return this.curretUrl;
  }
  ajaxConfig() {
    return {
      method: "GET", // Change type to method
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json", // You may need to specify this header
      },
    };
  }

  getAjaxParam() {
    // const { role } = this.user;
    // let params = { role };
    const { role, institute_id } = this.user;
    let params = { role, institute_id };
    if (role === "circle") {
      const { circle_id } = this.user;
      params.circle_id = circle_id;
    } else if (role === "vibhag") {
      const { vibhag_id } = this.user;
      params.division_id = vibhag_id;
    }
    return params;
  }
  getPaginationDataReceived() {
    return this.paginationDataReceived;
  }
  loadTabulatorTable() {
    const columns = this.getTabulatorColumnData.call(this);
    console.log("Columns:", columns);
    try {
      const columns = this.getTabulatorColumnData.call(this);

      // Check if columns is an array before attempting to use slice
      if (!Array.isArray(columns)) {
        console.error(
          "Tabulator Initialization Error: Columns is not an array"
        );
        return null; // or handle the error as appropriate
      }
      return new Tabulator(this.tableSelector, {
        ajaxURL: this.getURL.call(this),
        ajaxConfig: this.ajaxConfig.call(this),
        ajaxContentType: "json", // Ensure that you're sending JSON

        ajaxParams: this.getAjaxParam.call(this),
        pagination: "remote",
        paginationSize: this.paginationSize,

        layout: "fitColumns",
        paginationDataReceived: this.getPaginationDataReceived.call(this),
        ajaxResponse: this.getAjaxResponse.bind(this),
        paginationSizeSelector: this.getPaginationSizeSelector.call(this),
        paginationDataSent: this.getPaginationDataSent.call(this),
        columns: this.getTabulatorColumnData.call(this),
      });
    } catch (error) {
      console.error("Tabulator Initialization Error:", error);
      return null; // or handle the error as appropriate
    }
  }
  getPaginationDataSent() {
    return this.paginationDataSent;
  }
  getPaginationSizeSelector() {
    return this.paginationSizeSelector;
  }
  setToThePayloadForPagination(res) {
    if (
      res.status === 204 ||
      res?.status === 404 ||
      !res?.data ||
      res?.data.length === 0
    ) {
      // Display message to user
      // Return an empty data set
      return {
        last_page: 0,
        current_page: 1,
        data: [],
      };
    }

    return {
      last_page: res.pagination.total_pages,
      current_page: res.pagination.page,
      data: res.data,
    };
  }
  getAjaxResponse(url, params, response) {
    return this.setToThePayloadForPagination(response);
  }
  getTabulatorColumnData() {
    const columns = this.#tableData.columns;

    // Ensure that columns is an array
    if (!Array.isArray(columns)) {
      console.error("Columns is not an array:", columns);
      return []; // or handle the error as appropriate
    }

    return columns;
  }
  onSearchStudentFirstName() {
    this.querySelector("studentFirstNameSearch").addEventListener(
      "click",
      async () => {
        const studentName = this.querySelector.call(this, "studentName").value;
        try {
          const response = await this.fetchData(
            server,
            "GET",
            `studentfilter/${studentName}`
          );
          const { data } = response;

          if (data === null) {
            alert("No data found for the selected Student name.");
          } else {
            console.log(data, "DATA");
            this.tabulator.setData(data);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          alert("An error occurred while fetching data.");
        }
      }
    );
  }
  onSearchExamName() {
    this.querySelector("ExamNameSearch").addEventListener("click", async () => {
      const examName = this.querySelector("ExamName").value;
      try {
        const response = await this.fetchData(
          server,
          "GET",
          `filterByExamTitle/${examName}`
        );
        const { data } = response;

        if (data === null) {
          alert("No data found for the selected Exam name.");
        } else {
          console.log(data, "DATA");
          this.tabulator.setData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching data.");
      }
    });
  }

  onSearchInstituteName() {
    this.querySelector("InstituteNameSearch").addEventListener(
      "click",
      async () => {
        const InstituteName = this.querySelector.call(
          this,
          "InstituteName"
        ).value;
        try {
          const response = await this.fetchData(
            server,
            "GET",
            `filterByInstituteName/${InstituteName}`
          );

          const { data } = response;

          if (data === null) {
            alert("No data found for the selected Institute name.");
          } else {
            console.log(data, "DATA");
            this.tabulator.setData(data);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          alert("An error occurred while fetching data.");
        }
      }
    );
  }

  onSearchInstituteTeacherName() {
    this.querySelector("search-btn").addEventListener("click", async () => {
      const selectedInstituteId = this.querySelector.call(
        this,
        "institute_id"
      ).value;
      this.user.institute_id = selectedInstituteId;

      try {
        const response = await this.fetchData(
          server,
          "GET",
          `teacher/listAll/${selectedInstituteId}`
        );

        const { data } = response;

        if (data === null) {
          alert("No data found for the selected Institute name.");
        } else {
          console.log(data, "DATA");
          this.tabulator.setData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching data.");
      }
    });
  }
  onSearchInstituteStudentName() {
    this.querySelector("search-btn").addEventListener("click", async () => {
      const selectedInstituteId = this.querySelector.call(
        this,
        "institute_id"
      ).value;
      this.user.institute_id = selectedInstituteId;

      try {
        const response = await this.fetchData(
          server,
          "GET",
          `students/listAll/${selectedInstituteId}`
        );

        const { data } = response;

        if (data === null) {
          alert("No data found for the selected Institute name.");
        } else {
          console.log(data, "DATA");
          this.tabulator.setData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching data.");
      }
    });
  }
  downloadTableData(format, filename) {
    if (this.tabulator) {
      if (typeof this.tabulator.download === "function") {
        this.tabulator.download(format, filename);
      } else {
        console.error(
          "Download method is not available in this version of Tabulator."
        );
      }
    } else {
      console.error("Tabulator instance is not available.");
    }
  }
}
