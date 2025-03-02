<script lang="ts" setup>

const onSubmit = () => {
  
}
</script>

<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="userName">User Name</label>
      <input type="text" name="userName" id="userName">
      <label for="pass">Password</label>
      <input type="password" name="pass" id="pass">
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<style>

</style>