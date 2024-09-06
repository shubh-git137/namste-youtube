Debouncing:

typing slow: 200ms
typing fast: 30ms


performance:

  - iphone pro max: 14 letters * 1000 = 14000 api call.
  - with debouncing: 3 api call * 1000 = 3000;


Debouncing with 200ms:

 - If the difference between 2 key stroke is <200ms then decline the API call
 - If > 200ms then make an API call.

