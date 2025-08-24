try {
   document.querySelectorAll('.dropdown-header').forEach((el) => {
      el.addEventListener('click', (e) => {
         const content = e.target.parentNode.querySelector('.dropdown-content');
         const arrow = e.target.querySelector('.arrow');
         const isOpen = content.classList.contains('open');

         if (!isOpen) {
            content.style.maxHeight = 'none';
            const contentHeight = content.scrollHeight + 80 + 'px';
            content.style.maxHeight = '0';
            content.classList.add('open');

            setTimeout(() => {
               content.style.maxHeight = contentHeight;
            }, 0);
            arrow.innerHTML = "-";
         } else {
            content.style.maxHeight = '0';
            content.classList.remove('open');
            arrow.innerHTML = "+";
         }
      })

   })
} catch (e) {
   console.log(e)
}

try {

   function initMap() {
      let map = new ymaps.Map('map', {
         center: [48.0192607809712, 37.80341919873047],
         zoom: 10
      });

      let placemark = new ymaps.Placemark([48.0192607809712, 37.80341919873047], {}, {})

      map.controls.remove('geolocationControl')
      map.controls.remove('searchControl')
      map.controls.remove('trafficControl')
      map.controls.remove('typeSelector')
      map.controls.remove('fullscreenControl')
      map.controls.remove('zoomControl')
      map.controls.remove('rulerControl')
      map.controls.remove(['scrollZoom'])

      map.geoObjects.add(placemark)
   }


   ymaps.ready(initMap);
} catch (e) {
   console.log(e)
}

try {

   const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.classList.add("show")
         } else {
            entry.target.classList.remove('show')
         }
      })
   }, {
   })

   const animatins = document.querySelectorAll('.hidden-animation')

   animatins.forEach((el) => {
      observer.observe(el)
   })
} catch (e) {
   console.log(e)
}
