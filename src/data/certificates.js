/**
 * certificates.js — Riya Sinha's certifications
 *
 * HOW TO ADD CERTIFICATE IMAGES:
 * 1. Place your certificate screenshot/image in /public/images/certs/
 *    e.g. /public/images/certs/genai-infosys.png
 * 2. Set the `image` field to "/images/certs/genai-infosys.png"
 * 3. If image is not set or fails to load, the emoji+color fallback is shown automatically.
 */

export const certificates = [
  {
    id: 1,
    title: 'Master Generative AI & Generative AI Tools',
    platform: 'Infosys',
    date: 'August 2025',
    description: 'Comprehensive training on Generative AI concepts, tools, and real-world applications including prompt engineering and model fine-tuning.',
    image: '/images/certs/master.jpg',   // ← place your cert image here
    emoji: '🤖',
    color: 'bg-violet-100',
    link: 'https://drive.google.com/file/d/17VgIiRpnR3KFjVnbusXWG6ACwlPAAz4y/view?usp=sharing',
  },
  {
    id: 2,
    title: 'Application Development in Java',
    platform: 'LPU',
    date: 'July 2025',
    description: 'Core Java application development covering OOP principles, data structures, and enterprise-level application architecture.',
    image: '/images/certs/java.jpg',         // ← place your cert image here
    emoji: '☕',
    color: 'bg-blue-100',
    link: 'https://drive.google.com/file/d/1kttqti5F2u6mg2mipI7toEF-iuxg3Jxe/view?usp=sharing',
  },
  {
    id: 3,
    title: 'Cloud Computing',
    platform: 'NPTEL',
    date: 'April 2025',
    description: 'Rigorous NPTEL certification on cloud architectures, virtualization, distributed systems, and cloud service models.',
    image: '/images/certs/cloud.jpg',      // ← place your cert image here
    emoji: '☁️',
    color: 'bg-teal-100',
    link: 'https://drive.google.com/file/d/18wF4kb1PrfJ9t4QX7mnOH8Wp0OfJNjAN/view?usp=sharing',
  },
  {
    id: 4,
    title: '100 Days of Code: Complete Python Pro Bootcamp',
    platform: 'Udemy',
    date: 'March 2025',
    description: '100-day intensive Python course covering web development, data science, automation, and professional Python programming.',
    image: '/images/certs/udemy.jpg',     // ← place your cert image here
    emoji: '🐍',
    color: 'bg-rose-100',
    link: 'https://www.udemy.com/certificate/UC-2295ba92-5a5c-4bc3-8bb3-24c41c5e11e3/',
  },
]