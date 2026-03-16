/**
 * achievements.js — Riya Sinha's achievements data
 * Each entry can have either `emoji` (string) OR `logo` (image URL).
 * If `logo` is set it takes priority over emoji.
 */

export const achievements = [
  {
    id: 1,
    title: '50+ LeetCode Problems Solved',
    year: '2025–2026',
    organization: 'LeetCode',
    description: 'Covering Data Structures and Algorithms including Arrays, Linked List, Stack, Queue, Hash Table, Tree, Graph.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
    logoBg: 'bg-orange-50',
    color: 'bg-orange-50 border-orange-200',
    badge: 'DSA',
  },
  {
    id: 2,
    title: 'HackIOT — Runner Up',
    year: '2023–2024',
    organization: 'Lovely Professional University',
    description: 'Secured Runner-Up position at HackIOT, a competitive IoT hackathon at LPU, demonstrating innovation in hardware-software integration.',
    emoji: '🏆',
    color: 'bg-yellow-50 border-yellow-200',
    badge: 'Hackathon',
  },
]