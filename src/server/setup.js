import * as utils from './databaseUtils';

// Table schemas
const createPermissions = `CREATE TABLE IF NOT EXISTS Permissions (
    Role VARCHAR(10) NOT NULL PRIMARY KEY,
    TakeTest BINARY NOT NULL,
    ViewResults BINARY NOT NULL,
	AddUser BINARY NOT NULL,
	DeleteUser BINARY NOT NULL,
	EditUser BINARY NOT NULL
);`;
const createUsers = `CREATE TABLE IF NOT EXISTS Users (
	ID TINYINT PRIMARY KEY AUTO_INCREMENT,
	Role VARCHAR(10) NOT NULL,
	CONSTRAINT Role FOREIGN KEY (Role) REFERENCES Permissions(Role),
	Username VARCHAR(255) NOT NULL,
	TempPassword VARCHAR(255) NOT NULL,
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
    // Delete
    //connection.query(utils.dropTable('Tests'), function (err) {if (err) throw err});
    //connection.query(utils.dropTable('Users'), function (err) {if (err) throw err});
    //connection.query(utils.dropTable('Permissions'), function (err) {if (err) throw err});

    // Create new
    connection.query(createPermissions, function (err) {if (err) throw err});
    connection.query(createUsers, function (err) {if (err) throw err});
    connection.query(createTests, function (err) {if (err) throw err});

    // Insert test data
    //connection.query(utils.insertPermissions('Admin', 0, 1, 1, 1, 1), function (err) {if (err) throw err});
    //connection.query(utils.insertPermissions('User', 1, 1, 0, 0, 0), function (err) {if (err) throw err});

    //connection.query(utils.insertUsers('User', 'Johnny', '1asd5', 'John Doe'), function (err) {if (err) throw err});
    //connection.query(utils.insertUsers('Admin', 'kerenhb', '42cf24', 'Keren Berelson', 'Pearson'), function (err) {if (err) throw err});

    // connection.query(utils.insertTests(1, [10, 10, 10, 10, 10, 10, 10, 30]), function (err) {if (err) throw err});
    // //connection.query(utils.insertTests(1, [10, 10, 10, 10, 10, 10, 10, 10]), function (err) {if (err) throw err}); // Should fail as total < 100
    // //connection.query(utils.insertTests(1, [30, 30, 30, 30, 30, 30, 30, 30]), function (err) {if (err) throw err}); // Should fail as total > 100
    // connection.query(utils.insertTests(1, [10, 15, 10, 15, 10, 15, 10, 15]), function (err) {if (err) throw err});

    // Print data
    // connection.query(utils.selectTable('Tests'), function (err, rows, fields) {
    //     if (err) throw err;
    //     console.log(rows);
    // });
    // connection.query(utils.selectTable('Users'), function (err, rows, fields) {
    //     if (err) throw err;
    //     console.log(rows);
    // });
    // connection.query(utils.selectTable('Permissions'), function (err, rows, fields) {
    //     if (err) throw err;
    //     console.log(rows);
    // });
};