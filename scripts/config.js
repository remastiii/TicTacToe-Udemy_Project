/* sva logika */ 


function openPlayerConfig(event){
    const selectedPlayerId = +event.target.dataset.playerid;
    editedPlayer = selectedPlayerId;
    playerConfigElement.style.display = 'block'
    backdrop.style.display = 'block'

}


function closePlayerConfig (){
    playerConfigElement.style.display = 'none';
    backdrop.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errormsg.style.display = '';
    formElement.reset();
}

function savePlayerConfig (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('username').trim( ); /*'          ' => ''*/ 
    
    if (!enteredPlayername){ // if(enteredPlayername === '')
        event.target.firstElementChild.classList.add('error');
        console.dir(event.target.firstElementChild);
        errormsg.style.display = 'block'; 
        setTimeout(()=>errormsg.style.display='none',3000);
        return;
    }


    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data')
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;

    if (editedPlayer === 1) {
        players[0].name = enteredPlayername;
    }else {
        players[1].name = enteredPlayername;
    }

    closePlayerConfig();
}

