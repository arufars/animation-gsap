gsap.from('.logo-box', {
	opacity: 0,
	// duration: .8,
	duration: 1,
	delay: 3,
	// delay: 2,
	y: 10,
});
gsap.from('.btn-action', {
	opacity: 0,
	duration: 0.9,
	delay: 4.2,
	ease: 'expo.out',
	y: 20,
});
gsap.from('.nav-item', {
	opacity: 0,
	// duration: .8,
	duration: 0.8,
	delay: 3.2,
	// delay: 2.2,
	y: 20,
	stagger: 0.2,
});

gsap.from('.hero-title', {
	opacity: 0,
	duration: 1.5,
	delay: 4,
	// duration: 1,
	// delay: 1.9,
	y: 30,
});

gsap.from('.hero-descp', {
	opacity: 0,
	duration: 1,
	delay: 4,
	y: 30,
});
gsap.from('.hero-button', {
	opacity: 0,
	duration: 1,
	// delay: 2.8,
	delay: 4.3,
	y: 30,
});

//  IMG
gsap.to('.hide', {
	x: '100%',
	opacity: 1,
	duration: 3.5,
	// delay: 2,
	delay: 4,
	ease: 'power4.inOut',
});

gsap.from('.img', {
	opacity: 0,
	duration: 1.9,
	scale: 2,
	// delay: 2.8,
	delay: 4.2,
	ease: 'power2.inOut',
	x: 30,
});
// Akhir IMG

// Intro
gsap.to('span', {
	translateY: 0,
	stagger: 0.2,
	delay: 1,
	duration: 1,
	ease: 'power4.out',
});
gsap.to('.intro', {
	duration: 2.2,
	delay: 1,
	y: '-100%',
	ease: 'power4.in',
});

gsap.to('.wallpaper', {
	x: '100%',
	duration: 1.5,
	delay: 0,
	ease: 'power4',
});
