import { Button, Card, CardContent, CardMedia } from '@mui/material';
import projectImage from '../../../assets/stock-image.jpg';
import './style.css';

export const Project = () => {
  return (
    <section id="project" className="center">
      <header id="project-header">
        <div className="center">
          <h2>Projetos</h2>
        </div>
      </header>

      <article id="project-content">
        <Card>
          <CardContent>
            <CardMedia component="img" height="194" image={projectImage} alt="Imagem de titulo do projeto" />
            <article>
              <div className="center">
                <h3>Nome do projeto</h3>
                <p>Descrição sobre o projeto</p>
              </div>

              <Button variant="contained" color="primary" aria-label="Botão para ver mais sobre o projeto">
                Ver mais
              </Button>
            </article>
          </CardContent>
        </Card>

        <div id="project-seeall" className="center">
          <Button variant="contained" color="primary" aria-label="Botão para ver todos projetos">
            Ver todos os projetos
          </Button>
        </div>
      </article>
    </section>
  );
};
