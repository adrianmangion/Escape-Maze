<!--Links to stylesheets and scripts -->
<?php 
    include('./php/common.php');
    // Page Title
    head('How to Play');
?>

    <body>
        <!-- Navigation Bar -->
        <?php
            navigation();
        ?>
        <!-- Instructions and controls of game in description list format-->
        <div class="container text-center" id="how-to-section">
            <h2 class="header">How To Play</h2>
             <!--Buttons-->
            <?php
                buttons();
            ?>
            <div class="game-description">
                <p>Escape Maze is a puzzle platformer where you take control of a character who has found himself lost inside of a maze. The objective is to overcome the obstacles that stand in the way of your character's freedom. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <dl class="row">
                <dt class="col-sm-6" id="move">Movement</dt>
                <dd class="col-sm-6">A D or Right/Left Arrows(← →)</dd>
                
                <dt class="col-sm-6">Jump</dt>
                <dd class="col-sm-6">Up Arrow(↑)</dd>
                
                <dt class="col-sm-6">Double-Jump</dt>
                <dd class="col-sm-6">Z</dd>

                <dt class="col-sm-6">Shoot Gun</dt>
                <dd class="col-sm-6">X</dd>
                
                <dt class="col-sm-6">Roll</dt>
                <dd class="col-sm-6">C</dd>
                
                <dt class="col-sm-6">Pause Game</dt>
                <dd class="col-sm-6">P</dd>
            </dl>
            <!-- Character Image -->
            <?php
              characterImage('./img/howto.png');
            ?>
        </div>
    </body>
    <script src="./js/checkIfUserLoggedIn.js"></script>
    <?php 
        footer(false);
    ?>
