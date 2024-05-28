import { Button, Card, CardContent, Link } from '@mui/material';
import './style.css';

export const Posts = () => {
  return (
    <section id="posts" className="center">
      <article id="posts-content">
        <Card>
          <CardContent className="center">
            <header id="posts-header">
              <div className="center">
                <h2>Últimas postagens</h2>
              </div>
            </header>
            <article>
              <div id="posts-list" className="center">
                <Link href="#" underline="always">
                  {'DD/MM/YYYY - Título da postagem'}
                </Link>

                <Link href="#" underline="always">
                  {'DD/MM/YYYY - Título da postagem'}
                </Link>

                <Link href="#" underline="always">
                  {'DD/MM/YYYY - Título da postagem'}
                </Link>

                <Link href="#" underline="always">
                  {'DD/MM/YYYY - Título da postagem'}
                </Link>
              </div>

              <div className="center">
                <Button variant="contained" color="primary" aria-label="Botão para ver postagens">
                  Ver todas as postagens
                </Button>
              </div>
            </article>
          </CardContent>
        </Card>
      </article>
    </section>
  );
};
