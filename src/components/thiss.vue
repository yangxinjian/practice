<template>
	<div>
		<button @click="test1">测试一</button>
		<button @click="test2">测试二</button>
		<button @click="test3">测试三</button>
		<button @click="test4">测试四</button>
		<button @click="test5">测试五</button>
		<button @click="test6">测试六</button>
	</div>
</template>

<script>
export default {
	created () {
		
	},
	methods: {
		test1 () {
			function getName() {
				this.name = 1
				return {}
			}
			var a = new getName()
			console.log(a)

			function getName () {
				this.name = 1
				return 2
			}
			var d = new getName()
			console.log(d.name)
		},
		test2 () {
		},
		test3 () {
		},
		test4 () {
			
		},
		test5 () {
		},
		test6 () {
		}	
	}
}
</script>
<style></style>