function handleForm(){
    let submitbtn = document.getElementById('submit');

   let myForm = document.getElementById("myForm");
    myForm.addEventListener('submit',function handleEvent(event){
        event.preventDefault();
        if(submitbtn){
            alert("You cannot submit the form now!");
        }
        myForm.removeEventListener('submit',handleEvent);
    })
    
}


