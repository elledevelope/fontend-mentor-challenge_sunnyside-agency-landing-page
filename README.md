# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

**Note: the designs were created to the following widths:**
**- Mobile: 375px**
**- Desktop: 1440px**

### Screenshot
### Mobile-design:
![screenshot-mobile](/screenshot-mobile.png)
### Desktop-design:
![screenshot-desktop](/screenshot-desktop.png)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Vanila JavaScript
- Flexbox
- Mobile-first workflow

### What I learned

I discovered an interesting approach to handling mobile and desktop-sized images within the middle section, which I've named ``#cerise-orange``. Here's how I addressed it:
- In the HTML, I placed both images within a single ``<div> `` and assigned each image its respective class, ``class="mobile-img"`` and ``class="desktop-img"``:

```html
        <div>
          <img class="mobile-img" src="./assets/img/mobile/image-graphic-design.jpg" alt="image-graphic-design">

          <img class="desktop-img" src="./assets/img/desktop/image-graphic-design.jpg" alt="image-graphic-design">
        </div>
```
- Using a mobile-first workflow in CSS, I initially hid the desktop image by setting its ``display`` property to ``none``:
```css
      .mobile-img {
            display: block;
        }

      .desktop-img {
            display: none;
        }
```
- For the media query targeting desktop devices, I adjusted the display property to make the ``desktop-img`` visible:
```css
        @media screen and (min-width: 576px) {
          .mobile-img {
                display: none;
            }

          .desktop-img {
                display: block;
            }
        }

```


## Author

👋 Hello, I'm [@elledevelope](https://github.com/elledevelope/)

- 🎓 Currently a student in web and mobile development.
- 💻 Passionate about crafting digital experiences.
- 🌱 Always seeking to learn and grow.

Let's connect! 📫 [elledevelope@gmail.com]


