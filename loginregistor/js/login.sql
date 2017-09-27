-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost:3306
-- 生成日期: 2017 年 05 月 19 日 09:56
-- 服务器版本: 5.5.8
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `test`
--
CREATE DATABASE `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `uid` tinyint(4) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8 NOT NULL,
  `password` varchar(32) CHARACTER SET utf8 NOT NULL,
  `email` varchar(40) CHARACTER SET utf8 NOT NULL,
  `regdate` datetime NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=57 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`uid`, `username`, `password`, `email`, `regdate`) VALUES
(49, 'zhangsan', 'c4ca4238a0b923820dcc509a6f75849b', '1', '2017-05-19 16:53:32'),
(50, 'zhangsan1', 'c4ca4238a0b923820dcc509a6f75849b', '1', '2017-05-19 16:53:56'),
(51, 'zhangsan123', 'c4ca4238a0b923820dcc509a6f75849b', '1', '2017-05-19 16:54:29'),
(52, 'wangwu', 'c4ca4238a0b923820dcc509a6f75849b', '1', '2017-05-19 16:55:43'),
(53, 'zhangsan123456', 'c4ca4238a0b923820dcc509a6f75849b', '1', '2017-05-19 17:07:50'),
(54, 'laowang', 'c4ca4238a0b923820dcc509a6f75849b', '1', '2017-05-19 17:38:20'),
(55, 'xiaowang', 'c4ca4238a0b923820dcc509a6f75849b', '1', '2017-05-19 17:38:58'),
(56, '1111', 'c4ca4238a0b923820dcc509a6f75849b', '1', '2017-05-19 17:48:15');
