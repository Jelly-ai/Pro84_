canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
car_width=100;
car_height=90;
car_image="car1.jpg";
car1_x=10;
car1_y=10;
car2_x=20;
car2_y=20;
function add(){
    background_imgTag= new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    car_imgTag= new Image();
    car_imgTag.onload=uploadcar;
    car_imgTag.src="car1.jpg";
}
function uploadBackground(){
  ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar(){
    ctx.drawImage(car1.jpg);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38")
    {
        up();
        console.log("up");
    }
    if(keyPressed=="40")
    {
        down();
        console.log("down");
    }
    if(keyPressed=="37")
    {
        left();
        console.log("left");
    }
    if(keyPressed=="39")
    {
        right();
        console.log("right");
    }

}
function my_keydown2(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="87")
    {
        up();
        console.log("up");
    }
    if(keyPressed=="83")
    {
        down();
        console.log("down");
    }
    if(keyPressed=="65")
    {
        left();
        console.log("left");
    }
    if(keyPressed=="68")
    {
        right();
        console.log("right");
    }

}
