let currentImageIndex = 0;

function visBilde(bildeElement) {
    const bilder = document.querySelectorAll('.bilde-container');
    
    // Hvis brukeren klikker på samme bilde igjen, lukker vi bildet.
    if(bilder[currentImageIndex] === bildeElement.parentElement) {
        bilder[currentImageIndex].querySelector('.kursbilde').classList.toggle('forstort-bilde');
        bilder[currentImageIndex].querySelector('.bilde-overlay').classList.toggle('synlig-tekst');
        return;
    }

    // Skjul det nåværende bildet
    bilder[currentImageIndex].querySelector('.kursbilde').classList.remove('forstort-bilde');
    bilder[currentImageIndex].querySelector('.bilde-overlay').classList.remove('synlig-tekst');

   

    // Vis det valgte bildet
    bildeElement.classList.toggle('forstort-bilde');
    bildeElement.nextElementSibling.classList.toggle('synlig-tekst');
}


function changeImage(direction) {
    const bilder = document.querySelectorAll('.bilde-container');
    visBilde(bilder[currentImageIndex].querySelector('.kursbilde')); // lukker det nåværende bildet
    currentImageIndex = (currentImageIndex + direction + bilder.length) % bilder.length;
    visBilde(bilder[currentImageIndex].querySelector('.kursbilde')); // åpner det nye bildet
 }

document.addEventListener('keydown', function(event) {
    if(event.key === "ArrowLeft") {
        changeImage(-1);
    } else if(event.key === "ArrowRight") {
        changeImage(1);
    }
});


   // JavaScript for å animere punktene en etter en
   const points = document.querySelectorAll("ul#pointList li p");
   const pointTexts = [
       "🔘 VMware tilbyr flere forskjellige virtualiseringsprodukter, inkludert VMware Workstation, VMware Player, VMware Fusion (for Mac), og VMware vSphere for mer avansert servervirtualisering.",
       "🔘 For Linux Ubuntu-brukere, er VMware Workstation Player et populært valg for desktop virtualisering.",
       "🔘 VMware Workstation Player er kompatibelt med Linux Ubuntu og kan installeres på Ubuntu-systemer for å opprette og kjøre virtuelle maskiner (VMer).",
       "🔘 Sørg for å sjekke VMware-nettstedet for de nyeste kravene og støttede Ubuntu-versjoner.",
       "🔘 Lurer på om du faktisk gadd å trykke på knappen for å se lese hele teksten🤔",
   ];

   let currentIndex = 0;
   let textIndex = 0;
   let animationStarted = false;

   function typeText(index, textIndex) {
       if (textIndex < pointTexts[index].length) {
           points[index].textContent += pointTexts[index].charAt(textIndex);
           setTimeout(function () {
               typeText(index, textIndex + 1);
           }, 20); // Juster denne forsinkelsen etter behov
       } else {
           currentIndex++;
           if (currentIndex < points.length) {
               textIndex = 0;
               setTimeout(function () {
                   typeText(currentIndex, textIndex);
               }, 500); // Juster denne forsinkelsen etter behov
           }
       }
   }

   document.getElementById("startButton").addEventListener("click", function () {
    if (!animationStarted) {
        animationStarted = true;
        document.getElementById("startButton").style.display = "none";
        typeText(currentIndex, textIndex);
    }
});


   document.getElementById('navbar-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
});


        document.getElementById('toggleButton').addEventListener('click', function() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        });

        // Toggle the mobile menu on click
document.getElementById('navbar-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
});

