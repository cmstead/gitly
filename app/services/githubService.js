function githubService(request) {

    function loadAllRepos(username, page = 0) {
        const baseUrl = buildRepositoryUrl(username);
        let url = `${baseUrl}?per_page=100`;

        if (page > 0) {
            url += `&page=${page}`;
        }

        const options = {
            url: url,
            headers: {
                'User-Agent': 'Gitly'
            }
        }

        return new Promise(function (resolve, reject) {
            request(options, function (error, response, body) {
                if (error) {
                    reject(error);
                } else {
                    const results = JSON.parse(body);

                    if (results.length === 0) {
                        resolve(results);
                    } else {
                        loadAllRepos(username, page + 1)
                            .then(function (pagedResults) {
                                resolve(results.concat(pagedResults));
                            });
                    }
                }
            });
        });
    }

    function buildRepositoryUrl(username) {
        return `https://api.github.com/users/${username}/repos`;
    }

    function captureRepositoryData(result, record) {
        const { name, clone_url } = record;

        result[name] = clone_url;

        return result;
    }

    function buildRepositoryDictionary(repositoryData) {
        return repositoryData
            .reduce(captureRepositoryData, {});
    }

    function throwOnFailure(error) {
        const errorResponse =
            'Unable to fetch repository data: ' + error.message;

        throw new Error(errorResponse);
    }

    function aggregateRepoData(repositoryData) {
        const repositoryDictionary =
            buildRepositoryDictionary(repositoryData);

        return Promise.resolve(repositoryDictionary);
    }

    function getRepoDictionary(username) {
        return loadAllRepos(username)
            .then(aggregateRepoData)
            .catch(throwOnFailure);
    }

    return {
        getRepoDictionary
    };
}

module.exports = githubService;