
const cardComponent = {
    data(){
        return{
            
        }
    },
    props: ['itemUsers'] ,
    methods: {
        ucFirst(str){
            if (!str) return str;
            return str[0].toUpperCase() + str.slice(1);
        },
        inc(){
            this.$emit('inc-qt', this.itemUsers);
        },
        dec(){
            this.$emit('dec-qt', this.itemUsers);
        }
    },
    template: `
    <div class="pod_unit">

    <div class="img_in_unit">

        <img :src="itemUsers.image">

    </div>

    <h3>{{ucFirst(itemUsers.category)}}</h3>

    <p>{{ucFirst(itemUsers.title.toLowerCase().substring(0, 20)) + (itemUsers.category.lenght > 20 ? '' : '...')}}</p>
    <p>{{itemUsers.price}} $</p>
    <div class="wrap">
        <button class="button" @click="inc">+</button>
        <p>{{itemUsers.qt}}qt</p>
        <button class="button" @click="dec" :disabled="itemUsers.qt == 0">-</button>
    </div>

</div>
    `
}

export {cardComponent};