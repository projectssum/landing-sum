<script>
    import ImageTitleBlock from "$lib/components/ImageTitleBlock.svelte";
    import ImageCollageBlock from "$lib/components/ImageCollageBlock.svelte";
    import ExpandImage from "$lib/components/ExpandImage.svelte";
    import Card from "$lib/components/Card.svelte";
    import {base} from "$app/paths";
</script>

<div class="main-block">
    <div class="main-image">
        <img src="{base}/stars.png" alt="icon"/>
    </div>
    <div class="main-title">
        <h1>SUM</h1>
        <h1>PROJECT</h1>
    </div>
</div>
<Card/>

<style>

</style>