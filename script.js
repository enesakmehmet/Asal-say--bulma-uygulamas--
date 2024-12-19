document.getElementById("check-prime").addEventListener("click", function () {
    let sayi = Number(prompt("Lütfen bir sayı giriniz:"));
    let sonuc = true;

    if (sayi < 2) {
        sonuc = false;
    } else {
        for (let i = 2; i <= Math.floor(sayi / 2); i++) {
            if (sayi % i == 0) {
                sonuc = false;
                break;
            }
        }
    }

    if (sonuc) {
        alert(sayi + " asaldır.");
    } else {
        alert(sayi + " asal değildir!");
    }
});
