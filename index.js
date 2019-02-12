Vue.use(VueMaterial.default);

var app = new Vue ({
    el: '#app',
    // data vient ajouter du contenu "réactivement" dans le index.html 
    data: {
        title: 'Here is your Todo List, Enjoy!',
        tooltip: 'ceci est un tooltip',
        seen: false,
        todoList: ['Wake up with the Sun', 'Eat BreakFast', 'Have fun while learning to code my first apps', '🤯 😁'],
        todoName: '',
    },
    methods: {
    // methode activée par le click du button html qui ajoute une nouvelle todo dans la todoList
    // puis remplace cette valeur par ' ' dans le champs
    // "this" = tout ce que contient data
        addNewTodo: function() {
            this.todoList.push(this.todoName);
            this.todoName='';
        }
    }
});