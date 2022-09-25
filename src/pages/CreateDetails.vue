<template>
  <div class="container">
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="firstname">FirstName</label>
        <input
          type="text"
          class="form-control"
          id="firstname"
          name="firstname"
          v-model="firstname"
          placeholder="Enter your firstname"
        />
      </div>
      <div class="form-group">
        <label for="lastname">LastName</label>
        <input
          type="text"
          class="form-control"
          id="lastname"
          name="lastname"
          v-model="lastname"
          placeholder="Enter your lastname"
        />
      </div>
      <div class="form-group">
        <label for="addrss">Address</label>
        <input
          type="text"
          class="form-control"
          id="address"
          name="address"
          v-model="address"
          placeholder="Enter your address"
        />
      </div>
      <div class="form-group">
        <label for="education">Education</label>
        <select class="select" v-model="education">
          <option value="btech">Btech</option>
          <option value="mba">MBA</option>
          <option value="bsc">B.SC</option>
          <option value="mcom">M.com</option>
          <option value="ma">MA</option>
        </select>
      </div>
      <!-- <button type="submit" class="btn btn-primary">Add details</button> -->
      <router-link :to="{ name: 'MyDetails'}" class="btn btn-primary">Add Detailssssss</router-link>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  data() {
    return {};
  },
  setup() {
    const firstname = ref("");
    const lastname = ref("");
    const address = ref("");
    const education = ref("");
        const router = useRouter();

    const submit = async () => {
      console.log("hi"),
        await fetch("http://localhost:3000/details", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            firstname: firstname.value,
            lastname: lastname.value,
            address: address.value,
            education: education.value,
          }),
        });
        await router.push("/details");
    };

    return { firstname, lastname, address, education, submit };
  },
};
</script>

<style></style>
