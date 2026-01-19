
export interface Product {
  brand?: string;
  sku?: number;
  description: string;
  image: string;
  category?: string;
  consumption?: string | null;
  returnable?: string;
  flavor?: string;
  packing?: string;
  liters?: number;
  bottles_per_pack?: number | null;
  type?: string;
  width?: number;
  height?: number;
  sizePx?: number;
  name?: string; 
}

export interface Slot extends Product {
  instanceId: string;
}

export interface POPMaterial {
  id: string;
  description: string;
  image: string;
  type: 'header' | 'wincha';
}

export interface ShelfData {
  slots: Product[];
  remainingSpace?: number;
}

export interface RefrigeratorConfig {
  refrigerator_id: number;
  type: string;
  model: string;
  width: number;
  shelves: number;
  doors: number;
  configuration: {
    shelve_1: Array<{
      shelves: ShelfData[];
    }>;
  };
}
