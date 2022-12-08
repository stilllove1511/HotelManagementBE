
import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger/doc';
import routes from './configs/routes/index'
const app = express();
const port = process.env.PORT || 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('api', routes)
app.listen(port, () => {
    console.log(`App is running localhost:${port}`);
});