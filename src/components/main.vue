<template>
  <div class="hello">
  	<router-link to="/hello">promise测试题</router-link>
  	<router-link to="/forsettimeout">循环闭包+延时测试题</router-link>
  	<router-link to="/settimeout">延时测试题</router-link>
  	<router-link to="/this">this测试题</router-link>
  	<button @click="b">数组去重</button>
  	<button @click="zhengze">正则表达式</button>
  	<!-- <button @click="b">数组去重</button> -->
  </div>
</template>
<script>
export default {
	created () {
		//this.b()
	},
	methods: {
		uni (a, b) {
			return Array.from(new Set([...a , ...b]))
		},	
		jiao (a, b) {
			return Array.from(new Set([...a].filter(x => new Set(b).has(x))))
		},
		cha (a, b) {
			return [...a.filter(x => !new Set(b).has(x)), ...b.filter(x => !new Set(a).has(x))]
		},
		b () {
			var a = [1,'33', 3, 1, '2', '33']	
			var b = [1,'35', 3, 1, '21', '33']	
			//const uni = arr => [...new Set(arr)]
			console.log(this.uni(a, b))
			console.log(this.jiao(a, b))
			console.log(this.cha(a, b))
		},
		zhengze () {
			var test = /^[0-9]*$/
			console.log(`验证数字${test.test(10)}`)
			var test1 = /^\d{10}$/
			console.log(`验证n位数字${test1.test(1111111)}`)
			var test2 = /^\d{2,}$/
			console.log(`验证至少n位数字${test2.test('22')}`)
			var test3 = /^\d{2,5}$/
			console.log(`验证m-n位数字${test3.test(226)}`)
			var test4 = /^(0|[1-9][0-9]*)$/
			console.log(`验证以0和非0开头的数字${test4.test('a26')}`)
			var test5 = /^[\u4e00-\u9fa5]$/
			console.log(`验证汉字${test5.test('之')}`)
		}
	}
}
</script>
<style></style>