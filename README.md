# QA exercise- Automated Test

by Ana Milesi

### Steps to run the tests locally:

```
1. Be sure the app is running (docker-compose up)--> https://github.com/tactivos/qa-exercise
```
```
2. Clone or download the repository: https://github.com/annielau/qa-exercise-FuncTest.git
```
```
3. Go to the folder qa-exercise-FuncTest and Start Selenium standalone:
It should display “Selenium started”
```
<img src="/images/startSelenium.png">

```
4. Open another terminal, go to qa-exercise-FuncTest run the tests:
```
<img src="/images/runTest.png">

```
It should open a firefox browser, go to localhost:3000 and run the tests.
It should yield the following results:
```
<img src="/images/resultsFail.png">

```
The third test will fail because the error.

Once the error is fixed, it will pass:
```
<img src="/images/resultsPass.png">


   

