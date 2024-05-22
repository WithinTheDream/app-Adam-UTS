function TampilkanData() {
var NIM = document.getElementById("NIM").value;
var Nama = document.getElementById("Nama").value;
var MATKUL = document.getElementById("MATKUL").value;
var NILAIAKHIR = parseFloat(document.getElementById("NILAIAKHIR").value);

var NILAIHURUF = "";
var INDEKSNILAI = "";

if (NILAIAKHIR > 100){
    alert("Nilai harus dimulai dari 0 sampai 100")
    return;
}else if (NILAIAKHIR >= 85){
    NILAIHURUF = "A";
    INDEKSNILAI = "4.00 (Pujian)";
}else if(NILAIAKHIR >= 79 ){
    NILAIHURUF = "A-";
    INDEKSNILAI = "3.67 (Sangat Memuaskan)"
}else if(NILAIAKHIR >= 74){
    NILAIHURUF = "B+";
    INDEKSNILAI = "3.33 (Sangat Memuaskan)"
}else if(NILAIAKHIR >= 69){
    NILAIHURUF = "B";
    INDEKSNILAI = "3.00 (Memuaskan)"
}else if(NILAIAKHIR >= 64){
    NILAIHURUF = "B-";
    INDEKSNILAI = "2.67 (Memuaskan)"
}else if(NILAIAKHIR >= 59){
    NILAIHURUF = "C+";
    INDEKSNILAI = "2.33";
}else if(NILAIAKHIR >= 54){
    NILAIHURUF = "C";
    INDEKSNILAI = "2.00";
}else if(NILAIAKHIR >= 41){
    NILAIHURUF = "D";
    INDEKSNILAI = "1.00";
}else{
    NILAIHURUF = "E";
    INDEKSNILAI = "0.00";
}

var HasilDiv = document.getElementById("hasil");
HasilDiv.innerHTML = "<h3>Hasil Input</h3>" + 
    "<p>NIM: " + NIM + "</p>" +
    "<p>Nama: " + Nama + "</p>" +
    "<p>Mata Kuliah: " + MATKUL + "</p>" +
    "<p>Nilai Akhir: " + NILAIAKHIR + "</p>" +
    "<p>Nilai Huruf: " + NILAIHURUF + "</p>" +
    "<p>Indeks Nilai: " + INDEKSNILAI + "</p>"

}

function tampilkanDataArray() {
        // Data array
        var NamaMhs = ["Gojo Satoru", "Megumi Fushiguro", "Itadori yuji"];
        var TahunLahir = [1990, 1988, 1992];
        var HandphoneMhs = ["08123456789", "08567891234", "08111222333"];

        // Metode 1: Looping untuk menampilkan data array
        document.write("Metode 1:" + "<br>");
        for (var i = 0; i < NamaMhs.length; i++) {
            document.write("Nama: " + NamaMhs[i] + ", Tahun Lahir: " + TahunLahir[i] + ", Handphone: " + HandphoneMhs[i] + "<br>");
        }

        //Penggabungan data array menjadi satu objek
        document.write("Metode 2: <br>bisa dilihat di console" + "<br>");
        var biodata = [];
        for (var i = 0; i < NamaMhs.length; i++) {
            biodata.push({
                nama: NamaMhs[i],
                tahunLahir: TahunLahir[i],
                handphone: HandphoneMhs[i]
            });
        }
        console.log(biodata);

        //forEach
        document.write("Metode 3: <br>");
        NamaMhs.forEach(function(nama, index) {
            document.write("Nama: " + nama + ", Tahun Lahir: " + TahunLahir[index] + ", Handphone: " + HandphoneMhs[index] + "<br>");
        });
    }

function ResetForm(){
    document.getElementById("Nilaiform").reset();
}
