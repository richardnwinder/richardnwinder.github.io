function getStyle(id, name)
{
    var element = document.getElementById(id);
    return element.currentStyle ? element.currentStyle[name] : window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(name) : null;
}


document.addEventListener('DOMContentLoaded',()=>{
	const $navbarBurgers=Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'),0);
	if($navbarBurgers.length>0){
		$navbarBurgers.forEach(el=>{
			el.addEventListener('click',()=>{
				const target=el.dataset.target;
				const $target=document.getElementById(target);
				el.classList.toggle('is-active');
				$target.classList.toggle('is-active');
			});
		});
	}
});

document.addEventListener('DOMContentLoaded',()=>{
	const $navbarBurgers=Array.prototype.slice.call(document.querySelectorAll('.aside-burger'),0);
	if($navbarBurgers.length>0){
		$navbarBurgers.forEach(el=>{
			el.addEventListener('click',()=>{
				const target=el.dataset.target;
				const $target=document.getElementById(target);
				el.classList.toggle('is-active');
				$target.classList.toggle('is-active');
			});
		});
	}
});

try{
	var typed=new Typed('#typed',{stringsElement:'#typed-strings',typeSpeed:50,backSpeed:20,loop:false});
} catch(nil){}

/*document.addEventListener('DOMContentLoaded',()=>{
	const opts={size:1000,autoplay:true,stopautoplayoninteraction:false,delay:5000,threshold:50,restraint:100,allowedTime:500};
	var carousels=bulmaCarousel.attach(selector='.carousel, .hero-carousel',options=opts);
});*/