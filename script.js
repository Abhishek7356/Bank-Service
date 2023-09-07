


function register() {

    if (regName.value == '' || regAcno.value == '' || regPassword.value == '') {
        alert('please Enter details correctly');
    } else {
        const accountDetails = {};
        accountDetails.userName = regName.value;
        accountDetails.userAcno = regAcno.value;
        accountDetails.userPassword = regPassword.value;
        accountDetails.userBalance = 0;
        console.log(accountDetails);
        if (accountDetails.userAcno in localStorage) {
            alert('user allready registered');
        } else {
            localStorage.setItem(regAcno.value, JSON.stringify(accountDetails));
            localStorage.setItem(`userName${regAcno.value}`, regName.value);
            alert('Registration successfull.');
            location = './signInPage';
            regName.value = '';
            regAcno.value = '';
        }
    }

}



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
                Acno = acnoDetails.userPassword;
                alert('Login Success');
                location = '../homePage';
                let UserKey = localStorage.getItem(`userName${loginAcno.value}`)
                localStorage.setItem("userName", UserKey)
                localStorage.setItem("userDetails", JSON.stringify(acnoDetails));
                localStorage.setItem("userAcno",acnoDetails.userAcno);
                console.log(UserKey);
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

function pageLoad() {
    document.getElementById('Username').innerHTML = `Welcome ${localStorage.getItem("userName")}`;
    let balance = JSON.parse(localStorage.getItem("userDetails"));
    document.getElementById('amount').innerHTML = `&#8377; ${balance.userBalance}`
}

function deposite() {
    let deposite = document.getElementById('deposite');
    let password = document.getElementById('transPassword');
    let amount = document.getElementById('amount');
    if (deposite.value == '' || password.value == '') {
        alert('please Enter the amount');
    } else {
        let userDetails = JSON.parse(localStorage.getItem("userDetails"));
        console.log(userDetails);
        if (password.value == userDetails.userPassword) {
            let depoAmount = Number(deposite.value);
            console.log(depoAmount);
            userDetails.userBalance += depoAmount;
            amount.innerHTML = `&#8377; ${userDetails.userBalance}`;
            localStorage.setItem("userDetails", JSON.stringify(userDetails));
            alert("Amount credited succesfully")
            deposite.value = '';
            password.value = '';
        } else {
            alert('Incorrect Password');
        }
    }
}

function withdraw() {
    let withdraw = document.getElementById('withdraw');
    let wpassword = document.getElementById('wPassword');
    let amount = document.getElementById('amount');
    if (withdraw.value == '' || wpassword.value == '') {
        alert('please Enter the amount');
    } else {
        let userDetails = JSON.parse(localStorage.getItem("userDetails"));
        console.log(userDetails);
        if (wpassword.value == userDetails.userPassword) {
            let depoAmount = Number(withdraw.value);
            console.log(depoAmount);
            userDetails.userBalance -= depoAmount;
            amount.innerHTML = `&#8377; ${userDetails.userBalance}`;
            localStorage.setItem("userDetails", JSON.stringify(userDetails));
            alert("Amount Debited succesfully")
            withdraw.value = '';
            wpassword.value = '';
        } else {
            alert('Incorrect Password');
        }
    }
}


function pageUnload(){
    let acno = localStorage.getItem("userAcno");
    let userDetails = localStorage.getItem("userDetails");
    localStorage.setItem(acno,userDetails);
}

function clearAll(){
    localStorage.clear();
    location = '../signInPage'
}