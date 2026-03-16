/**
 * projects.js — Riya Sinha's project data
 *
 * HOW TO ADD YOUR PROJECT IMAGES:
 * 1. Place your screenshot/image in /public/images/
 *    e.g. /public/images/apneaview.png
 * 2. Set the `image` field to "/images/apneaview.png"
 * 3. If image is not set or fails to load, the emoji+gradient fallback is shown automatically.
 */

export const projects = [
  {
    id: 1,
    title: 'Voyage',
    subtitle: 'GenAI + Agentic System',
    description:
      'GenAI-based travel assistant using Google Gemini API to generate personalized, dynamic itineraries. Integrates LangChain-style pipelines, Hugging Face embeddings, and contextual reasoning for intent-aware recommendations. Features a conversational UI with voice input and real-time itinerary updates.',
    tags: ['GenAI', 'TomTom API', 'LangChain', 'Hugging Face', 'Agentic AI', 'Voice UI'],
    liveDemo: 'https://planwithvoyage.vercel.app',
    github: 'https://github.com/Riyasinha-01/Voyage',
    date: 'January 2025',
    image: '/images/voyage.png',  // ← place your screenshot here
    emoji: '✈️',
    color: 'from-blue-100 to-indigo-100',
    accent: 'bg-blue-100',
  },
  {
    id: 2,
    title: 'ApneaView',
    subtitle: 'Sleep Apnea Detection',
    description:
      'An AI-powered healthcare platform to detect sleep apnea using ECG signals with a custom 1D CNN model. Features real-time inference via FastAPI backend and ECG waveform visualization on React + TypeScript frontend. Includes a clinical risk calculator using health parameters (BMI, snoring, BP).',
    tags: ['Deep Learning', 'FastAPI', 'React', 'TypeScript', '1D CNN', 'Render', 'Vercel'],
    liveDemo: 'https://apneaview.vercel.app',
    github: 'https://github.com/Samrat740/Sleep-Apnea-Detection-Using-ECG-Signals',
    date: 'October 2025',
    image: '/images/apneaview.png',   // ← place your screenshot here
    emoji: '🫀',
    color: 'from-pink-100 to-rose-100',
    accent: 'bg-rose-100',
  },
  {
    id: 3,
    title: 'SeedSense',
    subtitle: 'Seed Quality Analyzer',
    description:
      'End-to-end AI application for seed quality classification using a FastAPI backend and React (TypeScript) frontend. Engineers a feature extraction pipeline using color histograms, Laplacian variance, and shape descriptors. Trained a Random Forest model for multi-class seed classification with high accuracy.',
    tags: ['Random Forest', 'FastAPI', 'React', 'TypeScript', 'Computer Vision', 'REST API'],
    liveDemo: 'https://seedsense.vercel.app',
    github: 'https://github.com/Samrat740/Crop-Seed-Quality-Analyzer-Backend',
    date: 'August 2025',
    image: '/images/seedsense.jpeg',   // ← place your screenshot here
    emoji: '🌱',
    color: 'from-green-100 to-teal-100',
    accent: 'bg-green-100',
  },
  
]