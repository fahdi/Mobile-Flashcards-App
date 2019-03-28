

# Mobile Flashcards App
Mobile Flashcards is a mobile app for creating digital flashcards and was designed and developed using React Native. This project was created as part of the Udacity React Native course.

This project was built using the Create React Native App and [Expo](https://expo.io/). It also uses [React Navigation](https://github.com/react-community/react-navigation)

## Installation

### Requirements
To run this project, you must first have an android with the [Expo App](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) installed or have a computer running android studio with Visula Studio Code installed.  

### Installing Dependencies
In a terminal window, navigate to the project and execute the following commands:
    - `npm install`
    - `expo start`

After the server has started, hit `a` to run it through the android emulator or `d` to display a QR code to view the app on your android through the Expo App.


## Getting Started
The Mobile Flashcards app is a basic digital flashcard system. You can create decks and cards. Decks are a collection of cards. A card consists of a single question and answer.


### Creating a Deck
When the app first loads you will be presented with the Decks screen which will display a list of all of your Decks. If this is your first time using the app, you should be see the message "No Decks".

To create a new deck, click the "Add Deck", button at the bottom right corner. You will be presented with dialog box. Enter the title of your new deck, and press "Submit".

### Deleting a Deck
If you wish to delete a previously created deck and all the associated cards, click on the desire deck and click the "Delete" button.

### Creating a Card
After creating a deck, you will be taken to the Deck view. It is also possible to get to the Deck view from clicking on the desired deck from the Decks view. From the deck view, you will see a list of all of the cards create for the current deck.

To create a new card, click on the plus (+) sign in the top right corner. You will be taken to the Add Card view. Here you will be able asked to provide a question and an answer. Clicking the check mark (✓) will save the card to the deck.


### Taking a Quiz
A quiz is the process of reviewing each card in a specific deck. To take a quiz, click the "Take Quiz" button in bottom right corner of the Deck view.

Each question is displayed one at a time. After a guess at the answer has been made, you can indicate whether or not your guess was correct using the correct, the green check mark (✓), or incorrect, the red X. The answer to each question can be displayed using the "Show Answer" button found at the bottom of the screen. Clicking either the correct or incorrect button will display the next question.

After all the cards have been presented, your final score will be displayed. From there you will be able to return back to the Deck view or Retake the Quiz.

### Notifications
If notifications permissions are granted, a daily reminder will be set to alert you everyday at 9:00 AM if you have not completed a quiz.


