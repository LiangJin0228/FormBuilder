<template>
    <v-card :id="node.id" v-if="!node.isSkipped" :hover="width >= 1440" variant="text" class="cursor-default">
        <v-card-title class="text-wrap pb-0" :class="{ 'text-subtitle-1': node.parent_type !== 'App\\Models\\Form' }">
            {{ node.title }}
        </v-card-title>
        <v-card-text class="pt-0">
            <v-img v-if="node.image" max-height="500" :src="node.image" class="ma-5"></v-img>
            <v-container fluid v-if="node.description">
                {{ node.description }}
            </v-container>

            <!-- <v-container fluid class="sub-node pa-0">
                <Node class="fixed-title" :class="`order-${n.order_number}`" ref="node" :node="n" />
            </v-container> -->
        </v-card-text>
    </v-card>
</template>

<script setup>
import Node from "./Node.vue";
import { useDisplay } from "vuetify";

const { width } = useDisplay();
</script>

<script>
export default {
    props: {
        node: {
            type: Object,
            required: true,
            default: () => ({
                configs: {},
                rules: {},
                options: [],
            }),
        },
    },
};
</script>

<style scoped>
:deep(.v-expansion-panel-text__wrapper) {
    padding: 0;
}
</style>
