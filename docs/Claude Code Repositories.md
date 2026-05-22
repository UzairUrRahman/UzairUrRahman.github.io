# If You're Not Using These 20 Repos, Delete CLAUDE CODE

## Start with the official stuff

1.  **anthropics/claude-code:** the main repo. 55k+ stars. You already have it, but the README has setup tricks most people skip.
2.  **anthropics/skills:** the official skills library (37.5k stars). PDF, DOCX, XLSX, PPTX, image generation. If you ever need Claude to produce a Word doc that doesn't look like a hostage note, this is where you start.
3.  **anthropics/anthropic-cookbook:** recipes for tool use, RAG, agent patterns, classification. I keep going back to this one.
4.  **anthropics/claude-code-action:** a GitHub Action that lets you @claude inside a PR comment and get a code review. Took me ten minutes to set up.

## The awesome lists that save you from midnight GitHub-scrolling

1.  **hesreallyhim/awesome-claude-code:** 28.5k stars. The master index. Only Claude itself is allowed to submit PRs, which is a flex I respect.
2.  **ComposioHQ/awesome-claude-skills:** 50+ production-tested skills. Postgres, deep research, root-cause tracing. Install via /skill add.
3.  **ComposioHQ/awesome-claude-plugins:** same vibe for plugins. Frontend design, artifact builders, connect-apps.

## Skills that punch way above their weight

1.  **obra/superpowers:** 148k stars and the most popular skills library out there. It runs Claude through brainstorm → spec → plan → TDD → review → merge with subagent orchestration baked in. After I installed it, I stopped writing my own planning prompts entirely.
2.  **travisvn/awesome-claude-skills:** community-curated, 22k+ installs. SEO, marketing, design, security. Bonus points for actually warning you about untrusted skills.

## Subagents (the real unlock)

A single Claude session gets cluttered fast. Half-read files, stale debug output, lost context. Subagents fix this by handing you a team of specialists instead of one overworked generalist.

1.  **wshobson/agents:** 25k+ stars. Production subagents for strategy, dev, security, design, data, research. Drop-in.
2.  **baryhuang/claude-code-agents:** 59 specialized agents. TypeScript, Python, Java, Kotlin reviewers. Great if you're onboarding a new team.

## MCP servers (the bridges to your stack)

On its own, Claude Code only reads files and runs commands. MCP servers connect it to the actual tools you work in.

1.  **github/github-mcp-server:** official, and the most-used MCP server in the ecosystem. PRs, issues, CI/CD, the whole platform.
2.  **microsoft/playwright-mcp:** browser automation through MCP. Claude can navigate, fill forms, scrape dynamic content.
3.  **crystaldba/postgres-mcp:** safe Postgres access. Read-only by default. Stop hand-typing SQL into your terminal.
4.  **upstash/context7:** pulls real-time, version-specific library docs into your prompts. No more Claude inventing APIs that don't exist.
5.  **zilliztech/claude-context:** semantic code search for huge repos. Finds the right file without you breadcrumbing it.

## Orchestration and memory

Claude's biggest weakness is amnesia. Every session starts from zero. These fix that.

1.  **ruvnet/claude-flow:** 11.4k stars. Multi-agent orchestration with persistent memory. Reshapes how teams build with AI.
2.  **smtg-ai/claude-squad:** 5.6k stars. Terminal multiplexer for AI coding agents. Run parallel sessions without chaos.
3.  **thedotmack/claude-mem:** long-term memory through context compression. Solves the #1 Claude Code complaint in a single repo.

## And one to keep you honest

1.  **nizos/tdd-guard:** 1.7k stars. Automated TDD enforcement. Blocks Claude from skipping tests, then explains why it blocked it. I love and hate this one in roughly equal measure.
