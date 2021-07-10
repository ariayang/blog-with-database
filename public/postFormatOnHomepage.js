document.querySelector('.show-more-button').addEventListener('click', function() {
	// If text is shown less, then show complete
	//console.log("read more/less clicked"); => never shown in log
	if(this.getAttribute('data-more') == 0) {
		this.setAttribute('data-more', 1);
		this.style.display = 'block';
		this.innerHTML = 'Read Less';

		this.previousElementSibling.style.display = 'none';
		this.previousElementSibling.previousElementSibling.style.display = 'inline';
	}
	// If text is shown complete, then show less
	else if(this.getAttribute('data-more') == 1) {
		this.setAttribute('data-more', 0);
		this.style.display = 'inline';
		this.innerHTML = 'Read More';

		this.previousElementSibling.style.display = 'inline';
		this.previousElementSibling.previousElementSibling.style.display = 'none';
	}	
});