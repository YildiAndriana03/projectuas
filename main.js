var quiz = document.getElementById("quiz"); // di gunakan untuk memilih elemen HTML dengan 'id' tertentu (quiz)
var ques = document.getElementById("question");
var opt1 = document.getElementById("option1");
var opt2 = document.getElementById("option2");
var opt3 = document.getElementById("option3");
var opt4 = document.getElementById("option4");
var res = document.getElementById("result");
var nextbutton = document.getElementById("next");
var q = document.getElementById("quit");

var tques = questions.length; // untuk menghitung jumlah total pertanyaan yang di jawab di dalam sebuah array
var score = 0; //untuk menyimpan skor
var quesindex = 0; //digunakan untuk melacak indeks atau posisi pertanyaan yang sedang ditampilkan kepada pengguna

function quit() {
  // opsi keluar
  quiz.style.display = "none"; //mengatur gaya display elemen kuis menjadi "none",
  //yang menyebabkan elemen tersebut disembunyikan dari tampilan pengguna/user
  result.style.display = ""; // menampilkan hasil point
  var f = score / tques;
  result.textContent = "SCORE =" + score * 10;
  // untuk menampilkan hasil skor dan di kali 10 dengan hasil yang di simpan dalm varialbel f,
  // dan jawaban yang benar dari total pertanyaan akan di tampilkan dalam elemen 'result'.
  q.style.display = "none";
  //menampilkan pertanyaan satu per satu dan menyembunyikannya Question setelah kuis selesai.
}
function give_ques(quesindex) {
  // untuk menampilkan pertnyan Quizz
  ques.textContent = quesindex + 1 + ". " + questions[quesindex][0]; // untuk menampilkan pertanyaan sesuai urutan nomor.
  opt1.textContent = questions[quesindex][1]; // untuk menetapkan teks opsi pilihan ganda jadi penentuan a,b,c,d
  opt2.textContent = questions[quesindex][2];
  opt3.textContent = questions[quesindex][3];
  opt4.textContent = questions[quesindex][4];
  return; // body.
}
give_ques(0); //menampilkan pertanyaan awal ke pada user
function nextques() {
  //untuk pertanyaan selanjutnya
  var selected_ans = document.querySelector("input[type=radio]:checked"); //var selected_ans: Baris ini mendeklarasikan variabel bernama selected_ans.
  //dan querySelector sebagai metod yang dari var selected untuk mecari elemen dari html
  if (!selected_ans) {
    alert("SILAHKAN PILIH JAWABAN.");
    return; // untuk menampilkan pesan jika tidak ada pertanyaan yang tidak di isi
  }

  if (selected_ans.value == questions[quesindex][5]) {
    score = score + 1;
  }
  selected_ans.checked = false; // untuk menghapus jawaban sebelumnya ketika salah pilih
  quesindex++; // untuk memperbarui jawaban baru yang di pilih
  if (quesindex == tques - 1) nextbutton.textContent = "Finish"; // mengubah tombol next menjadi finish ketika sudah jawaban akhir
  var f = score / tques; // untuk menghitung skor akhir sebagai presentase
  if (quesindex == tques) {
    q.style.display = "none";
    quiz.style.display = "none"; //Baris ini kemungkinan menyembunyikan elemen yang berisi keseluruhan kuis
    result.style.display = ""; // untuk menampilkan elemen hasil Quiz dan di sembunyikan terlebih dulu sebelum quiz selesai.
    result.textContent = "SCORED:" + score * 10;

    return; // sebagai penutup menghentikan eksekusi kode selanjutnya.
  }
  give_ques(quesindex);
}
