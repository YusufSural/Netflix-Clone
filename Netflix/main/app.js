function toggleCevap(element) {
    var cevapAlt = element.nextElementSibling;
    var digerCevaplar = document.querySelectorAll('.sorular-alt');

    for (var i = 0; i < digerCevaplar.length; i++) {
        if (digerCevaplar[i] !== cevapAlt) {
            digerCevaplar[i].style.display = 'none';
        }
    }

    if (cevapAlt.style.display === "none") {
        cevapAlt.style.display = "block";
    } else {
        cevapAlt.style.display = "none";
    }
}