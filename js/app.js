var customer = [
    {
        username: 'vanthien',
        password: 'vanthien',
        info: {
            name: "Vân Thiên",
            sex: "male",
            age: 18,
            address: "đoán xem"
        }
    },
    {
        username: 'nhaty',
        password: 'nhaty',
        info: {
            name: "Nhất Ý",
            sex: "male",
            age: 25,
            address: "hỏi làm gì"
        }
    },
    {
        username: 'hainhu',
        password: 'hainhu',
        info: {
            name: "Hải Như",
            sex: "female",
            age: 15,
            address: "không cho biết đâu"
        }
    },
]

var action = {
    login: 0,
    userlogin: ""
}

var button = document.getElementById('btn_login');
button.onclick = function () {
    var username = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    let tmp = 0;
    for (var i = 0; i < customer.length; i++) {
        if (username == customer[i].username && password == customer[i].password) {
            tmp = 0;
            window.location = "../html/service.html"
        }
        else {
            tmp++;
        }
    }
    if (tmp != 0) {
        document.getElementById("error").innerHTML = "Username or password is incorrect";
    }
       
};

// function myFunction(login) {
//     if(login != 0){
//         var ava = document.getElementById("ava").innerHTML ="hello"
//         return ava;
//     }
// }
// window.myFunction(action.login); 