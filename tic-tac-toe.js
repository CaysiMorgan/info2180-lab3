window.onload= function(){
    const game = document.getElementById("game");
    const status = document.getElementById("status");
    const board = document.getElementById("board");
    const controls= document.getElementsByClassName("controls");
    const button = document.getElementsByClassName("btn")[0];

  
   
    const element = board.querySelectorAll('div');
    let play='X';
    let positionList = ['', '', '', '', '', '', '', '', ''];
    
  // Adding squares to screen
    for(let i=0; i<=8; i++){
        element[i].setAttribute("class","square");

        
    }
    
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

 
    //actions
    element.forEach( (elem, index) => {
        elem.addEventListener('click', () => userAction(elem, index));
        elem.addEventListener('mouseover', function(){
            elem.classList.add('hover');
        });
        elem.addEventListener('mouseout', function(){
            elem.classList.remove('hover');
        });
    });

    function checkWinner(){
        for(let a=0; a<=7; a++){
            const winner= winningConditions[a];
          
            const num1= positionList[winner[0]];
            const num2 = positionList[winner[1]];
            const num3 = positionList[winner[2]];
            if (num1 === ''|| num2 === ''|| num3===''){
                continue;
            }  
            // if position1 is = to position 2 and = to position 3 then you won
            if (num1=== num2 && num2 === num3){
                status.innerHTML= 'Congratulations! ' + num1 + ' is the winner';
                status.classList.add('you-won');
                break;
            }     
        }
    }
   // decide which letter is to be played
    const userAction= (elem,index) =>{
        console.log(elem.innerText)
        if(elem.innerText !== 'X' || elemm.innerText !== 'O'){
            elem.innerText= play;
            elem.classList.add(play);
            positionList[index]=play;
            console.log(positionList);
            checkWinner();
            if(play === 'X'){
                play='O';

            }else{
                play='X';
            }
        }

    }

    button.addEventListener('click', ()=>{
        positionList=['', '', '', '', '', '', '', '', ''];
        status.innerHTML= 'Move your mouse over a square and click to play an X or an O.'
        status.classList.remove('you-won');
        element.forEach(elem =>{
            elem.innerText ='';
            elem.classList.remove('X');
            elem.classList.remove('O');
        });
    });
}