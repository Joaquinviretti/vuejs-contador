let app = new Vue({
    el: '#app',
    data: {
        contador: 0,
        clicks: 0,
    },
    methods: {
        sumar(num){

            if (this.contador + num < 0) {
                alert("El contador no puede ser menor a cero")
                return
            }

            this.contador += num;
            this.clicks += 1;
        }
    },
    computed: {
        calcularPotencia() {
            return this.contador ** 2
        }
    }
})