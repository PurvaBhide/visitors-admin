<nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
  <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
    <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
      <i class="bx bx-menu bx-sm"></i>
    </a>
  </div>

  <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
    <!-- Search -->

    <!-- /Search -->

    <ul class="navbar-nav flex-row align-items-center ms-auto">
      <!-- Place this tag where you want the button to render. -->


      <!-- User -->
      <li class="nav-item navbar-dropdown dropdown-user dropdown">
        <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
          <div class="avatar avatar-online">
          <!-- <img src="./docs/img/avatars/avtar.png" alt class="w-px-40 h-auto rounded-circle" /> -->
          <img src="./docs/img/avatars/2.png" alt class="w-px-40 h-auto rounded-circle" />
          </div>
        </a>
        <ul class="dropdown-menu dropdown-menu-end">
          <li>
            <a class="dropdown-item" href="#">
              <div class="d-flex">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar avatar-online">
                    <img src="./docs/img/avatars/2.png" alt class="w-px-40 h-auto rounded-circle" />
                  </div>
                </div>
                <div class="flex-grow-1">
                <span class="fw-semibold d-block" style="padding: 10px;">Admin</span>
                  <!-- <small class="text-muted">Admin</small> -->
                </div>
              </div>
            </a>
          </li>
          <li>
            <div class="dropdown-divider"></div>
          </li>
      
          <li>
            <a class="dropdown-item" id="logout" href="javascript:void(0)">
              <i class="bx bx-power-off me-2"></i>
              <span class="align-middle">Log Out</span>
            </a>
          </li>
        </ul>
      </li>
      <!--/ User -->
    </ul>
  </div>
</nav>

<script>
  const updateUserProfile = () => {
    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem("user"));

    // Update user photo
    const userPhoto = document.querySelectorAll('.avatar img');
    userPhoto.forEach(img => {
      // img.src = user.photo;
      img.alt = user.f_name;
    });

    // Update username and role
    const userNameElements = document.querySelectorAll('.dropdown-item .fw-semibold');
    const userRoleElements = document.querySelectorAll('.dropdown-item small.text-muted');

    // userNameElements.forEach(element => {
    //   element.textContent = user.f_name; // Assuming user data contains first name
    // });

    // userRoleElements.forEach(element => {
    //   element.textContent = user.role_name; // Assuming user data contains role name
    // });
  };

  // Call the function to update user profile on page load
  updateUserProfile();
</script>