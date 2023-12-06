CREATE TABLE `foire_aux_plantes`.`admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pseudo` VARCHAR(255) UNIQUE NOT NULL,
  `email` VARCHAR(255) UNIQUE NOT NULL,
  `hashedPassword` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE `foire_aux_plantes`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pseudo` VARCHAR(255) UNIQUE NOT NULL,
  `email` VARCHAR(255) UNIQUE NOT NULL,
  `hashedPassword` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE `foire_aux_plantes`.`plant` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `label` VARCHAR(255) NOT NULL,
  `specification` TEXT NOT NULL,
  PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE `foire_aux_plantes`.`advert` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `state` VARCHAR(50) NOT NULL,
  `when` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `picture` TEXT NOT NULL,
  `content` TEXT NOT NULL,
  `city` VARCHAR(255) NOT NULL,
  `county` VARCHAR(255) NOT NULL,
  `idUser` INT NOT NULL,
  `idPlant` INT NOT NULL,
  `labelPlant` VARCHAR(255) NOT NULL,
  `specificationPlant` TEXT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (idUser) REFERENCES user(id),
  FOREIGN KEY (idPlant) REFERENCES plant(id)
  ) ENGINE=InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE `foire_aux_plantes`.`newsletter` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) UNIQUE NOT NULL,
  PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET = utf8;

INSERT INTO `admin` (`pseudo`, `email`, `hashedPassword`) 
VALUES 
('Maspie', 'malika.ink84@gmail.com', "$argon2id$v=19$m=16,t=2,p=1$T1JNaEhCMzVOWUt2V3hwYw$AJTb/6v5Q0fhpG0WKInSEQ");

INSERT INTO `user` (`pseudo`, `email`, `hashedPassword`) 
VALUES 
('Green Lover', 'wugreubreffiqui-9189@yopmail.com', "$argon2id$v=19$m=16,t=2,p=1$VUpFbEZrQXZCOFhibkxrNA$UaozIq37ZTeYObNBYz0umw"),
('Wildeuse', 'pavojilleko-8982@yopmail.com', "$argon2id$v=19$m=16,t=2,p=1$U0lHMVI5QW5HTEFnb0phOQ$gm3Vr/U4vUjid1QTsCooGQ"),
('Wendy', 'cifuxefrisso-9673@yopmail.com', "$argon2id$v=19$m=16,t=2,p=1$VFl1MkhtalRwdTdwYVp3bQ$d3gcI5SMLutd8RonAxAQmg");

INSERT INTO `plant` (`label`, `specification`) 
VALUES
("Pilea Moon Valley", "Communément appelée Pilea Moon Valley. PETFRIENDLY. De la famille des Urticacea, même famille que les orties, c'est une espèce tropicale d'ornement intérieur qui ne dépasse pas les 30cm de haut et produit des rejets, lui permettant ainsi de se propager sur la surface qui lui est offerte. Elle a besoin de lumière, de chaleur, d'humidité et d'un substrat drainant arrosé peu fréquemment à l'eau de pluie, filtrée ou osmosée.. Dans l'idéal, il faut lui offrir une température ambiante de plus de 15 degrés. Cette plante craint particulièrement les chocs de températures même brefs. Offres-lui en plus de cela une très bonne luminosité sans lumière directe et la mi-ombre au cours de la journée et elle sera en pleine forme."),
("Anthurium Warocqueanum", "Communément appelée Queen Anthurium. De la grande famille des Aracea, il s'agit d'une plante tropicale qui a besoin de lumière, de chaleur, d'humidité et d'un substrat drainant arrosé peu fréquemment. Dans l'idéal, elle doit être exposée en pleine lumière ou mi-ombre, mais pas de soleil direct, en intérieur comme en extérieur, avec un substrat drainant qui devra être arrosé dès qu'il sera sec au niveau des racines. Le bassinage est à privilégier pour les plantes en pot, avec de l'eau de pluie, filtrée ou osmosée. Une temprature ambiante comprise entre 19 et 35 degrés et une hygrométrie entre 60% et 80% la maintiendront dans un environnement idéal."),
("Philodendron Melanochrysum", "Anthurium Melanochrysum, de la grande famille des Aracea, il s'agit d'une plante tropicale qui a besoin de lumière, de chaleur, d'humidité et d'un substrat drainant arrosé peu fréquemment. Dans l'idéal, elle doi être exposée en pleine lumière ou mi-ombre, mais de soleil direct, en intérieur comme en extérieur, avec un substrat drainant qui devra être arrosé dès qu'il sera sec au niveau des racines. Le bassinage est à privilégier pour les plantes en pot, avec de l'eau de pluie, filtrée ou osmosée. Une temprature ambiante comprise entre 19 et 35 degrés et une hygrométrie entre 60% et 80% la maintiendront dans un environnement idéal."),
("Pilea peperomioides", "Communément appelée Plante à monnaie chinoise, elle est endémique de la province du Yunnan. PETFRIENDLY. De la famille des Urticacea, même famille que les orties, c'est une succulente, qui peut se développer jusqu'à 60cm de haut et de large. Elle produit des rejets, lui permettant ainsi de se propager sur la surface qui lui est offerte. Elle produit des petites fleurs roses claires. Elle a besoin de lumière, de chaleur, d'humidité et d'un substrat drainant arrosé peu fréquemment à l'eau de pluie, filtrée ou osmosée. Dans l'idéal, il faut lui offrir une température ambiante de plus de 15 degrés. Cette plante craint particulièrement les chocs de températures même brefs. Offres-lui en plus de cela une très bonne luminosité sans lumière directe et la mi-ombre au cours de la journée et elle sera en pleine forme.");

INSERT INTO `advert` (`state`, `picture`, `content`, `city`, `county`, `idUser`, `idPlant`, `labelPlant`, `specificationPlant`) 
VALUES 
('Troc', 'https://growurban.uk/cdn/shop/products/pilea-moon-valley-106218.jpg?v=1680126266&width=2048', "Racinée, en pot. Echange contre Aracea avec préférence pour les Alocasia et Anthurium.", "Colmar", "Haut-Rhin", 1, 1, "Pilea Moon Valley", "Communément appelée Pilea Moon Valley. PETFRIENDLY. De la famille des Urticacea, même famille que les orties, c'est une espèce tropicale d'ornement intérieur qui ne dépasse pas les 30cm de haut et produit des rejets, lui permettant ainsi de se propager sur la surface qui lui est offerte. Elle a besoin de lumière, de chaleur, d'humidité et d'un substrat drainant arrosé peu fréquemment à l'eau de pluie, filtrée ou osmosée.. Dans l'idéal, il faut lui offrir une température ambiante de plus de 15 degrés. Cette plante craint particulièrement les chocs de températures même brefs. Offres-lui en plus de cela une très bonne luminosité sans lumière directe et la mi-ombre au cours de la journée et elle sera en pleine forme."),
('Troc', 'https://i.etsystatic.com/25181798/r/il/36317c/3240703293/il_fullxfull.3240703293_2ryq.jpg', "Taille géante, racinée, en pot. Echange contre Aracea de même valeur", "Gerardmer", "Vosges", 2, 2, "Anthurium Warocqueanum", "Communément appelée Queen Anthurium. De la grande famille des Aracea, il s'agit d'une plante tropicale qui a besoin de lumière, de chaleur, d'humidité et d'un substrat drainant arrosé peu fréquemment. Dans l'idéal, elle doit être exposée en pleine lumière ou mi-ombre, mais pas de soleil direct, en intérieur comme en extérieur, avec un substrat drainant qui devra être arrosé dès qu'il sera sec au niveau des racines. Le bassinage est à privilégier pour les plantes en pot, avec de l'eau de pluie, filtrée ou osmosée. Une temprature ambiante comprise entre 19 et 35 degrés et une hygrométrie entre 60% et 80% la maintiendront dans un environnement idéal."),
('Don', 'https://sweetyoxalis.com/content/images/2016/08/IMG_4908.JPG', 'Don de toutes les boutures en une fois', "Colmar", "Haut-Rhin", 1, 4, "Pilea peperomioides", "Communément appelée Plante à monnaie chinoise, elle est endémique de la province du Yunnan. PETFRIENDLY. De la famille des Urticacea, même famille que les orties, c'est une succulente, qui peut se développer jusqu'à 60cm de haut et de large. Elle produit des rejets, lui permettant ainsi de se propager sur la surface qui lui est offerte. Elle produit des petites fleurs roses claires. Elle a besoin de lumière, de chaleur, d'humidité et d'un substrat drainant arrosé peu fréquemment à l'eau de pluie, filtrée ou osmosée. Dans l'idéal, il faut lui offrir une température ambiante de plus de 15 degrés. Cette plante craint particulièrement les chocs de températures même brefs. Offres-lui en plus de cela une très bonne luminosité sans lumière directe et la mi-ombre au cours de la journée et elle sera en pleine forme."),
('Troc', 'https://tchungle.com/cdn/shop/products/PXL_20221123_093556066_2.jpg?v=1669201068', "30cm de haut, élevée en serre, très racinée, en pot. Intéressée par une variegata", "Mouthe", "Doubs", 3, 3, "Philodendron Melanochrysum", "Anthurium Melanochrysum, de la grande famille des Aracea, il s'agit d'une plante tropicale qui a besoin de lumière, de chaleur, d'humidité et d'un substrat drainant arrosé peu fréquemment. Dans l'idéal, elle doi être exposée en pleine lumière ou mi-ombre, mais de soleil direct, en intérieur comme en extérieur, avec un substrat drainant qui devra être arrosé dès qu'il sera sec au niveau des racines. Le bassinage est à privilégier pour les plantes en pot, avec de l'eau de pluie, filtrée ou osmosée. Une temprature ambiante comprise entre 19 et 35 degrés et une hygrométrie entre 60% et 80% la maintiendront dans un environnement idéal.");