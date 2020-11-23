DROP database vaxapp;
CREATE database vaxapp;
USE vaxapp;

CREATE TABLE countrys
(
      id INT NOT NULL
      AUTO_INCREMENT,
  country VARCHAR
      (100) NULL,
  iso VARCHAR
      (2) NULL,
  continent VARCHAR
      (50) NULL,
  region VARCHAR
      (50) NULL,
  PRIMARY KEY
      (id)
);

      CREATE TABLE diseases
      (
            id INT NOT NULL
            AUTO_INCREMENT,
  disease VARCHAR
            (100) NULL,
  PRIMARY KEY
            (id)
);

            CREATE TABLE recomendations
            (
                  id INT NOT NULL
                  AUTO_INCREMENT,
  country_id VARCHAR
                  (200) NOT NULL,
  disease_id INT NOT NULL,
  priority VARCHAR
                  (50),
  PRIMARY KEY
                  (id)
);


                  CREATE TABLE persons
                  (
                        id INT NOT NULL
                        AUTO_INCREMENT,
  fname VARCHAR
                        (100) NOT NULL,
  lname VARCHAR
                        (100) NOT NULL,
  email VARCHAR
                        (100) UNIQUE NOT NULL,
  pass VARCHAR
                        (100) NOT NULL,
  PRIMARY KEY
                        (id)
);

                        CREATE TABLE protections
                        (
                              id INT NOT NULL
                              AUTO_INCREMENT,
  person_id INT NOT NULL,
  disease_id INT NOT NULL,

  protected BOOLEAN NOT NULL, -- 1 means they have protection, 0 if it is on their shopping lsit
  vaxdate DATE, -- when the person takes the vaccination 
  expdate DATE, -- the estimateddate when protection runs out
  lifetime BOOLEAN NOT NULL DEFAULT false, 
  PRIMARY KEY
                              (id)
);