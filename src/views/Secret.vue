<template>
  <div class="secret">
    <SecretPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SecretPage from "@/components/SecretPage.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Secret",
  components: {
    SecretPage,
  },
});
</script>
