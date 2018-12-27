<template>
    <nav class="navbar" role="navigation" aria-label="main navigation" style="background: transparent">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
            <img src="https://pngimage.net/wp-content/uploads/2018/06/s-logo-png-1.png" width="30" height="50">
            </router-link>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                    <router-link to="/home" class="navbar-item">
                        Home
                    </router-link>
            </div>
        </div>
    </nav>
</template>