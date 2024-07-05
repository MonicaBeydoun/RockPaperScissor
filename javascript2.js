const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
let score



        const initGame = () => {
          
            score=JSON.parse(localStorage.getItem('score'));
            if(score===null)
                score={ won:0, lose:0, tie:0};
    
            document.querySelector('.Results').innerHTML=`Wins: ${score.won} - Ties: ${score.tie} - Loses: ${score.lose}`;
                
    
        }


initGame();


     const playGame = playerMove => {

        const computerChoice= getComputerChoice();
        const results = getResults(playerMove,computerChoice)
         updateScore(results)
         updateView(playerMove, computerChoice);

     }

     const getResults = (playerMove, computerChoice) => {
         let result='';

         if(playerMove=== ROCK){
             if(computerChoice=== ROCK){
                 result='tie..';}
             else if(computerChoice=== PAPER){
                 result='You lost :(';
             }
             else if(computerChoice=== PAPER){
                 result='You won!';
             }
         }
         else if(playerMove=== PAPER){
             if(computerChoice=== PAPER){
                 result='tie..';}
             else if(computerChoice=== SCISSOR){
                 result='You lost :(';
             }
             else if(computerChoice=== ROCK){
                 result='You won!';
             }
         }
         else if(playerMove=== SCISSOR){
             if(computerChoice=== SCISSOR){
                 result='tie..';}
             else if(computerChoice=== ROCK){
                 result='You lost :(';
             }
             else if(computerChoice=== PAPER){
                 result='You won!';
             }
         }
         return result
     }


         const getComputerChoice = () =>{
            let computerChoice='';
            const random=Math.random();
            if(random>=0 && random<1/3){
                computerChoice= ROCK;
            }
            else if(random>=1/3 && random<2/3){
                computerChoice= PAPER;
            }
            else if(random>=2/3 && random<1){
                computerChoice= SCISSOR;
            }
            return computerChoice;
         }

        const updateScore = results => {

            if(results==='You won!'){
                score.won++;
            }
            else if(results=== 'You lost :('){
                score.lose++;
            }
            else if(results==='tie..'){
                score.tie++;
            }

            localStorage.setItem('score',JSON.stringify(score));
        }

        const updateView = (playerMove, computerChoice) => {
 document.querySelector('.Results').innerHTML=`Wins: ${score.won} - Ties: ${score.tie} - Loses: ${score.lose}`;
 if(playerMove && computerChoice){
    document.querySelector('.YourHand').innerHTML=`<img src="assets/images/${playerMove}.png" class="" alt="img">`;
    document.querySelector('.ComputerHand').innerHTML=`<img src="assets/images/${computerChoice}.png" class="" alt="img">`;
 }
 else {
    document.querySelector('.YourHand').innerHTML=``;
    document.querySelector('.ComputerHand').innerHTML=``;
 }

        }




        const reset = () => {
            score.lose=0;
            score.tie=0;
            score.won=0;
            localStorage.removeItem('score');
            updateView()
        }