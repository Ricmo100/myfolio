import React from 'react';
import axios from 'axios';
import { Github, Linkedin, Twitter, Instagram, } from 'lucide-react';
import TextLoop from 'react-text-loop';
import { Link } from 'react-router-dom';


function Home() {
    const phrases = [
        { text: 'web applications', color: '#FF5733' },
        { text: 'optimal experience', color: '#33FF57' },
        { text: 'user-friendly products', color: '#3357FF' },
      ];

    const tools = [
      {
        name: 'HTML',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      },
      {
        name: 'JavaScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'Bootstrap',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      },
      {
        name: 'React',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'Node.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'MongoDB',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'CorelDraw',
        logo: 'https://img.icons8.com/color/48/coreldraw.png',
      },
      {
        name: 'Express.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      },
      {
        name: 'Figma',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      },
      {
        name: 'Git',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'GitHub',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      },
      {
        name: 'Canva',
        logo: 'https://img.icons8.com/color/48/canva.png',
      },
      {
        name: 'VS Code',
        logo: 'https://img.icons8.com/color/48/visual-studio-code-2019.png',
      },
      {
        name: 'Postman',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
      }
    ];

    
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:5000/api/contact', formData);
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        } catch (error) {
          console.error(error);
          alert('An error occurred while sending the message.');
        }
      };

      const services = [
        {
          title: 'Web Development',
          description: 'Building responsive and dynamic websites tailored to your needs.',
          icon: '/images/web development.jpeg',
        },
        {
          title: 'UI/UX Design',
          description: 'Crafting intuitive and visually appealing user interfaces.',
          icon: '/images/UI Design.jpeg',
        },
        {
          title: 'SEO Optimization',
          description: 'Improving website visibility and ranking on search engines.',
          icon: '/images/seo optimization.png',
        },
        {
          title: 'Graphic Design',
          description: 'Creating stunning graphics and branding materials.',
          icon: '/images/graphic design.jpeg',
        },
      ];

      const portfolio = [
        {
          title: 'E-commerce Website',
          image: '/images/ecommerce website.jpg', 
          link: '#',
        },
        {
          title: 'Portfolio Website',
          image: '/images/Portfolio website.png', 
          link: '#',
        },
        {
          title: 'Landing Page',
          image: '/images/Landing page.jpeg', 
          link: '#',
        },
        {
          title: 'Dashboard App',
          image: '/images/dash board app.jpeg', 
          link: '#',
        },
      ];


    return(
        <div>
            <section className="welcome-section">
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-9 description'>
                            <h2>Welcome to MyFolio</h2>
                            <p className="mb-5" style={{ color: 'white' }}>
                                Passionate about creating beautiful{' '}
                                <TextLoop
                                    interval={3000}
                                    springConfig={{ stiffness: 180, damping: 10 }}
                                >
                                    {phrases.map((phrase, index) => (
                                    <span
                                        key={index}
                                        style={{
                                        color: phrase.color,
                                        fontWeight: 'bold',
                                        animation: 'fadeInOutDown 3s ease-in-out infinite',
                                        }}
                                    >
                                        {phrase.text}
                                    </span>
                                    ))}
                                </TextLoop>
                            </p>
                            <Link to="/contact" className="btn btn-lg hire">
                              Hire Me
                            </Link>
                            <Link to="/resume" className="btn btn-lg hire">
                              View Resume
                            </Link>
                        </div>

                        <div className='col-12 col-md-3 icons'>
                            <div className="d-flex flex-column align-items-center gap-4">
                                <a href="https://github.com/Ricmo100" className="text-white fs-3" target="_blank" rel="noopener noreferrer">
                                <Github size={20} className="hover:text-primary transition-colors" />
                                </a>
                                <a href="https://www.linkedin.com/in/lordric/" className="text-white fs-3" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={20} className="hover:text-primary transition-colors" />
                                </a>
                                <a href="https://x.com/Ricmo_234" className="text-white fs-3" target="_blank" rel="noopener noreferrer">
                                <Twitter size={20} className="hover:text-primary transition-colors" />
                                </a>
                                <a href="https://www.instagram.com/lord_ric_/" className="text-white fs-3" target="_blank" rel="noopener noreferrer">
                                <Instagram size={20} className="hover:text-primary transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 abt-text">
                            <p className="display-5 mb-4">About/</p>
                            </div>
                            <div className="col-md-9 text-line">
                            <p className="lead text-muted">
                                Hi, I'm Eric!<br/>
                                A Web Developer empowering products to thrive in the digital age with a human-centered design approach, transforming ideas into captivating interactive experiences.
                            </p>
                            <div className="line-block mt-4">
                                <div className="line-text-wrap d-flex justify-content-between">
                                <div className="small-text progress-1">Kickoff</div>
                                <div className="small-text left">Full Product</div>
                            </div>
                            <div className="line-animation position-relative mt-3">
                                <div className="circle circle-start"></div>
                                <div className="line"></div>
                                <div className="circle circle-end"></div>
                            </div>
                        </div>
                        <Link to="/about" className="btn more btn-lg btn-dark rounded-pill mt-4">
                            Read More
                        </Link>
                    </div>
                </div>
                </div>
            </section>

            <section className="sec py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 abt-text">
                        <p className="display-5 mb-4">Services/</p>
                        </div>
                        <div className="col-md-9">
                            <p className='intro'>Here's how I can help your business get better</p>
                            <hr/>
                            <div className="row g-4">
                                {services.map((service, index) => (
                                <div key={index} className="col-md-6 col-lg-3">
                                    <div className="card h-100 shadow-sm text-center p-4">
                                    <img 
                                    src={service.icon} 
                                    alt={`${service.title} icon`} 
                                    className="mb-3" 
                                    style={{ width: '64px', height: '64px' }} />
                                    <h5 className="fw-bold">{service.title}</h5>
                                    <p className="text-muted">{service.description}</p>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 abt-text">
                        <p className="display-5 mb-4">Tools/</p>
                        </div>
                        <div className="col-md-9">
                            <p className='intro'>Some of my best tools to get your project done</p>
                            <hr/>
                            <div className="row g-4">
                                {tools.map((tool, index) => (
                                <div key={index} className="col-md-3">
                                    <div className="card h-100 shadow-sm text-center p-4">
                                    <img 
                                    src={tool.logo} 
                                    alt={`${tool.name} logo`} 
                                    className="mb-3" 
                                    style={{ width: '48px', height: '48px' }} />
                                    <span className="fw-bold">{tool.name}</span>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 abt-text">
                        <p className="display-5 mb-4">Portfolio/</p>
                        </div>
                        <div className="col-md-9">
                            <div className="row g-4">
                                {portfolio.map((project, index) => (
                                <div key={index} className="col-md-6 col-lg-3">
                                    <div className="card h-100 shadow-sm">
                                    <img src={project.image} alt={project.title} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">{project.title}</h5>
                                        {/*<a href={project.link} className="btn btn-lg port">
                                        View Project
                                        </a> */}
                                    </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='sec'>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                    
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h2 className="display-5 fw-bold mb-4">Have an idea/</h2>
                        <p className="lead text-muted">
                        Let’s do it together! Share your thoughts, and we’ll collaborate to bring your vision to life. Whether it’s a new project or feedback, we’re here for you.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="container mt-3">
                        <h2 className="text-center fs-4 fw-bold text-dark mb-4">Contact Me</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            </div>
                            <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            </div>
                            <div className="mb-3">
                            <label htmlFor="message" className="form-label">
                                Message
                            </label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            </div>
                            <button type="submit" className="btn port w-100">
                            Submit
                            </button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Home;