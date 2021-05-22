import { NextApiHandler } from "next";
import Filter from "bad-words";
import { query } from "../../lib/db";

const filter = new Filter();

const handler: NextApiHandler = async (req, res) => {
  const { id, toMessage, fromMessage, content, report } = req.body;
  try {
    if (!id || !toMessage || !fromMessage || !content) {
      return res
        .status(400)
        .json({ message: "`id`, `toMessage`, `fromMessage`, and `content` are all required" });
    }

    const results = await query(
      `
      UPDATE entries
      SET toMessage = ?, fromMessage = ?, content = ?, report = ?
      WHERE id = ?
      `,
      //[filter.clean(toMessage), filter.clean(fromMessage), filter.clean(content), filter.clean(report), id]
      [toMessage, fromMessage, content, report, id]
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
