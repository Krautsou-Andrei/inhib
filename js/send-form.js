const arrayUrl = [
  {
    inUrl: 'http://testsait/2023/05/18/%d0%bf%d1%80%d0%b8%d0%b2%d0%b5%d1%82-%d0%bc%d0%b8%d1%80/',
    toUrl: 'http://example.com',
  },
  {
    inUrl: 'http://testsait/author/andrei/',
    toUrl: 'http://google.com',
  },
];

function setArray(data) {
  let dataArray = data;

  if (dataArray.length > 0) {
    dataArray.forEach((link) => {
      if (link.inUrl === window.location.href) {
        if (sessionStorage.getItem(link.inUrl) === null) {
          sessionStorage.setItem(link.inUrl, 1);
          window.addEventListener('click', openNewWindow);
          function openNewWindow() {
            const href = window.location.href;
            const newTab = window.open(href, '_blank');
            window.location.href = link.toUrl;

            window.removeEventListener('click', openNewWindow);
          }
        }
      }
    });
  }
}

setArray(arrayUrl);
