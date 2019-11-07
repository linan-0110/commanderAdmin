<template>
    <div id="app">
        <router-view />
        <footer class="footer_bar"></footer>
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
#app {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
}
.footer_bar {
    width: 100px;
    height: 4px;
    background-color: rgb(0, 0, 0);
    border-radius: 2px;
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
}
</style>
