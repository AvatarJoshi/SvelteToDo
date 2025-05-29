export interface InventoryItem {
  id: string | number; // Allow string for UUIDs or number for simple IDs
  name: string;
  batchNumber: string;
  quantity: number;
  unitOfMeasure: string;
  price: number; // Assuming this is a monetary value
  description?: string; // Optional description
}