<script>

import {base} from "$app/paths";
</script>

<div class="card _container">
    <div class="grid-image">
        <div class="image">
            <img src="{base}/MRS1.jpg" alt=""/>
        </div>
        <div class="image">
            <img src="{base}/MRS3.jpg" alt=""/>
        </div>
        <div class="image">
            <img src="{base}/MRS4.jpg" alt=""/>
        </div>

        <div class="image">
            <img src="{base}/MRS5.jpg" alt=""/>
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