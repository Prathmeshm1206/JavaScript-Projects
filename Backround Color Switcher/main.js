const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){           // for each loop for iteration  all the buttons
    

    // callback function for event generate

   button.addEventListener('click', function(e){                ///mouse event (callback function)
       if(e.target.id === 'grey')
       {
        body.style.backgroundColor = e.target.id;
       }
       if(e.target.id === 'white')
       {
        body.style.backgroundColor = e.target.id;
       }
       if(e.target.id === 'blue')
       {
        body.style.backgroundColor = e.target.id;
       }
       if(e.target.id === 'yellow')
       {
        body.style.backgroundColor = e.target.id;
       }

    });
    
});