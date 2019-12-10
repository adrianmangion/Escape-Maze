window.onload = function() 
{
    if(sessionStorage.length > 0)
    {
        let currentUser = JSON.parse(sessionStorage.getItem(0));
        hideItem(3,4);
        document.getElementById("dropdownMenuButton").classList.remove('hidden');
        document.getElementById("dropdownMenuButton").innerHTML = currentUser.username;
    }
};

function hideItem(x,y)
{
    let menuItem = document.querySelectorAll('.nav-item');
    menuItem[x].classList.add('hidden');
    menuItem[y].classList.add('hidden');
}

function showItem(x,y)
{
    let menuItem = document.querySelectorAll('.nav-item');
    menuItem[x].classList.remove('hidden');
    menuItem[y].classList.remove('hidden');
}

function logout()
{
    sessionStorage.clear();
    document.getElementById("dropdownMenuButton").classList.add('hidden');
    showItem(3,4);
}