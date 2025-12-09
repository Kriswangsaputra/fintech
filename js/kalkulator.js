// ambil id button submit
const btnSubmit = document.getElementById("submit");

// trigger ketika tombol di klik
btnSubmit.addEventListener("click", (e) => {

    // biar form tidak reload terus menerus
    e.preventDefault();

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

    if (sisaUang > 5000000 && risiko === "Aman") {
        // insight
        clasification.innerText = "Financial Starter"
        fokusUtama.innerText = "Fokus utama : Aman, likuid, dan siapkan dana darurat. Kamu berada di tahap membangun fondasi keuangan."
        bgInsight.style.backgroundColor = "#10b981"
        icon.innerHTML = '<i class="fa-solid fa-shield-halved"></i>'

        // rekomendasi
        recomendation.innerHTML = `
        <div class="card card-aset-recomendation">
            <div class="card-body card-body-aset-recomendation">
                <div class="product">
                    <div class="persentage-recomendation">
                        <h4>Dana Darurat (50% Sisa)</h4>
                    </div>
                    <div class="product-recomendation">
                        <h2>Bank Digital / Neo Bank</h2>
                        <p>Bunga cair harian, bebas biaya admin.</p>
                    </div>
                    <div class="location-recomendation">
                        <div class="location-loc">Seabank</div>
                        <div class="location-loc">Seabank</div>
                        <div class="location-loc">Seabank</div>
                    </div>
                </div>
                <div class="nominal">
                    <h3>Target Simpanan</h3>
                    <h2>Rp 2.000.000</h2>
                </div>
            </div>
        </div>
        `;

    } else if (sisaUang > 5000000 && risiko === "Sedang") {
        clasification.innerText = "Financial Planner"
        fokusUtama.innerText = "Fokus utama : Seimbangkan keamanan dan pertumbuhan. Mulai diversifikasi portofolio sesuai tujuan."
        bgInsight.style.backgroundColor = "#3b82f6"
        icon.innerHTML = '<i class="fa-solid fa-scale-balanced"></i>'
    } else if (sisaUang > 5000000 && risiko === "Agresif") {
        clasification.innerText = "Financial Growth"
        fokusUtama.innerText = "Fokus utama : Maksimalkan potensi pertumbuhan dengan instrumen berimbal hasil tinggi. Tetap lakukan diversifikasi untuk mengelola risiko."
        bgInsight.style.backgroundColor = "#8b5cf6"
        icon.innerHTML = '<i class="fa-solid fa-chart-line"></i>'
    } else {
        clasification.innerText = "Financial Starter"
        fokusUtama.innerText = "Fokus utama : Aman, likuid, dan siapkan dana darurat. Kamu berada di tahap membangun fondasi keuangan."
        bgInsight.style.backgroundColor = "#10b981"
        icon.innerHTML = '<i class="fa-solid fa-shield-halved"></i>'
    }
});

