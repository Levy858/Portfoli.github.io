window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 30) {
    document.getElementById("zakladki").style.top = "-100px";
  } else {
    document.getElementById("zakladki").style.top = "0";
  }
}
const Alien = document.getElementById('Alien');
    const strzalka_lewo_Alien = document.getElementById('strzalka_lewo_Alien');
    const strzalka_prawo_Alien = document.getElementById('strzalka_prawo_Alien');

    const Shiganshina = document.getElementById('Shiganshina');
    const strzalka_lewo_Shiganshina = document.getElementById('strzalka_lewo_Shiganshina');
    const strzalka_prawo_Shiganshina = document.getElementById('strzalka_prawo_Shiganshina');
    
    var czas_zmiany = false;
    
    function zmiana_zdjec(glowne_zdjecie,Strzalka_lewo,Strzalka_prawo, lok_zdj1,lok_zdj2,lok_zdj3){
        //Prawa strzalka
        let numer_zdjecia = 0;
        Strzalka_prawo.addEventListener('click', () => {
          
          if(czas_zmiany == false) {
            
            czas_zmiany = true;
            console.log('test');
            glowne_zdjecie.style.opacity = '0';
            
            
            setTimeout(function(){
              
              console.log(czas_zmiany);numer_zdjecia += 1;
              console.log(numer_zdjecia);
              switch(numer_zdjecia){
                  case 0:
                      glowne_zdjecie.src = lok_zdj1
                  break;
                  case 1:
                      glowne_zdjecie.src = lok_zdj2
                  break;
                  case 2:
                      glowne_zdjecie.src = lok_zdj3
                      numer_zdjecia = -1;
                  break;
              }
              glowne_zdjecie.style.opacity = '1';
              czas_zmiany = false
              
            }, 300);
          } 
        })
        //Lewa strzalka
        Strzalka_lewo.addEventListener('click', () => {
          
          if(czas_zmiany == false) {
            
            czas_zmiany = true;
            console.log('test');
            glowne_zdjecie.style.opacity = '0';
            
            
            setTimeout(function(){
              
              console.log(czas_zmiany);
              console.log(numer_zdjecia);
              switch(numer_zdjecia){
                  case 0:
                      glowne_zdjecie.src = lok_zdj3
                      numer_zdjecia -= 1
                  break;
                  case 1:
                      glowne_zdjecie.src = lok_zdj1
                      numer_zdjecia -= 1
                  break;
                  case -1:
                      glowne_zdjecie.src = lok_zdj2
                      numer_zdjecia += 2
                  break;
              }
              glowne_zdjecie.style.opacity = '1';
              czas_zmiany = false
              
            }, 300);
          } 
        })
    }



    zmiana_zdjec(Shiganshina,strzalka_lewo_Shiganshina,strzalka_prawo_Shiganshina, 'Shiganshina.png', 'Shiganshina1.png', 'Shiganshina3.png');

    zmiana_zdjec(Alien,strzalka_lewo_Alien,strzalka_prawo_Alien, 'Alien2.png', 'Alien3.png', 'Alien5.png');