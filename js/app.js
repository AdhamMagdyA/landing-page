const startingTime = performance.now();
const navBarList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

////////////////////// Start of main program //////////////////////

/**
 * @description checks if a specific element is appearing on the screen
 * @param {HTMLElement} element
 * @returns {Boolean}
 */
const isElementAppearing = (element) => {
  const elementArea = element.getBoundingClientRect();
  // return true if the element top is under the top of the viewport
  // and element bottom is above the bottom of the viewport
  return elementArea.top >= 0 && elementArea.bottom <= window.innerHeight;
};

/**
 * @description build the navigation bar depending on the page sections
 * @param {Array} sections - array of the sections that will be included in the navbar
 */
const buildNavigationBar = (sections) => {
  for (let section of sections) {
    const listItem = document.createElement("li");
    // prepare the list item
    listItem.innerHTML = section.id;
    listItem.classList.add("menu__link");
    listItem.id = section.id + "__link";

    navBarList.appendChild(listItem);
  }
};

/**
 * @description mark a specific section as active in the navbar
 * @param {HTMLElement} section - the section that will be marked as active
 */
 const setActiveSections = (section) => {
  if (isElementAppearing(section.querySelector("h2"))) {
    document.getElementById(section.id + "__link").classList.add("active");
    section.classList.add("active");
  }
  if (!isElementAppearing(section.querySelector("h2"))) {
    document.getElementById(section.id + "__link").classList.remove("active");
    section.classList.remove("active");
  }
};

/**
 * @description scroll to a specific section when clicking its navbar tab
 */
 const sectionScrolling = () => {
  sectionLinks = document.querySelectorAll('.menu__link');
  sectionLinks.forEach((sectionLink)=>{
      sectionLink.addEventListener('click', (event) => {
          event.preventDefault();
          const targetId = event.target.id.split('__')[0];
          window.scrollTo({
              top: document.getElementById(targetId).offsetTop,
              behavior: 'smooth'
          });
      });
  });
}


/**
 * @description call the setActiveSections function when scrolling the page
 */
 document.addEventListener("scroll", () => {
    // call setActiveSections for each section
    for (let section of sections) {
      setActiveSections(section);
    }
  });

/**
 * @description call the buildNavigationBar function, to build the menu
 */
buildNavigationBar(sections);

/**
 * @description call the sectionScrolling function, to keep track of the active sections
 */
sectionScrolling();


/////////////////////////// End of main Prgram ///////////////////////////

//// navbar responsiveness /////
const toggleButton = document.getElementById("toggle-btn");
const navbarMenu = document.getElementsByClassName("navbar__menu")[0];
/**
 * @description toggle the navbar menu (open/close)
 */
toggleButton.addEventListener("click", () => {
  navbarMenu.classList.toggle("spread");
});
/**
 * @description closes the navigation bar menu when clicking anywher in the document
 */
document.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar__menu")) {
    navbarMenu.classList.remove("spread");
  }
});
///////////////////////////////

const endingTime = performance.now();

console.log("This code took " + (endingTime - startingTime) + " milliseconds.");