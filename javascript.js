const ROCK = 'ROCK';
        const PAPER = 'PAPER';
        const SCISSOR = 'SCISSOR';


        //javascript change bla bla



        let score=JSON.parse(localStorage.getItem('score'));
        if(score===null){
    score={
        won:0,
        lose:0,
        tie:0
             };
            } 
            document.querySelector('.js-button').innerHTML=`wins:${score.won}.loses:${score.lose}.ties:${score.tie}`;
            
     function playGame(playMove){
        const computer= pickComputerMove();
        let result='';
        if(playMove=== ROCK){
           
           if(computer=== ROCK){
           result='tie..';}
           else if(computer=== PAPER){
            result='You lose :(';
           }
           else if(computer=== PAPER){
           result='You won!!!';
        }
    }
        else if(playMove=== PAPER){
            if(computer=== PAPER){
           result='tie..';}
           else if(computer=== SCISSOR){
            result='You lose :(';
           }
           else if(computer=== ROCK){
           result='You won!!!';
        }
   }
       else if(playMove=== SCISSOR){
        if(computer=== SCISSOR){
           result='tie..';}
           else if(computer=== ROCK){
            result='You lose :(';
           }
           else if(computer=== PAPER){
           result='You won!!!';
        }
  }
  if(result==='You won!!!'){
    score.won++;
  }
  else if(result=== 'You lose :('){
    score.lose++;
  }
  else if(result==='tie..'){
    score.tie++;
  }
  localStorage.setItem('score',JSON.stringify(score));
  updatescore();
 document.querySelector('.js-result').innerHTML=result;
 document.querySelector('.js-move').innerHTML=` 
    You
    <img src="assets/images/${playMove}.png"
    class="style-img">
    <img src="assets/images/${computer}.png"
    class="style-img">
    computer choice`;
  
  
     }

     function updatescore(){
        document.querySelector('.js-button').innerHTML=`wins:${score.won}.loses:${score.lose}.ties:${score.tie}`;
      
     }


     function pickComputerMove(){
        let computer='';
        const random=Math.random();
        if(random>=0 && random<1/3){
            computer= ROCK;
        }
        else if(random>=1/3 && random<2/3){
            computer= PAPER;
        }
        else if(random>=2/3 && random<1){
            computer= SCISSOR;
        }
        return computer;
        
     }