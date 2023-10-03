let saldo = 0 // Nilai awal saldo

// Fungsi untuk menambah saldo
function tambahSaldo(){
    let tambah = 'a' //Variabel diisi dengan nilai string bertujuan untuk melakukan pengecekan kondisi
    let hasil = 0

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
    }
    return hasil = +tambah
}

// Fungsi untuk mengurangi saldo
function kurangiSaldo(){
    let kurang = 'a'//Variabel diisi dengan nilai string bertujuan untuk melakukan pengecekan kondisi
    let hasil = 0

    //Loop yang bertujuan untuk mengecek kondisi agar nilai yang dimasukkan bernilai number atau saldo yang dikurangi tidak lebih dari saldo yang ada
    while(!+kurang/1 || +kurang>saldo){
        kurang = prompt(`Sisa saldo anda ${saldo}. Berapa saldo yang mau dikurangkan:`);

        //Pengecekan kondisi ketika tidak jadi mengurangi saldo
        if(kurang == null){
            break
        }

        //Pengecekan kondisi ketika saldo yang dikurangi tidak lebih dari saldo yang ada
        if(+kurang>saldo){
            alert(`Saldo tidak mencukupi. Sisa saldo anda ${saldo}`)
        }  

        //Pengecekan kondisi ketika masukkan tidak bernilai number
        if(!+kurang/1){
            alert('Masukkan angka!!!')
        }   
        hasil = +kurang  
    }
    return hasil
}

let bool= true 
//Loop yang digunakan untuk melakukan pengulangan di menu
while(bool){
    let menu = prompt(`Sisa saldo anda ${saldo}.
    Pilih menu
    1. Tambah Saldo
    2. Kurangi Saldo
    3. Keluar`);
    switch (+menu) {
        case 1:
            saldo += tambahSaldo()
            console.log(`Tambah ${saldo}`)
            break;
        case 2:
            if(saldo>0){
                saldo -= kurangiSaldo()
                console.log(`Kurang ${saldo}`)
                break;
            }else{
                alert(`Sisa saldo anda ${saldo}. Tidak bisa dikurangi`)
            }
            break;
        default:
            bool= false
            break;  
    }    
}









