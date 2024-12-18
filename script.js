  // my Data
  let Ameer = {
    Balance: 1000,
    username: "ameer",
    password: "1234",
    accountNumber: "123456789",
  };

  // Login Function
  document.getElementById("loginButton").addEventListener("click", () => {
    const logon = document.getElementById("username").value;
    const logpd = document.getElementById("password").value;

    if (Ameer.username === logon && Ameer.password === logpd) {
      // Show Dashboard
      document.body.innerHTML = `
        <header>Dashboard</header>
        <main>
          <h1>Welcome to Your Dashboard</h1>
          <div class="buttons">
            <button onclick="creditIn()">Credit In</button>
            <button onclick="transfer()">Transfer</button>
            <button onclick="bankBalance()">Check Bank Balance</button>
            <button onclick="accountInfo()">View Account Info</button>
          </div>
          <div id="actionResult" style="margin-top: 20px; font-size: 1.2rem;"></div>
        </main>
      `;
    } else {
      document.getElementById("validation").innerText = "Wrong Username/Password";
    }
  });

  // Dashboard Functions
  function creditIn() {
    const actionResult = document.getElementById("actionResult");
    actionResult.innerHTML = `
      <h2>Credit In</h2>
      <input type="number" id="creditAmount" placeholder="Enter amount to credit">
      <button onclick="confirmCreditIn()">Confirm</button>
    `;
  }

  function confirmCreditIn() {
    const creditAmount = parseInt(document.getElementById("creditAmount").value);
    if (creditAmount > 0) {
      Ameer.Balance += creditAmount;
      document.getElementById("actionResult").innerText = `Amount credited successfully! New balance: ${Ameer.Balance}`;
    } else {
      document.getElementById("actionResult").innerText = "Invalid amount. Please try again.";
    }
  }

  function transfer() {
    const actionResult = document.getElementById("actionResult");
    actionResult.innerHTML = `
      <h2>Transfer</h2>
      <input type="number" id="transferAmount" placeholder="Enter amount to transfer">
      <button onclick="confirmTransfer()">Confirm</button>
    `;
  }

  function confirmTransfer() {
    const transferAmount = parseInt(document.getElementById("transferAmount").value);
    if (transferAmount > 0 && transferAmount <= Ameer.Balance) {
      Ameer.Balance -= transferAmount;
      document.getElementById("actionResult").innerText = `Amount transferred successfully! New balance: ${Ameer.Balance}`;
    } else if (transferAmount > Ameer.Balance) {
      document.getElementById("actionResult").innerText = "Insufficient balance. Try again.";
    } else {
      document.getElementById("actionResult").innerText = "Invalid amount. Please try again.";
    }
  }

  function bankBalance() {
    const actionResult = document.getElementById("actionResult");
    actionResult.innerHTML = `<h2>Your Current Balance is: ${Ameer.Balance}</h2>`;
  }

  function accountInfo() {
    const actionResult = document.getElementById("actionResult");
    actionResult.innerHTML = `
      <h2>Account Information</h2>
      <p>Username: ${Ameer.username}</p>
      <p>Account Number: ${Ameer.accountNumber}</p>
      <p>Current Balance: ${Ameer.Balance}</p>
    `;
  }