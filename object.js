function mahasiswa(nama, jurusan) {
    this.nam = nama
    this.jur = jurusan
    this.sapa = function () {
        console.log("Halo, nama saya " + this.nam + " dari jurusan " + this.jur)
    }
}

let mahasiswa1 = new mahasiswa("Ratu", "Sistem Informasi")

mahasiswa1.sapa()

function fetchapi() {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((data) => console.log(data))
}
