import type { APIRoute } from "astro";

const fallbackSite = new URL("https://haphazard.dev");

const getRobotsTxt = (sitemapUrl: URL) => `User-agent: *
Allow: /

Sitemap: ${sitemapUrl.href}
`;

export const GET: APIRoute = ({ site }) => {
	const sitemapUrl = new URL("sitemap-index.xml", site ?? fallbackSite);

	return new Response(getRobotsTxt(sitemapUrl), {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
