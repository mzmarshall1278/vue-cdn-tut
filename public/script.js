const app = new Vue({
  el: '#app',
  data: {
    fruit: "banana",
    // image: require('./pics/img1.jpg')
  }
})

const app2 = new Vue({
  el: '#app2',
  data: {
    animal: true,
    title: 'joker',
    image: '../pics/img1.jpg'
  }
})

const app3 = new Vue({
  el: '#app3',
  data: {
    people: [
      {name: "Jones", age: 32},
      {name: "Adam", age: 24},
      {name: "Ben", age: 27},
      {name: "amos", age: 30},
    ],
    name: '',
    age: ''
  },
  methods: {
     change(k){
        this.people[k].name = this.people[k].name.split('').reverse().join('');
        // console.log(this.people[k].name)
    },
    addPerson(){
      const newPerson = {name: this.name, age : this.age};
      if(!this.name || !this.age) {
        alert(`${this.name} enter a name`)
        return
      }

      this.people.forEach(person => { 
        if(person.name === newPerson.name){
          // alert(`You are already added`);
          return
        }
      })

      this.people.push(newPerson)
      
    }
  }
})
