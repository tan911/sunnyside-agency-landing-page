# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot/desktop.png)
![](./screenshot/mobile.png)


### Links

- Solution URL: [Code](https://github.com/tan911/sunnyside-agency-landing-page)
- Live Site URL: [Live site](https://tan911.github.io/sunnyside-agency-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- Javascript
- Sass/scss
- BEM (naming)


### What I learned

Trial and error led me to my ultimate solution for this challenge, but the most crucial part is that I learnt a lot while developing it, especially about using a grid for layout then use Flex for one-dimensional layout. Note! This is my second challenge that focuses on a grid system (it's tough, but the grid helps 😂), My first challenges [grid challenge](https://tan911.github.io/testimonial-grid-section/) This challenge is more difficult than my first one, but it is still useful if you want to gauge your understanding of basic layout principles. Therefore, I urge you to take up this challenge. [testimonial grid section](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7). 


Now, let's walk through this approach and how I end up with this solution


My initial strategy was to start with the div as a container for all content and then classify the div of each child as a container as well. I therefore have 10 divs that are under the container class.

```html
<div class="container">
    <div class="header"><div>
    <div class="text"><div>
    <div class="picture"><div>
    <div class="picture"><div>
    <div class="text"><div>
    <div class="graphic"><div>
    <div class="photography"><div>
    <div class="testimonial"><div>
    <div class="gallery"><div>
    <div class="footer"><div>
<div>
```

the second children div contain a text content and the second has an image inside of it

```html
<div class="text">text content<div>
<div class="picture"><img src="" alt="" /><div>
```
and so on. I added the grid to the parent (container) and started adding columns and rows to it to start the layout. However, after working on this layout (not the styles), I realized that I had forgotten to include the semantic elements, so I did.

```html
<div class="container">
    <header class="header"><header>
    <section class="text"><section>
    <div class="picture"><div>
    <div class="picture"><div>
    <section class="text"><section>
    <section class="graphic"><section>
    <section class="photography"><section>
    <section class="testimonial"><section>
    <div class="gallery"><div>
    <footer class="footer"><div>
</div>
```

Not bad, but how about to add and wrap all the section element and the non semantic element with the main element? so It looks like this 


```html
<div class="container">
    <header class="header"><header>
    <main>    
        <section class="text"><section>
        <div class="picture"><div>
        <div class="picture"><div>
        <section class="text"><section>
        <section class="graphic"><section>
        <section class="photography"><section>
        <section class="testimonial"><section>
        <div class="gallery"><div>
    </main>
    <footer class="footer"><div>
</div>
```

and then decided to make the body element as container and end up like this as final structure

```html
<body class="container">
    <header class="header"><header>
    <main>
        <section>
            <div class="text"><div>
            <div class="picture"><div>
            <div class="picture"><div>
            <div class="text"><section>
        </section>    
        <section class="graphic">
            <div><div>    
            <div><div>    
        <section>
        <section class="testimonial">
            <div></div>    
            <div></div>    
            <div></div>    
        <section>
        <div class="gallery">
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
        <div>
    </main>
    <footer class="footer"><body>
</body>
```
Not related to the structure of html elements but,
If you're just learning grid or want to practice a bit before taking on this task. It's best to prepare your layout before writing any code. 👋


### Useful resources

- [Clip path](https://bennettfeely.com/clippy/) - good resources for clip path
- [Highligth text](https://alvarotrigo.com/blog/css-highlight-text/) - for highlight the text using html css


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [tan911](https://www.frontendmentor.io/profile/tan911)

