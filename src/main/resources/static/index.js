
var users = [
    {
        "name": "Dinesh Reddy",
        "gender": "Male",
        "image":"john.png"
    },
        {
        "name": "Ruku",
        "gender": "female",
        "image":"image.png"
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