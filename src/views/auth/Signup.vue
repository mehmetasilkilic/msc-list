<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <input
      type="text"
      placeholder="Display name"
      v-model="displayName"
      required
    />
    <input type="email" placeholder="E-mail" v-model="email" required />
    <input type="password" placeholder="Password" v-model="password" required />
    <div class="error" v-if="error">{{ error }}</div>
    <button v-if="!isPending">Sign up</button>
    <button v-if="isPending" disabled>Loading</button>
  </form>
</template>

<script>
import useSignup from "@/composables/useSignup";
import { ref } from "vue";

export default {
  setup() {
    const { error, signup, isPending } = useSignup();

    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      const res = await signup(email.value, password.value, displayName.value);

      if (!error.value) {
        console.log("user signed up");
      }
    };
    return { email, password, handleSubmit, error, isPending, displayName };
  },
};
</script>

<style>
</style>