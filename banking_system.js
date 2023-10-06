// Febry Prasetya FGA X BINAR BE 1
class BankAccount {
  #saldo;
  constructor(saldo) {
    // Abstraction
    if (this.constructor === BankAccount) {
      throw new Error('Cannot direct access to this class');
    }
    this.#saldo = saldo;
  }

  // Encapsulation
  #deposit(nominal) {
    return new Promise((resolve, reject) => {
      if (isNaN(nominal) || nominal <= 0) {
        reject(new Error('Masukkan format nominal yang benar'));
      } else {
        setTimeout(() => {
          this.#saldo += nominal;
          resolve(this.#saldo);
        }, 2000);
      }
    });
  }

  // Encapsulation
  #withdraw(nominal) {
    return new Promise((resolve, reject) => {
      if (isNaN(nominal) || nominal <= 0) {
        reject(new Error('Masukkan format nominal yang benar'));
      } else if (nominal > this.#saldo) {
        reject(new Error('Saldo tidak mencukupi'));
      } else {
        setTimeout(() => {
          this.#saldo -= nominal;
          resolve(this.#saldo);
        }, 2000);
      }
    });
  }

  depositSaldo(nominal) {
    return this.#deposit(nominal);
  }

  withdrawSaldo(nominal) {
    return this.#withdraw(nominal);
  }

  getSaldo() {
    return this.#saldo;
  }
}

//Inheritance
class BankingSystem extends BankAccount {
  constructor(saldo = 0) {
    super(saldo);
  }

  depositSaldo(nominal) {
    return super.depositSaldo(nominal);
  }

  withdrawSaldo(nominal) {
    return super.withdrawSaldo(nominal);
  }

  saldo() {
    return super.getSaldo();
  }
}

// Object Instantiation
const account = new BankingSystem();
document.getElementById('saldo').value = account.saldo();

// DOM
const depositButton = document.getElementById('deposit');
depositButton.addEventListener('click', async () => {
  try {
    const nominal = window.prompt(
      'Masukkan jumlah saldo yang ingin ditambahkan'
    );

    if (!nominal) {
      throw new Error('Deposit dibatalkan');
    }

    document.getElementById('status').textContent = 'Processing...';

    const deposit = await account.depositSaldo(Number(nominal));

    document.getElementById('status').textContent = 'Deposit Berhasil';
    document.getElementById('saldo').value = deposit;
  } catch (error) {
    document.getElementById('status').textContent = error.message;
  }
});

const withdrawButton = document.getElementById('withdraw');
withdrawButton.addEventListener('click', async () => {
  try {
    const nominal = window.prompt('Masukkan jumlah saldo yang ingin dikurangi');

    if (!nominal) {
      throw new Error('Withdraw dibatalkan');
    }

    document.getElementById('status').textContent = 'Processing...';

    const withdraw = await account.withdrawSaldo(Number(nominal));

    document.getElementById('status').textContent = 'Withdraw Berhasil';
    document.getElementById('saldo').value = withdraw;
  } catch (error) {
    document.getElementById('status').textContent = error.message;
  }
});
