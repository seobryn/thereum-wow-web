import Express from 'express';
import DefaultRoutes from './Router';

const PORT = +(process.env.PORT || '8081');
const app = Express();

app.use(Express.json());
app.use(Express.static('public'));

app.set('views', `${__dirname}/views`);
app.set('view engine', "pug");

app.use('/', DefaultRoutes);

app.listen(PORT, () => {
  console.log(`Server Started at PORT => ${PORT}`);
});
