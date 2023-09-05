

function register() {

    if (regName.value == '' || regAcno.value == '' || regPassword.value == '') {
        alert('please Enter details correctly');
    } else {
        const accountDetails = {};

        accountDetails.userName = regName.value;
        accountDetails.userAcno = regAcno.value;
        accountDetails.userPassword = regPassword.value;
        console.log(accountDetails);
        if (accountDetails.userAcno in localStorage) {
            alert('user allready registered');
        } else {
            localStorage.setItem(regAcno.value, JSON.stringify(accountDetails));
            alert('Registration successfull.');
            location = './signInPage';
            regName.value = '';
            regAcno.value = '';
        }
    }

}