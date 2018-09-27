$(document).ready(function(){ //Document.ready is to start the proyect 

    //set the variables
    var timeRemaining = $("#timeArea");
    var startButton = $("#startButton");
    var buttonArea = $("#buttonArea");
    var questionArea = $("#questionArea");
    var answersArea = $("#answersArea");
    var results = $("#results");
    var correct = $("#correctAnswers");
    var incorrect = $("#incorrectAnswers");
    var restart = $("#reset");
    var timeDiv = $("#timeDiv");
    var quizArea = $("#quizArea");
    
    // Variable to count the question array
    var counter = 0;
    correct = 0;
    incorrect = 0;
    unanswered = 0;

    //making array so we have the questions on the trivia with object
    var questions = [   // Set the variable and put inside objects with, questions, choices & answers
        {
        question:'Venue of the 2022 World Cup:',
        choice:["Senegal","Germany","Qatar","Mexico,USA & Canada"],
        answer: 2
        },

        {
        question:'It is the mexican player with 5 participations in world championships:',
        choice:["Rafael Marquez","Cuauhtemoc Blanco","Hirving Lozano","Luis Garcia"],
        answer: 0
        },

        {
        question:'Champion team of South Africa 2010',
        choice:["Mexico","Spain","Germany","Brazil"],
        answer: 1
        }, 
        
        {
        question:'Most winning team in the world with 5 titles:',
        choice:["Germany","Italy","Brazil","Argentina"],
        answer: 2
        },

        {
        question:'French player sent off with a red card at the final game of the World Cup in Germany 2006: ',
        choice:["Thierry Henry","Paul Pogba","Frank Ribery","Zinedine Zidane"],
        answer: 3
        },

        {
        question:"Argentina's most controversial player in the World Cups: ",
        choice:["Javier Mascherano","Javier Zanneti","Diego Maradona","Lionel Messi"],
        answer: 2
        },

        {
        question:"He is the world's top scorer: ",
        choice:["Diego Maradona","Jared Borgetti","Miroslav Klose","Cristiano Ronaldo"],
        answer: 2
        },

        {
        question:'He is the best player of the World Cuo in Brazil 2014: ',
        choice:["Thomas Müller","Neyman Jr.","Cristiano Ronaldo","Lionel Messi"],
        answer: 3
        },

        {
        question:'Team that is having ist first World Cup participation in Russia 2018: ',
        choice:["Senegal","Saudi Arabia","Panama","Peru"],
        answer: 2
        },

        {
        question:'It is the team with the most defeats in the history of the World Cup: ',
        choice:["Colombia","Portugal","Russia","Mexico"],
        answer: 3
        },

    ]   

    //First we have to hide everything but the header and start button
    timeDiv.hide();
    results.hide(); 
    quizArea.hide();

    console.log(questions[counter].question);
    console.log(questions[counter].choice);
    console.log(questions[counter].answer);
    console.log(questions.length);

    //add an on.click to make the start button to work 
    startButton.on("click", function(){
        buttonArea.hide();
        quizArea.show();
        loadQuestionsAndAnswers();
    })

    //Add a function to add the question array
    function loadQuestionsAndAnswers (){
        //This is just to print the information of the arrays inside the quizArea div 
        //Add local variables for the arrays
        questionsMain = questions[counter].question;
        choicesMain = questions[counter].choice;
        answer = questions[counter].answer;
        //Print the question into the div 
        $("#questionArea").html('<h4>' + questionsMain + '</h4>');
        for (let i = 0; i < choicesMain.length; i++) {
            var choiceOption = $("<div>");
            choiceOption.addClass("options");
            choiceOption.attr("data-index", i);
            choiceOption.text(choicesMain[i]);
            answersArea.append(choiceOption);
        }
        // make the class a selector so you can choose the any answer 
        $(".options").on("click", function(){
            var userSelect = $(this).data("index");
    
            if (userSelect === answer){
                correct++;
                console.log("correct");
                console.log(correct);
            } else {
                incorrect++;
                console.log("incorrect");
                console.log(incorrect)
            }

        })
        
    }

}) //Closing document ready 


   



