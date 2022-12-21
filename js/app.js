var customer = [
    {
        username: 'vanthien',
        password: 'vanthien',
        info: {
            name: "Vân Thiên",
            email: "email@gmail.com",
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
            email: "email@gmail.com",
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
            email: "email@gmail.com",
            sex: "female",
            age: 15,
            address: "không cho biết đâu",
            avatarurl: "images/avatar/vanthienavatar.jpg"
        }
    },
]

// login page
if (window.location.href == "http://127.0.0.1:5500/html/login.html") {
    localStorage.setItem('action', JSON.stringify({
        login: false,
        userlogin: ``
    }));
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
                window.location = "../html/home.html"
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
// register
if (window.location.href == "http://127.0.0.1:5500/html/register.html") {
    localStorage.setItem('account', JSON.stringify({
        "acc": [
            {
                username: '',
                password: '',
                info: {
                    name: "",
                    email: "",
                    sex: "",
                    age: "",
                    address: "",
                    avatarurl: ""
                }

            },
        ]
    }));
    var buttonxx = document.getElementById('btn_register');
    buttonxx.onclick = function () {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var name = document.getElementById("firstname").value + document.getElementById("lastname").value;
        var email = document.getElementById("userEmail").value;
        localStorage.setItem('account', JSON.stringify({
            "acc": [
                {
                    username: `${username}`,
                    password: `${password}`,
                    info: {
                        name: `${name}`,
                        email: `${email}`,
                        sex: "",
                        age: "",
                        address: "",
                        avatarurl: ""
                    }

                },
            ]
        }));
        localStorage.setItem('action', JSON.stringify({
            login: true,
            userlogin: `${username}`
        }));
        var account = JSON.parse(localStorage.getItem("account"))
        window.location = "../html/home.html"
        console.log(account.acc[0]);
    }
}
// avatar change when login
var tmp = JSON.parse(localStorage.getItem('action'))
console.log(tmp);
const { login, userlogin } = tmp;
for (var i = 0; i < customer.length; i++) {
    if (userlogin == customer[i].username) {
        var avatar = document.getElementById("log").innerHTML =
            `
            <div class="avatar">
            <!-- Avatar image -->
            <p  id ="btn_avatar"><img class="avatar__image" src="/images/avatar/${userlogin}avatar.jpg"/><p>
            </div>
              `
            break;
        }
    else{
        var avatar = document.getElementById("log").innerHTML =
            `
            <div class="avatar">
            <!-- Avatar image -->
            <p  id ="btn_avatar"><img class="avatar__image" src="/images/avatar/usernon.png"/><p>
            </div>
              `
    }
}


// menu login/loguot
var menu_check = document.getElementById("btn_avatar")
menu_check.onclick = function () {
    if (login == true) {
        document.getElementById("menu_x").innerHTML =
            `
        <div id="menu_icon_1">
        <a href="#">profile</a> <br>
        <a href="#">help</a> <br>
        <a href="#">settings and security</a>
        <a href="login.html">logout</a> <br>
        </div>
        `
    }
    else {
        document.getElementById("menu_x").innerHTML =
            `
        <div id="menu_icon_2">
        <a href="login.html">login</a> <br> 
        </div>
        `
    }


}
// when mouse leave menu =>> menu off
var mouseleave = document.getElementById("menu_x")
mouseleave.onmouseleave = function () {
    document.getElementById("menu_x").innerHTML =
        `
    `
}

// Product-details page of Product Amounnt
function increment() {
    document.getElementById('demoInput').stepUp();
}
function decrement() {
    document.getElementById('demoInput').stepDown();
}

// Product-details page of Comment
var post = document.getElementById("send");
post.addEventListener("click", function () {
    var commentBoxValue = document.getElementById("comment-box").value;
    var p = document.createElement("p");
    p.innerHTML = "<b>Me: </b>";
    var text = document.createTextNode(commentBoxValue);
    p.appendChild(text);
    document.getElementById("customercomment1").appendChild(p);
});
