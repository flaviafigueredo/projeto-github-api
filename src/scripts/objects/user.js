const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    followers: '',
    following: '',
    events: [],
    forks: '',
    stars: '',
    watchers: '',
    language: '',
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories) {
        this.repositories = repositories
        this.forks = repositories.forks
        this.stars = repositories.stargazers_count
        this.watchers = repositories.watchers
        this.language = repositories.language
    },
    setEvents(event) {
        this.events = event
    }
}

export { user }