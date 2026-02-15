# Netflix-Style Portfolio

## Overview
This portfolio is inspired by the Netflix interface with a clean, professional design that showcases your work in an engaging way.

## Features

### 1. Netflix Intro Animation
- Click anywhere on the screen to start
- Plays the authentic Netflix TUDUM sound
- Logo zooms out with smooth animation
- Transitions to profile selection

### 2. Profile Selection ("Who's Watching?")
- 4 unique profiles with different perspectives:
  - **Recruiter**: Professional, achievement-focused content
  - **Developer**: Technical deep-dive into your work
  - **Stalker**: Fun, casual perspective with personality
  - **Adventurer**: Gamified journey through your career
- Each profile has a unique animated background (GIF from Giphy)
- Color-coded avatars (Blue, Grey, Red, Yellow)

### 3. Dynamic Backgrounds
- Each profile loads with its own animated background
- Backgrounds are subtle (30% opacity) to maintain readability
- Smooth transitions between sections

### 4. Navigation
- Fixed header with smooth scroll effects
- "Change Profile" button to go back to profile selection
- Profile icon in header also returns to selection
- Smooth scrolling to sections

### 5. Content Sections
- **Hero**: Large title, description, CTA buttons, stats
- **Projects**: Grid of project cards with hover effects
- **About**: Detailed bio that changes per profile
- **Contact**: Contact cards with hover animations

## Sound
The portfolio uses the actual Netflix TUDUM sound file (`netflix-sound.mp3`) for authenticity.

## Customization
All content is stored in the `content` object in `js/main.js`. Update this to customize:
- Hero titles and descriptions
- About content for each profile
- Profile icons

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Audio autoplay may require user interaction (click to start)

## Deployment
Already configured for GitHub Pages. Just push to deploy!
