; {
  Vue.component('custom-select', {
    template: '#select-tempalte',
    props: {
      list: Array
    },
    data () {
      return {
        name: '',
        showSelect: false,
      }
    },
    computed: {
      filteredList() {
        if(!this.name) {
          return this.list
        } else {
          return this.list.filter(item => {
            return item.name.indexOf(this.name) !== -1
          })
        }
      }
    },
    methods: {
      select(item) {
        this.name = item.name
        this.$emit('changed', item)
        this.showSelect = false
      },
      search() {

      }
    }
  })
}