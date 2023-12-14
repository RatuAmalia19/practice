// console.log("Hello ODP BNI 297")
// console.log("Pernyataan 1")
// console.log("Pernyataan 2")

// //Variabel let
// let halo = "Hai all"
// let pesan

// pesan = halo
// console.log(pesan)

// //Variabel Const tidak bisa diubah
// const bumi = "bulat"
// console.log(bumi)

// let x = 10
// let y = 19
// let result = x + y
// console.log(result)

// let a = 4
// if (a > 3.5 && a <= 4) {
//     console.log("Cumlaude")
// } else if (a <= 3.5 && a >= 3) {
//     console.log("Baik")
// } else if (a < 3) {
//     console.log("Cukup")
// } else {
//     console.log("Grade tidak ditemukan")
// }

// let array = [1, 2, 3, 4]
// console.log(array[1])
// console.log(array.length)

// let arr = ["adit", "novita", "ratu", "widya"]
// console.log(arr[0])

// console.log(typeof array.toString())
// //hapus nomor belakang
// console.log(array.pop())
// console.log(array)

// console.log(array.push(6, 7, 8))
// console.log(array)
// //hapus nomor depan
// console.log(array.shift())
// console.log(array)

// console.log(array.unshift(0))
// console.log(array)

// let arr2 = [30, 12, 51, 3]
// //ascending
// console.log(arr2.sort())
// //descending
// console.log(arr2.reverse())

// console.log(arr2.sort(function (a, b) { return b - a }))

// function urut(arr3) {
//     for (let i = 0; i < arr3.length - 1; i++) {
//         for (let j = 0; j < arr3.length - 1; j++) {
//             if (arr3[j] > arr3[j + 1]) {
//                 let temp = arr3[j]
//                 arr3[j] = arr3[j + 1]
//                 arr3[j + 1] = temp
//             }
//         }
//     }
//     return arr3
// }

// let arr4 = [31, 66, 20, 1]
// console.log(urut(arr4))

function hitungBungaTabungan() {
    const initialsavings = parseFloat(prompt("Masukkan jumlah tabungan awal:"));
    const annualinterestrate = parseFloat(prompt("Masukkan tingkat bunga tahunan (dalam persen):"));
    const savingperiode = parseInt(prompt("Masukkan periode tabungan dalam bulan:"));

    const interest = (initialsavings * annualinterestrate * savingperiode);
    const totalsaving = initialsavings + interest;

    document.writeln(`
      Jumlah Tabungan Awal: ${initialsavings} <br>
      Tingkat Bunga Tahunan: ${annualinterestrate}% <br>
      Periode Tabungan (bulan): ${savingperiode} <br>
      Total Tabungan Akhir: ${totalsaving.toFixed(2)} <br>
    `);
}
hitungBungaTabungan()
// Panggil fungsi untuk menghitung bunga tabungan