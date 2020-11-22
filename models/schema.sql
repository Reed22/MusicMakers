SET FOREIGN_KEY_CHECKS=0;

-- Users
DROP TABLE IF EXISTS Users;
Create TABLE Users(
  user_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);

--Scales
DROP TABLE IF EXISTS Scales;
CREATE TABLE Scales(
  scale_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  created_at VARCHAR(255) NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
    ON DELETE CASCADE
);

--Notes
DROP TABLE IF EXISTS Notes;
CREATE TABLE Notes(
  note_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  note VARCHAR(255) NOT NULL,
  priority INT NOT NULL,
  octave INT NOT NULL
);

INSERT INTO Notes (note, priority, octave) values ("C", 1, 1);
INSERT INTO Notes (note, priority, octave) values ("Db", 2, 1);
INSERT INTO Notes (note, priority, octave) values ("D", 3, 1);
INSERT INTO Notes (note, priority, octave) values ("Eb", 4, 1);
INSERT INTO Notes (note, priority, octave) values ("E", 5, 1);
INSERT INTO Notes (note, priority, octave) values ("F", 6, 1);
INSERT INTO Notes (note, priority, octave) values ("Gb", 7, 1);
INSERT INTO Notes (note, priority, octave) values ("G", 8, 1);
INSERT INTO Notes (note, priority, octave) values ("Ab", 9, 1);
INSERT INTO Notes (note, priority, octave) values ("A", 10, 1);
INSERT INTO Notes (note, priority, octave) values ("Bb", 11, 1);
INSERT INTO Notes (note, priority, octave) values ("B", 12, 1);

INSERT INTO Notes (note, priority, octave) values ("C", 13, 2);
INSERT INTO Notes (note, priority, octave) values ("Db", 14, 2);
INSERT INTO Notes (note, priority, octave) values ("D", 15, 2);
INSERT INTO Notes (note, priority, octave) values ("Eb", 16, 2);
INSERT INTO Notes (note, priority, octave) values ("E", 17, 2);
INSERT INTO Notes (note, priority, octave) values ("F", 18, 2);
INSERT INTO Notes (note, priority, octave) values ("Gb", 19, 2);
INSERT INTO Notes (note, priority, octave) values ("G", 20, 2);
INSERT INTO Notes (note, priority, octave) values ("Ab", 21, 2);
INSERT INTO Notes (note, priority, octave) values ("A", 22, 2);
INSERT INTO Notes (note, priority, octave) values ("Bb", 23, 2);
INSERT INTO Notes (note, priority, octave) values ("B", 24, 2);

--Scales_Notes
DROP TABLE IF EXISTS Scales_Notes;
CREATE TABLE Scales_Notes(
  scale_id INT NOT NULL,
  note_id INT NOT NULL,
  FOREIGN KEY (scale_id) REFERENCES Scales(scale_id)
	ON DELETE CASCADE,
  FOREIGN KEY (note_id) REFERENCES Notes(note_id) 
);

SET FOREIGN_KEY_CHECKS=1;
