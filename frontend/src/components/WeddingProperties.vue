<template>
	<div class="background rounded-borders">
		<input type="text" tabindex="1" class="asset-input inline-flex" v-model="search" placeholder="Search..."/>
		<br>
		<div class=" grid-container ">
			<div class="business-box rounded-borders" v-for="item in filteredBusinesses" :key="item.id">
				<img class="business-image" :src="require('../assets/images/' + item.image)">
				<br>
				<span> 
					{{item.name}}
				</span>
				<p>
					{{item.description}}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'WeddingProperties',
	data:()=> ({
	search: '',
	businesses: [
		{id: '7e4b60b9-7829-4dc1-831e-2a3fdcff3971', name: 'Κτήμα Λάμδα', description: 'lorem ipsum', image: "property-3.jpg"},
		{id: 'fff779b9-d2ae-40c3-b426-dca7f4d0e554', name: 'Κτήμα Δέλτα', description: 'lorem ipsum', image: 'property-4.jpg'},
		{id: 'ebff30ba-a116-4038-958e-753a7bdb84d6 ', name: 'Αίθουσα δεξιώσεων Σίγμα', description: 'lorem ipsum', image: 'property-1.jpg'},
		],
	}),
    computed: {
        filteredBusinesses() {
            return this.businesses.filter(
                business => {
                    return business.name.toLowerCase().includes(this.search.toLowerCase())
                }
            )
        }
    },

}
</script>

