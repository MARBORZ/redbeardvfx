export interface IProject {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  width?: number;
}

export interface ISkill {
  id: string;
  name: string;
  title: string;
  description: string;
}

export interface IClient {
  id: string;
  name: string;
  logo: string;
}

export const projects: IProject[] = [
  {
    id: 'dragon',
    title: 'Dragon Sequence',
    description: 'Epic dragon sequence for fantasy blockbuster',
    image: 'https://picsum.photos/seed/dragon/800/500',
    tags: ['VFX', 'CGI', '3D'],
    width: 2,
  },
  {
    id: 'city-destruction',
    title: 'City Destruction',
    description: 'Large-scale destruction sequence compositing',
    image: 'https://picsum.photos/seed/city/800/500',
    tags: ['Compositing', 'FX', 'Nuke'],
    width: 2,
  },
  {
    id: 'alien-invasion',
    title: 'Alien Invasion',
    description: 'Creature design and invasion sequence integration',
    image: 'https://picsum.photos/seed/alien/800/500',
    tags: ['VFX', 'Creature', 'Compositing'],
    width: 2,
  },
  {
    id: 'space-battle',
    title: 'Space Battle',
    description: 'Zero-G combat sequences and space elements',
    image: 'https://picsum.photos/seed/space/800/500',
    tags: ['VFX', 'Space', 'Animation'],
    width: 1,
  },
  {
    id: 'underwater-world',
    title: 'Underwater World',
    description: 'Immersive underwater environment design',
    image: 'https://picsum.photos/seed/ocean/800/500',
    tags: ['Environment', '3D', 'Water'],
    width: 1,
  },
  {
    id: 'mech-warrior',
    title: 'Mech Warrior',
    description: 'Giant mech design and integration',
    image: 'https://picsum.photos/seed/robot/800/500',
    tags: ['CGI', '3D', 'Robot'],
  },
  {
    id: 'cybernetic-uprising',
    title: 'Cybernetic Uprising',
    description: 'Full-scale robotic uprising sequence with crowd simulation',
    image: 'https://picsum.photos/seed/cyber/800/500',
    tags: ['VFX', 'Simulation', '3D'],
    width: 2,
  },
  {
    id: 'arctic-collapse',
    title: 'Arctic Collapse',
    description: 'Glacial collapse environment and ice fracture effects',
    image: 'https://picsum.photos/seed/arctic/800/500',
    tags: ['Environment', 'FX', 'Houdini'],
    width: 2,
  },
];

export const skills: ISkill[] = [
  {
    id: 'compositing',
    name: 'Compositing',
    title: 'Visual Effects & Compositing',
    description: 'Seamless integration of CGI, live-action plates, and digital effects using Nuke, After Effects, and Fusion.',
  },
  {
    id: '3d',
    name: '3D',
    title: 'Modeling, Animation & Rendering',
    description: 'Building and animating 3D assets and environments with Blender, 3ds Max, Maya, Cinema 4D, and ZBrush.',
  },
  {
    id: 'tracking',
    name: 'Tracking',
    title: 'Camera Tracking & MatchMoving',
    description: 'Precise camera and object tracking for realistic 3D integration using 3DEqualizer, SynthEyes, PFTrack, and Blender.',
  },
];

export const clients: IClient[] = [
  { id: 'paramount', name: 'Paramount', logo: '/images/clients/paramount.svg' },
  { id: 'netflix', name: 'Netflix', logo: '/images/clients/netflix.svg' },
  { id: 'warner-bros', name: 'Warner Bros', logo: '/images/clients/warner-bros.svg' },
  { id: 'universal', name: 'Universal', logo: '/images/clients/universal.svg' },
  { id: 'disney', name: 'Disney', logo: '/images/clients/disney.svg' },
  { id: 'hbo', name: 'HBO', logo: '/images/clients/hbo.svg' },
];

export const bio = `Rustam Masuev is a seasoned VFX Supervisor and Compositing Artist with over 15 years of experience in the entertainment industry. Specializing in high-end compositing, 3D integration, and visual effects supervision, Rustam has contributed to numerous award-winning films and TV series.

His expertise spans the complete VFX pipeline, from initial concept through final delivery, with a particular focus on complex compositing work and photorealistic integration of CGI elements. Known for problem-solving abilities and attention to detail, Rustam collaborates effectively with departments across the production pipeline.`;

export const socials = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/redbeardvfx', icon: 'linkedin' },
  { name: 'IMDb', url: 'https://imdb.com/name/redbeardvfx', icon: 'imdb' },
  { name: 'ArtStation', url: 'https://artstation.com/redbeardvfx', icon: 'artstation' },
  { name: 'Instagram', url: 'https://instagram.com/redbeardvfx', icon: 'instagram' },
];

export const heroSocials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rustam-masuev-82728696/', icon: '/socials/linkedin.svg' },
  { name: 'ArtStation', url: 'https://borzr.artstation.com/', icon: '/socials/artstation.svg' },
  { name: 'Instagram', url: 'https://www.instagram.com/redbeardvfx/', icon: '/socials/instagram.svg' },
  { name: 'Email', url: 'mailto:rustammasuev@gmail.com', icon: '/socials/email.svg' },
];
