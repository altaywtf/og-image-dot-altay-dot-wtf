import { IncomingMessage } from "http";
import { parse } from "url";
import { ParsedQuery } from "./types";

export function parseRequest(req: IncomingMessage) {
  const { query } = parse(req.url || "/", true);
  const { type } = query as unknown as ParsedQuery;

  const parsedRequest: ParsedQuery = {
    type: type || "note",
  };

  return parsedRequest;
}
