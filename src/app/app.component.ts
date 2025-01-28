import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import{FormsModule}from '@angular/forms'
// Correctly define routes with "pathMatch"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Indicate that this is a standalone component
  imports: [CommonModule, FormsModule], // Include CommonModule here
})
export class AppComponent {
  title = 'my-portfolio';
  isDarkMode = false; // Default mode is Light

  toggleTheme() {
    if (typeof window !== 'undefined') {
      this.isDarkMode = !this.isDarkMode;
      const theme = this.isDarkMode ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme); // Save user preference
    }
  }

  // OnInit Lifecycle Hook
  ngOnInit() {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'light';
      this.isDarkMode = savedTheme === 'dark';
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }
  // Scroll to specific section
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Handle form submission
  contactForm = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  // Function to handle the form submission
  submitForm() {
    if (
      this.contactForm.name &&
      this.contactForm.email &&
      this.contactForm.phone &&
      this.contactForm.message
    ) {
      console.log('Form Submitted:', this.contactForm);
      alert('Form Submitted Successfully!');
      this.resetForm();
    } else {
      alert('Please fill out all fields before submitting!');
    }
  }

  // Function to handle form cancellation
  cancelForm() {
    if (confirm('Are you sure you want to cancel?')) {
      this.resetForm();
    }
  }

  // Function to reset the form
  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
  }

  // Project Data
  selectedProject: any = null;

  // Project Data
  projects = [
    {
      title: 'Serverless Health & Wellness Platform',
      shortDescription: 'Track fitness goals with Azure’s serverless architecture.',
      description: `
        This platform helps users track fitness goals and receive personalized health recommendations.
        Built using Azure’s serverless capabilities, the platform handles real-time data processing,
        scalable storage, and automated workflows to enhance user engagement and reliability.
      `,
      techStack: 'Azure Functions, CosmosDB, Logic Apps, Terraform, Jenkins',
      details: `
        <ul>
          <li><strong>Azure Functions:</strong> Processes real-time fitness data to generate insights.</li>
          <li><strong>CosmosDB:</strong> Stores user data for scalable, low-latency operations.</li>
          <li><strong>Logic Apps:</strong> Automates reminders and personalized recommendations.</li>
          <li><strong>Terraform:</strong> Provisions infrastructure for consistent deployment.</li>
          <li><strong>Jenkins:</strong> Manages CI/CD pipelines for continuous updates.</li>
        </ul>
      `,
      image: 'assets/AzureHealth.jpg', // Replace with your actual image path
    },
    {
      title: 'AWS Serverless Image Resizer',
      shortDescription: 'Dynamically resize images with AWS Lambda.',
      description: `
        A serverless application that allows users to upload and resize images dynamically.
        By leveraging AWS services like Lambda and S3, the platform reduces storage and bandwidth costs
        while delivering optimized images tailored for different devices.
      `,
      techStack: 'AWS Lambda, S3, API Gateway, Python, CloudFront',
      details: `
        <ul>
          <li><strong>AWS Lambda:</strong> Handles image resizing logic in a scalable environment.</li>
          <li><strong>S3:</strong> Stores both original and resized images.</li>
          <li><strong>API Gateway:</strong> Exposes HTTP endpoints for the resizing functionality.</li>
          <li><strong>CloudFront:</strong> Caches and delivers optimized images efficiently.</li>
        </ul>
      `,
      image: 'assets/ImageProcessing.jpg',
    },
    {
      title: 'CricBlog Platform',
      shortDescription: 'A blogging platform for cricket enthusiasts.',
      description: `
        CricBlog is a multi-cloud platform where cricket enthusiasts can share blogs, photos, and videos.
        The backend leverages Flask for API management, Firebase for real-time updates, and Google Cloud for hosting.
      `,
      techStack: 'Google Cloud, Firebase, React.js, Flask',
      details: `
        <ul>
          <li><strong>Google Cloud:</strong> Hosts the platform for high availability.</li>
          <li><strong>Firebase:</strong> Manages real-time data and user authentication.</li>
          <li><strong>React.js:</strong> Delivers an engaging and responsive user interface.</li>
          <li><strong>Flask:</strong> Provides a robust API backend for managing content and users.</li>
        </ul>
      `,
      image: 'assets/Googlecloud.jpg',
    },
    {
      title: 'Unity Game Development',
      shortDescription: 'An immersive 3D game using Unity.',
      description: `
        Developed a 3D game with Unity, featuring physics-based mechanics, dynamic lighting, and sound effects
        for an engaging experience. The game offers multiple levels with increasing difficulty to challenge players.
      `,
      techStack: 'Unity, C#, Blender',
      details: `
        <ul>
          <li><strong>Unity:</strong> Designed gameplay mechanics and physics simulations.</li>
          <li><strong>C#:</strong> Scripted player interactions and game logic.</li>
          <li><strong>Blender:</strong> Created and animated 3D assets for immersive visuals.</li>
        </ul>
      `,
      image: 'assets/project1.jpg',
    },
  ];

  // Toggle Project View
  toggleDetails(project: any) {
    if (this.selectedProject === project) {
      this.selectedProject = null; // Close if already open
    } else {
      this.selectedProject = project; // Open the selected project
    }
  }

  // Close Expanded View
  closeDetails() {
    this.selectedProject = null;

  }
  skills = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Java', icon: 'fab fa-java' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'C++', icon: 'fas fa-code' },
        { name: 'Apex', icon: 'fas fa-cloud' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'TypeScript', icon: 'fab fa-angular' },
      ],
    },
    {
      category: 'Frameworks',
      skills: [
        { name: 'React', icon: 'fab fa-react' },
        { name: 'Angular', icon: 'fab fa-angular' },
        { name: 'Flask', icon: 'fas fa-flask' },
        { name: 'Spring Boot', icon: 'fas fa-leaf' },
        { name: 'Django', icon: 'fas fa-cube' },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'PostgreSQL', icon: 'fas fa-server' },
        { name: 'MongoDB', icon: 'fas fa-leaf' },
        { name: 'Cosmos DB', icon: 'fas fa-cloud' },
        { name: 'DynamoDB', icon: 'fas fa-cloud' },
        { name: 'SOQL', icon: 'fas fa-search' },
      ],
    },
    {
      category: 'Cloud Platforms',
      skills: [
        { name: 'AWS', icon: 'fab fa-aws' },
        { name: 'Microsoft Azure', icon: 'fab fa-microsoft' },
        { name: 'Google Cloud', icon: 'fab fa-google' },
      ],
    },
    {
      category: 'DevOps Tools',
      skills: [
        { name: 'Jenkins', icon: 'fas fa-cogs' },
        { name: 'Terraform', icon: 'fas fa-tools' },
        { name: 'Git', icon: 'fab fa-git' },
        { name: 'GitLab', icon: 'fab fa-gitlab' },
      ],
    },
  ];
}