import Art from '../models/art';
import Comments from '../models/comments';

class ArtController {
  static async postArt(req, res) {
    const { name, image, category, description } = req.body;
    if (!name || !image || !description) {
      res.status(400).send({ error: 'Please submit all required fields' });
      return;
    }
    console.log(`The request is ${req.userId}`);
    const art = await Art.create({
      name,
      image,
      // postedBy: req.userId,
      postedBy: req.body.userId,
      category,
      description: description || '',
    });

    art.save();
    res.status(201).json(art);
    //{ message: 'Art posted successfully' });
  }

  static async myArts(req, res) {
    // const allArts = await Art.find({ postedBy: req.userId });
    const allArts = await Art.find();
    res.status(200).send(allArts);
  }

  static async getByCategory(req, res) {
    const allArts = await Art.find({
      category: req.param.category,
    });
    res.status(200).send(allArts);
  }

  static async deleteArt(req, res) {
    const artId = req.params.id;
    // console.log(artId)
    const art = await Art.deleteOne({ _id: artId
      // , postedBy: req.userId
    });
    console.log(art)
    if (art.deletedCount) {
      res.status(204).json("Art deleted64247e41c810df941a47aa1c");
    } else {
      res.status(401).json({ error: 'Does not exist' });
    }
  }

  static async comment(req, res) {
    try {
      console.log(req.userId);
      const artId = req.params.id;
      const comment = await Comments.create({
        text: req.body.text,
        userId: req.userId,
        artId,
      });
      console.log(comment);
      const art = await Art.findByIdAndUpdate(
        artId,
        {
          $push: { comments: { text: comment.text, postedBy: req.userId } },
        },
        { new: true }
      );
      res.status(200).send(art);
    } catch (err) {
      console.log(err);
      res.status(404).send({ error: 'failed' });
    }
  }

  static async like(req, res) {
    const artId = req.params.id;
    const art = await Art.findByIdAndUpdate(
      artId,
      {
        $addToSet: { likes: req.userId },
      },
      { new: true }
    );
    res.status(200).send(art);
  }

  static async unlike(req, res) {
    const artId = req.params.id;
    const art = await Art.findByIdAndUpdate(
      artId,
      {
        $pull: { likes: req.userId },
      },
      { new: true }
    );
    res.status(200).send(art);
  }
}

export default ArtController;
