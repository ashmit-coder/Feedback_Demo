'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontAwesome";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  linkedin: string;
  leetcode: string;
  mail: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Anshul Kumar',
    title: 'CEO',
    image: '/mayank.jpg',
    linkedin: 'https://www.linkedin.com/in/anshul',
    leetcode: 'https://leetcode.com/anshul',
    mail: 'mailto:anshul@example.com',
  },
  {
    name: 'Ashmit Jagtap',
    title: 'CTO',
    image: '/mayank.jpg',
    linkedin: 'https://www.linkedin.com/in/ashmit',
    leetcode: 'https://leetcode.com/ashmit',
    mail: 'mailto:ashmit@example.com',
  },
  {
    name: 'Shubham Asati',
    title: 'COO',
    image: '/shriraj.jpg',
    linkedin: 'https://www.linkedin.com/in/shubham',
    leetcode: 'https://leetcode.com/shubham',
    mail: 'mailto:shubham@example.com',
  },
  {
    name: 'Manas Agarwal',
    title: 'CFO',
    image: '/aadish.jpg',
    linkedin: 'https://www.linkedin.com/in/manas',
    leetcode: 'https://leetcode.com/manas',
    mail: 'mailto:manas@example.com',
  },
];

export default function TeamSection() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        Our Team
      </h2>
      <div className="row vh-100 flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="col-sm-6 col-lg-3 my-auto p-4"
          >
            <div className="box shadow-sm p-4 transition-all">
              <div className="image-wrapper mb-3">
                <img
                  className="img-fluid rounded-full"
                  src={member.image}
                  alt={`${member.name}'s picture`}
                />
              </div>
              <div className="box-desc">
                <h5 className="text-lg font-bold">{member.name}</h5>
                <p className="text-sm text-gray-600">{member.title}</p>
              </div>
              <ul className="social mt-4 flex justify-center space-x-4">
                <li>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-400 text-white hover:bg-black hover:text-white"
                  >
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                  </a>
                </li>
                <li>
                  <a
                    href={member.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white hover:bg-black hover:text-white"
                  >
                    <i className="fas fa-code"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={member.mail}
                    className="transition-all w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-400 text-white hover:bg-black hover:text-white"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
