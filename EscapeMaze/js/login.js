class LoggedInUser extends User
{
    constructor(name,surname,email,username,password,highscore)
    {
        super(name, surname, email, username, password);
        this.highscore = highscore;
    }
}

function loginUser()
{
    let username = document.getElementById("input-username").value;
    let password = document.getElementById("input-password").value;
    let loggedIn = false;

    for(let i = 0; i < localStorage.length; i++)
    {
        let x = JSON.parse(localStorage.getItem(i));
        
        if(x.username === username && x.password === password)
        {
            let currentUser = new LoggedInUser(x.name,x.surname,x.email,x.username,x.password,0);
            sessionStorage.clear();
            sessionStorage[0] = JSON.stringify(currentUser);
            document.getElementById("dropdownMenuButton").innerHTML = username;
            loggedIn = true;
            window.location.href = "./game.php";
        }
    }

    if(loggedIn === false)
    {
        document.getElementById("error-msg").innerHTML = "Details are incorrect kindly check and enter again.";
    }
}