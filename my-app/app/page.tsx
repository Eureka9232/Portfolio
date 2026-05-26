import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header/page';
import Hero from '@/components/Hero/page';
import About from '@/components/About/page';
import Skills from '@/components/Skills/page';
import Projects from '@/components/Projects/Projects';
import Contacts from '@/components/Contacts/page';
import Footer from '@/components/Footer/page';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}