import { SEND_CHAT } from "@studio/constants";

export const isDevelopment = process.env.NODE_ENV === "development";
export const devToken =
  "eyJhbGciOiJSUzI1NiIsImNhdCI6ImNsX0I3ZDRQRDIyMkFBQSIsImtpZCI6Imluc18yTkhTQmFySFpONDRlVm5PNTVoM1pSbmdNSUUiLCJ0eXAiOiJKV1QifQ.eyJhenAiOiJodHRwczovL2NvZGVtb2QuY29tIiwiZXhwIjoyMDMyMTg2NjI3LCJpYXQiOjE3MTY4MjY2MjcsImlzcyI6Imh0dHBzOi8vY2xlcmsuY29kZW1vZC5jb20iLCJqdGkiOiIyNzc3NDcxZmE2NzBkZGYzMGY1MiIsIm5iZiI6MTcxNjgyNjYyMiwic3ViIjoidXNlcl8yZFkzczltb2JVQjhJZTRVOGg2dkF2YUtBNzMifQ.HButODofVbhyZbKZD14QGIwOWI3nMubCkjoNB-V1uONiqhdMsi3ZebPQAsRKss5-jnEYWg_YZ1c5jZf50iewLvg8h9Pr3Hd0srech98MPon8zCuaYlbE2Hs0poVS94mHXNfN8qCb5wm1GQ-ZM-l1Ux3yJtJ_Ge-hL-GIKHEo11FusTCPZzdMxVJEZXL454sQ1DRhmVMwCmjybzMt4yB-AQL77ieWMxkynyYdI8MhIhmqqlSR-_17_jtdAvmDH5Z4lgr3q0bcEluxwclIZAMSlLJ_mZkQCxnjwgm1Z5kYhE-fO7xfIogX3lX3aolpQczMPIHQXFSqDtMlxonFKt0iHg";

export const codemodAiWsServer = "wss://backend.codemod.com/ws";

const prodGptServer = "https://backend.codemod.com/modgpt";

export const modGptServer = `${
  isDevelopment ? "http://0.0.0.0:8082" : prodGptServer
}/${SEND_CHAT}`;
