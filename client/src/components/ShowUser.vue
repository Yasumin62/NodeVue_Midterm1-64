<template>
  <div>
    <h1>Show User</h1>
    <p>name: {{ user.name }}</p>
    <p>system: {{ user.system }} </p>
    <p>capacity: {{ user.capacity }}</p>
    <p>size: {{ user.size }}</p>
  </div>
</template>
<script>
import UserService from "@/services/UsersService";
export default {
  data() {
    return {
      user: null,
    };
  },
  async created() {
    try {
      let userId = this.$route.params.userId;
      this.user = (await UserService.show(userId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
</style>