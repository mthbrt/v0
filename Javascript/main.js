/* Changement de l'image de la page d'acceuil */
	i = 1;
	function affiche(numero) {
		if ( i>0) {
			if ( i<3) {
				i = numero;
				img.src = i+'.png';
				text.value = i;
			} 
			else {
				i = numero -3;
				img.src = i+'.png';
				text.value = i;
			}
		}
	}


/* Affichage des actuaités */
	function actu(){
	var actualite = document.querySelector(".news")
	actualite.classList.toggle("active")
	}


/* Affichage des paramètres musique et theme */
	function toggle(){
	var settings= document.querySelector(".settings")
	settings.classList.toggle("active")
	}


/* switcheur du paramètres musique */
	var bouton = document.querySelector("#micro");
	var micro = document.querySelector("#micro > i");
	bouton.addEventListener("click", () => {
	  if (micro.className === 'bx bx-microphone-off') {
	micro.classList.remove('bx-microphone-off');
	micro.classList.add('bx-microphone');
	musique.play();
	  } else {
	micro.classList.remove('bx-microphone');
	micro.classList.add('bx-microphone-off');
	musique.pause();
	  }
	});

/* switcheur du paramètres theme */
	var bouton = document.querySelector("#theme");
	var theme = document.querySelector("#theme > i");
	bouton.addEventListener("click", () => {
	  if (theme.className === 'bx bx-toggle-right') {
	theme.classList.remove('bx-toggle-right');
	theme.classList.add('bx-toggle-left');
	document.getElementById('linkStyle').href ="styleInverse.css";
	  } else {
	theme.classList.remove('bx-toggle-left');
	theme.classList.add('bx-toggle-right');
	document.getElementById('linkStyle').href ="styletest.css";
	  }
	});
	
	
/* déploiment de la barre de navigation au click sur l'icon burger*/
	let sidebar = document.querySelector(".sidebar");
	let closeBtn = document.querySelector("#btn");
	let searchBtn = document.querySelector(".bx-search");

	closeBtn.addEventListener("click", ()=>{
	  sidebar.classList.toggle("open");
	  menuBtnChange();
	});

	searchBtn.addEventListener("click", ()=>{
	  sidebar.classList.toggle("open");
	  menuBtnChange();
	});

/* changement de l'icon burger au déploiment de la barre dde navigation */
	function menuBtnChange() {
	 if(sidebar.classList.contains("open")){
	   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
	 }else {
	   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
	 }
	}