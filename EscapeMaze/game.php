    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.min.js"></script>
<?php 
    include('./php/common.php');
    // Page Title
    head('Game');
?>
<body>
    <!-- Navigation Bar-->
    <?php
        navigation();
    ?>
    <div class="game row-sm text-center">
        <h1 class="header pt-5 pb-5">Escape Maze</h1>
        <div id="welcome-msg"></div>
        <div class="" id="startMenu">
            <button class="btn" id="practise" type="button" onclick="toggleVisibility('menu')">Practise</button>
            <button class="btn" id="play" type="button" onclick="playGame()">Play</button>
        </div>
        <div id="message-container">
            <div id="message">
                <h1 class="hidden">Congratulations</h1>
                <p id="moves"></p>
                <button class="btn hidden" id="ok-btn" type="button" onclick="toggleVisibility('message-container')">Submit score</button>
            </div>
        </div>
        <div id="menu">
                <select id="diffSelect">
                    <option value="10">Easy</option>
                    <option value="15">Medium</option>
                    <option value="20">Hard</option>
                    <option value="25">Extreme</option>                                      
                </select>
            <button id="start-btn" class="btn" type="button" onclick="startPractise()">Start</button>
            <button id="start-btn" class="btn" type="button" onclick="makeMaze()">Restart</button>
      </div>
      <div id="view">
        <div id="mazeContainer">
          <canvas id="mazeCanvas" class="border" height="800" width="800"></canvas>
        </div>
        <div class="row" id="gameInfo">
            <p class="col" id="level">Level:</p>
            <p class="col" id="score">Score:</p>
        </div>
      </div>
            <p id="moves"></p>
        </div>
    </div>
</body>
    
<!--Footer-->
<?php
    footer(false);
?>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js'></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js"></script>
    <script src="./js/checkIfUserLoggedIn.js"></script>
    <script src="./js/sketch.js"></script>
    <script src="./js/cell.js"></script>
