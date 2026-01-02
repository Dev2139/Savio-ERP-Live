import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">About SavioERP</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Leading provider of ERP solutions for manufacturing enterprises since 2009
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 md:h-96 flex items-center justify-center text-gray-500">
                  About Us Visual
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At SavioERP, we're dedicated to transforming manufacturing operations through innovative ERP solutions. 
                  Our mission is to empower enterprises with the tools they need to streamline processes, improve efficiency, 
                  and achieve sustainable growth.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  With over 15 years of experience in the manufacturing sector, we understand the unique challenges 
                  that enterprises face in today's competitive landscape. Our solutions are designed specifically 
                  to address these challenges with a focus on compliance, quality, and operational excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Guiding principles that drive our commitment to excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Innovation</h3>
                <p className="text-gray-700">
                  We continuously invest in cutting-edge technology to provide our clients with the most advanced ERP solutions.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Excellence</h3>
                <p className="text-gray-700">
                  We maintain the highest standards in everything we do, from product development to customer support.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Integrity</h3>
                <p className="text-gray-700">
                  We build long-term relationships based on trust, transparency, and ethical business practices.
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