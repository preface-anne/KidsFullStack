var hulk = 0;
var ironman = 0;
var captainamerica = 0;

var questions = [
  [
    ["How would you describe yourself?"],
    ["Smart", "Sarcastic", "Leader"]
  ],[
    ["Which of these jobs appeals to you the most?"],
    ["Scientist", "Engineer", "Soldier"]
  ],[
    ["Which of these colours appeals to you the most?"],
    ["Green", "Yellow", "Blue"]
  ],[
    ["Which of these is more important to you?"],
    ["Knowledge", "Money", "Friendship"]
  ],[
    ["Which of these would you do in your spare time?"],
    ["Draw", "Build", "Play"]
  ]
];

function changeQuestion() {
  document.getElementById("question").style.display = "block";
  document.getElementById("button1").style.display = "block";
  document.getElementById("button2").style.display = "block";
  document.getElementById("button3").style.display = "block";
  document.getElementById("name").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementById("description").style.display = "none";
  document.getElementById("image").style.display = "none";
  
  var randomQuestion = Math.floor(Math.random()*questions.length);
  document.getElementById("question").innerHTML = questions[randomQuestion][0];
  document.getElementById("button1").innerHTML = questions[randomQuestion][1][0];
  document.getElementById("button2").innerHTML = questions[randomQuestion][1][1];
  document.getElementById("button3").innerHTML = questions[randomQuestion][1][2];
}

function addpoint(selected) {
	//if only one line, no need curly brackets
	//if more than one, need the curly brackets
  if (selected == 1) {
    hulk += 1;
  } else if (selected == 2) {
    ironman += 1;
  } else if (selected == 3) {
    captainamerica += 1;
  }
}

var buttonclicked = 0;

//function lowerCase

function button1_clicked() {
  changeQuestion();
  addpoint(1);
  result();
  buttonclicked += 1;
}

function button2_clicked() {
  changeQuestion();
  addpoint(2);
  result();
  buttonclicked += 1;
}

function button3_clicked() {
  changeQuestion();
  addpoint(3);
  result();
  buttonclicked += 1;
}

function start() {
  document.getElementById("question").style.display = "none";
  document.getElementById("button1").style.display = "none";
  document.getElementById("button2").style.display = "none";
  document.getElementById("button3").style.display = "none";
  document.getElementById("name").style.display = "none";
  document.getElementById("image").style.display = "none";
}

function result() {
  if (buttonclicked == 4) {
    if (hulk > 1) {
      document.getElementById("name").innerHTML = "<b>You resemble The Hulk!</b><br><br>Fiercely protective of friends and family, you are always there to help out in a time of need. Sometimes seen as a bit of a loose canon you always have the best intentions at heart.";
      document.getElementById("image").src = "https://i.ytimg.com/vi/MAfIvBgChjQ/maxresdefault.jpg"
    } else if (ironman > 1) {
      document.getElementById("name").innerHTML = "<b>You resemble Iron Man!</b><br><br>Brash but brilliant billionaire Tony Stark is now bankrolling his Super Hero dream-team in an ongoing effort to protect the world from the evil forces that he knows are out there. Stark carries the weight of the world on his shoulders.";
      document.getElementById("image").src = "https://i.ytimg.com/vi/MAfIvBgChjQ/maxresdefault.jpg";
      document.getElementById("image").src = "https://cdnb.artstation.com/p/assets/images/images/029/797/471/large/pupz-dzn-keyboard.jpg?1598659852"
   } else if (captainamerica > 1) {
     document.getElementById("name").innerHTML = "<b>You resemble Captain America!</b><br><br>Captain America has fully embraced the mantle of team leader, he continues to reconcile with what he has lost in a world he does not totally recognise. Outmatched and on the run, he must find a way to rally The Avengers.";
     document.getElementById("image").src = "https://cdn3.movieweb.com/i/article/pgcFyKTA1rTFYcnUxDhHlAoGzZuDbP/1200:100/Avengers-Endgame-Captain-America-Time-Travel-Explained.jpg"
   }
    document.getElementById("name").style.display = "block";
    document.getElementById("question").style.display = "none";
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("image").style.display = "block";
  }
}