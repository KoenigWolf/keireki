import type { Project } from "@/data/experience";

const GITHUB_USER = "KoenigWolf";
const GITHUB_API = `https://api.github.com/users/${GITHUB_USER}/repos`;

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
}

/** GitHub リポジトリを取得し Project[] にマッピング（ISR 対応） */
export async function fetchGitHubProjects(): Promise<Project[]> {
  const res = await fetch(
    `${GITHUB_API}?sort=updated&per_page=100&type=owner`,
    {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github.v3+json" },
    },
  );

  if (!res.ok) return [];

  const repos: GitHubRepo[] = await res.json();

  return repos
    .filter(
      (repo) =>
        !repo.fork &&
        !repo.archived &&
        !repo.name.startsWith(".") &&
        repo.language !== null,
    )
    .map((repo) => {
      const homepage = repo.homepage
        ? repo.homepage.startsWith("http")
          ? repo.homepage
          : `https://${repo.homepage}`
        : undefined;

      return {
        title: repo.name,
        description: repo.description ?? "",
        technologies: [
          ...(repo.language ? [repo.language] : []),
          ...repo.topics,
        ],
        github: repo.html_url,
        url: homepage,
      };
    });
}
