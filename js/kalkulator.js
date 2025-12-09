// ambil id button submit
const btnSubmit = document.getElementById("submit");

// trigger ketika tombol di klik
btnSubmit.addEventListener("click", (e) => {

    // biar form tidak reload terus menerus
    e.preventDefault();

    // object klasifikasi rekomendasi finansial
    const kelasRekomendasi = [

    ]

    // ambil data input
    const pendapatan = Number(document.getElementById("pendapatan").value.trim());
    const pengeluaran = Number(document.getElementById("pengeluaran").value.trim());
    const risiko = document.querySelector('input[name="options"]:checked').value;
    const alerta = document.getElementById("alert");



    // kalau input pendapatan dan pengeluaran bukan angka
    if (isNaN(pendapatan) || isNaN(pengeluaran)) {
        alerta.removeAttribute("hidden");
        alerta.innerText = "Input harus berupa angka!";
        return;
    } 
    
    if (pendapatan == "" || pengeluaran == "") {
        alerta.removeAttribute("hidden");
        alerta.innerText = "Input tidak boleh kosong!";
        return;
    }

    if (alerta) {
        alerta.setAttribute("hidden","")
    }

    // kalau profil risiko tidak terpilih
    if (!risiko) {
        alerta.removeAttribute("hidden");
        alerta.innerText = "Pilih profil risiko dulu!";
        return;
    }

    // pendpatan - pengeluaran
    const sisaUang = pendapatan - pengeluaran;
    const operate = document.getElementById("operation");

    // pengisian hasil operasi pengurangan, surplus atau devisit
    if (sisaUang > 0) {
        operate.innerText = `Surplus : Rp ${sisaUang}`;
    } else {
        operate.innerText = `Devisit : Rp ${sisaUang}`;
    };

    // klasifikasi finansial
    const clasification = document.getElementById("finance-clasification");
    const fokusUtama = document.getElementById("fokus-utama");
    const bgInsight = document.getElementById("bgInsight");
    const icon = document.getElementById("icon");
    const recomendation = document.getElementById("aset-recomendation");

    // object rekomendasi
    const rekomendasiConfig = {
        starter: [
            {
                persentase: "Dana Darurat 50%",
                produk: "Bank Digital / Neo Bank",
                deskripsi: "Bunga cair harian, bebas biaya admin.",
                lokasi: ["Seabank", "Jago", "Blu"]
            },
            {
                persentase: "Pendapatan Tetap 30%",
                produk: "Reksa Dana Pasar Uang",
                deskripsi: "Risiko rendah, likuid harian.",
                lokasi: ["Bibit", "Bareksa", "Ajaib"]
            },
            {
                persentase: "Tabungan Berkala 20%",
                produk: "Tabungan Berjangka",
                deskripsi: "Risiko rendah, likuid harian.",
                lokasi: ["BCA", "Mandiri", "BRI"]
            }
        ],
        planner: [
            {
                persentase: "Dana Darurat 40%",
                produk: "Deposito / Bank Digital",
                deskripsi: "Aman dan stabil untuk menjaga likuiditas.",
                lokasi: ["Seabank", "Jago"]
            },
            {
                persentase: "Pendapatan Tetap 40%",
                produk: "Reksa Dana Pendapatan Tetap",
                deskripsi: "Return stabil dan cocok untuk jangka menengah.",
                lokasi: ["Bibit", "Bareksa"]
            },
            {
                persentase: "obligasi 20%",
                produk: "SBN / Obligasi Korporasi",
                deskripsi: "Return stabil dan cocok untuk jangka menengah.",
                lokasi: ["Bibit", "Bareksa"]
            }
        ],
        grower: [
            {
                persentase: "Dana Darurat 20%",
                produk: "Bank Digital",
                deskripsi: "Cadangan minimal untuk agresif.",
                lokasi: ["Seabank", "Jago"]
            },
            {
                persentase: "Investasi 60%",
                produk: "Saham / Reksa Dana Saham",
                deskripsi: "Potensi imbal hasil tinggi.",
                lokasi: ["Ajaib", "IPOT", "MOST"]
            },
            {
                persentase: "Pendapatan Tetap 20%",
                produk: "Obligasi Korporasi High Grade",
                deskripsi: "Potensi imbal hasil tinggi.",
                lokasi: ["Ajaib", "IPOT", "MOST"]
            }
        ],
        devisit: [
            {
                persentase: "Tambah Income 100%",
                produk: "Fokus Menambah Income",
                deskripsi: "Hal besar diawali dari hal terkecil",
                lokasi: ["freelance", "karyawan", "wirausaha"]
            }
        ]
    };

    // ambil persentase
    function extractPercent(str) {
        return parseInt(str.match(/\d+/)[0]);
    }

    function tampilkanRekomendasi(kategori, sisaUang) {
        let html = "";
        let data = rekomendasiConfig[kategori];

        data.forEach(item => {
            let persen = extractPercent(item.persentase);
            let nominal = (sisaUang * persen / 100).toLocaleString("id-ID");

            html += `
            <div class="card card-aset-recomendation">
                <div class="card-body card-body-aset-recomendation">
                    <div class="product">
                        <div class="persentage-recomendation">
                            <h4>${item.persentase}</h4>
                        </div>
                        <div class="product-recomendation">
                            <h2>${item.produk}</h2>
                            <p>${item.deskripsi}</p>
                        </div>
                        <div class="location-recomendation">
                            ${item.lokasi.map(loc => `<div class="location-loc">${loc}</div>`).join('')}
                        </div>
                    </div>
                    <div class="nominal">
                        <h3>Target Simpanan</h3>
                        <h2>Rp ${nominal}</h2>
                    </div>
                </div>
            </div>
            `;
        });

        recomendation.innerHTML = html;
    }



    if (sisaUang < 0) {
        // DEFISIT
        clasification.innerText = "Devisit / Minus";
        fokusUtama.innerText = "Fokus utama : hentikan kebocoran keuangan, kurangi pengeluaran, tambah income, dan hindari utang baru.";
        bgInsight.style.backgroundColor = "#ef4444"; // merah
        icon.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>';

        tampilkanRekomendasi("devisit", sisaUang);

    } else if (sisaUang > 5000000 && risiko === "Aman") {
        // insight
        clasification.innerText = "Financial Starter"
        fokusUtama.innerText = "Fokus utama : Aman, likuid, dan siapkan dana darurat. Kamu berada di tahap membangun fondasi keuangan."
        bgInsight.style.backgroundColor = "#10b981"
        icon.innerHTML = '<i class="fa-solid fa-shield-halved"></i>'

        // rekomendasi
        tampilkanRekomendasi("starter", sisaUang);

    } else if (sisaUang > 5000000 && risiko === "Sedang") {

        // insight
        clasification.innerText = "Financial Planner"
        fokusUtama.innerText = "Fokus utama : Seimbangkan keamanan dan pertumbuhan. Mulai diversifikasi portofolio sesuai tujuan."
        bgInsight.style.backgroundColor = "#3b82f6"
        icon.innerHTML = '<i class="fa-solid fa-scale-balanced"></i>'

        // recomendation
        tampilkanRekomendasi("planner", sisaUang);

    } else if (sisaUang > 5000000 && risiko === "Agresif") {

        // insight
        clasification.innerText = "Financial Growth"
        fokusUtama.innerText = "Fokus utama : Maksimalkan potensi pertumbuhan dengan instrumen berimbal hasil tinggi. Tetap lakukan diversifikasi untuk mengelola risiko."
        bgInsight.style.backgroundColor = "#8b5cf6"
        icon.innerHTML = '<i class="fa-solid fa-chart-line"></i>'

        // recomendation
        tampilkanRekomendasi("grower", sisaUang);

    } else {

        // insight
        clasification.innerText = "Financial Starter"
        fokusUtama.innerText = "Fokus utama : Aman, likuid, dan siapkan dana darurat. Kamu berada di tahap membangun fondasi keuangan."
        bgInsight.style.backgroundColor = "#10b981"
        icon.innerHTML = '<i class="fa-solid fa-shield-halved"></i>'

        // recomendation
         tampilkanRekomendasi("starter", sisaUang);
    }
});

