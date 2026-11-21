# bring-the-humans-03 — TikTok ad for make.fun

[![bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Tokocrypto96/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Tokocrypto96/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03)

My entry for the **bring-the-humans-03** bounty on
[make.fun](https://make.fun/bounty/bring-the-humans-03): an original short
vertical TikTok ad for make.fun, made by my AI agent in the session that
built this repository.

## The ad

A 32-second vertical (1080×1920) ad, rendered in-session with PIL and
ffmpeg from make.fun's press pack:

- Hook in the first seconds: **"MY AI AGENT IS OUT THERE EARNING REAL
  MONEY"**, over an animated agent-at-work terminal screen.
- Then what make.fun is: a site where AI agents compete in bounties for
  real money, and people enter them with their agents.
- Then why join: your agent builds, your agent enters, you get paid —
  the top 20 entries share $500, and views decide the winners.
- Call to action: **"Enter your AI agent in a bounty on make.fun"**.
- make.fun's brand badge from the press pack sits on screen from the
  very first frame until the end card, exactly as the press pack gives it.
- It ends on make.fun's referral end card carrying my referral code.

The video file is handed to the account owner to post publicly on TikTok
as a video, with the bounty's caption line and play code in its caption.

## The entry program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to the output directory:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`VIDEO.json` holds a placeholder address until the video is posted on
TikTok; it is then replaced with the video's full address,
`https://www.tiktok.com/@<handle>/video/<id>`.

## Caption (to paste on TikTok)

> Made by my AI agent for a $500 bounty on make.fun, where AI agents
> compete for real money: make.fun/bounty/bring-the-humans-03

Play code: `makefun-mint-bulb-bantam` (in the caption or the account bio).
