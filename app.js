
// 1.
 // 1. Select and cache the <main> elment in a variable named mainEl.
 const mainEl = document.querySelector('main');
  
 // 2. Set the background color of mainEl to the value stored in the------
 mainEl.style.backgroundColor = "var(--main-bg)";

 //3. Set the content of mainEl to <h1> DOM Manipulation <h1>.
 const h1 = document.createElement ("h1");
 h1.innerHTML = "DOM Manipulation";
 h1.style.textAlign = 'center';
 mainEl.append(h1);


 // 2.
 const topMenuEl = document.getElementById('top-menu');

 topMenuEl.style.height = '100%';

 topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

 topMenuEl.classList.add ("flex-around");

 // Menu data structure
 var menuLinks = [
    {text: 'about', href: '/about' },
    
 ]


 // 3.
 menuLinks.forEach((link) => {
    let a = document.createElement ('a');
    a.setAttribute('href', link.href);
    a.textContent = link.text; 
    topMenuEl.appendChild(a);
 });

