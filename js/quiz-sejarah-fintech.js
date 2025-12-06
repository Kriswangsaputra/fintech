// Bank Soal

const questions = [
    {
        question: 'Apa definisi utama dari FinTech?',
        options: ['Teknologi komunikasi untuk mempercepat akses internet','Penggunaan teknologi digital untuk menciptakan atau meningkatkan layanan keuangan','Sistem keamanan data dalam transaksi perbankan','Layanan telekomunikasi untuk transaksi global'],
        correctAnswer:1
    },
    {
        question: 'Peristiwa apa yang menjadi pemicu utama perkembangan pesat FinTech pada era 3.0?',
        options: ['Peluncuran kartu kredit pertama', 'Penemuan komputer personal','Krisis keuangan global tahun 2008','Pembentukan sistem SWIFT'],
        correctAnswer:2
    },
    {
        question: 'Inovasi penting apa yang menjadi tonggak pada era FinTech 1.0?',
        options:['Internet banking','Blockchain dan cryptocurrency','QRIS untuk transaksi digital','Kemunculan ATM pertama pada tahun 1967'],
        correctAnswer:3
    },
    {
        question: 'Apa fokus utama perkembangan FinTech pada era 3.5?',
        options:['Peningkatan sistem keamanan digital','Ekspansi ke negara berkembang untuk mendorong inklusi keuangan','Pengembangan artificial intelligence untuk bank','Modernisasi perbankan tradisional'],
        correctAnswer:1
    },
    {
        question: 'Apa kontribusi terbesar QRIS bagi perkembangan FinTech di Indonesia?',
        options: ['Menggantikan penggunaan kartu kredit sepenuhnya','Meningkatkan transaksi internasional antarbank','Menyatukan standar pembayaran QR dan memperluas akses transaksi non-tunai','Menghilangkan kebutuhan sistem perbankan'],
        correctAnswer:2
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
        sessionStorage.setItem("modul1_passed", true);
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
