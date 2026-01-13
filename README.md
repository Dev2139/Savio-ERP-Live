# SavioERP - Manufacturing ERP Solution

# SavioERP - Manufacturing ERP Solution

This is a professional website built for SavioERP, a comprehensive ERP solution designed specifically for manufacturing enterprises. The website showcases the company's services, modules, and capabilities in the manufacturing ERP space.

## Overview

SavioERP is a complete Enterprise Resource Planning solution designed for mid-to-large manufacturing enterprises. The platform streamlines manufacturing processes, enhances productivity, ensures compliance, and drives profitability for clients worldwide.

## Features

- **Responsive Design**: Fully responsive layout that works across all devices
- **Interactive Modules Showcase**: Detailed information about 9 specialized ERP modules
- **Dynamic Hero Section**: Auto-scrolling carousel with key messages
- **Job Application System**: Complete career portal with resume upload functionality
- **Client Testimonials**: Real feedback from satisfied clients
- **Contact Form**: Integrated contact form with nodemailer backend
- **SEO Optimized**: Proper meta tags and structured content for search engines

## Technologies Used

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS for responsive design
- **Icons**: Lucide React for UI icons
- **Backend**: Next.js API routes
- **Email**: Nodemailer for form submissions
- **Image Hosting**: Cloudinary for optimized images
- **Deployment**: Can be deployed on Vercel or any Next.js compatible platform

## Project Structure

```
savio-live/
├── app/
│   ├── about/
│   ├── api/
│   │   ├── contact/
│   │   └── jobs/
│   ├── careers/
│   ├── clients/
│   ├── components/
│   ├── contact/
│   ├── savio-erp/
│   ├── globals.css
│   └── layout.tsx
├── lib/
└── public/
```

## Key Pages

- **Homepage (`/`)**: Main landing page with hero section, modules overview, testimonials
- **About (`/about`)**: Company information and vision
- **Modules (`/savio-erp`)**: Detailed breakdown of all ERP modules
- **Careers (`/careers`)**: Job listings with application form
- **Clients (`/clients`)**: Client showcase
- **Contact (`/contact`)**: Contact form and information

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd savio-live
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env.local` file in the root directory and add your environment variables:
```
SMTP_PASS=your_gmail_app_password
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Environment Variables

- `SMTP_PASS`: Your Gmail app password for nodemailer functionality

## API Routes

- `POST /api/contact`: Handles contact form submissions
- `POST /api/jobs`: Handles job application form submissions with resume uploads

## Key Components

- **Header**: Responsive navigation with logo and menu
- **Footer**: Contact information and links
- **ModuleDetailsPopup**: Interactive popup for module details
- **Hero Carousel**: Auto-scrolling banner with key messages

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Deployment

This application can be deployed to Vercel with a single click:

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

## Contact

For any questions or support, please contact the development team.

---

This project was built as part of an internship with SavioERP, showcasing modern web development practices and a comprehensive understanding of enterprise software solutions.

