    <!--Links to stylesheets and scripts-->
    <?php 
        include('./php/common.php');
        // Page Title
        head('Home');
    ?>   
    
    <body>
        <!--Navigation Bar-->
        <?php
            navigation();
        ?>
        <!--Page Content-->
        <div class="container text-center" id="welcomeMessege">
            <h2 class="header">Welcome To Escape Maze</h2>
            <!--Buttons-->
            <?php
                buttons();
            ?>
            <!--Character Image-->
            <?php
                characterImage('./img/character.png');
            ?>
        </div>
    </body>
    
    <script src="./js/checkIfUserLoggedIn.js"></script>
    <!--Footer-->
    <?php
        footer(false);
    ?>