<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="container mx-auto p-4">
	<h1 class="mb-4 text-2xl font-bold">GTA Manufacturing Execution System</h1>
</div>

{@render children()}
