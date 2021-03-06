// Common functions
export const selectTable = table => `SELECT * from ${table};`;
export const dropTable = table => `DROP TABLE IF EXISTS ${table};`;
export const getRow = (table, ID) => `SELECT * FROM ${table} WHERE ID = ${ID}`;

// Insert into specific tables
const replaceNull = value => {
    if(typeof value != "undefined")
        return `'${value}'`;
    else
        return 'NULL'; // rather than javascript's undefined 
};

export const insertUsers = (Role, Username, Password, Name, Organisation) => {
    return `INSERT INTO Users (Role, Username, Password, Name, Organisation)
    Values (${replaceNull(Role)}, ${replaceNull(Username)}, ${replaceNull(Password)}, ${replaceNull(Name)}, ${replaceNull(Organisation)});`
};
export const insertTests = (UserID, weights) => {
    return `INSERT INTO Tests (UserID, IM, CO, SH, PL, RI, ME, TW, CF)
    Values (${replaceNull(UserID)}, ${replaceNull(weights[0])}, ${replaceNull(weights[1])}, ${replaceNull(weights[2])},
    ${replaceNull(weights[3])}, ${replaceNull(weights[4])}, ${replaceNull(weights[5])}, ${replaceNull(weights[6])}, ${replaceNull(weights[7])});`
};