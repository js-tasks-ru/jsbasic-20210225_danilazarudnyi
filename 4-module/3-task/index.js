function highlight(table) {

  let trs = table.querySelectorAll('tbody tr');
  for (let tr of trs) {
    if (tr.querySelector('td:last-child').getAttribute('data-available') == 'true') {
      tr.classList.add('available');
    }
    if (tr.querySelector('td:last-child').getAttribute('data-available') == 'false') {
      tr.classList.add('unavailable');
    }
    if (!tr.querySelector('td:last-child').getAttribute('data-available')) {
      tr.setAttribute('hidden', 'true')
    }
    if (tr.querySelector('td:nth-child(3)').innerHTML == 'm') {
      tr.classList.add('male');
    }
    if (tr.querySelector('td:nth-child(3)').innerHTML == 'f') {
      tr.classList.add('female');
    }
    if (Number(tr.querySelector('td:nth-child(2)').innerHTML) < 18) {
      tr.setAttribute('style', 'text-decoration: line-through')

    }

  }
}