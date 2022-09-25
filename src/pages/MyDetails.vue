<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Address</th>
          <th>Education</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="detail in details" :key="detail.id">
          <td>{{ detail.firstname }}</td>
          <td>{{ detail.lastname }}</td>
          <td>{{ detail.address }}</td>
          <td>{{ detail.education }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: "MyDetails",
  setup() {
    const details = ref([]);
    onMounted(async () => {
      const res = await fetch("http://localhost:3000/details");
      console.log(res);
      details.value = await res.json();
    });
    return { details };
  },
};
</script>

<style></style>
