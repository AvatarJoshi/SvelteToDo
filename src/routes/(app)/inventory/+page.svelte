<script lang="ts">
	import type { InventoryItem } from '$lib/types/inventory';
	import InventoryTable from '$lib/components/inventory/InventoryTable.svelte';

	// Mock Data
	const mockInventoryItems: InventoryItem[] = [
		{
			id: 1,
			name: 'Raw Material A',
			batchNumber: 'RM-A-001',
			quantity: 100,
			unitOfMeasure: 'kg',
			price: 10.5,
			description: 'Primary raw material for product X'
		},
		{
			id: 2,
			name: 'Component B',
			batchNumber: 'COMP-B-045',
			quantity: 500,
			unitOfMeasure: 'units',
			price: 2.75,
			description: 'Essential component for assembly'
		},
		{
			id: 3,
			name: 'Finished Good C',
			batchNumber: 'FG-C-1020',
			quantity: 50,
			unitOfMeasure: 'units',
			price: 75.0,
			description: 'Ready for shipment'
		},
		{
			id: 'uuid-test-4',
			name: 'Raw Material D',
			batchNumber: 'RM-D-002',
			quantity: 250,
			unitOfMeasure: 'liters',
			price: 5.2
		},
		{
			id: 5,
			name: 'Sub-Assembly E',
			batchNumber: 'SA-E-007',
			quantity: 75,
			unitOfMeasure: 'sets',
			price: 35.15,
			description: 'Partial assembly for final product'
		}
	];
</script>

<div class="container mx-auto p-4">
	<h1 class="mb-4 text-2xl font-bold">Inventory Management</h1>

	<InventoryTable items={mockInventoryItems} />
</div>
