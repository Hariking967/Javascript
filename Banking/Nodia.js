let uname = localStorage.getItem("uname") || "Arun";
console.log(uname);
document.querySelector(".account-js").innerHTML = uname;
let index = 0;
let customers = JSON.parse(localStorage.getItem("customers"));
console.log(customers);
for (let i = 0; i < customers.length; i++)
{
    if (uname == customers[i]["uname"])
    {
        index = i;
    }
}
function dispBalance()
{
    let customers = JSON.parse(localStorage.getItem("customers"));
    for (let i = 0; i < customers.length; i++)
    {
        if (uname == customers[i]["uname"])
        {
            index = i;
        }
    }
    let balance = customers[index]["balance"];
    document.querySelector(".balance-js").innerHTML = `$${balance}`;
    return balance;
}
dispBalance();

let hamswitch = 0;
let sidebarElem = document.querySelector(".sidebar");
let hamburgerButton = document.querySelector(".hamburger-button");

hamburgerButton.addEventListener('click', () => {
    if (hamswitch == 0) {
        sidebarElem.style.left = "0px";
        hamswitch = 1;
    } else {
        sidebarElem.style.left = "-300px";
        hamswitch = 0;
    }
});

let PayBElem = document.querySelector(".pay-button-js");
PayBElem.addEventListener('click', ()=>{
    let reciever = document.querySelector(".reciever-js").value;
    let amount = parseInt(document.querySelector(".amount-js").value);
    console.log(reciever);
    console.log(amount);
    if (dispBalance() - amount < 0)
    {
        let outerOverlayElem = document.querySelector(".outer-overlay-js");
        outerOverlayElem.innerHTML = `
            <div class="overlay overlay-js">
                <div class="payment-status">
                    <p class="fail">Payment Failed</p>
                    <p class="error">Reason: Not enough money</p>
                    <button class="overlay-ok">OK</button>
                </div>
            </div>
        `;
        document.querySelector(".overlay-ok").addEventListener("click", () => {
            outerOverlayElem.innerHTML = "";
        });
    }
    else
    {
        let customers = JSON.parse(localStorage.getItem("customers"));
        let index = -1;
        let recindex = -1;
        for (let i = 0; i < customers.length; i++)
        {
            if (uname == customers[i]["uname"])
            {
                index = i;
            }
            if (reciever == customers[i]["uname"])
            {
                recindex = i;
            }
        }
        if (recindex == -1)
        {
            let outerOverlayElem = document.querySelector(".outer-overlay-js");
            outerOverlayElem.innerHTML = `
                <div class="overlay overlay-js">
                    <div class="payment-status">
                        <p class="fail">Payment Failed</p>
                        <p class="error">${reciever} do not exist</p>
                        <button class="overlay-ok">OK</button>
                    </div>
                </div>
                `;
                document.querySelector(".overlay-ok").addEventListener("click", () => {
                    outerOverlayElem.innerHTML = "";
                });
        }
        else
        {
            customers[recindex]["balance"] += amount;
            customers[index]["balance"] -= amount;
            localStorage.setItem("customers", JSON.stringify(customers));
            dispBalance();
            let outerOverlayElem = document.querySelector(".outer-overlay-js");
            outerOverlayElem.innerHTML = `
                <div class="overlay overlay-js">
                    <div class="payment-status">
                        <p class="fail">Payment Successful</p>
                        <p class="error">You paid ${amount} to ${reciever}</p>
                        <button class="overlay-ok">OK</button>
                    </div>
                </div>
                `;
                document.querySelector(".overlay-ok").addEventListener("click", () => {
                    outerOverlayElem.innerHTML = "";
                });
        }
    }
});

let AddMoneyBElem = document.querySelector(".add-button-js");
AddMoneyBElem.addEventListener('click', () => {
    let amount = parseInt(document.querySelector(".add-input-js").value) || 0;
    let customers = JSON.parse(localStorage.getItem("customers"));
    customers[index]["balance"] += amount;
    localStorage.setItem("customers", JSON.stringify(customers));
    alert(`Your current Balance is ${customers[index]["balance"]}`);
    dispBalance();
});

let RemMoneyBElem = document.querySelector(".remove-button-js");
RemMoneyBElem.addEventListener('click', () => {
    let amount = parseInt(document.querySelector(".remove-input-js").value) || 0;
    let customers = JSON.parse(localStorage.getItem("customers"));
    customers[index]["balance"] -= amount;
    localStorage.setItem("customers", JSON.stringify(customers));
    alert(`Your current Balance is ${customers[index]["balance"]}`);
    dispBalance();
});         