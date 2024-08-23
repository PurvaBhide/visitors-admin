<div class="sidebar" id="sideBar">
  <aside id=" layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
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
      <li class="menu-item active">
        <a href="index.html " class="menu-link">
          <i class="menu-icon tf-icons bx bx-home-circle"></i>
          <div data-i18n="Analytics">Dashboard</div>
        </a>
      </li>
      <li class="menu-item ">
        <a href="javascript:void(0);" class="menu-link menu-toggle">
          <i class="menu-icon tf-icons bx bx-building"></i>
          <div data-i18n="Layouts">Institute</div>
        </a>
        <ul class="menu-sub">
          <li class="menu-item ">
            <a href="./list-institute.php" class="menu-link">
              <div data-i18n="Container">Institute list</div>
            </a>
          </li>
          <li class="menu-item">
            <a href="./register-institute.php" class="menu-link">
              <div data-i18n="Container">Register Institute</div>
            </a>
          </li>
        </ul>
      </li>
      <li class="menu-item ">
        <a href="javascript:void(0);" class="menu-link menu-toggle">
          <i class="menu-icon tf-icons bx bxs-user"></i>
          <div data-i18n="Layouts">Teachers</div>
        </a>
        <ul class="menu-sub">
          <li class="menu-item ">
            <a href="./list-teachers.php" class="menu-link">
              <div data-i18n="Container">Teachers list</div>
            </a>
          </li>
          <li class="menu-item">
            <a href="./register-teacher.php" class="menu-link">
              <div data-i18n="Container">Register Teacher</div>
            </a>
          </li>
        </ul>
      </li>
      <li class="menu-item ">
        <a href="javascript:void(0);" class="menu-link menu-toggle">
          <i class="menu-icon tf-icons bx bxs-user-badge"></i>
          <div data-i18n="Layouts">Students</div>
        </a>
        <ul class="menu-sub">
          <li class="menu-item ">
            <a href="./list-students.php" class="menu-link">
              <div data-i18n="Container">Students list</div>
            </a>
          </li>
          <li class="menu-item">
            <a href="./register-students.php" class="menu-link">
              <div data-i18n="Container">Register Student</div>
            </a>
          </li>
        </ul>
      </li>
      <li class="menu-item ">
        <a href="javascript:void(0);" class="menu-link menu-toggle">
          <i class="menu-icon tf-icons bx bx-spreadsheet"></i>
          <div data-i18n="Layouts">Question Banks</div>
        </a>
        <ul class="menu-sub">
          <li class="menu-item ">
            <a href="./list-question-bank.php" class="menu-link">
              <div data-i18n="Container">Question Banks list</div>
            </a>
          </li>
          <li class="menu-item">
            <a href="./create-question-bank.php" class="menu-link">
              <div data-i18n="Container">Create question bank </div>
            </a>
          </li>
        </ul>
      </li>
      <li class="menu-item ">
        <a href="javascript:void(0);" class="menu-link menu-toggle">
          <i class="menu-icon tf-icons bx bxs-user"></i>
          <div data-i18n="Layouts">Participants</div>
        </a>
        <ul class="menu-sub">
          <li class="menu-item ">
            <a href="./list-participants.php" class="menu-link">
              <div data-i18n="Container">Participants list</div>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</div>
<script src="./assets/js/filter/showSideBarAsPerRole.js"></script>
<script>
  showSideBarAsPerRole();
</script>