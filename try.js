function hitungBungaTabungan() {
    const initialsavings = parseFloat(document.getElementById('initialSavings').value);
    const annualinterestrate = parseFloat(document.getElementById('annualInterestRate').value);
    const savingperiode = parseInt(document.getElementById('savingPeriod').value);

    const interest = (initialsavings * annualinterestrate * savingperiode) / 100;
    const totalsaving = initialsavings + interest;

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
      Jumlah Tabungan Awal: ${initialsavings} <br>
      Tingkat Bunga Tahunan: ${annualinterestrate}% <br>
      Periode Tabungan (bulan): ${savingperiode} <br>
      Total Tabungan Akhir: ${totalsaving.toFixed(2)} <br>
    `;
    return false;
}