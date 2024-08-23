let loginUserData = parseData("user");
let loggedRole;
const checkLogin = (() => {
    if (!loginUserData) {
        showAlert("success", "white", "Your session has been expired. Please login again")
        setTimeout(() => {
            window.location.href = "./login.php"
        }, 1500);
        return;
    }
    loggedRole = loginUserData.role_name;


})

const generateToken = ((user) => {
    user.login(user).then(({ status, data, message }) => {
        if (status == 200) {
            loginUserData = data;
            authenticationToken = data.token;
        } else {
            showAlert("error", "white", "Session expired Please login again.");
        }
    })
})
checkLogin();
// user.checkToken().then((response)=>{
//     console.log(response);
// }).catch(function(error){
//     console.log(error)
// })