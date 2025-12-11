

const totalModul = 5;

function checkModuls() {
    for (let i = 1; i <= totalModul; i++) {
        const card = document.querySelector(`#modul${i}`);
        
        // membuka modul 1 agar selalu terbuka
        if (i === 1) {
            card.classList.remove("locked");
            continue;
        }

        // Pengecekan apakah modul sebelumnya sudah lulus
        const key = `modul${i-1}_passed`;
        const keyPassed = sessionStorage.getItem(key) === "true";

        // jika prevKey tidak terpenuhi atau modul sebelumnya belum lulus
        if (!keyPassed) {
            // ditambahkan class locked
            card.classList.add("locked");
        } else {
            // jika sudah lulus hilangkan locked
            card.classList.remove("locked");
        };
    };
};

// Pastikan DOM sudah siap sebelum dicek
document.addEventListener("DOMContentLoaded", () => {
    checkModuls();

    console.log("Modul status loaded:",
        sessionStorage.getItem("modul1_passed"),
        sessionStorage.getItem("modul2_passed"),
        sessionStorage.getItem("modul3_passed"),
        sessionStorage.getItem("modul4_passed"),
        sessionStorage.getItem("modul5_passed")
    );
});


// fungsi untuk menyimpan nama

// ambil data dari inputan
const namaUser = document.getElementById("userName");
const btnSubmit = document.getElementById("submit");

// cek nama jika sudah ada
const savedName = sessionStorage.getItem("namaUser");

if (savedName) {
    document.getElementById("form-input-name").style.display = "none";

    namaUser.value = savedName;
    const haloText = document.querySelector(".halo");
    haloText.innerHTML = `<strong>Halo, ${savedName}! </strong>👋`;
}

// proses simpan nama
btnSubmit.addEventListener("click", () => {
    const nama = namaUser.value.trim();

    sessionStorage.setItem("namaUser", nama);

    const haloText = document.querySelector(".halo");
    haloText.innerHTML = `<strong>Halo, ${nama}! </strong>👋`;

    document.getElementById("form-input-name").style.display = "none";
});


const btnEnterModul = document.getElementById("btn-fintech");

btnEnterModul.addEventListener("click", (e) => {

    const savedName = sessionStorage.getItem("namaUser");

    if (!savedName) {
        e.preventDefault();
        alert ("Masukan nama kamu dulu!");
        return
    }
})