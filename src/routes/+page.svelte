<script lang="ts">
	let count = $state(0);
	let todos = $state([
		{
			done: false,
			text: 'add more todos...'
		}
	]);

	// todos[0].done = !todos[0].done;
</script>

<div class="rounded-lg bg-blue-500 p-4 font-bold text-white">Tailwind is working!</div>

<div>
	<button onclick={() => count++}>NumClicks: {count}</button>
</div>

<div>
	<button
		onclick={() =>
			todos.push({
				done: false,
				text: 'eat lunch'
			})}>Add To Do</button
	>
</div>

<div>
	{#each todos as todo}
		{todo.text}
		<br />
	{/each}
</div>
