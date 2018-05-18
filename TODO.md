# KM2 Project
## Priority
- Add unit tests

## Next Steps
Build basic Client side react application and begin to add in routes and endpoints server side as needed.
Basically more of a thin-slice agile development method.

**Next:** Add in basic questionnaire section so you can answer each question one at a time and then submit your results (which saves it to the database).
- With a time-code of when you took the test

- Question table needs a way to record and send back data
    - Perhaps input type number (limited 0-10)
        - Sum of them all must be exactly 10
    - Then perhaps trigger a callback on the question/landing page that adds the data to an array
    
**Then:** Login screen with proper [hashed] security.

## General Stuff
- Prevent SQL injection
- ~~Add endpoints for each use-case~~
    - ~~with proper checking (verification, permissions, etc)~~
    - ~~With correct REST conventions~~ 

## Useful Resources
- Fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch