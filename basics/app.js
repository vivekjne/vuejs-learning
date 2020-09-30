const CounterApp = {
    data() {
      return {
        counter: 0,
        message:'',
        seen:true,
        moviesList:[
            {id:1,name:"Star Wars 1"},
            {id:2,name:"Star Wars 2"},
            {id:3,name:"Star Wars 3"},
            {id:4,name:"Star Wars 4"},
            {id:5,name:"Star Wars 5"},

        ],
        movieName:""
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
        },
        toggleDiv(){
            this.seen = !this.seen
        },
        onSubmit(e){
            this.moviesList.push({id:this.moviesList.length,name:this.movieName})
            this.movieName = ""
        }
    }
  }

  const app = Vue.createApp(CounterApp)

  app.component('movie-item', {
    props: ['movie'],
    template: `<li>{{ movie.name }}</li>`
  })

  app.mount('#app')