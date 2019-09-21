<script>
  import { blur, fly, fade } from 'svelte/transition';

  let innerWidth = 100;
  let outerWidth = 100;
  let height;

  let infocus = false;

  let visible = true;

</script>

<style>

.infocus {
  background-color: burlywood;
}

.settingsContainer {
  xbackground-color: cornsilk;
  padding: 2em;
}

</style>

<svelte:window bind:innerWidth={innerWidth} bind:outerWidth={outerWidth}/>

<svelte:head>
   <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
</svelte:head>

<ul>
		<li><a href='settings/profile'>Profile</a></li>
    	<li><a rel=prefetch href='settings/notifications'>Change Password</a></li>
</ul>

<label>
	<input type="checkbox" bind:checked={visible}>
	visible
</label>

{#if visible}
<div in:fade class="settingsContainer" 
  class:infocus on:mouseover={() => infocus = true} 
  on:mouseleave={() => infocus = false}>
  <slot class="settingsContainer">
  </slot>
</div> 
{/if}

<div>innerWidth: {innerWidth}, outerWidth: {outerWidth}</div>
