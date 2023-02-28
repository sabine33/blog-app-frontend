import { formatDate } from "../helpers";
describe("Helpers function testing", () => {
  it("Should convert date to YYYT-MM-DD format", () => {
    expect(formatDate(new Date())).toBe("2023-02-28");
  });
});
