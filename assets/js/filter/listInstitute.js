let instTable;
const setInstList=((data)=>{
    console.log("From List Institute")
    const listData=data?.map((value,index)=>{
        return ` <tr class="text-center">
        <td>${++index}</td>
        <td>${value?.name}</td>
        <td>${value?.institute_type}</td>
        <td class="text-center">
          <a href="edit-institute.php?id=${value?.id}" class="btn btn-primary"><i class="fas fa-edit    "></i> </a>
          <a href="javascript:void(0)" onclick=openDeleteModal(this,${value?.id}) class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i> </a>
        </td>
      </tr>`;
    })
    $("#listInstTable").html(listData.join(""))
     instTable = new DataTable('#instTable');
    instTable.options={
              "responsive": false,
        "lengthChange": false,
        "autoWidth": false,
    }
    // $('#instTable').DataTable({
    //     "responsive": false,
    //     "lengthChange": false,
    //     "autoWidth": false,
       
    // });

})
institute.listAll().then(({status,message,data}) => {
    if(status==200){
        setInstList(data)
        return;
    }else if(status==204)
    {
        showAlert("success", "white", "No records found")
        let emptyHtml=`
        <tr class="text-center">
        <td colspan="5">No records found</td>
        </tr>
        `;
        $("#listInstTable").html(emptyHtml)

        return;
    }else{
        
        showAlert("warning", "white", "Something went wrong! please try again later")
    }
    
    
}).catch(function(message){
    showAlert("warning", "white", "Something went wrong! please try again later")
    console.error(message)
})
