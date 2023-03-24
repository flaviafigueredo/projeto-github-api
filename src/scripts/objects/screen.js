const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                            <div class="follow">
                                                <p>👥 Seguidores: ${user.followers}</p>
                                                <p>👤 Seguindo: ${user.following}</p>
                                            </div>
                                        </div>
                                      </div>`

        let repositoriesItems = ""
        user.repositories.forEach(repo => repositoriesItems += `<li>
                                                                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                                                                    <div class="details">
                                                                            <span>🍴 ${repo.forks}</span>
                                                                            <span>⭐ ${repo.stargazers_count}</span>
                                                                            <span>👀 ${repo.watchers}</span>
                                                                            <span>👩‍💻 ${repo.language ?? 'Não possui linguagem'}</span>
                                                                    </div>
                                                                </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItems}</ul>
                                           </div>`
        }

        let eventsItems = ""
        user.events.forEach(event => {
            const eventName = event.repo.name

            eventsItems += `<li>${eventName}</li>`

            if (event.type === 'PushEvent') {
                const eventMessage = event.payload.commits[0].message
                eventsItems += `<li>${eventName} <span>- ${eventMessage}</span></li>`
            }

        })

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItems}</ul>
                                           </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>'
    }
}

export { screen }