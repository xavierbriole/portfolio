import { c as config } from '../../chunks/config_BBbd98aP.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ url }) => {
  const repo = url.searchParams.get("repo");
  if (!repo) {
    return new Response(
      JSON.stringify({ error: "Repository name is required" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
  const response = await fetch(
    `https://api.github.com/repos/${config.creator}/${repo}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${undefined                            }`,
        "X-GitHub-Api-Version": "2022-11-28"
      }
    }
  );
  if (!response.ok) {
    return new Response(
      JSON.stringify({ error: `GitHub API error: ${response.status}` }),
      {
        status: response.status,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
  const data = await response.json();
  return new Response(
    JSON.stringify({
      stargazers_count: data.stargazers_count
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
