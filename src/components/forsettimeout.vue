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
			for (var i = 0; i < 5; i++) {
				setTimeout( () => {
					console.log(i)
				}, 1000 * i)
			}
		},
		test2 () {
			// 二
			for (var i = 0; i < 5; i++) {
				((i) => {
					setTimeout(() => {
						console.log(i)
					}, i * 1000)
				})(i)
			}
		},
		test3 () {
			// 三
			for (var i = 0; i < 5; i++) {
				(() => {
					setTimeout(() => {
						console.log(i)
					}, i * 1000)
				})(i)
			}
		},
		test4 () {
			// 四
			for (var i = 0; i < 5; i++) {
					setTimeout(((i) => {
						console.log(i)
					})(i), i * 1000)
			}
			
		},
		test5 () {
			//五
			for (var i = 0; i <= 5; i++) {}
			console.log(i)
		},
		test6 () {
			var results = this.count();
			var f1 = results[0];
			var f2 = results[1];
			var f3 = results[2];
			console.log(f1())
			console.log(f2())
			console.log(f3())
		},
		count() {
			var arr = [];
			for (let i = 1; i <= 3; i++) {
				arr.push(function () {
					return i * i;
				});
			}
			return arr;
		}	
	}
}
</script>
<style></style>