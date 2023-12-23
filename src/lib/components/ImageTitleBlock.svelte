<script>
    import {base} from "$app/paths";

    export let title = "Title";
    export let subTitle = "Subtitle";

</script>
<div class="container">
    <div class="card ">
        <div class="image">
            <img src="{base}/PARADE2.jpg" alt=""/>
        </div>
        <div class="sticker sticker-left">
            <img src="{base}/dancing%20(1).png" alt=""/>
        </div>
        <div class="sticker sticker-right">
            <img src="{base}/breakdance%20(1).png" alt=""/>
        </div>
        <div class="title-block">
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
        </div>
    </div>
</div>

<style>
    .card {
        height: 700px;
        position: relative;
    }

    .image {
        position: absolute;
        left: 0;
        top: 0;
    }
    .image img {
        max-height: 600px;
    }

    .sticker img {
        max-height: 300px;
    }

    .sticker-right {
        position: absolute;
        right: 0;
        top: 0;
    }

    .sticker-left {
        position: absolute;
        left: 0;
        bottom: 0;
    }

    .title-block {
        padding: 15px;
        background: rgba(234, 222, 133, 0.9);
        position: absolute;
        width: 1000px;
        bottom: 0;
        right: 0;
    }

</style>