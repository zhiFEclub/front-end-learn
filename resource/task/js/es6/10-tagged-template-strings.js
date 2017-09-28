console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);


function escape(str) {
  var repalceMap = [{
    key: "'",
    value: '&apos;'
  },{
    key: '"',
    value: '&quot;'
  },{
    key: "<",
    value: '&lt;'
  },{
    key: ">",
    value: '&gt;'
  },{
    key: "&",
    value: '&amp;'
  }]
  repalceMap.forEach(item => {
    str = str.replace(new RegExp(item.key, 'g'), item.value)
  })
  return str
}