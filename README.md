# Cognizant Java FSE Upskilling - Local Community Event Portal

A lightweight, browser-based portal for residents to register for events, check locations, and access basic community services. Built with **HTML5**, **CSS3**, and **JavaScript (ES6+)**.

## Project Structure

```
Cognizant-JavaFSE-Upskilling/
├── index.html              # Main portal page (all HTML5 exercises)
├── help.html               # External help document
├── assets/
│   ├── css/
│   │   └── styles.css      # All CSS3 styles (selectors, layout, responsive)
│   ├── js/
│   │   └── main.js         # All JavaScript exercises integrated
│   ├── images/
│   │   ├── event1-6.svg    # Placeholder event gallery images
│   │   ├── background.svg  # Background texture
│   │   └── promo.mp4       # Placeholder promo video
│   └── data/
│       └── events.json     # Mock API endpoint for events
└── README.md
```

## Features Covered

### HTML5 (10 Exercises)
| Ex | Topic | Implementation |
|----|-------|---------------|
| 1 | Base Template | `<!DOCTYPE html>`, `<html lang="en">`, `<meta charset="UTF-8">`, section comments |
| 2 | Navigation | `<nav>` with anchor links, `<section id="...">`, external `help.html` with `target="_blank"` |
| 3 | Welcome Banner | `<div id="welcomeBanner">` with blue background, inline `<span>` styling, `.highlight` class |
| 4 | Image Gallery | `<table>` 2x3 grid, `<img>` with `alt`, `title`, `class="event-img"`, `<figcaption>` |
| 5 | Registration Form | `text`, `email`, `date`, `select`, `textarea`, `placeholder`, `required`, `autofocus`, `<output>` |
| 6 | Event Feedback | `onblur` (phone), `onchange` (fee), `onclick` (confirm), `ondblclick` (enlarge), `onkeydown` (char count) |
| 7 | Video Invite | `<video>` with controls, `oncanplay` message, `onbeforeunload` warning |
| 8 | User Preferences | `localStorage.setItem/getItem`, `sessionStorage`, Clear button |
| 9 | Geolocation | `getCurrentPosition` with `enableHighAccuracy`, error handling for denial/timeout |
| 10 | Debugging | `console.log` statements, breakpoints, Chrome DevTools ready |

### CSS3 (11 Exercises)
| Ex | Topic | Implementation |
|----|-------|---------------|
| 1 | CSS Methods | Inline (`style="color:red"`), Internal (embedded `<style>` in HTML), External (`styles.css`) |
| 2 | Syntax/Comments | Formatted rules with descriptive `/* Section comments */` |
| 3 | Selectors | `*` universal reset, `h2` element, `#mainHeader` ID, `.event-card` class, `h3, p` grouping |
| 4 | Color & Background | HEX `#3498db`, RGBA `rgba(0,0,0,0.1)`, background image with fallback, `linear-gradient` |
| 5 | Typography | Google Fonts (`@import`), `font-family`, `font-size`, `font-weight`, `text-transform`, `letter-spacing`, `line-height` |
| 6 | Links & Lists | `:link`, `:visited`, `:hover`, `:active` pseudo-classes; `list-style-type: none` on nav |
| 7 | Tables | `border-collapse: collapse`, `padding`, `background`, `nth-child(even)` zebra striping |
| 8 | Box Model | `margin`, `padding`, `border`, `outline` on focused inputs, `visibility:hidden` vs `display:none` |
| 9 | Multi-Column | `column-count: 2`, `column-gap: 30px`, `column-rule` on `.bulletin` |
| 10 | Responsive | `@media (max-width: 768px)` stacking nav, resizing images/fonts, `flexbox` layout, `vw`/`%` units |
| 11 | DevTools Debug | Device toolbar simulation, Network tab for CSS loading, live style editing |

### JavaScript (14 Exercises)
| Ex | Topic | Implementation |
|----|-------|---------------|
| 1 | Setup | `<script src="main.js">`, `console.log`, `window.onload` alert |
| 2 | Data Types | `const`/`let`, template literals `` `Hello ${name}` ``, `++`/`--` seat management |
| 3 | Conditionals/Loops | `if-else` for past/full events, `forEach()` loop, `try-catch` in `registerUser()` |
| 4 | Functions & Closures | `addEvent()`, `registerUser()`, `filterEventsByCategory()`, `createCategoryTracker()` closure |
| 5 | Objects & Prototypes | `EventObj` constructor, `.checkAvailability()` on prototype, `Object.entries()` |
| 6 | Array Methods | `.push()` add events, `.filter()` music events, `.map()` format cards |
| 7 | DOM Manipulation | `querySelector("#eventList")`, `createElement("div")`, `appendChild()` |
| 8 | Event Handling | `onclick` register, `onchange` filter, `onkeydown` quick search |
| 9 | Async JS | `.fetch()` from `events.json`, `.then()/.catch()`, `async/await`, spinner |
| 10 | Modern ES6+ | `let/const`, default params, destructuring `{name, date}`, spread `[...list]` |
| 11 | Form Handling | `form.elements`, `event.preventDefault()`, inline validation errors |
| 12 | AJAX & Fetch | `fetch()` POST to JSONPlaceholder, success/failure messages, `setTimeout()` simulation |
| 13 | Debugging | `console.log()` traces, breakpoint guide, Network tab inspection |
| 14 | jQuery & Frameworks | Native `addEventListener`, CSS `@keyframes` fadeIn, framework comparison notes |

## How to Run

1. Open **index.html** in Google Chrome (or any modern browser).
2. For full functionality, serve via a local server:
   ```
   npx serve .
   ```
   Or use VS Code Live Server extension.

## Browser Support

- Chrome (recommended for DevTools exercises)
- Firefox, Edge, Safari (ES6+ support required)

## Key Technical Highlights

- **Semantic HTML5**: `header`, `nav`, `main`, `section`, `footer`
- **Responsive Design**: Flexbox layout + media queries for mobile
- **Progressive Enhancement**: Works with/without JavaScript
- **Error Handling**: Form validation, geolocation fallbacks, fetch error handling
- **Web Storage**: Persist user preferences across sessions
- **Geolocation**: High-accuracy location with timeout/permission handling

## Author

Cognizant Java Full Stack - Upskilling Program
