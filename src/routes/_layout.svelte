<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>

  @media (max-width: 800px) {

    .testMedia {
      background-color: blue;
   
    }

   /* PUT CSS HERE TO ALTER WEBSITE TO SINGLE COLUMN */
  }

   @media (max-width: 600px) {

    .testMedia {
      background-color: red;

    }

   /* PUT CSS HERE TO ALTER WEBSITE TO SINGLE COLUMN */
  }

	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main class="testMedia">
	<slot></slot>
</main>