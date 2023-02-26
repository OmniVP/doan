<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <input type="checkbox" id="toggler" />
          <aside class="aside-wrapper">
            <h1 class="logo-text"><span>404KEY</span> <label for="toggler"><i
                  class="fas fa-bars sidebar-toggle"></i></label></h1>
            <ul>
              <router-link :to="{ name: 'homepage' }" class="nav-link li" ><i class="fas fa-credit-card"></i> Homepage</router-link>
              <router-link :to="{ name: 'Loginpage' }" class="nav-link li" ><i class="fas fa-credit-card"></i> Login</router-link>
              <router-link :to="{ name: 'Registerpage' }" class="nav-link li" ><i class="fas fa-credit-card"></i> Register</router-link>
            </ul>
            <ul>
              <li class="li"><i class="fas fa-headset"></i> Đăng xuất</li>
            </ul>
          </aside>
        </div>
        <div class="col-9">
         
          <router-view />
        </div>
      </div>
    </div>

    
</template>

<script>
import "../assets/css/admin.css";

</script>