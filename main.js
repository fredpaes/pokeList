;
M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

const app = new Vue({
    el: '#app',
    data() {
        return {
            title: 'PokeDex',
            poks: [],
            detai: []
        }
    },
    methods: {
        getPoks(url) {
            axios({
            method: 'get',
            url: url,
            responseType: 'stream'
            })
            .then(function (response) {
                console.log(response.data)
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