let customers = JSON.parse(localStorage.getItem("customers")) || [
    {
        "uname": "Arun",
        "pwd": "arun123",
        "balance": 0
    },
    {
        "uname": "Bala",
        "pwd": "bala123",
        "balance": 0
    }
];
console.log(customers);

let signin = document.querySelector('.sign-in-js');
signin.addEventListener('click', () => {
    let uname = document.querySelector('.uname-js').value;
    let pwd = document.querySelector('.pwd-js').value;
    let index = -1;
    for (let i = 0; i < customers.length; i++) {;
        if (uname == customers[i]["uname"]) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        alert('Account does not exist');
        window.location.href = 'SignUp.html';
    } else if (customers[index]["pwd"] !== pwd) {
        alert('Incorrect password. Try Again');
        location.reload();
    } else {
        alert(`Your balance is: ${customers[index]["balance"]}`);
        localStorage.setItem("uname", uname);
        window.location.href = '../Noida.html';
    }
});
