// =============================================================================
// FILE: main.js
// DESKRIPSI: Logika Frontend Final untuk Aplikasi DiabeTest
// FUNGSI:
// 1. Mengelola Modal Bootstrap.
// 2. Mengambil data dari formulir, mengirimnya ke API.
// 3. Menampilkan hasil (sukses/error) di dalam Modal.
// 4. Mengelola navigasi smooth-scrolling.
// =============================================================================

// Memastikan kode berjalan setelah seluruh halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  // --- 1. INISIALISASI & PEMILIHAN ELEMEN DOM ---

  // Inisialisasi Modal Bootstrap
  const diabetesModalEl = document.getElementById("diabetesModal");
  if (!diabetesModalEl) return; // Hentikan jika modal tidak ditemukan
  const diabetesModal = new bootstrap.Modal(diabetesModalEl);

  // Tombol-tombol untuk membuka modal
  const btnStartHero = document.getElementById("btn-start-hero");
  const btnStartNav = document.getElementById("btn-start-nav");

  // Elemen di dalam Modal
  const predictForm = document.getElementById("predictForm");
  const formWrapper = document.getElementById("form-wrapper");
  const resultWrapper = document.getElementById("result-wrapper");

  // Navigasi
  const navLinks = document.querySelectorAll(".nav-link");

  // URL Backend API
  const API_URL = "https://diabetest-backend-production.up.railway.app/predict";

  // --- 2. FUNGSI-FUNGSI PEMBANTU (HELPERS) ---

  /**
   * Menampilkan animasi loading di dalam result wrapper.
   */
  const showLoading = () => {
    if (!resultWrapper) return;
    resultWrapper.style.display = "block";
    resultWrapper.innerHTML = `
            <div class="text-center p-4">
                <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-3 mb-0">Menganalisis data Anda...</p>
            </div>`;
  };

  /**
   * Menampilkan hasil prediksi yang sukses.
   * @param {object} data - Objek prediction_result dari API.
   */
  const showSuccessResult = (data) => {
    if (!resultWrapper) return;
    const { probability, risk_level, recommendations } = data;
    const recommendationsHtml = recommendations
      .map(
        (rec) =>
          `<li><i class="fas fa-check-circle text-success me-2"></i>${rec}</li>`
      )
      .join("");

    resultWrapper.innerHTML = `
            <div class="text-center">
                <h4 class="mb-3">Hasil Prediksi Anda</h4>
                <div class="alert alert-${
                  risk_level === "Tinggi"
                    ? "danger"
                    : risk_level === "Sedang"
                    ? "warning"
                    : "success"
                }">
                    <h5 class="alert-heading">Level Risiko: ${risk_level}</h5>
                    <p class="mb-0">Probabilitas risiko: <strong>${(
                      probability * 100
                    ).toFixed(2)}%</strong>.</p>
                </div>
                <div class="card mt-4 text-start">
                    <div class="card-header"><strong>Rekomendasi</strong></div>
                    <div class="card-body"><ul class="list-unstyled mb-0">${recommendationsHtml}</ul></div>
                </div>
                <button id="btn-back" class="btn btn-secondary mt-4">Cek Lagi</button>
            </div>`;

    document.getElementById("btn-back").addEventListener("click", resetModal);
  };

  /**
   * Menampilkan pesan error.
   * @param {object} errorData - Objek error dari API atau koneksi.
   */
  const showErrorResult = (errorData) => {
    if (!resultWrapper) return;
    const errorsHtml =
      errorData.errors && Array.isArray(errorData.errors)
        ? errorData.errors.map((err) => `<p class="mb-1">${err}</p>`).join("")
        : "Silakan periksa kembali koneksi atau data yang Anda masukkan.";

    resultWrapper.innerHTML = `
            <div class="alert alert-danger">
                <h5 class="alert-heading">Terjadi Kesalahan</h5>
                <p>${errorData.message || "Input tidak valid."}</p>
                <hr>
                <div class="mb-0">${errorsHtml}</div>
            </div>
            <div class="text-center">
                <button id="btn-back-error" class="btn btn-secondary mt-3">Coba Lagi</button>
            </div>`;

    document
      .getElementById("btn-back-error")
      .addEventListener("click", resetModal);
  };

  /**
   * Mereset tampilan modal kembali ke formulir awal.
   */
  const resetModal = () => {
    if (formWrapper) formWrapper.style.display = "block";
    if (resultWrapper) resultWrapper.style.display = "none";
    if (predictForm) predictForm.reset();
  };

  /**
   * Membuka modal dan memastikan dalam keadaan reset.
   */
  const openModal = () => {
    resetModal();
    diabetesModal.show();
  };

  // --- 3. EVENT LISTENERS ---

  // Listener untuk membuka modal
  if (btnStartHero) btnStartHero.addEventListener("click", openModal);
  if (btnStartNav) btnStartNav.addEventListener("click", openModal);

  // Listener untuk mereset saat modal ditutup
  diabetesModalEl.addEventListener("hidden.bs.modal", resetModal);

  // Listener utama untuk form submit
  if (predictForm) {
    predictForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (formWrapper) formWrapper.style.display = "none";
      showLoading();

      const formData = new FormData(predictForm);
      const data = Object.fromEntries(formData.entries());

      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const result = await response.json();

        if (response.ok && result.status === "success") {
          showSuccessResult(result.prediction_result);
        } else {
          showErrorResult(result);
        }
      } catch (error) {
        showErrorResult({
          message: "Tidak dapat terhubung ke server.",
          errors: ["Pastikan server backend (app.py) sudah berjalan."],
        });
      }
    });
  }

  // Listener untuk navigasi smooth scrolling
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
