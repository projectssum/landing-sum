<script>
    import {base} from "$app/paths";

    export let title = "Title";
    export let subTitle = "Subtitle";
    export let image = "";
    export let sticker1 = "dancing.png";
    export let sticker2 = "breakdance.png";

</script>

<div class="card ">
    <div class="image">
        <img src="{base}/{image}" alt=""/>
    </div>
    <div class="sticker sticker-left">
        <img src="{base}/{sticker1}" alt=""/>
    </div>
    <div class="sticker sticker-right">
        <img src="{base}/{sticker2}" alt=""/>
    </div>
    <div class="title-block">
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
    </div>
</div>

<style>
    .card {
        height: 600px;
        position: relative;
    }

    .image {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }

    .image img {
        width: 70%;
        height: 70%;
        object-fit: cover;
        @media (max-width: 1200px) {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
        @media (max-width: 992px) {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
        @media (max-width: 767px ) {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    .sticker img {
        max-height: 300px;
        @media (max-width: 992px) {
            visibility: hidden;
        }
        @media (max-width: 767px ) {
            visibility: hidden;
        }
    }

    .sticker-right {
        position: absolute;
        right: 0;
        top: 0;
        max-width: 100%;
        max-height: 100%;
    }

    .sticker-left {
        position: absolute;
        left: 0;
        bottom: 0;
        max-width: 100%;
        max-height: 100%;
    }

    .title-block {
        padding: 15px;
        background: rgba(234, 222, 133, 0.9);
        position: absolute;
        width: 50%;
        bottom: 0;
        right: 0;
        @media (max-width: 992px) {
            width: 100%;
        }
        @media (max-width: 767px ) {
            width: 100%;
        }
    }

</style>