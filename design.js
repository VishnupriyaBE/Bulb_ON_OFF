function changeImage(){
    var pic=document.getElementById("bulb");
    console.log(pic);
    if(pic.src.match("on")){
        console.log("ON");
        pic.src="bulb off.jpeg";
    }
    else{
        console.log("OFF");
        pic.src="bulb on.jpeg";
    }
}