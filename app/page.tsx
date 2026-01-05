"use client";

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ModuleDetailsPopup from './components/ModuleDetailsPopup';
import { ArrowRight, CheckCircle, Users, Shield, Globe, Package, BarChart3, Settings, FileText, ShoppingCart, Wrench, Zap, TrendingUp, DollarSign, User } from 'lucide-react';

const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupModule, setPopupModule] = useState('');
  const [popupSubModules, setPopupSubModules] = useState<string[]>([]);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  
  useScrollAnimation();
  
  // Hero data for auto-scrolling
  const heroData = [
    {
      title: "Streamline Your Manufacturing Operations with <span className=\"text-red-600\">SavioERP</span>",
      subtitle: "Comprehensive ERP solution designed for mid-to-large manufacturing enterprises. Automate processes, improve efficiency, and scale your business with our enterprise-grade platform.",
      imageAlt: "Professional ERP/Mfg Visual"
    },
    {
      title: "Optimize Your <span className=\"text-red-600\">Business Processes</span> Today",
      subtitle: "Integrated solution for inventory, production, finance, and HR management. Achieve operational excellence with real-time insights and automation.",
      imageAlt: "Business Process Optimization"
    },
    {
      title: "Transform Your <span className=\"text-red-600\">Manufacturing Workflow</span>",
      subtitle: "End-to-end solution for procurement, sales, production, and compliance. Drive growth with data-driven decisions and streamlined operations.",
      imageAlt: "Manufacturing Workflow"
    }
  ];
  
  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  const openPopup = (moduleName: string, subModules: string[]) => {
    setPopupModule(moduleName);
    setPopupSubModules(subModules);
    setIsPopupOpen(true);
  };
  
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  
  const inventorySubModules = [
    "Material Receipt",
    "Landed Cost Calculation",
    "Basic Rate and Freight Comparison",
    "Supplier Returns",
    "Stock Allocation and De-Allocation",
    "Material Issues",
    "Material Returns",
    "Job work Issues",
    "Job work Returns",
    "Repairing Issues",
    "Repairing Returns",
    "Stock Reservation at Material Requisition Transaction",
    "Automatic Material Requisition",
    "Stock Valuation",
    "Stock Adjustment",
    "Physical Stock Take",
    "Stock Reports",
    "RG-1 Stock Register (Daily Stock Register)"
  ];
  
  const purchaseSubModules = [
    "Material Requisitions",
    "Purchase Requisitions",
    "Enquiries to Supplier",
    "Purchase Order with Purchase Requisition reference",
    "Purchase Order Direct",
    "Goods Receipt Note",
    "Goods Quality Checking",
    "Purchase Challan Entry",
    "Approval of Freight Payment to Transporter",
    "Purchase Invoice Entry",
    "Pending Purchase Invoice Report",
    "Purchase Register",
    "Basic Rate and Freight Comparison",
    "Supplier wise Rate Comparison with Chart",
    "Transporter wise Freight Comparison with Chart",
    "Item wise Purchase Reports",
    "Date wise Purchase Reports",
    "Purchase Reports with Average Rate and Average Landing Cost"
  ];
  
  const salesSubModules = [
    "Quotations",
    "Sales Orders",
    "Delivery Schedule",
    "Order Due dates allocation",
    "Sales Order Approval (Commercial Department for Payment)",
    "Sales Order Approval (Development Depart. for Sample & Catalogues)",
    "Checking of Stock for Sales Order",
    "Dispatch Order",
    "Dispatch Order Approval after Material Loading",
    "Sales Invoicing",
    "Sales Register",
    "Automatic Calculation of MRP and Price from Price List",
    "Sales Returns Entry",
    "Basic Sale Rates Reports",
    "Salesman wise Sales Reports",
    "State, Area and City wise sales reports",
    "Vat Sales Register",
    "ER-1 Register",
    "Summery Reports with multiple unites (Box, Sq. Mt, SQ. FT etc.)",
    "Branch Transfer Reports",
    "Goods Receive at Branch Entry",
    "Salesman wise Projection and Achievement Reports",
    "Sample Requisition and sample dispatched"
  ];
  
  const outsourceSubModules = [
    "Production at Job worker details",
    "Inventory at Job worker Godown",
    "Dispatch order to the Job worker",
    "Purchase Order to Job worker"
  ];
  
  const productionSubModules = [
    "Production Requisition",
    "Production Planning",
    "Production Details",
    "Stage-wise Production Stock – Semi finish goods - WIP Reports",
    "Production Loss and Breakage Analysis",
    "Whole Production Process Mapping From (Weighing Scale – Ball Mill – Final Tank – Silo – Spray Dryer – Press – Glaze Line - Printing – Kiln –Squaring - Polishing)",
    "Stage-wise parameterized quality assurance",
    "Production Process Analysis",
    "Production Slip"
  ];
  
  const financeSubModules = [
    "Freight Payment to transporter by purchase challan reference",
    "Purchase Payment Reminder by due days for payment",
    "Purchase payment to supplier",
    "PDC Cheque Management",
    "Receipt Entry by Marketing & Debtors information",
    "Bank Statement Entry",
    "Automation Receipt Confirmation between bank statement and receipt information of sales & marketing department",
    "Receipt Confirmation Statement by Confirmation Date and Receipt Date",
    "Credit note Direct",
    "Credit note by Sales Reference",
    "Credit note by complain reference",
    "Credit note approval systems with multiple stages Commercial department approval CEO department Approval Account department Approval",
    "Credit note reports (Branch wise and reason wise)",
    "Debit note Entry",
    "Debit note reports (Branch wise and reason wise)",
    "Item wise Profitability",
    "Profit and Loss Account",
    "Balance Sheet"
  ];
  
  const marketingSubModules = [
    "Stock Availability Report by: A = At Go down Stock B = Confirmed order Stock C = At Loading Stock Available stock (A-B-C)",
    "Sales Orders Evaluation",
    "Sample Requisition Reports",
    "State, Area, party wise Sales",
    "State, Area, party wise Sample Distribution",
    "Party Price list and Area wise MRP list Available",
    "Landing cost calculation"
  ];
  
  const crmSubModules = [
    "Single window solutions",
    "Sales order status by sales order no.",
    "Dispatch order status by dispatch order no",
    "Sales invoice status by sales invoice no.",
    "Credit note status by credit note no.",
    "Payment details",
    "Complain Entry",
    "Complain status by complain No."
  ];
  
  const hrPayrollSubModules = [
    "Employee Salary with Auto Calculation, Salary Slip",
    "TDS, PF direct Deduction",
    "Employee Expense management",
    "Employee Attendance System",
    "Employee Recruitment System",
    "Leave Management System",
    "Appraisal Analysis system",
    "Employee Work Performance Report"
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-sky-100 to-blue-500 fade-in">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-opacity duration-500">
                  {currentHeroIndex === 0 && (
                    <>
                      Streamline Your <span className="text-blue-900">Manufacturing</span> <span className="text-red-600">Operations</span> with <span className="text-red-600">SavioERP</span>
                    </>
                  )}
                  {currentHeroIndex === 1 && (
                    <>
                      Optimize Your <span className="text-blue-900">Business</span> <span className="text-red-600">Processes</span> Today
                    </>
                  )}
                  {currentHeroIndex === 2 && (
                    <>
                      Transform Your <span className="text-blue-900">Manufacturing</span> <span className="text-red-600">Workflow</span>
                    </>
                  )}
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl transition-opacity duration-500">
                  {heroData[currentHeroIndex].subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/contact" 
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg flex items-center justify-center transition duration-300 w-full sm:w-auto"
                  >
                    Book a Demo
                    <ArrowRight className="ml-2" size={20} />
                  </a>
                  <a 
                    href="/savio-erp" 
                    className="bg-white hover:bg-gray-100 text-blue-900 font-semibold py-3 px-8 rounded-lg border border-blue-200 flex items-center justify-center transition duration-300 w-full sm:w-auto"
                  >
                    Explore Modules
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                <div className="w-full h-64 sm:h-80 md:h-96 flex items-center justify-center">
                  {currentHeroIndex === 0 && (
                    <img 
                      src="https://res.cloudinary.com/dsddldquo/image/upload/v1767635517/iib4liz25ydzftu00itc.png" 
                      alt="Professional ERP/Mfg Visual" 
                      width={600} 
                      height={400}
                      className="w-full h-full object-contain rounded"
                    />
                  )}
                  {currentHeroIndex === 1 && (
                    <img 
                      src="https://res.cloudinary.com/dsddldquo/image/upload/v1767635194/ii4essfhugrcrr6tmbas.png" 
                      alt="Business Process Optimization" 
                      width={600} 
                      height={400}
                      className="w-full h-full object-contain rounded"
                    />
                  )}
                  {currentHeroIndex === 2 && (
                    <img 
                      src="https://res.cloudinary.com/dsddldquo/image/upload/v1767635386/hc4xxnasn4quwaoznhcq.png" 
                      alt="Manufacturing Workflow" 
                      width={600} 
                      height={400}
                      className="w-full h-full object-contain rounded"
                    />
                  )}
                  {currentHeroIndex !== 0 && currentHeroIndex !== 1 && currentHeroIndex !== 2 && (
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 sm:h-80 md:h-96 flex items-center justify-center text-gray-500">
                      {heroData[currentHeroIndex].imageAlt}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Hero Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {heroData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHeroIndex(index)}
                  className={`w-3 h-3 rounded-full ${currentHeroIndex === index ? 'bg-red-600' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Module Details Popup */}
        <ModuleDetailsPopup 
          isOpen={isPopupOpen}
          onClose={closePopup}
          moduleName={popupModule}
          subModules={popupSubModules}
        />
        
        {/* About Us */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-sky-100 to-blue-500 fade-in">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <img 
                  src="https://res.cloudinary.com/dsddldquo/image/upload/v1767435663/ukuj2te5stticd7x19hq.png" 
                  alt="About Us Visual" 
                  width={600} 
                  height={400}
                  className="w-full h-64 sm:h-80 md:h-96 object-contain bg-white rounded"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">About <span className="text-red-600">SavioERP</span></h2>
                <p className="text-lg text-gray-700 mb-6">
                  Founded with a vision to transform manufacturing operations, SavioERP has been at the forefront of ERP solutions for over 15 years. We specialize in providing comprehensive ERP solutions tailored specifically for manufacturing enterprises.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our team of experts brings together decades of experience in manufacturing processes, technology innovation, and business optimization to deliver solutions that drive real results.
                </p>
                <div className="flex items-center mt-8">
                  <div className="flex-shrink-0 mr-4">
                    <img 
                      src="https://res.cloudinary.com/dsddldquo/image/upload/v1767368260/fl6dqvp39ricgu5u1pyi.png" 
                      alt="Anand Patel, Managing Director" 
                      width={64} 
                      height={64}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 text-lg">Anand Patel</h4>
                    <p className="text-gray-600">Managing Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Businesses Need SavioERP */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-sky-100 to-blue-500 fade-in">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Why Businesses Need <span className="text-red-600">SavioERP</span>
              </h2>
              <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Discover how our ERP solution addresses the unique challenges of manufacturing businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover-lift transition-all">
                <div className="text-red-600 mb-4">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767430532/vo5kyrcvi7f1w4t9rrml.png" 
                    alt="Streamlined Operations" 
                    width={48} 
                    height={48}
                    className="h-12 w-12 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Streamlined Operations</h3>
                <p className="text-gray-700">
                  Integrate all business processes into a single platform to eliminate data silos and streamline operations.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover-lift transition-all">
                <div className="text-red-600 mb-4">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767430446/injxofbpykuwxppal6wn.png" 
                    alt="Enhanced Efficiency" 
                    width={48} 
                    height={48}
                    className="h-12 w-12 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Enhanced Efficiency</h3>
                <p className="text-gray-700">
                  Automate repetitive tasks and gain real-time visibility into your operations to boost productivity.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover-lift transition-all">
                <div className="text-red-600 mb-4">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767430447/brc8la92jcagkoqwdm35.png" 
                    alt="Improved Compliance" 
                    width={48} 
                    height={48}
                    className="h-12 w-12 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Improved Compliance</h3>
                <p className="text-gray-700">
                  Ensure regulatory compliance with automated reporting and comprehensive audit trails.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover-lift transition-all">
                <div className="text-red-600 mb-4">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767430447/bkyjcox6uwfoc4nk2ayw.png" 
                    alt="Data-Driven Decisions" 
                    width={48} 
                    height={48}
                    className="h-12 w-12 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Data-Driven Decisions</h3>
                <p className="text-gray-700">
                  Access real-time analytics and insights to make informed decisions that drive growth.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover-lift transition-all">
                <div className="text-red-600 mb-4">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767430447/sbn6j22xf3mjsbwwbgaa.png" 
                    alt="Scalable Growth" 
                    width={48} 
                    height={48}
                    className="h-12 w-12 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Scalable Growth</h3>
                <p className="text-gray-700">
                  Scale your operations efficiently with a flexible platform that grows with your business.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover-lift transition-all">
                <div className="text-red-600 mb-4">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767430446/cwpcsjt0h9mr2h2ycvvn.png" 
                    alt="Cost Optimization" 
                    width={48} 
                    height={48}
                    className="h-12 w-12 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Cost Optimization</h3>
                <p className="text-gray-700">
                  Reduce operational costs through improved efficiency and resource management.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Vision, Mission & Philosophy */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-sky-100 to-blue-500 fade-in">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Our <span className="text-red-600">Vision, Mission & Philosophy</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Driving innovation and excellence in manufacturing through technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className="flex justify-center mb-4">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767431706/vl7zlbys8ssvefy3tqnm.png" 
                    alt="Our Vision" 
                    width={64} 
                    height={64}
                    className="w-16 h-16 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be the global leader in manufacturing ERP solutions, empowering enterprises to achieve operational excellence and sustainable growth through innovative technology and best-in-class service.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className="flex justify-center mb-4">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767431707/yss434dubcjg2ppmd8jg.png" 
                    alt="Our Mission" 
                    width={64} 
                    height={64}
                    className="w-16 h-16 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To deliver comprehensive, scalable ERP solutions that streamline manufacturing processes, enhance productivity, ensure compliance, and drive profitability for our clients worldwide.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className="flex justify-center mb-4">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767431706/ihst7cbvaka7lsghzkt6.png" 
                    alt="Our Philosophy" 
                    width={64} 
                    height={64}
                    className="w-16 h-16 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Philosophy</h3>
                <p className="text-gray-700">
                  We believe in partnering with our clients to drive sustainable growth through innovation, transparency, and commitment to excellence in everything we do.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center p-6">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767432330/tvqwznfkhumfcoy6csgo.png" 
                    alt="Innovation" 
                    width={64} 
                    height={64}
                    className="w-16 h-16 mx-auto mb-4 object-contain bg-white rounded"
                  />
                  <h4 className="text-xl font-bold text-blue-900 mb-3">Innovation</h4>
                  <p className="text-gray-700">
                    We continuously innovate to provide cutting-edge solutions that meet evolving business needs.
                  </p>
                </div>
                
                <div className="text-center p-6">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767432331/pg3l6exl0wkdc0dyyct8.png" 
                    alt="Excellence" 
                    width={64} 
                    height={64}
                    className="w-16 h-16 mx-auto mb-4 object-contain bg-white rounded"
                  />
                  <h4 className="text-xl font-bold text-blue-900 mb-3">Excellence</h4>
                  <p className="text-gray-700">
                    We maintain the highest standards in our products, services, and customer relationships.
                  </p>
                </div>
                
                <div className="text-center p-6">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767432330/qzthqcyfoexhq5bnxnhr.png" 
                    alt="Integrity" 
                    width={64} 
                    height={64}
                    className="w-16 h-16 mx-auto mb-4 object-contain bg-white rounded"
                  />
                  <h4 className="text-xl font-bold text-blue-900 mb-3">Integrity</h4>
                  <p className="text-gray-700">
                    We build trust through transparency, honesty, and ethical business practices.
                  </p>
                </div>
                
                <div className="text-center p-6">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767432330/ry7cfmnlldyqs88zxxx2.png" 
                    alt="Partnership" 
                    width={64} 
                    height={64}
                    className="w-16 h-16 mx-auto mb-4 object-contain bg-white rounded"
                  />
                  <h4 className="text-xl font-bold text-blue-900 mb-3">Partnership</h4>
                  <p className="text-gray-700">
                    We work as an extension of your team to achieve your business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Modules */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-sky-100 to-blue-500 fade-in">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Our <span className="text-red-600">Modules</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Comprehensive ERP solution with 9 specialized modules for manufacturing enterprises
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div 
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover-lift transition-all"
                onClick={() => openPopup('Inventory Module', inventorySubModules)}
              >
                <div className="text-blue-600 mb-4">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767433040/llwejjfotvc9heeodlav.png" 
                    alt="Inventory Module" 
                    width={48} 
                    height={48}
                    className="h-12 w-12 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Inventory Module</h3>
                <p className="text-gray-700">
                  Real-time visibility into inventory levels, movements, and optimization across multiple locations.
                </p>
              </div>
              
              <div 
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover-lift transition-all"
                onClick={() => openPopup('Purchase Module', purchaseSubModules)}
              >
                <div className="text-blue-600 mb-4">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767433037/rquzan2u0wq3asikpgkq.png" 
                    alt="Purchase Module" 
                    width={48} 
                    height={48}
                    className="h-12 w-12 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Purchase Module</h3>
                <p className="text-gray-700">
                  Complete procurement management from requisition to vendor payment processing.
                </p>
              </div>
              
              <div 
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover-lift transition-all"
                onClick={() => openPopup('Sales Module', salesSubModules)}
              >
                <div className="text-blue-600 mb-4">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767433037/zj4ztuhjfghkarsd91oi.png" 
                    alt="Sales Module" 
                    width={48} 
                    height={48}
                    className="h-12 w-12 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Sales Module</h3>
                <p className="text-gray-700">
                  End-to-end supply chain management from order processing to distribution and delivery.
                </p>
              </div>
              
              <div 
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover-lift transition-all"
                onClick={() => openPopup('Outsource & Job Work Module', outsourceSubModules)}
              >
                <div className="text-blue-600 mb-4">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767433036/zcbj2fguq3hfb3tg0gw5.png" 
                    alt="Outsource & Job Work Module" 
                    width={48} 
                    height={48}
                    className="h-12 w-12 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Outsource & Job Work</h3>
                <p className="text-gray-700">
                  Manage external vendors and subcontractors for specialized manufacturing processes.
                </p>
              </div>
              
              <div 
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover-lift transition-all"
                onClick={() => openPopup('Production Module', productionSubModules)}
              >
                <div className="text-blue-600 mb-4">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767433272/k6vfqkztizyej25ebb4i.png" 
                    alt="Production Module" 
                    width={48} 
                    height={48}
                    className="h-12 w-12 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Production Module</h3>
                <p className="text-gray-700">
                  Streamline production planning, scheduling, and quality control for manufacturing processes.
                </p>
              </div>
              
              <div 
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover-lift transition-all"
                onClick={() => openPopup('Finance Module', financeSubModules)}
              >
                <div className="text-blue-600 mb-4">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767433037/oqnpu4djwuc0dm2f0js3.png" 
                    alt="Finance Module" 
                    width={48} 
                    height={48}
                    className="h-12 w-12 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Finance Module</h3>
                <p className="text-gray-700">
                  Complete financial management including general ledger, accounts payable/receivable, and reporting.
                </p>
              </div>
              
              <div 
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover-lift transition-all"
                onClick={() => openPopup('Marketing Module', marketingSubModules)}
              >
                <div className="text-blue-600 mb-4">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767433037/evince0ivnsilgayzrbe.png" 
                    alt="Marketing Module" 
                    width={48} 
                    height={48}
                    className="h-12 w-12 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Marketing Module</h3>
                <p className="text-gray-700">
                  Campaign management, lead generation, and market analysis tools.
                </p>
              </div>
              
              <div 
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover-lift transition-all"
                onClick={() => openPopup('CRM Module', crmSubModules)}
              >
                <div className="text-blue-600 mb-4">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767433037/clpbcr6zeunlpj5qtwje.png" 
                    alt="CRM Module" 
                    width={48} 
                    height={48}
                    className="h-12 w-12 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">CRM Module</h3>
                <p className="text-gray-700">
                  Customer relationship management for sales, support, and retention.
                </p>
              </div>
              
              <div 
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover-lift transition-all"
                onClick={() => openPopup('HR & Payroll Module', hrPayrollSubModules)}
              >
                <div className="text-blue-600 mb-4">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767433037/tnxjmm2a2wkos9mraw8u.png" 
                    alt="HR & Payroll Module" 
                    width={48} 
                    height={48}
                    className="h-12 w-12 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">HR & Payroll Module</h3>
                <p className="text-gray-700">
                  Human resource management including employee records, attendance, and payroll processing.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Trusted Clientele */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-sky-100 to-blue-500 fade-in">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Our <span className="text-red-600">Trusted Clientele</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Leading manufacturers trust us to power their operations
              </p>
            </div>
            
            <div className="relative overflow-hidden py-8">
              <div className="flex animate-scroll whitespace-nowrap justify-around">
                <div className="mx-8 flex items-center justify-center">
                  <div className="text-gray-500 font-bold text-lg">Company Logo</div>
                </div>
                <div className="mx-8 flex items-center justify-center">
                  <div className="text-gray-500 font-bold text-lg">Company Logo</div>
                </div>
                <div className="mx-8 flex items-center justify-center">
                  <div className="text-gray-500 font-bold text-lg">Company Logo</div>
                </div>
                <div className="mx-8 flex items-center justify-center">
                  <div className="text-gray-500 font-bold text-lg">Company Logo</div>
                </div>
                <div className="mx-8 flex items-center justify-center">
                  <div className="text-gray-500 font-bold text-lg">Company Logo</div>
                </div>
                <div className="mx-8 flex items-center justify-center">
                  <div className="text-gray-500 font-bold text-lg">Company Logo</div>
                </div>
                <div className="mx-8 flex items-center justify-center">
                  <div className="text-gray-500 font-bold text-lg">Company Logo</div>
                </div>
                <div className="mx-8 flex items-center justify-center">
                  <div className="text-gray-500 font-bold text-lg">Company Logo</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Client Testimonials */}
        <section className="py-16 md:py-24 bg-gray-50 fade-in">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                What Our <span className="text-red-600">Clients Say</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                Real results from businesses that transformed their operations with SavioERP
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover-lift transition-all">
                <div className="text-gray-600 mb-4">
                  <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="text-gray-700 mb-6">
                  "After implementing SavioERP, our inventory discrepancies dropped by 32% and reporting time was reduced from hours to minutes. The system brought much-needed clarity across departments."
                </p>
                <div className="flex items-center">
                  <div className="text-blue-600 mr-4 flex-shrink-0">
                    <User className="h-10 w-10" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">Michael Chen</h4>
                    <p className="text-gray-600 text-sm">Supply Chain Manager, AutoParts Global</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover-lift transition-all">
                <div className="text-gray-600 mb-4">
                  <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="text-gray-700 mb-6">
                  "SavioERP streamlined our production planning process, cutting planning time by 60% and reducing material waste by 18%. The real-time visibility across our facilities is game-changing."
                </p>
                <div className="flex items-center">
                  <div className="text-blue-600 mr-4 flex-shrink-0">
                    <User className="h-10 w-10" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">Sarah Johnson</h4>
                    <p className="text-gray-600 text-sm">Operations Director, TechManufacturing Inc.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover-lift transition-all">
                <div className="text-gray-600 mb-4">
                  <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="text-gray-700 mb-6">
                  "Our compliance reporting is now automated and error-free, saving our team 15 hours per week. The system's accuracy helped us pass our audit with zero findings."
                </p>
                <div className="flex items-center">
                  <div className="text-blue-600 mr-4 flex-shrink-0">
                    <User className="h-10 w-10" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">David Rodriguez</h4>
                    <p className="text-gray-600 text-sm">Quality Manager, PharmaSolutions Ltd.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
        
        {/* Why Choose SavioERP */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-sky-500 to-blue-900 text-white fade-in">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose <span className="text-red-400">SavioERP</span>
              </h2>
              <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                Our enterprise-grade ERP solution offers unique advantages for manufacturing businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover-lift transition-all">
                <div className="text-red-400 mb-4">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767433809/nix3nzvzqo3lgs5b33np.png" 
                    alt="ERP Expertise" 
                    width={48} 
                    height={48}
                    className="h-12 w-12 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">ERP Expertise</h3>
                <p className="text-blue-100">
                  15+ years of experience in manufacturing ERP solutions with deep industry knowledge and best practices.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover-lift transition-all">
                <div className="text-red-400 mb-4">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767433809/mmtmd46yjjjzhhq4myan.png" 
                    alt="Customer-Centric Approach" 
                    width={48} 
                    height={48}
                    className="h-12 w-12 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Customer-Centric Approach</h3>
                <p className="text-blue-100">
                  Dedicated customer success teams that work with you from implementation through long-term optimization.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover-lift transition-all">
                <div className="text-red-400 mb-4">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767433810/zu0sm1pgle1hfkuqdtn9.png" 
                    alt="Global Trust" 
                    width={48} 
                    height={48}
                    className="h-12 w-12 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Global Trust</h3>
                <p className="text-blue-100">
                  Trusted by 500+ enterprises across 25+ countries, with 98% customer retention rate.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
