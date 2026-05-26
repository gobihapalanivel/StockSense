import { useNavigate } from 'react-router-dom';

const scrollCategories = [
  { icon: '🥤', name: 'Beverages' },
  { icon: '🍿', name: 'Snacks' },
  { icon: '🥛', name: 'Dairy Products' },
  { icon: '🥐', name: 'Bakery Items' },
  { icon: '🥗', name: 'Fruits & Vegetables' },
  { icon: '🧊', name: 'Frozen Foods' },
  { icon: '🏡', name: 'Household Essentials' },
  { icon: '🧴', name: 'Personal Care' },
  { icon: '🥫', name: 'Packaged Foods' },
  { icon: '🧽', name: 'Cleaning Supplies' }
];

interface CategoryMarqueeProps {
  onCategorySelect?: (categoryName: string) => void;
  activeCategory?: string;
}

export default function CategoryMarquee({ onCategorySelect, activeCategory }: CategoryMarqueeProps) {
  const navigate = useNavigate();

  return (
    <div className="relative w-full overflow-hidden fade-edges">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
        .fade-edges {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
      `}</style>
      <div className="animate-infinite-scroll flex gap-2.5 py-2">
        {[...scrollCategories, ...scrollCategories].map((cat, idx) => {
          const isSelected = activeCategory === cat.name;
          return (
            <div 
              key={idx} 
              onClick={() => {
                if (onCategorySelect) {
                  onCategorySelect(cat.name);
                } else {
                  const categorySlug = cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  navigate(`/category/${categorySlug}`);
                }
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 transition-colors rounded-[8px] text-[13px] font-medium whitespace-nowrap cursor-pointer border shadow-sm ${
                isSelected 
                  ? 'bg-[#166534] text-white border-[#166534]' 
                  : 'bg-[#f4f5f7] hover:bg-[#e2e8f0] text-gray-700 border-gray-200'
              }`}
            >
              <span>{cat.icon}</span>
              <span className={isSelected ? 'text-white font-semibold' : 'text-gray-600'}>{cat.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
