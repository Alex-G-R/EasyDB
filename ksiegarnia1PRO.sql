
--
-- Table structure for table `klienci`
--

DROP TABLE IF EXISTS `klienci`;


CREATE TABLE `klienci` (
  `idKlienta` int(12) NOT NULL AUTO_INCREMENT,
  `nazwisko` varchar(30) DEFAULT NULL,
  `imie` varchar(25) DEFAULT NULL,
  `ulica` varchar(20) DEFAULT NULL,
  `nrdomu` int(12) DEFAULT NULL,
  `miejscowosc` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`idKlienta`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;


--
-- Dumping data for table `klienci`
--

LOCK TABLES `klienci` WRITE;

INSERT INTO `klienci` VALUES (1,'Blue','Ball','Niebieska',8,'Bydgoszcz'),(2,'Red','Rose','Czerwona',6,'Nightcity'),(3,'Green','Grick','Zielona',87,'Maj'),(4,'Black','Bozo','Wolna',11,'Pekin'),(5,'Carl','Carlos','Szybka',102,'Wrzesien');

UNLOCK TABLES;

--
-- Table structure for table `ksiazki`
--

DROP TABLE IF EXISTS `ksiazki`;

CREATE TABLE `ksiazki` (
  `ISBN` int(12) NOT NULL AUTO_INCREMENT,
  `imieautora` varchar(25) DEFAULT NULL,
  `nazwiskoautora` varchar(25) DEFAULT NULL,
  `tytul` varchar(30) DEFAULT NULL,
  `cena` float(6,2) DEFAULT NULL,
  `rokwydania` date DEFAULT NULL,
  PRIMARY KEY (`ISBN`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;


--
-- Dumping data for table `ksiazki`
-- 

LOCK TABLES `ksiazki` WRITE;

INSERT INTO `ksiazki` VALUES (1,'John','Tam','Kot i pies',225.99,'2005-04-23'),(2,'John','Tu','Duma z ciepła',199.99,'2010-07-12'),(3,'John','Fri','Fretka i frytka',220.99,'2008-11-05'),(4,'John','Four','Zielone oczko',180.00,'2013-02-16'),(5,'John','Five','Pociagi jezdza szybko',245.50,'2003-09-08');

UNLOCK TABLES;

--
-- Table structure for table `recenzje_ksiazek`
--

DROP TABLE IF EXISTS `recenzje_ksiazek`;

CREATE TABLE `recenzje_ksiazek` (
  `ISBN` int(12) NOT NULL,
  `recenzja` text DEFAULT NULL,
  PRIMARY KEY (`ISBN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `recenzje_ksiazek`
--

LOCK TABLES `recenzje_ksiazek` WRITE;

UNLOCK TABLES;

--
-- Table structure for table `zamowienia`
--

DROP TABLE IF EXISTS `zamowienia`;

CREATE TABLE `zamowienia` (
  `idzamowienia` int(12) NOT NULL AUTO_INCREMENT,
  `ISBN` int(12) DEFAULT NULL,
  `idklienta` int(12) DEFAULT NULL,
  `data` date DEFAULT NULL,
  PRIMARY KEY (`idzamowienia`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;


--
-- Dumping data for table `zamowienia`
--

LOCK TABLES `zamowienia` WRITE;

INSERT INTO `zamowienia` VALUES (1,123456789,123456,'2023-01-01'),(2,098765432,465726,'2023-01-02'),(3,102938485,967467,'2023-01-03'),(4,756453785,098765,'2023-01-04'),(5,987456093,554789,'2023-01-05');

UNLOCK TABLES;
