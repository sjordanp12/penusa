// Ambil elemen navbar
var navbar = document.querySelector('.navbar');

// Tambahkan event listener untuk saat halaman digulir
window.addEventListener('scroll', function () {
  // Periksa posisi scroll terhadap tinggi navbar
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mendapatkan elemen div untuk waktu terakhir diperbarui
var lastUpdatedElement = document.getElementById('lastUpdated');

// Mendapatkan tanggal terakhir kali halaman diperbarui
var lastUpdated = document.lastModified;

// Menetapkan waktu terakhir diperbarui ke dalam elemen div
lastUpdatedElement.textContent += lastUpdated;

document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah form untuk melakukan submit standar

  // Ambil nilai input dari form
  var nama = document.getElementById('nama').value;
  var email = document.getElementById('email').value;

  // Menampilkan SweetAlert setelah form di-submit
  Swal.fire({
    title: 'Terima kasih!',
    html: `Terima kasih <b>${nama}</b> (${email}) telah memberikan pesan.`,
    icon: 'success',
  });

  // Optional: Reset form setelah SweetAlert ditampilkan
  document.getElementById('myForm').reset();
});

// Tangkap tombol menggunakan id
var tombol = document.getElementById('teknikInformatika');

// Tambahkan event listener untuk klik
tombol.addEventListener('click', function () {
  // Tampilkan SweetAlert
  Swal.fire({
    title: 'Teknik Informatika',
    text: 'Program Studi mampu berkompetisi dengan menunjukkan ukuran pencapaian menjadi Program Studi 50 besar di Indonesia pada tahun 2024. Dalam hal ini dilakukan analisis terhadap program studi sejenis (dibidang ilmu komputer) yang telah memperoleh akreditasi A di Indonesia sebagai tolak ukur agar mampu berada diposisi 50 besar program studi terbaik di Indonesia pada tahun 2024. Data Program studi sejenis (dibidang ilmu komputer) yang telah memperoleh akreditasi A diperoleh melalui portal BAN PT dan Forlap DIKTI.',
    // icon: 'success', // tipe ikon (success, error, warning, info, question)
    confirmButtonText: 'Ok',
  });
});

// Tangkap tombol menggunakan id
var tombol = document.getElementById('manajemenInformatika');

// Tambahkan event listener untuk klik
tombol.addEventListener('click', function () {
  // Tampilkan SweetAlert
  Swal.fire({
    title: 'Manajemen Informatika',
    text: 'menjadi Program Studi tingkat 100 besar di Indonesia pada tahun 2024 dan mempunyai reputasi tinggi, mampu berkontribusi pada masyarakat melalui proses pendiseminasian ilmu pengetahuan (pendidikan), penemuan pengetahuan baru (penelitian) dan pengaplikasian ilmu pengetahuan untuk kesejahteraan umat manusia yang unggul (pengabdian pada masyarakat). Unggul berarti yang terbaik dan yang terdepan, mampu berkompetisi di tingkat 100 besar di Indonesia pada tahun 2024.',
    // icon: 'success', // tipe ikon (success, error, warning, info, question)
    confirmButtonText: 'Ok',
  });
});

// Tangkap tombol menggunakan id
var tombol = document.getElementById('teknologiInformasi');

// Tambahkan event listener untuk klik
tombol.addEventListener('click', function () {
  // Tampilkan SweetAlert
  Swal.fire({
    title: 'Teknologi Informasi',
    text: 'penekanan pada keilmuan terkait tata kelola TIK perusahaan atau instansi Pemerintah serta keamanannya, dan standarisasiproses bisnis serta infrastruktur.',
    // icon: 'success', // tipe ikon (success, error, warning, info, question)
    confirmButtonText: 'Ok',
  });
});

// Tangkap tombol menggunakan id
var tombol = document.getElementById('rekayasaPerangkatLunak');

// Tambahkan event listener untuk klik
tombol.addEventListener('click', function () {
  // Tampilkan SweetAlert
  Swal.fire({
    title: 'Rekayasa Perangkat Lunak',
    text: 'Program studi S1 Rekayasa Perangkat Lunak adalah kesatuan rencana belajar yang mengkaji, menerapkan, dan mengembangkan ilmu rekayasa perangkat lunak yang melandasi rancang bangun aplikasi. Arah kajian keilmuan dari program studi ini mencakup disiplin, proses, teknik, dan alat bantu yang dibutuhkan dalam rekayasa perangkat lunak yang meliputi tahap perencanaan, pembangunan, dan implementasi. Program Studi S1 Rekayasa Perangkat Lunak saat ini baru berdiri dan mendapatkan izin pembukaan program studi dari Kementerian Rieset Teknologi dan Pendidikan Tinggi dengan Nomor : 69/KPT/I/2019 pada tanggal 08 Februari 2019.',
    // icon: 'success', // tipe ikon (success, error, warning, info, question)
    confirmButtonText: 'Ok',
  });
});

// Tangkap tombol menggunakan id
var tombol = document.getElementById('teknikRekayasaKJ');

// Tambahkan event listener untuk klik
tombol.addEventListener('click', function () {
  // Tampilkan SweetAlert
  Swal.fire({
    title: 'Teknik Rekayasa Komputer & Jaringan',
    text: 'menjadi Program Studi tingkat 100 besar di Indonesia pada tahun 2024 dan mempunyai reputasi tinggi, mampu berkontribusi pada masyarakat melalui proses pendiseminasian ilmu pengetahuan (pendidikan), penemuan pengetahuan baru (penelitian) dan pengaplikasian ilmu pengetahuan untuk kesejahteraan umat manusia yang unggul (pengabdian pada masyarakat). Unggul berarti yang terbaik dan yang terdepan, mampu berkompetisi di tingkat 100 besar di Indonesia pada tahun 2024.',
    // icon: 'success', // tipe ikon (success, error, warning, info, question)
    confirmButtonText: 'Ok',
  });
});

// Tangkap tombol menggunakan id
var tombol = document.getElementById('bisnisDigital');

// Tambahkan event listener untuk klik
tombol.addEventListener('click', function () {
  // Tampilkan SweetAlert
  Swal.fire({
    title: 'Bisnis Digital',
    text: 'menjadi Program Studi tingkat 100 besar di Indonesia pada tahun 2024 dan mempunyai reputasi tinggi, mampu berkontribusi pada masyarakat melalui proses pendiseminasian ilmu pengetahuan (pendidikan), penemuan pengetahuan baru (penelitian) dan pengaplikasian ilmu pengetahuan untuk kesejahteraan umat manusia yang unggul (pengabdian pada masyarakat). Unggul berarti yang terbaik dan yang terdepan, mampu berkompetisi di tingkat 100 besar di Indonesia pada tahun 2024.',
    // icon: 'success', // tipe ikon (success, error, warning, info, question)
    confirmButtonText: 'Ok',
  });
});

window.addEventListener('resize', function () {
  var screenWidth = window.innerWidth; // Mendapatkan lebar layar saat ini

  var containerElement = document.getElementById('home'); // Ganti dengan id elemen yang ingin disembunyikan

  // Contoh logika untuk menyembunyikan elemen saat lebar layar kurang dari 768px
  if (screenWidth < 560) {
    containerElement.style.display = 'none';
  } else {
    containerElement.style.display = 'block'; // Kembalikan tampilan jika lebar layar lebih besar
  }
});

// Seleksi tombol prompt
var promptButton = document.getElementById('promptButton');

// Tambahkan event listener
promptButton.addEventListener('click', function () {
  Swal.fire({
    title: 'Masukkan Nama Anda',
    input: 'text',
    inputPlaceholder: 'Nama Anda',
    showCancelButton: true,
    confirmButtonText: 'OK',
    cancelButtonText: 'Batal',
    showLoaderOnConfirm: true,
    preConfirm: (nama) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (nama === '') {
            Swal.showValidationMessage('Nama tidak boleh kosong');
          }
          resolve();
        }, 1000);
      });
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Hello',
        text: result.value,
        icon: 'success',
        confirmButtonText: 'OK',
      });
    }
  });
});

// Ketika halaman di-scroll, tampilkan atau sembunyikan tombol kembali ke atas
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById('backToTopBtn').style.display = 'block';
  } else {
    document.getElementById('backToTopBtn').style.display = 'none';
  }
}

// Ketika tombol diklik, animasikan kembali ke atas halaman
function topFunction() {
  document.body.scrollTop = 0; // Untuk Safari
  document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE, dan Opera
}
