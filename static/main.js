var counter = 0 
like = document.getElementById('like')
dislike = document.getElementById('dislike')

if(counter == 0)
document.getElementById("count").innerHTML = "No like"; 

 
function clickLike(){

    like.style.color = "black"
    if(dislike.style.color == "black")
    dislike.style.color = "grey"

    counter++;
    if(counter == 1)
    document.getElementById("count").innerHTML = counter + " like";
    else 
    document.getElementById("count").innerHTML = counter + " likes";

}


function clickDislike(){
    
    dislike.style.color = "black"
    if(like.style.color == "black")
    like.style.color = "grey"


    if(counter>0)
    counter--;

    if(counter == 0)
    document.getElementById("count").innerHTML = "No like"; 
    else if(counter == 1)
    document.getElementById("count").innerHTML = counter + " like";
    else
    document.getElementById("count").innerHTML = counter + " likes";
}

 
    

