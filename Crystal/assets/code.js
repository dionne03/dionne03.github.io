//Set variables of the counters and scores
var score = 0;
var win = 0;
var lose = 0; 

//set variables on crystals 
var crystalPink;
var crystalPurple;
var crystalSilver;
var crystalYellow;

//Set the random number for the target

/*var target = Math.ceil((Math.random() * 101) + 19);
        crystalPink = Math.ceil(Math.random() * 12);
        crystalPurple = Math.ceil(Math.random() * 12);
        crystalSilver = Math.ceil(Math.random() * 12);
        crystalYellow = Math.ceil(Math.random() * 12); */


var target = Math.floor((Math.random() * 101) + 19);
        crystalPink = Math.floor((Math.random() * 11) + 1);
        crystalPurple = Math.floor((Math.random() * 11) + 1);
        crystalSilver = Math.floor((Math.random() * 11) + 1);
        crystalYellow = Math.floor((Math.random() * 11) + 1);   

var allCrystal = crystalPink + crystalPurple + crystalSilver + crystalYellow;   



        console.log("pink: " + crystalPink);
        console.log("purple: " + crystalPurple);
        console.log("silver: " + crystalSilver);
        console.log("yellow: " + crystalYellow);  
        console.log("target: " + target); 
        // console.log("score: " + score);
        console.log("all crystals: " + allCrystal);




 $("#newGame").on("click", function(){
  $("#target").text(target);
  $("#score").text(0);
  $("#wins").text(0);
  $("#loses").text(0);

});



function reset(){
  score = 0;
  console.log("reset works");
  target = Math.floor((Math.random() * 101) + 19);
  $("#target").text(target);
  $("#score").text(0);

};

  
function winLose(){
  if(score === target) {
    alert('you win');
    $('#wins').text( win += 1);
   
    
    reset();
 
    
   
  
  } else if(score > target) { 
    alert ('You lose');
    $('#loses').text( lose += 1);
    
   
    reset();

    } else {
    // alert('getting closer, pick again');
  }
}          


$("#target").text(" " + target);

// first function
$("#pink").on("click", function () {
    score += crystalPink;  
    /*alert(crystalPink);*/
    $('#score').text(score);
    winLose();
  });

  $("#purple").on("click", function () {
    score += crystalPurple;
    /*alert(crystalPurple);*/
    $('#score').text(score);
    winLose();

  });

  $("#silver").on("click", function () {
    score += crystalSilver;
    /*alert(crystalSilver);*/
    $('#score').text(score);
    winLose();
   
  });

  $("#yellow").on("click", function () {
    score += crystalYellow;
    /*alert(crystalYellow);*/
    $('#score').text(score);
    winLose();
   

  });

  



  
 

  //if targetscore === score, then win and run a reset function
  //if else targetscore > score, then lose and run a reset function
  //else pick again
  

  //write a reset function to reset var's and generate random crystal values

 
  