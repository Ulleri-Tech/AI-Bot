import nc from "next-connect";
import createRateLimiter from "@/server/rateLimiter";
import { NextApiRequest, NextApiResponse } from "next";
import { Quota } from "@/server/mongo";
import isAuth from "@/server/lib/isAuth";

const app = nc();

app.use(isAuth);
app.use(
  createRateLimiter({
    maxRequests: 5,
    windowMs: 1000 * 60 * 60,
  })
);
app.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const username = req.headers["x-google-user-name"];
  const quota = await Quota.findOne({
    username,
  });

  if (quota) {
    quota.apiKey = undefined;
    await quota.save();
    res.json({
      success: true,
      message: "API key removed successfully",
    });
  }

  res.json({
    success: false,
    message: "Cannot remove an api key that doesn't exist",
  });
});

export default app;
