document.addEventListener('DOMContentLoaded', function () {
  const cardData = [
    {
      cardClass: 'card--2',
      icon: 'img/card-icon-2.svg',
      iconClass: 'card-img--2',
      title: 'Make Your business To Be Better Famous In Internet',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      cardClass: 'card--3',
      icon: 'img/card-icon-3.svg',
      iconClass: 'card-img--3',
      title: 'Build Your Digital Product That Suitable For Your Need',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  const container = document.querySelector('.card-container__content');
  cardData.forEach(data => {
    const cardClone = document.querySelector('.card').cloneNode(true);

    cardClone.classList.remove('card--1');
    cardClone.classList.add(data.cardClass);
    cardClone.querySelector('.card-img').src = data.icon;
    cardClone.querySelector('.card-img').classList.remove('card-img--1');
    cardClone.querySelector('.card-img').classList.add(data.iconClass);
    cardClone.querySelector('.card-title').textContent = data.title;
    cardClone.querySelector('.card-info').textContent = data.description;

    container.appendChild(cardClone);
  });
});
