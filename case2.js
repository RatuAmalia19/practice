let basicSalary = parseFloat(prompt("Masukkan Gaji Pokok Karyawan:"))
let bonus = parseFloat(prompt("Masukkan Bonus Karyawan:"))
let deduction = parseFloat(prompt("Masukkan Potongan Gaji Karyawan:"))

let netSalary = basicSalary + bonus - deduction

document.writeln(`Gaji pokok: ${basicSalary} <br>
                    Bonus: ${bonus} <br>
                    Potongan Gaji: ${deduction} <br>
                    Gaji Bersih: ${netSalary}
                `)
