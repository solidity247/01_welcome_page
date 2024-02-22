# Description:

Ticket: DEV-0001

## In the following project, we have a page with a form "What is your name?"

The form accepts an input from the user and passes it as an argument into `handleInput` **_[`script.js`]_** function. The `handleInput` function must accept an input, recognize the name of the user, and return a welcome phrase.
For example, Input: **"John"**, output: **"Welcome John!"**
The return of the function is provided into the element `welcomeMessage`, which automatically appears right after the user's name submission.

## Acceptance criteria:

- If the user hasn't provided the name and submitted empty input, `welcomeMessage` must be **"Welcome User!"**
- If the user provided only lower or upper case input, capitalize the first letter of the name.
  For example: **john** ---> **Welcome John!**, **MIKE** ---> **Welcome Mike!**
- If the user provided more than one word, adjust the casing for each word.
  For example: **bob richard** ---> **Welcome Bob Richard!**
- Limit your output to a maximum of 3 words (names).
  For example: **John Michael Junior Smith** ---> **Welcome John Michael Junior!**

## How to submit:

1. Make a local copy of this repository into some separate place on your PC.
2. Create a separate branch using your name, ticket number, and short description.
   For example, for this task: John Smit ---> `john-smith-dev-0001-welcome-page`
   GitHub command: `git checkout -b "john-smith/dev-0001/welcome-page"`

   > Note: You can create a new branch and keep all unstaged changes even in the middle of the process.

3. Once you're done, stage and commit your progress using the following GitHub commands:

   - `git add {name of file}` to stage your changes.
   - `git commit -m "{short description}"` to commit.

   > Note: You can stage/commit your progress as many times as you want.

4. When you're done with this assessment and have committed all your progress, create a PR (pull request) using the following command:
   `git push origin {name of your branch}`

   > If you have done it right, you will be able to see your branch in the GitHub repository GUI. You don't need to create a pull request or merge your remote branch into the remote master branch!

## Coding

During working on this task, you are free to place your code inside the `handleInput` function and/or create additional functions. Any other existing code should stay the same.

## Happy Coding 😊
