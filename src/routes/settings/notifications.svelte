<script context="module">
  export async function preload({ params, query }) {

    const res = await this.fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
    const data = await res.json();

    console.log(`Fetched typicode photos: ${data}`);

    return { photos: data };
  }
</script>

<script>
  import PhotoCell from "./PhotoCell.svelte";
  //indeximport lottie from "lottie-web/player/js/lottie.js";
  // import lottie from "./lottie.js"

  import { onMount } from "svelte";

  import { draw } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { flip } from "svelte/animate";

  let list = [1, 2, 3];

  //export const condition = true;

  export let photos = [];

  // onMount(async () => {
  //   const res = await fetch(
  //     `https://jsonplaceholder.typicode.com/photos?_limit=20`
  //   );
  //   photos = await res.json();
  // });

  // onMount(async () => {
  //   let lottie;
  //   const module = await import("./lottie.js");
  //   lottie = module.default;

  //   lottie.loadAnimation({
  //     container: document.querySelector("#testBox"), // the dom element that will contain the animation
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     path: "animations/test2.json" // the path to the animation json
  //   });
  // });

  let count = 0;
</script>

<style>
  :global(body) {
      margin: 20;
      background-color: black;
  }

  :root {
    --chame-color: rgba(158, 231, 152, 1);
    --chame-color-eyes: rgba(158, 231, 152, 1);
  }

  .photos {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
    background-color: var(--chame-color-eyes);
  }

  #testBox {
    xbackground-color: lightcoral;
    width: 100%;
    height: 100px;
    xposition: absolute;
    z-index: 1990;
    top: -0px;
    left: 0em;
  }
</style>

<div>notifications</div>
<div id="testBox" />

<input bind:value={count} placeholder="change count" />

{#each list as n (n)}
  <div animate:flip={{ delay: 250, duration: 250, easing: quintOut }}>{n}</div>
{/each}

{#if count > 0}
  <p style="background-color: var(--chame-color-eyes);">
    counting down... {count}
  </p>
  <svelte:self count={count - 1} />
{:else}
  <p>lift-off!</p>
{/if}

<h1>Photo album</h1>

<div class="photos">
  {#each photos as photo}
    <PhotoCell {photo} />
  {:else}
    <!-- this block renders when photos.length === 0 -->
    <p>loading...</p>
  {/each}
</div>
