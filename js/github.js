class GitHub {
    constructor() {
        this.client_id = 'eb5a0dbc90655dd9b961';
        this.client_secret = '67d477e8ba9bd22cd35c4a2aa0ead9a0049fe24c';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile, repos
        }
    }
}