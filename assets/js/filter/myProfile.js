const myProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  document.getElementById("f_name").value = user.f_name;
  document.getElementById("m_name").value = user.m_name;
  document.getElementById("l_name").value = user.l_name;
  document.getElementById("email").value = user.email;
  document.getElementById("contact_number").value = user.contact_number;
  document.getElementById("role_name").value = user.role_name;

};
