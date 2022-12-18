var customer = [
    {
        username: 'vanthien',
        password: 'vanthien',
        info: {
            name: "Vân Thiên",
            sex: "male",
            age: 18,
            address: "đoán xem",
            avatarurl: "images/avatar/vanthienavatar.jpg"
        }

    },
    {
        username: 'nhaty',
        password: 'nhaty',
        info: {
            name: "Nhất Ý",
            sex: "male",
            age: 25,
            address: "hỏi làm gì",
            avatarurl: "images/avatar/vanthienavatar.jpg"
        }
    },
    {
        username: 'hainhu',
        password: 'hainhu',
        info: {
            name: "Hải Như",
            sex: "female",
            age: 15,
            address: "không cho biết đâu",
            avatarurl: "images/avatar/vanthienavatar.jpg"
        }
    },
]
// login page
if (window.location.href == "http://127.0.0.1:5500/html/login.html") {
    var button = document.getElementById('btn_login');

    button.onclick = function () {
        var username = document.getElementById("user").value;
        var password = document.getElementById("password").value;
        let tmp = 0;
        for (var i = 0; i < customer.length; i++) {
            if (username == customer[i].username && password == customer[i].password) {
                tmp = 0;
                localStorage.setItem('action', JSON.stringify({
                    login: true,
                    userlogin: `${username}`
                }));
                window.location = "../html/service.html"
            }
            else {
                tmp++;
                localStorage.setItem('action', JSON.stringify({
                    login: false,
                    userlogin: ""
                }));
            }
        }
        if (tmp != 0) {

            document.getElementById("error").innerHTML = "Username or password is incorrect";
        }

    };
}

// avatar change when login
var tmp = JSON.parse(localStorage.getItem('action'))
console.log(tmp);
const { login, userlogin } = tmp;

var avatar = document.getElementById("log").innerHTML =
    `
<div class="avatar">
    <!-- Avatar image -->
    <button id="btn_avatar"><img class="avatar__image" src="/images/avatar/${userlogin}avatar.jpg"/></button>
</div>
`

// menu login/loguot
var menu_check = document.getElementById('btn_avatar');
menu_check.onclick = function () {
    console.log(1);
    document.getElementById("menu_icon").innerHTML =
        `
        <div id="menu_icon">
    <a href="http://">settings and security</a> <br>
    <a href="http://">login</a> <br>
    <a href="http://">logout</a>
    </div>
    `

}

// function myFunction(login) {
//     if(login != 0){
//         var ava = document.getElementById("ava").innerHTML ="hello"
//         return ava;
//     }
// }
// window.myFunction(action.login); 

// Product-details page of Amounnt
function increment() {
    document.getElementById('demoInput').stepUp();
 }
 function decrement() {
    document.getElementById('demoInput').stepDown();
}

// Product-details page of Comment
var post= document.getElementById("send");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box").value;
    var p = document.createElement("p");
    p.innerHTML="<b>Me: </b>";
    var text = document.createTextNode(commentBoxValue);
    p.appendChild(text);
    document.getElementById("customercomment1").appendChild(p);
});
