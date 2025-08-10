import type { APIRoute } from "astro";
import config from "../../config";

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const repo = url.searchParams.get("repo");

  if (!repo) {
    return new Response(
      JSON.stringify({ error: "Repository name is required" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  const response = await fetch(
    `https://api.github.com/repos/${config.creator}/${repo}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );

  if (!response.ok) {
    return new Response(
      JSON.stringify({ error: `GitHub API error: ${response.status}` }),
      {
        status: response.status,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  const data = await response.json();

  return new Response(
    JSON.stringify({
      stargazers_count: data.stargazers_count,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};
