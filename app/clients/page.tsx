import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ClientsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Clients</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Trusted by leading enterprises across diverse manufacturing industries
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our ERP solutions meet the unique demands of diverse manufacturing sectors
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="text-blue-600 mb-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-gray-500">
                    Icon
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Manufacturing</h3>
                <p className="text-gray-700">
                  Streamline production planning, inventory management, and quality control for discrete and process manufacturing.
                </p>
                <div className="mt-6">
                  <h4 className="font-bold text-gray-900 mb-3">Notable Clients:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Global Manufacturing Corp</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Industrial Solutions Ltd</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Advanced Production Systems</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="text-blue-600 mb-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-gray-500">
                    Icon
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Pharmaceutical</h3>
                <p className="text-gray-700">
                  Ensure regulatory compliance, track lot numbers, and maintain detailed audit trails for drug manufacturing.
                </p>
                <div className="mt-6">
                  <h4 className="font-bold text-gray-900 mb-3">Notable Clients:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Pharma Innovations Inc</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>MediCare Solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Life Sciences Group</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="text-blue-600 mb-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-gray-500">
                    Icon
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Engineering</h3>
                <p className="text-gray-700">
                  Manage complex BOMs, project timelines, and resource allocation for engineering and construction projects.
                </p>
                <div className="mt-6">
                  <h4 className="font-bold text-gray-900 mb-3">Notable Clients:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Engineering Dynamics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Construction Tech Group</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Design Solutions Inc</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="text-blue-600 mb-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-gray-500">
                    Icon
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Automotive</h3>
                <p className="text-gray-700">
                  Optimize supply chain coordination, manage supplier relationships, and track quality metrics across the value chain.
                </p>
                <div className="mt-6">
                  <h4 className="font-bold text-gray-900 mb-3">Notable Clients:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Auto Parts Global</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Vehicle Manufacturing Co</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Automotive Solutions Ltd</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="text-blue-600 mb-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-gray-500">
                    Icon
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Packaging</h3>
                <p className="text-gray-700">
                  Handle multi-level BOMs, manage color specifications, and coordinate with production scheduling for packaging lines.
                </p>
                <div className="mt-6">
                  <h4 className="font-bold text-gray-900 mb-3">Notable Clients:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Packaging Innovations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Flexible Packaging Corp</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Carton Solutions Ltd</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="text-blue-600 mb-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-gray-500">
                    Icon
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Additional Industries</h3>
                <p className="text-gray-700">
                  Electronics, Food & Beverage, Chemicals, and more specialized manufacturing sectors.
                </p>
                <div className="mt-6">
                  <h4 className="font-bold text-gray-900 mb-3">Notable Clients:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Electronics Manufacturing Inc</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Food Processing Solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Chemical Industry Group</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Client Success Stories</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Hear from our satisfied clients about their SavioERP experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <div className="h-48 bg-gray-200 border-2 border-dashed w-full flex items-center justify-center text-gray-500">
                  Success Story Visual
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    "SavioERP transformed our manufacturing operations. We've reduced operational costs by 25% and improved production efficiency by 40%."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-full w-12 h-12 mr-4" />
                    <div>
                      <h4 className="font-bold text-blue-900">John Smith</h4>
                      <p className="text-gray-600">Operations Director, TechManufacturing Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <div className="h-48 bg-gray-200 border-2 border-dashed w-full flex items-center justify-center text-gray-500">
                  Success Story Visual
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    "The implementation was seamless, and the support team was exceptional. Our compliance reporting is now automated and error-free."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-full w-12 h-12 mr-4" />
                    <div>
                      <h4 className="font-bold text-blue-900">Sarah Johnson</h4>
                      <p className="text-gray-600">CTO, PharmaSolutions Ltd.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <div className="h-48 bg-gray-200 border-2 border-dashed w-full flex items-center justify-center text-gray-500">
                  Success Story Visual
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    "Since implementing SavioERP, our inventory accuracy has improved to 99.5% and our order fulfillment time has decreased by 30%."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-full w-12 h-12 mr-4" />
                    <div>
                      <h4 className="font-bold text-blue-900">Michael Chen</h4>
                      <p className="text-gray-600">Supply Chain Manager, AutoParts Global</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}