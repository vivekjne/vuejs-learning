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
        movieName:"",
        htmlMessage:"<h2>This is a heading using <span style='color:green;'>v-html</span></h2>"
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
    },
    computed:{
        movieListMessage(){
           if(this.moviesList.length<3){
               return "You are not much of a <span style='color:red;background:black'><em>star wars</em></span> fan"
           }else if(this.moviesList.length==3){
            return "You only like the original <span style='color:orange;background:black'><em>star wars</em></span> movies"
           }else if(this.moviesList.length>3 && this.moviesList.length<=6){
            return "You are a <span style='color:yellow;background:black'><em>star wars</em></span> fan."
           }
           else if(this.moviesList.length>6){
            return "You are a die hard <span style='color:green;background:black'><em>star wars</em></span> fan."
           }
        }
    }
  }

  const app = Vue.createApp(CounterApp)

  app.component('movie-item', {
    props: ['movie'],
    template: `<li>{{ movie.name }}</li>`
  })

  app.mount('#app')