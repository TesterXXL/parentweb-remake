function rotate(element, deg) {
  element.style.webkitTransform = 'rotate('+deg+'deg)'; 
  element.style.mozTransform    = 'rotate('+deg+'deg)'; 
  element.style.msTransform     = 'rotate('+deg+'deg)'; 
  element.style.oTransform      = 'rotate('+deg+'deg)'; 
  element.style.transform       = 'rotate('+deg+'deg)';
}
(function(){
    home();
})();
function home() {
    if(!location.pathname == '') return;
    Hometabs();
    homeButton();
}
function Hometabs() {
  buttons = document.querySelectorAll('.section');
  buttons.forEach(x => {
    x.addEventListener("click", function() {
      request = x.dataset.request;
      if(request == 'out') {
        alert('mehich mawjouda fi site officiel');
        return;
      }
      fetch(request + '.html')
      .then(function(response) {
        return response.text()
      }).then(function(html) {
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, "text/html");
        let div = document.createElement('div');
        div.className = 'content-main';
        div.appendChild(doc.querySelector('.section-content'));
        document.querySelector('.sections').style.display = 'none';
        document.querySelector('.content').appendChild(div);
        document.querySelector('title').innerHTML = doc.querySelector('title').innerHTML;
        if(document.querySelectorAll('.tab')) {
          divTab();
        }
      }).catch(function(err) {
        console.log('Failed to fetch page: ', err);
      });
    });
  });
}
function homeButton() {
  homeBtn = document.querySelector('.home');
  homeBtn.addEventListener("click", function() {
    if(document.querySelector('.content-main')) {
      document.querySelector('.content-main').parentNode.removeChild(document.querySelector('.content-main'));
      document.querySelector('.sections').style.display = '';
    }
  }); 
}
function divTab() {
let tabs = document.querySelectorAll('.tab');
tabs.forEach(y => {
  y.addEventListener("click", function() {
    formC = y.nextElementSibling;
    icon = y.querySelector('i');
  if(formC.className == 'form-content hidden') {
    formC.classList.add('shown');
    formC.classList.remove('hidden');
    rotate(icon,'-180');
  }
  else if(formC.className == 'form-content shown') {
    formC.classList.add('hidden');
    formC.classList.remove('shown');
    rotate(icon,'0')
  }
});
});
}