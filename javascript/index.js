//visitor Count//
var count = localStorage.getItem('Counter')||0
var c = ++count
localStorage.setItem('Counter',c)
var mycount = localStorage.getItem('Counter')
document.getElementById('visitortext').innerText = mycount

//Date //
function mytimer()
{
    var mydate = new Date()
document.getElementById("datetext").innerText = mydate
}
setInterval(mytimer,1000)
//hero section//
document.querySelector('.search-bar').addEventListener('input', function(e) {
    // You can implement search functionality here
    console.log('Searching for:', e.target.value);
  });
   //recommend section//
   const recommendations = [
    { title: "the lord of the ring", imgSrc: "image/lord of ring.jpg", description: "Author:J.R.R Tolkien" },
    { title: "pride and prejudice", imgSrc: "image/pride and prejidce.jpg", description: "Author:Jane Austin" },
    { title: "the art of not giving a fuck", imgSrc: "/image/the subtle art of not giving a f.png", description: "Author:Mark Manson" }
    // Add more books here
  ];
  
  const carousel = document.querySelector('.book-carousel');
  recommendations.forEach(book => {
    const bookItem = document.createElement('div');
    bookItem.classList.add('book-item');
    bookItem.innerHTML = `
      <img src="${book.imgSrc}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>${book.description}</p>
    `;
    carousel.appendChild(bookItem);
  });
  
  //upcoming books section//
  const upcomingbooks = [
    {title:"Beautiful Ugly", imgSrc:"image/beautiful ugly.jpg" , author: "Alice Feeney", description: "The million-copy bestselling Queen of Twists Alice Feeney returns with a gripping and deliciously dark thriller about marriage and revenge."},
    {title:"Beg, Borrow & Steal", imgSrc:"image/beg,.jpg" , author: "Sarah Adam", description: "The million-copy bestselling Queen of Twists Alice Feeney returns with a gripping and deliciously dark thriller about marriage and revenge."},
    {title:"KataBasis", imgSrc:"image/katabasis.jpg" , author: "Author: R.F Kuang", description: "The million-copy bestselling Queen of Twists Alice Feeney returns with a gripping and deliciously dark thriller about marriage and revenge."}
];

const container = document.getElementById('book-cards-container');

upcomingbooks.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';

    card.innerHTML = `
        <img src="${book.imgSrc}" alt="${book.title}">
        <div class="card-content">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>${book.description}</p>
        </div>
    `;

    container.appendChild(card);
});
// add 3d effects on card//
//const card = document.querySelector('.card');//

//card.addEventListener('mousemove', (e) => {
    //const rect = card.getBoundingClientRect();
    //const x = e.clientX - rect.left;
    //const y = e.clientY - rect.top;

    //const centerX = rect.width / 2;
    //const centerY = rect.height / 2;

//    const rotateX = (y - centerY) / 10;
  //  const rotateY = (centerX - x) / 10;

    //card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//});//

//card.addEventListener('mouseleave', () => {
   // card.style.transform = 'rotateX(0) rotateY(0)';
//});//
