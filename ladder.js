// Shared by index.html (Level section tab) and self-check.html.
// The agentic ladder: levels, criteria, and the ready-to-paste AI prompt.
const LEVELS = [
  { name: 'The First Steps', focus: 'Getting started', desc: 'Basic AI use: autocomplete and chat.', crits: [
    ['I use AI autocomplete while I code.', ''],
    ['I use an AI chat to explain code, debug or draft snippets.', ''],
  ]},
  { name: 'The Agentic Learner', focus: 'Learning and safe adoption', desc: 'Agentic tools with manual approval, improving prompts and configs.', crits: [
    ['I use an agent that edits files and runs commands in my repo.', 'For example Claude Code, Cursor agent or Codex.'],
    ['I review and approve its actions before they run.', ''],
    ['I keep improving my prompts and project config.', 'For example a CLAUDE.md, rules files or settings.'],
  ]},
  { name: 'The Advanced Practitioner', focus: 'Efficiency and customization', desc: 'Auto-approval, parallel workflows, multiple models.', crits: [
    ['I run agents on auto-approval inside guardrails I set.', 'Tests, review gates, permissions. Not in place of review.'],
    ['I run several agents in parallel on separate work.', 'For example one git worktree per agent.'],
    ['I pick different models for different tasks.', 'For example a big model for the main work and a cheap one for wide sweeps.'],
    ["I've customized my setup beyond prompts.", 'Skills, hooks, custom commands, or adapted agent runners.'],
  ]},
  { name: 'The Pioneer', focus: 'Innovation and leadership', desc: 'Building custom MCPs and leading team transformation.', crits: [
    ["I've built a custom MCP server that's used for real work.", "Shared or third-party servers don't count."],
    ['I lead how a team adopts agents.', 'Who reviews what, how QA hands off to agents, team standards.'],
    ["I've built an agent system other people rely on.", 'Built by you, not only adapted.'],
  ]},
];

function buildPrompt() {
  const L = [];
  L.push('You are helping me grade myself on the "Agentic Coding Proficiency Journey", a 4-level ladder for how developers use AI coding tools. Be a strict, fair grader. Do not flatter me.');
  L.push('', 'THE LADDER');
  LEVELS.forEach((lv, li) => {
    L.push(`Level ${li + 1}: ${lv.name}. ${lv.desc} Focus: ${lv.focus.toLowerCase()}.`);
    lv.crits.forEach(c => L.push(`  - ${c[0]}${c[1] ? ' (' + c[1] + ')' : ''}`));
  });
  L.push('', 'GRADING RULES');
  L.push('1. Count only what I touched: my own commits and decisions. Keep them apart from commits my agents made under my name (look at commit trailers like Co-Authored-By, agent branch names, and bot authors).');
  L.push('2. Do not count my teammates\' or my agents\' work, even inside tools I use every day.');
  L.push('3. A level counts only when every criterion is met. Some criteria met on the next level means "one foot in" that level, not the level.');
  L.push('4. When unsure, mark the criterion as not met and ask me. Over-crediting is the most common mistake.');
  L.push('', 'HOW TO WORK');
  L.push('- If you can read my repositories or git history, look for evidence first: agent commit trailers, CLAUDE.md or rules files, hooks, skills, custom commands, MCP server code, worktrees, CI review gates. Count commits by author and report the split.');
  L.push('- Then ask me short questions, a few at a time, only for what you could not verify.');
  L.push('- Before the final answer, list every criterion you marked as met and why, and ask me to correct anything you over-credited.');
  L.push('', 'OUTPUT (after I confirm)');
  L.push('My agentic ladder self-check');
  L.push('Level N, with one foot in Level N+1.   (or just "Level N.")');
  L.push('For each level: "Level X, Name: met of total", each criterion as [x] or [ ], and one line of evidence with real numbers where you have them.');
  L.push('Next rung: one concrete thing I should do to climb.');
  L.push('', 'Ladder source: https://lnkd.in/p/gFze7Riq');
  return L.join('\n');
}

// Highest fully met level, and whether the next one is partly met.
function gradeLadder(counts) {
  let full = 0;
  for (let i = 0; i < LEVELS.length; i++) { if (counts[i] === LEVELS[i].crits.length) full = i + 1; else break; }
  return { full, partial: full < LEVELS.length && counts[full] > 0 };
}
function verdictText(counts) {
  const { full, partial } = gradeLadder(counts);
  if (full === 0) return counts.some(n => n) ? 'On the way to Level 1' : 'Not graded yet';
  return partial ? `Level ${full}, with one foot in Level ${full + 1}.` : `Level ${full}.`;
}
