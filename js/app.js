// global variables to be used throughout the program
const startingTime = performance.now();
const navBarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');


////////////////////// Functions definitions //////////////////////

// check if an element is appearing on the screen
isElementAppearing = (element) =>{
    const elementArea = element.getBoundingClientRect();
    // return true if the element top is under the top of the viewport
    // and element bottom is above the bottom of the viewport
    return elementArea.top >= 0 && elementArea.bottom <= window.innerHeight;

}

// loop over the sections to create the menue items
buildNavigationBar = (sections)=>{
    for(let section of sections){
        const listItem = document.createElement('li');
        // prepare the list item
        listItem.innerHTML = section.id;
        listItem.classList.add('menu__link');
        listItem.id = section.id+'__link';
        // add the list item to the navbar
        navBarList.appendChild(listItem);
    }
} 

// mark the section heading appearing now as active
setActiveSections = (section) => {
    if(isElementAppearing(section.querySelector('h2'))){
        document.getElementById(section.id+'__link').classList.add('active');
        section.classList.add('active');
    }
    if(!isElementAppearing(section.querySelector('h2'))){
        document.getElementById(section.id+'__link').classList.remove('active');
        section.classList.remove('active');
    }
}

// scroll to the clicked section
sectionScrolling = () => {
    sectionLinks = document.querySelectorAll('.menu__link');
    for(let sectionLink of sectionLinks){
        sectionLink.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.id.split('__')[0];
            window.scrollTo({
                top: document.getElementById(targetId).offsetTop,
                behavior: 'smooth'
            });
        });
    }
}

/////////////////////////// Functions calling //////////////////////
buildNavigationBar(sections);

sectionScrolling();

document.addEventListener('scroll', ()=>{
    // call setActiveSections for each section
    for(let section of sections){
        setActiveSections(section);
    }
});
/////////////////////////// End of Prgram ///////////////////////////

const endingTime = performance.now();

console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');