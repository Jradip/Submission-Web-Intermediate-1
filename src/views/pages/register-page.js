import RegisterPresenter from '../../presenter/RegisterPresenter.js';

const RegisterPage = {
  async render() {
    return `
      <section id="daftarForm" class="form-section">
        <h2 class="judul-cerita">Buat Akun Baru</h2>
        <form id="formDaftar">
          <div class="form-group">
            <label for="inputNama">Nama Lengkap:</label>
            <input type="text" id="inputNama" placeholder="Nama Lengkap" required />
          </div>
          <div class="form-group">
            <label for="inputEmail">Alamat Email:</label>
            <input type="email" id="inputEmail" placeholder="Alamat Email" required />
          </div>
          <div class="form-group">
            <label for="inputSandi">Kata Sandi:</label>
            <input type="password" id="inputSandi" placeholder="Kata Sandi" required />
          </div>
          <div class="form-group">
            <button type="submit" class="btn-submit">Daftar Sekarang</button>
          </div>
          <div id="pesanDaftar" class="info-message"></div>
        </form>
      </section>
    `;
  },

  async afterRender() {
    const form = document.getElementById('formDaftar');
    const output = document.getElementById('pesanDaftar');

    const presenter = new RegisterPresenter({
      showMessage: (text, color) => {
        output.textContent = text;
        output.style.color = color;
      },
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const nama = document.getElementById('inputNama').value;
      const email = document.getElementById('inputEmail').value;
      const password = document.getElementById('inputSandi').value;

      presenter.handleRegister(nama, email, password);
    });
  },
};

export default RegisterPage;
