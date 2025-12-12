// ini part header
export function header() {
    return `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
          <img
              src="img/logo02.png"
              alt="Logo fintrack"
              width="200"
              height="auto"
              class="d-inline-block align-text-top"
            />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="index.html">Beranda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="modul.html">Materi Mendalam</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="kalkulator-keuangan.html">Kalkulator Keuangan</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="berita.html">Berita</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;
};

// ini Part Footer
export function footer() {
    return `
        <div class="container-fluid footer-content">
        <p>© 2025 Fintrack. All rights reserved.</p>
      </div>
    `;
}