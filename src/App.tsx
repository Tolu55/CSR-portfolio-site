import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Linkedin, Download, CheckCircle2, Clock, FileText, ChevronRight, Monitor, Headphones, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#work' },
    { name: 'Samples', href: '#samples' },
    { name: 'Certs', href: '#certs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className={`text-2xl font-extrabold tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
          Tolu Ajani
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? 'text-charcoal' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-primary' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden border-t border-gray-100"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-charcoal hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-white text-center py-3 rounded-xl font-semibold"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-dark-base overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 mesh-bg opacity-40"></div>
      <div className="relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Toluwani Ajani</span>
          <p className="text-white/70 text-lg md:text-xl mb-6 font-medium">
            Customer Support Professional | Customer Experience | Remote-Ready
          </p>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
            Turning frustrated users into satisfied ones — <span className="text-primary">fast, clearly, and with empathy.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            6+ years resolving complex customer issues across SaaS, healthcare, and enterprise environments. Experienced with Freshservice, HubSpot, and remote-first support workflows.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#work"
              className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
            >
              View My Work
            </a>
            <a
              href="/cv.pdf"
              download="Toluwani_Ajani_CV.pdf"
              className="w-full sm:w-auto border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-background px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-charcoal">About Me</h2>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
              I'm a Lagos-based customer support professional with over 6 years of experience helping users resolve complex issues across SaaS, healthcare, and enterprise environments.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-12">
              I specialise in delivering clear, empathetic support that resolves issues quickly and leaves customers feeling genuinely helped. My background spans ticketing systems, SLA management, customer communication, and cross-functional collaboration — and I bring the same care to every interaction whether it's a simple query or a high-priority escalation.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 border-t border-gray-200">
              <div>
                <p className="text-4xl font-extrabold text-primary mb-1">6+</p>
                <p className="text-sm font-semibold text-label uppercase tracking-wider">Years in Support</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-primary mb-1">500+</p>
                <p className="text-sm font-semibold text-label uppercase tracking-wider">Tickets Resolved</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-primary mb-1">3</p>
                <p className="text-sm font-semibold text-label uppercase tracking-wider">Industry Environments</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-primary/10 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt="Toluwani Ajani" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-primary/20 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Customer Support',
      icon: <Headphones className="text-primary" size={32} />,
      skills: ['Ticket triage & prioritisation', 'Email & live chat support', 'Escalation management', 'SLA adherence', 'Customer communication']
    },
    {
      title: 'Service Operations',
      icon: <Monitor className="text-primary" size={32} />,
      skills: ['Knowledge base authoring', 'Process documentation', 'Onboarding support', 'Cross-functional collaboration', 'Reporting & insights']
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench className="text-primary" size={32} />,
      skills: ['Freshservice (Expert Certified)', 'HubSpot Service Hub', 'Google Workspace', 'Jira', 'Zendesk']
    }
  ];

  const tools = [
    { name: 'Freshservice', icon: 'https://cdn.simpleicons.org/freshworks/0D7377' },
    { name: 'HubSpot', icon: 'https://cdn.simpleicons.org/hubspot/0D7377' },
    { name: 'Google Workspace', icon: 'https://cdn.simpleicons.org/google/0D7377' },
    { name: 'Jira', icon: 'https://cdn.simpleicons.org/jira/0D7377' },
    { name: 'Slack', icon: 'https://cdn.simpleicons.org/slack/0D7377' },
    { name: 'Zendesk', icon: 'https://cdn.simpleicons.org/zendesk/0D7377' },
    { name: 'Microsoft 365', icon: 'https://cdn.simpleicons.org/microsoftoffice/0D7377' },
    { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion/0D7377' },
    { name: 'Intercom', icon: 'https://cdn.simpleicons.org/intercom/0D7377' },
    { name: 'Zoom', icon: 'https://cdn.simpleicons.org/zoom/0D7377' },
    { name: 'Webflow', icon: 'https://cdn.simpleicons.org/webflow/0D7377' },
    { name: 'WordPress', icon: 'https://cdn.simpleicons.org/wordpress/0D7377' },
  ];

  return (
    <section id="skills" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Skills & Expertise</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-background border border-gray-100 card-shadow"
            >
              <div className="mb-6">{cat.icon}</div>
              <h3 className="text-xl font-bold mb-6 text-charcoal">{cat.title}</h3>
              <ul className="space-y-4">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-3 text-charcoal/70">
                    <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                    <span className="text-sm font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="pt-16 border-t border-gray-100">
          <p className="text-center text-label font-bold uppercase tracking-widest text-xs mb-12">Tools I Use Daily</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 md:gap-12">
            {tools.map((tool, idx) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-background rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  <img src={tool.icon} alt={tool.name} className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                </div>
                <span className="text-[10px] font-bold text-label text-center uppercase tracking-tighter">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Work = () => {
  const caseStudies = [
    {
      title: 'Helpdesk System Implementation',
      context: 'Service Operations | Bitscape Technology Services',
      situation: 'The organisation had no structured support system. Requests came in via WhatsApp, email, and verbal handoffs with no way to track issues, measure response times, or hold the team accountable to SLAs.',
      action: 'Configured Freshservice from scratch — built ticket categories, SLA policies, automation rules, and agent routing. Ran a walkthrough for stakeholders and trained the team on the new workflow.',
      outcome: 'Centralised all support requests into one platform, reduced average resolution time, and gave management real-time visibility into open tickets and team performance.',
      tools: ['Freshservice', 'SLA Management', 'Automation', 'Reporting'],
      bgColor: 'bg-white'
    },
    {
      title: 'Customer Onboarding Support — M365 Migration',
      context: 'Customer Success & Support | Bitscape Technology Services',
      situation: 'A client organisation was moving to a new software platform and needed their staff guided through the transition smoothly, with minimal disruption to their day-to-day work.',
      action: 'Coordinated the customer-facing side of the rollout — communicated the transition plan to end users, handled incoming support requests throughout the process, and provided hands-on guidance to users experiencing difficulties.',
      outcome: 'Completed the rollout on schedule. Maintained a sub-2-hour response rate for support requests in the first two weeks post-migration, with positive feedback from the client on communication and responsiveness.',
      tools: ['Microsoft 365', 'Email Support', 'User Communication', 'Ticketing'],
      bgColor: 'bg-primary/5'
    },
    {
      title: 'Support Operations in a Healthcare Environment',
      context: 'Customer & User Support | mDoc Healthcare',
      situation: 'Clinical and operational staff needed fast, reliable support for the tools they used daily — in an environment where slow responses had a direct impact on their ability to do their jobs.',
      action: 'Managed day-to-day user support across multiple sites, handled escalations calmly and efficiently, and built an internal knowledge base to help staff self-resolve common issues and reduce repeat contacts.',
      outcome: 'Reduced repeat contact volume through self-service documentation. Maintained high satisfaction from department leads, who noted responsiveness and clear communication as standout qualities.',
      tools: ['Google Workspace', 'Knowledge Base', 'Escalation Management', 'Documentation'],
      bgColor: 'bg-white'
    },
    {
      title: 'Support Process Documentation',
      context: 'Service Quality | Process Design',
      situation: 'The organisation needed clear, enforceable policies that both the support team and end users could follow — written in a way that was accessible to non-technical readers.',
      action: 'Researched best practices and drafted structured policy and process documents covering step-by-step procedures, exception handling, and escalation paths — designed for practical day-to-day use.',
      outcome: 'Delivered documentation adopted as official organisational standards, later referenced in client-facing reviews as evidence of a mature support operation.',
      tools: ['Process Documentation', 'Policy Writing', 'Knowledge Management'],
      bgColor: 'bg-primary/5'
    }
  ];

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Case Studies</h2>
          <p className="text-label font-medium">Real-world problems solved with technical expertise and strategic thinking.</p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-8 md:p-12 rounded-[2rem] ${study.bgColor} border border-gray-100 card-shadow`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full uppercase tracking-wider mb-3">
                    {study.context.split('|')[0].trim()}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-charcoal">{study.title}</h3>
                  <p className="text-label text-sm mt-1">{study.context.split('|')[1].trim()}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div>
                  <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Situation</h4>
                  <p className="text-charcoal/80 text-sm leading-relaxed">{study.situation}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Action</h4>
                  <p className="text-charcoal/80 text-sm leading-relaxed">{study.action}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Outcome</h4>
                  <p className="text-charcoal/80 text-sm leading-relaxed font-medium">{study.outcome}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
                {study.tools.map(tool => (
                  <span key={tool} className="px-3 py-1 bg-charcoal/5 text-charcoal/60 text-[10px] font-bold rounded-md uppercase tracking-wider">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Samples = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: 'Support Email', icon: <Mail size={18} /> },
    { title: 'Ticket Resolution', icon: <FileText size={18} /> },
    { title: 'KB Article', icon: <CheckCircle2 size={18} /> },
  ];

  const content = [
    (
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex flex-col gap-1">
          <p className="text-xs text-label"><span className="font-bold">From:</span> Tolu Ajani &lt;support@company.com&gt;</p>
          <p className="text-xs text-label"><span className="font-bold">Subject:</span> Re: Unable to log in to my account</p>
        </div>
        <div className="p-8 text-charcoal/90 leading-relaxed text-sm md:text-base italic font-serif">
          "Hi [User], thanks for reaching out — I'm sorry to hear you're having trouble accessing your account. <br /><br />
          I've looked into this and can see the sign-in was blocked due to a failed verification attempt. I've reset your authentication settings — please try logging in again and follow the prompts to re-verify your identity. <br /><br />
          If you run into any issues during this process, just reply to this email and I'll walk you through it. You should be back up and running within 10 minutes. <br /><br />
          Best regards, <br />
          Tolu"
        </div>
      </div>
    ),
    (
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-primary/5 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-primary">Ticket #2847</span>
            <span className="px-2 py-0.5 bg-red-100 text-red-600 text-[10px] font-bold rounded uppercase">High Priority</span>
          </div>
          <span className="text-[10px] font-bold text-label uppercase">Category: Access Issue</span>
        </div>
        <div className="p-8 space-y-6">
          <div>
            <h4 className="text-xs font-bold text-label uppercase tracking-widest mb-2">Issue</h4>
            <p className="text-sm text-charcoal/80">Customer unable to access their account portal following a recent account update. Access permissions were not correctly applied after the change.</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-label uppercase tracking-widest mb-2">Resolution</h4>
            <p className="text-sm text-charcoal/80">Restored correct access permissions and confirmed with the customer on a brief call. Identified a gap in the account update process where permissions were not reviewed — flagged to team lead for process update.</p>
          </div>
          <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs font-bold text-charcoal">Status: Resolved</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-label" />
              <span className="text-xs font-bold text-charcoal">Time: 34 minutes</span>
            </div>
          </div>
        </div>
      </div>
    ),
    (
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm p-8">
        <h3 className="text-xl font-bold text-charcoal mb-6 flex items-center gap-3 pb-4 border-b border-gray-100">
          <FileText className="text-primary" />
          How to Reset Your Account Password
        </h3>
        <div className="space-y-4 text-sm text-charcoal/80 leading-relaxed">
          <p className="font-medium">If you've forgotten your password or your account is locked:</p>
          <ol className="list-decimal list-inside space-y-3 pl-2">
            <li>Click 'Forgot Password' on the login page.</li>
            <li>Enter your registered email address.</li>
            <li>Check your inbox for a reset link and click it within 15 minutes.</li>
            <li>Set a new password and log in.</li>
          </ol>
          <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-100 flex gap-3 text-amber-800 text-xs">
            <div className="shrink-0">⚠️</div>
            <p>If you don't receive the email or continue to experience issues, contact our support team and we'll get you sorted.</p>
          </div>
        </div>
      </div>
    )
  ];

  return (
    <section id="samples" className="py-24 bg-background px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Communication Samples</h2>
          <p className="text-label font-medium">Clear, empathetic, and professional communication is at the heart of what I do.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab, idx) => (
            <button
              key={tab.title}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === idx 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'bg-white text-charcoal hover:bg-gray-50'
              }`}
            >
              {tab.icon}
              {tab.title}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {content[activeTab]}
        </motion.div>
      </div>
    </section>
  );
};

const Certs = () => {
  const certifications = [
    { name: 'Freshdesk Expert Certification', issuer: 'Freshworks', status: 'Completed', icon: '✅' },
    { name: 'HubSpot Service Hub Software', issuer: 'HubSpot Academy', status: 'Completed', icon: '✅' },
    { name: 'Delivering Exceptional Customer Support', issuer: 'HubSpot Academy', status: 'Completed', icon: '✅' },
    { name: 'Cloud Engineering Diploma', issuer: 'AltSchool Africa', status: 'Completed', icon: '✅' },
  ];

  return (
    <section id="certs" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Certifications</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-background border-t-4 border-primary card-shadow flex flex-col justify-between"
            >
              <div>
                <p className="text-[10px] font-bold text-label uppercase tracking-widest mb-2">{cert.issuer}</p>
                <h3 className="text-lg font-bold text-charcoal leading-snug mb-4">{cert.name}</h3>
              </div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider w-fit ${
                cert.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                cert.status === 'In Progress' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600'
              }`}>
                <span>{cert.icon}</span>
                {cert.status}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <footer id="contact" className="bg-dark-base py-24 px-6 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Let's Work Together</h2>
          <p className="text-white/60 text-lg mb-12 leading-relaxed">
            Open to remote customer support and customer service roles. <br />
            Based in Lagos, Nigeria — available across time zones.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:ttoluwani55@gmail.com"
              className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/toluwani-ajani/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-2 border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <a
            href="/cv.pdf"
            download="Toluwani_Ajani_CV.pdf"
            className="text-white/40 hover:text-primary transition-colors text-sm font-semibold flex items-center justify-center gap-2"
          >
            <Download size={16} />
            Download CV (PDF)
          </a>
        </motion.div>
      </div>

      <div className="mt-24 pt-8 border-t border-white/5 text-white/20 text-xs font-medium tracking-widest uppercase">
        © {new Date().getFullYear()} Toluwani Ajani • Built for Excellence
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Samples />
        <Certs />
        <Contact />
      </main>
    </div>
  );
}
