<template>
	<div class="center">
		<div class="container">
			<h2>Get all Phitsanuloks</h2>
			<p><button v-on:click="logout">ออกระบบ</button></p>
			<h4>สถานที่ท่องเที่ยวพิษณุโลก มี {{ phitsanuloks.length }} แห่ง</h4>
			<p><button v-on:click="navigateTo('/phitsanulok/create')">เพิ่มสถานที่</button></p>
			<div v-for="phitsanulok in phitsanuloks" v-bind:key="phitsanulok.id">
				<!-- <p>id: {{ phitsanulok.id }}</p> -->
				<img :src="BASE_URL + phitsanulok.thumbnail" alt="thumbnail" width="500px"></img>
				<p>ชื่อสถานที่ : {{ phitsanulok.title }}</p>
				<!-- <p>content: {{ phitsanulok.content }}</p> -->
				<p>รายละเอียดสถานที่ท่องเที่ยว : {{ phitsanulok.category }}</p>
				<!-- <p>status: {{ phitsanulok.status }}</p> -->
				<p class="btn">
					<button v-on:click="navigateTo('/phitsanulok/' + phitsanulok.id)">ดูรายละเอียด</button>
					<button v-on:click="navigateTo('/phitsanulok/edit/' + phitsanulok.id)">
						แก้ไขรายละเอียด
					</button>
					<button v-on:click="deletePhitsanulok(phitsanulok)">ลบสถานที่</button>
				</p>
				<hr />
			</div>
		</div>
	</div>
</template>
<script>
import PhitsanuloksService from "@/services/PhitsanuloksService";
export default {
	data() {
		return {
			phitsanuloks: [],
			BASE_URL: "http://localhost:8081/assets/uploads/"
		};
	},
	async created() {
		this.phitsanuloks = (await PhitsanuloksService.index()).data;
	},
	methods: {
		logout() {
			this.$store.dispatch("setToken", null);
			this.$store.dispatch("setBlog", null);
			this.$router.push({
				name: "login",
			});
		},
		navigateTo(route) {
			this.$router.push(route);
		},
		async deletePhitsanulok(phitsanulok) {
			let result = confirm("Want to delete?");
			if (result) {
				try {
					await PhitsanuloksService.delete(phitsanulok);
					this.refreshData();
					location.reload();
				} catch (err) {
					console.log(err);
				}
			}
		},
		async refreshData() {
			this.phitsanuloks = (await PhitsanuloksService.index()).data;
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
