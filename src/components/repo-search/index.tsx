import { Octokit } from 'octokit';
import React, { useEffect, useState } from 'react';
const { Repo } = require('./../../models/interfaces/repo');
const { OAUTHACCESSTOKEN, GITHUB_APP_CLIENT_ID, GITHUB_APP_REDIRECT_URI } = require('./../../config/config');
const { extractRepoInfo } = require('./../../utilities/repo')

function RepoSearch() {

    const [username, setUsername] = useState('');
    const [repos, setRepos] = useState<any[]>([]);
    const [selectedRepo, setSelectedRepo] = useState<string>('');
    const [issueList, setIssueList] = useState<any[]>([]);
    const octokit = new Octokit({ auth: OAUTHACCESSTOKEN });
    useEffect(() => {

        const getUserData = async () => {
            const {
                data: { login },
            } = await octokit.rest.users.getAuthenticated();
            setUsername(login);
            const { data } = await octokit.request(`GET /user/repos`, {});
            console.log("Fetch", data);
            setRepos(extractRepoInfo(data));
        }
        getUserData();
    }, []);
    useEffect(() => {
        if (selectedRepo !== '') {
            const fetchRepoIssueList = async (repo: string) => {
                const { data } = await octokit.request(`GET /repos/${repo}/issues`, {
                    owner: 'OWNER',
                    repo: 'REPO'
                });
                setIssueList(data);
                console.log("fetchRepoIssueList", data);
            }
            fetchRepoIssueList(selectedRepo);
        }
    }, [selectedRepo]);

    const displayRepos = () => repos.map((repo: typeof Repo) => (
        <div onClick={() => setSelectedRepo(repo.full_name)} key={repo.id}>{repo.full_name.includes(username) ? repo.name : repo.full_name}</div>
    ));

    const displayIssueList = () => issueList.map((issue: any) => (
        <div key={issue.id}>{issue.title}</div>
    ));

    return (<div>
        <br />HOME<br />
        <a
            className="login-link"
            href={`https://github.com/login/oauth/authorize?scope=user&client_id=${GITHUB_APP_CLIENT_ID}&redirect_uri=${GITHUB_APP_REDIRECT_URI}`}
        >Github</a><br /><br />
        {displayRepos()}
        <br />
        {displayIssueList()}

    </div>);
}

export default RepoSearch;