<script lang="ts" setup>
const formOne = ref<HTMLFormElement | null>(null)
const {initValidator, validate, validationErrors} = useUseValidateur()

const formSchema = reactive({
    'userName': {
        value: '',
        validations: ['required', 'minLength:3,4', 'alphaNumeric']
    },
    'email': {
        value: '',
        validations: ['required', 'email']
    },
    'pass': {
        value: '',
        validations: ['required']
    }
})


const onSubmit = () => {
    validate()
}

onMounted(() => {
    initValidator(formOne, formSchema)
})

</script>

<template>
  <div>
    <form @submit.prevent="onSubmit" ref="formOne">
      <label for="userName">User Name</label>
      <input type="text" name="userName" id="userName" v-model="formSchema.userName.value">
      <span v-if="validationErrors.userName">{{ validationErrors.userName }}</span>
      <br>
      <label for="email">Email</label>
      <input type="text" name="email" id="email" v-model="formSchema.email.value">
      <span v-if="validationErrors.email">{{ validationErrors.email }}</span>
      <br>
      <label for="pass">Password</label>
      <input type="password" name="pass" id="pass" v-model="formSchema.pass.value">
      <span v-if="validationErrors.pass">{{ validationErrors.pass }}</span>
      <br>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<style>

</style>