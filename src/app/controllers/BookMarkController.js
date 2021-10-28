import * as Yup from 'yup';

// MODELS
import BookMark from '../models/BookMark';

class BookMarkController {
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        id: Yup.string().required(),
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({error: "Validation Fail!"});
      }
        
      const { id } = req.body;
      const bookMark = await BookMark.findOrCreate({
        where: {
          id,
        },
        defaults: {
          id,
        },
      });

      const returnedData = {
        bookmark: bookMark[0],
        isCreated: bookMark[1]
      }

      return res.status(200).json(returnedData);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
}

export default new BookMarkController();
