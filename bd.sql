Create database pywperu;
use pywperu;

CREATE TABLE `juegos` (
  `id_juego` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `desc` varchar(45) DEFAULT NULL,
  `imagen` varchar(250) NOT NULL,
  PRIMARY KEY (`id_juego`)
);

INSERT INTO `juegos` VALUES (1,'dota 2',NULL,'https://1000marcas.net/wp-content/uploads/2020/02/Dota-2-Fuente.jpg'),(2,'valorant',NULL,'https://cdna.artstation.com/p/assets/images/images/031/283/150/large/cj-gong-val02.jpg?1603170718'),(3,'cs:go',NULL,'https://1000logos.net/wp-content/uploads/2017/12/CSGO-Symbol.jpg'),(4,'league of legend',NULL,'https://logos-marcas.com/wp-content/uploads/2020/11/League-of-Legends-Simbolo-650x366.jpg');

CREATE TABLE `torneos` (
  `id_torneo` int NOT NULL AUTO_INCREMENT,
  `id_juego` int NOT NULL,
  `date_torneo` date NOT NULL,
  `date_end` date NOT NULL,
  `hora` varchar(100) NOT NULL,
  `premio` int NOT NULL,
  PRIMARY KEY (`id_torneo`,`id_juego`,`date_torneo`,`hora`),
  UNIQUE KEY `id_torneo_UNIQUE` (`id_torneo`),
  KEY `id_juego_idx` (`id_juego`),
  CONSTRAINT `id_juego` FOREIGN KEY (`id_juego`) REFERENCES `juegos` (`id_juego`)
);

INSERT INTO `torneos` VALUES (1,1,'2023-02-15','2023-02-13','12:00',5000),(2,2,'2023-02-15','2023-02-14','13:00',6000),(3,3,'2023-02-18','2023-02-17','15:00',7000),(4,3,'2023-02-15','2023-02-14','14:00',1000),(5,1,'2023-02-10','2023-02-09','14:00',1000),(6,2,'2023-02-09','2023-02-08','14:00',15000),(7,3,'2023-02-11','2023-02-11','14:00',1200),(8,4,'2023-02-19','2023-02-18','14:00',1500),(9,1,'2023-02-19','2023-02-18','14:00',1500),(10,2,'2023-02-19','2023-02-18','14:00',1500),(11,3,'2023-02-19','2023-02-18','14:00',1500),(12,4,'2023-02-19','2023-02-18','14:00',1500),(13,1,'2023-02-19','2023-02-18','14:00',1500),(14,2,'2023-02-19','2023-02-18','14:00',1500),(15,3,'2023-02-19','2023-02-18','14:00',1500),(16,4,'2023-02-19','2023-02-18','14:00',1500),(17,1,'2023-02-19','2023-02-18','14:00',1500);

CREATE TABLE `usuario` (
  `id_user` int DEFAULT NULL,
  `user` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`user`),
  UNIQUE KEY `user_UNIQUE` (`user`)
) 
;
INSERT INTO `usuario` VALUES (1,'carlos','carlos','carlos','carlos'),(2,'isma','isma','isma','isma'),(4,'misael','misael','perez','123'),(3,'perla','perla','canales','123');

CREATE TABLE `user_torneo` (
  `user` varchar(45) NOT NULL,
  `id_torneo` int NOT NULL,
  `desc` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user`,`id_torneo`),
  KEY `id_torneo_idx` (`id_torneo`),
  CONSTRAINT `id_torneo` FOREIGN KEY (`id_torneo`) REFERENCES `torneos` (`id_torneo`),
  CONSTRAINT `user` FOREIGN KEY (`user`) REFERENCES `usuario` (`user`)
);
INSERT INTO `user_torneo` VALUES ('isma',1,NULL),('isma',2,NULL),('isma',3,NULL),('isma',8,NULL);


