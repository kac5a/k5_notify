// You can add or remove any notification
// type from here. Make sure you use the
// same name as the one in the brackets

const k5Notifications = {
  ['error']: {
    background: 'rgba(173, 38, 38, 0.9)',
    titleColor: '#FFF',
    messageColor: '#FFF',
    borderRadius: '5px',
    icon: '<i class="fa-solid fa-circle-exclamation"></i>',
  },
  ['success']: {
    background: 'rgba(47, 156, 20, 0.9)',
    titleColor: '#FFF',
    messageColor: '#FFF',
    borderRadius: '5px',
    icon: '<i class="fa-solid fa-circle-check"></i>',
  },
  ['warn']: {
    background: 'rgba(255, 152, 0, 0.9)',
    titleColor: '#FFF',
    messageColor: '#FFF',
    borderRadius: '5px',
    icon: '<i class="fa-solid fa-triangle-exclamation"></i>',
  },
  ['info']: {
    background: 'rgba(20, 100, 219, 0.9)',
    titleColor: '#FFF',
    messageColor: '#FFF',
    borderRadius: '5px',
    icon: '<i class="fa-solid fa-circle-info"></i>',
  },
  ['k5style']: {
    background:
      'linear-gradient(270deg, rgba(200,67,148,1) 0%, rgba(53,115,195,1) 100%)',
    titleColor: '#FFF',
    messageColor: '#FFF',
    boldTitle: true,
    borderRadius: '8px',
    border: '2px solid rgba(65,196,255,1)',
    startImage: 'assets/k5_logo.png',
    icon: '<i class="fa-brands fa-kickstarter"></i>',
    duration: 4000,
    audio: 'assets/k5_notify.ogg',
  },
}
