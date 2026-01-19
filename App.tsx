
import React, { useState, useMemo } from 'react';
import { Product, Slot, POPMaterial } from './types';

const INITIAL_PRODUCTS: Product[] = [
  // CEPITA (Altura ajustada para realismo)
  { 
    brand: "CEPITA", 
    sku: 100926, 
    description: "CEPITA FRESH MANZANA", 
    image: "https://firebasestorage.googleapis.com/v0/b/femsa-ur.firebasestorage.app/o/productos%2F100926.png?alt=media&token=1de28a57-4e3c-42a6-ae94-8eff8791e237", 
    category: "JUGOS", 
    width: 90, 
    height: 275,
    packing: "995mL"
  },
  {
    brand: "COCA COLA",
    sku: 172033,
    description: "COCA-COLA ORIGINAL",
    image: "https://firebasestorage.googleapis.com/v0/b/femsa-ur.firebasestorage.app/o/productos%2F172033.png?alt=media&token=560b6f65-46bb-4e0f-b07b-7a60ba807aaa",
    category: "Gaseosas",
    packing: "PET 600mL",
    width: 72,
    height: 231
  },
  {
    brand: "COCA COLA",
    sku: 3262,
    description: "COCA-COLA S/AZUCAR",
    image: "https://firebasestorage.googleapis.com/v0/b/femsa-ur.firebasestorage.app/o/productos%2F3262.png?alt=media&token=ecdb35c9-67ec-44b9-9361-f0d38470c7d6",
    category: "Gaseosas",
    packing: "PET 600mL",
    width: 72,
    height: 231
  },
  {
    brand: "COCA COLA",
    sku: 172034,
    description: "COCA-COLA LIGHT",
    image: "https://firebasestorage.googleapis.com/v0/b/femsa-ur.firebasestorage.app/o/productos%2F172034.png?alt=media&token=c83d9749-9dd0-4dbb-b7ec-72614803d359",
    category: "Gaseosas",
    packing: "PET 600mL",
    width: 72,
    height: 231
  },
  {
    brand: "SPRITE",
    sku: 172036,
    description: "SPRITE",
    image: "https://firebasestorage.googleapis.com/v0/b/femsa-ur.firebasestorage.app/o/productos%2F172036.png?alt=media&token=9cbf905e-f68a-45d3-b53f-073b3407ff67",
    category: "Gaseosas",
    packing: "PET 600mL",
    width: 72,
    height: 231
  },
  {
    brand: "SPRITE",
    sku: 172037,
    description: "SPRITE SIN AZÚCAR ",
    image: "https://firebasestorage.googleapis.com/v0/b/femsa-ur.firebasestorage.app/o/productos%2F172037.png?alt=media&token=34fca6c9-da3c-4fd0-bc34-780c162f4971",
    category: "Gaseosas",
    packing: "PET 600mL",
    width: 72,
    height: 231
  },
  {
    brand: "FANTA",
    sku: 101169,
    description: "FANTA NARANJA",
    image: "https://firebasestorage.googleapis.com/v0/b/femsa-ur.firebasestorage.app/o/productos%2F101169.png?alt=media&token=bf46ffcc-832a-4ab8-b73d-8f14ed81c5dd",
    category: "Gaseosas",
    packing: "PET 500mL",
    width: 69,
    height: 231
  },
  {
    brand: "COCA COLA SIN AZUCARES",
    sku: 172075,
    description: "COCA-COLA S/AZUCAR",
    image: "https://firebasestorage.googleapis.com/v0/b/femsa-ur.firebasestorage.app/o/productos%2F172075.png?alt=media&token=da6b1850-dbf7-4a1c-87d9-225520f8aa6c",
    category: "Gaseosas",
    packing: "PET 2.25L",
    width: 107,
    height: 359
  },
  {
    brand: "FANTA",
    sku: 172054,
    description: "FANTA NARANJA SIN AZÚCAR",
    image: "https://firebasestorage.googleapis.com/v0/b/femsa-ur.firebasestorage.app/o/productos%2F172054.png?alt=media&token=b5571cce-9867-4cc6-a186-4bfa7dded922",
    category: "Gaseosas",
    packing: "PET 1.5L",
    width: 94,
    height: 318
  },
  {
    brand: "VITALE",
    sku: 172109,
    description: "VITALE s/gas",
    image: "https://firebasestorage.googleapis.com/v0/b/femsa-ur.firebasestorage.app/o/productos%2F172109.png?alt=media&token=334c06f6-5e2c-4cd1-8954-7cdc084319c7",
    category: "AGUA",
    packing: "PET 2.5L",
    width: 108,
    height: 357
  },
  {
    brand: "SPRITE",
    sku: 100817,
    description: "SPRITE",
    image: "https://firebasestorage.googleapis.com/v0/b/femsa-ur.firebasestorage.app/o/productos%2F100817.png?alt=media&token=a88eab98-1817-4776-a662-a40ccef1f6eb",
    category: "Gaseosas",
    packing: "PET 3L",
    width: 123,
    height: 355
  },
  {
    brand: "SCHWEPPES",
    sku: 888888,
    description: "SCHWEPPES TONICA SIN AZUCAR",
    image: "https://firebasestorage.googleapis.com/v0/b/femsa-ur.firebasestorage.app/o/productos%2FTonica-SA-310ml.png?alt=media&token=78921420-fe49-40a5-96b6-af688e4dba7e",
    category: "Gaseosas",
    packing: "LATA 310mL",
    width: 57,
    height: 139
  },
  {
    brand: "OTROS",
    description: "Vacio",
    image: "https://firebasestorage.googleapis.com/v0/b/femsa-ur.firebasestorage.app/o/productos%2F172033.png?alt=media&token=560b6f65-46bb-4e0f-b07b-7a60ba807aaa",
    category: "OTROS",
    packing: "N/A",
    width: 50,
    height: 100,
    sku: 999999
  }
];

const AVAILABLE_FRIDGES = [
  { id: 33, model: "VR10", extH: 1435, extW: 632, extF: 600, intH: 1024, intW: 555, intF: 471, shelves: 4 }
];

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [collapsedBrands, setCollapsedBrands] = useState<Record<string, boolean>>({});
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [fridgeShelves, setFridgeShelves] = useState<Slot[][]>([[], [], [], []]);
  
  const SCALE = 0.5; 
  const fridge = AVAILABLE_FRIDGES[0];

  const filteredProducts = useMemo(() => {
    return INITIAL_PRODUCTS.filter(p => 
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
      p.sku?.toString().includes(searchTerm)
    );
  }, [searchTerm]);

  const productsByBrand = useMemo(() => {
    const groups: Record<string, Product[]> = {};
    filteredProducts.forEach(p => {
      const brand = p.brand || 'Otros';
      if (!groups[brand]) groups[brand] = [];
      groups[brand].push(p);
    });
    return groups;
  }, [filteredProducts]);

  const toggleBrandCollapse = (brand: string) => {
    setCollapsedBrands(prev => ({ ...prev, [brand]: !prev[brand] }));
  };

  const selectProduct = (product: Product) => {
    setSelectedProduct(product === selectedProduct ? null : product);
  };

  const handleShelfClick = (shelfIndex: number) => {
    if (!selectedProduct) return;

    const updatedShelves = [...fridgeShelves];
    const currentWidth = updatedShelves[shelfIndex].reduce((acc, p) => acc + (p.width || 0), 0);
    
    if (currentWidth + (selectedProduct.width || 0) <= fridge.intW + 5) {
      const newInstance: Slot = { ...selectedProduct, instanceId: `${selectedProduct.sku}-${Date.now()}` };
      updatedShelves[shelfIndex] = [...updatedShelves[shelfIndex], newInstance];
      setFridgeShelves(updatedShelves);
    } else {
      console.warn("No hay espacio suficiente en esta bandeja");
    }
  };

  const removeProduct = (e: React.MouseEvent, shelfIndex: number, instanceId: string) => {
    e.stopPropagation(); 
    const updatedShelves = [...fridgeShelves];
    updatedShelves[shelfIndex] = updatedShelves[shelfIndex].filter(p => p.instanceId !== instanceId);
    setFridgeShelves(updatedShelves);
  };

  const frameWidth = (fridge.extW - fridge.intW) / 2;

  return (
    <div className="flex h-screen bg-slate-50 text-zinc-900 overflow-hidden font-sans">
      
      {/* Sidebar Nav */}
      <nav className="w-20 bg-zinc-900 flex flex-col items-center py-8 gap-8 z-50 shrink-0 border-r border-black/20">
        <div className="w-12 h-12 bg-[#e51d2e] rounded-xl flex items-center justify-center shadow-lg shadow-red-900/40 mb-4 transform hover:scale-105 transition-all cursor-pointer">
          <span className="text-white font-black text-xl italic">C</span>
        </div>
        <button className="text-red-500 p-3 bg-red-500/10 rounded-2xl scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
        </button>
      </nav>

      {/* Panel de Productos Lateral */}
      <aside className="w-96 bg-white border-r border-zinc-200 flex flex-col overflow-hidden shrink-0 z-40">
        <div className="p-6 pb-4 border-b border-zinc-100 bg-white">
           <h1 className="text-xl font-black text-zinc-900 uppercase tracking-tighter italic mb-4">Planograma</h1>
           
           <div className="grid grid-cols-1 gap-4">
              {/* Nuevos Selectores: Canal, GEC y Tipo */}
              <div className="grid grid-cols-2 gap-3">
                 <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] font-black text-blue-500 uppercase tracking-widest">Canal</label>
                    <select className="bg-blue-50/50 border border-blue-100 rounded-xl px-4 py-2 text-[11px] font-bold outline-none cursor-pointer focus:border-blue-400">
                       <option>OTROS</option>
                    </select>
                 </div>
                 <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] font-black text-blue-500 uppercase tracking-widest">GEC</label>
                    <select className="bg-blue-50/50 border border-blue-100 rounded-xl px-4 py-2 text-[11px] font-bold outline-none cursor-pointer focus:border-blue-400">
                       <option>OTROS</option>
                    </select>
                 </div>
              </div>

              <div className="flex flex-col gap-1.5">
                 <label className="text-[9px] font-black text-blue-500 uppercase tracking-widest">Tipo</label>
                 <select className="bg-blue-50/50 border border-blue-100 rounded-xl px-4 py-2 text-[11px] font-bold outline-none cursor-pointer focus:border-blue-400">
                    <option>OTROS</option>
                 </select>
              </div>

              {/* Selector Modelo */}
              <div className="flex flex-col gap-1.5 pt-2 border-t border-zinc-50">
                 <label className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Modelo de Heladera</label>
                 <select className="bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-[11px] font-bold outline-none cursor-pointer focus:border-red-500 transition-colors">
                    <option>{fridge.model}</option>
                 </select>
              </div>
           </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4 bg-zinc-50/30">
          <div className="flex flex-col gap-2 px-2 sticky top-0 z-10 bg-white/80 backdrop-blur pb-2">
            <input 
              type="text" placeholder="Filtrar por nombre o SKU..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-zinc-200 rounded-2xl px-4 py-3 text-xs font-bold focus:ring-2 focus:ring-red-500/20 transition-all outline-none"
            />
          </div>

          <div className="flex flex-col gap-4">
            {(Object.entries(productsByBrand) as [string, Product[]][]).map(([brand, items]) => (
              <div key={brand} className="mb-2">
                <button onClick={() => toggleBrandCollapse(brand)} className="flex items-center justify-between w-full py-2 px-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-red-600 transition-colors border-b border-zinc-100">
                  <span>{brand}</span>
                  <svg className={`w-3 h-3 transition-transform ${collapsedBrands[brand] ? '' : 'rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {!collapsedBrands[brand] && (
                  <div className="grid grid-cols-2 gap-3 mt-4 px-1">
                    {items.map((product) => (
                      <div
                        key={product.sku || product.description}
                        onClick={() => selectProduct(product)}
                        className={`flex flex-col bg-white border rounded-2xl overflow-hidden cursor-pointer transition-all active:scale-95 group ${selectedProduct?.sku === product.sku ? 'border-red-600 ring-2 ring-red-600 ring-offset-2 shadow-2xl pulse-border' : 'border-zinc-100 hover:border-zinc-300'}`}
                      >
                        <div className="aspect-square bg-zinc-50 flex items-center justify-center p-4 relative overflow-hidden">
                           <img src={product.image} alt={product.description} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                           <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-0.5 rounded-full text-[8px] font-black text-zinc-500 shadow-sm border border-zinc-100 uppercase tracking-tighter">
                             {product.packing}
                           </div>
                        </div>
                        <div className="p-3 flex flex-col gap-1">
                           <h3 className="text-[10px] font-black text-zinc-900 leading-tight uppercase line-clamp-2">{product.description}</h3>
                           <div className="flex justify-between items-center mt-1">
                             <span className="text-[9px] font-bold text-red-600 tracking-tight">{product.packing || '--'}</span>
                             <span className="text-[9px] font-mono text-zinc-400 uppercase">SKU: {product.sku || 'N/A'}</span>
                           </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Viewport */}
      <main className="flex-1 relative flex items-center justify-center bg-zinc-100 p-8">
        
        {/* VR10 REFRIGERATOR CONTAINER */}
        <div 
          style={{ width: fridge.extW * SCALE, height: fridge.extH * SCALE }}
          className="relative bg-[#e51d2e] rounded-sm shadow-[0_50px_100px_rgba(0,0,0,0.3)] flex flex-col z-10 overflow-hidden"
        >
          {/* Top Header */}
          <div className="h-[10%] w-full flex items-center justify-center relative bg-[#e51d2e]">
              <span className="text-white font-black text-2xl italic tracking-tighter">Coca-Cola</span>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/10"></div>
          </div>

          {/* Cámara Interna */}
          <div 
            className="flex-1 bg-white relative flex flex-col z-20"
            style={{ 
              margin: `0 ${frameWidth * SCALE}px`,
              boxShadow: 'inset 0 0 80px rgba(0,0,0,0.05)'
            }}
          >
            <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-30"></div>

            <div className="absolute inset-0 flex flex-col">
              {fridgeShelves.map((shelfProducts, idx) => (
                <div
                  key={idx}
                  onClick={() => handleShelfClick(idx)}
                  className={`flex-1 relative border-b border-zinc-100 flex items-end justify-start overflow-visible transition-colors cursor-pointer group/shelf ${selectedProduct ? 'hover:bg-red-50/50' : ''}`}
                >
                  {selectedProduct && (
                    <div className="absolute inset-0 border-2 border-transparent group-hover/shelf:border-red-400/30 transition-all pointer-events-none z-[40]"></div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-zinc-200 z-[25] shadow-sm"></div>

                  <div className="flex items-end justify-start gap-0 w-full pb-3 z-[30] px-1 overflow-visible">
                    {shelfProducts.map((p) => (
                      <div
                        key={p.instanceId}
                        onClick={(e) => removeProduct(e, idx, p.instanceId)}
                        className="group relative cursor-pointer flex-shrink-0 origin-bottom transition-all hover:z-50 hover:scale-105"
                        style={{ 
                          width: `${(p.width || 90) * SCALE}px`, 
                          height: `${(p.height || 235) * SCALE}px`,
                          marginBottom: '2px'
                        }}
                      >
                        <img 
                          src={p.image} 
                          className="w-full h-full object-contain drop-shadow-[0_8px_10px_rgba(0,0,0,0.15)]"
                          alt={p.description}
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-red-600/5 rounded-xl">
                           <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white font-black text-[10px] shadow-xl">X</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Zócalo Inferior */}
          <div className="h-[18%] w-full bg-[#e51d2e] mt-auto flex flex-col relative shadow-[inset_0_10px_20px_rgba(0,0,0,0.15)]">
            <div className="flex-1 flex flex-col justify-center px-10 gap-2">
               {[1,2,3].map(i => <div key={i} className="h-[3px] w-[50%] bg-black/20 rounded-full"></div>)}
            </div>
            <div className="absolute right-8 top-[20%] w-[50px] h-[65px] bg-[#1a1a1a] rounded-lg border border-black/40 flex items-center justify-center shadow-2xl">
              <span className="text-green-500 font-mono text-sm glow-green">3.5</span>
            </div>
          </div>
        </div>

        {/* Panel Informativo Flotante */}
        <div className="absolute bottom-12 right-12 p-8 bg-white shadow-2xl rounded-[2.5rem] border border-zinc-100 w-80">
           <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-6">Instrucciones de Uso</h3>
           <div className="space-y-4">
              <div className="flex gap-4 items-start">
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shrink-0 transition-colors ${!selectedProduct ? 'bg-red-600 text-white' : 'bg-zinc-100 text-zinc-400'}`}>1</div>
                 <p className="text-[11px] text-zinc-600 font-medium">Haz clic en un producto del panel izquierdo para seleccionarlo.</p>
              </div>
              <div className="flex gap-4 items-start">
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shrink-0 transition-colors ${selectedProduct ? 'bg-red-600 text-white' : 'bg-zinc-100 text-zinc-400'}`}>2</div>
                 <p className="text-[11px] text-zinc-600 font-medium">Haz clic en la bandeja de la heladera donde quieras ubicarlo.</p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-zinc-100">
                <h4 className="text-[10px] font-black uppercase text-zinc-400 mb-2">Estado Actual</h4>
                {selectedProduct ? (
                  <div className="p-3 bg-red-50 rounded-xl border border-red-100 flex items-center gap-3">
                     <img src={selectedProduct.image} className="w-8 h-8 object-contain" />
                     <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase leading-tight">{selectedProduct.description}</span>
                        <span className="text-[9px] text-red-600 font-bold uppercase tracking-tighter">Listo para ubicar</span>
                     </div>
                  </div>
                ) : (
                  <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-100 text-[10px] font-bold text-zinc-400 text-center italic">Ningún producto seleccionado</div>
                )}
              </div>
           </div>
        </div>
      </main>

      <style>{`
        .glow-green { text-shadow: 0 0 10px rgba(34, 197, 94, 0.8); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }
        @keyframes pulse-border {
          0% { border-color: rgba(229, 29, 46, 1); box-shadow: 0 0 0 0 rgba(229, 29, 46, 0.4); }
          70% { border-color: rgba(229, 29, 46, 1); box-shadow: 0 0 0 10px rgba(229, 29, 46, 0); }
          100% { border-color: rgba(229, 29, 46, 1); box-shadow: 0 0 0 0 rgba(229, 29, 46, 0); }
        }
        .pulse-border {
          animation: pulse-border 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
