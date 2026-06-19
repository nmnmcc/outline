import { vi } from "vitest";

export default {
  upload: vi.fn().mockReturnValue("/endpoint/key"),

  getUploadUrl: vi.fn().mockReturnValue("http://mock/create"),

  getUrlForKey: vi.fn().mockReturnValue("http://mock/get"),

  getSignedUrl: vi.fn().mockReturnValue("http://s3mock"),

  getPresignedPost: vi.fn().mockReturnValue({}),

  getPresignedPut: vi.fn().mockReturnValue({
    url: "http://s3mock/presigned-put-url",
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": "attachment",
      "Cache-Control": "max-age=31557600",
    },
  }),
};
