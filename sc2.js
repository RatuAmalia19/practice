function salary() {
    const basicSalary = parseFloat(document.getElementById('basicsalary').value)
    const bonus = parseFloat(document.getElementById('bons').value)
    const deduction = parseFloat(document.getElementById('deduc').value)

    let netSalary = basicSalary + bonus - deduction

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
    Gaji pokok: ${basicSalary} <br>
    Bonus: ${bonus} <br>
    Potongan Gaji: ${deduction} <br>
    Gaji Bersih: ${netSalary}
    `
    return false;
}