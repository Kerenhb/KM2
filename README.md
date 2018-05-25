# KM2
A program to help you find your preferred role in a team, created for my apprenticeship.
The program is based of a questionnaire from Stellar Leadership (http://stellarleadership.com/).

## Scripts
### Start
Start both the client and the server with 'npm start'. 'npm run client' and 'npm run server' start the server and client separately if needed.
Note: 'npm run dev' won't work.
### Test
Test both the client and the server with 'npm test'. 'npm run client:test' and 'npm run server:test' test the server and client separately if needed.

## Client
Created with the help of create-react-app.

## Server
A node based back-end with the following routes (to be updated with as per API documentation periodically):
- [POST] /user/:id/test: Saves users latest test scores

## Database
A mySQL database with the following tables and data:
- Permissions
    - Role: VarChar(10), Not Null, Primary Key
    - TakeTest: Binary, Not Null
    - ViewResults: Binary, Not Null
    - AddUser: Binary, Not Null
    - DeleteUser: Binary, Not Null
    - EditUser: Binary, Not Null

- Users
    - ID: TinyInt, Primary Key (auto increment)
    - Role: Foreign Key (Permissions)
    - Username: VarChar(255), Not Null
    - Password: VarChar(255), Not Null
    - Name: : VarChar(255)
    - Organisation: VarChar(255)

- Tests
    - ID: TinyInt, Primary Key (auto increment)
    - UserID: Foreign Key (Users)
    - IM: TinyInt(100), Unsigned, Not Null
    - CO: TinyInt(100), Unsigned, Not Null
    - SH: TinyInt(100), Unsigned, Not Null
    - PL: TinyInt(100), Unsigned, Not Null
    - RI: TinyInt(100), Unsigned, Not Null
    - ME: TinyInt(100), Unsigned, Not Null
    - TW: TinyInt(100), Unsigned, Not Null
    - CF: TinyInt(100), Unsigned, Not Null

## Documentation
- API: https://docs.google.com/document/d/1IqqEjRRCGs8qVa1y7qefd4sCgad9CNUGnzrefcDDGEw/edit?usp=sharing
- Database format: https://docs.google.com/spreadsheets/d/1aBtMbIPRwCg3xG-e69a2eqrTV2UqRQk_hm_EdV5_t3I/edit?usp=sharing
- PDF of original questionnaire: http://careerweb.leeds.ac.uk/download/downloads/id/250/team_roles or https://drive.google.com/file/d/1JSlL1EQfzibYRz-jOjEnSQrnTOKXXazE/view?usp=sharing
