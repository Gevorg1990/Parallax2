window.onload = function () {
   document.querySelector('.wrapper').classList.add('active')

   let l = document.querySelectorAll('li');
   for (let i = 0; i < l.length; i++) {
      l[i].classList.add('layer')
   }



   document.body.addEventListener('mousemove', parallax)
  
   
   function parallax(event) {
      // console.log(event.clientX);
      let t= document.querySelectorAll('.layer')

     t.forEach(layer => {
        layer.getAttribute('data-depth');
        let speed=layer.getAttribute('data-depth');
        
         // layer.style.transform = `translateX(${event.clientX.speed / 1000}px)`
        
        layer.style.transform=`translate(${event.clientX *speed/3000}px,${event.clientX *speed/3000}px)`
         
      })
   }

}


