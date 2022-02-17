<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/ninja.png" alt="" />
      <h1>
        <router-link :to="{ name: 'Home' }">MSC LIST</router-link>
      </h1>
      <div class="links">
        <router-link v-if="user" :to="{ name: 'Home' }">Home</router-link>
        <router-link v-if="user" :to="{ name: 'UserPlaylists' }"
          >My Playlist</router-link
        >
        <router-link v-if="user" :to="{ name: 'CreatePlaylist' }"
          >Create Playlist</router-link
        >
        <span v-if="user">Hi there, {{ user.displayName }} </span>
        <button v-if="user" @click="handleClick">Logout</button>
        <router-link v-if="!user" class="btn" :to="{ name: 'Signup' }"
          >Signup</router-link
        >
        <router-link v-if="!user" class="btn" :to="{ name: 'Login' }"
          >Login</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { logout, error } = useLogout();
    const router = useRouter();
    const { user } = getUser();

    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log("User Logged Out");
      }
      router.push({ name: "Login" });
    };
    return { handleClick, user };
  },
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: #fff;
}

nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

nav h1 {
  margin-left: 20px;
}

nav .links {
  margin-left: auto;
}

nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}

img {
  max-height: 60px;
}

span {
  font-size: 14px;
  display: inline-block;
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid #eee;
}
</style>