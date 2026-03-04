import React from 'react';
import { LayoutGrid, Settings, LogOut, FileText, ClipboardList, Ruler, Layers, ChevronDown, PlusCircle, Trash2, Monitor, Smartphone } from 'lucide-react';

interface ProductMockupProps {
  customImage?: string;
  className?: string;
}

const ProductMockup: React.FC<ProductMockupProps> = ({ customImage, className = "" }) => {
  const screenshotUrl = customImage || "https://picsum.photos/seed/arista-app/1280/720";

  return (
    <div className={`relative ${className}`}>
      <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
        {/* Simple Browser Chrome */}
        <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between select-none">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
          </div>
          
          <div className="flex-1 max-w-xs mx-4">
            <div className="bg-white border border-slate-200 rounded-md px-3 py-1 text-[10px] text-slate-400 text-center font-medium truncate">
              app.aristastudio.com
            </div>
          </div>

          <div className="flex gap-1">
             <div className="w-1 h-1 rounded-full bg-slate-300"></div>
             <div className="w-1 h-1 rounded-full bg-slate-300"></div>
          </div>
        </div>

        {/* Main App Interface */}
        <div className="relative aspect-video bg-slate-100 overflow-hidden">
          <img 
            src={screenshotUrl} 
            alt="AristaStudio App Screenshot" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductMockup;