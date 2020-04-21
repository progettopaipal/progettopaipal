-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Creato il: Giu 14, 2019 alle 14:00
-- Versione del server: 5.7.26-0ubuntu0.18.04.1
-- Versione PHP: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Paypal`
--
CREATE DATABASE `Paypal` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `Paypal`;

-- --------------------------------------------------------

--
-- Struttura della tabella `Conto`
--

CREATE TABLE `Conto` (
  `Cod_conto` varchar(256) NOT NULL,
  `Saldo` int(10) UNSIGNED NOT NULL,
  `Email` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- RELATIONS FOR TABLE `Conto`:
--   `Email`
--       `Utenti` -> `Email`
--

--
-- Dump dei dati per la tabella `Conto`
--

INSERT INTO `Conto` (`Cod_conto`, `Saldo`, `Email`) VALUES
('1587456987', 0, 'kidbu@live.it'),
('benni_corsale5115267', 0, 'bennicorsale@live.it'),
('ckdmck_dkfdfdo8150165', 0, 'tel@live.it'),
('default_default', 0, 'default@live.it'),
('enjen_ijfijf7540114', 0, 'jnjvn@live.it'),
('fabio_corsale3943984', 17045, 'fabio@live.it'),
('funziona_ora4713579', 0, 'funziona@live.it'),
('milo_shiro1427838', 1050, 'giocare@live.it'),
('paluzzo_paluzzo5682514', 500, 'paluzzo@pal.it'),
('Piero_jdjfn1472997', 0, 'jdnfdiv@duhfnu.it'),
('Pietro_Corsale1482405', 5400, 'pierobelmonte97@outlook.it'),
('potter_harri5585844', 4050, 'potter@live.it'),
('proviamo_proviamo8348406', 0, 'proviamo@proviamo.it'),
('tablet_tablet1074823', 5250, 'tablet@live.it'),
('unico_unico8795375', 0, 'unico@unico.it');

-- --------------------------------------------------------

--
-- Struttura della tabella `Effettua_versamento`
--

CREATE TABLE `Effettua_versamento` (
  `Cod_vers` varchar(256) NOT NULL,
  `Email` varchar(256) NOT NULL,
  `Cod_conto` varchar(256) NOT NULL,
  `importo` int(11) NOT NULL,
  `data` varchar(10) NOT NULL,
  `num_carta_usata` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- RELATIONS FOR TABLE `Effettua_versamento`:
--   `Email`
--       `Utenti` -> `Email`
--   `Cod_conto`
--       `Conto` -> `Cod_conto`
--   `num_carta_usata`
--       `Metodi_pagamento` -> `Num_carta`
--

--
-- Dump dei dati per la tabella `Effettua_versamento`
--

INSERT INTO `Effettua_versamento` (`Cod_vers`, `Email`, `Cod_conto`, `importo`, `data`, `num_carta_usata`) VALUES
('104462781662', 'tablet@live.it', 'tablet_tablet1074823', 50, '13/6/2019', '1598741236985215'),
('167818253122', 'tablet@live.it', 'tablet_tablet1074823', 50, '13/6/2019', '1598741236985215'),
('169303538229', 'fabio@live.it', 'fabio_corsale3943984', 45, '25/5/2019', '25874123698741236'),
('175334949215', 'pierobelmonte97@outlook.it', 'Pietro_Corsale1482405', 500, '25/5/2019', '1459874521478963'),
('176418111282', 'tablet@live.it', 'tablet_tablet1074823', 50, '13/6/2019', '1598741236985215'),
('193838557530', 'tablet@live.it', 'tablet_tablet1074823', 50, '13/6/2019', '1598741236985215'),
('201682525796', 'potter@live.it', 'potter_harri5585844', 2000, '24/5/2019', '45896325879654'),
('266934894295', 'giocare@live.it', 'milo_shiro1427838', 500, '25/5/2019', '1254789632145695'),
('277297414505', 'pierobelmonte97@outlook.it', 'Pietro_Corsale1482405', 500, '3/6/2019', '1459874521478963'),
('308487686009', 'fabio@live.it', 'fabio_corsale3943984', 5000, '25/5/2019', '2587891236547532'),
('342891299249', 'fabio@live.it', 'fabio_corsale3943984', 500, '25/5/2019', '2594563215987456'),
('35187778433', 'fabio@live.it', 'fabio_corsale3943984', 500, '25/5/2019', '2587891236547532'),
('35662591313', 'tablet@live.it', 'tablet_tablet1074823', 50, '13/6/2019', '1598741236985215'),
('365383979505', 'paluzzo@pal.it', 'paluzzo_paluzzo5682514', 500, '25/5/2019', '7894268521697456'),
('457004524355', 'pierobelmonte97@outlook.it', 'Pietro_Corsale1482405', 50, '3/6/2019', '2587412369874123'),
('460194319035', 'giocare@live.it', 'milo_shiro1427838', 50, '25/5/2019', '4587896523145694'),
('503099754861', 'pierobelmonte97@outlook.it', 'Pietro_Corsale1482405', 50, '3/6/2019', '1598741236987456'),
('536230605173', 'tablet@live.it', 'tablet_tablet1074823', 50, '13/6/2019', '1598741236985215'),
('53757758809', 'potter@live.it', 'potter_harri5585844', 1000, '24/5/2019', '45896325879654'),
('547744662005', 'pierobelmonte97@outlook.it', 'Pietro_Corsale1482405', 5000, '30/5/2019', '1523654125455896'),
('563448016598', 'tablet@live.it', 'tablet_tablet1074823', 5000, '12/6/2019', '1598741236985215'),
('570359997287', 'potter@live.it', 'potter_harri5585844', 500, '24/5/2019', '4589632587456987'),
('586768330788', 'tablet@live.it', 'tablet_tablet1074823', 50, '13/6/2019', '1598741236985215'),
('601098894613', 'tablet@live.it', 'tablet_tablet1074823', 50, '13/6/2019', '5896349516258965'),
('622125651108', 'fabio@live.it', 'fabio_corsale3943984', 8000, '25/5/2019', '2587891236547532'),
('671694074452', 'pierobelmonte97@outlook.it', 'Pietro_Corsale1482405', 50, '3/6/2019', '1598741236987456'),
('692015835040', 'pierobelmonte97@outlook.it', 'Pietro_Corsale1482405', 500, '25/5/2019', '1459874521478963'),
('707822056556', 'pierobelmonte97@outlook.it', 'Pietro_Corsale1482405', 500, '3/6/2019', '1459874521478963'),
('715830110158', 'tablet@live.it', 'tablet_tablet1074823', 50, '13/6/2019', '5896349516258965'),
('747516861080', 'tablet@live.it', 'tablet_tablet1074823', 50, '13/6/2019', '1598741236985215'),
('756184743273', 'giocare@live.it', 'milo_shiro1427838', 500, '25/5/2019', '2584569874125469'),
('786169559468', 'tablet@live.it', 'tablet_tablet1074823', 50, '13/6/2019', '1598741236985215'),
('793731187649', 'pierobelmonte97@outlook.it', 'Pietro_Corsale1482405', 50, '3/6/2019', '2587412369874123'),
('804478324826', 'pierobelmonte97@outlook.it', 'Pietro_Corsale1482405', 500, '25/5/2019', '1459874521478963'),
('847933558523', 'potter@live.it', 'potter_harri5585844', 500, '24/5/2019', '45896325879654'),
('989634541525', 'fabio@live.it', 'fabio_corsale3943984', 3000, '25/5/2019', '25874123698741236');

-- --------------------------------------------------------

--
-- Struttura della tabella `Esercizio_com`
--

CREATE TABLE `Esercizio_com` (
  `Nome_e` varchar(256) NOT NULL,
  `Iban` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- RELATIONS FOR TABLE `Esercizio_com`:
--

--
-- Dump dei dati per la tabella `Esercizio_com`
--

INSERT INTO `Esercizio_com` (`Nome_e`, `Iban`) VALUES
('frutta e verdura', '0258741236987412');

-- --------------------------------------------------------

--
-- Struttura della tabella `Invia_denaro`
--

CREATE TABLE `Invia_denaro` (
  `Cod_invio` varchar(256) NOT NULL,
  `email_i` varchar(256) NOT NULL,
  `email_r` varchar(256) NOT NULL,
  `importo` int(11) NOT NULL,
  `data` varchar(10) NOT NULL,
  `num_carta_usata` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- RELATIONS FOR TABLE `Invia_denaro`:
--   `email_i`
--       `Utenti` -> `Email`
--   `email_r`
--       `Utenti` -> `Email`
--   `num_carta_usata`
--       `Metodi_pagamento` -> `Num_carta`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `Metodi_pagamento`
--

CREATE TABLE `Metodi_pagamento` (
  `Num_carta` varchar(256) NOT NULL,
  `Tipo_carta` varchar(256) NOT NULL,
  `Scadenza` varchar(10) NOT NULL,
  `Cod_conto` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- RELATIONS FOR TABLE `Metodi_pagamento`:
--   `Cod_conto`
--       `Conto` -> `Cod_conto`
--

--
-- Dump dei dati per la tabella `Metodi_pagamento`
--

INSERT INTO `Metodi_pagamento` (`Num_carta`, `Tipo_carta`, `Scadenza`, `Cod_conto`) VALUES
('0000000000000000', 'default', '00/00/0000', 'default_default'),
('1234567891234567', 'jfijfirjfq', '25/07/19', 'potter_harri5585844'),
('1236547896541236', 'jdfjdifjfie', '20/05/1245', 'milo_shiro1427838'),
('1254789632145695', 'qualunque', '20/05/1987', 'milo_shiro1427838'),
('1456325879632145', 'dokfokfo', '45/05/1254', 'milo_shiro1427838'),
('1456987235647852', 'fjeifjiej', '20/05/1254', 'milo_shiro1427838'),
('1456987412369874', 'ijdfjdifd', '20/05/1234', 'milo_shiro1427838'),
('1456987456321458', 'eefefef', '20/05/1987', 'milo_shiro1427838'),
('1459874521478963', 'mastercard', '28/05/1997', 'Pietro_Corsale1482405'),
('1475236952169548', 'femikfdjme', '20/05/1256', 'milo_shiro1427838'),
('1478963215841256', 'visa', '28/05/1997', 'Pietro_Corsale1482405'),
('1523654125455896', 'visa', '25/05/7896', 'Pietro_Corsale1482405'),
('1598741236985215', 'mastercard', '28/05/1997', 'tablet_tablet1074823'),
('1598741236987456', 'jjedfjeji', '25/05/1236', 'Pietro_Corsale1482405'),
('2369874123698741', 'djfjd', '45/02/1478', 'tablet_tablet1074823'),
('2456178516348965', 'pisa', '20/58/1256', 'milo_shiro1427838'),
('25814789632145698', 'edofjeof', '20/25/1474', 'milo_shiro1427838'),
('25814789632147896', 'kfckdm', '20/05/1478', 'milo_shiro1427838'),
('2583697411236987', 'matsercard', '28/05/2020', 'potter_harri5585844'),
('2584569874125469', 'jjdiejdie', '25/05/1234', 'milo_shiro1427838'),
('2584769852369874', 'jcdjcjdijfcid', '20/05/1234', 'milo_shiro1427838'),
('2587412369874123', 'ygygyhu', '22/05/1478', 'Pietro_Corsale1482405'),
('25874123698741236', 'jdnjeudeij', '20/25/0215', 'fabio_corsale3943984'),
('258741236987412365', 'kmekidmnek', '25/02/1254', 'fabio_corsale3943984'),
('2587412369874125', 'fejfijfei', '25/02/1245', 'milo_shiro1427838'),
('25874123698744785', 'jijiicjisjdis', '25/02/2589', 'milo_shiro1427838'),
('2587412369874563', 'dejdiejdie', '20/05/1997', 'fabio_corsale3943984'),
('2587413691234568', 'americanexpress', '28/05/1997', 'milo_shiro1427838'),
('2587413697891565', 'ijdiejdie', '20/02/1256', 'milo_shiro1427838'),
('2587413697896325', 'jdidij', '25/05/1254', 'fabio_corsale3943984'),
('2587413698741234', 'troppobello', '20/05/1997', 'milo_shiro1427838'),
('2587458369874563', 'mdmfkf', '25/05/1997', 'fabio_corsale3943984'),
('2587891236547532', 'mastercard', '20/05/1997', 'fabio_corsale3943984'),
('2589412365485632', 'jdiediejd', '20/05/1234', 'milo_shiro1427838'),
('258963123452974123', 'jeidjejik', '25/02/1234', 'milo_shiro1427838'),
('2589631472589638', 'dnsjded', '20/25/2156', 'fabio_corsale3943984'),
('258963489658745', 'master', '05/06/19', 'potter_harri5585844'),
('2594563215987456', 'cjkjckj', '25/08/1236', 'fabio_corsale3943984'),
('3214569874563214', 'hhhhh', '20/05/1997', 'fabio_corsale3943984'),
('33333333333333', 'difjdif', '20/06/19', 'potter_harri5585844'),
('4587896523145694', 'jidjfi', '25/02/1997', 'milo_shiro1427838'),
('4589632587456987', 'master', '25/06/19', 'potter_harri5585844'),
('45896325879654', 'mastercard', '20/06/19', 'potter_harri5585844'),
('5896349516258965', 'visa', '25/05/1997', 'tablet_tablet1074823'),
('654789632159874', 'mastercard', '25/06/19', 'potter_harri5585844'),
('6987456325678216', 'hfjehf', '25/85/7894', 'tablet_tablet1074823'),
('7894268521697456', 'paluzzo', '20/15/1997', 'paluzzo_paluzzo5682514'),
('9999999999999999', 'hbuhu', '99/99/9999', 'tablet_tablet1074823');

-- --------------------------------------------------------

--
-- Struttura della tabella `Paga`
--

CREATE TABLE `Paga` (
  `Cod_pag` varchar(256) NOT NULL,
  `Nome_e` varchar(256) NOT NULL,
  `Email` varchar(256) NOT NULL,
  `importo` int(11) NOT NULL,
  `data` varchar(256) NOT NULL,
  `pagamento_periodico` varchar(256) NOT NULL,
  `cadenza_pagamento` int(11) NOT NULL,
  `data_fine` varchar(10) NOT NULL,
  `num_carta_usata` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- RELATIONS FOR TABLE `Paga`:
--   `Nome_e`
--       `Esercizio_com` -> `Nome_e`
--   `Email`
--       `Utenti` -> `Email`
--   `num_carta_usata`
--       `Metodi_pagamento` -> `Num_carta`
--

--
-- Dump dei dati per la tabella `Paga`
--

INSERT INTO `Paga` (`Cod_pag`, `Nome_e`, `Email`, `importo`, `data`, `pagamento_periodico`, `cadenza_pagamento`, `data_fine`, `num_carta_usata`) VALUES
('frutta e verdura121995184073214', 'frutta e verdura', 'pierobelmonte97@outlook.it', 45, '30/5/2019', 'si', 2, '25/58/7894', '1459874521478963'),
('frutta e verdura150226471818345', 'frutta e verdura', 'pierobelmonte97@outlook.it', 50, '30/5/2019', 'no', -1, '00/00/0000', '0000000000000000'),
('frutta e verdura256886431416251', 'frutta e verdura', 'pierobelmonte97@outlook.it', 500, '3/6/2019', 'no', -1, '00/00/0000', '0000000000000000'),
('frutta e verdura28856171614503', 'frutta e verdura', 'pierobelmonte97@outlook.it', 500, '30/5/2019', 'no', -1, '00/00/0000', '0000000000000000'),
('frutta e verdura320412465843872', 'frutta e verdura', 'tablet@live.it', 50, '13/6/2019', 'si', 12, '25/05/1997', '1598741236985215'),
('frutta e verdura366368081547446', 'frutta e verdura', 'pierobelmonte97@outlook.it', 50, '30/5/2019', 'no', -1, '00/00/0000', '0000000000000000'),
('frutta e verdura399755414811983', 'frutta e verdura', 'pierobelmonte97@outlook.it', 500, '3/6/2019', 'no', -1, '00/00/0000', '1598741236987456'),
('frutta e verdura407321774667400', 'frutta e verdura', 'pierobelmonte97@outlook.it', 500, '3/6/2019', 'no', -1, '00/00/0000', '1459874521478963'),
('frutta e verdura501779294252989', 'frutta e verdura', 'pierobelmonte97@outlook.it', 500, '30/5/2019', 'no', -1, '00/00/0000', '0000000000000000'),
('frutta e verdura530097784538059', 'frutta e verdura', 'pierobelmonte97@outlook.it', 500, '30/5/2019', 'no', -1, '00/00/0000', '0000000000000000'),
('frutta e verdura548669992584134', 'frutta e verdura', 'pierobelmonte97@outlook.it', 50, '30/5/2019', 'no', -1, '00/00/0000', '0000000000000000'),
('frutta e verdura549419114855019', 'frutta e verdura', 'tablet@live.it', 50, '13/6/2019', 'si', 25, '25/06/1997', '5896349516258965'),
('frutta e verdura685930724889110', 'frutta e verdura', 'tablet@live.it', 50, '13/6/2019', 'no', -1, '00/00/0000', '0000000000000000'),
('frutta e verdura688047900805332', 'frutta e verdura', 'pierobelmonte97@outlook.it', 50, '30/5/2019', 'no', -1, '00/00/0000', '0000000000000000'),
('frutta e verdura712023585170709', 'frutta e verdura', 'pierobelmonte97@outlook.it', 50, '3/6/2019', 'no', -1, '00/00/0000', '0000000000000000'),
('frutta e verdura729551426318466', 'frutta e verdura', 'tablet@live.it', 50, '12/6/2019', 'no', -1, '00/00/0000', '0000000000000000'),
('frutta e verdura731194067067815', 'frutta e verdura', 'tablet@live.it', 50, '13/6/2019', 'no', -1, '00/00/0000', '0000000000000000'),
('frutta e verdura774413029757035', 'frutta e verdura', 'pierobelmonte97@outlook.it', 50, '30/5/2019', 'no', -1, '00/00/0000', '1459874521478963'),
('frutta e verdura834294032308566', 'frutta e verdura', 'tablet@live.it', 50, '13/6/2019', 'si', 25, '25/05/1997', '5896349516258965'),
('frutta e verdura882755180796073', 'frutta e verdura', 'pierobelmonte97@outlook.it', 50, '3/6/2019', 'no', -1, '00/00/0000', '1598741236987456'),
('frutta e verdura969160580245568', 'frutta e verdura', 'pierobelmonte97@outlook.it', 500, '30/function getMonth() { [native code] }1/2019', 'si', 2, '25/05/1234', '1459874521478963'),
('frutta e verdura980478626594031', 'frutta e verdura', 'pierobelmonte97@outlook.it', 55, '30/5/2019', 'si', 22, '25/87/7894', '1459874521478963');

-- --------------------------------------------------------

--
-- Struttura della tabella `Richiesta_denaro`
--

CREATE TABLE `Richiesta_denaro` (
  `Cod_ric` varchar(256) NOT NULL,
  `email_i` varchar(256) NOT NULL,
  `email_r` varchar(256) NOT NULL,
  `importo` int(11) NOT NULL,
  `data_richiesta` varchar(10) NOT NULL,
  `data_conclusione` varchar(10) NOT NULL,
  `num_carta_usata` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- RELATIONS FOR TABLE `Richiesta_denaro`:
--   `email_i`
--       `Utenti` -> `Email`
--   `email_r`
--       `Utenti` -> `Email`
--   `num_carta_usata`
--       `Metodi_pagamento` -> `Num_carta`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `Utenti`
--

CREATE TABLE `Utenti` (
  `Email` varchar(256) NOT NULL,
  `Nome` varchar(256) NOT NULL,
  `Cognome` varchar(256) NOT NULL,
  `Numero_cel` varchar(10) NOT NULL,
  `Data_nascita` varchar(10) NOT NULL,
  `Luogo_nascita` varchar(256) NOT NULL,
  `Password` varchar(256) NOT NULL,
  `Canale_preferito` varchar(256) NOT NULL,
  `Telegram_id` varchar(256) NOT NULL DEFAULT '000000'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- RELATIONS FOR TABLE `Utenti`:
--

--
-- Dump dei dati per la tabella `Utenti`
--

INSERT INTO `Utenti` (`Email`, `Nome`, `Cognome`, `Numero_cel`, `Data_nascita`, `Luogo_nascita`, `Password`, `Canale_preferito`, `Telegram_id`) VALUES
('aga@aga.it', 'aga', 'aga', '3208486258', '28/05/1997', 'isjci', 'aga', 'email', ''),
('ammuzzo@live.it', 'hbsc', 'jdwidwi', '3208486258', '28/05/1997', 'kenfe', 'ammuzzo', 'Whatsapp', ''),
('bb@li.it', 'joy', 'bbb', '3208486258', '28/05/1997', 'paler', 'amo', 'email', ''),
('belmonte@live.it', 'belmonte', 'belmonte', '3208486258', '28/05/1997', 'paler', 'belmonte', 'Whatsapp', ''),
('benni@live.it', 'benni', 'corsale', '3208486258', '28/05/1997', 'palermo', 'benni', 'email', ''),
('bennicorsale@live.it', 'benni', 'corsale', '3208486258', '28/05/1997', 'paler', 'palermo', 'Whatsapp', ''),
('boh@live.it', 'joy', 'bbb', '3208486258', '28/05/1997', 'paler', 'amo', 'email', ''),
('ciao@live.it', 'come', 'come', 'come', 'jidjej', 'djeidjei', 'icjdcne', 'ncjece', ''),
('ciccio@live.it', 'ciccio', 'ciccio', '3208486258', '28/05/1997', 'paler', 'ciccio', 'email', ''),
('cjdujf@li.it', 'efjnfj', 'jdijdi', '3208486258', '28/05/1997', 'jshnd', 'jdhnj', 'email', ''),
('cjscid@njchduicj.it', 'jdcu', 'cjdj', '3208486258', '28/05/1997', 'jdcujdh', 'hhsduhcius', 'email', ''),
('corsale@out.it', 'benni', 'corsale', '3208486258', '28/05/1997', 'palermo', 'benni', 'email', ''),
('dckmdi@lll.it', 'mdiks', 'dckcjd', '3208486258', '28/05/1997', 'sjsd', 'sdjs', 'email', ''),
('default@live.it', 'default', 'default', '0000000000', '00/00/0000', 'default', 'default', 'Telegram', '000000'),
('dino@live.it', 'dino', 'dino', '3208486258', '28/05/1997', 'paler', 'dinodino', 'Whatsapp', ''),
('dipascuale@libero.it', 'MArio', 'di pasquale', 'undefined', 'undefined', 'undefined', 'ciao', 'email', ''),
('dipende@live.it', 'smkmdl', 'kmskwmdk', '3208486258', '28/05/1997', 'paler', 'dipende', 'Whatsapp', ''),
('dksj@jcidj.it', 'jdejhdeuq', 'skdjk', '3208486258', '28/05/1997', 'ijwdid', 'hsdud', 'email', ''),
('dncjcd@live.it', 'cjdj', 'jdchjd', '3208486258', '28/05/1997', 'cnjdc', 'jdchdj', 'email', ''),
('enric@live.it', 'enric', 'enric', '3208486258', '28/05/1997', 'paler', 'enric', 'Whatsapp', ''),
('fabio@live.it', 'fabio', 'corsale', '3208486258', '28/05/1997', 'ijdii', 'bennii', 'Whatsapp', '000000'),
('fratello@live.it', 'dee', 'efijiej', '3208486258', '28/05/1997', 'jjdndi', 'fratello', 'Whatsapp', ''),
('frezer@live.it', 'frezer', 'frezer', '3208486258', '28/05/1997', 'paler', 'undefined', 'Whatsapp', ''),
('funziona@live.it', 'funziona', 'ora', '3208486258', '28/05/1997', 'fkdfmkef', 'mdkfdkf', 'Whatsapp', ''),
('ggggg@live.it', 'hbuh', 'huhu', '3208486258', '28/05/1997', 'sjisjdi', 'ndkd', 'email', ''),
('giocare@live.it', 'milo', 'shiro', '3208486258', '28/05/1997', 'madrid', 'bellissimo', 'Whatsapp', '552669293'),
('hhh@live.it', 'sabrna', 'costanza', '3214569874', '28/05/1997', 'chudec', 'jcdndj', 'email', ''),
('hhhhhhh@live.it', 'piero', 'corsale', '3208486258', '28/05/1997', 'jid', 'mcskc', 'email', ''),
('husdj', 'jcscij', 'csjnc', 'jcncj', 'cmsk', 'ncsjcnsjc', 'scjk', 'dmwdmsw', ''),
('jcidj@dndf.it', 'mdckdn', 'ckdq', '3208486258', '28/05/1997', 'jcdcn', 'jsd', 'email', ''),
('jdhjd@ndhfu.it', 'jfjeuifhf', 'jsjdhf', '3208486258', '28/05/1997', 'cdhi', 'jdhncjd', 'email', ''),
('jdnfdiv@duhfnu.it', 'Piero', 'jdjfn', '3208486258', '28/05/1997', 'udhud', 'ciao', 'Telegram', '000000'),
('jijeifjeifje@ljdiejfi.it', 'ijeiefjei', 'jidjeife', '3208486258', '28/05/1997', 'jfeifeij', 'fiejfiejfiej', 'Whatsapp', ''),
('jjj@ll.it', 'Piero', 'jjj', '3208486258', '28/05/1997', 'kkkk', 'ìjjjj', 'email', ''),
('jnjnjnj@llll.it', 'jnjnjhnjh', 'jnjnjnj', '3208486258', '28/05/1997', 'bhgygy', 'gygy', 'email', ''),
('jnjvn@live.it', 'enjen', 'ijfijf', '3208486258', '28/05/1997', 'jieiefjied', 'come', 'Telegram', '000000'),
('joint@live.it', 'shuh', 'snjus', '3208486258', '28/05/1997', 'palerm', 'jointjoint', 'email', ''),
('ju@ijii.it', 'cd', 'juhj', '3208486258', '28/05/1997', 'hbbuh', 'jki', 'email', ''),
('juli@live.it', 'milo', 'shiro', '3201458789', '28/05/1997', 'ksskk', 'come', 'email', ''),
('kcmkdm@lll.it', 'kcmdkc', 'kcmkdm', '3208486258', '28/05/1997', 'NCJD', 'DCNDJCK', 'email', ''),
('kid@live.it', 'kid', 'kid', '3208486258', '28/05/1997', 'kid', 'kid', 'email', ''),
('kidbu@live.it', 'kid', 'kid', '3208486258', '28/05/1997', 'paler', 'kidkid', 'email', ''),
('ksnjs@k.it', 'ncjnd', 'sncj', '3208486258', '28/05/1997', 'snxjsn', 'jsncj', 'email', ''),
('libassi@live.it', 'mario', 'libassi', '3208486258', '28/05/1997', 'palermo', 'libassi', 'email', ''),
('lol@live.it', 'lol', 'lol', '3208486258', '28/05/1997', 'lol', 'lol', 'email', ''),
('ludovico@live.it', 'dfhfdj', 'juhedfiu', '3208486258', '28/05/1997', 'paler', 'ludovico', 'Whatsapp', ''),
('mai@live.it', 'jcdjc', 'jdcncj', 'jcnejn', 'jscnj', 'cjsnj', 'nscjen', 'jcndnej', ''),
('marco@live.it', 'marco', 'marco', '3208486258', '28/05/1997', 'paler', 'marco', 'email', ''),
('margherita@live.it', 'margherita', 'shcduhc', '3208486258', '28/05/1997', 'paler', 'margherita@live.it', 'Whatsapp', ''),
('mat@live.it', 'mamma', 'djcned', '3208486258', '28/05/1997', 'ddd', 'ddd', 'email', ''),
('morreale@live.it', 'enrico', 'morreale', '3208486258', '28/05/1997', 'cjmvkf', 'djvnjf', 'email', ''),
('nonloso@live.it', 'efjie', 'wdimiwef', '3208486258', '28/05/1997', 'fmkedf', 'nonloso', 'Whatsapp', ''),
('ora@live.it', 'io', 'io', 'ncdn', 'sn', 'cnje', 'dnje', 'jcnejc', ''),
('oraora@live.it', 'ciao', 'ciao', '3208486258', '28/05/1997', 'hcdhuJ', 'oraora', 'email', ''),
('orasi@live.it', 'fmeifjmeif', 'fmiekjfie', '3208486258', '28/05/1997', 'jeifjief', 'orasisi', 'Whatsapp', ''),
('paluzzo@pal.it', 'paluzzo', 'paluzzo', '3208486258', '28/05/1997', 'paluzzo', 'paluzzo', 'Whatsapp', '000000'),
('pan@live.it', 'pan', 'pan', '3208486258', '28/05/1997', 'pan', 'pan', 'email', ''),
('pierobelmonte97@outlook.it', 'Pietro', 'Corsale', '3208486258', '28/05/1997', 'palermo', 'sonofuso', 'Email', '000000'),
('pin@live.it', 'pin', 'pin', '3208486258', '28/05/1997', 'pin', 'pin', 'email', ''),
('pippo@libe.it', 'Piero', 'calo', '3208486265', '28/05/1997', 'paler', 'ciao', 'email', ''),
('po@live.it', 'uni', 'pa', '3208486258', '28/05/1997', 'ckjdc', 'pakd', 'email', ''),
('pol@live.it', 'pol', 'pol', '3208486258', '28/05/1997', 'pol', 'pol', 'email', ''),
('potter@live.it', 'potter', 'harri', '3208486258', '28/05/1997', 'palermo', 'donidellamorte', 'Whatsapp', '296471200'),
('proviamo@proviamo.it', 'proviamo', 'proviamo', '3208486258', '28/05/1997', 'paler', 'provino', 'Whatsapp', ''),
('pstufatrunt@live.it', 'doekdofkeo', 'ejioekfioke', '3208486258', '28/05/1997', 'paler', 'oraora', 'Mail', ''),
('qwertyuio@li.it', 'Piero', 'pioli', '3208486258', '28/05/1997', 'jcdnce', 'dmvd', 'email', ''),
('sckjw@ldksl.it', 'jdenje', 'jdwdj', '3208486258', '28/05/1997', 'SIDJEID', 'JDIJ', 'email', ''),
('sd@livw.it', 'j', 'ejfn', '3208486258', '28/05/1997', 'dkdmv', 'dcjmc', 'email', ''),
('sorella@live.it', 'djcfh', 'wdhkwd', '3208486258', '28/05/1997', 'paler', 'sorella', 'Whatsapp', ''),
('ss@ss.it', 'ddd', 'sss', '3208486258', '28/05/1997', 'sss', 'sss', 'email', ''),
('tablet@live.it', 'tablet', 'tablet', '3208486258', '28/05/1997', 'palermo', 'password', 'Telegram', '296471200'),
('tel@live.it', 'ckdmck', 'dkfdfdo', '3208486258', '28/05/1997', 'dkdjfed', 'cacerto', 'Whatsapp', '000000'),
('topolino@live.it', 'topolino', 'topolino', '3208486258', '28/05/1997', 'paler', 'topolino', 'email', ''),
('ugo@live.it', 'ugo', 'foscolo', '3208486258', '28/05/1997', 'milano', 'ciao', 'email', '552669293'),
('uhsc@hshu.it', 'hcuhd', 'hsud', '3208486258', '28/05/1997', 'chscu', 'shus', 'email', ''),
('ui@live.it', 'ui', 'ui', '3208486258', '28/05/1997', 'pppp', 'ppp', 'email', ''),
('unico@unico.it', 'unico', 'unico', '3208486258', '28/05/1997', 'difji', 'unico', 'Whatsapp', ''),
('wdejdiej@lojsifjd.it', 'nfjefe', 'wdjend', '3208486258', '28/05/1997', 'dsjid', 'djncdncjd', 'email', '');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `Conto`
--
ALTER TABLE `Conto`
  ADD PRIMARY KEY (`Cod_conto`(6)),
  ADD UNIQUE KEY `Cod_conto` (`Cod_conto`),
  ADD KEY `Email` (`Email`);

--
-- Indici per le tabelle `Effettua_versamento`
--
ALTER TABLE `Effettua_versamento`
  ADD PRIMARY KEY (`Cod_vers`),
  ADD KEY `Email` (`Email`),
  ADD KEY `Cod_conto` (`Cod_conto`),
  ADD KEY `num_carta_usata` (`num_carta_usata`);

--
-- Indici per le tabelle `Esercizio_com`
--
ALTER TABLE `Esercizio_com`
  ADD PRIMARY KEY (`Nome_e`),
  ADD UNIQUE KEY `Nome_e` (`Nome_e`);

--
-- Indici per le tabelle `Invia_denaro`
--
ALTER TABLE `Invia_denaro`
  ADD PRIMARY KEY (`Cod_invio`),
  ADD KEY `email_i` (`email_i`),
  ADD KEY `email_r` (`email_r`),
  ADD KEY `num_carta_usata` (`num_carta_usata`);

--
-- Indici per le tabelle `Metodi_pagamento`
--
ALTER TABLE `Metodi_pagamento`
  ADD PRIMARY KEY (`Num_carta`),
  ADD UNIQUE KEY `Num_carta` (`Num_carta`),
  ADD KEY `Cod_conto` (`Cod_conto`);

--
-- Indici per le tabelle `Paga`
--
ALTER TABLE `Paga`
  ADD PRIMARY KEY (`Cod_pag`),
  ADD KEY `Nome_e` (`Nome_e`),
  ADD KEY `Email` (`Email`),
  ADD KEY `num_carta_usata` (`num_carta_usata`);

--
-- Indici per le tabelle `Richiesta_denaro`
--
ALTER TABLE `Richiesta_denaro`
  ADD PRIMARY KEY (`Cod_ric`),
  ADD KEY `email_i` (`email_i`),
  ADD KEY `email_r` (`email_r`),
  ADD KEY `num_carta_usata` (`num_carta_usata`);

--
-- Indici per le tabelle `Utenti`
--
ALTER TABLE `Utenti`
  ADD PRIMARY KEY (`Email`);

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `Conto`
--
ALTER TABLE `Conto`
  ADD CONSTRAINT `Conto_ibfk_1` FOREIGN KEY (`Email`) REFERENCES `Utenti` (`Email`);

--
-- Limiti per la tabella `Effettua_versamento`
--
ALTER TABLE `Effettua_versamento`
  ADD CONSTRAINT `Effettua_versamento_ibfk_1` FOREIGN KEY (`Email`) REFERENCES `Utenti` (`Email`),
  ADD CONSTRAINT `Effettua_versamento_ibfk_2` FOREIGN KEY (`Cod_conto`) REFERENCES `Conto` (`Cod_conto`),
  ADD CONSTRAINT `Effettua_versamento_ibfk_3` FOREIGN KEY (`num_carta_usata`) REFERENCES `Metodi_pagamento` (`Num_carta`);

--
-- Limiti per la tabella `Invia_denaro`
--
ALTER TABLE `Invia_denaro`
  ADD CONSTRAINT `Invia_denaro_ibfk_1` FOREIGN KEY (`email_i`) REFERENCES `Utenti` (`Email`),
  ADD CONSTRAINT `Invia_denaro_ibfk_2` FOREIGN KEY (`email_r`) REFERENCES `Utenti` (`Email`),
  ADD CONSTRAINT `Invia_denaro_ibfk_3` FOREIGN KEY (`num_carta_usata`) REFERENCES `Metodi_pagamento` (`Num_carta`);

--
-- Limiti per la tabella `Metodi_pagamento`
--
ALTER TABLE `Metodi_pagamento`
  ADD CONSTRAINT `Cod_conto` FOREIGN KEY (`Cod_conto`) REFERENCES `Conto` (`Cod_conto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `Paga`
--
ALTER TABLE `Paga`
  ADD CONSTRAINT `Paga_ibfk_1` FOREIGN KEY (`Nome_e`) REFERENCES `Esercizio_com` (`Nome_e`),
  ADD CONSTRAINT `Paga_ibfk_2` FOREIGN KEY (`Email`) REFERENCES `Utenti` (`Email`),
  ADD CONSTRAINT `Paga_ibfk_3` FOREIGN KEY (`num_carta_usata`) REFERENCES `Metodi_pagamento` (`Num_carta`);

--
-- Limiti per la tabella `Richiesta_denaro`
--
ALTER TABLE `Richiesta_denaro`
  ADD CONSTRAINT `Richiesta_denaro_ibfk_1` FOREIGN KEY (`email_i`) REFERENCES `Utenti` (`Email`),
  ADD CONSTRAINT `Richiesta_denaro_ibfk_2` FOREIGN KEY (`email_r`) REFERENCES `Utenti` (`Email`),
  ADD CONSTRAINT `Richiesta_denaro_ibfk_3` FOREIGN KEY (`num_carta_usata`) REFERENCES `Metodi_pagamento` (`Num_carta`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
CREATE USER 'utente_progetto'@'localhost' IDENTIFIED BY 'progetto';
GRANT ALL PRIVILEGES ON *.* TO 'utente_progetto'@'localhost' IDENTIFIED BY 'progetto' WITH GRANT OPTION;
FLUSH PRIVILEGES;

