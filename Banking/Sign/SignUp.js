let customers = JSON.parse(localStorage.getItem("customers"));
console.log(customers);
let signup = document.querySelector('.sign-up-js');
signup.addEventListener('click', () => {
    let uname = document.querySelector('.uname-js').value;
    let pwd = document.querySelector('.pwd-js').value;
    let index = -1;
    for (let i = 0; i < customers.length; i++) {;
        if (uname == customers[i]["uname"]) {
            index = i;
            break;
        }
    }
    if (index == -1)
    {
        customers.push({
            "uname": uname,
            "pwd": pwd,
            "balance": 0
        });
        console.log(customers)
        localStorage.setItem("customers",JSON.stringify(customers));
        localStorage.setItem("uname",uname);
        window.location.href = '../Noida.html';
    }
    else
    {
        alert('Account already exists');
        window.location.href = 'SignIn.html';
    }
})