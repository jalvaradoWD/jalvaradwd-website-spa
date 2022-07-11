import { FC } from 'react';

interface IFullStackLanguage {
  languageName: string;
  link: string;
}

const Language: FC<IFullStackLanguage> = ({ languageName, link }) => {
  return (
    <li>
      <img className="w-16 h-16" src={link} alt={`${languageName} logo`} />
      <p className="text-center font-bold">{languageName}</p>
    </li>
  );
};

const fullStackLanguages: IFullStackLanguage[] = [
  {
    languageName: 'JavaScript',
    link: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
  },
  {
    languageName: 'HTML',
    link: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
  },
  {
    languageName: 'CSS',
    link: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
  },
  {
    link: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    languageName: 'TypeScript',
  },
  {
    languageName: 'Python',
    link: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  },
  {
    languageName: 'PostgreSQL',
    link: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
  },
  {
    languageName: 'SQLite3',
    link: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Sqlite-square-icon.svg',
  },
];

function App() {
  const navLinks = ['About', 'Skills', 'Contact'];

  return (
    <div>
      <header className="h-screen flex flex-col justify-center items-center gap-8 bg-slate-900 text-white">
        <p className="text-2xl sm:text-4xl lg:text-6xl">
          Hi, I'm Jose Alvarado
        </p>
        <p className="text-2xl sm:text-4xl lg:text-6xl">
          A Full-Stack Web Developer
        </p>
      </header>

      <main className="">
        <nav className="flex justify-evenly bg-blue-600 sticky">
          {navLinks.map((link, index) => (
            <a
              key={`${link}-${index}`}
              href={`#${link.toLowerCase()}`}
              className="text-xl text-white p-2 w-full text-center"
            >
              {link}
            </a>
          ))}
        </nav>

        <div id="about">
          <h2 className="text-center py-2">About Section</h2>
        </div>

        <div id="experience"></div>

        <div id="skills">
          <h2>Skills</h2>
          <div>
            <div>
              <h3>Full-Stack Languages</h3>
              <ul className="flex flex-wrap justify-center gap-4">
                {fullStackLanguages.map((language) => (
                  <Language
                    languageName={language.languageName}
                    link={language.link}
                  />
                ))}
              </ul>
            </div>
            <div>
              <h3>Technologies</h3>
              <ul>
                <li>Visual Studio Code</li>
                <li>Git</li>
                <li>Postman</li>
                <li>Node.js</li>
                <li>React</li>
                <li>GitHub</li>
                <li>Next.js</li>
                <li>Redux</li>
              </ul>
            </div>
            <div>
              <h3>Spoken Languages</h3>
              <ul>
                <li>English</li>
                <li>Spanish</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <h3 className="text-center py-6">Contact Information</h3>
        <div id="contact" className="flex flex-col">
          <a
            className="p-2 bg-blue-600 text-white text-center"
            href="mailto:josealvarado1337@gmail.com"
          >
            Email
          </a>
          <a
            className="p-2 bg-blue-600 text-white text-center"
            href="https://github.com/jalvaradoWD"
          >
            GitHub
          </a>
          <a
            className="p-2 bg-blue-600 text-white text-center"
            href="https://www.linkedin.com/in/jalvaradowd/"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
