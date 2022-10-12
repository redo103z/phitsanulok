<template>
	<div>
		<div class="nv-navbar">
			<ul class="nav">
				<li><router-link :to="{ name: 'phitsanuloks' }">สถานที่ท่องเที่ยวพิษณุโลก</router-link></li>
				<li><router-link :to="{ name: 'users' }">ผู้ใช้งาน</router-link></li>
				<!-- <li><router-link :to="{ name: 'comments' }">ความคิดเห็น</router-link></li> -->
				<li><router-link :to="{ name: 'login' }">ลงชื่อเข้าใช้</router-link></li>
			</ul>
			<div class="clearfix" />
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.nv-navbar {
	background-color: rgb(137, 219, 178);
	width: 100%;
	padding: 10px 0px 10px 0px;
}
.nv-navbar .nav {
	list-style: none;
	margin: 0;
	padding: 0;
	float: left;
}
.nv-navbar .nav li {
	float: left;
}
.nv-navbar .nav li a {
	padding: 10px;
	text-decoration: none;
	color: grey;
	font-weight: bold;
}
.nv-navbar .nav li a:hover {
	padding: 10px;
	text-decoration: none;
	color: darkslategrey;
}
.nv-navbar .nav li a.router-link-active {
	background-color: gold;
	color: darkslategrey;
}
.clearfix {
	clear: left;
}
</style>
