export interface ProjectLink {
	label: string;
	href: string;
}

export interface Project {
	slug: string;
	title: string;
	category: string;
	description: string;
	highlights: string[];
	technologies: string[];
	links: ProjectLink[];
}

export const projects: Project[] = [
	{
		slug: "oil-code",
		title: "oil.code",
		category: "VS Code extension",
		description:
			"Edit files and directories through a text buffer in VS Code, with oil.nvim-style navigation and familiar editing commands.",
		highlights: [
			"Create, move, rename, delete, and preview entries without leaving the editor.",
			"Includes default VSCodeVim shortcuts and supports custom vscode-neovim mappings.",
		],
		technologies: ["TypeScript", "VS Code API", "Vim workflows"],
		links: [
			{
				label: "Marketplace",
				href: "https://marketplace.visualstudio.com/items?itemName=haphazarddev.oil-code",
			},
			{
				label: "GitHub",
				href: "https://github.com/corwinm/oil.code",
			},
		],
	},
	{
		slug: "arashi",
		title: "Arashi",
		category: "Git worktree CLI",
		description:
			"Coordinate matching Git worktrees across a meta-repository while each repository keeps its own history, CI, and pull requests.",
		highlights: [
			"Create and switch shared feature workspaces across configured repositories.",
			"Handle setup, synchronization, status, and cleanup from one CLI.",
		],
		technologies: ["TypeScript", "Node.js", "Git", "CLI UX"],
		links: [
			{
				label: "Docs",
				href: "https://arashi.haphazard.dev",
			},
			{
				label: "Marketplace",
				href: "https://marketplace.visualstudio.com/items?itemName=haphazarddev.arashi-vscode",
			},
			{
				label: "npm",
				href: "https://www.npmjs.com/package/arashi",
			},
			{
				label: "GitHub",
				href: "https://github.com/corwinm/arashi",
			},
		],
	},
	{
		slug: "coding-agents-tmux",
		title: "coding-agents-tmux",
		category: "tmux plugin",
		description:
			"Find, monitor, and jump between terminal coding-agent panes in tmux, especially sessions waiting for your input.",
		highlights: [
			"Show the focused pane state and a summary of background agents in the tmux status line.",
			"Discover OpenCode, pi, Codex, Claude, and Kiro sessions for switching, popups, and status summaries.",
		],
		technologies: ["TypeScript", "tmux", "Terminal tooling", "Agent UX"],
		links: [
			{
				label: "GitHub",
				href: "https://github.com/corwinm/coding-agents-tmux",
			},
		],
	},
	{
		slug: "pi-extensions",
		title: "pi-extensions",
		category: "pi extensions",
		description:
			"Install small, focused workflow additions for the pi coding agent directly from npm.",
		highlights: [
			"Add structured questions, code-block copying, interactive review, background jobs, and Vim-style quit commands.",
			"Each extension is independently installable under the @haphazarddev npm scope.",
		],
		technologies: ["TypeScript", "pi", "npm", "Developer tools"],
		links: [
			{
				label: "GitHub",
				href: "https://github.com/HaphazardDev/pi-extensions",
			},
			{
				label: "pi.dev",
				href: "https://pi.dev",
			},
		],
	},
];
