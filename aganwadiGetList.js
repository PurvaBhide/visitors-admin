const aganwadiGetList = () => {
  const { data } = aganwadiApi.GetList();

  const aganwadiList = document.querySelector("#aganwadiList");

  const aganwadi = data?.map((element, i) => {
console.log("anganwadi List", element,"element  anganwadi List");
  
    return `
            <tr>
            <td>${i + 1}</td>
            <td>${element?.name}</td>
            <td>${element?.aganwadi_no}</td>
            <td>${element?.prakalpa_title}</td>
            <td>${element?.bit_title}</td>
            <td>${element?.year}</td>
            <td> ${element?.village} ${element?.block} ${element?.district}</td>        
        <td class="text-center"><span><a href="frm-register_aganwadi.php?id=${
          element.id
        }"><i class="fas fa-edit mr-3 text-primary"></i></a></span>
                                    <span><a id="deleteRow-${
                                      element.id
                                    }" ><i class="fas fa-trash text-danger mr-1"></i></a></span></td> </tr>
        `;
  });

  aganwadiList.innerHTML = aganwadi.join("");
  data?.forEach((data) => {
    
    if (!document.querySelector(`#deleteRow-${data.id}`)) return;
    document
      .querySelector(`#deleteRow-${data.id}`)
      .addEventListener("click", (e) => {
        e.preventDefault();
       
        document.querySelector(`#deleteRow-${data.id}`).closest("tr").remove();
         response = DeleteAganwadiAPI(data.id);
       
      });
  });
};
