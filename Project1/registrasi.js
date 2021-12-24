function getData(){
    let username = document.getElementById('usernametxt').value
    let fullname = document.getElementById('name').value
    let email = document.getElementById('emailtxt').value
    let age = document.getElementById('age').value
    let male = document.getElementById('male')
    let female = document.getElementById('female')
    let password = document.getElementById('password').value
    let confirmationpassword = document.getElementById('confirmationpassword').value
     let tnc = document.getElementById('agree').checked

    if(username.length == 0){
        alert('Username must be filled!')
    }else if(fullname.length == 0){
        alert('Full Name must be filled!')
    }else if(email.length == 0){
        alert('Email must be filled!')
    }else if(age == 0 || age <= 0){
        alert('Age must be filled!')
    }else if(!male.checked && !female.checked){
        alert('Gender must be filled!')
    }else if(password.length == 0){
        alert('Password must be filled!')
    }else if(confirmationpassword.length == 0){
        alert('Confirmation Password must be filled!')
    }else if(confirmationpassword != password){
        alert('Confirmation Password wrong!')
    }else if(tnc == false){
        alert('You must agree with Terms & Conditions!')
    }else{
        confirm('Successful Welcome to Store Del Luna, '+ fullname)
    }
}