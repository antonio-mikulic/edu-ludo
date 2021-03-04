-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 07, 2018 at 08:51 AM
-- Server version: 5.7.21
-- PHP Version: 7.2.4

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

DROP TABLE IF EXISTS `answers`;
CREATE TABLE IF NOT EXISTS `answers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `isCorrect` tinyint(4) NOT NULL,
  `description` varchar(255) CHARACTER SET latin2 COLLATE latin2_croatian_ci NOT NULL,
  `questionId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_answers_questions1_idx` (`questionId`)
) ENGINE=InnoDB AUTO_INCREMENT=166 DEFAULT CHARSET=latin1;

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
(115, 0, 'Točno', 100),
(116, 1, 'Netočno', 100),
(117, 0, 'Točno', 101),
(118, 1, 'Netočno', 101),
(119, 1, 'cat', 102),
(120, 0, 'Rukomet', 103),
(121, 1, 'Nogomet', 103),
(122, 0, 'Košarka', 103),
(123, 0, 'Točno', 104),
(124, 1, 'Netočno', 104),
(125, 1, '16', 105),
(126, 1, '18', 106),
(127, 0, '20', 106),
(128, 0, '13', 106),
(129, 1, 'Točno', 107),
(130, 0, 'Netočno', 107),
(131, 0, 'Nećak', 108),
(132, 0, 'Punac', 108),
(133, 1, 'Bratić', 108),
(134, 1, 'četkica', 109),
(135, 0, 'Točno', 110),
(136, 1, 'Netočno', 110),
(137, 1, 'Sunce', 111),
(138, 1, 'Točno', 112),
(139, 0, 'Netočno', 112),
(140, 0, 'Točno', 113),
(141, 1, 'Netočno', 113),
(142, 0, '07.12.', 114),
(143, 1, '25.12.', 114),
(144, 0, '31.12.', 114),
(145, 0, 'Zelena', 115),
(146, 1, 'Žuta', 115),
(147, 0, 'Crvena', 115),
(148, 0, 'Točno', 116),
(149, 1, 'Netočno', 116),
(150, 1, '11', 117),
(151, 1, '5', 118),
(152, 0, '24', 118),
(153, 0, '-4', 118),
(154, 1, 'Lovrak', 119),
(155, 1, 'apple', 120),
(156, 0, 'Srna', 121),
(157, 0, 'Kuna', 121),
(158, 1, 'Mačka', 121),
(159, 1, 'Točno', 122),
(160, 0, 'Netočno', 122);

-- --------------------------------------------------------

--
-- Table structure for table `customquestionhistory`
--

DROP TABLE IF EXISTS `customquestionhistory`;
CREATE TABLE IF NOT EXISTS `customquestionhistory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `questionId` int(11) NOT NULL,
  `submitDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_customQuestionHistory_Users_idx` (`userId`),
  KEY `fk_customQuestionHistory_questions1_idx` (`questionId`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=latin1;

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
(24, 5, 100, '2018-06-06 23:11:33'),
(25, 5, 101, '2018-06-06 23:11:54'),
(26, 5, 102, '2018-06-06 23:12:26'),
(27, 5, 103, '2018-06-06 23:13:20'),
(28, 5, 104, '2018-06-06 23:13:49'),
(29, 5, 105, '2018-06-06 23:14:15'),
(30, 5, 106, '2018-06-06 23:14:40'),
(31, 5, 107, '2018-06-06 23:15:00'),
(32, 5, 108, '2018-06-06 23:15:41'),
(33, 5, 109, '2018-06-06 23:16:49'),
(34, 5, 110, '2018-06-06 23:24:53'),
(35, 5, 111, '2018-06-06 23:25:39'),
(36, 5, 112, '2018-06-06 23:27:04'),
(37, 5, 113, '2018-06-06 23:27:58'),
(38, 5, 114, '2018-06-06 23:29:04'),
(39, 5, 115, '2018-06-06 23:33:41'),
(40, 5, 116, '2018-06-06 23:34:23'),
(41, 5, 117, '2018-06-06 23:35:39'),
(42, 5, 118, '2018-06-06 23:36:22'),
(43, 5, 119, '2018-06-06 23:37:16'),
(44, 5, 120, '2018-06-06 23:38:12'),
(45, 5, 121, '2018-06-06 23:39:38'),
(46, 5, 122, '2018-06-06 23:42:02');

-- --------------------------------------------------------

--
-- Table structure for table `difficulty`
--

DROP TABLE IF EXISTS `difficulty`;
CREATE TABLE IF NOT EXISTS `difficulty` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

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

DROP TABLE IF EXISTS `questiongroup`;
CREATE TABLE IF NOT EXISTS `questiongroup` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET latin2 COLLATE latin2_croatian_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

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

DROP TABLE IF EXISTS `questions`;
CREATE TABLE IF NOT EXISTS `questions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) COLLATE latin2_croatian_ci NOT NULL,
  `questionGroupId` int(11) NOT NULL,
  `difficultyId` int(11) NOT NULL,
  `theme` varchar(255) COLLATE latin2_croatian_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_questions_difficulty1_idx` (`difficultyId`),
  KEY `fk_questions_group1_idx` (`questionGroupId`)
) ENGINE=InnoDB AUTO_INCREMENT=125 DEFAULT CHARSET=latin2 COLLATE=latin2_croatian_ci;

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
(100, 'Jesen počinje 21.9.?', 4, 1, 'Društvo'),
(101, 'Proljeće počinje 21.6.?', 4, 1, 'Društvo'),
(102, 'Kako se na engleskom jeziku kaže mačka?', 2, 3, 'Prijevod'),
(103, 'U kojem sportu imamo dvije ekipe po 11 igrača?', 26, 2, 'Sport'),
(104, 'Luka Modrić poznati je hrvatski košarkaš?', 26, 1, 'Sport'),
(105, '4+12=?', 1, 3, 'Zbrajanje'),
(106, '23-5=?', 1, 2, 'Oduzimanje'),
(107, '9/3=3?', 1, 1, 'Dijeljenje'),
(108, 'Sin tvoga ujaka tebi je:', 4, 2, 'Obitelj'),
(109, 'Za pranje zubi potrebna nam je____?', 4, 3, 'Higijena'),
(110, 'Nova godina slavi se 31.12.?', 4, 1, 'Društvo'),
(111, 'Cijeli svijet obasjava i grije_______.', 4, 3, 'Priroda'),
(112, 'Dražen Petrović legendarni je hrvatski košarkaš?', 26, 1, 'Sport'),
(113, 'Grad Mostar nalazi se u Republici Hrvatskoj?', 14, 1, ''),
(114, 'Kojeg se datuma slavi Božić?', 5, 2, ''),
(115, 'U sredini semafora nalazi se boja:', 4, 2, 'Društvo'),
(116, 'Dio prometne površine po kojoj se kreću pješaci zove se kolnik?', 4, 1, 'Promet'),
(117, '24-13=?', 1, 3, 'Oduzimanje'),
(118, '4*2-3=?', 1, 2, 'Redoslijed operacija'),
(119, 'Vlaku u snijegu napisao je Mato _____?', 3, 3, 'Lektira'),
(120, 'Engleska riječ za jabuku je?', 2, 3, 'Prijevod'),
(121, 'Kućni ljubimac je:', 4, 2, 'Priroda'),
(122, 'U jesen često kiši?', 4, 1, 'Priroda');

-- --------------------------------------------------------

--
-- Table structure for table `resetpassword`
--

DROP TABLE IF EXISTS `resetpassword`;
CREATE TABLE IF NOT EXISTS `resetpassword` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` int(10) UNSIGNED NOT NULL,
  `date_requested` datetime NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET latin2 COLLATE latin2_croatian_ci NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `level` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `level`) VALUES
(1, 'dkos1@tvz.hr', 'b860f0fdae0221847001126edbca0f0e', 'dkos1@tvz.hr', 1),
(2, 'Antonio', '6568a8fa22dd2b5bc48eb1b1fcaf71a0', 'amnewmail@gmail.com', 1),
(3, 'max', '223d2fc79b2189ee9e4d7c36cfdcfa97', 'max.krizanic97@gmail.com', 1),
(4, 'max2', '223d2fc79b2189ee9e4d7c36cfdcfa97', 'robin.lood97@gmail.com', 1),
(5, 'max3', '223d2fc79b2189ee9e4d7c36cfdcfa97', 'max.krizanic@gmail.com', 1);

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
  ADD CONSTRAINT `fk_customQuestionHistory_questions1` FOREIGN KEY (`questionId`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

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
