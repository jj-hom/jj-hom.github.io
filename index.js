function showSlides() {
    var num, x, y, i, find; 
    var imagesArray = ["Purdue banner Engineering Fountain.jpeg", "Purdue Engineering Fountain 2.jpeg",
                       'mic1.jpg','mic2.jpg', 'mic3.jpg', 'mic4.png', 'mic5.png', 'mic5.png', 'mic7.jpg', 'mic8.png',
                       'mic9.png', 'mic10.jpg', 'mic11.jpg', 'MIgroup.jpg', 'cpuoa.png', 'cpupl.png', 'cpusc.png',
                       'cpuan.png', 'cpuis.png', 'cpuwa.jpg', 'esp321.png', 'esp323.png'
  ];
    var spotArray = ['animages1', 'animages2', 'animages3', 'animages4', 'animages5'];

    for(i = 0; i < 5; i++){
        var rand_bool = Math.random() < .5;

        if(rand_bool){ //Change to Random Picture with Random Portion
            num = Math.floor(Math.random() * imagesArray.length);
            x = Math.floor(Math.random() * 100);
            y = Math.floor(Math.random() * 100);

            find = document.getElementById(spotArray[i]);

            if(!isNaN(num) && !(spotArray[i]===null)){find.style.backgroundImage = "url('./img/" + imagesArray[num] + "')";}
            if(!(spotArray[i]===null)){find.style.backgroundPosition = x + "% " +  y + "%";}

            find.classList.remove("fade"); //Trigger Fade Animation
            find.offsetWidth;
            find.classList.add("fade");
        }
    }
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}


showSlides();
console.log(window.innerWidth);

// init
var maxx = 2000;//document.body.clientWidth;
var maxy = 500;//document.body.clientHeight;
var halfx = maxx / 2;
var halfy = maxy / 2;
var canvas = document.getElementById("move");
canvas.width = maxx;
canvas.height = maxy;
var context = canvas.getContext("2d");
var dotCount = 200;
var dots = [];
for (var i = 0; i < dotCount; i++) {  
  dots.push(new dot());// create dots
}

function render() {  // dots animation
  context.fillStyle = "#FFF8EE";
  context.fillRect(0, 0, maxx, maxy);
  for (var i = 0; i < dotCount; i++) {
    dots[i].draw();
    dots[i].move();
  }
  requestAnimationFrame(render);
}


function dot() {  // dots class // @constructor
  this.rad_x = 2 * Math.random() * halfx + 1;
  this.rad_y = 1.2 * Math.random() * halfy + 1;
  this.alpha = Math.random() * 360 + 1;
  this.speed = Math.random() * 100 < 50 ? 1 : -1;
  this.speed *= 0.1;
  this.size = Math.random() * 5 + 1;
  this.color = Math.floor(Math.random() * 256);
}

dot.prototype.draw = function() {// drawing dot
  var dx = halfx + this.rad_x * Math.cos(this.alpha / 180 * Math.PI);// calc polar coord to decart
  var dy = halfy + this.rad_y * Math.sin(this.alpha / 180 * Math.PI);
  context.fillStyle = "rgb(" + this.color + "," + this.color + "," + this.color + ")";// set color
  context.fillRect(dx, dy, this.size, this.size);// draw dot
};


dot.prototype.move = function() {// calc new position in polar coord
  this.alpha += this.speed;
  if (Math.random() * 100 < 50) {this.color += 1;} 
  else {this.color -= 1;}
};

render();// start animation

