<template>
    <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark px-2 px-sm-3 px-xxl-5"
    >
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <div class="logo">logo</div>
            </a>
            <button
                class="navbar-toggler order-0 order-sm-2 ms-0 ms-md-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="collapse navbar-collapse order-3 order-lg-1"
                id="navbarNav"
            >
                <ul class="navbar-nav">
                    <li><a href="#" class="nav-link px-2">Features</a></li>
                    <li><a href="#" class="nav-link px-2">Pricing</a></li>
                    <li><a href="#" class="nav-link px-2">Industries</a></li>
                </ul>
            </div>
            <div
                class="d-flex flex-grow-1 order-1 order-lg-2 justify-content-center justify-content-md-end"
            >
                    <nuxt-link class="btn btn-info me-2" to="/login">
                        Login
                    </nuxt-link>
                    <button type="button" class="btn btn-info">
                        Request a meeting
                    </button>
            </div>
        </div>
    </nav>
    <div>
        <slot></slot>
    </div>
    <div class="container-fluid">
        <footer class="py-3 my-4">
            <ul
                class="nav justify-content-center border-bottom border-top py-3 mb-3"
            >
                <li class="nav-item">
                    <a href="#" class="nav-link px-2 text-body-secondary">
                        Home
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link px-2 text-body-secondary">
                        Features
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link px-2 text-body-secondary">
                        Pricing
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link px-2 text-body-secondary">
                        FAQs
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link px-2 text-body-secondary">
                        About
                    </a>
                </li>
            </ul>
            <p class="text-center text-body-secondary">&copy; 2023 Arrow DAO</p>
        </footer>
    </div>
</template>

