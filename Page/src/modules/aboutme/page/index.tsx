import { Avatar, Button, Card, CardContent } from '@mui/material';
import './style.css';

export const AboutMe = () => {
  return (
    <section id="aboutme" className="center">
      <header id="aboutme-header">
        <div className="center">
          <Avatar alt="Imagem do usuário" sx={{ width: 100, height: 100 }} />
          <h2>Jerlyson</h2>
        </div>
        <Button variant="contained" color="primary" aria-label="Botão para contato">
          Entre em contato
        </Button>
      </header>

      <article id="aboutme-content">
        <Card>
          <CardContent>
            <article className="center">
              <h1>Sobre mim</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
                mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </article>
            <article>
              <h2>Habilidades</h2>
              <ul id="about-skills-list">
                <li>
                  <h3>Ferramentas</h3>
                  <ul>
                    <li>Sketch</li>
                  </ul>
                </li>
                <li>
                  <h3>Metodologias</h3>
                  <ul>
                    <li>Duplo Diamante</li>
                    <li>Scrum</li>
                  </ul>
                </li>
                <li>
                  <h3>Banco de dados</h3>
                  <ul>
                    <li>Firebase</li>
                  </ul>
                </li>
              </ul>
            </article>
          </CardContent>
        </Card>
      </article>
    </section>
  );
};
