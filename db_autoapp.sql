-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 06, 2018 at 07:58 PM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `db_autoapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_details`
--

CREATE TABLE `tbl_details` (
  `details_id` int(10) UNSIGNED NOT NULL,
  `details_part` varchar(30) NOT NULL,
  `details_pic` varchar(25) NOT NULL,
  `detail_desc` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_details`
--

INSERT INTO `tbl_details` (`details_id`, `details_part`, `details_pic`, `detail_desc`) VALUES
(1, 'free view', 'freeview.jpg', 'SAMPLE TEXT ABOUT [FREE VIEW] AND INTERESTING FACTS. SAMPLE TEXT ABOUT THE SELECTED DETAIL AND INTERESTING FACTS.'),
(2, 'dimensions', 'dimensions.jpg', 'SAMPLE TEXT ABOUT [DIMENSIONS] AND INTERESTING FACTS. SAMPLE TEXT ABOUT THE SELECTED DETAIL AND INTERESTING FACTS.'),
(3, 'battery', 'battery.jpg', 'SAMPLE TEXT ABOUT [BATTERY] AND INTERESTING FACTS. SAMPLE TEXT ABOUT THE SELECTED DETAIL AND INTERESTING FACTS.'),
(4, 'engine', 'engine.jpg', 'SAMPLE TEXT ABOUT [ENGINE] AND INTERESTING FACTS. SAMPLE TEXT ABOUT THE SELECTED DETAIL AND INTERESTING FACTS.'),
(5, 'four wheel drive', 'fourwheel.jpg', 'SAMPLE TEXT ABOUT [FOUR WHEEL DRIVE] AND INTERESTING FACTS. SAMPLE TEXT ABOUT THE SELECTED DETAIL AND INTERESTING FACTS.'),
(6, 'transmission', 'transmission.jpg', 'SAMPLE TEXT ABOUT [TRANSMISSION] AND INTERESTING FACTS. SAMPLE TEXT ABOUT THE SELECTED DETAIL AND INTERESTING FACTS.'),
(7, 'aerodynamics', 'aerodynamics.jpg', 'SAMPLE TEXT ABOUT [AERODYNAMICS] AND INTERESTING FACTS. SAMPLE TEXT ABOUT THE SELECTED DETAIL AND INTERESTING FACTS.'),
(8, 'lighting', 'lighting.jpg', 'SAMPLE TEXT ABOUT [LIGHTING] AND INTERESTING FACTS. SAMPLE TEXT ABOUT THE SELECTED DETAIL AND INTERESTING FACTS.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_details`
--
ALTER TABLE `tbl_details`
  ADD PRIMARY KEY (`details_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_details`
--
ALTER TABLE `tbl_details`
  MODIFY `details_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
