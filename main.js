;
M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

const listPok = new Vue({
    el: '#listPok',
    data() {
        return {
            title: 'PokeList',
            poks: [],
            details: [],
            newDetail: {}
        }
    },
    methods: {
        getPoks(url, name) {
            this.details = []
            this.newDetail.pok = name
            axios.get(url)
            .then(response => {
                this.newDetail.pic = response.data.sprites
                this.details.push(this.newDetail)
            }) .catch(e => {
                console.log(e)
            })
        }
    },
    created() {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res => {
                this.poks = res.data.results
                this.getPoks(res.data.results)
            }).catch(e => {
            console.log(e)
        })
    }
})