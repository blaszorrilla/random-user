/*
SQLyog Community v13.2.1 (64 bit)
MySQL - 5.7.44-log : Database - randomuser
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`randomuser` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `randomuser`;

/*Table structure for table `usuarios` */

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `telefono` varbinary(255) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `usuarios` */

insert  into `usuarios`(`id`,`nombre`,`correo`,`telefono`,`foto`) values 
(1,'Sibylla','sibylla.bohme@example.com','0075-5376506','https://randomuser.me/api/portraits/med/women/0.jpg'),
(2,'Valtteri','valtteri.tuominen@example.com','03-987-213','https://randomuser.me/api/portraits/med/men/13.jpg'),
(3,'Esmeralda','esmeralda.villa@example.com','(632) 656 1086','https://randomuser.me/api/portraits/med/women/39.jpg'),
(4,'Lyana','lyana.maystrenko@example.com','(098) L54-0442','https://randomuser.me/api/portraits/med/women/6.jpg'),
(5,'Clara','clara.sorensen@example.com','99370532','https://randomuser.me/api/portraits/med/women/57.jpg'),
(6,'Josefa','josefa.crespo@example.com','982-964-319','https://randomuser.me/api/portraits/med/women/47.jpg'),
(7,'Javier','javier.carrasco@example.com','969-045-274','https://randomuser.me/api/portraits/med/men/19.jpg');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
