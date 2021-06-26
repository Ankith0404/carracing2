canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car_1_width = 120;
car_1_height = 70;
car_1_image = "https://image.shutterstock.com/shutterstock/photos/271630361/display_1500/stock-photo-generic-red-car-top-angle-271630361.jpg";
car1_x = 10;
car1_y = 10;    

car_2_width = 120;
car_2_height = 70;
car_2_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
car2_x = 10;
car2_y = 100;

background_image = "https://i.postimg.cc/KzWwHPcq/racing.gif";

function add(){
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground; 
    background_imageTag.src = background_image;

    car_1_imageTag = new Image();
    car_1_imageTag.onload = uploadcar1; 
    car_1_imageTag.src = car_1_image;

    car_2_imageTag = new Image();
    car_2_imageTag.onload = uploadcar2; 
    car_2_imageTag.src = car_2_image;
}

function uploadBackground(){
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car_1_imageTag,car1_x,car1_y,car_1_width,car_2_height);
}

function uploadcar2(){
    ctx.drawImage(car_2_imageTag,car2_x,car2_y,car_2_width,car_2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    KeyPressed = e.keyCode;
    console.log(KeyPressed);
    
    if( KeyPressed == '38'){
        car1_up();
        console.log("Up Arrow Key");
    }

    if(KeyPressed == '40'){
        car1_down();
        console.log("Down Arrow Key");
    }

    if(KeyPressed == '37'){
        car1_left();
        console.log("Left Arrow Key");
    }

    if(KeyPressed == '39'){
        car1_right();
        console.log("right Arrow Key");
    }

    if(KeyPressed == '38'){
        car2_up();
        console.log("Up Arrow Key");
    }

    if(KeyPressed == '40'){
        car2_down();
        console.log("Down Arrow Key");
    }

    if(KeyPressed == '37'){
        car2_left();
        console.log("Left Arrow Key");
    }

    if(KeyPressed == '39'){
        car2_right();
        console.log("right Arrow Key");
    }
}

function car1_up(){
    if(car1_y >= 0){
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed , x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down(){
    if(car1_y <= 500){
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed , x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left(){
    if(car1_y >= 0){
        car1_x = car1_x - 10;
        console.log("When up arrow is pressed , x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right(){
    if(car1_y <= 500){
        car1_x = car1_x + 10;
        console.log("When up arrow is pressed , x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}







function car2_up(){
    if(car2_y >= 0){
        car2_y = car2_y - 10;
        console.log("When up arrow is pressed , x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down(){
    if(car2_y <= 500){
        car2_y = car2_y + 10;
        console.log("When down arrow is pressed , x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left(){
    if(car2_y >= 0){
        car2_x = car2_x - 10;
        console.log("When up arrow is pressed , x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right(){
    if(car2_y <= 500){
        car2_x = car2_x + 10;
        console.log("When up arrow is pressed , x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}


if(car1_x > 700){
    console.log("car1_won");
    document.getElementById("game_status").innerHTML = "Car 1 Won!!";
}
if(car2_x > 700){
    console.log("car2_won");
    document.getElementById("game_status").innerHTML = "Car 2 Won!!";
}