<template>
  <div><h1>Secret dragon</h1></div>
  <button v-show="!dragonImage" @click="this.dragonImage = true">
    жмякни если ты воин дракона
  </button>
  <button class="btn" v-show="dragonImage" @click="this.dragonImage = false">
    закрыть, а можно сказать "дракон уходи"
  </button>
  <div v-show="dragonImage">
    <img src="../assets/pngwing.com.png" alt="черный дракон" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dragonImage: false,
    };
  },
  methods: {
    testFunction() {
      window.RobotApi.dialogService.onUserReplic((text, isFinish) => {
        if (text === "черный дракон") {
          this.dragonImage = true;
        }
        if (text === "дракон уходи") {
          this.dragonImage = false;
        }
      });
    },
  },
};
</script>

<style scoped>
.btn {
  margin-bottom: 5px;
}
</style>
