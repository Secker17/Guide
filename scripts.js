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

    "🔘 Apache er en åpen kildekode webserver som er populær på mange Linux-distribusjoner, inkludert Ubuntu.",
    "🔘 For å installere Apache på en Ubuntu-server, kan du bruke kommandoen sudo apt-get install apache2.",
    "🔘 Når Apache er installert, kan du sjekke statusen med systemctl status apache2 for å se om serveren kjører.",
    "🔘 Grunnleggende Linux-kommandoer inkluderer ls for å liste filer, cd for å endre kataloger, og cp for å kopiere filer.",
    "🔘 Hvis du trenger å redigere konfigurasjonsfiler for Apache, finner du dem ofte i katalogen /etc/apache2/ og kan bruke tekstredigerere som nano eller vi.",
    "🔘 For å gi brukertilgang til bestemte kataloger på en webserver, kan du konfigurere .htaccess-filer i Apache.",
    "🔘 Linux-brukere bør også være kjent med kommandoen chmod for å endre filrettigheter og chown for å endre eierrettigheter.",
    "🔘 I Apache kan du også opprette virtuelle vertskonfigurasjoner ved hjelp av <VirtualHost>-direktiver for å betjene flere nettsteder fra en enkelt server.",
    "🔘 Ved feilsøking på en Apache-server, er det nyttig å kjenne til error.log og access.log, som typisk finnes i /var/log/apache2/.",
    "🔘 Håper denne oversikten hjelper deg med å forstå grunnleggende konsepter knyttet til Apache og Linux. Husk alltid å søke etter spesifikke løsninger basert på din situasjon!",
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

