-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 10, 2022 at 08:55 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `creativehubs`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_turkish_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_turkish_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_turkish_ci NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `password`, `email`, `created`) VALUES
(1, 'eren dogan', '2727', 'eren@test.com', '2021-10-01 07:29:54');

-- --------------------------------------------------------

--
-- Table structure for table `edges`
--

CREATE TABLE `edges` (
  `tid` int(11) NOT NULL,
  `id` varchar(100) COLLATE utf8mb4_turkish_ci NOT NULL,
  `source` varchar(100) COLLATE utf8mb4_turkish_ci NOT NULL,
  `target` varchar(100) COLLATE utf8mb4_turkish_ci NOT NULL,
  `bg` varchar(50) COLLATE utf8mb4_turkish_ci NOT NULL DEFAULT '#cccccc',
  `arrowline` varchar(50) COLLATE utf8mb4_turkish_ci NOT NULL DEFAULT 'straight'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Dumping data for table `edges`
--

INSERT INTO `edges` (`tid`, `id`, `source`, `target`, `bg`, `arrowline`) VALUES
(161, 'Gaziantep Buyuksehir Belediyesi-Sahinbey Belediyesi', 'Gaziantep Buyuksehir Belediyesi', 'Sahinbey Belediyesi', '#518ddb', 'unbundled-bezier'),
(162, 'Gaziantep Buyuksehir Belediyesi-Sehitkamil Belediyesi', 'Gaziantep Buyuksehir Belediyesi', 'Sehitkamil Belediyesi', '#518ddb', 'unbundled-bezier'),
(163, 'Gaziantep Buyuksehir Belediyesi-Araban Belediyesi', 'Gaziantep Buyuksehir Belediyesi', 'Araban Belediyesi', '#518ddb', 'unbundled-bezier'),
(164, 'A-B', 'A', 'B', '#d50707', 'unbundled-bezier'),
(165, 'A-C', 'A', 'C', '#d50707', 'unbundled-bezier'),
(166, '1-2', '1', '2', '#56d2d0', 'straight'),
(167, '1-3', '1', '3', '#56d2d0', 'straight'),
(168, '1-4', '1', '4', '#56d2d0', 'straight');

-- --------------------------------------------------------

--
-- Table structure for table `nodes`
--

CREATE TABLE `nodes` (
  `tid` int(11) NOT NULL,
  `type` varchar(50) COLLATE utf8mb4_turkish_ci NOT NULL,
  `id` varchar(100) COLLATE utf8mb4_turkish_ci NOT NULL,
  `source` varchar(100) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `source2` varchar(100) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `source3` varchar(100) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `sh` varchar(50) COLLATE utf8mb4_turkish_ci NOT NULL DEFAULT 'ellipse',
  `bg` varchar(20) COLLATE utf8mb4_turkish_ci NOT NULL DEFAULT '#cccccc',
  `bw` varchar(2) COLLATE utf8mb4_turkish_ci NOT NULL DEFAULT '1',
  `bc` varchar(20) COLLATE utf8mb4_turkish_ci NOT NULL DEFAULT '#333333',
  `text` varchar(1000) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `link` varchar(255) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `location` text COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `category` varchar(100) COLLATE utf8mb4_turkish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Dumping data for table `nodes`
--

INSERT INTO `nodes` (`tid`, `type`, `id`, `source`, `source2`, `source3`, `sh`, `bg`, `bw`, `bc`, `text`, `link`, `address`, `location`, `category`) VALUES
(202, 'main', 'Gaziantep Buyuksehir Belediyesi', 'Gaziantep Buyuksehir Belediyesi', NULL, NULL, 'ellipse', '#518ddb', '1', '#333333', 'https://www.gaziantep.bel.tr/tr\nhttps://www.gaziantep.bel.tr/tr\nhttps://www.gaziantep.bel.tr/tr', 'https://www.gaziantep.bel.tr/tr', 'Address: İncili Pınar, 36017. Sk., 27090 Şehitkamil/Gaziantep', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12734.518703496637!2d37.3735625!3d37.0663072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9b5a1b94152c1998!2sGaziantep%20Metropolitan%20Municipality!5e0!3m2!1sen!2str!4v1659965477875!5m2!1sen!2str\" width=\"400\" height=\"300\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>', 'Belediye'),
(203, 'main', 'Sahinbey Belediyesi', 'Gaziantep Buyuksehir Belediyesi', NULL, NULL, 'ellipse', '#518ddb', '1', '#333333', 'https://www.gaziantep.bel.tr/tr\nhttps://www.gaziantep.bel.tr/tr\nhttps://www.gaziantep.bel.tr/tr', 'https://www.gaziantep.bel.tr/tr', 'Kolejtepe, Yeşil Cami Cd. No:8, 27070 Şahinbey/Gaziantep', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12735.913148182914!2d37.3633943!3d37.0580006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x58e54a311dddb36!2sSahinbey%20Belediyesi!5e0!3m2!1sen!2str!4v1659965621693!5m2!1sen!2str\" width=\"400\" height=\"300\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>', 'Belediye'),
(204, 'main', 'Sehitkamil Belediyesi', 'Gaziantep Buyuksehir Belediyesi', NULL, NULL, 'ellipse', '#518ddb', '1', '#333333', 'Gaziantep, previously and still informally called Aintab or Antep, is the capital of the Gaziantep Province, in the westernmost part of Turkey\'s Southeastern Anatolia Region and partially in the Mediterranean Region, approximately 185 km east of Adana and 97 km north of Aleppo, Syria. Wikipedia', 'https://www.sehitkamil.bel.tr/', 'Kolejtepe, Yeşil Cami Cd. No:8, 27070 Şahinbey/Gaziantep', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50943.13502160005!2d37.38013695!3d37.05877145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e6b4f7f18c2f%3A0xc02e8b35116baad0!2sGaziantep!5e0!3m2!1sen!2str!4v1659965720454!5m2!1sen!2str\" width=\"400\" height=\"300\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>', 'Belediye'),
(205, 'main', 'Araban Belediyesi', 'Gaziantep Buyuksehir Belediyesi', NULL, NULL, 'ellipse', '#518ddb', '1', '#333333', 'Gaziantep, previously and still informally called Aintab or Antep, is the capital of the Gaziantep Province, in the westernmost part of Turkey\'s Southeastern Anatolia Region and partially in the Mediterranean Region, approximately 185 km east of Adana and 97 km north of Aleppo, Syria. Wikipedia', 'https://www.araban.bel.tr/', 'Kolejtepe, Yeşil Cami Cd. No:8, 27070 Şahinbey/Gaziantep', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12673.73615519742!2d37.68618845!3d37.42685005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15323ef3606c5e97%3A0xced4a1374bb9a5ad!2sAraban%2C%20Gaziantep!5e0!3m2!1sen!2str!4v1659965806586!5m2!1sen!2str\" width=\"400\" height=\"300\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>', 'Belediye'),
(206, 'main', 'A', 'A', NULL, NULL, 'ellipse', '#d50707', '1', '#333333', 'Description', 'Link', 'Address', 'Map', 'Test'),
(207, 'main', 'B', 'A', NULL, NULL, 'ellipse', '#d50707', '1', '#333333', 'Description', 'Link', 'Address', 'Map', 'Test'),
(208, 'main', 'C', 'A', NULL, NULL, 'ellipse', '#d50707', '1', '#333333', 'Description', 'Link', 'Address', 'Map', 'Test'),
(209, 'main', '1', '1', NULL, NULL, 'ellipse', '#56d2d0', '1', '#333333', 'Description', 'Link', 'Address', 'Map', 'Test'),
(210, 'main', '2', '1', NULL, NULL, 'ellipse', '#56d2d0', '1', '#333333', 'Description', 'Link', 'Address', 'Map', 'Test'),
(211, 'main', '3', '1', NULL, NULL, 'ellipse', '#56d2d0', '1', '#333333', 'Description', 'Link', 'Address', 'Map', 'Test'),
(212, 'main', '4', '1', NULL, NULL, 'ellipse', '#56d2d0', '1', '#333333', 'Description', 'Link', 'Address', 'Map', 'Test');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `edges`
--
ALTER TABLE `edges`
  ADD PRIMARY KEY (`tid`);

--
-- Indexes for table `nodes`
--
ALTER TABLE `nodes`
  ADD PRIMARY KEY (`tid`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `edges`
--
ALTER TABLE `edges`
  MODIFY `tid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=169;

--
-- AUTO_INCREMENT for table `nodes`
--
ALTER TABLE `nodes`
  MODIFY `tid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=222;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
