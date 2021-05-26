import { NextApiHandler } from "next";
import Filter from "bad-words";
import { query } from "../../lib/db";

const filter = new Filter();

const handler: NextApiHandler = async (req, res) => {
  const { toMessage, fromMessage, content, report } = req.body;
  console.log(res);
  try {
    if (!toMessage || !fromMessage || !content) {
      return res
        .status(400)
        .json({ message: "`toMessage` and `fromMessage` and `content` are both required" });
    }

    const results = await query(
      `
      INSERT INTO message (toMessage, fromMessage, content, report)
      VALUES (?, ?, ?, ?)
      `,
      //[filter.clean(toMessage), filter.clean(fromMessage), filter.clean(content), filter.clean(report)]
      [toMessage, fromMessage, content, report]
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
