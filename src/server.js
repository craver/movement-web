import sirv from 'sirv';
//import polka from 'polka';
import express from 'express'
import compression from 'compression';
import * as sapper from '@sapper/server';

import uuidv4 from 'uuid/v4';
import helmet from 'helmet';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = express()
//app.use(helmet())

/* test */
//app.get('/api/test', (req, res, next) => { res.end('Hello there !'); })

// app.use((req, res, next) => {
// 	res.locals.nonce = uuidv4();
// 	next();
// }); 

/*
app.use(helmet({
	contentSecurityPolicy: {
		directives: {
			scriptSrc: [
				"'self'",
				(req, res) => `'nonce-${res.locals.nonce}'`
			]
		}
	}
}));*/

//app.use('/test5');

app.use(
  compression({ threshold: 0 }),
  sirv('static', { dev }),
  sapper.middleware()
)



app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))