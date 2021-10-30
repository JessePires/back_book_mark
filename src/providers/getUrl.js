const axios = require('axios');
const cheerio = require('cheerio');

async function getURL(url){
  try {
    const { data } = await axios.get(url, {timeout: 4000});
    const $ = cheerio.load(data);

    const title = $('title')[0].children[0].data; //FUNCIONA EM TODOS OS CASOS APARENTEMENTE
    // const title = $('meta[property="og:title"]').attr('content');
    const description2 = $('meta[name="description"]').attr('content')
    const description = $('meta[property="og:description"]').attr('content')
    const image = $('meta[property="og:image"]').attr('content')
    const site_name = $('meta[property="og:site_name"]').attr('content')
  
    return {
      title: title || site_name || "Título do site",
      description: description || description2 || "Descrição inexistente",
      image,
    };
  } catch (error) {
    return {
      title: url,
      description: url,
    }
  }
}

export default getURL;