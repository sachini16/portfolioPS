import {
  Brain, MessageCircle, Users, Crown, Lightbulb,
  BrainCircuit, Clock, Handshake, ShieldCheck, Briefcase, FileText, UserCheck, Phone
} from 'lucide-react';

// Blue shades for each week
const blueShades = [
  { color: '#1E3A8A', bg: 'rgba(30,58,138,0.08)' },   // Week 1 – deep navy
  { color: '#1E3A8A', bg: 'rgba(30,58,138,0.08)' },   // Week 2
  { color: '#1E3A8A', bg: 'rgba(30,58,138,0.08)' },   // Week 3
  { color: '#1E3A8A', bg: 'rgba(30,58,138,0.08)' },   // Week 4
  { color: '#1E3A8A', bg: 'rgba(30,58,138,0.08)' },   // Week 5
  { color: '#1E3A8A', bg: 'rgba(30,58,138,0.08)' },   // Week 6
  { color: '#1E3A8A', bg: 'rgba(30,58,138,0.08)' },   // Week 7
  { color: '#1E3A8A', bg: 'rgba(30,58,138,0.08)' },   // Week 8
  { color: '#1E3A8A', bg: 'rgba(30,58,138,0.08)' },   // Week 9
  { color: '#1E3A8A', bg: 'rgba(30,58,138,0.08)' },   // Week 10
];

export const weeksData = [
  {
    id: 1,
    icon: Brain,
    title: 'Emotional Intelligence',
    shortDescription: 'Understanding emotions, self-awareness, empathy, and emotional regulation.',
    status: 'Completed',
    image: '/images/week1/week1.jpg',
    bannerImage: '/images/week1/topic cover.jpg',
    ...blueShades[0],
    learningOutcomes: [
      'Understand emotional intelligence and its components.',
      'Identify the impact of emotions on relationships and leadership.',
      'Develop self-awareness and emotional regulation.',
      'Improve empathy and social skills.',
    ],
    keyTopics: [
      'Understanding Emotions', 'Primary and Secondary Emotions', 'Emotional Intelligence',
      'IQ vs EQ', 'Self-Awareness', 'Self-Regulation', 'Motivation', 'Empathy',
      'Social Skills', 'Emotional Intelligence and Leadership', "Goleman's Emotional Competencies",
    ],
    reflection: `This week's lesson helped me realize that emotional intelligence is just as important as academic knowledge and technical skills. I learned that understanding emotions can improve communication, strengthen relationships, and support better decision-making. The concepts of self-awareness, self-regulation, motivation, empathy, and social skills provided valuable insights into how people interact and respond to different situations. I also understood the importance of emotional intelligence in leadership and workplace success. Moving forward, I plan to develop my emotional intelligence by practicing self-awareness, improving my communication skills, listening more actively, and managing my emotions more effectively in both personal and professional situations.`,
    skillsGained: ['Emotional Awareness', 'Self-Management', 'Empathy', 'Communication', 'Leadership Development'],
    learningOutcomeImage: '/images/week1/learning outcome.png',
    skillGainedImage: '/images/week1/Skill  gained.png',
    sections: [
      {
        type: 'text',
        title: 'Introduction',
        content: 'During Week 1, I learned about Emotional Intelligence (EI) and its importance in personal development, leadership, workplace success, and building healthy relationships. Emotional Intelligence refers to the ability to recognize, understand, manage, and effectively use emotions in ourselves and others. This topic helped me understand how emotions influence our thoughts, behaviours, decision-making, and interactions with people.\n\nThe session highlighted that success is not determined only by intellectual ability or Intelligence Quotient (IQ). Emotional Intelligence plays a significant role in managing stress, communicating effectively, resolving conflicts, and developing strong professional and personal relationships.'
      },
      {
        type: 'list',
        title: 'Understanding Emotions',
        subtitle: 'An emotion can be described as a feeling, the thoughts associated with that feeling, a psychological and biological state, and the behaviours that result from it. I learned about different primary emotions and their related secondary emotions:',
        image: '/images/week1/understanding emotional.avif',
        items: [
          { bold: 'Anger', text: ' – resentment, hostility, hatred, violence' },
          { bold: 'Sadness', text: ' – grief, sorrow, self-pity, depression' },
          { bold: 'Fear', text: ' – anxiety, nervousness, phobia, panic' },
          { bold: 'Enjoyment', text: ' – happiness, joy, contentment, ecstasy' },
          { bold: 'Love', text: ' – acceptance, trust, affection, obsession' },
          { bold: 'Surprise', text: ' – shock, astonishment, wonder' },
          { bold: 'Disgust', text: ' – contempt, scorn, aversion' },
          { bold: 'Shame', text: ' – guilt, embarrassment, remorse, regret' }
        ],
        footer: 'I also learned that emotions can be expressed through voice, breathing patterns, facial expressions, body movements, energy levels, and other non-verbal signals. This concept is known as emotional leakage, where emotions are revealed even when people try to hide them.'
      },
      {
        type: 'text',
        title: 'What is Emotional Intelligence?',
        subtitle: 'According to Salovey and Mayer (1990), Emotional Intelligence is the ability to monitor and understand one\'s own emotions and the emotions of others, distinguish between different emotions, and use emotional information to guide thinking and behaviour.',
        content: 'Emotionally intelligent individuals can:\n\n• Recognize emotions in themselves and others.\n• Understand emotional meanings.\n• Use emotions to support thinking and problem-solving.\n• Manage emotions effectively.\n• Build stronger relationships.\n• Communicate more effectively.\n• Demonstrate empathy and social awareness.'
      },
      {
        type: 'comparison',
        title: 'Emotional Intelligence and IQ',
        subtitle: 'One of the most important lessons from this week was understanding the difference between IQ and EQ.',
        col1: {
          title: 'IQ (Intelligence Quotient)',
          description: 'IQ measures cognitive abilities such as:',
          items: ['Learning capability', 'Logical reasoning', 'Problem-solving skills', 'Memory and analytical thinking']
        },
        col2: {
          title: 'EQ (Emotional Quotient)',
          description: 'EQ measures emotional abilities such as:',
          items: ['Self-awareness', 'Emotional control', 'Empathy', 'Communication', 'Relationship management']
        },
        footer: 'Although IQ can contribute to academic success and technical expertise, Emotional Intelligence helps individuals manage stress, work effectively with others, and adapt to challenges. Both IQ and EQ are important, but Emotional Intelligence often plays a greater role in long-term personal and professional success.'
      },
      {
        type: 'components',
        title: 'Key Components of Emotional Intelligence',
        image: '/images/week1/Key Components of Emotional Intelligence.jpg',
        components: [
          {
            name: '1. Self-Awareness',
            desc: 'Self-awareness is the ability to recognize and understand our emotions as they occur.',
            bullets: [
              'Identify emotional triggers.',
              'Understand how emotions influence behaviour.',
              'Recognize strengths and weaknesses.',
              'Learn from experiences and feedback.'
            ],
            footer: 'Developing self-awareness allows individuals to make better decisions and respond to situations more effectively.'
          },
          {
            name: '2. Self-Regulation',
            desc: 'Self-regulation refers to managing emotions appropriately and expressing them at the right time, place, and manner.',
            subsections: [
              { title: 'Mindfulness', text: 'Mindfulness involves paying attention to the present moment without judgment. Practices such as mindful breathing and gratitude can improve emotional control and decision-making.' },
              { title: 'Cognitive Re-Appraisal', text: 'This technique involves changing the way we interpret situations in order to influence our emotional reactions positively.' },
              { title: 'Acceptance', text: 'Accepting situations that cannot be changed helps reduce unnecessary stress and emotional suffering.' },
              { title: 'Problem Solving', text: 'Focusing on practical solutions rather than worrying about problems can improve emotional well-being and reduce anxiety.' }
            ]
          },
          {
            name: '3. Motivation',
            desc: 'Motivation is the ability to remain focused on goals despite challenges and setbacks.',
            bullets: [
              'Internal drive to achieve goals.',
              'Determination, optimism, and persistence.',
              'Goal-oriented behaviour.'
            ],
            footer: 'The lecture emphasized that positive thinking and self-motivation contribute significantly to success and personal growth.'
          },
          {
            name: '4. Empathy',
            desc: 'Empathy is the ability to understand and share the feelings of others.',
            bullets: [
              'Listen actively and understand perspectives.',
              'Recognize verbal and non-verbal emotional signals.',
              'Respond appropriately to others\' feelings.'
            ],
            footer: 'To improve empathy, it is important to recognize personal biases, put aside personal emotions when listening, and pay attention to cues.'
          },
          {
            name: '5. Social Skills',
            desc: 'Social skills enable individuals to interact effectively with others and build meaningful relationships.',
            bullets: [
              'Effective communication and relationship building.',
              'Conflict management and mediation.',
              'Teamwork, collaboration, and persuasion.'
            ],
            footer: 'Strong social skills help individuals succeed in both academic and professional environments.'
          }
        ]
      },
      {
        type: 'text',
        title: 'Emotional Intelligence and Leadership',
        content: 'Daniel Goleman emphasized that leadership is not about controlling people but about influencing and motivating them effectively. Leaders with high Emotional Intelligence create supportive and productive environments by understanding emotions, managing them during difficult situations, demonstrating empathy, and building trust.'
      },
      {
        type: 'table',
        title: 'Goleman\'s Emotional Competencies',
        headers: ['Domain', 'Description'],
        rows: [
          ['Self-Awareness', 'Understanding personal emotions and their impact on others'],
          ['Self-Regulation', 'Managing emotions and controlling impulses'],
          ['Motivation', 'Working towards goals with energy and persistence'],
          ['Empathy', 'Understanding and responding to the emotions of others'],
          ['Social Skills', 'Building relationships and managing interactions effectively']
        ]
      },
      {
        type: 'reflection',
        title: 'Reflection',
        image: '/images/week1/personal grwoth.jpg',
        points: [
          'Emotional intelligence is just as important as academic knowledge and technical skills.',
          'Understanding emotions can improve communication, strengthen relationships, and support better decision-making.',
          'The concepts of self-awareness, self-regulation, motivation, empathy, and social skills provided valuable insights into how people interact and respond to different situations.',
          'Emotional intelligence plays a significant role in leadership and workplace success.',
          'I plan to practice self-awareness and improve my communication skills going forward.',
          'Listening more actively and managing emotions effectively is key to personal and professional growth.',
        ]
      },
      {
        type: 'text',
        title: 'Conclusion',
        content: 'Emotional Intelligence is a vital life skill that influences personal growth, leadership effectiveness, workplace performance, and relationship building. Through this lesson, I gained a deeper understanding of emotions and their impact on behaviour. Developing emotional intelligence will help me become a better communicator, team member, and future professional.'
      }
    ],
    images: [
      { url: '/images/week1/week1.jpg', title: 'Overview Cover' },
      { url: '/images/week1/Key Components of Emotional Intelligence.jpg', title: 'Key Components of Emotional Intelligence' },
      { url: '/images/week1/personal grwoth.jpg', title: 'Personal Growth' },
      { url: '/images/week1/topic cover.jpg', title: 'Topic Cover Info' }
    ]
  },
  {
    id: 2,
    icon: MessageCircle,
    title: 'Professional Skills',
    shortDescription: 'Understanding professional skills, values, beliefs, attitudes, and character in the workplace.',
    status: 'Completed',
    image: '/images/week2/week2.jpg',
    bannerImage: '/images/week2/topic img.webp',
    ...blueShades[1],
    learningOutcomes: [
      'Understand the meaning of professional and employability skills.',
      'Identify essential workplace skills required for career success.',
      'Differentiate between technical skills, soft skills, and transferable skills.',
      'Understand the importance of values, beliefs, attitudes, and character.',
      'Recognize how personal qualities influence professional behavior.',
      'Learn about the Johari Window model and self-awareness.',
      'Identify methods for continuously improving professional skills.',
    ],
    keyTopics: [
      'Professional Skills', 'Employability Skills', 'Technical Skills',
      'Soft Skills', 'Transferable Skills', 'Values & Beliefs',
      'Attitudes & Character', 'Johari Window', 'Self-Awareness', 'Career Development',
    ],
    reflection: `Technical knowledge alone is not enough to succeed in the workplace. Communication, teamwork, values, attitudes, and character are equally important. The Johari Window highlighted the value of self-awareness and feedback.`,
    skillsGained: ['Professional Communication', 'Self-Awareness', 'Value Clarity', 'Workplace Ethics', 'Career Readiness'],
    learningOutcomeImage: '/images/week2/learning outcome.png',
    skillGainedImage: '/images/week2/Skill  gained.png',
    sections: [
      {
        type: 'text',
        title: 'Introduction',
        content: 'During Week 02, I learned about professional skills and their importance in personal and career development. The lecture introduced employability skills, workplace skills, values, beliefs, attitudes, and character traits that contribute to professional success. These concepts helped me understand the qualities employers expect from graduates and how personal development influences workplace performance.'
      },
      {
        type: 'comparison',
        title: 'Professional Skills & Employability Skills',
        col1: {
          title: 'Professional Skills',
          description: 'Non-technical skills that support success in the workplace:',
          items: ['Communication', 'Teamwork', 'Leadership', 'Problem-solving', 'Time management', 'Adaptability']
        },
        col2: {
          title: 'Employability Skills',
          description: 'Qualities that make a person more attractive to employers:',
          items: ['Communication skills', 'Critical thinking', 'Teamwork', 'Adaptability', 'Leadership', 'Time management']
        },
        footer: 'Both professional and employability skills are transferable across different jobs and industries, making them essential for long-term career success.'
      },
      {
        type: 'components',
        title: 'Workplace Skills Classification',
        components: [
          {
            name: 'Technical Skills',
            desc: 'Job-specific knowledge and expertise required to perform particular tasks.',
            bullets: ['Industry-specific tools and technologies', 'Specialized knowledge for a particular role', 'Measurable and certifiable abilities']
          },
          {
            name: 'Soft Skills',
            desc: 'Personal and interpersonal skills that improve workplace interactions and collaboration.',
            bullets: ['Communication and emotional intelligence', 'Teamwork and conflict resolution', 'Adaptability and problem-solving']
          },
          {
            name: 'Transferable Skills',
            desc: 'Skills that can be applied in different jobs and industries.',
            bullets: ['Communication and critical thinking', 'Leadership and time management', 'Problem-solving and collaboration']
          }
        ]
      },
      {
        type: 'comparison',
        title: 'Values & Beliefs',
        subtitle: 'Values and beliefs are foundational to professional behavior and decision-making.',
        image: '/images/week2/values and beliefs.webp',
        col1: {
          title: 'Values',
          description: 'Principles that guide behavior and decision-making:',
          items: ['Honesty', 'Integrity', 'Respect', 'Responsibility', 'Compassion', 'Fairness', 'Courage']
        },
        col2: {
          title: 'Beliefs',
          description: 'Personal convictions that shape understanding of oneself and the world:',
          items: ['Self-efficacy', 'Growth mindset', 'Optimism', 'Self-worth', 'Locus of control']
        }
      },
      {
        type: 'comparison',
        title: 'Attitudes & Character',
        subtitle: 'Attitudes and character define how we interact with others and build our professional reputation.',
        col1: {
          title: 'Attitudes',
          description: 'How people respond to situations, ideas, and individuals:',
          items: ['Positive attitude', 'Open-mindedness', 'Confidence', 'Empathy', 'Tolerance']
        },
        col2: {
          title: 'Character',
          description: 'Moral and ethical qualities that define a person\'s reputation:',
          items: ['Trustworthiness', 'Responsibility', 'Respectfulness', 'Caring', 'Fairness', 'Courage']
        }
      },
      {
        type: 'text',
        title: 'The Johari Window',
        subtitle: 'Developed by Joseph Luft and Harrington Ingham in 1955.',
        content: 'The Johari Window is a model that helps individuals understand self-awareness and improve interpersonal relationships through feedback and self-disclosure. It consists of four quadrants:\n\n• Open Area – What is known to yourself and others.\n• Blind Spot – What others see but you do not.\n• Hidden Area – What you know about yourself but hide from others.\n• Unknown Area – What neither you nor others know about you.\n\nBy seeking feedback and practising self-disclosure, individuals can expand their Open Area, leading to improved communication and stronger professional relationships.'
      },
      {
        type: 'comparison',
        title: 'Importance & Development of Professional Skills',
        col1: {
          title: 'Why They Matter',
          description: 'Professional skills are important because they:',
          items: ['Improve employability', 'Support workplace success', 'Enhance teamwork and collaboration', 'Increase career growth opportunities', 'Help adapt to changing work environments']
        },
        col2: {
          title: 'How to Develop',
          description: 'Professional skills can be improved through:',
          items: ['Continuous learning', 'Seeking feedback', 'Practical application', 'Taking on new challenges', 'Workshops and training programs']
        }
      },
      {
        type: 'reflection',
        title: 'Reflection',
        image: '/images/week2/reflection.webp',
        points: [
          'I realized that technical knowledge alone is not enough to succeed in the workplace.',
          'I learned the importance of communication and teamwork in achieving common goals.',
          'Understanding values and character helped me reflect on my own behavior and decision-making.',
          'The Johari Window activity showed the importance of self-awareness and receiving feedback from others.',
          'I recognized the need to improve my leadership and time-management skills.',
          'This lesson motivated me to continuously develop both my technical and professional abilities for future career success.',
        ]
      },
      {
        type: 'text',
        title: 'Conclusion',
        content: "This week's lesson provided valuable knowledge about professional skills and personal development. I learned that success in the workplace depends not only on technical expertise but also on communication, teamwork, values, attitudes, and character. These lessons will help me become a more effective student and future professional."
      }
    ],
    images: [
      { url: '/images/week2/week2.jpg', title: 'Overview Cover' },
      { url: '/images/week2/topic img.webp', title: 'Topic Cover' },
      { url: '/images/week2/values and beliefs.webp', title: 'Values & Beliefs' },
      { url: '/images/week2/reflection.webp', title: 'Reflection' }
    ]
  },
  {
    id: 3,
    icon: FileText,
    title: 'Crafting an Effective CV',
    shortDescription: 'Learning how to structure, format, and tailor a professional Curriculum Vitae (CV) for job opportunities.',
    status: 'Completed',
    image: '/images/week3/week3.jpg',
    bannerImage: '/images/week3/topic.png',
    ...blueShades[2],
    learningOutcomes: [
      'Understand the purpose and importance of a CV.',
      'Identify the key components of a professional CV.',
      'Structure and format a CV effectively.',
      'Tailor a CV to suit different job applications.',
      'Understand the importance of company and job research.',
      'Recognize common CV mistakes and learn how to avoid them.',
      'Develop a professional CV that highlights my strengths and achievements.',
    ],
    keyTopics: [
      'What is a CV?', 'Importance of a CV', 'Making a Positive First Impression',
      'Tailoring a CV', 'Importance of Research', 'CV Structure & Formatting',
      'Essential Components of a CV', 'Common CV Mistakes', 'CV Peer Review & Feedback',
    ],
    reflection: `I learned that a CV is one of the most important documents in the job application process. The practical exercise of drafting a CV and getting peer feedback helped me identify areas where my own CV can be improved. Tailoring it for specific applications will significantly improve my employment opportunities.`,
    skillsGained: ['CV Writing', 'CV Tailoring', 'Professional Formatting', 'Employer & Job Research', 'Peer Evaluation'],
    learningOutcomeImage: '/images/week3/learning outcome.png',
    skillGainedImage: '/images/week3/Skill  gained.png',
    sections: [
      {
        type: 'text',
        title: 'Introduction',
        content: 'During Week 03, I learned how to create an effective Curriculum Vitae (CV) that presents qualifications, skills, and experiences professionally. The lesson highlighted the importance of a CV in the job application process and explained how a well-structured CV can create a positive first impression on employers. I also learned how to tailor a CV according to specific job requirements and avoid common mistakes that reduce employment opportunities.'
      },
      {
        type: 'comparison',
        title: 'What is a CV & Its Importance',
        col1: {
          title: 'What is a CV?',
          description: "A Curriculum Vitae (CV) is a professional document that summarizes an individual's career profile:",
          items: ['Educational history', 'Professional skills', 'Work experience', 'Key achievements', 'Qualifications and certifications']
        },
        col2: {
          title: 'Importance of a CV',
          description: 'A CV is critical because it:',
          items: ['Creates the first impression on employers', 'Demonstrates qualifications and skills', 'Highlights achievements and experiences', 'Increases opportunities to be shortlisted', 'Differentiates candidates from other applicants']
        },
        footer: 'A professionally written CV is the first step in showcasing your suitability for a role and securing interviews.'
      },
      {
        type: 'comparison',
        title: 'CV Tailoring & Company Research',
        col1: {
          title: 'Tailoring your CV',
          description: 'Customizing your CV for a specific job position:',
          items: ['Highlighting relevant skills & experiences', 'Matching the employer\'s specific requirements', 'Demonstrating genuine interest in the position', 'Increasing chances of passing ATS (Applicant Tracking Systems)']
        },
        col2: {
          title: 'Importance of Research',
          description: 'Before writing, research the following areas:',
          items: ['The company\'s values, mission, and culture', 'The job role responsibilities and duties', 'Required qualifications and educational background', 'Key technical and soft skills requested in the job description']
        },
        footer: 'Customizing your CV based on thorough research demonstrates your alignment with the role and the organization.'
      },
      {
        type: 'components',
        title: 'Essential Components of a CV',
        components: [
          {
            name: 'Personal Information & Professional Summary',
            desc: 'The header and initial greeting of your CV to establish your identity and professional direction.',
            bullets: [
              'Personal Info: Full name, phone number, email, location, and professional links (LinkedIn, portfolio).',
              'Professional Summary: A brief, tailored introduction detailing your career goals, key strengths, and interests.'
            ]
          },
          {
            name: 'Work Experience & Education',
            desc: 'The core sections detailing your professional history and academic achievements, listed in reverse chronological order.',
            bullets: [
              'Work Experience: Job titles, organizations, locations, employment dates, responsibilities, and measurable achievements.',
              'Education: Degrees, institutions, graduation years, academic honors, relevant coursework, and projects.'
            ]
          },
          {
            name: 'Skills & Achievements',
            desc: 'Highlighting specific capabilities and accomplishments that validate your suitability and commitment to excellence.',
            bullets: [
              'Skills: A balance of relevant Technical skills (e.g. programming, databases) and Soft skills (e.g. communication, teamwork).',
              'Achievements & Awards: Certifications, academic honors, and professional recognitions that set you apart.'
            ]
          }
        ]
      },
      {
        type: 'comparison',
        title: 'Presentation Guidelines & Common Mistakes',
        image: '/images/week3/Presentation Guidelines & Common Mistakes.webp',
        imagePosition: 'bottom',
        col1: {
          title: 'Making a Positive First Impression',
          description: 'Recruiters spend very little time on a first scan. Ensure your CV has:',
          items: ['Clear formatting and professional appearance', 'Perfect grammar and spelling', 'Concise and highly relevant information', 'An easy-to-read, structured layout']
        },
        col2: {
          title: 'Common CV Mistakes to Avoid',
          description: 'Be careful to avoid these common pitfalls:',
          items: ['Spelling and grammatical errors', 'Including outdated or irrelevant information', 'Using inconsistent formatting or fonts', 'Writing excessively long, wordy descriptions']
        },
        footer: 'A polished, error-free presentation is crucial to pass the initial screening process.'
      },
      {
        type: 'list',
        title: 'Practical Exercise: CV Creation & Peer Review',
        subtitle: 'Putting theory into practice to refine our CVs through collaborative feedback:',
        items: [
          {
            bold: 'CV Development: ',
            text: 'Drafted and updated our individual CVs applying the structure, formatting, and content rules learned.'
          },
          {
            bold: 'Peer Review Sessions: ',
            text: 'Shared our CVs with peers to gather constructive feedback, identify areas of improvement, and enhance clarity.'
          },
          {
            bold: 'Refinement: ',
            text: 'Iterated on our CVs based on feedback to ensure high readability and impact.'
          }
        ]
      },
      {
        type: 'reflection',
        title: 'Reflection',
        image: '/images/week3/reflection.webp',
        points: [
          'I learned that a CV is one of the most important documents in the job application process.',
          'I understood the importance of presenting information clearly and professionally.',
          'I realized that tailoring a CV for each job application can significantly improve employment opportunities.',
          'I learned how employers use keywords and requirements when reviewing applications.',
          'The practical exercise helped me identify areas where my own CV can be improved.',
          'This lesson increased my confidence in preparing a professional CV for future internships and employment opportunities.'
        ]
      },
      {
        type: 'documents',
        title: 'CV Template',
        docs: [
          { url: '/images/Assigment/CV_templete.pdf', title: 'CV Template' }
        ]
      }
    ],
    images: [
      { url: '/images/week3/week3.jpg', title: 'Overview Cover' },
      { url: '/images/week3/topic.png', title: 'Topic Cover' },
      { url: '/images/week3/Presentation Guidelines & Common Mistakes.webp', title: 'Presentation Guidelines & Common Mistakes' },
      { url: '/images/week3/reflection.webp', title: 'Reflection' }
    ]
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: 'Professional Responsibilities & Codes of Ethics',
    shortDescription: 'Understanding professional ethics, attributes of professionalism, and codes of conduct (ACM, IEEE, CSSL) in computing.',
    status: 'Completed',
    image: '/images/week4/week4.jpg',
    bannerImage: '/images/week4/topic.webp',
    ...blueShades[3],
    learningOutcomes: [
      'Define profession, professional, and professionalism.',
      'Understand the meaning and importance of ethics.',
      'Explain the purpose of a code of ethics.',
      'Identify the responsibilities of computing professionals.',
      'Understand the ethical standards established by professional organizations.',
      'Recognize common ethical dilemmas in computing.',
      'Appreciate the importance of ethical decision-making in professional practice.',
    ],
    keyTopics: [
      'Profession & Professionalism', 'Computing Professional Roles', 'Ethics & Ethical Values',
      'Importance of Ethics', 'Purpose of Professional Codes', 'Responsibilities to Stakeholders',
      'Professional Organizations (CSSL, IEEE, ACM)', 'ACM Software Engineering Principles', 'Ethical Decision-Making & Dilemmas',
    ],
    reflection: `I learned that professionalism involves more than technical knowledge and includes ethical behavior and responsibility. Computing professionals have responsibilities to clients, employers, colleagues, and society. Understanding the CSSL, ACM, and IEEE codes helped me comprehend international standards for privacy protection and intellectual property.`,
    skillsGained: ['Ethical Decision-Making', 'Professional Responsibility', 'Codes of Conduct Awareness', 'Privacy Protection Standards', 'Intellectual Property Respect'],
    learningOutcomeImage: '/images/week4/learning outcome.png',
    skillGainedImage: '/images/week4/Skill  gained.png',
    sections: [
      {
        type: 'text',
        title: 'Introduction',
        content: 'During Week 04, I learned about professional responsibilities and codes of ethics in the computing profession. The lesson explained the concepts of profession, professional, and professionalism, as well as the importance of ethical behavior in the workplace. It also introduced professional codes of ethics developed by organizations such as CSSL, ACM, and IEEE. This lesson helped me understand the responsibilities that computing professionals have towards clients, employers, colleagues, and society.'
      },
      {
        type: 'components',
        title: 'Profession and Professionalism',
        components: [
          {
            name: 'What is a Profession & Professional?',
            desc: 'A profession is a career requiring specialized knowledge and education built on competence and public trust. A professional possesses this expert knowledge and works according to accepted societal and technical standards.',
            bullets: [
              'Specialized knowledge and training',
              'Professional associations and certifications',
              'Acceptance of public trust and ethical responsibilities'
            ]
          },
          {
            name: 'Attributes of Professionalism',
            desc: 'Professionalism refers to the behavior, attitude, and conduct expected from a professional in their daily practice.',
            bullets: [
              'Commitment to delivering high-quality work',
              'Accountability for decisions and actions',
              'Ethical behavior, integrity, and respect for colleagues and clients'
            ]
          }
        ]
      },
      {
        type: 'comparison',
        title: 'Ethics: Meaning & Importance',
        image: '/images/week4/Ethics Meaning & Importance.jpg',
        col1: {
          title: 'Core Ethical Values',
          description: 'Ethics refers to principles that help determine right and wrong. Key values include:',
          items: ['Honesty & transparency', 'Fairness & justice', 'Respect for others\' rights', 'Responsibility & accountability', 'Integrity in all dealings']
        },
        col2: {
          title: 'Why Ethics Matters in IT',
          description: 'Because technology affects millions of lives, ethics is essential to:',
          items: ['Guide professional and technical decisions', 'Prevent harm to users and society', 'Build and maintain stakeholder trust', 'Protect individuals\' data and privacy']
        },
        footer: 'Ethical behavior maintains public confidence in the computing profession and ensures technology is used for good.'
      },
      {
        type: 'components',
        title: 'Professional Responsibilities',
        components: [
          {
            name: 'Responsibilities to Clients & Employers',
            desc: 'Maintaining trust with key business stakeholders through delivery quality and honest conduct.',
            bullets: [
              'Clients: Deliver quality products, protect client info, maintain confidentiality, and provide accurate info.',
              'Employers: Perform duties competently, protect organizational resources, and adhere to policies.'
            ]
          },
          {
            name: 'Responsibilities to Colleagues & Society',
            desc: 'Contributing to a positive work culture and safeguarding the wider public interest.',
            bullets: [
              'Colleagues: Show respect, support team collaboration, and avoid discrimination.',
              'Society: Prioritize public safety, promote fairness, and avoid creating harmful or biassed systems.'
            ]
          }
        ]
      },
      {
        type: 'comparison',
        title: 'Professional Codes of Ethics',
        image: '/images/week4/Professional Codes of Ethics.webp',
        col1: {
          title: 'ACM Code of Ethics Principles',
          description: 'Focuses on broad moral imperatives for computing professionals:',
          items: ['Contribute to society and human well-being', 'Avoid harm to others and respect privacy', 'Be honest and trustworthy', 'Respect intellectual property and copyrights']
        },
        col2: {
          title: 'IEEE & CSSL Ethical Focus',
          description: 'Emphasizes technical competence, public welfare, and national growth:',
          items: ['Prioritize public safety, health, and welfare', 'Avoid conflicts of interest and reject bribery', 'Maintain and improve technical competence', 'Contribute positively to national development (CSSL)']
        },
        footer: 'These international standards provide a framework for ethical decision-making in the technology sector.'
      },
      {
        type: 'comparison',
        title: 'Ethical Decision-Making & Dilemmas',
        col1: {
          title: 'Common Ethical Dilemmas',
          description: 'Computing professionals frequently face difficult choices, such as:',
          items: ['Pressure to release untested or buggy software', 'Collecting or sharing user data without proper consent', 'Algorithmic bias leading to unfair discrimination', 'Unauthorized use of copyrighted code or software tools']
        },
        col2: {
          title: 'How to Make Ethical Choices',
          description: 'A structured approach to resolving ethical issues involves evaluating:',
          items: ['All stakeholders who might be affected', 'Short-term and long-term consequences of actions', 'Core professional duties and codes of conduct', 'Available alternative solutions and their impacts']
        },
        footer: 'Continuous ethical development and awareness help professionals navigate complex, evolving technologies responsibly.'
      },
      {
        type: 'reflection',
        title: 'Reflection',
        image: '/images/week4/reflection.jpg',
        points: [
          'I learned that professionalism involves more than technical knowledge and includes ethical behavior and responsibility.',
          'I understood the importance of ethics in guiding professional decisions.',
          'I realized that computing professionals have responsibilities not only to employers but also to clients, colleagues, and society.',
          'Learning about CSSL, ACM, and IEEE codes helped me understand international professional standards.',
          'I became more aware of ethical issues such as privacy protection and intellectual property rights.',
          'This lesson encouraged me to act responsibly and ethically in my future career as a software engineering professional.'
        ]
      }
    ],
    images: [
      { url: '/images/week4/week4.jpg', title: 'Overview Cover' },
      { url: '/images/week4/topic.webp', title: 'Topic Cover' },
      { url: '/images/week4/Ethics Meaning & Importance.jpg', title: 'Ethics: Meaning & Importance' },
      { url: '/images/week4/Professional Codes of Ethics.webp', title: 'Professional Codes of Ethics' },
      { url: '/images/week4/reflection.jpg', title: 'Reflection' }
    ]
  },
  {
    id: 5,
    icon: UserCheck,
    title: 'Interview Skills & Job Hunting',
    shortDescription: 'Mastering job hunting, active listening, verbal and non-verbal communication, the STAR method, and interview etiquette.',
    status: 'Completed',
    image: '/images/week5/week5.png',
    bannerImage: '/images/week5/topic.webp',
    ...blueShades[4],
    learningOutcomes: [
      'Understand the purpose and structure of job interviews.',
      'Recognize the importance of verbal and non-verbal communication.',
      'Develop strategies for successful interview performance.',
      'Apply active listening techniques during interviews.',
      'Use the STAR method to answer interview questions effectively.',
      'Prepare for common interview questions.',
      'Understand professional appearance and interview etiquette.',
      'Evaluate interview performance through self-reflection.',
    ],
    keyTopics: [
      'Understanding Job Interviews', 'Interview Preparation Strategy', 'Communication in Interviews',
      'Non-Verbal Communication', 'Candidate Behaviors (Successful vs. Unsuccessful)', 'Active Listening Techniques',
      'The 6 C\'s of Communication', 'Self-Presentation & Personality', 'STAR Interview Answering Method',
      'Common Interview Questions', 'Organizing Certificate Folders', 'Professional Appearance & Grooming',
      'Interview Do\'s & Don\'ts', 'Mock Interviews & Self-Reflection',
    ],
    reflection: `I learned that interview success depends on both communication skills and preparation. The mock interview activity helped me identify areas where I need to improve my communication and confidence. Structured answers using the STAR method will help me stand out in future interviews.`,
    skillsGained: ['Job Interview Skills', 'Active Listening', 'STAR Answering Method', 'Professional Presentation', 'Self-Assessment & Reflection'],
    learningOutcomeImage: '/images/week5/learning outcome.png',
    skillGainedImage: '/images/week5/Skill  gained.png',
    sections: [
      {
        type: 'text',
        title: 'Introduction',
        content: 'During Week 05, I learned about interview skills and job hunting techniques. The lesson focused on the importance of effective communication during interviews, including both verbal and non-verbal communication. I also learned how to prepare for interviews, answer common interview questions, present myself professionally, and understand employer expectations. Additionally, the lesson provided practical guidance on organizing certificates, professional dressing, and participating in mock interviews.'
      },
      {
        type: 'comparison',
        title: 'Understanding Job Interviews & Preparation',
        col1: {
          title: 'Purpose of a Job Interview',
          description: 'A discussion between a job applicant and an employer to determine suitability:',
          items: [
            'Employer: Assess skills, qualifications, experience, competencies, and organizational fit.',
            'Candidate: Learn about the organization, understand job duties, evaluate working conditions and growth.'
          ]
        },
        col2: {
          title: 'Interview Preparation Strategy',
          description: 'Questions to ask yourself before the interview:',
          items: [
            'What do I want the interviewer to know about me?',
            'Which strengths should I highlight?',
            'What weaknesses should I minimize?',
            'What do I need to know about the company and job role?'
          ]
        },
        footer: 'Proper preparation increases confidence, reduces anxiety, and significantly improves interview performance.'
      },
      {
        type: 'comparison',
        title: 'Verbal & Non-Verbal Communication',
        col1: {
          title: 'Role of Communication',
          description: 'Verbal communication and active listening skills reveal personality and confidence:',
          items: [
            'Active listening to understand the question accurately.',
            'Giving structured, detailed answers using professional industry terms.',
            'The 6 C\'s: Clear, Concise, Correct, Complete, Concrete, Courteous, and Confident.'
          ]
        },
        col2: {
          title: 'Impact of Non-Verbal Communication',
          description: 'Research highlights how body language shapes first impressions:',
          items: [
            '7% of communication comes from the actual words used.',
            '38% comes from the tone of voice and vocal delivery.',
            '55% comes from body language, facial expressions, and posture.',
            'Positive Actions: Smile, maintain eye contact, sit upright, and stay calm.'
          ]
        },
        footer: 'Mastering both verbal clarity and positive body language creates a strong, memorable impression.'
      },
      {
        type: 'comparison',
        title: 'Candidate Behaviors & Communication Rules',
        col1: {
          title: 'Characteristics of Successful Candidates',
          description: 'Behaviors that demonstrate professionalism and interest:',
          items: [
            'Researching the company beforehand and using their name.',
            'Using technical and industry-related terminology.',
            'Providing specific examples and asking relevant questions.',
            'Maintaining steady eye contact and answering confidently.'
          ]
        },
        col2: {
          title: 'Characteristics of Unsuccessful Candidates',
          description: 'Common pitfalls that negatively affect the outcome:',
          items: [
            'Having little or no knowledge about the company.',
            'Giving vague, short answers and failing to provide examples.',
            'Avoiding eye contact and showing little enthusiasm.',
            'Asking very few questions or showing lack of interest.'
          ]
        },
        footer: 'Successful candidates distinguish themselves by being active, knowledgeable, and enthusiastic participants.'
      },
      {
        type: 'components',
        title: 'Describing Yourself & Self-Presentation',
        image: '/images/week5/Describing Yourself & Self-Presentation.jpg',
        imageSize: 'small',
        components: [
          {
            name: 'Personal Attributes & Strengths',
            desc: 'How to describe your personality and highlight your core professional capabilities:',
            bullets: [
              'Personality: Describe positive personality traits professionally (e.g. self-motivated, detail-oriented).',
              'Strengths: Focus on communication, problem-solving, time management, leadership, teamwork, and enthusiasm.'
            ]
          },
          {
            name: 'Education & Work Experience',
            desc: 'Structuring your academic background and previous responsibilities effectively:',
            bullets: [
              'Education: Outline academic qualifications, degree programs, diplomas, and certifications.',
              'Work Experience: Explain previous roles, tasks, achievements, and volunteer experiences.'
            ]
          },
          {
            name: 'Future Goals',
            desc: 'Demonstrating future potential and ambition to the employer:',
            bullets: [
              'Discuss career development plans, skill improvement goals, and long-term professional aspirations.'
            ]
          }
        ]
      },
      {
        type: 'comparison',
        title: 'Interview Structure & The STAR Method',
        col1: {
          title: 'The 4 Interview Stages',
          description: 'Most professional job interviews progress through a structured sequence:',
          items: [
            'Introduction: Initial greetings, building rapport, and introductions.',
            'Evidence-Speaking: Answering questions and providing detailed examples.',
            'Candidate Questions: The candidate asks relevant questions about the role.',
            'Closure: Final remarks and conclusion of the interview.'
          ]
        },
        col2: {
          title: 'The STAR Method for Answers',
          description: 'A structured framework to answer behavioral questions:',
          items: [
            'Situation: Set the scene and describe the situation you faced.',
            'Task: Explain the objective, responsibility, or challenge.',
            'Action: Describe the specific actions you took to address the task.',
            'Result: Explain the positive outcome or results achieved.'
          ]
        },
        footer: 'Using the STAR method ensures your answers are clear, organized, and results-focused.'
      },
      {
        type: 'components',
        title: 'Common Questions & Etiquette',
        components: [
          {
            name: 'Commonly Asked Questions',
            desc: 'Be prepared to answer these frequent interview prompts:',
            bullets: [
              'Tell me about yourself / Why do you want to work here?',
              'What are your strengths and weaknesses?',
              'Describe a challenge you faced and how you solved it.',
              'How do you handle pressure? / Describe a time you worked in a team.'
            ]
          },
          {
            name: 'Organizing Certificates',
            desc: 'Your certificate folder shows organization and professionalism:',
            bullets: [
              'Include relevant certificates categorized neatly.',
              'Organize documents in reverse chronological order.',
              'Use labels, dividers, and present them in a clean, professional folder.'
            ]
          },
          {
            name: 'Appearance, Dressing & Grooming',
            desc: 'Visual presentation is vital for building a positive first impression:',
            bullets: [
              'Dressing: Wear clean, well-fitted professional attire that aligns with company culture.',
              'Grooming: Maintain high personal hygiene, neat hair, minimal accessories, and appropriate footwear.'
            ]
          }
        ]
      },
      {
        type: 'comparison',
        title: 'Interview Do\'s and Don\'ts',
        image: '/images/week5/Interview Do\'s and Don\'ts.jpg',
        col1: {
          title: 'Do\'s',
          description: 'Actions to practice for success:',
          items: [
            'Research the company and practice common questions.',
            'Dress professionally and arrive early.',
            'Maintain eye contact, highlight relevant skills, and ask thoughtful questions.',
            'Follow up with a thank-you note after the interview.'
          ]
        },
        col2: {
          title: 'Don\'ts',
          description: 'Behaviors to avoid:',
          items: [
            'Arrive late or interrupt the interviewer.',
            'Speak negatively about previous employers or use inappropriate language.',
            'Depend entirely on memorized answers or overshare personal information.',
            'Use mobile phones during the interview.'
          ]
        },
        footer: 'Following basic etiquette ensures you remain professional throughout the interaction.'
      },
      {
        type: 'list',
        title: 'Mock Interviews & Practical Exercises',
        subtitle: 'Practicing interview scenarios to evaluate and improve our skills:',
        items: [
          { bold: 'Realistic Practice: ', text: 'Participated in mock interviews simulating real workplace screening environments.' },
          { bold: 'Multi-Dimensional Assessment: ', text: 'Evaluated non-verbal behavior, communication clarity, confidence, appearance, and technical knowledge.' },
          { bold: 'Improvement Identification: ', text: 'Reflected on performance to identify specific gaps in communication and confidence.' }
        ]
      },
      {
        type: 'reflection',
        title: 'Reflection',
        image: '/images/week5/reflection.jpg',
        points: [
          'I learned that interview success depends on both communication skills and preparation.',
          'I realized the importance of researching a company before attending an interview.',
          'The lesson helped me understand how body language influences first impressions.',
          'I learned how to structure answers using the STAR method.',
          'I became more confident about answering common interview questions.',
          'The mock interview activity helped me identify areas where I need to improve my communication and confidence.',
          'This lesson prepared me for future internship and employment interviews.'
        ]
      }
    ],
    images: [
      { url: '/images/week5/week5.png', title: 'Overview Cover' },
      { url: '/images/week5/topic.webp', title: 'Topic Cover' },
      { url: '/images/week5/Describing Yourself & Self-Presentation.jpg', title: 'Describing Yourself & Self-Presentation' },
      { url: '/images/week5/Interview Do\'s and Don\'ts.jpg', title: 'Interview Do\'s and Don\'ts' },
      { url: '/images/week5/reflection.jpg', title: 'Reflection' }
    ]
  },
  {
    id: 6,
    icon: Users,
    title: 'Speaking Skills: Meetings',
    shortDescription: 'Understanding meeting terminology, planning checklists, agenda and minutes preparation, and effective speaking and listening skills.',
    status: 'Completed',
    image: '/images/week6/week6.png',
    bannerImage: '/images/week6/topic.jpg',
    ...blueShades[5],
    learningOutcomes: [
      'Understand common terminology used in meetings.',
      'Identify different types of meetings.',
      'Learn how to plan and organize meetings effectively.',
      'Understand the roles and responsibilities of meeting participants.',
      'Develop confidence when contributing to discussions.',
      'Improve communication and teamwork skills.',
      'Participate productively in formal and informal meetings.',
    ],
    keyTopics: [
      'Introduction to Meetings', 'Meeting Terminology', 'Types of Meetings',
      'Importance of Meetings', 'Planning a Meeting', 'Meeting Preparation Checklist',
      'Agenda & Minutes Documentation', 'Effective Participation in Meetings',
      'Speaking & Listening Skills', 'Interpersonal Skills & Disagreements',
      'Leadership in Meetings', 'Group Rehabilitation Centre Activity',
    ],
    reflection: `I learned that meetings are essential for communication and decision-making in organizations. The group rehabilitation centre meeting activity helped me build confidence in speaking up, active listening, and taking key roles like presidency and secretary.`,
    skillsGained: ['Meeting Planning', 'Minutes & Agenda Writing', 'Interpersonal Communication', 'Leadership & Teamwork', 'Speaking Confidence'],
    learningOutcomeImage: '/images/week6/learning outcome.png',
    skillGainedImage: '/images/week6/Skill  gained.png',
    sections: [
      {
        type: 'text',
        title: 'Introduction',
        content: 'During Week 06, I learned about speaking skills in professional environments, particularly focusing on meetings. The lesson introduced the terminology used in meetings, different types of meetings, meeting planning, and effective participation. I learned how meetings are organized, how to contribute confidently, and the importance of communication when working with teams. These skills are essential for professional success and workplace collaboration.'
      },
      {
        type: 'comparison',
        title: 'Understanding Meetings & Terminology',
        col1: {
          title: 'Role of Meetings',
          description: 'An essential method of communication used in organizations to discuss ideas, make decisions, solve problems, and share information:',
          items: [
            'Improve overall organizational communication.',
            'Encourage teamwork and collaborative problem-solving.',
            'Facilitate efficient decision-making processes.',
            'Resolve conflicts and achieve common group goals.'
          ]
        },
        col2: {
          title: 'Common Meeting Terminology',
          description: 'Key terms used to define and control meeting flows:',
          items: [
            'Agenda: A document outlining topics to be discussed.',
            'Minutes: The official written record of discussions and decisions.',
            'Chairperson & Secretary: Roles managing discussions and documentation.',
            'Motion & Proposal: Formal suggestions for group evaluation and vote.'
          ]
        },
        footer: 'Understanding these standard procedures and terms is important for participating effectively in professional meetings.'
      },
      {
        type: 'components',
        title: 'Classifying Meeting Types',
        image: '/images/week6/Classifying Meeting Types.png',
        components: [
          {
            name: 'Formal vs. Informal Meetings',
            desc: 'Meetings are categorized by structure depending on their rules of procedure:',
            bullets: [
              'Formal: Highly structured sessions conducted under strict rules (e.g. Board meetings, AGMs, committee meetings).',
              'Informal: Flexible discussions focused on ideation and information sharing (e.g. brainstorming, team catch-ups).'
            ]
          },
          {
            name: 'Purpose-Driven Meetings',
            desc: 'Sessions organized to achieve specific organizational objectives:',
            bullets: [
              'Decision-Making: Arranged specifically to choose courses of action.',
              'Problem-Solving: Conducted to trace root causes and propose solutions.',
              'Planning: Used to schedule future operations, align on project timelines, and define group goals.'
            ]
          }
        ]
      },
      {
        type: 'components',
        title: 'Meeting Planning & Preparation Checklist',
        image: '/images/week6/Meeting Planning & Preparation Checklist.webp',
        imagePosition: 'side',
        components: [
          {
            name: 'Logistics & Alignment',
            desc: 'Practical parameters that must be set in advance:',
            bullets: [
              'Purpose & Outcome: Clearly define why the meeting is called and what must be achieved.',
              'Participants: Invite only the people necessary to contribute or decide.',
              'Date, Time & Venue: Choose a slot and location suitable for all invitees.',
              'Duration & Type: Estimate total time and decide on a formal/informal structure.'
            ]
          },
          {
            name: 'Resources & Contingencies',
            desc: 'Ensuring correct materials are prepared and potential roadblocks handled:',
            bullets: [
              'Facilities & Equipment: Projectors, whiteboards, presentation computers, and internet access.',
              'Documentation: Distribute invitations, agendas, previous minutes, and working papers.',
              'Potential Problems: Anticipate scheduling conflicts, lack of preparation, or tech failures.'
            ]
          }
        ]
      },
      {
        type: 'comparison',
        title: 'Agenda vs. Meeting Minutes',
        col1: {
          title: 'The Agenda',
          description: 'A document outlining topics to keep discussions organized:',
          items: [
            'Clearly outlines topics and schedules in advance.',
            'Helps keep discussions on track and manages time.',
            'Ensures all critical points are addressed during the meeting.'
          ]
        },
        col2: {
          title: 'Meeting Minutes',
          description: 'The official record of what occurred for future reference:',
          items: [
            'Records exact date, time, and participant list.',
            'Captures key discussions, choices, and official decisions.',
            'Notes action items, assignees, and deadlines.'
          ]
        },
        footer: 'An agenda plans the meeting, while minutes document its outcomes for accountability.'
      },
      {
        type: 'comparison',
        title: 'Communication Skills & Effective Participation',
        image: '/images/week6/Communication Skills & Effective Participation.webp',
        col1: {
          title: 'Speaking & Interpersonal Skills',
          description: 'Verbal abilities and active contributions to discussions:',
          items: [
            'Speaking: Expressing ideas clearly, using professional language, and presenting confidently.',
            'Interpersonal: Respecting others\' opinions and managing disagreements constructively.',
            'Active Contribution: Speaking up, asking relevant questions, and staying focused.'
          ]
        },
        col2: {
          title: 'Listening & Leadership Roles',
          description: 'Receptive skills and guidance responsibilities during meetings:',
          items: [
            'Listening: Paying undivided attention, understanding perspectives, and responding appropriately.',
            'Leadership: Chairperson duties to guide discussions, manage time, keep order, and ensure participation.'
          ]
        },
        footer: 'Successful meetings balance active listening with confident speaking under strong leadership.'
      },
      {
        type: 'list',
        title: 'Group Activity: Rehabilitation Centre Meeting',
        subtitle: 'A practical, team-based simulation to apply meeting procedures:',
        items: [
          { bold: 'Role Election: ', text: 'Elected a President, Secretary, Treasurer, Editor, and standard members to run the committee.' },
          { bold: 'Strategic Discussion: ', text: 'Held a formal meeting to debate ideas for upgrading and improving a rehabilitation centre.' },
          { bold: 'Hands-On Practice: ', text: 'Practiced meeting protocols, taking minutes, managing speaking time, and resolving diverging opinions.' }
        ]
      },
      {
        type: 'reflection',
        title: 'Reflection',
        image: '/images/week6/woman-looking-mirror-flat-vector-illustration-cartoon-beautiful-female-characters-smiling-her-reflection-love-self-ego-narcissism-concept_74855-10191.avif',
        points: [
          'I learned that meetings are essential for communication and decision-making in organizations.',
          'I understood the importance of planning meetings before conducting them.',
          'I learned how agendas and minutes help keep meetings organized and productive.',
          'The lesson improved my confidence in participating in group discussions.',
          'I realized that listening skills are just as important as speaking skills during meetings.',
          'The group activity helped me develop teamwork and leadership abilities.',
          'This lesson prepared me to participate effectively in professional and academic meetings in the future.'
        ]
      }
    ],
    images: [
      { url: '/images/week6/week6.png', title: 'Overview Cover' },
      { url: '/images/week6/topic.jpg', title: 'Topic Cover' },
      { url: '/images/week6/Classifying Meeting Types.png', title: 'Classifying Meeting Types' },
      { url: '/images/week6/Meeting Planning & Preparation Checklist.webp', title: 'Meeting Planning & Preparation Checklist' },
      { url: '/images/week6/Communication Skills & Effective Participation.webp', title: 'Communication Skills & Effective Participation' },
      { url: '/images/week6/woman-looking-mirror-flat-vector-illustration-cartoon-beautiful-female-characters-smiling-her-reflection-love-self-ego-narcissism-concept_74855-10191.avif', title: 'Reflection' }
    ]
  },
  {
    id: 7,
    icon: Phone,
    title: 'Telephone Etiquette & Customer Service',
    shortDescription: 'Understanding telephone behavior rules, outbound/inbound protocols, and excellent customer service principles.',
    status: 'Completed',
    image: '/images/week7/week7.jpg',
    bannerImage: '/images/week7/topic.jpg',
    ...blueShades[6],
    learningOutcomes: [
      'Understand the importance of telephone etiquette in professional environments.',
      'Apply proper techniques when answering and making phone calls.',
      'Demonstrate effective customer service skills.',
      'Learn how to place callers on hold professionally.',
      'Handle customer inquiries and complaints effectively.',
      'Develop active listening and communication skills.',
      'Understand the relationship between customer satisfaction and organizational success.',
    ],
    keyTopics: [
      'Introduction to Telephone Etiquette', 'Importance of Telephone Etiquette', 'Basic Telephone Etiquette Rules',
      'Answering Telephone Calls Professionally', 'The Seven Steps to Perfect Telephone Etiquette',
      'Placing a Caller on Hold', 'Transferring Calls & Taking Messages', 'Outbound Calls Preparation',
      'Proper Telephone Language', 'Customer Service Principles', 'Handling Customer Complaints',
      'Communication & Customer Satisfaction', 'Importance of Positive Attitude',
      'Continuous Improvement in Customer Service',
    ],
    reflection: `I learned that telephone etiquette plays a major role in creating positive first impressions. The lesson helped me understand how proper active listening, professional language, holds, transfers, and a positive attitude can greatly improve customer support experiences.`,
    skillsGained: ['Telephone Etiquette', 'Customer Support', 'Active Listening', 'Complaint Resolution', 'Professional Communication'],
    learningOutcomeImage: '/images/week7/learning outcome.png',
    skillGainedImage: '/images/week7/Skill  gained.png',
    sections: [
      {
        type: 'text',
        title: 'Introduction',
        content: 'During Week 07, I learned about telephone etiquette and customer service skills. The lesson emphasized the importance of professional communication when handling telephone conversations in the workplace. Since telephone interactions often create the first impression of an organization, it is essential to communicate clearly, politely, and professionally. The lesson also introduced customer service principles, handling customer inquiries, managing complaints, and maintaining positive relationships with customers.'
      },
      {
        type: 'comparison',
        title: 'Introduction & Importance of Telephone Etiquette',
        col1: {
          title: 'Role of Telephone Etiquette',
          description: 'Professional behavior, communication style, and manners used when making or receiving calls:',
          items: [
            'Creates positive first impressions for callers.',
            'Builds strong professional client relationships.',
            'Improves customer satisfaction and solves issues.',
            'Enhances overall organizational reputation.'
          ]
        },
        col2: {
          title: 'Why It Matters in Business',
          description: 'Every phone conversation represents both the employee and the company:',
          items: [
            'Acts as a primary point of contact for stakeholders.',
            'Ensures voice tone and word choices are polite and helpful.',
            'Builds public trust and strengthens organization image.',
            'Resolves issues efficiently through professional conduct.'
          ]
        },
        footer: 'Since callers cannot see body language, voice tone and word choice become extremely important.'
      },
      {
        type: 'comparison',
        title: 'Answering Calls Professionally & Basic Rules',
        image: '/images/week7/Answering Calls Professionally & Basic Rules.jpg',
        col1: {
          title: 'Basic Etiquette Rules',
          description: 'Essential guidelines to follow during phone calls:',
          items: [
            'Speak clearly and confidently in a friendly tone.',
            'Avoid eating, chewing gum, or making distracting noises.',
            'Listen carefully without interrupting the caller.',
            'Give full undivided attention (avoid multitasking).'
          ]
        },
        col2: {
          title: 'Answering Calls Professionally',
          description: 'How to greet incoming callers to build immediate rapport:',
          items: [
            'Answer promptly, preferably within three rings.',
            'Greet the caller politely and introduce yourself and the organization.',
            'Offer assistance immediately with a welcoming attitude.',
            'Example: "Good Morning. This is A S J Rajapaksha from the Customer Support Department. How may I help you?"'
          ]
        },
        footer: 'A polite, prompt greeting sets a constructive tone for the rest of the conversation.'
      },
      {
        type: 'components',
        title: 'Seven Steps to Perfect Telephone Etiquette',
        components: [
          {
            name: 'Steps 1–3: Beginning the Call & Attention',
            desc: 'Starting the interaction with speed, clarity, and focus:',
            bullets: [
              'Step 1 (Answer Promptly): Answer quickly in a cheerful, enthusiastic tone.',
              'Step 2 (Introduction): Always identify your name, organization, and department.',
              'Step 3 (Give Full Attention): Eliminate distractions, avoid side conversations, and listen actively.'
            ]
          },
          {
            name: 'Steps 4–5: Accuracy & Habits',
            desc: 'Ensuring correct understanding and maintaining high professionalism:',
            bullets: [
              'Step 4 (Take Notes & Repeat): Note down key details and summarize them back to the caller to confirm accuracy.',
              'Step 5 (Avoid Annoying Habits): Do not chew gum, eat, or sound bored/impatient.'
            ]
          },
          {
            name: 'Steps 6–7: Resolution & Positive Ending',
            desc: 'Concluding the interaction with efficiency and goodwill:',
            bullets: [
              'Step 6 (Resolve Issues Quickly): Know organization procedures and try to solve problems on the first call.',
              'Step 7 (End Call Positively): Summarize follow-up actions, thank the caller, and let them hang up first.'
            ]
          }
        ]
      },
      {
        type: 'components',
        title: 'Holds, Transfers & Message Taking',
        components: [
          {
            name: 'Placing Callers on Hold',
            desc: 'Best practices to respect the caller\'s time:',
            bullets: [
              'Ask permission first and explain why the hold is necessary.',
              'Provide an estimated wait time and return regularly to update the caller.',
              'Thank the caller politely for waiting upon your return.'
            ]
          },
          {
            name: 'Transferring Calls',
            desc: 'Transferring calls smoothly without creating customer frustration:',
            bullets: [
              'Explain why a transfer is needed and obtain the caller\'s approval.',
              'Ensure the receiving department is available before transferring.',
              'Provide relevant notes/information to the next agent so the caller doesn\'t have to repeat themselves.'
            ]
          },
          {
            name: 'Message Taking & Outbound Calls',
            desc: 'Ensuring accuracy for follow-ups:',
            bullets: [
              'Taking Messages: Record caller\'s name, contact number, date/time, purpose, and required action.',
              'Outbound Calls: Verify number, prepare discussion objectives in advance, take notes, and confirm follow-ups.'
            ]
          }
        ]
      },
      {
        type: 'comparison',
        title: 'Proper Telephone Language',
        image: '/images/week7/Proper Telephone Language.jpg',
        col1: {
          title: 'Professional Phrases to Use',
          description: 'Courteous and competent language to use:',
          items: [
            '"May I put you on hold?"',
            '"May I ask who is calling, please?"',
            '"Could you please repeat that?"',
            '"Thank you for your patience."'
          ]
        },
        col2: {
          title: 'Phrases to Avoid',
          description: 'Vague, abrupt, or dismissive expressions:',
          items: [
            '"Hang on."',
            '"Who are you?"',
            '"That\'s not my job."',
            '"I don\'t know."'
          ]
        },
        footer: 'Using professional wording projects credibility and customer care.'
      },
      {
        type: 'components',
        title: 'Customer Service Principles',
        components: [
          {
            name: 'Core Customer Service Elements',
            desc: 'Assisting customers before, during, and after receiving products or services:',
            bullets: [
              'Respect & Courtesy: Treat every customer with dignity, use polite language, and stay positive.',
              'Active Listening: Listen carefully to trace and understand customer concerns.'
            ]
          },
          {
            name: 'Operational Standards',
            desc: 'Ensuring reliable and fast service delivery:',
            bullets: [
              'Prompt Service: Respond quickly and resolve complaints efficiently.',
              'Honesty & Reliability: Provide accurate information and build trust.',
              'Empathy: Understand customer feelings and perspectives from their point of view.'
            ]
          }
        ]
      },
      {
        type: 'comparison',
        title: 'Handling Customer Complaints',
        image: '/images/week7/Handling Customer Complaints.webp',
        col1: {
          title: 'Complaint Management Steps',
          description: 'Turn complaints into opportunities for improvement:',
          items: [
            'Remain calm and maintain professionalism.',
            'Listen carefully to customer frustration without interrupting.',
            'Apologize when appropriate and avoid blaming others.',
            'Focus on finding actionable solutions and follow up.'
          ]
        },
        col2: {
          title: 'Customer Satisfaction & Attitude',
          description: 'Factors influencing how customers perceive the business:',
          items: [
            'Tone of voice and choice of words.',
            'Response time and willingness to help.',
            'Maintaining a positive attitude and patience under pressure.',
            'Continuous improvement based on feedback and self-reflection.'
          ]
        },
        footer: 'Resolving complaints effectively strengthens customer loyalty and long-term relationships.'
      },
      {
        type: 'reflection',
        title: 'Reflection',
        image: '/images/week7/reflection.webp',
        points: [
          'I learned that telephone etiquette plays a major role in creating positive first impressions.',
          'I understood the importance of speaking clearly and professionally during telephone conversations.',
          'I learned how proper listening skills improve communication and customer satisfaction.',
          'The lesson helped me understand how to handle calls, transfers, and customer complaints effectively.',
          'I realized that customer service is not only about solving problems but also about building positive relationships.',
          'I learned that a positive attitude and professional language can greatly improve customer experiences.',
          'This lesson improved my confidence in handling professional telephone conversations and customer interactions.'
        ]
      },
      {
        type: 'text',
        title: 'Activity',
        subtitle: 'Question: Create a mindmap for telephone etiquette',
        image: '/images/week7/mindmap.jpeg'
      }
    ],
    images: [
      { url: '/images/week7/week7.jpg', title: 'Overview Cover' },
      { url: '/images/week7/topic.jpg', title: 'Topic Cover' },
      { url: '/images/week7/Answering Calls Professionally & Basic Rules.jpg', title: 'Answering Calls Professionally & Basic Rules' },
      { url: '/images/week7/Proper Telephone Language.jpg', title: 'Proper Telephone Language' },
      { url: '/images/week7/Handling Customer Complaints.webp', title: 'Handling Customer Complaints' },
      { url: '/images/week7/reflection.webp', title: 'Reflection' },
      { url: '/images/week7/mindmap.jpeg', title: 'Telephone Etiquette Mindmap' }
    ]
  },
  {
    id: 8,
    icon: Handshake,
    title: 'The Art of Negotiation',
    shortDescription: 'Mastering negotiation principles, BATNA strategies, and communication techniques for professional and business success.',
    status: 'Completed',
    image: '/images/week8/week8.jpg',
    bannerImage: '/images/week8/topic.jpg',
    ...blueShades[7],
    learningOutcomes: [
      'Understand the concept and purpose of negotiation.',
      'Identify the key principles of successful negotiation.',
      'Learn the importance of preparation before negotiations.',
      'Understand the concept of BATNA.',
      'Apply effective communication techniques during negotiations.',
      'Recognize different negotiation strategies and tactics.',
      'Identify common negotiation mistakes.',
      'Understand how to close negotiations successfully.',
    ],
    keyTopics: [
      'Introduction to Negotiation', 'Importance of Negotiation', 'Key Negotiation Principles',
      'Negotiation Process', 'Preparation for Negotiation', 'BATNA', 'Identifying Your BATNA',
      'Communication in Negotiation', 'Negotiation Strategies', 'Common Negotiation Mistakes',
      'Closing the Deal', 'Negotiation Role Play',
    ],
    reflection: `I learned that negotiation is an important skill in both professional and personal situations. Understanding BATNA, negotiation principles, and effective communication techniques will help me make better decisions and achieve positive outcomes in future academic, professional, and personal situations.`,
    skillsGained: ['Negotiation', 'BATNA Analysis', 'Active Listening', 'Strategic Communication', 'Win-Win Thinking', 'Conflict Resolution'],
    learningOutcomeImage: '/images/week8/learning outcome.png',
    skillGainedImage: '/images/week8/Skill  gained.png',
    sections: [
      {
        type: 'text',
        title: 'Introduction',
        content: 'During Week 08, I learned about the art of negotiation and its importance in professional and business environments. Negotiation is a structured process used to reach mutually acceptable agreements between two or more parties. The lesson covered key negotiation principles, preparation techniques, communication strategies, BATNA (Best Alternative to a Negotiated Agreement), common mistakes, and methods for successfully closing negotiations. These concepts helped me understand how effective negotiation can create positive outcomes while maintaining strong professional relationships.'
      },
      {
        type: 'comparison',
        title: 'Introduction & Importance of Negotiation',
        image: '/images/week8/Introduction & Importance of Negotiation.webp',
        col1: {
          title: 'What is Negotiation?',
          description: 'A structured process for reaching mutually acceptable agreements:',
          items: [
            'Two or more parties exchange offers, counteroffers, and commitments.',
            'Used in business agreements, salary discussions, and project management.',
            'Helps resolve differences while maintaining long-term relationships.',
            'Aims to create benefits for all parties involved.'
          ]
        },
        col2: {
          title: 'Why Negotiation Matters',
          description: 'Essential professional skill that enables individuals to:',
          items: [
            'Resolve conflicts effectively and reach mutual agreements.',
            'Improve professional relationships and collaboration.',
            'Make informed decisions and achieve organizational goals.',
            'Enhance communication and contribute to personal success.'
          ]
        },
        footer: 'Strong negotiation skills contribute to both personal and professional success in any field.'
      },
      {
        type: 'components',
        title: 'Key Negotiation Principles',
        components: [
          {
            name: 'People & Trust',
            desc: 'Building the human foundation for successful negotiation:',
            bullets: [
              'People Before Problems: Focus on maintaining positive relationships while addressing issues.',
              'Trust and Verify: Build trust with the other party while confirming important information.',
              'Co-own the Process: Encourage collaboration and shared responsibility throughout.',
            ]
          },
          {
            name: 'Strategy & Solutions',
            desc: 'Approaching negotiations with clarity and creativity:',
            bullets: [
              'Focus on Interests: Understand underlying needs rather than focusing only on positions.',
              'Invest in Options: Generate multiple solutions before making decisions.',
              'Divide with Reason: Ensure fairness and logic when distributing resources.',
            ]
          },
          {
            name: 'Mindset & Process',
            desc: 'Maintaining the right attitude and structured approach:',
            bullets: [
              'Mind Power: Maintain confidence, emotional control, and a positive mindset.',
              'The Negotiation Process: Preparation → Discussion → Bargaining → Problem-solving → Agreement → Follow-up.',
            ]
          }
        ]
      },
      {
        type: 'components',
        title: 'Preparing for a Negotiation',
        components: [
          {
            name: 'Foundation Steps',
            desc: 'Building the groundwork before entering negotiations:',
            bullets: [
              'Build a Relationship: Develop trust and rapport with the other party.',
              'Set Clear Goals: Define desired outcomes and objectives.',
              'Know Your BATNA: Identify the best alternative if an agreement cannot be reached.',
            ]
          },
          {
            name: 'Execution Readiness',
            desc: 'Preparing to handle the negotiation itself:',
            bullets: [
              'Strategize: Plan negotiation approaches and prepare for responses.',
              'Be Ready to Improvise: Adapt flexibly to unexpected situations.',
              'Develop Negotiation Skills: Continuously improve communication and decision-making.',
              'Know What Not to Do: Avoid behaviors that could negatively affect the process.',
            ]
          }
        ]
      },
      {
        type: 'comparison',
        title: 'Understanding & Identifying BATNA',
        image: '/images/week8/Understanding & Identifying BATNA.webp',
        col1: {
          title: 'What is BATNA?',
          description: 'Best Alternative to a Negotiated Agreement — your strategic backup plan:',
          items: [
            'Represents the best course of action if negotiations fail.',
            'A strong BATNA increases confidence and bargaining power.',
            'Helps negotiators avoid accepting unfavorable agreements.',
            'Acts as the walk-away point in any negotiation.'
          ]
        },
        col2: {
          title: 'How to Identify Your BATNA',
          description: 'Four key steps to define your best alternative:',
          items: [
            'Step 1: List All Possible Alternatives — identify every available option.',
            'Step 2: Evaluate Alternatives — determine which provides the greatest benefit.',
            'Step 3: Establish a Walk-Away Point — decide the minimum acceptable outcome.',
            'Step 4: Reassess Regularly — review alternatives before and during negotiations.'
          ]
        },
        footer: 'Understanding your BATNA gives you the confidence to walk away from unfavorable deals.'
      },
      {
        type: 'components',
        title: 'Communication in Negotiation',
        image: '/images/week8/Communication in Negotiation.webp',
        imageSize: 'small',
        components: [
          {
            name: 'Listening & Questioning',
            desc: 'Gathering information and building understanding:',
            bullets: [
              'Active Listening: Pay close attention to the other party\'s concerns and viewpoints.',
              'Effective Questioning: Use questions to gather information and clarify issues.',
            ]
          },
          {
            name: 'Relationship & Empathy',
            desc: 'Creating trust and mutual understanding:',
            bullets: [
              'Building Rapport: Develop positive relationships and a foundation of trust.',
              'Strategic Empathy: Understand the feelings, needs, and perspectives of others.',
              'Creating Win-Win Solutions: Find outcomes that genuinely benefit all parties.',
            ]
          }
        ]
      },
      {
        type: 'comparison',
        title: 'Common Mistakes & Closing the Deal',
        col1: {
          title: 'Common Negotiation Mistakes',
          description: 'Pitfalls that reduce negotiation effectiveness:',
          items: [
            'Lack of Preparation: Entering without sufficient planning.',
            'Ignoring BATNA: Failing to consider alternative options.',
            'Emotional Reactions: Allowing emotions to influence decisions.',
            'Cognitive Biases: Deciding based on assumptions rather than facts.',
            'Poor Communication: Failing to listen, clarify, or articulate effectively.'
          ]
        },
        col2: {
          title: 'Closing the Deal Techniques',
          description: 'Methods to finalize agreements successfully:',
          items: [
            'Negotiate the Process: Agree on how negotiations will proceed.',
            'Set Benchmarks & Deadlines: Establish clear timelines and expectations.',
            'Use a Shut-Down Move: Encourage final decisions when discussion concludes.',
            'Take a Break: Allow reflection time if needed.',
            'Bring in a Trusted Third Party: Seek assistance from a neutral mediator.',
            'Set Up a Contingent Contract: Create agreements based on future outcomes.'
          ]
        },
        footer: 'Closing well while avoiding common errors is the hallmark of a skilled negotiator.'
      },
      {
        type: 'reflection',
        title: 'Reflection',
        image: '/images/week8/reflection.jpg',
        points: [
          'I learned that negotiation is an important skill in both professional and personal situations.',
          'I understood the importance of preparing carefully before entering a negotiation.',
          'Learning about BATNA helped me understand how to make better decisions during discussions.',
          'I realized that successful negotiation focuses on interests rather than positions.',
          'The lesson improved my understanding of active listening and effective communication.',
          'The role-play activity helped me practice negotiation skills in a realistic scenario.',
          'This lesson increased my confidence in handling discussions, conflicts, and decision-making situations.'
        ]
      }
    ],
    images: [
      { url: '/images/week8/week8.jpg', title: 'Overview Cover' },
      { url: '/images/week8/topic.jpg', title: 'Topic Cover' },
      { url: '/images/week8/Introduction & Importance of Negotiation.webp', title: 'Introduction & Importance of Negotiation' },
      { url: '/images/week8/Understanding & Identifying BATNA.webp', title: 'Understanding & Identifying BATNA' },
      { url: '/images/week8/Communication in Negotiation.webp', title: 'Communication in Negotiation' },
      { url: '/images/week8/reflection.jpg', title: 'Reflection' }
    ]
  },
  {
    id: 9,
    icon: UserCheck,
    title: 'Grooming and Etiquette',
    shortDescription: 'Understanding the impact of personal branding, professional image, physical grooming, and social and digital etiquette.',
    status: 'Completed',
    image: '/images/week9/week9.jpg',
    bannerImage: '/images/week9/topic.png',
    ...blueShades[8],
    learningOutcomes: [
      'Understand the concepts of grooming and etiquette.',
      'Recognize the importance of first impressions.',
      'Learn how grooming contributes to professionalism.',
      'Understand personal branding and professional image.',
      'Develop awareness of proper hygiene and appearance.',
      'Learn appropriate social and workplace etiquette.',
      'Understand the importance of respecting diversity and personal boundaries.',
      'Apply digital etiquette in professional environments.',
    ],
    keyTopics: [
      'What is Grooming?', 'What is Etiquette?', 'Professionalism', 'First Impressions',
      'Personal Branding', 'Personal Grooming', 'Body, Hand & Oral Hygiene', 'Hair & Skin Care',
      'Professional Dress Code', 'Social & Listening Etiquette', 'Respecting Diversity',
      'Personal Boundaries', 'Digital Etiquette'
    ],
    reflection: `I learned that grooming and etiquette are essential components of professionalism. Successful career growth depends not only on technical skills but also on personal presentation, behavior, communication, and respect for others.`,
    skillsGained: ['Personal Branding', 'Workplace Etiquette', 'Social Manners', 'Professional Grooming', 'Respecting Boundaries', 'Digital Etiquette'],
    learningOutcomeImage: '/images/week9/learning outcome.png',
    skillGainedImage: '/images/week9/Skill  gained.png',
    sections: [
      {
        type: 'text',
        title: 'Introduction',
        content: 'During Week 09, I learned about grooming and etiquette and their importance in professional and academic environments. The lesson explained how personal appearance, behavior, communication, and professionalism influence first impressions and personal branding. I also learned about hygiene, dress codes, social etiquette, respecting diversity, personal boundaries, and digital etiquette. These concepts helped me understand how professional conduct can positively impact future career opportunities and workplace relationships.'
      },
      {
        type: 'comparison',
        title: 'Grooming vs Etiquette',
        col1: {
          title: 'What is Grooming?',
          description: 'Maintaining a clean, neat, appropriate, and well-presented appearance:',
          items: [
            'Includes hygiene, hairstyle, nail care, oral care, clothing, and posture.',
            'Not about beauty or expensive clothing, but about neatness.',
            'Ensures you look presentable and professional.',
            'Removes distractions that may affect communication.'
          ]
        },
        col2: {
          title: 'What is Etiquette?',
          description: 'Socially appropriate behavior and professional manners:',
          items: [
            'Greeting others properly and speaking respectfully.',
            'Listening actively and introducing oneself professionally.',
            'Respecting personal space and boundaries.',
            'Behaving professionally in groups and using phones appropriately.'
          ]
        },
        footer: 'A simple way to distinguish the two: Grooming is how you present yourself, while Etiquette is how you make others feel in your presence.'
      },
      {
        type: 'comparison',
        title: 'Professionalism & First Impressions',
        col1: {
          title: 'Core of Professionalism',
          description: 'How to build trust and credibility in academic and professional settings:',
          items: [
            'Being present, prepared, and punctual.',
            'Maintaining a positive personal brand.',
            'Acting with integrity and dependability.',
            'Paying attention to detail in presentation and work.'
          ]
        },
        col2: {
          title: 'Importance of First Impressions',
          description: 'First impressions are formed quickly and are highly influential:',
          items: [
            'Influenced by appearance, posture, expressions, and punctuality.',
            'Shaped by greeting style, confidence, and tone of voice.',
            'Crucial in interviews, internships, vivas, and networking events.',
            'A positive first impression can open doors for future success.'
          ]
        },
        footer: 'First impressions lay the groundwork for long-term professional relationships.'
      },
      {
        type: 'components',
        title: 'Personal Branding & Personal Grooming',
        image: '/images/week9/Personal Branding & Personal Grooming.jpg',
        imageSize: 'small',
        components: [
          {
            name: 'Elements of Personal Branding',
            desc: 'The reputation and impression you create through behavior, communication, and appearance:',
            bullets: [
              'Appearance: Clean, neat, and appropriate clothing and styling.',
              'Communication: Clear, respectful, and confident expressions.',
              'Behavior: Punctual, dependable, prepared, and consistent in actions.',
              'Digital Presence: Professional profile photos, email addresses, and social media behavior.'
            ]
          },
          {
            name: 'The Goal of Grooming',
            desc: 'Removing unnecessary personal presentation distractions:',
            bullets: [
              'Focus: The primary goal of grooming is to focus others\' attention on your ideas, skills, and communication.',
              'Avoid: Removing distractions caused by poor hygiene, inappropriate attire, or messy presentation.',
              'Consistency: Treating everyone with identical respect and neatness regardless of their status.'
            ]
          }
        ]
      },
      {
        type: 'components',
        title: 'Personal Hygiene & Care Guidelines',
        image: '/images/week9/Personal Hygiene & Care Guidelines.webp',
        imageSize: 'small',
        components: [
          {
            name: 'Body & Hand Hygiene',
            desc: 'Essential practices to ensure personal comfort and confidence:',
            bullets: [
              'Body Hygiene: Regular bathing, wearing clean clothes, managing body odor, and using deodorant moderately.',
              'Hand Hygiene: Keeping hands clean, maintaining trimmed nails, avoiding nail biting, and sanitizing before handshakes.'
            ]
          },
          {
            name: 'Oral Care & Hair Management',
            desc: 'Improving confidence during communication and close interactions:',
            bullets: [
              'Oral Care: Regular brushing, tongue cleaning, drinking water before presentations, and avoiding strong-smelling foods before interviews.',
              'Hair Management: Keeping hair clean, neat, well-managed, and suitable for the professional or lab environment.'
            ]
          },
          {
            name: 'Facial, Nail & Fragrance Care',
            desc: 'Paying attention to details for a polished professional image:',
            bullets: [
              'Facial & Skin Care: Keeping the face clean, managing sweat/oil, and maintaining neat facial hair.',
              'Nails & Fragrances: Nails should be trimmed and clean. Perfumes should be used moderately to avoid distracting others or triggering allergies.'
            ]
          }
        ]
      },
      {
        type: 'comparison',
        title: 'Professional Dress Code & Color Coordination',
        image: '/images/week9/Professional Dress Code & Color Coordination.png',
        col1: {
          title: 'Professional Dress Code',
          description: 'Focusing on neat presentation rather than high-end brands:',
          items: [
            'Ensure clothes are clean, well-fitting, and ironed.',
            'Select styles appropriate for the specific environment or occasion.',
            'Clean shoes and organized documents are part of your presentation.',
            'Dress in a way that builds personal confidence.'
          ]
        },
        col2: {
          title: 'Color Coordination & Neatness',
          description: 'Choosing simple and coordinated colors to present a professional look:',
          items: [
            'Prefer professional colors: White, black, navy, grey, beige, brown, light blue, cream.',
            'Avoid excessively bright colors or highly distracting patterns.',
            'Ensure clothing is simple and not transparent.',
            'Prepare outfits, clean shoes, and organize papers the night before.'
          ]
        },
        footer: 'Preparing clothing and items in advance reduces stress and enhances presentation quality.'
      },
      {
        type: 'components',
        title: 'Social Etiquette, Diversity & Boundaries',
        image: '/images/week9/Social Etiquette, Diversity & Boundaries.jpg',
        imageSize: 'small',
        components: [
          {
            name: 'Social & Listening Etiquette',
            desc: 'Building positive relationships through respectful interactions:',
            bullets: [
              'Greeting & eye contact: Greeting others politely, maintaining eye contact, and using polite language.',
              'Handshakes: BRIEF, professional, respectful, and confident, respecting personal preferences.',
              'Active Listening: Paying attention, avoiding interruptions, taking notes, and respecting opinions.'
            ]
          },
          {
            name: 'Respecting Diversity & Personal Boundaries',
            desc: 'Creating an inclusive, comfortable, and safe working environment:',
            bullets: [
              'Diversity: Respecting cultural differences, avoiding discrimination, and using inclusive language.',
              'Physical & Emotional Boundaries: Respecting personal space, physical contact preferences, and personal privacy.',
              'Professional Boundaries: Maintaining appropriate, respectful relationships in academic and work settings.'
            ]
          }
        ]
      },
      {
        type: 'list',
        title: 'Digital Etiquette',
        subtitle: 'Maintaining professionalism online across digital platforms:',
        image: '/images/week9/Digital Etiquette.jpg',
        items: [
          { bold: 'Professional Language: ', text: 'Use clear, polite, and professional language in all online communications.' },
          { bold: 'Respect Privacy: ', text: 'Respect the digital boundaries and online privacy of colleagues and peers.' },
          { bold: 'Avoid Inappropriate Content: ', text: 'Refrain from sending inappropriate, informal, or spam messages on work platforms.' },
          { bold: 'Online Presence: ', text: 'Maintain a professional online presence with suitable profile pictures and email addresses.' },
          { bold: 'Respectful Communication: ', text: 'Respond timely and communicate respectfully across email, chats, and video calls.' }
        ]
      },
      {
        type: 'reflection',
        title: 'Reflection',
        image: '/images/week9/reflection.jpg',
        points: [
          'I learned that grooming and etiquette are essential components of professionalism.',
          'I understood that first impressions can significantly influence future opportunities.',
          'The lesson helped me recognize the importance of maintaining personal hygiene and professional appearance.',
          'I learned how personal branding affects how others perceive me.',
          'I realized the importance of respecting diversity and personal boundaries.',
          'The discussion on social and digital etiquette helped me improve my professional communication skills.',
          'This lesson encouraged me to develop habits that support a positive and professional image.'
        ]
      }
    ],
    images: [
      { url: '/images/week9/week9.jpg', title: 'Overview Cover' },
      { url: '/images/week9/topic.png', title: 'Topic Cover' },
      { url: '/images/week9/Personal Branding & Personal Grooming.jpg', title: 'Personal Branding & Personal Grooming' },
      { url: '/images/week9/Personal Hygiene & Care Guidelines.webp', title: 'Personal Hygiene & Care Guidelines' },
      { url: '/images/week9/Professional Dress Code & Color Coordination.png', title: 'Professional Dress Code & Color Coordination' },
      { url: '/images/week9/Social Etiquette, Diversity & Boundaries.jpg', title: 'Social Etiquette, Diversity & Boundaries' },
      { url: '/images/week9/Digital Etiquette.jpg', title: 'Digital Etiquette' },
      { url: '/images/week9/reflection.jpg', title: 'Reflection' }
    ]
  },

  {
    id: 10,
    icon: Briefcase,
    title: 'Dining Etiquette and Table Manners',
    shortDescription: 'Mastering formal and informal dining rules, table settings (BMW, outside-in), posture, and social conversations.',
    status: 'Completed',
    image: '/images/week10/week10.jpg',
    bannerImage: '/images/week10/topic.jpg',
    ...blueShades[9],
    learningOutcomes: [
      'Understand the importance of dining etiquette.',
      'Recognize proper table manners in formal and informal settings.',
      'Learn how to use table settings and utensils correctly.',
      'Develop professional dining behavior and communication skills.',
      'Understand appropriate dining conversations.',
      'Learn cultural differences in dining practices.',
      'Apply digital etiquette during meals.',
      'Demonstrate confidence during professional dining situations.',
    ],
    keyTopics: [
      'Introduction to Dining Etiquette', 'Importance of Dining Etiquette', 'First Impressions at the Dining Table',
      'Reading the Table Setting', 'BMW Rule & Outside-In Rule', 'Napkin Etiquette',
      'Ordering with Confidence', 'Posture and Body Language', 'Digital Dining Etiquette',
      'Using Cutlery Correctly', 'Proper Eating Techniques', 'Dining Conversation',
      'Informal & Casual Dining', 'Formal Dining & Multi-Course Meals', 'Beverage Etiquette',
      'Handling Awkward Situations', 'Global Dining Etiquette', 'Dinner Party Challenge'
    ],
    reflection: `I learned that dining etiquette is an important professional and social skill. Understanding dining behavior, communication, respect, cultural awareness, and digital courtesy will help me participate confidently in interviews, networking events, and business meetings.`,
    skillsGained: ['Dining Etiquette', 'Table Manners', 'Social Communication', 'Professional Presence', 'Cultural Awareness', 'Digital Courtesy'],
    learningOutcomeImage: '/images/week10/learning outcome.png',
    skillGainedImage: '/images/week10/Skill  gained.png',
    sections: [
      {
        type: 'text',
        title: 'Introduction',
        content: 'During Week 10, I learned about dining etiquette and table manners, which are important life skills in both personal and professional settings. The lesson explained how proper dining behavior creates positive impressions, demonstrates respect for others, and helps individuals feel confident in various social situations. I learned about formal and informal dining, table settings, dining conversations, personal behavior at the table, cultural dining differences, and modern dining etiquette practices. These skills are valuable for interviews, networking events, business meals, and professional gatherings.'
      },
      {
        type: 'comparison',
        title: 'Introduction & Importance of Dining Etiquette',
        image: '/images/week10/Introduction & Importance of Dining Etiquette.jpg',
        col1: {
          title: 'What is Dining Etiquette?',
          description: 'Rules and behaviors that guide proper conduct during meals:',
          items: [
            'Creates positive first impressions.',
            'Shows respect for hosts, guests, and servers.',
            'Builds self-confidence in various social situations.',
            'Focuses on making others feel comfortable and respected.'
          ]
        },
        col2: {
          title: 'Why It Matters',
          description: 'Essential life skill that influences professional and personal perceptions:',
          items: [
            'Vital during interviews, business lunches, and networking events.',
            'Enhances professional image and credibility.',
            'Promotes cultural awareness and adaptability.',
            'Strengthens interpersonal relationships.'
          ]
        },
        footer: 'Dining etiquette is not about perfection, but about respect and creating a comfortable dining atmosphere.'
      },
      {
        type: 'components',
        title: 'Table Setting & Utensils',
        image: '/images/week10/Table Setting & Utensils.jpg',
        imageSize: 'small',
        components: [
          {
            name: 'Reading the Table Setting',
            desc: 'Understanding formal table arrangements using key rules:',
            bullets: [
              'BMW Rule: Bread plate on the left (B), Meal plate in the center (M), Water glass on the right (W).',
              'Outside-In Rule: Use utensils from the outside toward the inside as each course is served.',
              'Napkin First: Place the napkin on your lap immediately after sitting down.'
            ]
          },
          {
            name: 'Napkin Etiquette',
            desc: 'Proper handling and usage of the dining napkin:',
            bullets: [
              'DO: Place on lap immediately, dab mouth gently, leave on the chair if temporarily leaving.',
              'DON\'T: Tuck into clothing, wave around, use as a tissue, leave crumpled on the table.'
            ]
          },
          {
            name: 'Using Cutlery Correctly',
            desc: 'American vs Continental styles of utensil use:',
            bullets: [
              'American Style: Cut food using knife and fork, then switch the fork to the right hand for eating.',
              'Continental Style: Keep the fork in the left hand and use the knife continuously throughout the meal.'
            ]
          }
        ]
      },
      {
        type: 'comparison',
        title: 'Ordering & Table Behavior',
        image: '/images/week10/Ordering & Table Behavior.avif',
        col1: {
          title: 'Ordering Food Professionally',
          description: 'How to order with confidence and courtesy:',
          items: [
            'Read the entire menu before deciding.',
            'Allow the host to order first.',
            'Speak politely and respectfully to servers.',
            'Avoid demanding language or excessive requests.'
          ]
        },
        col2: {
          title: 'Posture & Body Language',
          description: 'Maintaining a respectful physical presence:',
          items: [
            'Sit upright with both feet on the floor.',
            'Keep hands on lap or wrists on the table (never elbows).',
            'Maintain eye contact and chew with your mouth closed.',
            'Avoid slouching, reaching across the table, or phone use.'
          ]
        },
        footer: 'Polite ordering and positive body language demonstrate maturity and confidence.'
      },
      {
        type: 'comparison',
        title: 'Eating Techniques & Dining Conversations',
        image: '/images/week10/Eating Techniques & Dining Conversations.webp',
        col1: {
          title: 'Proper Eating Techniques',
          description: 'Good eating habits for a comfortable environment:',
          items: [
            'Wait until everyone is served before eating.',
            'Take small, manageable bites.',
            'Chew and swallow completely before speaking.',
            'Avoid slurping food or making loud noises.'
          ]
        },
        col2: {
          title: 'Dining Conversations',
          description: 'Keeping conversations positive and appropriate:',
          items: [
            'Suitable Topics: Hobbies, travel, books, movies, achievements, community events.',
            'Topics to Avoid: Salary discussions, politics, religion, gossip, arguments.',
            'Practice active listening and balance speaking with listening.'
          ]
        },
        footer: 'Effective conversations and proper eating habits create a pleasant dining experience.'
      },
      {
        type: 'components',
        title: 'Dining Styles & Formality',
        components: [
          {
            name: 'Informal Dining & Casual settings',
            desc: 'Etiquette for restaurants, fast food, and dining at someone\'s home:',
            bullets: [
              'Restaurant: Wait to be seated, treat staff respectfully, and clean up after yourself.',
              'At Home: Arrive on time, bring a small gift, compliment the food, and thank the host.',
              'Casual/Fast Food: Wait in queues properly, respect shared spaces, and speak at an appropriate volume.'
            ]
          },
          {
            name: 'Formal Dining & Multi-Course Meals',
            desc: 'Attending structured formal meals with higher standards of detail:',
            bullets: [
              'Arrival & Seating: Arrive 5-10 minutes early, dress appropriately, and allow senior guests to sit first.',
              'Courses: Understand the sequence of courses (Appetizer → Soup → Fish → Main → Cheese → Dessert → Coffee/Tea).',
              'Beverage Etiquette: Hold glasses properly, follow toasting procedures, and drink responsibly.'
            ]
          },
          {
            name: 'Handling Awkward Situations',
            desc: 'Dealing calmly and politely with common dining challenges:',
            bullets: [
              'Accidents: If you drop a utensil or spill a drink, remain calm, apologize briefly, and ask the server for assistance.',
              'Dislikes: If served food you dislike, politely leave it without making faces or comments.'
            ]
          }
        ]
      },
      {
        type: 'comparison',
        title: 'Global & Digital Dining Etiquette',
        image: '/images/week10/Global & Digital Dining Etiquette.png',
        col1: {
          title: 'Digital Dining Etiquette',
          description: 'Responsible use of technology at the table:',
          items: [
            'Keep phones on silent and store them away during meals.',
            'Avoid checking messages or emails at the table.',
            'If taking photos of food, do it quickly without delaying the meal.',
            'For emergency calls, inform others and step away from the table.'
          ]
        },
        col2: {
          title: 'Global Dining Etiquette',
          description: 'Respecting diverse dining customs and traditions:',
          items: [
            'Japan/China: Respect chopstick etiquette and soup slurping customs.',
            'India/Middle East: Use the right hand for eating when traditional.',
            'France/Mexico: Learn specific utensil rules and bread-breaking customs.',
            'Understand and appreciate differences to show global awareness.'
          ]
        },
        footer: 'Digital courtesy and cultural awareness show maturity and global readiness.'
      },
      {
        type: 'reflection',
        title: 'Reflection',
        image: '/images/week10/reflection.jpg',
        points: [
          'I learned that dining etiquette is an important professional and social skill.',
          'I understood how proper table manners contribute to positive first impressions.',
          'The lesson improved my confidence in formal dining situations.',
          'I learned how to communicate respectfully during meals and social gatherings.',
          'I became more aware of cultural differences in dining practices.',
          'The discussion on digital etiquette helped me understand the importance of being fully present during conversations.',
          'The role-play activity allowed me to practice professional dining behavior in a realistic setting.'
        ]
      }
    ],
    images: [
      { url: '/images/week10/week10.jpg', title: 'Overview Cover' },
      { url: '/images/week10/topic.jpg', title: 'Topic Cover' },
      { url: '/images/week10/Introduction & Importance of Dining Etiquette.jpg', title: 'Introduction & Importance of Dining Etiquette' },
      { url: '/images/week10/Table Setting & Utensils.jpg', title: 'Table Setting & Utensils' },
      { url: '/images/week10/Ordering & Table Behavior.avif', title: 'Ordering & Table Behavior' },
      { url: '/images/week10/Eating Techniques & Dining Conversations.webp', title: 'Eating Techniques & Dining Conversations' },
      { url: '/images/week10/Global & Digital Dining Etiquette.png', title: 'Global & Digital Dining Etiquette' },
      { url: '/images/week10/reflection.jpg', title: 'Reflection' }
    ]
  },
  {
    id: 11,
    isAssignment: true,
    icon: FileText,
    title: 'Social Service Initiative',
    shortDescription: 'A social service project organized for children in a childcare home to bring joy and encourage creativity.',
    status: 'Completed',
    image: '/images/Assigment/images.jpg',
    bannerImage: '/images/Assigment/images.jpg',
    color: '#1E3A8A',
    bg: 'rgba(30,58,138,0.08)',
    learningOutcomes: [
      'Organize and execute a social service project for a childcare home.',
      'Develop teamwork, communication, and event coordination skills.',
      'Plan and manage budget and resources under real constraints.'
    ],
    keyTopics: [
      'Project Overview', 'Main Objectives', 'Activities Conducted', 'Budget Details', 'Outcomes & Challenges'
    ],
    reflection: `The project successfully achieved its objectives by creating a fun and meaningful experience for the children while helping team members improve teamwork, communication, event management, and social responsibility skills.`,
    skillsGained: ['Social Responsibility', 'Teamwork', 'Event Management', 'Budgeting', 'Problem Solving'],
    sections: [
      {
        type: 'text',
        title: 'Project Overview',
        content: 'The project was a social service initiative organized for children living in a childcare home. The main goal was to bring happiness, encourage creativity, and provide a memorable experience through fun and engaging activities.'
      },
      {
        type: 'table',
        title: 'Our Team',
        image: '/images/Assigment/team.jpg',
        headers: ['Name', 'Student ID'],
        rows: [
          ['Y.S Weerasekara (Project Leader)', 'SA24610760'],
          ['W.W.N.M Fernando', 'SA24610858'],
          ['P.A.K.I Fernando', 'SA24610388'],
          ['J.R Kassapa', 'SA24611021'],
          ['M.M.W.V Mahamuhandiram', 'SA24610743'],
          ['H.J.T Karunarathna', 'SA24610313'],
          ['N.K.S.P De Silva', 'SA24610410'],
          ['A.S.J De Zoysa Rajapaksha', 'SA24610316'],
          ['M.M.L Fernando', 'SA24102000'],
          ['B.G Kalindu Vidmal', 'SA24610644'],
          ['E.A.D.S Imasha', 'SA24610386'],
          ['K.M.H Gelaka', 'SA24610385']
        ]
      },
      {
        type: 'comparison',
        title: 'Objectives & Activities',
        col1: {
          title: 'Main Objectives',
          description: 'What we aimed to achieve:',
          items: [
            'Bring joy and happiness to children.',
            'Encourage creativity and imagination.',
            'Help children express themselves through art, music, and play.',
            'Create positive and memorable experiences.',
            'Develop teamwork and social responsibility among group members.'
          ]
        },
        col2: {
          title: 'Activities Conducted',
          description: 'Key events and sessions organized:',
          items: [
            'Fun games and group activities.',
            'Collage making using colored papers.',
            'Fruit salad preparation.',
            'Donation of school shoes and storybooks.',
            'Distribution of snacks and refreshments.'
          ]
        }
      },
      {
        type: 'table',
        title: 'Budget Details',
        headers: ['Category', 'Amount (Rs.)'],
        rows: [
          ['Total Amount Collected', 'Rs. 36,000'],
          ['Total Project Cost', 'Rs. 35,359'],
          ['Remaining Balance', 'Rs. 641']
        ]
      },
      {
        type: 'comparison',
        title: 'Reflection Highlights',
        col1: {
          title: 'Positive Outcomes',
          description: 'Successful aspects of the project:',
          items: [
            'Children were happy and enthusiastic.',
            'Activities encouraged creativity and self-expression.',
            'Improved teamwork among members.',
            'Increased social responsibility.'
          ]
        },
        col2: {
          title: 'Challenges Faced',
          description: 'Difficulties encountered during execution:',
          items: [
            'Managing a large number of children.',
            'Time management during activities.',
            'Providing enough materials for everyone.',
            'Transportation issues.'
          ]
        }
      },
      {
        type: 'gallery',
        title: 'Project Gallery',
        categories: [
          {
            name: 'Fun Games & Creative Sessions',
            images: [
              { url: '/images/Assigment/activites/IMG-20260505-WA0474.jpg', title: 'Activities 1' },
              { url: '/images/Assigment/activites/IMG-20260505-WA0485.jpg', title: 'Activities 2' },
              { url: '/images/Assigment/activites/IMG-20260505-WA0488.jpg', title: 'Activities 3' },
              { url: '/images/Assigment/activites/IMG-20260505-WA0489.jpg', title: 'Activities 4' },
              { url: '/images/Assigment/activites/IMG-20260505-WA0493.jpg', title: 'Activities 5' },
              { url: '/images/Assigment/activites/IMG-20260505-WA0501.jpg', title: 'Activities 6' },
              { url: '/images/Assigment/activites/IMG-20260505-WA0521.jpg', title: 'Activities 7' },
              { url: '/images/Assigment/activites/IMG-20260505-WA0574.jpg', title: 'Activities 8' },
              { url: '/images/Assigment/activites/IMG-20260505-WA0575.jpg', title: 'Activities 9' }
            ]
          },
          {
            name: 'Giving Back — Shoes & Storybooks',
            images: [
              { url: '/images/Assigment/donation/IMG-20260505-WA0453.jpg', title: 'Donation 1' },
              { url: '/images/Assigment/donation/IMG-20260505-WA0455.jpg', title: 'Donation 2' },
              { url: '/images/Assigment/donation/IMG-20260505-WA0468.jpg', title: 'Donation 3' },
              { url: '/images/Assigment/donation/IMG-20260505-WA0471.jpg', title: 'Donation 4' },
              { url: '/images/Assigment/donation/IMG-20260505-WA0491.jpg', title: 'Donation 5' },
              { url: '/images/Assigment/donation/IMG-20260505-WA0532.jpg', title: 'Donation 6' },
              { url: '/images/Assigment/donation/IMG-20260505-WA0577.jpg', title: 'Donation 7' }
            ]
          },
          {
            name: 'Fruit Salad Preparation',
            images: [
              { url: '/images/Assigment/salad/IMG-20260505-WA0454.jpg', title: 'Salad 1' },
              { url: '/images/Assigment/salad/IMG-20260505-WA0482.jpg', title: 'Salad 2' },
              { url: '/images/Assigment/salad/IMG-20260505-WA0531.jpg', title: 'Salad 3' },
              { url: '/images/Assigment/salad/IMG-20260505-WA0576.jpg', title: 'Salad 4' }
            ]
          }
        ]
      },
      {
        type: 'text',
        title: 'Conclusion',
        image: '/images/Assigment/IMG-20260505-WA0578.jpg',
        content: 'The project successfully achieved its objectives by creating a fun and meaningful experience for the children while helping team members improve teamwork, communication, event management, and social responsibility skills.'
      }
    ],
    images: [
      { url: '/images/Assigment/images.jpg', title: 'Project Cover' },
      { url: '/images/Assigment/team.jpg', title: 'Our Team' },
      { url: '/images/Assigment/1.jpeg', title: 'Activities 1' },
      { url: '/images/Assigment/2.jpeg', title: 'Activities 2' },
      { url: '/images/Assigment/3.jpeg', title: 'Activities 3' },
      { url: '/images/Assigment/IMG-20260505-WA0578.jpg', title: 'Project Conclusion' }
    ]
  }
];

export const skills = [
  { name: 'Communication', percentage: 88, color: '#1E3A8A' },
  { name: 'Leadership', percentage: 80, color: '#1D4ED8' },
  { name: 'Teamwork', percentage: 92, color: '#2563EB' },
  { name: 'Problem Solving', percentage: 85, color: '#3B82F6' },
  { name: 'Critical Thinking', percentage: 82, color: '#60A5FA' },
  { name: 'Time Management', percentage: 78, color: '#1D4ED8' },
  { name: 'Emotional Intelligence', percentage: 86, color: '#2563EB' },
  { name: 'Professional Ethics', percentage: 90, color: '#1E40AF' },
  { name: 'Presentation Skills', percentage: 76, color: '#3B82F6' },
  { name: 'Career Development', percentage: 84, color: '#60A5FA' },
];
