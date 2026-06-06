const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const projectImages = [
  {
    name: 'daily-visiting-app',
    title: 'Daily Visiting App',
    description: 'iOS Service Platform',
    colors: { primary: '#4a90e2', secondary: '#50c878', bg: '#0f1419' },
    icon: 'PIN'
  },
  {
    name: 'service-booking',
    title: 'Service Booking',
    description: 'Web Platform',
    colors: { primary: '#a370f0', secondary: '#ff6b9d', bg: '#1a0f2e' },
    icon: 'WEB'
  },
  {
    name: 'hospital-management',
    title: 'Hospital System',
    description: 'Desktop Application',
    colors: { primary: '#00d084', secondary: '#ff6b6b', bg: '#0f1a15' },
    icon: 'MED'
  },
  {
    name: 'library-system',
    title: 'Library System',
    description: 'Windows Forms App',
    colors: { primary: '#ff9500', secondary: '#ffd700', bg: '#1a1410' },
    icon: 'LIB'
  },
  {
    name: 'cpu-scheduling',
    title: 'CPU Scheduler',
    description: 'OS Simulator',
    colors: { primary: '#00d4ff', secondary: '#ff6b00', bg: '#0f1419' },
    icon: 'CPU'
  },
  {
    name: 'study-assistant',
    title: 'Study Assistant',
    description: 'Mobile App',
    colors: { primary: '#b347f4', secondary: '#ff1493', bg: '#1a0f2e' },
    icon: 'APP'
  }
];

const publicDir = path.join(__dirname, 'public', 'projects');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

async function generateImage(project) {
  const width = 500;
  const height = 300;
  
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1-${project.name}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${project.colors.primary};stop-opacity:0.9" />
          <stop offset="100%" style="stop-color:${project.colors.secondary};stop-opacity:0.6" />
        </linearGradient>
        <linearGradient id="grad2-${project.name}" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:${project.colors.primary};stop-opacity:0.4" />
          <stop offset="100%" style="stop-color:${project.colors.secondary};stop-opacity:0.2" />
        </linearGradient>
      </defs>
      
      <!-- Dark Background -->
      <rect width="${width}" height="${height}" fill="${project.colors.bg}"/>
      
      <!-- Top gradient bar -->
      <rect x="0" y="0" width="${width}" height="120" fill="url(#grad1-${project.name})"/>
      
      <!-- Bottom pattern section -->
      <rect x="0" y="120" width="${width}" height="${height - 120}" fill="url(#grad2-${project.name})"/>
      
      <!-- Decorative circles for depth -->
      <circle cx="50" cy="50" r="40" fill="${project.colors.primary}" opacity="0.15"/>
      <circle cx="${width - 60}" cy="${height - 60}" r="50" fill="${project.colors.secondary}" opacity="0.1"/>
      <circle cx="${width / 2}" cy="150" r="35" fill="${project.colors.secondary}" opacity="0.08"/>
      
      <!-- Grid pattern for tech feel -->
      <g stroke="${project.colors.primary}" stroke-width="1" opacity="0.1">
        <line x1="0" y1="180" x2="${width}" y2="180"/>
        <line x1="0" y1="220" x2="${width}" y2="220"/>
        <line x1="0" y1="260" x2="${width}" y2="260"/>
      </g>
      
      <!-- Top section with icon -->
      <rect x="20" y="20" width="100" height="100" rx="10" fill="rgba(255,255,255,0.05)" stroke="${project.colors.primary}" stroke-width="2"/>
      <text x="70" y="75" font-size="32" font-weight="bold" text-anchor="middle" fill="${project.colors.primary}" font-family="Arial, sans-serif">
        ${project.icon}
      </text>
      
      <!-- Title -->
      <text x="140" y="50" font-size="28" font-weight="bold" fill="white" font-family="Arial, sans-serif">
        ${project.title}
      </text>
      
      <!-- Subtitle -->
      <text x="140" y="85" font-size="14" fill="${project.colors.secondary}" font-family="Arial, sans-serif">
        ${project.description}
      </text>
      
      <!-- Bottom info boxes -->
      <g>
        <!-- Box 1 -->
        <rect x="20" y="180" width="140" height="80" rx="8" fill="rgba(255,255,255,0.03)" stroke="${project.colors.primary}" stroke-width="1.5" opacity="0.5"/>
        <text x="30" y="205" font-size="11" fill="${project.colors.primary}" font-family="Arial" font-weight="bold">FEATURES</text>
        <line x1="30" y1="215" x2="150" y2="215" stroke="${project.colors.primary}" stroke-width="1" opacity="0.3"/>
        <text x="30" y="230" font-size="10" fill="rgba(255,255,255,0.7)" font-family="Arial">✓ Full Stack</text>
        <text x="30" y="245" font-size="10" fill="rgba(255,255,255,0.7)" font-family="Arial">✓ Production Ready</text>
        
        <!-- Box 2 -->
        <rect x="180" y="180" width="140" height="80" rx="8" fill="rgba(255,255,255,0.03)" stroke="${project.colors.secondary}" stroke-width="1.5" opacity="0.5"/>
        <text x="190" y="205" font-size="11" fill="${project.colors.secondary}" font-family="Arial" font-weight="bold">STATUS</text>
        <line x1="190" y1="215" x2="310" y2="215" stroke="${project.colors.secondary}" stroke-width="1" opacity="0.3"/>
        <text x="190" y="230" font-size="10" fill="rgba(255,255,255,0.7)" font-family="Arial">✓ Completed</text>
        <text x="190" y="245" font-size="10" fill="rgba(255,255,255,0.7)" font-family="Arial">✓ Live Demo</text>
        
        <!-- Box 3 -->
        <rect x="340" y="180" width="140" height="80" rx="8" fill="rgba(255,255,255,0.03)" stroke="${project.colors.primary}" stroke-width="1.5" opacity="0.5"/>
        <text x="350" y="205" font-size="11" fill="${project.colors.primary}" font-family="Arial" font-weight="bold">TYPE</text>
        <line x1="350" y1="215" x2="470" y2="215" stroke="${project.colors.primary}" stroke-width="1" opacity="0.3"/>
        <text x="350" y="230" font-size="10" fill="rgba(255,255,255,0.7)" font-family="Arial">✓ Enterprise</text>
        <text x="350" y="245" font-size="10" fill="rgba(255,255,255,0.7)" font-family="Arial">✓ Scalable</text>
      </g>
    </svg>
  `;
  
  const imagePath = path.join(publicDir, `${project.name}.png`);
  
  try {
    await sharp(Buffer.from(svg)).png().toFile(imagePath);
    console.log(`✓ Generated ${project.name}.png`);
  } catch (error) {
    console.error(`✗ Failed to generate ${project.name}.png:`, error.message);
  }
}

async function generateAllImages() {
  console.log('Generating project images...\n');
  for (const project of projectImages) {
    await generateImage(project);
  }
  console.log('\n✓ All images generated successfully!');
}

generateAllImages();
