document.getElementById('open-profile').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});


var sliderIndex = 1;
showDivs(sliderIndex);

function showDivs(n) {
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        sliderIndex = 1;
    }
    if (n < 1) {
        sliderIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[sliderIndex - 1].style.display = "block";
}

function plusDivs(n) {
    showDivs(sliderIndex += n);
}

setInterval(function() {
    plusDivs(1);
}, 4000);


function showDateTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    var day = date.getDate().toString().padStart(2, '0');
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    var seconds = date.getSeconds().toString().padStart(2, '0');

    var dateTimeString = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
    return dateTimeString;
}


function saveData() {
    var nama = document.getElementById("nama").value;
    var tgllahir = document.getElementById("tgl-lahir").value;
    var selectedGender = document.querySelector('input[name="gender"]:checked').value;
    var pesan = document.getElementById("pesan").value;


    
    var ppsan = document.getElementById("table2");
    // Validasi: Cek jika salah satu input kosong
    if (nama === "" || tgllahir === "" || !selectedGender || pesan === "") {
        alert("Harap isi semua kolom!");
        return;
    }

    ppsan.innerHTML = "Save @: " + showDateTime() + "<br> Nama: " + nama + "<br>Tanggal Lahir: " + tgllahir + "<br>Jenis Kelamin: " + selectedGender + "<br>Pesan: " + pesan;
}

var radioButtons = document.querySelectorAll('input[name="gender"]');
radioButtons.forEach(function (radio) {
    radio.checked = false;
});

var simpanButton = document.querySelector("button");
simpanButton.addEventListener("click", function() {
    saveData();
});