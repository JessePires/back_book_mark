import * as Yup from 'yup';

// PROVIDERS
import getURL from "../../providers/getUrl";

// MODELS
import Link from '../models/Link';
import BookMark from '../models/BookMark';

class LinkController {
  async store (req, res) {
    try {

      const schema = Yup.object().shape({
        id_book_mark: Yup.string().required(),
        url: Yup.string().url().required(),
      });


      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: "Validation Fail!" });
      }

      // VERIFICANDO SE O BOOKMARK REALMENTE EXISTE
      const { id_book_mark } = req.body;
      const bookMark = await BookMark.findByPk(id_book_mark);
      if (!bookMark) return res.status(400).json({ error: "BookMark doesn't exists!" });

      // OBTENDO INFORMAÇÕES DO SITE
      const { url } = req.body;


      const { 
        title,
        description, 
        image,
      } = await getURL(url);

      const link = await Link.create({
        url,
        name: title,
        description,
        image,
        id_book_mark,
      });

      return res.status(200).json(link);
    } catch(error) {
      console.log(error);
      return res.status(500).json(error);
    }

  }

  async show (req, res) {
    try {
      
      const schema = Yup.object().shape({
        id: Yup.string().required()
      });
      
      if (!(await schema.isValid(req.params))) {
        return res.status(400).json({ error: "Validation Fail!" });
      }

      const { id } = req.params;
      
      const links = await Link.findAll({
        where: {
          id_book_mark: id,
        },
      });
  
      return res.status(200).json(links);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async destroy(req, res){
    try {
      
      const schema = Yup.object().shape({
        id: Yup.number().required()
      });
      
      if (!(await schema.isValid(req.params))) {
        return res.status(400).json({ error: "Validation Fail!" });
      }
      
      const { id } = req.params;
      const link = await Link.findByPk(id);

      link.destroy();
  
      return res.status(200).json(link);
    } catch (error) {
      console.log(error)
      return res.status(500).json(error);
    }
  }
}

export default new LinkController();
