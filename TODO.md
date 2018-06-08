# KM2 Project
*Questionnaire*
- Add a time-code of when you took the test (server side)
- Deal with warning about going from unControlled to controlled input
- Attempt to make number input look better (increase the width to match the cell?)
- Fix issue with doing sending '400: User not found' error when invalid userID is used on the /user/:userID/test endpoint (see hipChat with Iqbal)
    - Just throw an error from within the function and catch outside it?

*Security* Login screen with proper [hashed] security.
- passport.js (http://www.passportjs.org/)
    - Auth0 (http://www.passportjs.org/)

*Misc*
- Make a general fetch function (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- Prevent SQL injection