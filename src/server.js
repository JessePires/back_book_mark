import App from './app';

require('dotenv').config();

// INICIALIZAÇÃO DO SERVIDOR NA PORTA ESPECIFICADA NO .env
App.listen(process.env.PORT, () => {
  console.log(
    'RUNNING IN MODE: ',
    process.env.NODE_ENV,
    'on',
    process.env.PORT
  );
});
