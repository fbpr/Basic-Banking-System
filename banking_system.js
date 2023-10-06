// Febry Prasetya FGA X BINAR BE 1
class BankAccount {
  constructor(saldo) {
    if (this.constructor === BankAccount) {
      throw new Error('Cannot access this class');
    }
    this.saldo = saldo;
  }

  deposit = (nominal) => {
    return new Promise((resolve, reject) => {
      if (isNaN(nominal) || nominal <= 0) {
        reject('Masukkan format nominal yang benar');
      } else {
        setTimeout(() => {
          this.saldo += nominal;
          resolve(this.saldo);
        }, 2000);
      }
    });
  };

  withdraw = (nominal) => {
    return new Promise((resolve, reject) => {
      if (isNaN(nominal) || nominal <= 0) {
        reject('Masukkan format nominal yang benar');
      } else if (nominal > this.saldo) {
        reject('Saldo tidak mencukupi');
      } else {
        setTimeout(() => {
          this.saldo -= nominal;
          resolve(this.saldo);
        }, 2000);
      }
    });
  };
}

class BankingSystem extends BankAccount {
  constructor(saldo = 0) {
    super(saldo);
  }

  async deposit(nominal) {
    try {
      await super.deposit(nominal);
    } catch (error) {
      return error;
    }
  }

  async withdraw(nominal) {
    try {
      await super.withdraw(nominal);
    } catch (error) {
      return error;
    }
  }
}

const account = new BankingSystem();
document.getElementById('saldo').value = account.saldo;

const depositButton = document.getElementById('deposit');
depositButton.addEventListener('click', async () => {
  try {
    const nominal = window.prompt(
      'Masukkan jumlah saldo yang ingin ditambahkan'
    );

    if (!nominal) {
      throw 'Deposit dibatalkan';
    }

    document.getElementById('status').textContent = 'Processing...';

    const deposit = await account.deposit(Number(nominal));

    document.getElementById('status').textContent = 'Deposit Berhasil';
    document.getElementById('saldo').value = deposit;
  } catch (error) {
    document.getElementById('status').textContent = error;
  }
});

const withdrawButton = document.getElementById('withdraw');
withdrawButton.addEventListener('click', async () => {
  try {
    const nominal = window.prompt('Masukkan jumlah saldo yang ingin dikurangi');

    if (!nominal) {
      throw 'Withdraw dibatalkan';
    }

    document.getElementById('status').textContent = 'Processing...';

    const withdraw = await account.withdraw(Number(nominal));

    document.getElementById('status').textContent = 'Withdraw Berhasil';
    document.getElementById('saldo').value = withdraw;
  } catch (error) {
    document.getElementById('status').textContent = error;
  }
});
