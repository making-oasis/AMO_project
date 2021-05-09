import { NextApiHandler } from "next";
import Filter from "bad-words";
import { query } from "../../lib/db";

const filter = new Filter();

const handler: NextApiHandler = async (req, res) => {
  const { id, report } = req.body;
  try {
    const results = await query(
      `
      UPDATE entries
      SET report = ?
      WHERE id = ?
      `,
      //[ filter.clean(report), id]
      [report, id]
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
