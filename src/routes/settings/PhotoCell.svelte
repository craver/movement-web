<script>
	export let photo;
</script>
			
<style>
			
</style> 

<figure>
  <img src={photo.thumbnailUrl} alt={photo.title}>
	  <figcaption>{photo.title}</figcaption>
</figure>