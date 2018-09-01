
# Would you rather app
Assignment from Udacity React & Redux Course

## Features
- Login
- Dashboard showing answered and unanswered questions of the user
- Answer questions
- Add questions
- Show Leaderboard

## Folder Structure
```
would-you-rather/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    actions/
      auth.js
      questions.js
      shared.js
    compononents/
      App.css
      App.js
      Leaderboard.js
      Login.js
      Nav.js
      NewQuestion.js
      NotFound.js
      Question.js
      QuestionDetail.js
      QuestionList.js
    middleware
      index.js
      logger.js
    reducers/
      authedUser.js
      index.js
      questions.js
      users.js
    utils/
      _DATA.js
      api.js
    index.css
    index.js
    logo.svg
```

## Run project
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
The style is done with [Material UI](https://material-ui.com/) 


In the project directory, you can run:
`yarn` : to install all needed libs
`yarn start`: to run the app in development mode <br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
