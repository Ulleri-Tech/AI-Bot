import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import calculateQuota from "@/server/lib/calculateQuota";
import isAuth from "@/server/lib/isAuth";

const app = nc();

app.use(isAuth);
app.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await calculateQuota(req);
  res.json(data);
});

export default app;
