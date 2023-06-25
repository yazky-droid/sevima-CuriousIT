-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 25, 2023 at 03:31 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `semesta_curiousit`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `title` varchar(1000) NOT NULL,
  `content` text NOT NULL,
  `img` varchar(255) NOT NULL,
  `url_yt` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `content`, `img`, `url_yt`, `user_id`) VALUES
(1, 'Mempelajari Kecerdasan Buatan: Mengenal AI dan Potensinya', 'Kecerdasan Buatan (Artificial Intelligence/AI) telah menjadi topik yang semakin populer dan berpengaruh dalam era digital ini. AI merujuk pada kemampuan mesin untuk belajar, mengerti, dan meniru kecerdasan manusia. Dalam dunia yang didominasi oleh data, AI telah menunjukkan potensinya dalam berbagai bidang, mulai dari otomasi proses bisnis hingga pengembangan mobil otonom. Dengan memanfaatkan algoritma canggih, AI dapat menganalisis dan menafsirkan data dengan kecepatan yang jauh melampaui kapasitas manusia. Ini membuka pintu bagi berbagai peluang dan tantangan baru. Dalam konteks ini, penting bagi kita untuk memahami konsep dasar AI, seperti pembelajaran mesin (machine learning), jaringan saraf tiruan (artificial neural networks), dan pemrosesan bahasa alami (natural language processing). Dengan pemahaman yang baik tentang AI, kita dapat merangkul perubahan ini dan mengoptimalkan potensi teknologi untuk meningkatkan berbagai aspek kehidupan kita.\n\nMari kita jelajahi lebih dalam dunia AI dan bagaimana teknologi ini telah mengubah lanskap industri, pelayanan, dan inovasi. Dengan pemahaman yang kuat tentang AI, kita dapat bersiap menghadapi masa depan yang semakin terhubung dan cerdas', 'https://cdn.pixabay.com/photo/2023/05/24/17/49/ai-generated-8015425_1280.jpg', '_FcHPrRY5zg', 4),
(2, 'Mengenal Pesatnya Perkembangan Teknologi Website: Era Digital yang Terus Berkembang', 'Di era digital yang terus berkembang, perkembangan teknologi website telah menjadi salah satu aspek penting dalam dunia online. Website adalah wajah dari perusahaan atau individu di dunia maya, dan teknologi yang digunakan dalam pembuatan dan pengelolaan website terus mengalami kemajuan yang pesat. Dulu, website didesain dengan HTML sederhana dan tampilan yang statis. Namun sekarang, kita telah memasuki era website dinamis yang menggabungkan HTML, CSS, dan JavaScript untuk menciptakan pengalaman interaktif yang menarik.\n\nDengan adanya platform dan alat pengembangan seperti WordPress, Drupal, dan Joomla, orang-orang dengan pengetahuan teknis yang terbatas pun dapat membuat website yang menakjubkan tanpa harus menjadi seorang programmer profesional. Selain itu, teknologi seperti responsif web design memungkinkan website untuk menyesuaikan tampilannya dengan berbagai perangkat, mulai dari desktop hingga ponsel pintar, memberikan pengalaman pengguna yang optimal.\n\nTidak hanya itu, perkembangan teknologi website juga mencakup aspek keamanan, performa, dan optimisasi mesin pencari (SEO). Para pengembang website terus mencari cara untuk meningkatkan keamanan website agar terlindungi dari serangan dan ancaman siber. Mereka juga berfokus pada meningkatkan performa website agar dapat dimuat dengan cepat, memberikan pengalaman yang lancar bagi pengunjung. Selain itu, optimisasi SEO memainkan peran penting dalam meningkatkan peringkat website di hasil pencarian, sehingga meningkatkan visibilitas dan jumlah pengunjung.\n\nMelihat perkembangan teknologi website yang pesat, penting bagi kita untuk terus memperbarui pengetahuan dan keterampilan dalam hal ini. Dengan pemahaman yang baik tentang teknologi website terkini, kita dapat menciptakan website yang menarik, fungsional, dan efektif dalam mencapai tujuan bisnis atau pribadi kita di dunia digital yang terus berkembang.', 'https://cdn.pixabay.com/photo/2018/01/06/07/53/social-3064515_1280.jpg', '81lgOrIA3C8', 4),
(4, 'Pentingnya Kesehatan Mental: Mengapa Banyak Orang Abai akan Dampaknya?', 'Dalam kehidupan yang sibuk dan serba cepat seperti saat ini, penting untuk tidak melupakan pentingnya kesehatan mental. Kesehatan mental mengacu pada keadaan emosional, psikologis, dan sosial yang baik, di mana seseorang dapat mengelola stres, menjaga keseimbangan, dan berfungsi secara optimal dalam kehidupan sehari-hari. Namun, sayangnya, banyak orang masih abai terhadap pentingnya kesehatan mental, dan ini berdampak pada kualitas hidup mereka.\n\nAda beberapa alasan mengapa banyak orang abai terhadap kesehatan mental. Pertama, stigma sosial masih menjadi kendala yang signifikan. Masalah kesehatan mental seringkali dianggap sebagai sesuatu yang harus disembunyikan atau malu untuk dibicarakan. Akibatnya, orang mungkin enggan mencari bantuan atau berbagi pengalaman mereka dengan orang lain, yang pada gilirannya dapat memperburuk kondisi mereka.\n\nSelain itu, kurangnya pemahaman tentang kesehatan mental juga berperan dalam ketidaktahuan banyak orang. Banyak yang tidak menyadari bahwa kesehatan mental adalah bagian penting dari kesehatan secara keseluruhan dan bahwa merawatnya adalah investasi dalam kualitas hidup jangka panjang. Kurangnya pendidikan dan informasi yang memadai tentang kesehatan mental dapat menyebabkan ketidaktahuan tentang tanda-tanda dan gejala gangguan mental serta cara-cara untuk menjaga kesehatan mental yang baik.\n\nSelain itu, gaya hidup yang serba sibuk dan tekanan yang tinggi juga dapat menyebabkan orang mengabaikan kesehatan mental mereka. Tuntutan pekerjaan, tanggung jawab keluarga, dan tekanan sosial dapat menyebabkan seseorang fokus pada tugas-tugas harian dan mengabaikan kebutuhan emosional dan psikologis mereka sendiri. Akibatnya, masalah kesehatan mental dapat terabaikan dan berkembang menjadi lebih serius seiring berjalannya waktu.\n\nPenting untuk diingat bahwa kesehatan mental memiliki dampak yang signifikan pada kualitas hidup kita secara keseluruhan. Merawat kesehatan mental bukanlah tanda kelemahan, tetapi adalah tindakan yang bijaksana dan berani. Penting untuk menghilangkan stigma seputar masalah kesehatan mental, meningkatkan pemahaman, dan menciptakan lingkungan yang mendukung di mana orang merasa nyaman untuk mencari bantuan dan berbicara terbuka tentang kesehatan mental mereka. Dengan menyadari pentingnya kesehatan mental dan mengambil langkah-langkah untuk merawatnya, kita dapat mencapai keseimbangan dan kualitas hidup yang lebih baik', 'https://media.istockphoto.com/id/1436319269/id/vektor/sekelompok-orang-yang-beragam-dengan-tangan-dan-tangan-terangkat-ke-arah-hati-yang-dilukis.jpg?s=612x612&w=0&k=20&c=0lwMySNhDfhOeVozeNcXi2lMy-zAGBBcqMsGTImMZOM=', '5Y76XIgwVyI', 4),
(5, 'Mengenal Machine Learning: Konsep Dasar Bagi Orang Awam', 'Machine Learning (Pembelajaran Mesin) adalah bidang yang semakin populer dalam dunia teknologi. Namun, bagi orang awam, konsep ini mungkin terdengar kompleks dan sulit dipahami. Nah, mari kita jelaskan dengan cara yang sederhana apa itu Machine Learning.\n\nPada dasarnya, Machine Learning adalah suatu pendekatan dalam kecerdasan buatan yang memungkinkan komputer \"belajar\" dari data tanpa harus secara eksplisit diprogram. Sebagai contoh, bayangkan Anda ingin membuat suatu program yang dapat mengenali apakah sebuah gambar adalah gambar kucing atau anjing. Dalam pendekatan konvensional, Anda harus menulis aturan-aturan detail tentang ciri-ciri fisik kucing dan anjing untuk mengidentifikasinya. Namun, dalam Machine Learning, Anda memberikan komputer sejumlah besar gambar kucing dan anjing beserta labelnya, dan komputer secara otomatis belajar menemukan pola atau fitur-fitur tertentu yang membedakan kucing dan anjing. Setelah proses pembelajaran selesai, komputer dapat menggunakan pengetahuan yang diperoleh untuk mengenali gambar-gambar baru dengan tingkat akurasi yang tinggi.\n\nDalam Machine Learning, terdapat beberapa tipe pembelajaran, termasuk pembelajaran terawasi (supervised learning), pembelajaran tak terawasi (unsupervised learning), dan pembelajaran penguatan (reinforcement learning). Dalam pembelajaran terawasi, model belajar dari contoh-contoh yang telah dilabeli dengan benar. Misalnya, diberikan data latihan berupa gambar dengan label kucing atau anjing, model belajar mengenali pola-pola tertentu untuk mengklasifikasikan gambar baru. Sedangkan dalam pembelajaran tak terawasi, model menemukan pola-pola sendiri dalam data yang tidak dilabeli, tanpa arahan yang jelas. Pembelajaran penguatan, di sisi lain, melibatkan pemberian umpan balik atau reward kepada model saat ia mencapai tujuan atau melakukan tindakan yang benar.\n\nMachine Learning memiliki berbagai aplikasi yang luas, termasuk dalam pengenalan wajah, pemrosesan bahasa alami, rekomendasi produk, deteksi penipuan, dan banyak lagi. Dalam era di mana kita memiliki akses ke jumlah data yang besar, Machine Learning menjadi alat yang kuat untuk memanfaatkan informasi dari data tersebut dan membuat prediksi atau pengambilan keputusan yang cerdas.\n\nMeskipun konsep-konsep di balik Machine Learning mungkin terdengar rumit, penting untuk diingat bahwa teknologi ini memiliki potensi besar untuk memberikan dampak positif dalam berbagai bidang kehidupan kita. Dengan penerapan yang bijaksana, Machine Learning dapat membantu kita memecahkan masalah kompleks, meningkatkan efisiensi, dan memberikan wawasan yang berharga.', 'https://cdn.pixabay.com/photo/2023/01/20/05/23/artificial-intelligence-7730758_1280.jpg', 'rQRikWceaB8', 4),
(6, 'Bersemangat Juang dan Percaya Diri: Kunci Kesuksesan dan Kesejahteraan Pribadi', 'Bersemangat juang dan percaya diri adalah dua faktor penting yang dapat membawa kita menuju kesuksesan dan kesejahteraan pribadi. Ketika kita memiliki semangat juang yang kuat, kita memiliki motivasi yang tinggi untuk mencapai tujuan dan menaklukkan tantangan yang ada di depan kita. Semangat juang ini mendorong kita untuk berusaha lebih keras, mengatasi rintangan, dan tidak mudah menyerah dalam menghadapi hambatan.\n\nPercaya diri juga memainkan peran krusial dalam pencapaian kesuksesan dan kesejahteraan pribadi. Ketika kita memiliki keyakinan pada kemampuan dan potensi diri sendiri, kita menjadi lebih berani mengambil risiko, menghadapi ketidakpastian, dan mengejar impian kita dengan penuh keyakinan. Percaya diri membantu kita mengatasi rasa takut, mengatasi keraguan diri, dan menghadapi kritik atau penolakan dengan sikap positif.\n\nKeduanya saling terkait dan saling mempengaruhi satu sama lain. Ketika kita memiliki semangat juang yang tinggi, kita cenderung merasa lebih percaya diri dalam menghadapi tugas-tugas dan tantangan. Sebaliknya, ketika kita memiliki kepercayaan diri yang tinggi, semangat juang kita menjadi lebih kuat karena kita yakin bahwa kita mampu mencapai apa pun yang kita inginkan.\n\nPenting untuk diingat bahwa semangat juang dan percaya diri adalah sesuatu yang dapat dikembangkan dan diperkuat. Beberapa langkah yang dapat kita ambil untuk memperkuat semangat juang adalah menetapkan tujuan yang jelas, mengembangkan sikap positif dan optimis, mencari inspirasi dari orang-orang sukses, dan menjaga motivasi dengan melakukan hal-hal yang kita sukai. Untuk memperkuat percaya diri, kita dapat mengenali dan menghargai kelebihan kita, menghadapi ketakutan dengan bertindak, memperluas zona nyaman kita, dan mengelilingi diri dengan lingkungan yang positif dan mendukung.\n\nDengan semangat juang dan percaya diri yang kuat, kita dapat menghadapi tantangan hidup dengan lebih baik, mengatasi rintangan yang mungkin muncul, dan mencapai kesuksesan serta kesejahteraan pribadi yang kita inginkan. Ingatlah bahwa kita memiliki potensi yang luar biasa dan dengan sikap yang tepat, kita dapat mengubah impian kita menjadi kenyataan.\n\n', 'https://cdn.pixabay.com/photo/2017/09/08/22/11/life-2730381_1280.png', 'VBSb63bJGXo', 4);

-- --------------------------------------------------------

--
-- Table structure for table `hasilgpt`
--

CREATE TABLE `hasilgpt` (
  `id` int(11) NOT NULL,
  `question` varchar(1000) NOT NULL,
  `answer` varchar(1000) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `isAdmin` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `img`, `isAdmin`) VALUES
(1, 'test1', 'test1@gmail', '$2a$10$q0WRtps7fkKTFuNI7I/wJOApK/rrR8kd.9ZqPpRenrEaexu4bgSz6', '', 0),
(2, 'test2', 'test2@gmail.com', '$2a$10$xzs/6whX/r4JgnuVDXBh.ORorAYIs2UFqfVHvW0Dr4vqSYbfohsve', '', 0),
(3, 'test3', 'test3@gmail.com', 'test3', '', 0),
(4, 'admin', 'admin@gmail.com', 'password', '', 0),
(5, 'user', 'user@gmail.com', 'userpass', '', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `hasilgpt`
--
ALTER TABLE `hasilgpt`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `hasilgpt`
--
ALTER TABLE `hasilgpt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `Foreign Key` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hasilgpt`
--
ALTER TABLE `hasilgpt`
  ADD CONSTRAINT `hasilgpt_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
