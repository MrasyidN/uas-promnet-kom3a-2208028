-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2024 at 07:42 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2208028_muhammadrasyidnurrohim_uas`
--

-- --------------------------------------------------------

--
-- Table structure for table `pasien_puskesmas_rasyid`
--

CREATE TABLE `pasien_puskesmas_rasyid` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `usia` int(11) NOT NULL,
  `jenis_kelamin` varchar(15) NOT NULL,
  `alamat` varchar(50) NOT NULL,
  `deskripsi` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pasien_puskesmas_rasyid`
--

INSERT INTO `pasien_puskesmas_rasyid` (`id`, `nama`, `usia`, `jenis_kelamin`, `alamat`, `deskripsi`) VALUES
(65, 'Rivan N', 25, 'Laki-laki', 'baleendah', 'sakit perut bagian calam'),
(66, 'Siti Nurjanah', 17, 'Perempuan', 'Sindang Sari', 'Kontrol gigi'),
(67, 'Putra Febrian', 19, 'Laki-laki', 'Papak Gede', 'membuat surat rujukan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pasien_puskesmas_rasyid`
--
ALTER TABLE `pasien_puskesmas_rasyid`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pasien_puskesmas_rasyid`
--
ALTER TABLE `pasien_puskesmas_rasyid`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
