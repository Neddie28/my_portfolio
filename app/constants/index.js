import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    airbnb,
    discord,
    levelupwork,
    spotify,
    figma,
    docker,
    starbucks,
    shopify,
    threejs,
    luis,
  } from "../assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React.js Frontend Developer",
      icon: web,
      level: "Advanced"
    },
    {
      title: "React Native Developer",
      icon: mobile,
      level: "Intermediate"
    },
    {
      title: "Devops Engineer",
      icon: backend,
      level: "Intermediate"
    },
    {
      title: "Solidity Blockchain Developer",
      icon: creator,
      level: "Intermediate"
    },
    {
      title: "Backend Developer",
      icon: backend,
      level: "Intermediate"
    },
    {
      title: "UI/UX Designer",
      icon: creator,
      level: "Intermediate"
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Mongodb",
      icon: mongodb,
    },
  ];
  
  const experiences = [
    {
      title: "REACT.JS FRONTEND ENGINEER",
      company_name: "Layer0 (united states)",
      icon: starbucks,
      iconBg: "#383E56",
      date: "October 2022 - March 2024",
      points: [
        "Developed optimization frameworks using chrio, typescript, mongodb, reactjs and react-native",
        "Created server/client-side applications using nextjs and strapi cms",
        "Monitored entire software lifecycles to meet project specifications and deadlines.",
        "Analyzed and interpreted complex technical documents and data models.",
        "Worked with cross-functional teams to communicate project requirements and proposals.",
        "Developed flowCharts and layouts to identify software requirements and solutions.",
        "Integrated robust API communication and employed RESTful APIs for exchange.",
        "Offered constructive criticism and knowledge sharing through code review participation."
      ],
    },
    {
      title: "JUNIOR FULL-STACK ENGINEER",
      company_name: "Vuvaa(abuja)",
      icon: shopify,
      iconBg: "#383E56",
      date:"October 2020 - October 2022",
      points: [
        "Increased user engagement by 15% and reduced page load times by 20% by spearheading the migration of our static website to Next.js, leveraging server-side rendering and static site generation.",
        "Integrated React Query into our React application, enabling efficient data fetching and caching, leading to a smoother user experience and improved responsiveness.",
        " Developed and deployed serverless full stack applications in aws cdk, dynamodb, cognito idp, s3, cloudformation, route53, sns, vpc, ec2, amplify, lambda and serverless, nodejs, reactjs, Restful apis, and nextjs.",
        "Collaborated with backend developers to implement a RESTful API for our frontend application, ensuring efficient data retrieval and a structured development approach.",
        "Leveraged TypeScript to seamlessly integrate various third-party libraries into our React application, ensuring type safety and reduced runtime errors.",
        "Participated in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Chinedu excelled on our frontend team and showed exceptional leadership by mentoring new hires. A true team player!.",
      name: "Amelia Madison ",
      designation: "Software Engineer",
      company: "Layer0",
      image: "https://randomuser.me/api/portraits/women/85.jpg",
    },
    {
      testimonial:
        "After Chinedu's website optimization efforts, our traffic surged by 15%! We're incredibly grateful for their contributions.",
      name: "Luis Lawrence",
      designation: "Product Manager",
      company: "Vuvaa",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      testimonial:
        "Chinedu's clean code and clear explanations on vuvaa were a game-changer. A true asset to the team!",
      name: "Sam Oladele",
      designation: "Software Engineer",
      company: "Vuvaa",
      image: "https://randomuser.me/api/portraits/men/59.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Fullstack Saas website builder with recurring subscription",
      description: "Build beautiful client websites (drag-and-drop) with sub-accounts for organized management. Manage pipelines, funnels, and team members for efficient collaboration. Automate tasks and ensure secure payments with Stripe Connect. Responsive design powered by Tailwind CSS. Robust PostgreSQL backend (still in development).",  
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
        {
          name: "clerkjs",
          color: "blue-text-gradient",
        },
        {
          name: "shadcn",
          color: "green-text-gradient",
        },
        {
          name: "tremor-ui",
          color: "pink-text-gradient",
        },
        {
          name: "stripe",
          color: "pink-text-gradient",
        },
     
      ],
      image: levelupwork,
      live_demo_link: "https://myluworkapp.vercel.app/",
      source_code_link: "https://github.com/Neddie28/my-levelupwork",
    },
    {
      name: "Fullstack Discord clone with realtime chats, audio and video call",
      description:
        "A fullstack Discord clone with Next.js 13 and Clerk.js for a modern frontend with authentication. Real-time chat and features like voice/video calls are powered by LiveKit and Socket.io. Data is managed with Prisma and MongoDB, while Tailwind CSS and App Router provide a clean and functional UI/UX.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
        {
          name: "supabase",
          color: "pink-text-gradient",
        },
        {
          name: "livekit",
          color: "blue-text-gradient",
        },
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
      ],
      image: discord,
      live_demo_link: "https://team-ville.onrender.com/",
      source_code_link: "https://github.com/Neddie28/team-ville",
    },
    {
      name: " Fullstack Airbnb Clone",
      description:
        "Built a fullstack Airbnb clone leveraging Next.js 13 and React for a modern frontend. NextAuth simplifies user authentication, while Prisma ORM manages data interaction with MongoDB. Tailwind CSS ensures a visually appealing UI, and App Router facilitates seamless navigation between features.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: airbnb,
      live_demo_link: "https://zeddbnb.vercel.app/",
      source_code_link: "https://github.com/Neddie28/Airbnb-Clone",
    },
    {
      name: " Fullstack Spotify Clone with recurring subscription",
      description:
        "Built a fullstack Spotify clone using Next.js 13 and React for a dynamic frontend with App Router for navigation. Stripe integration enables secure payments for premium subscriptions. Supabase handles user authentication and data management (PostgreSQL), SupabaseClient for database interaction, while Tailwind CSS and Radix UI provides a sleek and responsive UI.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "radix-ui",
          color: "pink-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
        {
          name: "supabaseClient",
          color: "blue-text-gradient",
        },
      ],
      image: spotify,
      live_demo_link: "https://the-spotify-clone-2-bbzn.vercel.app/",
      source_code_link: "https://github.com/Neddie28/the-spotify-clone-2",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };