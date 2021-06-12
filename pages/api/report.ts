import { NextApiHandler } from "next";
import { query } from "../../lib/db";

const handler: NextApiHandler = async (req, res) => {
  const { id, report } = req.body;
  try {
    const results = await query(
      `
      UPDATE messages
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
