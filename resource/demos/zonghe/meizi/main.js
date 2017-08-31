// http://gank.io/api
$(document).ready(()=> {
  load().then(render)
  function load() {
    return $.ajax({
      url: 'http://gank.io/api/data/福利/50/1'
    })
  }

  function render(data) {
    var list = data.results
    var html = list.map(item => {
      return `
        <img class="imgs__item" src="${item.url}">
      `
    }).join('')

    $('.imgs').html(html)
  }
})