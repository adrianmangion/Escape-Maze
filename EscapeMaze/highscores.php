<!--Links to stylesheets and scripts -->
<?php 
    include('./php/common.php');
    // Page Title 
    head('Highscores');
?>

<body>
    <!-- Navigation Bar -->
    <?php
        navigation();
    ?>
    <!--Highscores table with sample data-->
    <div class="container text-center" id="how-to-section">
        <h2 class="header">Highscores</h2>
        <!--Buttons-->
        <?php
            buttons();
        ?>
        <div class="table-responsive">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Country</th>
                            <th>Score</th>
                        </tr>
                    </thead>       
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>AdrianMangion</td>
                            <td>Malta</td>
                            <td>789</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>JohnMangi</td>
                            <td>Malta</td>
                            <td>560</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Xerokillx</td>
                            <td>Malta</td>
                            <td>470</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Plato</td>
                            <td>Italy</td>
                            <td>469</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Elimnir</td>
                            <td>French</td>
                            <td>430</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>JoJo</td>
                            <td>Spain</td>
                            <td>420</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>NathC</td>
                            <td>Germany</td>
                            <td>400</td>
                        </tr>
                    </tbody>
            </table>
        </div>
        <!-- Character Image -->
        <?php
              characterImage('./img/highscore.png');
        ?>
    </div>
</body>

<script src="./js/checkIfUserLoggedIn.js"></script>
<!-- Footer -->
<?php
    footer(false);
?>