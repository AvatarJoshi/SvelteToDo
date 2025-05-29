<script lang="ts">
	import type { InventoryItem } from '$lib/types/inventory';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import { Button } from 'flowbite-svelte'; // For action buttons

	// Props
	let { items = [] }: { items: InventoryItem[] } = $props();
</script>

{#if items.length > 0}
	<Table striped={true} hoverable={true} shadow>
		<TableHead>
			<TableHeadCell>ID</TableHeadCell>
			<TableHeadCell>Name</TableHeadCell>
			<TableHeadCell>Batch #</TableHeadCell>
			<TableHeadCell class="text-right">Quantity</TableHeadCell>
			<TableHeadCell>Unit</TableHeadCell>
			<TableHeadCell class="text-right">Price</TableHeadCell>
			<TableHeadCell>Description</TableHeadCell>
			<TableHeadCell>Actions</TableHeadCell>
		</TableHead>
		<TableBody>
			{#each items as item (item.id)}
				<TableBodyRow>
					<TableBodyCell>{item.id}</TableBodyCell>
					<TableBodyCell>{item.name}</TableBodyCell>
					<TableBodyCell>{item.batchNumber}</TableBodyCell>
					<TableBodyCell class="text-right">{item.quantity}</TableBodyCell>
					<TableBodyCell>{item.unitOfMeasure}</TableBodyCell>
					<TableBodyCell class="text-right">{item.price.toFixed(2)}</TableBodyCell>
					<TableBodyCell>{item.description || '-'}</TableBodyCell>
					<TableBodyCell class="space-x-2">
						<Button size="xs">Edit</Button>
						<Button color="red" size="xs">Delete</Button>
					</TableBodyCell>
				</TableBodyRow>
			{:else}
				<TableBodyRow>
					<TableBodyCell colspan={8} class="text-center">No inventory items found.</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
{:else}
	<Table striped={true} hoverable={true} shadow>
		<TableHead>
			<TableHeadCell>ID</TableHeadCell>
			<TableHeadCell>Name</TableHeadCell>
			<TableHeadCell>Batch #</TableHeadCell>
			<TableHeadCell class="text-right">Quantity</TableHeadCell>
			<TableHeadCell>Unit</TableHeadCell>
			<TableHeadCell class="text-right">Price</TableHeadCell>
			<TableHeadCell>Description</TableHeadCell>
			<TableHeadCell>Actions</TableHeadCell>
		</TableHead>
	</Table>
{/if}
