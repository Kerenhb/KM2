# KM2 Project
## Next Steps
Build basic Client side react application and begin to add in routes and endpoints server side as needed.
Basically more of a thin-slice agile development method.

**Next:** Add in basic questionnaire section so you can answer each question one at a time and then submit your results (which saves it to the database).
- Add a time-code of when you took the test (server side)
- Deal with warning about going from unControlled to controlled input
- Attempt to make number input look better (increase the width to match the cell?)
- Make a general fetch function (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

- Fix issue with doing sending '400: User not found' error when invalid userID is used on the /user/:userID/test endpoint (see hipChat with Iqbal)

**Then:** Login screen with proper [hashed] security.

## General Stuff
- Unit tests!
- Database normalisation
- Documentation
- Prevent SQL injection
- ~~Add endpoints for each use-case~~
    - ~~with proper checking (verification, permissions, etc)~~
    - ~~With correct REST conventions~~ 

## Useful Resources
- Fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch