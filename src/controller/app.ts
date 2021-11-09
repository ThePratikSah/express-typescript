import { NextFunction, Request, Response } from "express";

const getHomePage = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ msg: "Welcome to homepage" });
  } catch (error) {
    next(error);
  }
};

export default getHomePage;
