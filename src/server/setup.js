import * as utils from './databaseUtils';

// Table schemas
const createUsers = `CREATE TABLE IF NOT EXISTS Users (
	ID TINYINT PRIMARY KEY AUTO_INCREMENT,
	Role VARCHAR(10) NOT NULL,
	Username VARCHAR(255) NOT NULL,
	Password VARCHAR(255) NOT NULL,
	Name VARCHAR(255),
	Organisation VARCHAR(255)
);`;
const createTests = `CREATE TABLE IF NOT EXISTS Tests (
	ID TINYINT PRIMARY KEY AUTO_INCREMENT,
	UserID TINYINT NOT NULL,
	CONSTRAINT UserID FOREIGN KEY (UserID) REFERENCES Users(ID),
	IM TINYINT(100) UNSIGNED NOT NULL,
	CO TINYINT(100) UNSIGNED NOT NULL,
	SH TINYINT(100) UNSIGNED NOT NULL,
	PL TINYINT(100) UNSIGNED NOT NULL,
	RI TINYINT(100) UNSIGNED NOT NULL,
	ME TINYINT(100) UNSIGNED NOT NULL,
	TW TINYINT(100) UNSIGNED NOT NULL,
	CF TINYINT(100) UNSIGNED NOT NULL
);`;

export const setup = connection => {
    // Delete tables
    connection.query(utils.dropTable('Tests'), function (err) {if (err) throw err});
    connection.query(utils.dropTable('Users'), function (err) {if (err) throw err});

    // Create tables
    connection.query(createUsers, function (err) {if (err) throw err});
    connection.query(createTests, function (err) {if (err) throw err});

    // Insert users into table
    connection.query(utils.insertUsers('User', 'Johnny', '1234', 'John Doe'), function (err) {if (err) throw err});
    connection.query(utils.insertUsers('Admin', 'kerenhb', 'abcd', 'Keren Berelson', 'Pearson'), function (err) {if (err) throw err});
};