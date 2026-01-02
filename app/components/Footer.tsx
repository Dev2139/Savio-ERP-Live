import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="https://res.cloudinary.com/dsddldquo/image/upload/v1766252828/vztkaqjmbpr5ernaekqk.png" 
                alt="SavioERP Logo" 
                width={150} 
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400">
              Enterprise Resource Planning solutions for modern manufacturing businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
              <li><Link href="/savio-erp" className="text-gray-400 hover:text-white transition">Modules</Link></li>
              <li><Link href="/clients" className="text-gray-400 hover:text-white transition">Clients</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">ERP Implementation</li>
              <li className="text-gray-400">Custom Development</li>
              <li className="text-gray-400">Training & Support</li>
              <li className="text-gray-400">Consulting</li>
              <li className="text-gray-400">Integration</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="text-gray-400 h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Samrudhdhi Business Hub, Opp. Hanspura,<br />
                  Near Naroda Business Hub, Near S.P.Ring road Circle,<br />
                  Naroda, Ahmedabad - 382330,<br />
                  Gujarat-India.
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="text-gray-400 h-5 w-5 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@savioerp.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-gray-400 h-5 w-5 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 9687276300</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} SavioERP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;