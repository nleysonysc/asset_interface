<script setup>
  import { ref } from 'vue'

  let textVal = ref('')

  function handleClick(e){
    console.log(e)
  }
</script>

<template>
  Home page
  <button @click="google.script.run.withSuccessHandler(handleClick).textSearch('edom')">test</button>
  <span>{{textVal}}</span>
</template>
