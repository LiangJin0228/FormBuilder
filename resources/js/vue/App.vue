<template>
    <v-app>
        <v-app-bar>
            <RouterLink to="/"><v-btn>Home</v-btn></RouterLink>
        </v-app-bar>

        <v-main>
            <RouterView />
        </v-main>

        <v-footer class="justify-center">
            <span class="text-subtitle-1">Laravel v{{ laravel_version }} (PHP v{{ php_version }})</span>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            laravel_version: laravel_version,
            php_version: php_version,
            user: null,
        };
    },
};
</script>
