const CounterApp = {
    data() {
      return {
        counter: 0,
        message:''
      }
    },
    mounted() {
      setInterval(() => {
        this.counter++
      }, 1000)
    },
    methods:{
        reverseMessage(){
            this.message = this.message.split('').reverse().join('')
        }
    }
  }

  Vue.createApp(CounterApp).mount('#app')