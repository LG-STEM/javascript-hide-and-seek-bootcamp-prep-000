function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {

}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML += 1
  }
}
