<!--Links to stylesheets and scripts-->
<?php 
  include('./php/common.php');
  // Page Title
  head('Register');
?>  

    <body>
        <!--Navigation Bar-->
        <?php
          navigation();
        ?>
        <!--Page Header-->
        <div class="container text-center" id="welcomeMessege">
          <h2 class="header">Register</h2> 

            <!--Registeration Form -->
            <div id="error-tooltip"></div>
            <form class="register-form mx-auto mt-5" id="reg-form" onsubmit="return false">
            <div class="form-group">
                <label for="input-name">Name</label>
                <input type="text" class="form-control-sm reg-input" id="input-name" placeholder="Enter name" required>
              </div>
              <div class="form-group">
                <label for="input-surname">Surname</label>
                <input type="text" class="form-control-sm reg-input" id="input-surname" placeholder="Enter surname" required>
              </div>
              <div class="form-group">
                <label for="input-email">Email address</label>
                <input type="email" class="form-control-sm reg-input" id="input-email" placeholder="Enter email" required>
              </div>
              <div class="form-group">
                <label for="input-username">Username</label>
                <input type="text" class="form-control-sm reg-input" id="input-username" placeholder="Enter username" required>
              </div>
              <div class="form-group">
                <label for="input-password">Password</label>
                <input type="password" class="form-control-sm reg-input" id="input-password" onkeyup="passwordStrength()" placeholder="Password" required>
              </div>
              <div class="form-group">
                <label for="confirm-password">Confirm password</label>
                <input type="password" class="form-control-sm reg-input" id="confirm-password" placeholder="Confirm Password" required>
              </div>
              <progress class="progress-bar" max="100" value="0" id="strength"></progress>
              <p id="passStrength">Password Strength</p>
            </form>
            <div><p id="error-msg"></p></div>
            <button type="submit" class="btn mx-auto" id="submit" form="reg-form" onclick="registerUser()">Submit</button>
            <!-- Character Image -->
            <?php
              characterImage('./img/register.png');
            ?>
          </div>
    </body>

    <!-- Footer -->
<?php
  footer(false);
?>

<!-- Script for registering users -->
<script src="./js/registration.js"></script>
<script src="./js/checkIfUserLoggedIn.js"></script>
rgb(20, 151, 20)rgb(20, 151, 20)