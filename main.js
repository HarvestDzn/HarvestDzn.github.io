//-----Menu Button----//

// Create the bars of the menu into const
const topBar = document.querySelector('.top');
const middleBar = document.querySelector('.middle');
const bottomBar = document.querySelector('.bottom');
const menuButton = document.querySelector('.wrapper');
const menuOverlay = document.querySelector('.menu-overlay');
const menuBar = document.querySelector('.menu-bar');
const twitter = document.querySelector('.Twitter');

// is menu hidden or shown
let showMenu = false;

//event listener for when you click the button
menuButton.addEventListener('click', toggleMenu);

function toggleMenu(){
	// if menu is hidden
	if(!showMenu){
		topBar.classList.add('top-close');
		middleBar.classList.add('middle-close');
		bottomBar.classList.add('bottom-close');
		menuOverlay.classList.add('present');
		menuBar.classList.remove('non-active');
		twitter.classList.remove('non-active2');
		//sets the variable to say menu is shown
		showMenu = true;
	//if menu is shown
	}else{
		menuBar.classList.add('non-active');
		twitter.classList.add('non-active2');
		topBar.classList.remove('top-close');
		middleBar.classList.remove('middle-close');
		bottomBar.classList.remove('bottom-close');
		menuOverlay.classList.remove('present');
		//sets the variable to say menu is hidden
		showMenu = false;
	}
};
