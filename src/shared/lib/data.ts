import dragonVideo from '@assets/project_demos/3dsmax.mp4';
import cityDestructionVideo from '@assets/project_demos/nuke-compos.mp4';
import alienInvasionVideo from '@assets/project_demos/mocha.mp4';
import spaceBattleVideo from '@assets/project_demos/photoshop.mp4';
import underwaterWorldVideo from '@assets/project_demos/3de4-mm.mp4';
import mechWarriorVideo from '@assets/project_demos/blender.mp4';
import cyberneticUprisingVideo from '@assets/project_demos/comfyui.mp4';
import arcticCollapseVideo from '@assets/project_demos/syntheyes.mp4';

import dragonPoster from '@assets/project_posters/3dsmax.jpg';
import cityDestructionPoster from '@assets/project_posters/nuke-compos.jpg';
import alienInvasionPoster from '@assets/project_posters/mocha.jpg';
import spaceBattlePoster from '@assets/project_posters/photoshop.jpg';
import underwaterWorldPoster from '@assets/project_posters/3de4-mm.jpg';
import mechWarriorPoster from '@assets/project_posters/blender.jpg';
import cyberneticUprisingPoster from '@assets/project_posters/comfyui.jpg';
import arcticCollapsePoster from '@assets/project_posters/syntheyes.jpg';

export interface IProject {
  id: string;
  title: string;
  description: string;
  image: string;
  video: string;
  software: string;
  icon: string;
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
  url: string;
  invert?: boolean;
}

export const projects: IProject[] = [
  {
    id: 'nuke-compositing',
    title: 'Nuke — Compositing',
    description: 'Node-based compositing of a tropical beach plate in Nuke — 3D camera projection setup, multi-layer keying and color grading.',
    image: cityDestructionPoster,
    video: cityDestructionVideo,
    software: 'Nuke',
    icon: '/images/software/nuke.svg',
    tags: ['Compositing', 'VFX', 'Grading'],
    width: 2,
  },
  {
    id: '3de4-matchmove',
    title: '3DEqualizer — Matchmove',
    description: 'Camera and object tracking in 3DEqualizer — aerial street matchmove, body tracking for a CG character, and a building facade solve.',
    image: underwaterWorldPoster,
    video: underwaterWorldVideo,
    software: '3DEqualizer',
    icon: '/images/software/3de4.svg',
    tags: ['Matchmove', 'Tracking', 'Aerial'],
    width: 1,
  },
  {
    id: 'mocha-planar-tracking',
    title: 'Mocha Pro — Planar Tracking',
    description: 'Planar tracking and sign replacement on a building facade in a period street scene, solved in Mocha Pro.',
    image: alienInvasionPoster,
    video: alienInvasionVideo,
    software: 'Mocha Pro',
    icon: '/images/software/mocha.svg',
    tags: ['Tracking', 'VFX', 'Integration'],
    width: 2,
  },
  {
    id: 'arctic-collapse',
    title: 'SynthEyes — Camera Tracking',
    description: 'Camera tracking and 3D scene reconstruction in SynthEyes — aerial hill-town footage and a period film-set plate.',
    image: arcticCollapsePoster,
    video: arcticCollapseVideo,
    software: 'SynthEyes',
    icon: '/images/software/syntheyes.svg',
    tags: ['Tracking', 'VFX', '3D Integration'],
    width: 2,
  },
  
  {
    id: '3dsmax-modeling',
    title: '3ds Max — Modeling & Rigging',
    description: 'Modeling and rigging a CG double and supporting props (boat, oars) in 3ds Max, built for integration into a water-rescue VFX shot.',
    image: dragonPoster,
    video: dragonVideo,
    software: '3ds Max',
    icon: '/images/software/3dsmax.svg',
    tags: ['3D', 'Modeling', 'Rigging'],
    width: 2,
  },
  {
    id: 'comfyui-ai-workflow',
    title: 'ComfyUI — AI Workflow',
    description: 'AI-assisted node workflow in ComfyUI — automatic mask and matte generation for a costumed character plate.',
    image: cyberneticUprisingPoster,
    video: cyberneticUprisingVideo,
    software: 'ComfyUI',
    icon: '/images/software/comfyui.svg',
    tags: ['AI', 'Compositing', 'Roto'],
    width: 2,
  },
  {
    id: 'photoshop-set-extension',
    title: 'Photoshop — Set Extension',
    description: 'Plate extension and digital paintover in Photoshop — extending the background canvas and texturing a CG double\'s skin for a water-rescue VFX shot.',
    image: spaceBattlePoster,
    video: spaceBattleVideo,
    software: 'Photoshop',
    icon: '/images/software/photoshop.svg',
    tags: ['Set Extension', '2D', 'Paintover'],
    width: 1,
  }, 
  {
    id: 'blender-lighting-render',
    title: 'Blender — Lighting & Render',
    description: 'Full scene lighting, shading and rendering of a vehicle in an urban night environment, built in Blender.',
    image: mechWarriorPoster,
    video: mechWarriorVideo,
    software: 'Blender',
    icon: '/images/software/blender.svg',
    tags: ['3D', 'Lighting', 'Rendering'],
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
    description: 'Precise camera and object tracking for realistic 3D integration using 3DEqualizer, SynthEyes, PFTrack.',
  },
];

export const clients: IClient[] = [
  { id: 'zoic', name: 'Zoic Studios', logo: '/images/clients/zoic.png', url: 'https://www.zoicstudios.com/' },
  { id: 'cgf', name: 'CGF', logo: '/images/clients/cgf.svg', url: 'https://cgfww.com/' },
  { id: 'mr-post', name: 'Mr.Post', logo: '/images/clients/mrpost.svg', url: 'https://www.mrpost.ru/ru' },
  { id: 'mosfilm', name: 'Mosfilm', logo: '/images/clients/mosfilm.png', url: 'https://www.mosfilm.ru/', invert: true },
  { id: 'direktsiya-kino', name: 'Direktsiya Kino', logo: '/images/clients/direktsiya-kino.svg', url: 'https://www.instagram.com/direktsiiakino/' },
  { id: 'cinemagrad', name: 'Cinemagrad', logo: '/images/clients/cinemagrad.png', url: 'https://cinemagrad.ru/', invert: true },
];

export const bio = `Rustam Masuev is a seasoned VFX Supervisor and Compositing Artist with over 15 years of experience in the entertainment industry. Specializing in high-end compositing, 3D integration, and visual effects supervision, Rustam has contributed to numerous award-winning films and TV series.

His expertise spans the complete VFX pipeline, from initial concept through final delivery, with a particular focus on complex compositing work and photorealistic integration of CGI elements. Known for problem-solving abilities and attention to detail, Rustam collaborates effectively with departments across the production pipeline.`;

export const heroSocials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rustam-masuev-82728696/', icon: '/socials/linkedin.svg' },
  { name: 'ArtStation', url: 'https://borzr.artstation.com/', icon: '/socials/artstation.svg' },
  { name: 'Instagram', url: 'https://www.instagram.com/redbeardvfx/', icon: '/socials/instagram.svg' },
  { name: 'Email', url: 'mailto:rustammasuev@gmail.com', icon: '/socials/email.svg' },
];
