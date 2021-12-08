var myQuestions = [
    {
      question: "What is the best way to describe the famous internet cat?",
      answers: {
        a: 'Angry',
        b: 'Grumpy',
        c: 'Moody'
      },
      correctAnswer: 'b'
    },
    {
      question: "What is the name of the famous Internet dog meme?",
      answers: {
        a: 'Dage',
        b: 'Dogo',
        c: 'Doge'
      },
      correctAnswer: 'c'
    },
    {
        question: "WhO iS iN tHe MeMe CaPtIoN lIkE tHiS?",
        answers: {
          a: 'Spongebob',
          b: 'Patrick',
          c: 'Mr. Krabs'
        },
        correctAnswer: 'a'
    },
    {
        question: "What time is it?",
        answers: {
          a: 'peanut butter and jelly time',
          b: 'Adventure Time',
          c: 'Hero Time'
        },
        correctAnswer: 'a'
    },
    {
        question: "While shouting -Here come dat boi- what is the frog riding?",
        answers: {
          a: 'a duck',
          b: 'a unicorn',
          c: 'a unicycle'
        },
        correctAnswer: 'c'
    },
    {
        question: "Which font is ridiculed endlessly?",
        answers: {
          a: 'Wingdings',
          b: 'times new roman',
          c: 'Comic sans'
        },
        correctAnswer: 'c'
    }
  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      //store the output and the answer choices
      var output = [];
      var answers;
  
      
      for(var i=0; i<questions.length; i++){
        
        //list of answers
        answers = [];
  
        
        for(letter in questions[i].answers){
  
          
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        // add the question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // Combine the output list into one string and place it on the html page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      
      for(var i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // Change the color of the answers to green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show the number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + ' Correct!';
    }
  
    // show questions
    showQuestions(questions, quizContainer);
    
    // when user hits submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }