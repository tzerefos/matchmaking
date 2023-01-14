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
	name: 'WeddingPlanners',
	data:()=> ({
	search: '',
	businesses: [
		{id: '7e4b60b9-7829-4dc1-831e-2a3fdcff3971', name: 'Ophelia', description: 'lorem ipsum', image: "wedding-1.jpg"},
		{id: 'fff779b9-d2ae-40c3-b426-dca7f4d0e554', name: 'Maria', description: 'lorem ipsum', image: 'wedding-1.jpg'},
		{id: 'ebff30ba-a116-4038-958e-753a7bdb84d6 ', name: 'Alkmini', description: 'lorem ipsum', image: 'wedding-3.jpg'},
		{id: '7e4b60b9-7829-4dc1-831e-2a3fdcff3971', name: 'Maria', description: 'lorem ipsum', image: 'wedding-4.jpg'},
		{id: '7e4b60b9-7829-4dc1-831e-2a3fdcff3971', name: 'Ophelia', description: 'lorem ipsum', image: 'wedding-5.jpg'},
		{id: 'ebff30ba-a116-4038-958e-753a7bdb84d6 ', name: 'Ophelia', description: 'lorem ipsum', image: 'wedding-3.jpg'},
		{id: '7e4b60b9-7829-4dc1-831e-2a3fdcff3971', name: 'Maria', description: 'lorem ipsum', image: 'wedding-4.jpg'},
		{id: '7e4b60b9-7829-4dc1-831e-2a3fdcff3971', name: 'Ophelia', description: 'lorem ipsum', image: "wedding-1.jpg"},
		{id: '7e4b60b9-7829-4dc1-831e-2a3fdcff3971', name: 'Ophelia', description: 'lorem ipsum', image: 'wedding-5.jpg'},
		{id: 'fff779b9-d2ae-40c3-b426-dca7f4d0e554', name: 'Maria', description: 'lorem ipsum', image: 'wedding-1.jpg'},
		{id: '7e4b60b9-7829-4dc1-831e-2a3fdcff3971', name: 'Maria', description: 'lorem ipsum', image: 'wedding-4.jpg'},
		{id: '7e4b60b9-7829-4dc1-831e-2a3fdcff3971', name: 'Maria', description: 'lorem ipsum', image: 'wedding-3.jpg'}	
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

<style>
	.background{
		background-color: #F1F1F1;
		padding: 1.5em;
		margin: 2em;
	}
	.grid-container{
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		padding: 2em 2em 2em 2em;
/*		margin: 0em 1.5em 1.5em 1.5em;*/
		gap: 2.5em 2.5em;
		overflow: scroll;
		max-height: 1100px;
	}
	.business-box{
		display: grid-inline;
		width: auto;
		padding: 1em;
		background-color: white;
		max-width: 100%;
		max-height: 100%;
	}
	.business-box:hover{
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		transition: box-shadow 0.2s ease-in-out;
		transform: scale(1.1, 1.1);
		cursor: pointer;
	}
	.business-box:hover::after {
		opacity: 1;
	}
	.business-image{
		max-width:100%;
		max-height:100%;
	}
	.rounded-borders{
		border-radius: 10px;
	}
</style>