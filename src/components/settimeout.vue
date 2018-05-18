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
			//一
			var flag = true
			setTimeout ( () => {
				flag = false
			}, 1000)
			while(flag) {}
			alert('1')
		},
		test2 () {
			// 二
			setTimeout (function test1 () {
				var a = 1
				console.log(`a:${a}`)
			},0)

			setTimeout ((function test2 () {
				var b = 1
				console.log(`b:${b}`)
			}).toString(), 0)
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