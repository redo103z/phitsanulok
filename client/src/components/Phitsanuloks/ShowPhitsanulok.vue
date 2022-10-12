<template>
	<div class="center">
		<h1>สถานที่ท่องเที่ยวพิษณุโลก</h1>
		<img :src="BASE_URL + phitsanulok.thumbnail" alt="thumbnail" width="500px">
		<!-- <p>id: {{ phitsanulok.id }}</p> -->
		<p>สถานที่ : {{ phitsanulok.title }}</p>
		<!-- <p>content: {{ phitsanulok.content }}</p> -->
		<p>ประวัติ : {{ phitsanulok.category }}</p>
		<!-- <p>status: {{ phitsanulok.status }}</p> -->
		<p>
			<button  v-on:click="navigateTo('/phitsanulok/edit/' + phitsanulok.id)">
				แก้ไข
			</button>
			<button v-on:click="navigateTo('/phitsanuloks')">กลับ</button>
		</p>
	</div>
</template>
<script>
import PhitsanuloksService from "@/services/PhitsanuloksService";
export default {
	data() {
		return {
			phitsanulok: null,
			BASE_URL: "http://localhost:8081/assets/uploads/"
		};
	},
	async created() {
		try {
			let phitsanulokId = this.$route.params.phitsanulokId;
			this.phitsanulok = (await PhitsanuloksService.show(phitsanulokId)).data;
		} catch (error) {
			console.log(error);
		}
	},
	methods: {
		navigateTo(route) {
			this.$router.push(route);
		},
	},
};
</script>
<style scoped>
.center {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}
</style>
