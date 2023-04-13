// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { log } from "console";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

function loggedMethod(originalMethod: any, _context: any) {
  function replacementMethod(this: any, ...args: any[]) {
    console.log("hit");
    const result = originalMethod.call(this, ...args);
    return result;
  }
  return replacementMethod;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: new Test().myMethod() });
}

class Test {
  @loggedMethod
  myMethod() {
    return "hello";
  }
}
