    // Set the variable and put inside objects with, questions, choices & answers
   var questions = [   
        {
        question:'Venue of the 2022 World Cup:',
        choice:["Senegal","Germany","Qatar","Mexico,USA & Canada"],
        answer:'Quatar'
        },

        {
        question:'It is the mexican player with 5 participations in world championships:',
        choice:["Rafael Marquez","Cuauhtemoc Blanco","Hirving Lozano","Luis Garcia"],
        answer:'Rafael Marquez'
        },

        {
        question:'Champion team of South Africa 2010',
        choice:["Mexico","Spain","Germany","Brazil"],
        answer:'Spain'
        }, 
        
        {
        question:'Most winning team in the world with 5 titles:',
        choice:["Germany","Italy","Brazil","Argentina"],
        answer:'Brazil'
        },

        {
        question:'French player sent off with a red card at the final game of the World Cup in Germany 2006: ',
        choice:["Thierry Henry","Paul Pogba","Frank Ribery","Zinedine Zidane"],
        answer:'Zinedine Zidane'
        },

        {
        question:"Argentina's most controversial player in the World Cups: ",
        choice:["Javier Mascherano","Javier Zanneti","Diego Maradona","Lionel Messi"],
        answer:'Diego Maradona'
        },

        {
        question:"He is the world's top scorer: ",
        choice:["Diego Maradona","Jared Borgetti","Miroslav Klose","Cristiano Ronaldo"],
        answer:'Miroslav Klose'
        },

        {
        question:'He is the best player of the World Cuo in Brazil 2014: ',
        choice:["Thomas Müller","Neyman Jr.","Cristiano Ronaldo","Lionel Messi"],
        answer:'Lionel Messi'
        },

        {
        question:'Team that is having ist first World Cup participation in Russia 2018: ',
        choice:["Senegal","Saudi Arabia","Panama","Peru"],
        answer:'Panama'
        },

        {
        question:'It is the team with the most defeats in the history of the World Cup: ',
        choice:["Colombia","Portugal","Russia","Mexico"],
        answer:'Mexico'
        },
    ];

    var counter = 60;
        var intervalId;

    function run(){
        //Start timer
        //decrease the timer counter every 1 sec
        intervalId = setInterval(decrement, 1000);

        seeQuestions();
    


    }

    //For loop functions for the questions & for the answers
    // This is for the questions
    function seeQuestions(){
        for (var i = 0; i < questions.length; i++){
            var theQuestion = questions[i].question;
            $('#questionsContent').append('<h2>' + theQuestion + '</h2>')
            console.log(theQuestion);
            //This is for the choices 
            for (var j = 0; j < questions[i].choice.length; j++) {
                var theChoice = questions[i].choice[j];
                console.log(theChoice);
                $("#questionsContent").append(
                    "<center><div class='form-check form-check-inline choices'>" +
                    "<input class='form-check-input choicesRadio' type = 'radio' name='inlineRadioOptions" + i + "'" +" id = 'inlineRadio1' value='option1'>" +
                    "<label class='form-check-label choicesName' form ='inlineRadio1'>" + theChoice + "</label></div></center>");
            }

        }

    }
    var numCorrect = 0;
    //Results
    function showResults(){
        if (answer === choice){
            numCorrect++;
        }
    }

    //On submit, show results


    //Timer
   



        //Run the questions
    $("#restartButton").hide();
    $(document).on("click", "#startButton", seeQuestions,);
    $("#startButton").click(function(){
        $("#startButton").hide();
        $("#restartButton").show();      
    });
    //Timer Run 
   
    
    
       // Run the functions 
    

function rightWrong(){

        
};



//For loop functions for the questions & for the answers




