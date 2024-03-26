<template>
  <div class="tree-detail-footer">
    <div class="menu">
      <div class="menu__main-icon-wrap focused-icon">
        <cp-icon-circle-button>
          <icon-plus />
        </cp-icon-circle-button>
      </div>
      <div class="menu__sub-icon-wrap">
        <cp-icon-circle-button bg-color="var(--cp-color-white)" hover-bg-color="var(--cp-color-gray-100)">
          <icon-add-post />
        </cp-icon-circle-button>
        <cp-icon-circle-button bg-color="var(--cp-color-white)" hover-bg-color="var(--cp-color-gray-100)">
          <icon-invite />
        </cp-icon-circle-button>
        <cp-icon-circle-button bg-color="var(--cp-color-white)" hover-bg-color="var(--cp-color-gray-100)">
          <icon-share />
        </cp-icon-circle-button>
      </div>
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
.tree-detail-footer {
  height: 20%;
  background-color: #cbe8bf;

  display: flex;
  justify-content: center;
  align-items: center;  
  
}
.menu{
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 0.75rem;
  &__main-icon-wrap{
    z-index: 1;
    position: relative;
    :focus {
      transform: rotate(45deg);
    }
    :focus ~ .menu__sub-icon-wrap {
      // position: relative;
    }
    :active {
      transform: scale(0.95);
    }
  }
  &__sub-icon-wrap{
    z-index: 0;
  }
}

</style>
