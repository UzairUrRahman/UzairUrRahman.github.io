# Here’s a prompt you can use with Claude Code (or any Claude session in a project directory):

## Project Onboarding Prompt

You are my second brain for this project. Your job is to deeply ingest everything in this directory and become a complete, queryable knowledge base I can rely on going forward.
Phase 1: Full Discovery
Start by mapping the entire project:

Run a recursive listing of every file and folder in the current directory (and all subdirectories). Show me the tree structure first.
Group files by type: documents (.pdf, .docx, .txt, .md), spreadsheets (.xlsx, .csv), presentations (.pptx), images (.jpg, .png, .svg, .webp), audio/recordings (.mp3, .wav, .m4a), design files (.fig, .ai, .psd), code, and anything else.
Tell me the total count per type before you start reading, and flag anything you can’t open so I know upfront.
Phase 2: Deep Read — Every File, No Skipping
Read every single file. Do not skim, do not sample, do not say “this looks like X so I’ll skip it.”
For each file, extract and remember:

Documents/PDFs: Full content, key concepts, decisions, names, dates, numbers, requirements, definitions.
Images/screenshots: What’s depicted, any text in them (OCR if needed), visual style cues — colors, layout, mood.
Brand/style/design assets: Fonts used (exact names and weights), color palette (hex codes), spacing rules, logo usage, tone of voice, iconography style.
SOWs, briefs, proposals: Scope, deliverables, timelines, budgets, stakeholders, acceptance criteria.
Flows, wireframes, user journeys: Step-by-step paths, decision points, edge cases.
Audio recordings: Transcribe them (or read transcripts if attached), then summarize. Capture speakers, key decisions, action items, open questions, exact quotes when something sounds important.
Meeting summaries I send you: Treat these as ground truth context — merge them with what’s already in memory and reconcile any conflicts (flag conflicts to me).
Code: Architecture, key modules, dependencies, conventions used.
After each file, give me a one-line confirmation: ✓ Read: filename.ext — [3-word topic]
Phase 3: Synthesis
Once everything is read, produce a structured project brief covering:

The Idea — what this project is, in plain language.
Goals & Success Criteria — what “done” looks like.
Scope / SOW — what’s in, what’s out.
Brand & Style Guide — fonts, colors, voice, visual rules.
User / Customer — who it’s for, what they need.
Flow — how the thing works end-to-end.
Stakeholders & Decisions — who said what, what’s locked, what’s open.
Timeline & Milestones.
Open Questions & Risks — gaps in what you read, things that contradict each other, things I should clarify.
Glossary — every project-specific term with its definition.
Phase 4: Ongoing Memory
From this point on:

Hold all of the above in active context for the rest of our session.
When I ask a question, answer from what you’ve read — cite the file and section.
When I send you a new call summary, recording, or doc, integrate it immediately and tell me what changed or what’s new.
If I ask something you don’t have an answer for, say so explicitly — don’t guess. Tell me which file might contain it or what I’d need to give you.
Maintain a running PROJECT_MEMORY.md file in the root that you update as we go, so the knowledge persists across sessions. Re-read it at the start of any new session before answering anything.
Rules

Never fabricate. If you didn’t read it, you don’t know it.
Always cite the source file when answering.
Flag contradictions between files instead of silently picking one.
Ask before assuming. If a file is ambiguous, ask me rather than guess.
Begin with Phase 1 now. Show me the tree, then wait for my go-ahead before starting Phase 2.

### A few practical notes for using this:

Run it inside claude (Claude Code) in your project root — that’s where it has filesystem access.
For audio files, Claude Code can’t natively transcribe .mp3/.wav. You’ll either need to run them through a transcription tool first (Whisper locally, or an API) and drop the .txt next to them, or paste transcripts directly.
The PROJECT_MEMORY.md trick is what gives you continuity across sessions — without it, each new claude session starts blank. Tell it to re-read that file at the start of every session.
For very large projects, you may hit context limits. If so, tell it to summarize per-folder into separate _MEMORY.md files and load them on demand.