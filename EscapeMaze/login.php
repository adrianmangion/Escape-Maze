 <!--Links to stylesheets and scripts-->
    <?php 
        include('./php/common.php');
        // Page Title
        head('Login');
    ?>   

    <body>
        <!--Navigation Bar-->
        <?php
            navigation();
        ?>
        <!--Page Content-->
        <div class="container text-center" id="welcomeMessege">
            <h2 class="header">Login</h2>
            <!--Login Form -->
            <form class="login-form mx-auto mt-5" id="login-form" onsubmit="return false">
              <div class="form-group">
                <label for="input-username">Username</label>
                <input type="text" class="form-control-sm reg-input" id="input-username" placeholder="Enter username" autocomplete="username" required>
              </div>
              <div class="form-group">
                <label for="input-password">Password</label>
                <input type="password" class="form-control-sm reg-input" id="input-password" autocomplete="current-password" placeholder="Password" required>
              </div>
            </form>
            <div><p id="error-msg"></p></div>
            <button type="submit" class="btn" id="submit" form="login-form" onclick="loginUser()">Login</button>
            <!--Character Image-->
            <?php
                characterImage('./img/login.png');
            ?>
        </div>
    </body>
    
    <script src="./js/registration.js"></script>
    <script src="./js/checkIfUserLoggedIn.js"></script>
    <script src="./js/login.js"></script>

    <!--Footer-->
    <?php
        footer(false);
    ?>