<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useUserStore } from '@/stores/randomUsers';

const filteredUsers = ref([]);
const inputSearch = ref("");
// holds state for initial list of users retreived
const userStore = useUserStore();

const getFilteredUsers = () => {
  // reset filtered list to intial list of users
  filteredUsers.value = userStore.randomUsers;
  let value = inputSearch.value;

  // creates arry of all users where first name or last name includes the search string 
  filteredUsers.value = filteredUsers.value.filter((user: any) => user.name.first.toLowerCase().substr(0,value.length) === value || user.name.last.toLowerCase().substr(0,value.length) === value);
}

onBeforeMount(async () => {
  // get multiple random users
  await userStore.getMultipleRandomUsers(50);
  filteredUsers.value = userStore.randomUsers;
})
</script>

<template>
  <div class="wrapper">
    <div>
      <input class="search" placeholder="Search for member..." 
      v-model="inputSearch"
      @keyup="
              getFilteredUsers()
            "/>
    </div>
    <div class="th-row">
      <div></div>
        <div class="col th">
          Last Name
        </div>
        <div class="col th">
          First Name
        </div>
        <div class="col th">
          Age
        </div>
      </div>
      <div class="row" :class="[index % 2 === 0 ? 'col-dark' : 'col-light']" v-for="(user, index) in filteredUsers" :key="user">
      <router-link class="row-link" :to="{name: 'profile', query: {
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        img: user.picture.large,
        streetName: user.location.street.name,
        streetNumber: user.location.street.number,
        state: user.location.state,
        city: user.location.city,
        postcode: user.location.postcode,
        dob: user.dob.date,
        phone: user.phone,
      }}">
        <div class="col center">
            <img class="thumbnail" :src="user.picture.thumbnail" />
          </div>
          <div class="col">
            {{ user.name.last }}
          </div>
          <div class="col">
            {{ user.name.first }}
          </div>
          <div class="col">
            {{ user.dob.age }}
          </div>
        </router-link>
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
    .row{
      padding:10px;
    }
    .th-row{
      display: grid;
      grid-template-columns: 10% 25% 25% 25%;
      cursor:pointer;
      padding:10px;
    }
    .row:hover{
      background-color: #e1e6ed;
    }
    .row-link{
      display: grid;
      grid-template-columns: 10% 25% 25% 25%;
      cursor:pointer;
      text-decoration: none;
      color:black;
    }
    .col{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
    }
    .th{
      font-weight: bold;
    }
    .thumbnail{
      border-radius: 50%;
    }
    .col-dark{
      background-color: #f2f6fc;
    }
    .search{
      padding: 10px;
      width: 30vw;
    }
</style>