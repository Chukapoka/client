<template>
  <div class="tree-detail-content">
    <!-- Content Header 부분 -->
    <div class="info">
      <div class="text">
        <div class="title cp-text-head-2">트리 이름 적는 곳</div>
        <div class="date cp-text-main-4">2023.12.31</div>
      </div>
    </div>
    <div class="body">
      <div ref="treeRef" class="tree-img">
        <tree-type class="tree-icon" />
        <template v-for="(treeItem, idx) in treeItemList" :key="idx">
          <tree-item
            class="tree-item"
            :text="treeItem.title"
            :style="getTreeItemPosition(idx)"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeDetailContent",
});
</script>

<script setup lang="ts">
import TreeType from "@/components/commons/images/TreeType.vue";
import TreeItem from "@/components/tree/TreeItem.vue";
// import TreeFigure from "../TreeFigure.vue";
import { computed, defineProps, ref, watch } from "vue";
defineProps<{
  id: string;
}>();

const treeRef = ref<HTMLDivElement>();

/** Tree Item의 위치 범위는 Tree Height * 0.6까지 */
const treeSize = computed(() => {
  return {
    width: treeRef.value?.offsetWidth ?? 0,
    height: treeRef.value?.offsetHeight ?? 0,
  };
});

const treeItemList = [
  {
    id: "treeItem1",
    title: "재형이에게",
  },
  {
    id: "treeItem2",
    title: "현진이에게",
  },
  {
    id: "treeItem3",
    title: "은우에게",
  },
  {
    id: "treeItem4",
    title: "승연에게",
  },
];

watch(treeSize, () => {
  console.log(treeSize.value);
});

const getTreeItemPosition = (idx: number) => {
  if (idx === 0) {
    return {
      top: "0px",
      left: `${treeSize.value.width / 2 - 30}px`, // 정중앙
    };
  } else {
    return {
      top: `${60 * Math.floor(idx / 4 + 1)}px`,
      left: `${(treeSize.value.width / 4) * ((idx % 4) - 1)}px`,
    };
  }
};
</script>

<style scoped lang="scss">
.tree-detail-content {
  flex: 1;
  display: flex;
  flex-direction: column;

  .info .text {
    padding: 32px 0px 12px 16px;

    .date {
      margin-top: 12px;
      color: #adadad;
    }
  }

  .body {
    flex: 1;
    display: flex;
    justify-content: center;

    .tree-img {
      align-self: flex-end;
      // TODO: 이미지 자체가 bottom이 비어있음
      margin-bottom: -4px;
      position: relative;

      .tree-icon {
        height: 100%;
      }

      .tree-item {
        position: absolute;
      }
    }
  }
}

// TODO: 추후 삭제
.tree-detail-content,
.info,
.body {
  border: solid 1px black;
}
</style>
