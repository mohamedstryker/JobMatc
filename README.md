Job Match



Overview

Job Match is an interactive web platform designed to empower job seekers and learners with tools to advance their careers. It offers professional courses, an AI-powered assistant for crafting resumes and cover letters, up-to-date industry insights, and AI-generated quizzes tailored to users’ skills. Built with a modern tech stack, Job Match provides a friendly and engaging user interface to streamline career development.

Features





Professional Courses: Curated learning paths to develop in-demand skills for various industries.



AI Assistant: Generates tailored resumes and cover letters optimized for Applicant Tracking Systems (ATS) and specific job roles.



Industry Insights: Delivers the latest trends, news, and tips to keep users informed about their target industries.



AI-Generated Quizzes: Personalized quizzes based on user skills to assess and reinforce learning.



Interactive UI: A responsive, user-friendly interface built with Shadcn components for seamless navigation.



Secure Data Handling: Robust backend with DynamoDB and Prisma for efficient and secure data management.

Tech Stack





Frontend: Next.js (React), TypeScript, JavaScript, Shadcn UI components



Backend: Node.js, Inngest (event-driven workflows)



Database: DynamoDB (NoSQL), Prisma (ORM)



Other: Vercel (deployment), AWS SDK (for DynamoDB integration)

Prerequisites





Node.js 18.x or higher



npm or yarn



AWS account with DynamoDB configured



Vercel account (optional, for deployment)

Installation





Clone the Repository

git clone https://github.com/zekfer/Job_Match.git
cd Job_Match



Install Dependencies

npm install

Or, if using Yarn:

yarn install



Set Up Environment Variables

Create a .env.local file in the root directory and add the following:

AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_aws_region
DYNAMODB_TABLE_NAME=your_dynamodb_table
NEXT_PUBLIC_API_URL=http://localhost:3000/api
INNGEST_EVENT_KEY=your_inngest_event_key

Replace placeholders with your actual AWS and Inngest credentials.



Configure Prisma

Update the prisma/schema.prisma file with your DynamoDB connection details (if applicable) and run:

npx prisma generate



Run the Development Server

npm run dev

Or with Yarn:

yarn dev

The app will be available at http://localhost:3000.

Usage





Access the Platform

Open http://localhost:3000 in your browser to explore the Job Match platform.



Create an Account

Sign up to access courses, the AI assistant, quizzes, and industry insights.



Use the AI Assistant





Upload your profile details or existing resume.



Generate ATS-optimized resumes and cover letters for specific job applications.



Receive suggestions to improve content based on job descriptions.



Take Courses and Quizzes





Browse available courses and enroll to upskill.



Complete AI-generated quizzes to test and validate your knowledge.



Stay Informed

Check the insights section for the latest industry trends and career advice.

Project Structure

Job_Match/
├── app/                      # Next.js app directory (pages, API routes)
├── components/               # Reusable React components (Shadcn UI)
├── lib/                      # Utility functions and API clients
├── prisma/                   # Prisma schema and migrations
├── public/                   # Static assets (images, fonts)
├── styles/                   # Global CSS and Tailwind configuration
├── inngest/                  # Inngest event handlers
├── .env.local                # Environment variables
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file

Deployment





Deploy to Vercel





Push your code to a GitHub repository.



Connect the repository to Vercel and configure environment variables.



Deploy the app using Vercel’s CLI or dashboard.

vercel



Configure AWS and Inngest





Ensure DynamoDB tables are set up in your AWS account.



Configure Inngest workflows for event-driven tasks (e.g., quiz generation).

Contributing





Fork the repository.



Create a feature branch: git checkout -b feature/your-feature.



Commit changes: git commit -m 'Add your feature'.



Push to the branch: git push origin feature/your-feature.



Open a pull request.

Please follow the Code of Conduct and ensure code adheres to ESLint and Prettier standards.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Contact

For support or feedback, open an issue on the GitHub repository or contact the maintainer at [your-email@example.com].



Build your career with Job Match! 🌟
