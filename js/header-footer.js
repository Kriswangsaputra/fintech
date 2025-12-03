// ini part header
export function header() {
    return `
    <nav class="navbar">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img
              src="img/logo01.webp"
              alt="Logo fintrack"
              width="200"
              height="auto"
              class="d-inline-block align-text-top"
            />
          </a>
          <button class="btn btn-outline-primary" type="submit">Masuk</button>
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