# Memory-Game
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

## Icons

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
- Move counter and timer.
- High score storage using localStorage.
- Difficulty levels (more cards).

---

## Technologies Used
- **HTML5** — for structure and content  
- **CSS3** — for styling and responsive design  
- **JavaScript** — for game logic and interactivity 
- **Balsamiq** - used to create Wireframes for the project during the initial planning stage. 

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