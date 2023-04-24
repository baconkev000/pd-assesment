<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
const user = route.query;

const formatDOB = () => {
  const date = new Date(user.dob);
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  const monthName = monthNames[date.getMonth()];
  return `${monthName} ${date.getDate()}, ${date.getFullYear()}`
}

</script>

<template>
  <div class="wrapper">
    <router-link to="/" class="breadcrumb">&lt; Member List</router-link><br />
    <div class="profile">
      <img :src="user.img" />
    <div class="detail">
        <div><strong>Name:</strong> {{`${user.firstName} ${user.lastName}`}}</div>
        <div><strong>Address:</strong> {{`${user.streetNumber} ${user.streetName}`}}</div>
        <div><strong>City:</strong> {{user.city}}</div>
        <div><strong>State:</strong> {{user.state}}</div>
        <div><strong>Postcode:</strong> {{user.postcode}}</div>
        <div><strong>Email:</strong> {{user.email}}</div>
        <div><strong>DOB:</strong> {{formatDOB()}}</div>
        <div><strong>Phone:</strong> {{user.phone}}</div>
      </div>
  </div>
  </div>
</template>

<style scoped>
    .wrapper{
      width:100vw;
      height: 100vh;
      padding-inline: 10vw;
      padding-top: 5vh;
    }
    
    .profile{
      display: grid;
      grid-template-columns: 25% 50%;
    }
    strong {
      font-weight: bold;
    }
    .breadcrumb{
      padding-bottom:10px;
    }
</style>