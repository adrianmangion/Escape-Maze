<?php
    function head($page_title)
    {
        //Header 
        echo '<!DOCTYPE html>';
        echo '<html lang="en">';
        echo '<head>';
        echo '<title>' . $page_title . '</title>'; 
        echo '<meta charset="UTF-8">';
        echo '<meta name="viewport" content="width=device-width, initial-scale=1">'; //ensures proper touch zooming on mobile
        echo '<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">';
        echo '<link href="./css/bootstrap.css" rel="stylesheet">';
        echo '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">';
        echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>';
        echo '<script src="js/bootstrap.js"></script>';
        echo '<link href="./css/style.css" rel="stylesheet" type="text/css">';
        echo '</head>';
    }

    function navigation()
    {
        //Navigation Bar
        echo '<nav class="navbar navbar-expand row p-0 m-0" id="header">';
        //Logo
        echo  '<div class="col-4" id="logo">';
        echo  '<a href="./index.php">';
        echo  '<img src="./img/logo.png" alt="Escape Maze Logo" class="logo">';
        echo  '</a>';
        echo  '</div>';

        //Collapsable button for resized menu
        echo '<button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#collapsible-navbar">';
        echo '<span class="navbar-toggler-icon"></span>';
        echo '</button>';

        //Navigation Menu
        echo '<div class="collapse navbar-collapse col-4" id="collapsible-navbar">';
        echo '<ul class="navbar-nav">';
        echo '<li class="nav-item" id="index">';
        echo '<a class="nav-link" href = "./index.php">Home</a>';
        echo '</li>';
        echo '<li class="nav-item" id="instructions">';
        echo '<a class="nav-link"  href="./instructions.php">How to Play</a>';
        echo '</li>';
        echo '<li class="nav-item" id="highscores">';
        echo '<a class="nav-link" href="./highscores.php">Highscores</a>';
        echo '</li>';
        echo '<li class="nav-item" id="register">';
        echo '<a class="nav-link" href="./register.php">Register</a>';
        echo '</li>';
        echo '<li class="nav-item" id="login">';
        echo '<a class="nav-link" href="./login.php">Login</a>';
        echo '</li>';
        echo '</ul>';
        echo '</div>';
        //User Settings
        echo '<div class="col-4" id="userSettings">';
        echo '<button class="btn dropdown hidden" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
        echo '';
        echo '</button>';
        echo '<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">';
        echo '<a class="dropdown-item" href="#" onclick="logout()" >Logout</a>';
        echo '<a class="dropdown-item" href="#">Delete Account</a>';
        echo '</div>';
        echo '</nav>';
    }


    //Function for laying out footer. Some pages require footer to be absolute for optimal display of page
    function footer($absoluteFooter){

        if($absoluteFooter)
        {
            //Social Media Buttons with position-absolute class
            echo  '<footer class="pt-1 pb-1 position-absolute">';
            echo  '<div class="socialmedia">';
            echo  '<a href="#" class="fa fa-facebook"></a>';
            echo  '<a href="#" class="fa fa-twitter"></a>';
            echo  '<a href="#" class="fa fa-instagram"></a>';
            echo  '</div>';
            //Copyright
            echo  '<p>© 2019 Copyright: EscapeMaze</p>';
            echo  '</footer>';
            //Close html tag
            echo  '</html>';
        }
        else
        {
            //Social Media Buttons
            echo  '<footer class="pt-1 pb-1">';
            echo  '<div class="socialmedia">';
            echo  '<a href="#" class="fa fa-facebook"></a>';
            echo  '<a href="#" class="fa fa-twitter"></a>';
            echo  '<a href="#" class="fa fa-instagram"></a>';
            echo  '</div>';
            //Copyright
            echo  '<p>© 2019 Copyright: EscapeMaze</p>';
            echo  '</footer>';
            //Close html tag
            echo  '</html>';
        }    
    }

    function buttons()
    {
        //Login and play as guest button
        echo '<div class="row mt-5" id="button-placeholders">';
        echo '<div class="col">';
        echo '<a href="./game.php" class="btn" id="GuestButton">Play as Guest</a>';
        echo '</div>';
        echo '</div>';
    }

    function characterImage($source)
    {
        echo '<div class="character mt-5 mx-auto mb-5">';
        echo '<img src="'.$source.'" alt="Image of Game Character" class="character-img">';
        echo '</div>';
    }
?>