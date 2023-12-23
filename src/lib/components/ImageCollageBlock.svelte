<script>

import {base} from "$app/paths";
</script>

<div class="card container">
    <div class="grid-image">
        <div class="image">
            <img src="{base}MRS1%20(2).jpg" alt=""/>
        </div>
        <div class="image">
            <img src="{base}MRS3%20(2).jpg" alt=""/>
        </div>
        <div class="image">
            <img src="{base}MRS4%20(2).jpg" alt=""/>
        </div>

        <div class="image">
            <img src="{base}MRS5%20(2).jpg" alt=""/>
        </div>
    </div>
</div>

<style>
    .grid-image {
        display: grid;
        grid-template-columns: repeat(4, 400px);
    }
    .image img {
        width: 400px;
        height: 1000px;
        object-fit: cover;
    }
</style>