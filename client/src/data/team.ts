export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  experience: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "alex-patterson",
    name: "Alex Patterson",
    role: "Founder & Lead Installer",
    bio: "With over 20 years of experience in the flooring industry, Alex founded APS Flooring with a vision to provide exceptional craftsmanship and customer service to the New Orleans area.",
    experience: "20+ years",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "sophia-williams",
    name: "Sophia Williams",
    role: "Project Manager",
    bio: "Sophia ensures every project runs smoothly from start to finish. Her attention to detail and excellent communication skills help deliver consistently outstanding results.",
    experience: "12 years",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "michael-johnson",
    name: "Michael Johnson",
    role: "Hardwood Specialist",
    bio: "Michael's expertise in hardwood flooring is unmatched. He specializes in custom installations, intricate patterns, and refinishing techniques that bring out the natural beauty of wood.",
    experience: "15 years",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "david-rodriguez",
    name: "David Rodriguez",
    role: "Tile & Stone Expert",
    bio: "David's precision and artistry with tile and stone installations have earned him a reputation for creating stunning, durable floors that exceed client expectations.",
    experience: "10 years",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "rebecca-martinez",
    name: "Rebecca Martinez",
    role: "Customer Relations Manager",
    bio: "Rebecca ensures that every client receives personalized attention throughout their flooring project, from initial consultation to final walkthrough.",
    experience: "8 years",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    role: "Installation Team Lead",
    bio: "James leads our installation crews with precision and efficiency. His commitment to quality and attention to detail ensure flawless results on every project.",
    experience: "14 years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  }
];
