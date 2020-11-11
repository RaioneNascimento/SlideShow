'use strict';

const images = [
  {'id': '1', 'url':'./public/images/boku-no-hero.jpg'},
  {'id': '2', 'url':'./public/images/cavaleiros-do-zodiaco.jpg'},
  {'id': '3', 'url':'./public/images/death-note.jpg'},
  {'id': '4', 'url':'./public/images/digimon.jpg'},
  {'id': '5', 'url':'./public/images/naruto.jpg'},
  {'id': '6', 'url':'./public/images/pokemon.jpg'}
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
  images.forEach (image => {
    container.innerHTML += `
      <div class='item'>
        <img src='${image.url}'
      </div>
    `
  })
};

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
  containerItems.appendChild(items[0]);
  items = document.querySelectorAll('.item');
}

const next = () => {
  const lastItem = items[items.length - 1];
  containerItems.insertBefore( lastItem, items[0] );
  items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
