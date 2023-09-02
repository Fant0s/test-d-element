document.addEventListener('DOMContentLoaded', function () {
  const btn = document.createElement('button');
  btn.classList.add('client-logo-container');
  btn.classList.add('btn-clients');
  btn.textContent = 'More Client';
  const logoData = [
    {
      icon: '',
      title: 'LOGO CLIENT 2',
    },
    {
      icon: '',
      title: 'LOGO CLIENT 3',
    },
    {
      icon: '',
      title: 'LOGO CLIENT 4',
    },
    {
      icon: '',
      title: 'LOGO CLIENT 5',
    },
    {
      icon: '',
      title: 'LOGO CLIENT 6',
    },
    {
      icon: '',
      title: 'LOGO CLIENT 7',
    },
  ];

  const container = document.querySelector('.client-container');
  logoData.forEach(data => {
    const logoClone = document
      .querySelector('.client-logo-container')
      .cloneNode(true);

    //logoClone.querySelector(".client-logo").src = data.icon;
    logoClone.querySelector('.client-logo').alt = data.title;

    container.appendChild(logoClone);
    container.appendChild(btn);
  });
});
