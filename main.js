
////THUNDERDOME//////

function challenger(opts){
  var opts = opts || {};
  this.health = opts.health || 500+"hp";
  this.name = opts.name || "unamed challenger";
  this.strength = opts.strength || 10;
  this.about = opts.about || "no information";
  this.type = opts.type || "no information";
  this.image =opts.image || "No Image";
  this.animate =opts.animate || "none";
  this.char =opts.char || "none";
  this.miss= 0;
  this.attack= function(opponent){
    opponent.fight(this);
  };
  this.fight = function(opponent){
    var random = Math.floor(Math.random() *10 +1);
    if (random > 4){
      if (this.health < 1){
        console.log("DEADmcdeaderson");
        if (this.health <10){
          console.log('executed');
        }
        else{
          console.log('did not execute');
        }
      }
      else {
        this.health = this.health - opponent.strength;
        console.log('HIT!');
        $('.boxStatus').html('').append("<p>"+"HIT!"+"</p>");
    }
  }
  else{
    opponent.miss = opponent.miss + 1;
    console.log("miss!");
    $('.boxStatus').html('').append("<p>"+"MISS!"+"</p>");
    }
  };
}

var robot = new challenger({
  name: "K177-R",
  type:"Robot",
  health:1000,
  about: "A military drone of unknown origin, armed to the core with a 40mm grenade launcher and two .30 caliber machine guns, it is programmed to kill.",
  strength:20,
  image:"<img src='robot.png'/>",
  char:"<img src='robotFrame1.png'/>",
  animate:"<div class='robotAnimate'></div>"
});

var drifter = new challenger({
  name: "Jim",
  type:"drifter",
  health:800,
  about:"Jim is a drifter from the wastes. Armed with his trusty shotgun, he rides his motorcyle through the dunes... trying to forget...",
  strength:100,
  image: "<img src='drifter.png'/>",
  animate:"<div class='drifterAnimate'></div>",
  char:"<img src='drifterFrame1.png'/>"
});

var tribal = new challenger({
  name: "walks with silence",
  type:"post war tribal",
  health:500,
  about:"The strongest and brightest of the Los Angeles tribe, she uses her bow and silent step to defeat her foes before they even know she's there",
  strength:30,
  image:"<img src='tribal.png'/>"
});

var mutant = new challenger({
  name:"Sun'abish",
  type:"nuclear mutant",
  health:1000,
  about:"This golliath gains its strength from radiation exposure causing it super strength and resiliance. Its motives are unclear.",
  strength:40,
});

var aboutDrifter = $( ".characters" ).append(
      "<p>"+drifter.image+"</p>"+
      "<p>"+"Name:"+drifter.name+"</p>"+
      "<p>"+"ocupation:"+drifter.type+"</p>"+
      "<p>"+"Bio:"+drifter.about+"</p>"+
      "<p>"+"Strength:"+drifter.strength+"</p>");
var aboutRobot = $( ".characters" ).append(
      "<p>"+robot.image+"</p>"+
      "<p>"+"Name:"+robot.name+"</p>"+
      "<p>"+"Type:"+robot.type+"</p>"+
      "<p>"+"Bio:"+robot.about+"</p>"+
      "<p>"+"Strength:"+robot.strength+"</p>");
var aboutTribal = $( ".characters" ).append(
      "<p>"+tribal.image+"</p>"+
      "<p>"+"Name:"+tribal.name+"</p>"+
      "<p>"+"Origin:"+tribal.type+"</p>"+
      "<p>"+"Bio:"+tribal.about+"</p>"+
      "<p>"+"Strength:"+tribal.strength+"</p>");


function Startup(){
  $('.startgame').on("click", function(){
    document.getElementById("main").classList.toggle("show");
  });
}


function challenger1dropDown(){
 document.getElementById("dropdownID").classList.toggle("show");
}
function challenger2dropDown(){
 document.getElementById("dropdownID2").classList.toggle("show");
}

//
// function battle(player1,player2){
//
// }



$(document).ready(function(){
  var player1;
  var player2;

  $('.drifter1').one("click", function(){
    console.log('clicked');
    $('.player1img').css("background-image","url('drifter.png')");
    $('.player1name').html('').append("<p>"+drifter.name+"</p>");
    $(".player1Fight").append('<p>'+drifter.char+"</p>");
    player1=drifter;
    console.log(player1);

    $('.health1').html('').append("<p>"+drifter.health+"</p>");
    });

  $('.robot1').one("click", function(){
    console.log('clicked');
    $('.player1img').css("background-image","url('robot.png')");
    $('.player1name').html('').append("<p>"+robot.name+"</p>");
    player1 =robot;
    $('.health1').html('').append("<p>"+robot.health+"</p>");
    console.log(player1);
  });

  $('.drifter2').one("click", function(){
    console.log('clicked');
    $('.player2img').css("background-image","url('drifter.png')");
    $('.player2name').html('').append("<p>"+drifter.name+"</p>");
    player2 =drifter;
    console.log(player2);
    $('.health2').html('').append("<p>"+drifter.health+"</p>");
    });

  $('.robot2').one("click", function(){
    console.log('clicked');
    $('.player2img').css("background-image","url('robot.png')");
    $('.player2name').html('').append("<p>"+robot.name+"</p>");
    $(".player2Fight").append('<p>'+robot.char+"</p>");
    player2 =robot;
    console.log(player2);
   $('.health2').html('').append("<p>"+robot.health+"</p>");
  });

  $('#fightBtn').on("click", function(){
    console.log(player1.attack(player2));
    console.log(player2.health);
    $('.health2').prepend("<p>"+player2.health+"</p>");
    $(".player1Fight").html('').append("<p class='player1char'>"+player1.animate+"</p>");
    if (player2.health< 1){
      console.log('player1 wins!');
      $(".battleStatus").append("<p>"+player1.name+""+"wins!"+"</p>");
    }
  });

  $('#fightBtn2').on("click", function(){
    console.log(player2.attack(player1));
    console.log(player1.health);
    $('.health1').prepend("<p>"+player1.health+"</p>");
    $(".player2Fight").html('').append("<p class='player2char'>"+player2.animate+"</p>");
    if (player1.health< 1){
      console.log('player2 wins!');
      $(".boxStatus").prepend("<p>"+player2.name+""+"wins!"+"</p>");
    }
  });
});

  var pressed =false;
  $(document).keydown(function(e){
    if(!pressed){
      width= $(this).width();
      height= $(this).height();
      switch (e.which){
        case 37: ////left
        $('.player1Fight').stop().animate({
          left: '-=' + width
        }, 1000);
        break;
        case 39: ///right
        $('.player1Fight').stop().animate({
          left: '+=' + width
        }, 1000);
        break;
      }
    }
    pressed=true;
  }).keyup(function(){
    $('.player1Fight').stop();
    pressed = false;
  });
