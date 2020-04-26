const port = process.env.port || 3000;
const app = require('./src');


app.listen(port);
app.set('x-powered-by', false);
