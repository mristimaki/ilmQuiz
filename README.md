# The Ilm Quiz

[The Ilm Quiz](https://mristimaki.github.io/ilmQuiz/) *(or The Knowledge Quiz to translate it)*, is a quiz with different statements to learn fun and scientific facts about islam. This quiz is built to make people gain knowledge about some of the misconseptions about Islam and also highlight some mindblowing scientific facts that is in the Quran, that most people don't know about. I have chosen to make this quiz as simple as possible, with no further heavy information just to keep it simple and fun, if the user would want to look these things up it's the users choice to dig deeper into the different subjects. 
<br>
<br>
<img width="967" alt="amiresponsive" src="/assets/images/amiresponsive.png"

## UX

### Goals

#### Visitor Goals

**The target audience for The Ilm Quiz:**

- People who wants to play a fun quiz and still learn.
- People who wants to play and gain scientific knowledge about Islam.

**User goals are:**

1. Learn about scientific facts about islam.
2. Play a fun quiz game.
3. Increase in knowledge when playing.

**The Ilm Quiz will fill these needs by:**

- Providing the user with a quiz that is fun yet gives knowledge.
- Providing the user with authentic knowledge about islam and the Quran.
- Providing the user with a score board that indicates if the answer was true or false.

#### Business Goals

**The Business goals of The Ilm Quiz are:**

- Present a good and clear design to gain interest.

**User Stories**
- As a user interested in islam, I expect to get accurate information.
- As a user interested in playing a game, I expect to see how many correct answers I get.
- As a user interested in playing a quiz, I expect to gain knowledge while playing.

## Visual Design

### The Font

I choosed the font for this quiz via [Google Fonts](https://fonts.google.com/) website. I chose the particular font as I wanted a elegant and clean look to the quiz.

### The Colors
<img width="841" alt="colorpalette" src="https://user-images.githubusercontent.com/121927123/226247355-87ef98b3-19f1-4cd2-aa70-c5b25a1ada64.png">

When choosing the color theme for this quiz, I looked up the psychological effects of colors and chose accordingly. Green for balance and joy. Yellow and Orange for positivity and confidence.

## Features

### Page Elements

#### The Header

<img width="802" alt="header" src="/assets/images/logo.png">

I chose a simple yet modern design to the header that is placed over the quiz-container.

#### The Landing Page

<img width="802" alt="landingpage" src="/assets/images/landing.png">

The landing page starts with a simple instruction about the quiz and some rules. It also provides the user with a option to start the game with a start quiz-button that takes the user to the first question.

#### The Game Area

<img width="802" alt="quizarea" src="/assets/images/right.png">

The game area is simplistic with queston and three options to choose from. In the bottom of the page, the user can se the current score which increases each time the user gets the right answer. When the user has clicked on one of the options, an explanation of the right answer will appear and a next button so that the user can choose to move forward in the quiz.

#### The Final Scores Area

<img width="982" alt="resultpage" src="/assets/images/result.png">

When the user has answered all the questions, the final scores will appear as well as a Play Again-button that provides the user to play the Quiz one or more times again.


### Feature Ideas
- Instead of just having the green or red color showing if the clicked button was true or false, I would like to add classes to all of the buttons so that it shows more clearly which answers was true or false. 


## Technologies used

### Languages
* HTML: Page markup.
* CSS: Styling.
* JavaScript: Running functions for a interactive page.

### Libraries
* [Google Fonts](https://fonts.google.com/): Font style.
* [Font Awesome](https://fontawesome.com/): Used for icon.

### Platforms
* [GitHub](https://github.com/): Storing code remotly and deployment.
* [Gitpod](https://www.gitpod.io/): IDE for project development.

### Other Tools

## Testing
The design of [The Ilm Quiz](https://mristimaki.github.io/ilmQuiz/) is responsive in that way that I have designed it to fit into smaller devices as well as bigger screens. The design stays the same. I've tested all pages both for desktop and mobile via **Lighthouse** tool and got these results:

### Desktop 
<img width="512" alt="lighthouse_desktop" src="https://user-images.githubusercontent.com/121927123/228337238-6bca577f-c61c-4b92-8ba0-33fa1f913fb0.png">

### Mobile
<img width="512" alt="lighthouse_mobile" src="https://user-images.githubusercontent.com/121927123/228337291-b6f2a5e0-ce4c-40d6-bfcc-2081c3a79871.png">

### General testing
- I have tested my code troughout the buildup with the **inspect** tool to see what impact the code made as well as if any errors occures in the console.

### Methods
1. HTML has been validated in the [W3C HTML5 Validator](https://validator.w3.org/)
2. CSS has been validated in the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
3. JavaScript has been validated in [JSHint](https://jshint.com/)
4. I've used the [W3Schools](https://www.w3schools.com/) and [Stack Overflow](https://stackoverflow.com/) tutorials and references troughout my project if there was anything that I got stuck on or needed to be reminded how to write a certain code. 

### Bugs
- Difficulties displaying the questions and answers. After much testing I finally realized that I didn't need lastElementChild to display the answers of the array, so when I removed that it all worked.
- Difficulties with checking the correct answer, due to the structure of my Q&A array, i needed to get the questions via this code: let correctAnswer = myQuestions[currentQuestion].options.find(element => element.answer === true)
- I firstly had a next button but removed that since it seemed to cause a lot of trouble for my code. I used the setTimeout function instead to automatically skip to the next question once one of the options is clicked.
- Difficulties with adding the correct and incorrect classes to users option, to change into green if correct and red if incorrect. Fixed when I added the classes inside of my displayQuestions function's for loop instead of inside the checkAnswer function.
- I have canged the whole structure of my page several times and at the beginning of the project I started it all over and deleted my first repositry and started from scratch with this repositry instead. It seems that my Questions and Answers array [taken from another code](https://github.com/Code-Institute-Submissions/Quiz-me-Sailor/blob/main/assets/js/script.js) has been a big issue in why things hasn't worked out as they should in my code. 

### Unfixed Bugs
- When script.js is checked in [JSHint](https://jshint.com/), I get warnings about "is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)."
- When script.js is checked in [JSHint](https://jshint.com/), I get "unused variable disableOptions()". But this is targeted from within the index.html with onclick="disableOptions".
- I have tried to add a class style to the Play Again-button but for some reason it does only work to add color and size to text, background colors and so on does not work.

## Deployment

### GitHub Deployment

- This site was deployed to GitHub pages. The steps to deploy are as follows.
  - In the GitHub repository, navigate to **Settings**
  - Scroll down and navigate to **Pages**
  - From the **Source** section drop-down menu, select the **Main Branch**
  - Once the Main Branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
  - It might take a minute or so before getting the deployed link.

The live link can be found here:
https://mristimaki.github.io/ilmQuiz/

## Credit and Contact

### Code
- My Questions and Answers array is taken from this [Code Institute Submission](https://github.com/Code-Institute-Submissions/Quiz-me-Sailor/blob/main/assets/js/script.js)
- I want to give thanks to the assessor for the site feedback to improve my code. 
  <br>
  The improvements that I have made based on this are as follows:
  - Since the hover effect on the answer-buttons were overriding the effect of the buttons turning green or red if the answer is true or false, I have removed the hover effect, since the feedback to the user if the answer was right or wrong is more important than the hover effect.
  - I have also improved the responsive design with adding media queries to smaller screens as well as removing width and height to the body in my css code that was disturbing the other styling to the site and not centering everything properly. 

### Content
- The information to the Quiz is taken from:
  - [Amazing Quran Miracle](https://www.youtube.com/watch?v=sYajKl-Xr6c)
  - [Sapient Thoughts #26](https://www.youtube.com/watch?v=HDMR4MMtDs0)
  - [Islamic Quiz](https://muslimcouncil.org.hk/islamic-quiz-questions-answers/)
 
 ### Contact
 
 #### Please contact me at
  - **Email** `rosanna.ristimaki@gmail.com`
  - **Skype** [Maryam Rutqvist Ristimaki](https://join.skype.com/invite/xfUYvIMqTjPp)

*I also want to give thanks to my mentor [Rory Patric Sheridan](https://github.com/Ri-Dearg) who has been guiding me throughout this project.*

