<template>
  <tree-view
    :initial-model="tvModel"
    :model-defaults="modelDefaults"
  ></tree-view>
  <font-awesome-icon icon="fa-solid fa-folder" />
</template>
<script setup>
import { ref } from "vue";
import { TreeView } from "@grapoza/vue-tree";
import "../../node_modules/@grapoza/vue-tree/dist/style.css";

const tvModel = ref([
  {
    id: "customization-class-rootNode",
    label: "Root Node",
    children: [
      {
        id: "customization-class-subNode",
        label: "Subnode",
      },
    ],
  },
]);

const modelDefaults = ref({
  customizations: {
    classes: {
      treeViewNodeSelfExpander: "action-button",
      treeViewNodeSelfExpandedIndicator: "directory",
      treeViewNodeSelfAction: "LOL",
      treeViewNodeSelfAddChildIcon: "LOL",
      treeViewNodeSelfDeleteIcon: "LOL",
    },
  },
});
</script>
