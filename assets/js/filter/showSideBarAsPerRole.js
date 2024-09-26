const showSideBarAsPerRole = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const sideBar = document.querySelector("#sideBar");

  let listHtml = `
    <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
      <div class="app-brand demo">
        <a href="https://triuttarakhand.in" class="app-brand-link">
          <span class="app-brand-logo demo">
            <img src="./assets/img/portal-logo.png" alt="">
          </a>
          <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
            <i class="bx bx-chevron-left bx-sm align-middle"></i>
          </a>
      </div>
      <div class="menu-inner-shadow"></div>
      <ul class="menu-inner py-1">
       
      <li class="menu-item">
  <a href="./visitors.php" class="menu-link">
    <i class="menu-icon tf-icons fas fa-users" style="color: #27547c;"></i>
    <div data-i18n="Layouts">View All Visitors</div>
  </a>
</li>


        <li class="menu-item">
          <a href="./pending-request.php" class="menu-link">
            <i class="menu-icon tf-icons fas fa-hourglass-half" style="color: #1e90ff;"></i>
            <div data-i18n="Layouts">Pending Requests</div>
          </a>
        </li>
        <li class="menu-item">
          <a href="./approved-request.php" class="menu-link">
            <i class="menu-icon tf-icons fas fa-check-circle" style="color: #4caf50;"></i>
            <div data-i18n="Layouts">Approved Requests</div>
          </a>
        </li>
        <li class="menu-item">
          <a href="./rejectedrequest.php" class="menu-link">
            <i class="menu-icon tf-icons fas fa-times-circle" style="color: #dc3545;"></i>
            <div data-i18n="Layouts">Rejected Requests</div>
          </a>
        </li>
        <li class="menu-item">
  <a href="./previous-request.php" class="menu-link">
    <i class="menu-icon tf-icons fas fa-history" style="color: #6c757d;"></i>
    <div data-i18n="Layouts">Previous Requests</div>
  </a>
</li>
<li class="menu-item">
 <a href="./adddepartment.php" class="menu-link">
  <i class="menu-icon tf-icons fas fa-sitemap" style="color:#e95d2a;"></i>
  <div data-i18n="Layouts">Departments</div>
</a>

</li>

      </ul>
    </aside>
  `;

  sideBar.innerHTML = listHtml;
};

//   const currentPageUrl = window.location.href;

//   const menuItems = document.querySelectorAll(".menu-item");
//   const subMenuItems = document.querySelectorAll(".menu-sub .menu-item");

//   const isUrlMatch = (menuItem) => {
//     const link = menuItem.querySelector("a");
//     if (link && link.href) {
//       return currentPageUrl.includes(link.href);
//     }
//     return false;
//   };

//   menuItems.forEach((menuItem) => {
//     if (isUrlMatch(menuItem)) {
//       menuItem.classList.add("active");
//     }
//   });

//   subMenuItems.forEach((subMenuItem) => {
//     if (isUrlMatch(subMenuItem)) {
//       subMenuItem.classList.add("active");
//     }
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  // Get the current page URL
  const currentPageUrl = window.location.href;

  // Find the menu items and sub-menu items
  const menuItems = document.querySelectorAll(".menu-item");
  const subMenuItems = document.querySelectorAll(".menu-sub .menu-item");

  // Function to check if the URL matches the menu item
  const isUrlMatch = (menuItem) => {
    const link = menuItem.querySelector("a");
    if (link && link.href) {
      return currentPageUrl.includes(link.href);
    }
    return false;
  };

  // Iterate through menu items and set active class
  menuItems.forEach((menuItem) => {
    if (isUrlMatch(menuItem)) {
      menuItem.classList.add("active");
      // If it's a sub-menu item, also activate its parent menu
      const parentSubMenu = menuItem.closest(".menu-sub");
      if (parentSubMenu) {
        const parentMenuItem = parentSubMenu.closest(".menu-item");
        if (parentMenuItem) {
          parentMenuItem.classList.add("active");
        }
      }
    }
  });
});
