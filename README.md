# KM2
A program to help you find your preferred role in a team, created for my apprenticeship.

## Client
-Not yet created-

## Server
A node based back-end with the following routes:
- ...

See documentation for more details: https://docs.google.com/document/d/1IqqEjRRCGs8qVa1y7qefd4sCgad9CNUGnzrefcDDGEw/edit?usp=sharing
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
