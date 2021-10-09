window.addEventListener('DOMContentLoaded',() => {
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');
 
     function hideTabContent() {
         tabsContent.forEach(i => {
             i.classList.add('hide');
             i.classList.remove('show','fade');
         });
 
         tabs.forEach( i => {
             i.classList.remove('tabheader__item_active');
         });
     }
 
     function showTabContent(i = 0) {
         tabsContent[i].classList.add('show','fade');
         tabsContent[i].classList.remove('hide');
         tabs[i].classList.add('tabheader__item_active');
     }
 
     hideTabContent();
     showTabContent();
 
     tabsParent.addEventListener('click', e => {
         const target = e.target;
         if( target && target.classList.contains('tabheader__item')) {
             tabs.forEach( (item,i) => {
                 if (target == item) {
                     hideTabContent();
                     showTabContent(i);
                 }
             });
         }
     });

    //  timer
    const deadline = '2021-10-21';

    function getTimeRemaning(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / ( 1000 * 60 * 60 * 24)),
              hours = Math.floor( (t / ( 1000 * 60 * 60 ) % 24) ),
              minutes = Math.floor( (t / 1000 / 60 ) % 60),
              seconds = Math.floor( (t / 1000) % 60);
              return {
                  'total': t,
                  'days': days,
                  'hours': hours,
                  'minutes': minutes,
                  'seconds': seconds
              };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    function setClock(selector,endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock,1000);
              updateClock();
              function updateClock() {
                  const t = getTimeRemaning(endtime);

                  days.innerHTML = getZero(t.days);
                  hours.innerHTML = getZero(t.hours);
                  minutes.innerHTML = getZero(t.minutes);
                  seconds.innerHTML = getZero(t.seconds);
                  if (t.total <= 0) {
                      clearInterval(timeInterval);
                  }
              }
    }
    setClock('.timer',deadline);
  });
 