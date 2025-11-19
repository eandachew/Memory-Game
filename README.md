# Memory-Game
## Table of Contents
1. [UX](#ux)
   - [Project Goals](#project-goals)
   - [User Stories](#user-stories)
   - [Design Choices](#design-choices)
   - [Wireframes](#wireframes)
2. [Features](#features)
   - [Existing Features](#existing-features)
   - [Features Left to Implement](#features-left-to-implement)
3. [Technologies Used](#technologies-used)
4. [Testing](#testing)
   - [Bugs Discovered ](#bugs-discovered)
   - [Solved Issues](#solved-issues)
5. [Deployment](#deployment)
   - [How to Run This Project Locally](#how-to-run-this-project-locally)
6. [Credits](#credits)
   - [Content and code ](#content-and-code) 
   - [Acknowledgement](#acknowledgement)

---
## UX
### Project Goals
This project aims to build an interactive front-end website using HTML, CSS, and JavaScript.  
I have decided to build a Memory Game that allows users to enjoy a fun and challenging pattern-matching experience. I have used the knowledge I've learned in the course to date, as well as good user experience principles, to create a responsive, well-designed, and functional game.

My web page consists of:  
- A landing page that introduces the game, explains the rules, and includes a "Restart Game" button.  
- The game board, which displays a grid of cards that the player can click to flip and match.  
- Feedback messages that indicate matches, mismatches, and game completion.  
- A restart button that allows the user to play again at any time.  
- A responsive design that works on mobile, tablet, and desktop screens.  

### User Stories

#### New Visitor
- As a new user, I would like to know how to play the Memory Game upon opening the site.  
- As a new user, I would like to see the game rules clearly explained.  
- As a new user, I would like to start the game easily with a single click.  
- As a new user, I would like the game to provide visual feedback when I flip cards.  
- As a new user, I would like to see a responsive layout that works on mobile, tablet, and desktop.  

#### Repeat User
- As a repeat user, I would like to continue playing without losing my progress.  
- As a repeat user, I would like to be able to restart the game quickly.  
- As a repeat user, I would like to track my matches and see which pairs I have already found.  
- As a repeat user, I would like to see a message when I complete the game.  

#### Regular User
- As a regular user, I would like the game to provide a fun and challenging experience.  
- As a regular user, I would like the game to increase difficulty as I progress.  
- As a regular user, I would like the interface to be visually appealing and interactive.  

#### Game Owner / Developer
- As the developer, I want users to have a seamless and bug-free experience.  
- As the developer, I want users to understand the rules clearly.  
- As the developer, I want the game to work on all screen sizes and devices.  
- As the developer, I want to be able to easily maintain and extend the game with new features.

### Design Choices
#### Colour Scheme
- **Background:** `linear-gradient(135deg, #2c3e50, #1a2530)` (dark gradient backdrop)  
- **Primary Accent:** `#4caf50` (green — used on flipped cards, buttons, header highlights)  
- **Card Default:** `#ddd` (light grey for card backs)  
- **Text:** `#ffffff` (white on dark backgrounds, dark on light cards)  
- **Hover Button:** `#45a049` (darker green shade for button hover)

These colours give the game a **clean and vibrant look** while keeping it accessible and readable.

---

#### Typography
- **Font Family:** `Arial, sans-serif` for general layout  
- **Fallback:** `Segoe UI`, `Tahoma`, `Verdana` and other web-safe sans-serif fonts  
- This ensures **readability and consistency** across different devices.

---

#### Layout & Responsiveness
- **Grid Layout:** The board uses CSS Grid to create a 4x4 layout of 100x100px cards.
- **Responsive Media Queries:**  
  - Under 414px: buttons, controls, and score areas resize and stack for mobile.  
  - Under 320px: further scaling down of the game area for very small screens.

#### Home page screenshot 
<div align="center"><img src="assets/images/home-page.png"></div>
- screenshots created using [Am I responsive](http://ami.responsivedesign.is/)


#### Icons

For the memory card icons, I used built-in Unicode emoji characters rather than external image files.  
These emojis are supported natively by all modern browsers and operating systems, so they do not require any additional image hosting or licensing.

['🍎','🍌','🍇','🍒','🍓','🍑','🍍','🥝'];

---

### Wireframes

I've created Wireframes to plan the layout and design of the Memory Game.  
Below are the pages and versions for different devices. 

#### Game Board / Play Area
- **Desktop:** [Link to PDF](assets/wireframes/Milestone-project-2-desktop.pdf)  
- **Tablet:** [Link to PDF](assets/wireframes/Milestone-project-2-Ipad%20.pdf)  
- **Mobile:** [Link to PDF](assets/wireframes/milestone-project-2-mobile%20.pdf)  



---

## Features

### Existing Features
- **Header Section:** Displays the game title.
- **Game Board:** A grid of hidden cards (4x4 layout) that can be flipped to reveal icons.
- **Matching Logic:** Flipped cards stay revealed if they match.
- **Restart Button:** Allows players to restart the game at any time.
- **Responsive Design:** Adapts to desktop, tablet, and mobile screen sizes.

### Features Left to Implement
- High score storage using localStorage.
- Difficulty levels (more cards).

---

## Technologies Used
- **HTML5** — for structure and content  
- **CSS3** — for styling and responsive design  
- **JavaScript** — for game logic and interactivity 
- **Balsamiq** - used to create Wireframes for the project during the initial planning stage. 
- **Git hub** - Github was used to create and store the project repository.

---

## Testing
- Tested across various screen sizes (desktop, tablet, and mobile).  
- Checked for flipped card behavior, match logic, and restart functionality.  
- Verified hover effects and button click responses.
- Verified responsiveness using Chrome DevTools.
---
**Bug Discovered**
- Modal opacity issues on small screens  
**Fix:** Adjusted CSS to properly overlay modals and center content.


## Deployment

**Step 1: Sign in to GitHub**  
I first signed into GitHub to access repositories.
**Step 2: Locate the Template**  
I navigated to the repository.
-<div float="center">
           <img src="assets/images/select-new-repository.png" />
         </div>
**Step 3: Use the Template**  
I clicked the "Use this template" button.   
**Step 4: Name the Repository**  
I named the new repository **Memory-Game** and created it.  
-<div float="center">
           <img src="assets/images/memory-game.png" />
         </div>

**Step 5: Add, Commit, and Push Files**
- Once all files were created, I added, committed, and pushed them to GitHub:

git add .
git commit -m "Initial commit"
git push origin main

**Stepv 6: Git Workflow During Development**

Throughout the project, I used **Git** to save and store progress:

- git add . → to stage changes  
- git commit -m "Message" → to commit changes  
- git push origin main → to push changes to GitHub  

**Step 7: Deploy to GitHub Pages**

1. Open the project repository on GitHub.  
2. Go to **Settings**.   
-<div float="center">
           <img src="assets/images/setting.png" />
         </div>
3. Scroll down to the **GitHub Pages** section.  
-<div float="center">
           <img src="assets/images/pages.png" />
         </div>
4. Under **Source**, select the **Main Branch**.
-<div float="center">
           <img src="assets/images/select-main.png" />
         </div>  
5. The page refreshes and a link to the live site appears.
-<div float="center">
           <img src="assets/images/link-live.png" />
         </div>




**Deployment Issue**
At first, the deployment did not work because GitHub created an extra folder inside the repository.  
That folder contained the `assets/`, `index.html`, and `README.md` instead of placing them in the root of the repository.  
Since GitHub Pages only looks for `index.html` in the **root** (or `/docs` if configured), the site returned a 404 error.

**Fix**
- Deleted the unnecessary inner folder.  
- Moved `assets/`, `index.html`, and `README.md` to the root of the repository.  
- Re-deployed from the `main` branch, root folder.  

**Deployed Site**
The live site can be viewed here:  
👉 [Project Link](https://eandachew.github.io/Memory-Game/)
- 

### How to Run This Project Locally
1. repository.
2. Open index.html in your browser or run a local server.

---

## Credits

### Content and code 
- Game logic written by me using HTML, CSS, and JavaScript.
### Acknowledgement

- Code Institute for getting me to this point
