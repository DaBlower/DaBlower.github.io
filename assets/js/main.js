// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error('Something went wrong, make sure that ${selector} exists or is typed correctly.');
};
//Nav styles on scroll
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrolly >= 15){
        headerElement.classList.add('activated')
    }else{
        
    }
};
// Open menu & search pop-up

// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage

// Swiper