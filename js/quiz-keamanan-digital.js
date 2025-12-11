// Bank Soal

const questions = [
    {
        question: 'Apa prinsip utama yang harus diingat saat menerima tawaran investasi dengan keuntungan sangat tinggi dalam waktu singkat?',
        options: ['Segera investasi sebelum kehabisan kuota','Keuntungan tinggi berarti investasi aman','Jika terlalu bagus untuk jadi kenyataan, biasanya itu penipuan','Investasi tanpa risiko selalu ada'],
        correctAnswer:2
    },
    {
        question: 'Apa tanda paling jelas bahwa suatu pesan yang mengaku dari bank adalah penipuan?',
        options: ['Menggunakan bahasa formal', 'Mengirim notifikasi melalui SMS','Memberi informasi promo','Meminta PIN, OTP, atau password'],
        correctAnswer:3
    },
    {
        question: 'Mengapa pelaku penipuan sering membuat korban panik?',
        options:['Agar korban menghubungi mereka','Agar korban merasa tenang dan percaya','Agar korban bertindak cepat tanpa berpikir','Agar pesan terlihat profesional'],
        correctAnswer:2
    },
    {
        question: 'Langkah paling aman untuk mengecek kebenaran pesan “akun Anda diblokir” adalah...',
        options:['Klik link pada pesan untuk membuka blokir','Membalas pesan dan meminta penjelasan','Verifikasi melalui aplikasi resmi atau call center bank','Mengabaikan semua pesan semacam itu'],
        correctAnswer:2
    },
    {
        question: 'Mana dari berikut ini yang termasuk langkah perlindungan keamanan digital?',
        options: ['Menggunakan password yang sama agar mudah diingat','Menyimpan PIN di catatan ponsel','Melakukan transaksi lewat WiFi umum','Mengaktifkan verifikasi dua langkah (2FA)'],
        correctAnswer:3
    }
];

// pengacakan soal
questions.sort(() => Math.random() - 0.5);

// menampilkan soal ke halaman html
let currentIndex = 0;
let score = 0;

function showQuestion() {
    const container = document.getElementById("inner-container");
    const q = questions[currentIndex];

    container.innerHTML = `
        <div class = "question-box" id="question-box">

            <div class="header-soal" id= "nomor-soal">
                <div class="nomor" id="nomor"><h4>Pertanyaan ${currentIndex+1} / ${questions.length}</h4></div>
                <div class="point" id="point"><h4>Nilai : 20 Point</h4></div>
            </div>

            <h2>${q.question}</h2>

            

            <div class = "options">
                ${q.options.map((option, i) => {
                    const labelHuruf = String.fromCharCode(65+i);
                    return `
                    <input type="radio" class="btn-check" name="options-base" id="option5-${currentIndex}-${i}" autocomplete="off" value="${i}">
                    <label class="btn" for="option5-${currentIndex}-${i}"><strong>${labelHuruf}.</strong> ${option}</label>
            `;}).join("")}
            </div>

        </div>    
    `;
};

showQuestion();

// tombol next
document.getElementById("next-btn").addEventListener("click", nextQuetion);

function nextQuetion() {
    const selected = document.querySelector("input[name='options-base']:checked");

    if (!selected) {
        alert("Pilih jawaban dulu!");
        return;
    }

    // cek jawaban
    const jawabanUser = parseInt(selected.value);
    const jawabanBenar = questions[currentIndex].correctAnswer;

    if (jawabanUser === jawabanBenar) {
        score++;
    }

    // lanjut ke soal berikutnya
    currentIndex++;

    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }

}

// hasil quiz
function showResult() {
    const container = document.getElementById("quiz-container");

    document.getElementById("next-btn").style.display = "none";

    const point = score * 20;

    const savedName = sessionStorage.getItem("namaUser");

    if (score > 3) {
        sessionStorage.setItem("modul3_passed", true);
        return container.innerHTML = `
        <div class="result-box">
            <div class="trophy-icon">
                <i class="fa-solid fa-trophy done"></i>
            </div>

            <div class="congratulation-wrap">
                <h2>Hebat, ${savedName}!</h2>
                <p>Kamu menjawab <strong>${score} benar</strong> dari <strong>${questions.length} soal!</strong></p>
                <div class="point" id="point"><h4>Point Kamu = ${point}</h4></div>
            </div>

            <div class="button-done">
                <a href=modul.html type="button" class="btn btn-primary">Kembali ke Materi</a>
            </div>
        </div>
    `;
    } else {
        return container.innerHTML = `
        <div class="result-box">
            <div class="trophy-icon-gagal">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>

            <div class="congratulation-wrap-gagal">
                <h2>Jangan Patah Semangat, ${savedName}!</h2>
                <p>Kamu menjawab <strong>${score} benar</strong> dari <strong>${questions.length} soal!</strong></p>
                <div class="point" id="point"><h4>Point Kamu = ${point}</h4></div>
                <p>Silakan kerjakan kembali!</p>
            </div>

            <div class="button-gagal">
                <a href=modul.html type="button" class="btn btn-primary">Kembali ke Materi</a>
            </div>
        </div>
    `;
    }
}
