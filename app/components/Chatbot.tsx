'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your SavioERP assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue.toLowerCase());
      const botMessage: Message = {
        id: Date.now().toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Generate bot responses based on user input
  const generateBotResponse = (userInput: string): string => {
    userInput = userInput.toLowerCase();

    // Keywords related to ERP and manufacturing
    if (userInput.includes('erp') || userInput.includes('system') || userInput.includes('software')) {
      return 'SavioERP is a comprehensive ERP solution designed specifically for manufacturing enterprises. It integrates inventory, production, finance, HR, and CRM modules to streamline operations and improve efficiency. Our system has helped 500+ enterprises across 25+ countries.';
    } else if (userInput.includes('module') || userInput.includes('modules')) {
      return 'Our ERP system includes 9 specialized modules: Inventory, Purchase, Sales, Outsource & Job Work, Production, Finance, Marketing, CRM, and HR & Payroll. Each module is designed to address specific manufacturing challenges. Which module would you like to learn more about?';
    } else if (userInput.includes('inventory')) {
      return 'Our Inventory Module provides real-time visibility into stock levels, movements, and optimization across multiple locations. Key features include material receipt, stock allocation, physical stock take, landed cost calculation, and advanced reporting. This helps reduce inventory discrepancies by up to 32%.';
    } else if (userInput.includes('purchase')) {
      return 'The Purchase Module manages the complete procurement cycle from requisitions to vendor payments. Features include purchase orders, goods receipt, quality checking, supplier comparison, and automated workflows. This reduces procurement time by up to 40%.';
    } else if (userInput.includes('sales')) {
      return 'Our Sales Module handles the entire sales cycle from quotations to invoicing. Key features include sales orders, delivery schedules, dispatch orders, invoicing, and comprehensive reporting. It provides real-time stock availability and improves order processing speed.';
    } else if (userInput.includes('production')) {
      return 'The Production Module streamlines planning, scheduling, and quality control for manufacturing processes. Features include production requisitions, stage-wise tracking, loss analysis, process mapping, and quality assurance. This can increase production efficiency by up to 25%.';
    } else if (userInput.includes('finance')) {
      return 'The Finance Module offers complete financial management with general ledger, accounts payable/receivable, automated reconciliation, and comprehensive reporting. Features include P&L statements, balance sheets, and item-wise profitability analysis.';
    } else if (userInput.includes('hr') || userInput.includes('payroll')) {
      return 'Our HR & Payroll Module manages employee lifecycle from recruitment to payroll processing. Features include attendance tracking, leave management, expense management, salary calculations with automatic deductions (PF, TDS), and performance reporting.';
    } else if (userInput.includes('crm')) {
      return 'The CRM Module centralizes customer interactions with single-window solutions for order tracking, complaint management, and communication history. It provides real-time visibility into sales order status, dispatch orders, and customer support tickets.';
    } else if (userInput.includes('job work') || userInput.includes('outsource')) {
      return 'Our Outsource & Job Work Module manages external vendors and subcontractors. Features include job work issues/returns, inventory tracking at vendor locations, and production monitoring. This ensures quality control throughout the outsourced process.';
    } else if (userInput.includes('price') || userInput.includes('cost') || userInput.includes('pricing') || userInput.includes('quote')) {
      return 'We offer competitive pricing based on your specific business needs and module requirements. For a personalized quote, please visit our Contact page or request a callback. Our solutions typically provide ROI within 6-12 months through efficiency gains.';
    } else if (userInput.includes('demo') || userInput.includes('trial') || userInput.includes('free')) {
      return 'You can book a personalized demo on our website by clicking the "Book a Demo" button. Our experts will provide a customized demonstration focusing on your specific business requirements. We also offer guided tours of our implementation process.';
    } else if (userInput.includes('support') || userInput.includes('help')) {
      return 'We provide comprehensive support including implementation assistance, training, and ongoing technical support. Our support team is available during business hours. You can reach us through our Contact page for immediate assistance.';
    } else if (userInput.includes('thank')) {
      return 'You\'re welcome! Is there anything else I can help you with regarding our ERP solution? Perhaps you\'d like to learn more about specific modules or implementation timelines?';
    } else if (userInput.includes('contact') || userInput.includes('phone') || userInput.includes('email')) {
      return 'You can contact us through our official channels. Visit our Contact page for phone numbers, email addresses, and office locations. For immediate assistance, you can also schedule a callback or send an inquiry through our website.';
    } else if (userInput.includes('hello') || userInput.includes('hi') || userInput.includes('hey') || userInput.includes('good')) {
      return 'Hello! I\'m your SavioERP assistant. I\'m here to help you learn more about our comprehensive ERP solution for manufacturing. Feel free to ask about our modules, features, implementation process, or ROI projections.';
    } else if (userInput.includes('manufacturing')) {
      return 'SavioERP specializes in manufacturing ERP solutions. Our system addresses unique challenges like production planning, inventory management, quality control, compliance tracking, and multi-location coordination. We serve various industries including automotive, pharmaceutical, engineering, and packaging.';
    } else if (userInput.includes('industries') || userInput.includes('sector') || userInput.includes('field')) {
      return 'Our ERP solution serves multiple manufacturing sectors including automotive, pharmaceutical, engineering, packaging, textiles, and food processing. Each industry has specific modules and features tailored to their unique requirements and regulatory compliance needs.';
    } else if (userInput.includes('benefit') || userInput.includes('advantage') || userInput.includes('gain')) {
      return 'SavioERP delivers significant benefits including 32% reduction in inventory discrepancies, 60% reduction in planning time, 18% reduction in material waste, and 15 hours saved per week on compliance reporting. Our system also improves inter-departmental coordination and provides real-time visibility into operations.';
    } else if (userInput.includes('implement') || userInput.includes('setup') || userInput.includes('install')) {
      return 'Our implementation process typically takes 3-6 months depending on business complexity. It includes requirement analysis, customization, data migration, staff training, and go-live support. Our dedicated implementation team ensures smooth transition with minimal business disruption.';
    } else {
      // Default responses
      const defaultResponses = [
        'SavioERP is a comprehensive solution for manufacturing enterprises. Would you like to know more about specific modules or implementation process?',
        'Our ERP system helps streamline manufacturing operations, reduce costs, and improve efficiency. What specific area of your business are you looking to optimize?',
        'We offer specialized modules for inventory, production, finance, and more. Is there a particular challenge you\'re facing in your manufacturing operations?',
        'I\'m here to help you learn about our ERP solution. Could you tell me more about your business and the challenges you\'re experiencing?',
        'SavioERP has helped 500+ enterprises optimize their operations. What industry are you in and what improvements are you seeking?'
      ];
      return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 w-80 h-[500px] flex flex-col">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-red-600 via-red-700 to-yellow-500 text-white p-4 rounded-t-xl flex justify-between items-center shadow-lg shadow-red-500/30">
            <div className="flex items-center">
              <Bot className="mr-2" size={20} />
              <h3 className="font-bold">SavioERP Assistant</h3>
            </div>
            <button 
              onClick={toggleChat}
              className="text-white hover:bg-red-800 rounded-full p-1 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          
          {/* Messages Container */}
          <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-3">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`rounded-full p-2 mr-2 ml-2 ${message.sender === 'user' ? 'bg-red-100' : 'bg-gray-200'}`}>
                      {message.sender === 'user' ? 
                        <User size={16} className="text-red-600" /> : 
                        <Bot size={16} className="text-gray-600" />
                      }
                    </div>
                    <div 
                      className={`rounded-lg px-4 py-2 ${
                        message.sender === 'user' 
                          ? 'bg-red-600 text-white rounded-tr-none' 
                          : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-red-200' : 'text-gray-500'}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex">
                  <div className="bg-gray-200 rounded-full p-2 mr-3">
                    <Bot size={16} className="text-gray-600" />
                  </div>
                  <div className="bg-gray-200 rounded-lg px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* Input Area */}
          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className={`bg-red-600 text-white px-4 py-2 rounded-r-lg flex items-center ${
                  !inputValue.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
                }`}
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Ask about ERP modules, features, or implementation
            </p>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full p-4 shadow-lg hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 flex items-center animate-pulse shadow-red-500/50"
        >
          <MessageCircle size={24} className="mr-2" />
          <span>Need Help?</span>
        </button>
      )}
    </div>
  );
};

export default Chatbot;