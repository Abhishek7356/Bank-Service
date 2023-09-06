

function signin() {
    if (loginAcno.value == '' || loginPassword.value == '') {
        alert('please Enter details correctly');
    } else {
        if (loginAcno.value in localStorage) {
            let acnoDetails = JSON.parse(localStorage.getItem(loginAcno.value));
            console.log(acnoDetails);
            document.getElementById('incorrect2').style.display = 'none';
            document.getElementById('loginAcno').style.borderBottom = '2px solid gray';
            if (loginPassword.value == acnoDetails.userPassword) {
                alert('Login Success');
                location = '../homePage';
                document.getElementById('incorrect').style.display = 'none';
                document.getElementById('loginPassword').style.borderBottom = '2px solid gray';
            } else {
                document.getElementById('incorrect').style.display = 'block';
                document.getElementById('loginPassword').style.borderBottom = '2px solid red';
            }
        } else {
            document.getElementById('incorrect2').style.display = 'block';
            document.getElementById('loginAcno').style.borderBottom = '2px solid red';
        }
    }
}