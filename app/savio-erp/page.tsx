import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Users, Package, BarChart3, Settings, FileText } from 'lucide-react';

export default function SavioERPPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">SavioERP Modules</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Comprehensive ERP solution with specialized modules for manufacturing enterprises
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Core ERP Modules</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Integrated solutions designed to streamline your manufacturing operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-4">
                  <Shield className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Manufacturing</h3>
                <p className="text-gray-700 mb-4">
                  Streamline production planning, inventory management, and quality control for discrete and process manufacturing.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Production Planning & Scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Bill of Materials (BOM) Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Quality Control & Assurance</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-4">
                  <Package className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Inventory</h3>
                <p className="text-gray-700 mb-4">
                  Real-time visibility into inventory levels, movements, and optimization across multiple locations.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Multi-location Inventory</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Automated Reordering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Batch & Serial Tracking</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-4">
                  <Users className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Human Resources</h3>
                <p className="text-gray-700 mb-4">
                  Manage workforce planning, attendance, payroll, and performance for your manufacturing teams.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Employee Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Time & Attendance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Payroll Processing</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-4">
                  <BarChart3 className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Financials</h3>
                <p className="text-gray-700 mb-4">
                  Complete financial management including general ledger, accounts payable/receivable, and reporting.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>General Ledger</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Accounts Payable/Receivable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Financial Reporting</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-4">
                  <Settings className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Supply Chain</h3>
                <p className="text-gray-700 mb-4">
                  End-to-end supply chain management from procurement to distribution and vendor management.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Purchase Order Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Vendor Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Logistics & Distribution</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-4">
                  <FileText className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Compliance</h3>
                <p className="text-gray-700 mb-4">
                  Ensure regulatory compliance with automated reporting, audit trails, and quality documentation.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Regulatory Reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Audit Trail Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Quality Documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Choose Our Modules?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our modular ERP system is designed specifically for manufacturing enterprises, offering seamless integration between all business functions.
                </p>
                <ul className="text-lg text-gray-700 space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-2xl">✓</span>
                    <span>Industry-specific functionality tailored for manufacturing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-2xl">✓</span>
                    <span>Real-time data synchronization across all modules</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-2xl">✓</span>
                    <span>Scalable architecture that grows with your business</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-2xl">✓</span>
                    <span>Comprehensive reporting and analytics</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://res.cloudinary.com/dsddldquo/image/upload/v1774455975/ubkwbpit0kzdsoqysjqf.webp"
                  alt="ERP Modules Visual"
                  className="rounded-xl shadow-md object-contain w-full h-80 md:h-96"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}