<template>
    <div class="container transition-style ">
        <div id="carouselExampleIndicators" class="carousel slide self-round">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="@/assets/images/focus.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="@/assets/images/focus.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="@/assets/images/focus.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <!-- <h1 class="text-center theme-text-light fw-bold">记录思想,启发未来</h1> -->
    </div>
</template>

<script setup lang="ts" name="FocusSection">

</script>

<style scoped></style>