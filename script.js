let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#menu-btn').onclick = (e) => {
    e.stopPropagation(); // Prevent click from bubbling to document
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
};

document.querySelector('#search-btn').onclick = (e) => {
    e.stopPropagation();
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
};

document.querySelector('#cart-btn').onclick = (e) => {
    e.stopPropagation();
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
};

// ✨ Close on outside click
document.addEventListener('click', function () {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
});

// ✨ Prevent closing when clicking inside elements
navbar.addEventListener('click', function (e) {
    e.stopPropagation();
});
searchForm.addEventListener('click', function (e) {
    e.stopPropagation();
});
cartItem.addEventListener('click', function (e) {
    e.stopPropagation();
});
