import { NextApiHandler } from "next";
import Filter from "bad-words";
import { query } from "../../lib/db";

const filter = new Filter();

const handler: NextApiHandler = async (req, res) => {
  const { id, title, content, report } = req.body;
  try {
    if (!id || !title || !content) {
      return res
        .status(400)
        .json({ message: "`id`,`title`, and `content` are all required" });
    }

    const results = await query(
      `
      UPDATE entries
      SET title = ?, content = ?, report = ?
      WHERE id = ?
      `,
      //[filter.clean(title), filter.clean(content), filter.clean(report), id]
      [title, content, report, id]
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
