
var users = [
    {
        "name": "john",
        "gender": "Male",
        "image":"john.png"
    },
        {
        "name": "jane",
        "gender": "female",
        "image":"jane.png"
    }
]
var id=0;
function ToggleUser() {
    id=(id+1)%2
    //get the elements
    // Image 1
    var userImage= document.getElementById("user-image");
    userImage.src=users[id].image;
    // Name 2
    var userName= document.getElementById("user-name");
    userName.innerHTML=users[id].name;
    // gender 3
    var userGender= document.getElementById("user-gender");
    userGender.innerHTML=users[id].gender;  
  }
 function randomuser() {
    fetch("https://randomuser.me/api/")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var usersData = data.results[0];

            var userImage = document.getElementById("user-image");
            userImage.src = usersData.picture.large;

            var userName = document.getElementById("user-name");
            userName.innerHTML =
                usersData.name.first + " " + usersData.name.last;

            var userGender = document.getElementById("user-gender");
            userGender.innerHTML = usersData.gender;
        })
        .catch(function(error) {
            console.log("Error fetching user data:", error);
        });
}