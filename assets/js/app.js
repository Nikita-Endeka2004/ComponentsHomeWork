
import { createApp } from "../../node_modules/vue/dist/vue.esm-browser.prod.js";

import { cardComponent } from "../components/cardcomponent.js";

const url = 'https://fakestoreapi.com/products';

createApp({
    data(){
        return{
            users: [],
        }
    },
    components:{
        cardComponent
    },
    async mounted(){
        let data = await fetch(url);
        data = await data.json();
        for (let item of data) {
            item.qt = 0;
        }

        this.users = data;
        console.log(data);
    },
    methods:{
        incQt(item){
            item.qt++;
        },
        decQt(item){
            item.qt--;
        },
    },
    computed:{
        forMathPrice(){
            return this.users.reduce((acc, item) => acc + (item.qt * item.price), 0).toFixed(2);
        },
        forMathQt(){
            return this.users.reduce((acc, item) => acc + item.qt , 0);
        }
    }
}).mount('#app');