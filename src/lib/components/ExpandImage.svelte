<script>
    export let image1 = "MRS1.jpg";
    export let image2 = "MRS1.jpg";
    export let image3 = "MRS1.jpg";
    export let image4 = "MRS1.jpg";
    export let text1 = "";
    export let text2 = "";
    export let text3 = "";
    export let text4 = "";
    export let title1 = "";
    export let title2 = "";
    export let title3 = "";
    export let title4 = "";
    import {base} from '$app/paths'

</script>
<div class="">
    <div class="container">
        <div style="background: url({base}/{image1}) no-repeat 50% / cover;">
            <div class="content">
                <h3>{title1}</h3>
                <span>{text1}</span>
            </div>
        </div>
        <div style="background: url({base}/{image2}) no-repeat 50% / cover">
            <div class="content">
                <h3>{title2}</h3>
                <span>{text2}</span>
            </div>
        </div>
        <div style="background: url({base}/{image3}) no-repeat 50% / cover">
            <div class="content">
                <h3>{title3}</h3>
                <span>{text3}</span>
            </div>
        </div>
        <div style="background: url({base}/{image4}) no-repeat 50% / cover">
            <div class="content">
                <h3>{title4}</h3>
                <span>{text4}</span>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap");

  .container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    height: 600px;
    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 600px);
      height: 1200px;
    }
    gap: 10px;

    > div {
      flex: 0 0 25%;

      border-radius: 0.5rem;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      box-shadow: 1px 5px 15px #1e0e3e;
      position: relative;
      overflow: hidden;

      .content {
        font-size: 1.5rem;
        color: #fff;
        display: flex;
        align-items: center;
        padding: 15px;
        opacity: 0;
        flex-direction: column;
        height: 100%;
        justify-content: flex-end;
        background: rgb(2, 2, 46);
        background: linear-gradient(
                        0deg,
                        rgba(2, 2, 46, 0.6755077030812324) 0%,
                        rgba(255, 255, 255, 0) 100%
        );
        transform: translatey(100%);
        transition: opacity 0.5s ease-in-out, transform 0.5s 0.2s;
        visibility: hidden;

        span {
          display: block;
          margin-top: 5px;
          font-size: 1.2rem;
        }
      }

      &:hover {
        flex: 0 0 27%;
        box-shadow: 1px 3px 15px #7645d8;
        transform: translatey(-30px);
      }

      &:hover .content {
        opacity: 1;
        transform: translatey(0%);
        visibility: visible;
      }
    }
  }
</style>