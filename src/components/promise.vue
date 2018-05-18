<template>
  <div class="hello">
    查看控制台
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    setTimeout ( () => {
      console.log(1)
    },0)

    new Promise ( (resolve) => {
      console.log(2)
      for (var i = 0; i < 10000; i++) {
        i == 9999 && resolve()
      }
      console.log(3)
    }).then(() => {
      console.log(4)
    })
    console.log(5)

    setTimeout ( () => {
      console.log(6)
    },0)

    console.log(7)

    const promise = new Promise((resolve, reject) => {
      resolve('success1')
      reject('error')
      resolve('success2')
    })

    promise.then((res) => {
      console.log('then: ', res)
    })
    .catch((err) => {
      console.log('catch: ', err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
