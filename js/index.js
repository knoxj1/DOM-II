// Your code goes here
// const nav = document.querySelectorAll('.nav');





const nav = document.querySelectorAll('nav a');
nav[0].addEventListener('click', function (e) {
    e.target.style.color = 'dodgerBlue';
    e.stopPropagation();
    e.preventDefault();
});


nav[1].addEventListener('click', function (e) {
    e.target.style.color = 'dodgerBlue';
    e.stopPropagation();
    e.preventDefault();
});

nav[2].addEventListener('click', function (e) {
    e.target.style.color = 'dodgerBlue';
    e.stopPropagation();
    e.preventDefault();
});


nav[3].addEventListener('click', function (e) {
    e.target.style.color = 'dodgerBlue';
    e.stopPropagation();
    e.preventDefault();
});

///adventure awaits section blue/green
const content1 = document.querySelector('.content-section');

content1.addEventListener('mouseenter', function (event) {
event.target.style.backgroundColor = 'green';

});

content1.addEventListener('mouseleave', function (event) {
event.target.style.backgroundColor = 'white';
;
});

console.log(content1);
///////
const content2 = document.querySelector('.text-content1')

content2.addEventListener('mouseover', function (event) {
  event.target.style.backgroundColor = 'red';
  event.stopPropagation();
  event.preventDefault();

});

content2.addEventListener('mouseout' , function (event) 
  { event.target.style.backgroundColor = 'white';
  
  });

  const intro = document.querySelector('.intro');

  intro.addEventListener('mouseover', function (event) {
   event.target.style.backgroundColor = 'orange';
   event.stopPropagation();
  });

intro.addEventListener('mouseout', function (event) {
   event.target.style.backgroundColor = 'white';
   
  });

  const img = document.querySelector('.img-content1')

  img.addEventListener('mouseover' , function (event) {
    event.target.style.backgroundColor = 'lime';

     
  });

  img.addEventListener('mouseout' , function (event) {
    event.target.style.backgroundColor = 'white';

     
  });

  const page1 = document.querySelector('html');

  page1.addEventListener('keydown' , function (event) {
    event.target.style.backgroundColor = 'blue';

     
  });

 page1.addEventListener('keyup' , function (event) {
    event.target.style.backgroundColor = 'white';

     
  });

  const foot = document.querySelector('.footer');

  foot.addEventListener('mouseenter' , function (event) {
    event.target.style.backgroundColor = 'blue';

     
  });

  foot.addEventListener('mouseleave' , function (event) {
    event.target.style.backgroundColor = 'tan';

     
  });

  const headNav = document.querySelector(' .main-navigation') 

  console.log(headNav);

  headNav.addEventListener('mouseover', e => 
  e.target.style.backgroundColor = 'lime');

  headNav.addEventListener('mouseout', e => 
  e.target.style.backgroundColor = 'white');