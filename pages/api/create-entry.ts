import { NextApiHandler } from "next";
import Filter from "bad-words";
import { query } from "../../lib/db";

const filter = new Filter();

const handler: NextApiHandler = async (req, res) => {
  const { toMessage, handleName, content, report, created_at } = req.body;
  console.log(res);
  try {
    if (!handleName || !content) {
      return res
        .status(400)
        .json({ message: "`handleName` and `content` are both required" });
    }

    const results = await query(
      `
      INSERT INTO messages (toMessage, handleName, content, report, created_at)
      VALUES (?, ?, ?, ?, ?)
      `,
      //[filter.clean(toMessage), filter.clean(handleName), filter.clean(content), filter.clean(report), filter.clean(created_at)]
      [toMessage, handleName, content, report, created_at]
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
