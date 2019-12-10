class User
  {    
    constructor(name,surname,email,username,password)
    {
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.username = username;
      this.password = password;
    }
  }

  function isEmpty(input)
  {
    if(input.trim()=="")
    {
      return true;
    }
    return false;
  } 

  function registerUser()
    {
        //Get information from the form and store them in variables
        let name = document.getElementById("input-name").value;
        let surname = document.getElementById("input-surname").value;
        let email = document.getElementById("input-email").value;
        let username = document.getElementById("input-username").value;
        let password = document.getElementById("input-password").value;
        let confirmPassword = document.getElementById("confirm-password").value;
        let passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");
        let registeredUsers = [];
        let uniqueEmail = true;
        let uniqueUsername = true;
        let passwordMatch;
        let passwordStrong;

        //HTML5 is already checking if inputs are empty, but upon hitting the submit button the script is still run, hence rechecking inputs.
        if(!(isEmpty(email) || isEmpty(username) || isEmpty(password) || isEmpty(confirmPassword || isEmpty(name) || isEmpty(surname))))
        {
            tempUser = new user(name,surname,email,username,password);
            for(let i = 0; i <localStorage.length; i++)
            {            
                //Grab existing user from local storage
                registeredUsers[i] = JSON.parse(localStorage.getItem(i));
                //Check if the email in question matches the email of current existing user(i)
                if(registeredUsers[i].email == tempUser.email)
                {
                    //If it does then it is not a unique email
                    uniqueEmail = false;
                    document.getElementById("input-email").value = "";
                    document.getElementById("error-msg").innerHTML = tempUser.email + " is already taken!";
                }
                //Check if the username in question matches the username of current existing user(i)
                if(registeredUsers[i].username == tempUser.username)
                {
                    //If it does then it is not a unique username
                    uniqueUsername = false;
                    document.getElementById("input-username").value = "";
                    document.getElementById("error-msg").innerHTML = tempUser.username + " is already taken!";
                }
            }

            //Check if passwords match
            if(tempUser.password === confirmPassword)
            {
                //Check if password is strong
                if(passwordRegex.test(tempUser.password))
                {
                    passwordStrong = true;
                    passwordMatch = true;
                }
                else
                {
                    alert("Password should contain small letter, letter in caps, a number and longer than 6 characters!");
                }
            }

            else
            {
                document.getElementById("input-password").value = "";
                document.getElementById("confirm-password").value = "";
                document.getElementById("error-msg").innerHTML = "Passwords do not match.";
            }
            
            if(uniqueEmail == true && uniqueUsername == true && passwordMatch == true && passwordStrong == true)
            {
                registeredUsers.push(tempUser);
                let i = localStorage.length;
                localStorage[i] = JSON.stringify(registeredUsers[i]);
                document.getElementById("error-msg").innerHTML = "";
                alert("successfully registered!");
                window.location.href = "./game.php";
                }
        }

        else
        {
            alert("Please fill in all required data.");
        }
    }           

  function passwordStrength()
  {
    let password = document.getElementById("input-password")
    password.addEventListener('keyup', function(){
        checkPassword(password.value)})

    function checkPassword(password)
    {
      let strengthBar = document.getElementById("strength");
      let strength = 0;

      if(password.match(/[a-z]+/))
      {
        strength += 1;
      }
      if(password.match(/[A-Z]+/))
      {
        strength += 1;
      }
      if(password.match(/[0-9]+/))
      {
        strength += 1;
      }
      if(password.length >= 6)
      {
        strength += 1;
      }
      if(password.length > 6)
      {
        strength += 1;
      }

      switch(strength)
      {
        case 0:
          strengthBar.value = 0;
          document.getElementById('passStrength').innerHTML = "Password Strength";
          break
        case 1:
          strengthBar.value = 20;
          document.getElementById('passStrength').innerHTML = "Weak";
          break
        case 2:
          strengthBar.value = 40;
          document.getElementById('passStrength').innerHTML = "Weak";
          break
        case 3:
          strengthBar.value = 60;
          document.getElementById('passStrength').innerHTML = "Medium";
          break
        case 4:
          strengthBar.value = 80;
          document.getElementById('passStrength').innerHTML = "Strong";
          break
        case 5:
          strengthBar.value = 100;
          document.getElementById('passStrength').innerHTML = "Very Strong";
          break
      }
    }

    function checkIfEmpty(password)
    {
      if(password.value.length === 0)
      {
        document.getElementById('passStrength').innerHtml = "Password Strength";
      }
    }
  }

        