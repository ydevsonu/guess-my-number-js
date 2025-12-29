# Guess My Number

A sleek, interactive web-based game where players challenge themselves to find a hidden number.  
This project showcases fundamental JavaScript DOM manipulation, event handling, and state management.

🔗 **Live Demo:** https://guess-the-number-js-by-ydevsonu.netlify.app/
🔗 **GitHub Repository:** https://github.com/ydevsonu/guess-my-number-js

---

## 📝 Project Overview

The game generates a secret random number between **1 and 50**.  
The player's goal is to guess it in as few attempts as possible.  
The UI updates dynamically to provide clues and track the player's performance.

---

## ✨ Features

- **Dynamic Feedback**  
  Real-time messages telling the player if their guess is *Too High*, *Too Low*, or *Correct*.

- **Score Tracking**  
  A decreasing score system that rewards faster guessing.

- **Persistent Highscore**  
  Saves your best performance during the session.

- **Game Reset**  
  An **Again!** button that resets the game state without refreshing the page.

---

## 🛠 Technologies Used

- **HTML5** – Semantic structure for the game interface  
- **CSS3** – Custom styling, layout, and responsive design  
- **JavaScript (ES6)** – Core game logic, DOM manipulation, and event listeners

---

## 🕹 How to Play

1. Enter a number between **1 and 50** in the input field.
2. Click the **Check!** button to submit your guess.
3. Read the feedback:
   - 📈 **Too High** – Your guess is above the secret number  
   - 📉 **Too Low** – Your guess is below the secret number  
   - 🎉 **Correct** – You win! The background color changes and the number is revealed
4. Keep track of your **Score** (it decreases with every wrong guess).
5. Try to beat the **Highscore**.
6. Click **Again!** to play a new round.
