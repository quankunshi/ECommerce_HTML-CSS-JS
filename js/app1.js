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
