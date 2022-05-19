/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const startingTime = performance.now();



const navBarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for(let section of sections){
    const listItem = document.createElement('li');
    listItem.innerHTML = section.id;
    listItem.classList.add('menu__link');
    listItem.id = section.id+'__link';

    navBarList.appendChild(listItem);
}

// Add class 'active' to section when near top of viewport
function setActiveSections(section){
    if(isInViewport(section.querySelector('h2'))){
        document.getElementById(section.id+'__link').classList.add('active');
        section.classList.add('active');
    }
    if(!isInViewport(section.querySelector('h2'))){
        document.getElementById(section.id+'__link').classList.remove('active');
        section.classList.remove('active');
    }
}

// Scroll to anchor ID using scrollTO event
document.querySelectorAll('.menu__link').forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.target.id.split('__')[0];
        window.scrollTo({
            top: document.getElementById(targetId).offsetTop,
            behavior: 'smooth'
        });
    });
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
function scrollToSection() {
    for(let section of sections){
        setActiveSections(section);
    }
}

// Set sections as active
document.addEventListener('scroll', scrollToSection);

const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');