import React, { useState, useEffect, useRef } from 'react';
import { Typography, Box, Paper, Collapse } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as d3 from 'd3';
import cloud from 'd3-cloud';

interface Skill {
  name: string;
  level: number;
  description: string;
  category: 'frontend' | 'backend' | 'tool' | 'language';
}

interface CloudWord {
  text: string;
  size: number;
  x?: number;
  y?: number;
  rotate?: number;
}

const skills: Skill[] = [
  {
    name: 'React',
    level: 10,
    description:
      "My primary framework for the past several years. I've built everything from small components to large-scale applications, with particular expertise in hooks, context, and performance optimization. I especially enjoy architecting reusable component systems.",
    category: 'frontend',
  },
  {
    name: 'JavaScript',
    level: 9.5,
    description:
      "The foundation of my development career. I've watched it evolve from callback-heavy code to modern async/await patterns. I particularly enjoy leveraging newer features like optional chaining and nullish coalescing to write cleaner, more maintainable code.",
    category: 'language',
  },
  {
    name: 'TypeScript',
    level: 9.5,
    description:
      "After experiencing the benefits of type safety, I now use TypeScript in all my projects. I've developed complex type systems for large applications and have found it invaluable for catching errors early and improving code documentation.",
    category: 'language',
  },
  {
    name: 'Node.js',
    level: 7,
    description:
      "My backend platform of choice for web applications. I've built RESTful APIs, real-time services with WebSockets, and microservices. I particularly enjoy using Express for its simplicity and flexibility in creating robust server applications.",
    category: 'backend',
  },
  {
    name: 'HTML',
    level: 8,
    description:
      "The backbone of web development. I take pride in writing semantic, accessible markup that works across all devices. I'm particularly focused on ARIA attributes and ensuring screen reader compatibility in all my projects.",
    category: 'frontend',
  },
  {
    name: 'CSS',
    level: 8,
    description:
      "More than just styling - I see CSS as a powerful tool for creating engaging user experiences. I've mastered CSS Grid and Flexbox for layouts, and enjoy creating smooth animations and responsive designs that work across all screen sizes.",
    category: 'frontend',
  },
  {
    name: 'GraphQL',
    level: 7,
    description:
      "My preferred approach for flexible API design. I've implemented GraphQL in multiple projects, appreciating its ability to solve over-fetching issues. I especially enjoy designing type systems that make frontend development more efficient.",
    category: 'backend',
  },
  {
    name: 'Redux',
    level: 8,
    description:
      "While I now often reach for simpler solutions like Context or React Query, I've extensively used Redux in large applications. I've implemented complex state management patterns and particularly enjoy using Redux Toolkit for its improved developer experience.",
    category: 'frontend',
  },
  {
    name: 'Jest',
    level: 7,
    description:
      'Testing is crucial for maintainable code, and Jest has been my primary testing tool. I write comprehensive unit tests for my components and utilities, and particularly enjoy setting up continuous integration pipelines that ensure code quality.',
    category: 'tool',
  },
  {
    name: 'Git',
    level: 8,
    description:
      "Beyond basic version control, I use Git as a collaboration tool. I'm experienced with complex branching strategies, interactive rebasing, and maintaining clean commit histories. I particularly enjoy setting up Git hooks for automated code quality checks.",
    category: 'tool',
  },
  {
    name: 'SQL',
    level: 6,
    description:
      "While primarily a frontend developer, I'm comfortable designing and optimizing database schemas. I've worked with PostgreSQL and MySQL, writing complex queries and implementing efficient indexing strategies for better performance.",
    category: 'language',
  },
  {
    name: 'Python',
    level: 6,
    description:
      "My go-to language for automation and data processing. I've used Python for building web scrapers, data analysis scripts, and automation tools. I particularly enjoy using pandas and numpy for data manipulation tasks.",
    category: 'language',
  },
  {
    name: 'Next.js',
    level: 8,
    description:
      "My preferred React framework for production applications. I've leveraged its server-side rendering and static generation capabilities to build fast, SEO-friendly websites. I particularly enjoy implementing dynamic routing and API routes for full-stack applications.",
    category: 'frontend',
  },
  {
    name: 'Material-UI',
    level: 7,
    description:
      "My go-to UI framework for React applications. I've extensively customized Material-UI themes and components to match unique design requirements while maintaining accessibility standards. I particularly enjoy creating dark mode implementations and responsive layouts.",
    category: 'frontend',
  },
  {
    name: 'Docker',
    level: 7,
    description:
      "I use Docker to ensure consistent development and deployment environments. I've created multi-stage builds for frontend applications, optimizing container sizes and build times. I particularly enjoy crafting development environments that perfectly mirror production.",
    category: 'tool',
  },
  {
    name: 'AWS',
    level: 7,
    description:
      "My cloud platform of choice for deploying web applications. I've worked extensively with S3, CloudFront, and Lambda for serverless architectures. I particularly enjoy optimizing CDN configurations for the best possible user experience.",
    category: 'backend',
  },
  {
    name: 'Webpack',
    level: 7,
    description:
      "While newer tools have emerged, my deep understanding of Webpack has been invaluable. I've configured complex build pipelines, optimized bundle sizes, and implemented code splitting strategies. I particularly enjoy fine-tuning configurations for optimal performance.",
    category: 'tool',
  },
  {
    name: 'Vite',
    level: 8,
    description:
      "My current favorite build tool for its incredible speed and simplicity. I've migrated several projects from Webpack to Vite, achieving significant improvements in development experience. I particularly enjoy its hot module replacement capabilities.",
    category: 'tool',
  },
  {
    name: 'ESLint',
    level: 8,
    description:
      "A cornerstone of my code quality toolkit. I've created and maintained custom ESLint configurations across multiple teams, ensuring consistent code style and catching potential issues early. I particularly enjoy crafting rules that promote best practices.",
    category: 'tool',
  },
  {
    name: 'Prettier',
    level: 8,
    description:
      "An essential tool in my development workflow. I've integrated Prettier with ESLint and Git hooks to maintain consistent code formatting across teams. I particularly enjoy how it eliminates style debates and lets developers focus on writing code.",
    category: 'tool',
  },
  {
    name: 'Storybook',
    level: 7,
    description:
      "My preferred tool for component development and documentation. I've set up comprehensive component libraries with Storybook, including custom addons and themes. I particularly enjoy creating interactive documentation that serves as both reference and testing ground.",
    category: 'tool',
  },
  {
    name: 'Cypress',
    level: 7,
    description:
      "My go-to tool for end-to-end testing. I've implemented comprehensive test suites that cover critical user journeys and edge cases. I particularly enjoy writing custom commands and utilizing Cypress's powerful debugging capabilities.",
    category: 'tool',
  },
  {
    name: 'React Query',
    level: 8,
    description:
      "A game-changer for state management in my React applications. I've leveraged its powerful caching and invalidation features to create highly responsive UIs. I particularly enjoy implementing optimistic updates and real-time synchronization features.",
    category: 'frontend',
  },
  {
    name: 'Tailwind',
    level: 7,
    description:
      "A powerful utility-first CSS framework that I've embraced for rapid prototyping and development. I've created custom design systems and component libraries using Tailwind. I particularly enjoy its approach to responsive design and dark mode implementation.",
    category: 'frontend',
  },
  {
    name: 'SASS',
    level: 8,
    description:
      "While I often reach for CSS-in-JS solutions now, SASS remains a powerful tool in my arsenal. I've built complex theming systems and maintained large-scale stylesheets. I particularly enjoy creating mixins and functions that make styling more programmatic.",
    category: 'frontend',
  },
  {
    name: 'CI/CD',
    level: 8,
    description:
      "I've implemented robust deployment pipelines using GitHub Actions and Jenkins. From automated testing and linting to staged deployments and rollback strategies, I particularly enjoy creating workflows that make deployment reliable and stress-free.",
    category: 'tool',
  },
  {
    name: 'Apollo',
    level: 8,
    description:
      "My preferred GraphQL client for React applications. I've implemented complex caching strategies and local state management using Apollo. I particularly enjoy setting up code generation for type-safe GraphQL operations.",
    category: 'frontend',
  },
];

const ContentWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
  height: '100%',
});

const CloudWrapper = styled(Box)({
  width: '800px',
  height: '400px',
  margin: '0 auto',
  position: 'relative',
  marginBottom: '20px',
  '& text': {
    cursor: 'pointer',
    transition: 'fill 0.3s ease',
    '&:hover': {
      fill: '#1976d2 !important',
    },
  },
});

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 800;
    const height = 400;

    // Clear previous content
    d3.select(svgRef.current as Element)
      .selectAll('*')
      .remove();

    const words: CloudWord[] = skills.map((skill) => ({
      text: skill.name,
      size: skill.level * 4 + 12,
    }));

    const layout = cloud<CloudWord>()
      .size([width, height])
      .words(words)
      .padding(5)
      .rotate(() => 0)
      .fontSize((d) => d.size!)
      .on('end', draw);

    layout.start();

    function draw(words: CloudWord[]) {
      const svg = d3
        .select(svgRef.current as Element)
        .attr('width', width)
        .attr('height', height);

      const g = svg.append('g').attr('transform', `translate(${width / 2},${height / 2})`);

      g.selectAll('text')
        .data(words)
        .enter()
        .append('text')
        .style('font-size', (d) => `${d.size}px`)
        .style('fill', () =>
          d3
            .rgb(144 + Math.random() * 30, 202 + Math.random() * 30, 249 + Math.random() * 30)
            .toString()
        )
        .attr('text-anchor', 'middle')
        .attr('transform', (d) => `translate(${d.x},${d.y})`)
        .text((d) => d.text)
        .on('click', (event, d: CloudWord) => {
          const skill = skills.find((s) => s.name === d.text);
          handleSkillClick(skill || null);
        });
    }
  }, []);

  const handleSkillClick = (skill: Skill | null) => {
    setSelectedSkill(skill);
    if (skill && descriptionRef.current) {
      setTimeout(() => {
        descriptionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 100); // Small delay to ensure Collapse animation starts
    }
  };

  return (
    <ContentWrapper>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
        Skills & Expertise
      </Typography>

      <CloudWrapper>
        <svg ref={svgRef}></svg>
      </CloudWrapper>

      <div ref={descriptionRef}>
        {!selectedSkill ? (
          <Paper
            sx={{
              p: 2,
              mt: 2,
              maxWidth: '800px',
              width: '100%',
              textAlign: 'center',
              backgroundColor: 'rgba(30, 30, 30, 0.6)',
            }}
          >
            <Typography variant="h6" color="text.secondary">
              Click on any skill to learn more about my experience
            </Typography>
          </Paper>
        ) : (
          <Collapse in={!!selectedSkill} timeout={500}>
            <Paper sx={{ p: 2, mt: 2, maxWidth: '800px', width: '100%' }}>
              <Typography variant="h5" gutterBottom>
                {selectedSkill.name}
              </Typography>
              <Typography>{selectedSkill.description}</Typography>
            </Paper>
          </Collapse>
        )}
      </div>
    </ContentWrapper>
  );
};

export default Skills;
