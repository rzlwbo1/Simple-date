// get date
const date = new Date;

      
//get tanggal
const currentDate = date.getDate();

// get bulan 
const months = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember'
];

const month = months.filter((month, index) => index == (date.getMonth()));

//get hari
const days = ['minggu','senin', 'selasa', 'rabu', 'kamis', 'jum\'at', 'sabtu',];
const day = days.filter((day, index) => index == (date.getDay()));

// get tahun
const year = date.getFullYear();

// get jam and menit
const hour = date.getHours();
const minutes = `${date.getMinutes < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`}`;
let convertMinutes = Number(minutes);

// combined
const dateNow = `Hari ${day} tanggal ${currentDate} ${month} ${year} jam ${hour}:${convertMinutes} `;

// log
console.log(dateNow);



