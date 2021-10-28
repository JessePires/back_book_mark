const axios = require('axios');
const cheerio = require('cheerio');

async function getURL(url){
  const {data} = await axios.get(url);
  const $ = cheerio.load(data);
  

  const title = $('title')[0].children[0].data; //FUNCIONA EM TODOS OS CASOS APARENTEMENTE
  // const title = $('meta[property="og:title"]').attr('content');
  const description2 = $('meta[name="description"]').attr('content')
  const description = $('meta[property="og:description"]').attr('content')
  const image = $('meta[property="og:image"]').attr('content')
  const site_name = $('meta[property="og:site_name"]').attr('content')

  const response = {
    title: title || site_name || "Título do site",
    description: description || description2 || "Descrição inexistente",
    image,
  };

  return response;
}

export default getURL;