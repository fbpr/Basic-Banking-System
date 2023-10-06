// Febry Prasetya FGA X BINAR BE 1
class BankAccount {
  constructor(saldo) {
    if (this.constructor === BankAccount) {
      throw new Error('Cannot access this class');
    }
    this.saldo = saldo;
  }

  deposit = (nominal) => {
    // const nominal = Number(
    //   window.prompt('Masukkan nominal saldo yang ingin Anda tambahkan:')
    // );

    // if (isNaN(nominal) || nominal < 0) {
    //   alert('Anda harus memasukkan format nominal yang benar');
    //   return this.tambahSaldo();
    // }

    this.saldo += nominal;
    return;
  };

  withdraw = (nominal) => {
    // const nominal = Number(
    //   window.prompt('Masukkan nominal saldo yang ingin Anda kurangkan:')
    // );

    // if (isNaN(nominal) || nominal < 0) {
    //   alert('Anda harus memasukkan format nominal yang benar');
    //   return this.kurangiSaldo();
    // }

    // if (nominal > this.saldo) {
    //   alert('Saldo Anda tidak mencukupi, mohon ulangi kembali');
    //   return this.kurangiSaldo();
    // }

    this.saldo -= nominal;
    return;
  };
}

module.exports = BankAccount;
// Febry Prasetya FGA X BINAR BE 1
class BankAccount {
  constructor(saldo) {
    this.saldo = saldo;
  }

  tambahSaldo = () => {
    const nominal = Number(
      window.prompt('Masukkan nominal saldo yang ingin Anda tambahkan:')
    );

    if (isNaN(nominal) || nominal < 0) {
      alert('Anda harus memasukkan format nominal yang benar');
      return this.tambahSaldo();
    }

    this.saldo += nominal;
    return;
  };

  kurangiSaldo = () => {
    const nominal = Number(
      window.prompt('Masukkan nominal saldo yang ingin Anda kurangkan:')
    );

    if (isNaN(nominal) || nominal < 0) {
      alert('Anda harus memasukkan format nominal yang benar');
      return this.kurangiSaldo();
    }

    if (nominal > this.saldo) {
      alert('Saldo Anda tidak mencukupi, mohon ulangi kembali');
      return this.kurangiSaldo();
    }

    this.saldo -= nominal;
    return;
  };

  menu = () => {
    const pilihan = window.prompt(
      `Selamat Datang di Bank Binar\nSaldo Anda: Rp. ${this.saldo}\n\nMenu:\n1. Tambah Saldo\n2. Kurang Saldo\n3. Keluar\n\nMasukkan pilihan Anda:`
    );

    switch (pilihan) {
      case '1':
        this.tambahSaldo();
        this.menu();
        break;
      case '2':
        this.kurangiSaldo();
        this.menu();
        break;
      case null:
      case '3':
        break;
      default:
        alert('Input yang Anda masukkan salah, mohon ulangi kembali');
        this.menu();
    }

    return;
  };
}

let account = new BankAccount(0);
account.menu();
