class BankAccount{
    constructor(saldo){
        this.saldo = saldo
    }

    deposit(jumlah){
        let tambah = jumlah //Variabel diisi dengan nilai string bertujuan untuk melakukan pengecekan kondisi

        //Loop yang bertujuan untuk mengecek kondisi agar nilai yang dimasukkan bernilai number
        while(!+tambah/1){
            tambah = prompt(`Sisa saldo anda ${saldo}. Berapa saldo yang mau ditambahkan:`);

            //Pengecekan kondisi ketika tidak jadi menambah saldo
            if(tambah == null){
                break
            }

            //Pengecekan kondisi ketika masukkan tidak bernilai number
            if(!+tambah/1){
                alert('Masukkan angka!!!')
            }     

            if(+tambah<0){
                alert('Jumlah deposit harus lebih dari 0')
            }     
        }
        this.saldo += +tambah
        let sementara = this.saldo
        setTimeout(() => {
            alert(`Deposit ${+tambah} berhasil. Saldo sekarang: ${sementara}`);
        }, 5000); 


    }
    withdraw(jumlah){
        let kurang = jumlah//Variabel diisi dengan nilai string bertujuan untuk melakukan pengecekan kondisi
        
        //Loop yang bertujuan untuk mengecek kondisi agar nilai yang dimasukkan bernilai number atau saldo yang dikurangi tidak lebih dari saldo yang ada
        while(!+kurang/1 || +kurang>this.saldo){
            kurang = prompt(` Berapa saldo yang mau dikurangkan:`);

            //Pengecekan kondisi ketika tidak jadi mengurangi saldo
            if(kurang == null){
                break
            }

            //Pengecekan kondisi ketika saldo yang dikurangi tidak lebih dari saldo yang ada
            if(+kurang>this.saldo){
                alert(`Saldo tidak mencukupi. Sisa saldo anda ${this.saldo}`)
            }  

            //Pengecekan kondisi ketika masukkan tidak bernilai number
            if(!+kurang/1){
                alert('Masukkan angka!!!')
            }   
            hasil = +kurang  
        }
        this.saldo -= +kurang
        let sementara = this.saldo
        setTimeout(() => {
            alert(`Withdraw ${+kurang} berhasil. Saldo sekarang: ${sementara}`);
        }, 5000); 
    }
}


const rekening = new BankAccount(100000);
let bool= true 
//Loop yang digunakan untuk melakukan pengulangan di menu
while(bool){
    let menu = prompt(`Silahkan Pilih Menu.
    1. Tambah Saldo
    2. Kurangi Saldo
    3. Cek Saldo
    4. Keluar`);
    switch (+menu) {
        case 1:
            tAwal = prompt(`Berapa saldo yang mau ditambahkan:`);
            rekening.deposit(+tAwal)
            break;
        case 2:
            kAwal = prompt(`Berapa saldo yang mau dikurangi:`);
            rekening.withdraw(+kAwal)
            break;
        case 3:
            alert(`Sisa saldo anda: ${rekening.saldo}`)
            break;
        default:
            alert(`Sisa saldo akhir anda: ${rekening.saldo}`)
            bool= false
            break;  
    }    
}