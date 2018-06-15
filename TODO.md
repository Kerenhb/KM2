# KM2 Project
*Questionnaire*
- Add a time-code of when you took the test (server side)
- Deal with warning about going from unControlled to controlled input
- Attempt to make number input look better (increase the width to match the cell?)
- deal with ResultsPage warning

*Security* Login screen with proper [hashed] security.
- Link up error page
- add authorisation to all internal pages (Questionnaire)
- add logout functionally 
- add history functionally
- add sign-up functionally
- add hashed passwords (with salting, blowfish / SHA1?)

*Misc*
- Make a general fetch function (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- Prevent SQL injection
    - e.g. at login