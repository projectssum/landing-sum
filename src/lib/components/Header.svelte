<script lang="ts">
    import {base} from "$app/paths";

    let headerClass = "pin";
    let y = 0;
    let lastY = 0;
    let lastDirection = "up";

    function changeClass(y: number) {
        let result = headerClass;
        const scrolledPxs = lastY - y;
        const scrollDirection = scrolledPxs < 0 ? "down" : "up";
        const changedDirection = scrollDirection !== lastDirection;
        if (changedDirection) {
            result = scrollDirection === "down" ? "unpin" : "pin";
            lastDirection = scrollDirection;
        }
        lastY = y;
        return result;
    }

    $: headerClass = changeClass(y);

    let statusBurger = false;
</script>
<svelte:window bind:scrollY={y}/>
<header class={headerClass}>
    <div class="header-left-block">
        <img src="{base}/icon.png" alt="icon"/>
    </div>
    <nav class="header-right-block">
        <ul class="head-menu">
            <li><a href="https://guu.ru/" target="_blank">
                <svg width="40" height="40">
                    <image xlink:href="university.svg" width="40" height="40"/>
                </svg>
            </a></li>
            <li><a href="https://vk.com/sum_moscow" target="_blank">
                <svg width="40" height="40">
                    <image xlink:href="vk.svg" width="40" height="40"/>
                </svg>
            </a></li>
            <li><a href="https://t.me/GUUmsk" target="_blank">
                <svg width="40" height="40">
                    <image xlink:href="telegram.svg" width="40" height="40"/>
                </svg>
            </a></li>
            <li><a href="https://iis.guu.ru/" target="_blank">
                <svg width="40" height="40">
                    <image xlink:href="pc.svg" width="40" height="40"/>
                </svg>
            </a>
            </li>
            <li><a href="https://www.youtube.com/channel/UCBd1Mk1kNMfIhnMBUKoJIEQ" target="_blank">
                <svg width="40" height="40">
                    <image xlink:href="youtube.svg" width="40" height="40"/>
                </svg>
            </a></li>
            <li><a href=https://t.me/miss_sum23 target="_blank">
                <svg width="40" height="40">
                    <image xlink:href="heart.svg" width="40" height="40"/>
                </svg>
            </a></li>
        </ul>
    </nav>
    <button class="burger" on:click={() => statusBurger = !statusBurger}><span></span></button>
    {#if statusBurger}
        <nav class="burger-menu">
            <li><a href="https://guu.ru/" target="_blank"><h3>Университет</h3></a></li>
            <li><a href="https://vk.com/sum_moscow" target="_blank"><h3>ВК</h3></a></li>
            <li><a href="https://t.me/GUUmsk" target="_blank"><h3>Телеграмм</h3></a></li>
            <li><a href="https://iis.guu.ru/" target="_blank"><h3>ИИС</h3></a></li>
            <li><a href="https://www.youtube.com/channel/UCBd1Mk1kNMfIhnMBUKoJIEQ" target="_blank"><h3>Ютуб</h3></a></li>
            <li><a href=https://t.me/miss_sum23 target="_blank"><h3>МИСС</h3></a></li>
        </nav>
    {/if}

</header>

<style>
    :root {
        --header-height: 80px;
    }

    header {
        background: rgba(75, 40, 119, 0.25);
        height: var(--header-height);
        position: fixed;
        width: 100%;
        z-index: 100;
        transition: all 0.3s linear;
    }

    .pin {
        top: 0;
    }

    .unpin {
        top: calc(var(--header-height) * -1);
    }

    .header-right-block {
        @media (max-width: 767px) {
            display: none;
        }
    }

    .burger {
        display: none;
        border: none;
        background: none;
        cursor: pointer;
        @media (max-width: 777px) {
            color: rgba(0, 0, 0, 0);
            display: block;
            position: relative;
            width: 30px;
            height: 30px;
            z-index: 100;
        };
    }

    .burger span {
        position: absolute;
        background-color: white;
        left: 0;
        width: 100%;
        height: 2px;
        top: 14px;
    }

    .burger:before,
    .burger:after {
        content: "";
        background-color: #ffffff;
        position: absolute;
        width: 100%;
        height: 1px;
        left: 0;
    }

    .burger:before {
        top: 0;
    }

    .burger:after {
        bottom: 0;
    }
    .burger-menu {
        display: flex;
        flex-direction: column;
        gap: 20px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #2b0167;
        text-align: center;
        align-content: center;
        justify-content: center;
    }
    .header-right-block {
        @media (max-width: 777px) {
            display: none;
        }
    }

</style>