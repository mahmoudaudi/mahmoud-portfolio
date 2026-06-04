const portfolioData = {
  hero: {
    name: 'Mahmoud Audi',
    headline: 'Software Developer',
    subtext:
      'I build practical web and software systems, and I\'m especially interested in applying machine learning to cybersecurity datasets and real-world security problems.',
    badge: 'Open to Work',
    typedRoles: [
      'Software Developer',
      'Cyber Security Analyst',
      'Web Developer',
      'Mobile Developer'
    ],
    ctas: [
      { label: 'View Projects', href: '#projects', variant: 'primary' },
      { label: 'Contact', href: '#contact', variant: 'secondary' }
    ],
    highlights: [
      'Applied ML work grounded in Python, Jupyter, and Colab for cybersecurity datasets.',
      'Practical web and backend systems delivered with strong CS fundamentals.',
      'Learning React and Flutter to keep the frontend and mobile toolkits modern.'
    ],
    social: [
      { label: 'GitHub', href: 'https://github.com/mahmoudaudi', icon: 'github' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mahmoud-audi', icon: 'linkedin' }
    ],
    availability: 'Open to collaborative learning projects'
  },
  about: {
    title: 'About Me',
    subtitle: 'Software Developer building applied systems',
    highlights: [
      'I am a Software Developer with hands-on experience in full-stack web development and robust software projects.',
      'My work includes applied machine learning on cybersecurity datasets using Python and notebooks (Jupyter/Colab).',
      'I enjoy building practical systems, from dashboards and management tools to data-driven experiments.',
      'These efforts stay grounded in solid CS fundamentals like algorithms, data structures, and databases.',
      'I am currently learning React for modern frontend development and Flutter for mobile apps through self-study.'
    ]
  },
  skills: [
    {
      title: 'Strong',
      description: 'Core programming and backend fundamentals',
      items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Java', 'Python', 'Go']
    },
    {
      title: 'Applied ML',
      description: 'Dataset work for experimentation and analysis',
      items: [
        'Python preprocessing',
        'ML experimentation',
        'Jupyter Notebook',
        'Google Colab'
      ]
    },
    {
      title: 'IoT / Security Exposure',
      description: 'Hands-on device and network tooling',
      items: ['Arduino (C)', 'Cisco labs/tools for securing smart devices']
    },
    {
      title: 'Currently Learning',
      description: 'Growth areas',
      items: ['React', 'Flutter']
    },
    {
      title: 'Familiar / Introductory',
      description: 'Exploratory languages and paradigms',
      items: ['C', 'C++', 'C#', 'Prolog (Logic Programming)', 'Haskell (Functional Programming)']
    }
  ],
  projects: {
    featured: [
      {
        id: 'dar-al-moustafa',
        title: 'Dar Al-Moustafa Dashboard',
        stack: 'HTML/CSS/JS, PHP, MySQL',
        description: 'Built an admin dashboard to manage data and streamline internal operations.',
        links: [
          { label: 'GitHub', text: 'Private Repo', href: null },
          { label: 'Live', text: 'Internal System', href: null }
        ]
      },
      {
        id: 'lebanon-tracking',
        title: 'Lebanon Tracking Manager',
        stack: 'Go + WebView (HTML, CSS, JavaScript)',
        description: 'Built a tracking/management system with a Go backend and a web view for managing records.',
        links: [{ label: 'GitHub', text: 'Private Repo', href: null }]
      },
      {
        id: 'applied-ml-cybersecurity',
        title: 'Applied Machine Learning for Cybersecurity (Notebooks)',
        stack: 'Python, Jupyter/Colab',
        description:
          'Developed an insider-threat data leakage detection workflow on ~50K records using preprocessing, label encoding, scaling, PCA visualization, KMeans clustering (elbow method), and KNN classification, achieving 92% accuracy (Precision 0.91, Recall 0.92, F1 0.91).',
        links: [{ label: 'Notebooks/Repo', text: 'Upon Request', href: null }]
        ,
        media: {
          images: [
            { src: '/media/applied-ml/kmeans-clusters.png', objectPosition: 'center center' },
            { src: '/media/applied-ml/elbow-method.png', objectPosition: 'center center' },
            { src: '/media/applied-ml/confusion-matrix.png', objectPosition: 'center center' }
          ]
        }
      },
      {
        id: 'robotics-competition',
        title: 'Robotics Competition (1st Place)',
        stack: 'Team Leader',
        description: 'Led a robotics team project and achieved 1st place in a competition.',
        links: [],
        media: {
          images: [
            { src: '/media/robotics/trophy.jpg', objectPosition: 'center 32%' },
            { src: '/media/robotics/me-with-trophy.jpg', objectPosition: 'center 28%' }
          ],
          video: {
            src: '/media/robotics/competition-video.mp4',
            poster: '/media/robotics/trophy.jpg'
          }
        }
      }
    ],
    additional: [
      {
        id: 'javafx-algorithms',
        title: 'Java + JavaFX Algorithms Project',
        description:
          'Implemented algorithm-focused features with a JavaFX interface for a university algorithms course.',
        links: [{ label: 'GitHub', text: 'Available Soon', href: null }]
      },
      {
        id: 'boycott-data-structures',
        title: 'Data Structures "Boycott" Project (Java)',
        description: 'Built a Java project applying data structures to a practical "boycott" concept.',
        links: [{ label: 'GitHub', text: 'Available Soon', href: null }]
      }
    ],
    inProgress: [
      {
        id: 'jobloom',
        title: 'Jobloom (Senior Project)',
        status: 'Coming Soon',
        description:
          'Senior graduation project currently under active development. Full case study will be published soon.',
        links: []
      }
    ]
  },
  contact: {
    email: 'ma.audi25@gmail.com',
    phone: '+961 79 116 139',
    github: 'mahmoudaudi',
    linkedin: 'mahmoud-audi',
    instagram: 'm7moud_3udi',
    headline: "Let's work together",
    subtext:
      'Open to internships, junior developer roles, and collaborative projects. Reach out by email or connect on GitHub and LinkedIn.'
  },
  footer: {
    tagline: 'Software Developer building robust web systems and applying ML to real-world problems.'
  }
};

export default portfolioData;
