<template>
  <div class="tree-detail-footer">
    <div class="menu">
      <cp-icon-circle-button class="menu__open open-focus">
        <icon-plus />
      </cp-icon-circle-button>
      <a class="menu__item">
        <cp-icon-circle-button
          bg-color="var(--cp-color-white)"
          hover-bg-color="var(--cp-color-gray-100)"
        >
          <icon-add-post />
        </cp-icon-circle-button>
      </a>
      <a class="menu__item">
        <cp-icon-circle-button
          bg-color="var(--cp-color-white)"
          hover-bg-color="var(--cp-color-gray-100)"
        >
          <icon-invite />
        </cp-icon-circle-button>
      </a>
      <a class="menu__item">
        <cp-icon-circle-button
          bg-color="var(--cp-color-white)"
          hover-bg-color="var(--cp-color-gray-100)"
        >
          <icon-share />
        </cp-icon-circle-button>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeDetailFooter",
});
</script>

<script setup lang="ts">
import CpIconCircleButton from "@/components/commons/CpIconCircleButton.vue";
import IconPlus from "@/components/commons/images/IconPlus.vue";
import IconAddPost from "@/components/commons/images/IconAddPost.vue";
import IconInvite from "@/components/commons/images/IconInvite.vue";
import IconShare from "@/components/commons/images/IconShare.vue";

import { defineProps } from "vue";
defineProps<{
  id: string;
}>();
</script>

<style scoped lang="scss">
input[type="checkbox"] {
  display: none;
}
.tree-detail-footer {
  height: 20%;
  background-color: #cbe8bf;

  display: flex;
  justify-content: center;
  align-items: center;
}
.menu {
  display: flex;
  position: absolute;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  gap: 0.75rem;
  &__open,
  &__item {
    position: absolute;
    margin: 0;
    list-style: none;
  }
  &__open {
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -webkit-transition-duration: 400ms;
    transition-duration: 400ms;
    z-index: 2;
    :hover {
      transform: scale(0.95);
    }
  }
  &__item {
    -webkit-transition-timing-function: cubic-bezier(0.22, 0.68, 0);
    transition-timing-function: cubic-bezier(0.22, 0.68, 0);
    -webkit-transition-duration: 300ms;
    transition-duration: 300ms;
  }
}
.open-focus:focus {
  transform: rotate(45deg);
}
.open-focus:focus {
  ~ .menu__item:nth-child(2) {
    transition-duration: 180ms;
    -webkit-transition-duration: 180ms;
    transform: translate(calc(-100% - 0.75rem), calc(-100% - 0.75rem));
  }
  ~ .menu__item:nth-child(3) {
    transition-duration: 330ms;
    -webkit-transition-duration: 280ms;
    transform: translate(0, calc(-100% - 0.75rem));
  }
  ~ .menu__item:nth-child(4) {
    transition-duration: 480ms;
    -webkit-transition-duration: 380ms;
    transform: translate(calc(100% + 0.75rem), calc(-100% - 0.75rem));
  }
}
</style>
