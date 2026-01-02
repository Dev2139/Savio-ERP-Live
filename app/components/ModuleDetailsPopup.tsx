import { X } from 'lucide-react';

interface ModuleDetailsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  moduleName: string;
  subModules: string[];
}

const ModuleDetailsPopup = ({ isOpen, onClose, moduleName, subModules }: ModuleDetailsPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-blue-900">{moduleName}</h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Sub-modules:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {subModules.map((subModule, index) => (
                <li 
                  key={index} 
                  className="py-2 px-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700"
                >
                  {index + 1}. {subModule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleDetailsPopup;