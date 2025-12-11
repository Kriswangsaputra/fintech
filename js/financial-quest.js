// Bank Soal

const questions = [
    {
        level: 1,
        title: 'Level 1 — Fintech Explorer',
        questions: [
            {
                question: 'Fintech adalah...',
                options: ['Teknologi yang dipakai di industri makanan', 'Layanan keuangan berbasis teknologi digital', 'Game yang bisa menghasilkan uang', 'Aplikasi untuk chatting'],
                correctAnswer: 1
            },
            {
                question: 'Contoh fintech yang paling umum digunakan masyarakat:',
                options: ['Dompet digital (e-wallet)', 'Kamera smartphone', 'Aplikasi edit foto', 'Kalkulator'],
                correctAnswer: 0
            },
            {
                question: 'Tujuan utama adanya fintech adalah...',
                options: ['Membuat orang belanja lebih banyak', 'Memudahkan akses layanan keuangan', 'Menghilangkan bank', 'Menjual data pribadi pengguna'],
                correctAnswer: 1
            }
        ]
    },
    {
        level: 2,
        title: 'Level 2 — Fintech Detective',
        questions: [
            {
                question: 'Contoh Aplikasi dari Jenis Fintech P2P Lending:',
                options: ['KoinWorks', 'DANA/OVO', 'Kitabisa.com', 'Midtrans'],
                correctAnswer: 0
            },
            {
                question: 'Contoh Aplikasi dari Jenis Fintech E-Wallet:',
                options: ['KoinWorks', 'Midtrans', 'Kitabisa.com', 'DANA/OVO'],
                correctAnswer: 3
            },
            {
                question: 'Contoh Aplikasi dari Jenis Fintech Crowdfunding:',
                options: ['DANA/OVO', 'Kitabisa.com', 'Midtrans', 'KoinWorks'],
                correctAnswer: 2
            },
            {
                question: 'Contoh Aplikasi dari Jenis Fintech Payment Gateway:',
                options: ['KoinWorks', 'Midtrans', 'Kitabisa.com', 'DANA/OVO'],
                correctAnswer: 1
            }
        ]
    },
    {
        level: 3,
        title: 'Level 3 — Cyber Guardian',
        questions: [
            {
                question: 'OTP boleh diberikan ke customer service yang mengaku dari pihak resmi.',
                options: ['Benar', 'Salah'],
                correctAnswer: 1
            },
            {
                question: 'Password yang kuat harus mengandung kombinasi angka, huruf besar, huruf kecil, dan simbol.',
                options: ['Benar', 'Salah'],
                correctAnswer: 0
            },
            {
                question: 'Menggunakan Wi-Fi publik untuk transaksi keuangan itu aman tanpa VPN.',
                options: ['Benar', 'Salah'],
                correctAnswer: 1
            }
        ]
    },
    {
        level: 4,
        title: 'Level 4 — Law Protector',
        questions: [
            {
                question: 'Kamu menerima SMS hadiah undian, diminta klik link. Apa yang harus kamu lakukan?',
                options: ['Klik saja siapa tahu beneran', 'Abaikan dan laporkan sebagai spam', 'Kirim ke teman biar sama-sama tahu', 'Isi data pribadi biar hadiahnya dikirim'],
                correctAnswer: 1
            },
            {
                question: 'Saat transaksi online, kamu melihat logo gembok di URL browser. Artinya:',
                options: ['Website sedang di-maintenance', 'Website tidak aman', 'Koneksi terenkripsi', 'Koneksi lambat'],
                correctAnswer: 2
            },
            {
                question: 'Siapa yang berperan mengawasi fintech di Indonesia dalam hal regulasi?',
                options: ['NASA', 'OJK', 'FIFA', 'Bank Dunia'],
                correctAnswer: 1
            },
            {
                question: 'Mana contoh perlindungan konsumen dalam fintech?',
                options: ['Data pribadi bebas dibagikan ke pihak manapun', 'Tidak boleh ada syarat & ketentuan', 'Penyedia fintech wajib transparan soal biaya layanan', 'Tidak ada tanggung jawab jika ada penipuan'],
                correctAnswer: 2
            },
            {
                question: 'Kalau kamu jadi korban phishing, langkah pertama yang tepat adalah...',
                options: ['Panik dan uninstall aplikasi', 'Abaikan saja', 'Ubah password + hubungi layanan fintech terkait', 'Posting di Instagram dulu'],
                correctAnswer: 2
            }
        ]
    }
];

// pengacakan soal
// questions.sort(() => Math.random() - 0.5);

// menampilkan soal ke halaman html
let currentLevel = 0;
let currentIndex = 0;
let score = 0;

function showQuestion() {
    const container = document.getElementById("inner-container");
    const levelTitle = document.getElementById("kuis-tab");

    const level = questions[currentLevel];
    const q = level.questions[currentIndex];

    levelTitle.innerText = `${level.title}`;

    container.innerHTML = `
        <div class="question-box">

            <div class="header-soal">
                <div class="nomor"><h4>Pertanyaan ${currentIndex+1} / ${level.questions.length}</h4></div>
                <div class="point"><h4>Nilai : 20 Point</h4></div>
            </div>

            <h2>${q.question}</h2>

            <div class="options">
                ${q.options.map((option, i) => {
                    const labelHuruf = String.fromCharCode(65+i);
                    return `
                    <input type="radio" class="btn-check" name="options-base" id="option-${currentLevel}-${currentIndex}-${i}" value="${i}">
                    <label class="btn" for="option-${currentLevel}-${currentIndex}-${i}"><strong>${labelHuruf}.</strong> ${option}</label>
                    `;
                }).join("")}
            </div>

        </div>
    `;
}

showQuestion();


// tombol next
document.getElementById("next-btn").addEventListener("click", nextQuestion);

function nextQuestion() {
    const selected = document.querySelector("input[name='options-base']:checked");

    if (!selected) {
        alert("Pilih jawaban dulu!");
        return;
    }

    const jawabanUser = parseInt(selected.value);
    const jawabanBenar = questions[currentLevel].questions[currentIndex].correctAnswer;

    if (jawabanUser === jawabanBenar) {
        score++;
    }

    // Soal berikutnya di level yang sama
    currentIndex++;

    // Jika masih ada soal — tampilkan soal berikutnya
    if (currentIndex < questions[currentLevel].questions.length) {
        showQuestion();
        return;
    }

    // Jika soal habis → pindah level
    currentLevel++;
    currentIndex = 0;

    // Jika masih ada level — lanjut
    if (currentLevel < questions.length) {
        showQuestion();
        return;
    }

    // Jika semua level selesai — tampilkan hasil
    showResult();
}


// hasil quiz
function showResult() {
    const totalSoal = questions.reduce((total, level) => {
        return total + level.questions.length;
    }, 0);

    const container = document.getElementById("quiz-container");

    document.getElementById("next-btn").style.display = "none";

    const point = score * 20;

    const savedName = sessionStorage.getItem("namaUser");

    if (score > 13) {
        sessionStorage.setItem("modul5_passed", true);
        return container.innerHTML = `
        <div class="result-box">
            <div class="trophy-icon">
                <i class="fa-solid fa-trophy done"></i>
            </div>

            <div class="congratulation-wrap">
                <h2>Hebat, ${savedName}!</h2>
                <p>Kamu menjawab <strong>${score} benar</strong> dari <strong>${totalSoal} soal!</strong></p>
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
                <p>Kamu menjawab <strong>${score} benar</strong> dari <strong>${totalSoal} soal!</strong></p>
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
