 var swiper=new Swiper(".mySwiper",{
        speed:600,
        parallax:true,
        pagination:{el:".swiper-pagination",clickable:true,},
        navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",},
		loop:true,
		autoplay:{delay:999,disableOnInteraction:false,},
      });