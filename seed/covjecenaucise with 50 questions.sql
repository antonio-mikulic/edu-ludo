-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2018 at 03:52 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `covjecenaucise`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` int(11) NOT NULL,
  `isCorrect` tinyint(4) NOT NULL,
  `description` varchar(255) CHARACTER SET latin2 COLLATE latin2_croatian_ci NOT NULL,
  `questionId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `isCorrect`, `description`, `questionId`) VALUES
(78, 1, 'Bird', 82),
(80, 1, 'Točno', 83),
(81, 0, 'Netočno', 83),
(82, 1, 'Zeleno', 84),
(83, 0, 'Crveno', 84),
(84, 0, 'Žuto', 84),
(85, 1, '26', 85),
(86, 0, '9', 86),
(87, 1, '12', 86),
(88, 0, '7', 86),
(89, 1, 'Bundaš', 87),
(90, 1, 'Točno', 88),
(91, 0, 'Netočno', 88),
(92, 0, '3', 89),
(93, 0, '1', 89),
(94, 1, '2', 89),
(95, 1, 'Točno', 90),
(96, 0, 'Netočno', 90),
(97, 1, 'gol', 91),
(98, 0, 'Točno', 92),
(99, 1, 'Netočno', 92),
(100, 0, 'Imenska', 93),
(101, 1, 'Vlastita', 93),
(102, 0, 'Opća', 93),
(103, 0, 'Kos', 94),
(104, 1, 'Medo', 94),
(105, 0, 'Lav', 94),
(106, 1, 'Točno', 95),
(107, 0, 'Netočno', 95),
(108, 1, 'book', 96),
(109, 1, 'Zagreb', 97),
(110, 1, 'Točno', 98),
(111, 0, 'Netočno', 98),
(112, 0, 'Ljeto', 99),
(113, 0, 'Jesen', 99),
(114, 1, 'Proljeće', 99),
(115, 1, '5', 100),
(116, 0, '36', 101),
(117, 1, '48', 101),
(118, 0, '16', 101),
(119, 1, '60', 102),
(120, 1, 'Točno', 103),
(121, 0, 'Netočno', 103),
(122, 0, '25', 104),
(123, 1, '100', 104),
(124, 0, '15', 104),
(125, 1, 'Točno', 105),
(126, 0, 'Netočno', 105),
(127, 0, '10', 106),
(128, 1, '25', 106),
(129, 0, '0', 106),
(130, 1, '30', 107),
(131, 1, '70', 108),
(132, 1, '6', 109),
(133, 1, '10', 110),
(134, 1, '99', 111),
(135, 0, 'Točno', 112),
(136, 1, 'Netočno', 112),
(137, 1, 'Točno', 113),
(138, 0, 'Netočno', 113),
(139, 0, 'Točno', 114),
(140, 1, 'Netočno', 114),
(141, 1, 'policajac', 115),
(142, 0, 'pješaci', 115),
(143, 0, 'prometni znakovi', 115),
(144, 1, 'kolniku', 116),
(145, 1, 'zebra', 117),
(146, 0, 'žirafa', 117),
(147, 0, 'patka', 117),
(148, 1, 'Točno', 118),
(149, 0, 'Netočno', 118),
(150, 1, 'desnom', 119),
(151, 0, 'Kreni', 120),
(152, 0, 'Promjena stanja', 120),
(153, 1, 'Stani i čekaj', 120),
(154, 0, 'Pretrčavati cestu', 121),
(155, 0, 'Skakati pred aute', 121),
(156, 1, 'Prelaziti cestu kada je zeleno na semaforu', 121),
(157, 1, 'Točno', 122),
(158, 0, 'Netočno', 122);

-- --------------------------------------------------------

--
-- Table structure for table `customquestionhistory`
--

CREATE TABLE `customquestionhistory` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `questionId` int(11) NOT NULL,
  `submitDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customquestionhistory`
--

INSERT INTO `customquestionhistory` (`id`, `userId`, `questionId`, `submitDate`) VALUES
(6, 2, 82, '2018-06-06 19:43:55'),
(9, 5, 85, '2018-06-06 22:36:01'),
(10, 5, 86, '2018-06-06 22:36:33'),
(11, 5, 87, '2018-06-06 22:37:16'),
(12, 5, 88, '2018-06-06 22:38:01'),
(13, 5, 89, '2018-06-06 22:38:27'),
(14, 5, 90, '2018-06-06 22:41:09'),
(15, 5, 91, '2018-06-06 22:42:05'),
(16, 5, 92, '2018-06-06 22:42:30'),
(17, 5, 93, '2018-06-06 22:43:29'),
(18, 5, 94, '2018-06-06 22:44:46'),
(19, 5, 95, '2018-06-06 22:45:27'),
(20, 5, 96, '2018-06-06 22:46:20'),
(21, 5, 97, '2018-06-06 22:47:00'),
(22, 5, 98, '2018-06-06 22:47:40'),
(23, 5, 99, '2018-06-06 22:48:28'),
(24, 2, 100, '2018-06-08 14:26:53'),
(25, 2, 101, '2018-06-08 14:27:52'),
(26, 2, 102, '2018-06-08 14:30:24'),
(27, 2, 103, '2018-06-08 14:30:49'),
(28, 2, 104, '2018-06-08 14:31:31'),
(29, 2, 105, '2018-06-08 15:23:30'),
(30, 2, 106, '2018-06-08 15:25:36'),
(31, 2, 107, '2018-06-08 15:27:13'),
(32, 2, 108, '2018-06-08 15:29:14'),
(33, 2, 109, '2018-06-08 15:30:41'),
(34, 2, 110, '2018-06-08 15:31:06'),
(35, 2, 111, '2018-06-08 15:31:36'),
(36, 2, 112, '2018-06-08 15:36:40'),
(37, 2, 113, '2018-06-08 15:40:24'),
(38, 2, 114, '2018-06-08 15:40:52'),
(39, 2, 115, '2018-06-08 15:44:04'),
(40, 2, 116, '2018-06-08 15:45:08'),
(41, 2, 117, '2018-06-08 15:45:39'),
(42, 2, 118, '2018-06-08 15:46:54'),
(43, 2, 119, '2018-06-08 15:47:28'),
(44, 2, 120, '2018-06-08 15:48:46'),
(45, 2, 121, '2018-06-08 15:50:01'),
(46, 2, 122, '2018-06-08 15:52:20');

-- --------------------------------------------------------

--
-- Table structure for table `difficulty`
--

CREATE TABLE `difficulty` (
  `id` int(11) NOT NULL,
  `name` varchar(45) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `difficulty`
--

INSERT INTO `difficulty` (`id`, `name`) VALUES
(1, 'Lagano'),
(2, 'Srednje'),
(3, 'Teško');

-- --------------------------------------------------------

--
-- Table structure for table `questiongroup`
--

CREATE TABLE `questiongroup` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET latin2 COLLATE latin2_croatian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questiongroup`
--

INSERT INTO `questiongroup` (`id`, `name`) VALUES
(1, 'Matematika'),
(2, 'Engleski'),
(3, 'Hrvatski'),
(4, 'Priroda i društvo'),
(5, 'Vjeronauk'),
(8, 'Glazbena kultura'),
(10, 'Likovna kultura'),
(12, 'Njemački jezik'),
(14, 'Geografija'),
(16, 'Povijest'),
(18, 'Tehnička kultura'),
(20, 'Informatika'),
(22, 'Povijest'),
(24, 'Kultura'),
(26, 'Igre'),
(28, 'Zabavna pitanja');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `description` varchar(255) COLLATE latin2_croatian_ci NOT NULL,
  `questionGroupId` int(11) NOT NULL,
  `difficultyId` int(11) NOT NULL,
  `theme` varchar(255) COLLATE latin2_croatian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2 COLLATE=latin2_croatian_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `description`, `questionGroupId`, `difficultyId`, `theme`) VALUES
(82, 'Prevedi na engleski: Ptica', 2, 3, 'Prijevod'),
(83, 'Riječ Marko je imenica?', 3, 1, ''),
(84, 'Smijemo preći cestu kada je na semaforu:', 4, 2, ''),
(85, 'Koliko je 14 + 12', 1, 3, ''),
(86, '7+5=?', 1, 2, 'Zbrajanje'),
(87, 'Kako se zove pas šegrta Hlapića?', 3, 3, 'Lektira'),
(88, '4+7=11?', 1, 1, 'Zbrajanje'),
(89, '9-7=?', 1, 2, 'Oduzimanje'),
(90, 'Mama tvoje mame tebi je baka?', 4, 1, 'Obitelj'),
(91, 'U nogometnoj utakmici cilj nam je zabiti____?', 26, 3, 'Sport'),
(92, '2*4=6?', 1, 1, 'Množenje'),
(93, 'Riječ Marko je kakva imenica?', 3, 2, 'Vrste riječi'),
(94, 'Koja životinja spava zimski san?', 4, 2, 'Priroda'),
(95, 'Riječ \"trčati\" je glagol?', 3, 1, 'Vrste riječi'),
(96, 'Engleska riječ za knjigu je?', 2, 3, 'Prijevod'),
(97, 'Koji je glavni grad Republike Hrvatske?', 4, 3, 'Društvo'),
(98, 'Himna Republike Hrvatske zove se \"Lijepa naša domovino\"?', 4, 1, 'Društvo'),
(99, 'Koje godišnje doba dolazi iza zime?', 4, 2, 'Priroda'),
(100, 'Koliko je 2+3?', 1, 3, 'Zbrajanje'),
(101, 'Koliko je 4 * 12?', 1, 2, 'Množenje'),
(102, 'Koliko je 15+45?', 1, 3, 'Zbrajanje'),
(103, 'Dali je 3 * 15 = 45?', 1, 1, 'Zbrajanje'),
(104, 'Koliko je 20 * 5?', 1, 2, 'Množenje'),
(105, 'Dali je 5  + 5 = 10?', 1, 1, 'Zbrajanje'),
(106, 'Koliko je 5 * 5?', 1, 2, 'Množenje'),
(107, 'Izračunaj: 10 * 3', 1, 3, 'Množenje'),
(108, 'Izračunaj: 10 * 7', 1, 3, 'Množenje'),
(109, 'Izračunaj: 12 * 0.5', 1, 3, 'Množenje'),
(110, 'Izračunaj: 4 * 2.5', 1, 1, 'Množenje'),
(111, 'Izračunaj: 11*9', 1, 3, 'Množenje'),
(112, 'Dali je 5 + 10 = 50?', 1, 1, 'Zbrajanje'),
(113, 'Dali je 13 + 24 = 27?', 1, 1, ''),
(114, 'Dali je 13 + 24 = 11?', 1, 1, 'Zbrajanje'),
(115, 'Prometom upravljaju', 4, 2, ''),
(116, 'Vozila se kreću po ________', 4, 3, ''),
(117, 'Cestu prelazimo na mjestu koje se zove', 4, 2, ''),
(118, 'Vozila se kreću desnom stranom ceste?', 4, 1, ''),
(119, 'Kojom stranom ceste se kreću (hodaju) pješaci, ako nema pločnika?', 4, 3, ''),
(120, 'Što znači crveno svjetlo na semaforu?', 4, 2, ''),
(121, 'Što od sljedećeg smiješ raditi?', 4, 2, ''),
(122, 'Trokut ima 4 kuta?', 1, 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `resetpassword`
--

CREATE TABLE `resetpassword` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `date_requested` datetime NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `resetpassword`
--

INSERT INTO `resetpassword` (`id`, `user_id`, `date_requested`, `token`) VALUES
(1, 31, '2018-05-06 21:38:11', '78bcc6dc0e82554d6fe864d315c984b3'),
(2, 31, '2018-05-06 21:38:44', 'fd7e3ed81fbe8ccf14e6f09a804b2487'),
(3, 31, '2018-05-06 21:38:56', 'c15e25504fa43777258f8e0936b1d89c'),
(4, 31, '2018-05-06 21:39:07', '69e0cafe691ad43946410c5aa93500ef'),
(5, 31, '2018-05-06 21:39:08', '95fa1294da3002737d65474346f1956d'),
(6, 31, '2018-05-06 21:42:14', 'fb71f96fae4ea50a3bd2fed255395c95'),
(7, 31, '2018-05-06 21:44:08', '29293fac8e8436d0ffb54bca7e7911bd'),
(8, 31, '2018-05-06 21:45:18', '285eaca28d3d992f47459c87e1eb3833');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) CHARACTER SET latin2 COLLATE latin2_croatian_ci NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `level`) VALUES
(1, 'dkos1@tvz.hr', 'b860f0fdae0221847001126edbca0f0e', 'dkos1@tvz.hr', 1),
(2, 'Antonio', '6568a8fa22dd2b5bc48eb1b1fcaf71a0', 'amnewmail@gmail.com', 99),
(3, 'max', '223d2fc79b2189ee9e4d7c36cfdcfa97', 'max.krizanic97@gmail.com', 1),
(4, 'max2', '223d2fc79b2189ee9e4d7c36cfdcfa97', 'robin.lood97@gmail.com', 1),
(5, 'max3', '223d2fc79b2189ee9e4d7c36cfdcfa97', 'max.krizanic@gmail.com', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_answers_questions1_idx` (`questionId`);

--
-- Indexes for table `customquestionhistory`
--
ALTER TABLE `customquestionhistory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_customQuestionHistory_Users_idx` (`userId`),
  ADD KEY `fk_customQuestionHistory_questions1_idx` (`questionId`);

--
-- Indexes for table `difficulty`
--
ALTER TABLE `difficulty`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questiongroup`
--
ALTER TABLE `questiongroup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_questions_difficulty1_idx` (`difficultyId`),
  ADD KEY `fk_questions_group1_idx` (`questionGroupId`);

--
-- Indexes for table `resetpassword`
--
ALTER TABLE `resetpassword`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=159;

--
-- AUTO_INCREMENT for table `customquestionhistory`
--
ALTER TABLE `customquestionhistory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `difficulty`
--
ALTER TABLE `difficulty`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `questiongroup`
--
ALTER TABLE `questiongroup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- AUTO_INCREMENT for table `resetpassword`
--
ALTER TABLE `resetpassword`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `fk_answers_questions1` FOREIGN KEY (`questionId`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `customquestionhistory`
--
ALTER TABLE `customquestionhistory`
  ADD CONSTRAINT `fk_customQuestionHistory_Users` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_customQuestionHistory_questions1` FOREIGN KEY (`questionId`) REFERENCES `questions` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `fk_questions_difficulty1` FOREIGN KEY (`difficultyId`) REFERENCES `difficulty` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_questions_group1` FOREIGN KEY (`questionGroupId`) REFERENCES `questiongroup` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
