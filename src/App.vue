<template>
  <div>
    <cp-button type="solid" text="시작하기" @click="clickSolidBtn"></cp-button>
    <cp-button
      type="outlined"
      text="계속하기"
      @click="clickOutlinedBtn"
    ></cp-button>
  </div>
</template>

<script setup lang="ts">
import CpButton from "@/components/commons/CpButton.vue";

const clickSolidBtn = () => {
  console.log("clickSolidBtn");
};
const clickOutlinedBtn = () => {
  console.log("clickOutlinedBtn");
};
</script>

<style scoped lang="scss"></style>
