

function signin(){
    if (loginAcno.value == '' || loginPassword.value == '') {
        alert('please Enter details correctly');
    } else{
        if(loginAcno.value in localStorage){
            let acnoDetails = JSON.parse(localStorage.getItem(loginAcno.value));
            console.log(acnoDetails);
            if(loginPassword.value == acnoDetails.userPassword){
                alert('Login Success');
                location = '../homePage';
            }else{
                alert('incorrect password');
            }
        }else{
            alert('User not found')
        }
    }
}