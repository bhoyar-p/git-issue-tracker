const { Repo } = require('./../models/interfaces/repo');

export const extractRepoInfo = (repos: any[]) => {
    console.log(repos);

    const repoList: typeof Repo[] = [];
    repos.forEach((repo: any) => {
        repoList.push({
            id: repo.id,
            full_name: repo.full_name,
            name: repo.name,
            private: repo.private,
            html_url: repo.html_url,
            description: repo.description,
            fork: repo.fork,
            visibility: repo.visibility,
        });
    });
    return repoList;
}