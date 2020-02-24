<template>
  <div>
    <span class="number">{{ count }}</span>
    <button @click="increment()">Increment count</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count++
    },
  },
}
</script>
