<a name="readme-top"></a>

<!-- HEADER -->
<h1 align="center">Let's Get Read</h1>

<h3 align="center">Consolidated News</h3>

<h4 align="center"><a href="https://lets-get-read.vercel.app/"><strong>Let's Get Read</strong></a> | <a href="https://github.com/danalchapman/lets-get-read"><strong>Repository »</strong></a></h4>

<p></p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#organization">Organization</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#setup">Setup</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li>
        <a href="#features">Features</a>
        <ul>
            <li><a href="#reflections">Reflections</a>
        </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

<br>

<h3 align="center">Front Page</h3>
<p align="center"><img width="500" src="https://media.giphy.com/media/CBNrHb9GEwuzOqyjEM/giphy.gif" alt="Let's Get Read main page gif"></p>

<h3 align="center">Detail Page</h3>
<p align="center"><img width="500" src="https://media.giphy.com/media/Aa3rNfpvi99p7HzHSM/giphy.gif" alt="Let's Get Read detail view gif"></p>

<h3 align="center">Invalid URL Error Handling</h3>
<p align="center"><img width="500" src="https://media.giphy.com/media/OU60ew8vcQU9Sr5REl/giphy.gif" alt="Let's Get Read invalid url error handling gif"></p>

<br />
Let's Get Read is a news-reader application utilizing the New York Times Top Stories API that allows a user to view the top stories from the New York Times website, see further details of a specific story, and filter the different stories by section via a dropdown menu. The overall time goal was to complete the MVP between 6-8 hours. MVP was reached in roughly 5 hours with the last 1-2 hours being spent refactoring, styling, and testing accessibility.
<br />
<br />
This take home assignment was assigned during the fourth and final module of Turing School of Software & Design's Front-End Engineering program. It's main goal was to give students an opportunity to simulate a take home assessment a junior developer may experience during the job hunt. This project includes React, React-Router, and more. The details of this project are outlined in <a href="https://mod4.turing.edu/projects/take_home/take_home_fe">this</a> project spec.

### Organization

- [MVP Document](https://docs.google.com/document/d/1-JtURyxsNPA-oAYqSkOnX2DYhMUOQ4dgZQpS8F2Ps44/edit?usp=sharing)  
- [Notion Document](https://flower-gravity-d1c.notion.site/Take-Home-Project-85205f19c89a404e8a02f05a59b85087) for general notes, link-grouping, and time-boxing of the project
- [Project Board](https://github.com/users/danalchapman/projects/2/views/1)
- [Figma JamBoard](https://www.figma.com/file/WufaC4yhWY7TSFpjkQ8hQX/Mod-4-%7C%7C-Take-Home-Wireframe?node-id=0%3A1&t=g8nKXDf5VV1AynJL-1)

<h3 align="center">Component Architecture</h3>
<p align="center"><img width="500" src="https://user-images.githubusercontent.com/105478792/210889817-7203b500-9016-492e-ad27-2758324c3975.png" alt="Component Architecture"></p>

<h3 align="center">Initial Wireframe</h3>
<p align="center"><img width="500" src="https://user-images.githubusercontent.com/105478792/210890219-404ff6e8-6fe1-4e6c-b82c-1ff42ac61ae3.png" alt="Wireframe"></p>

I utilized Figma's Jamboard for the Component Architecture and general Wireframe for the project. Throughout the course of reaching MVP I made minor adjustments to the wireframe, specifically with the `DetailView` component where I made the decision to turn the `NavBar` component into a `form` element on `TopStoriesBox` for ease of user interaction - when a user is on `DetailView` the dropdown menu is no longer visible until they return to the front page.

### Built With

![React][React-shield]
![JavaScript][JavaScript-shield]
![CSS][CSS-shield]
![HTML5][HTML-shield]
![Cypress][Cypress-shield]
![NPM][NPM-shield]
![Vercel][Vercel-shield]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Setup
- Clone the repository to your local machine
- `cd` into the repository
- Make sure the necessary dependencies are installed on your local machine (`react-router-dom`, `cypress`)
- Once the necessary dependencies are installed, run `npm start`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [ ] Add in functionality for a User to save an article to be viewed later
- [ ] Add in a search functionality for a User to search by typing into a search bar
- [x] Cypress Testing
- [ ] Dark Mode

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

- This application utilizes the React framework, with React-Router to add in a multi-page user experience and PropTypes to check data types. Error Handling was implemented in order to handle invalid urls and allows a User to either be redirected to the front page, or be shown a friendly, readable message and a button to return to the front page.

### Reflections
<b>Wins:</b><br>
Reaching MVP in around 5 hours was a big win for the overall assessment, being able to utilize the tools and foundational knowledge I've learned during Turing School of Software & Design's Frontend Engineering program and bring a user-friendly and accessible application to life is so fulfilling. When it comes to the code itself, creating and implementing the filter functionality via a dropdown menu that allows a user to see an assortment of top stories from a given topic was a huge win.
<p>
<b>Challenges:</b><br>
Making the decision to pivot from implementing Cypress testing before testing for accessibility was a difficult one, but one I fully believe in and am glad I made the choice. I am so passionate about making the online space accessible, and this project still has more to grow but with a 100% in Chrome's Lighthouse and 0 errors in the WAVE tool, I think I've made significant progress.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

<table align="center">
    <tr>
        <td align="center"> Dana Chapman: <a href="https://github.com/danalchapman">GitHub</a> | <a href="https://www.linkedin.com/in/danalchapman/">LinkedIn</a></td>
    </tr>
 <td align="center"><img src="https://avatars.githubusercontent.com/u/105478792?v=4" alt="Dana Chapman GitHub"
 width="150" height="auto" /></td>
</table>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[React-shield]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[JavaScript-shield]: https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[CSS-shield]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[HTML-shield]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[Cypress-shield]: https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e
[NPM-shield]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[Vercel-shield]: https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white

