<template>
  <header>
    <ul>
      <li>
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'profile' }">Profile</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'login' }">Login</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'logout' }">Logout</RouterLink>
      </li>
    </ul>
  </header>
</template>

<script setup>

</script>

<style scoped>
  ul {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    font-size: 20px;
    color: #333;
    font-weight: 500;
  }
  .router-link-active {
    color: #0070f3;
    border-bottom: 2px dotted #0070f3;
  }
</style>