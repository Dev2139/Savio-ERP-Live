'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface JobPosting {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
}

export default function CareersPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPopupOpen]);
  
  const handleJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        body: formData,
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitMessage('Application submitted successfully! We will get back to you soon.');
        form.reset();
      } else {
        setSubmitMessage(result.error || 'Failed to submit application. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Sample job postings data
  const jobPostings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Ahmedabad, India",
      type: "Full-time",
      experience: "5+ years",
      description: "We're looking for an experienced Frontend Developer to join our dynamic team. You'll be working on cutting-edge ERP solutions using React, Next.js, and modern web technologies."
    },
    {
      id: 2,
      title: "Backend Engineer",
      department: "Engineering",
      location: "Ahmedabad, India",
      type: "Full-time",
      experience: "3+ years",
      description: "Join our backend team to build scalable APIs and services for our ERP platform. Experience with Node.js, Python, or similar technologies required."
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      location: "Ahmedabad, India",
      type: "Full-time",
      experience: "2+ years",
      description: "Create beautiful and intuitive user experiences for our enterprise software. You'll work closely with our product and engineering teams."
    },
    {
      id: 4,
      title: "Sales Executive",
      department: "Sales",
      location: "Ahmedabad, India",
      type: "Full-time",
      experience: "2+ years",
      description: "Drive growth by selling our ERP solutions to manufacturing companies. We're looking for someone with B2B sales experience."
    },
    {
      id: 5,
      title: "Business Analyst",
      department: "Operations",
      location: "Ahmedabad, India",
      type: "Full-time",
      experience: "3+ years",
      description: "Analyze business requirements and translate them into technical solutions. Experience with ERP systems is a plus."
    }
  ];

  // Life at Savio images (using placeholders for now)
  const lifeAtSavioImages = [
    "https://res.cloudinary.com/dsddldquo/image/upload/v1767434891/d4xfgxvnt5iwyditsy1a.png",
    "https://res.cloudinary.com/dsddldquo/image/upload/v1767435163/zifh2kxlueffzzumrr2f.png",
    "https://res.cloudinary.com/dsddldquo/image/upload/v1767435162/kpofhgwboymyqbmnn8gz.png",
    "https://res.cloudinary.com/dsddldquo/image/upload/v1767435663/ukuj2te5stticd7x19hq.png"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Be part of a dynamic team shaping the future of manufacturing ERP solutions
            </p>
          </div>
        </section>

        {/* Life at Savio Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Life at <span className="text-red-600">Savio</span></h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Discover what makes our workplace special and how we foster innovation and growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {lifeAtSavioImages.map((img, index) => (
                <div key={index} className="overflow-hidden rounded-xl shadow-sm border border-gray-200">
                  <img 
                    src={img}
                    alt={`Life at Savio - Image ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767629773/zdumjdzcr14wirvsdyzj.png" 
                    alt="Innovation" 
                    width={64} 
                    height={64}
                    className="w-16 h-16 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Innovation</h3>
                <p className="text-gray-700">
                  We encourage creative thinking and provide resources to experiment with new ideas that can transform manufacturing processes.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767629772/u0zn0ib8naej9ini0d5y.png" 
                    alt="Growth" 
                    width={64} 
                    height={64}
                    className="w-16 h-16 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Growth</h3>
                <p className="text-gray-700">
                  We invest in our employees' development with training programs, mentorship, and clear career advancement paths.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <img 
                    src="https://res.cloudinary.com/dsddldquo/image/upload/v1767629748/wkyeood2bgm1dmn9q5o5.png" 
                    alt="Collaboration" 
                    width={64} 
                    height={64}
                    className="w-16 h-16 object-contain bg-white rounded"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Collaboration</h3>
                <p className="text-gray-700">
                  Our team works together across departments to solve complex challenges and deliver exceptional solutions to our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-sky-100 to-blue-500">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Work With Us</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We offer competitive benefits and a supportive work environment
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Competitive Salary</h3>
                <p className="text-gray-700">
                  We offer competitive compensation packages that reflect your skills and experience.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Health Benefits</h3>
                <p className="text-gray-700">
                  Comprehensive health insurance covering medical, dental, and vision care for you and your family.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Learning Opportunities</h3>
                <p className="text-gray-700">
                  Access to conferences, training programs, and courses to advance your career.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Work-Life Balance</h3>
                <p className="text-gray-700">
                  Flexible working hours and remote work options to maintain a healthy work-life balance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Look For Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What We Look For</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We seek individuals who embody our core values and contribute to our mission
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <div className="bg-gradient-to-br from-blue-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    01
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Positive Attitude</h3>
                <p className="text-gray-700">
                  Maintain a positive attitude and follow the office culture. Embrace the core values & maintain a good team attitude.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <div className="bg-gradient-to-br from-blue-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    02
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Leadership Traits</h3>
                <p className="text-gray-700">
                  We welcome those with leadership skills to contribute to the team and explore their potential.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <div className="bg-gradient-to-br from-blue-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    03
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Excellent Team Player</h3>
                <p className="text-gray-700">
                  Good team spirit and an ability to work closely with other team members.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <div className="bg-gradient-to-br from-blue-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    04
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Learn and Grow</h3>
                <p className="text-gray-700">
                  Eager to learn further & expand their knowledge. Passion to further their career.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <div className="bg-gradient-to-br from-blue-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    05
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">High Goals</h3>
                <p className="text-gray-700">
                  People who set their goals high and make an effort to achieve them.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <div className="bg-gradient-to-br from-blue-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    06
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Self-Motivated</h3>
                <p className="text-gray-700">
                  We like self-motivated employees who have a passion for their work.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recruitment Process Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-sky-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Recruitment Process</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our structured approach to finding the right talent for our team
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-blue-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      01
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Shortlist Candidates</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Accept candidate profiles</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Screen profiles</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Evaluate & verify eligibility</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Initial HR interview</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-blue-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      02
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Practical Test</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Aptitude test</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Technical test</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Skill test (as applicable)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-blue-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      03
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Evaluation Skill Level</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Basic level</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Advanced level</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Expert level</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-blue-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      04
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">HR Round</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Company Policies</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Company Culture & Perks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Remuneration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Answer your questions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Current Openings</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Explore opportunities to grow your career with us
              </p>
            </div>
            
            <div className="space-y-6">
              {jobPostings.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-900">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-gray-600">
                        <span className="flex items-center">
                          <span className="font-medium">Department:</span> {job.department}
                        </span>
                        <span className="flex items-center">
                          <span className="font-medium">Location:</span> {job.location}
                        </span>
                        <span className="flex items-center">
                          <span className="font-medium">Type:</span> {job.type}
                        </span>
                        <span className="flex items-center">
                          <span className="font-medium">Experience:</span> {job.experience}
                        </span>
                      </div>
                      <p className="mt-4 text-gray-700">{job.description}</p>
                    </div>
                    <button 
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 whitespace-nowrap"
                      onClick={() => {
                        setSelectedJob(job);
                        setIsPopupOpen(true);
                      }}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex-1 mb-4 md:mb-0 md:mr-4">
                  <p className="text-gray-700 font-bold text-lg mb-2">Just Talk to us once, Satisfaction is Guaranteed!!</p>
                  <p className="text-gray-700">
                    As we always need 2nd openion in Medical, but now a days the same situation in IT world also, If you want to save your money talk to us once. So lets talk to us via Chat, Our average reply time is 45 Seconds only...
                  </p>
                </div>
                <a 
                  href="/contact" 
                  className="inline-block bg-white text-red-600 border border-red-600 hover:bg-red-50 font-semibold py-3 px-8 rounded-lg transition duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Job Application Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur z-50 p-4">
          <div className="flex items-center justify-center min-h-full">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-2/3 flex flex-col max-h-[80vh]">
                <div className="flex justify-between items-center mb-4 p-6">
                  <h3 className="text-2xl font-bold text-blue-900">Apply for Position</h3>
                  <button 
                    onClick={() => setIsPopupOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-6 pt-0">
                  <h4 className="text-xl font-semibold text-blue-800 mb-4">{selectedJob?.title}</h4>
                  
                  {submitMessage && (
                    <div className={`mb-4 p-3 rounded-lg ${submitMessage.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {submitMessage}
                    </div>
                  )}
                  
                  <form onSubmit={handleJobSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">Candidate Name *</label>
                      <input 
                        type="text" 
                        name="candidateName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">Position Applied For *</label>
                      <input 
                        type="text" 
                        name="positionApplied"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={selectedJob?.title || ''}
                        readOnly
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">Notice Period</label>
                      <input 
                        type="text" 
                        name="noticePeriod"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., 30 days"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">Current Location</label>
                      <input 
                        type="text" 
                        name="currentLocation"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your current location"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">Current Salary</label>
                      <input 
                        type="text" 
                        name="currentSalary"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your current salary"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">Expected Salary</label>
                      <input 
                        type="text" 
                        name="expectedSalary"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your expected salary"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-1">Resume</label>
                      <input 
                        type="file" 
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                      <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max size: 5MB)</p>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">Experience Year</label>
                      <input 
                        type="text" 
                        name="experienceYear"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter years of experience"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <span>{isSubmitting ? 'Submitting...' : 'Submit Application'}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              
              <div className="w-full md:w-1/3 bg-red-50 p-6 overflow-y-auto max-h-[80vh]">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Perks & Benefits</h3>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-sm">5 Days Working</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-sm">Celebrate all festivals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-sm">Good Infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-sm">Good Work Culture</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-sm">Flexible Office Hours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-sm">Cafeteria</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-sm">Flexible Leave Policy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-sm">Vacation Leave</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-sm">Health Insurance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-sm">Award for Best Performers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-sm">Referral Bonus</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-sm">Gym Membership Assistance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}