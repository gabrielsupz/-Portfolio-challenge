useEffect(url => {
fetch(repoUrl)
.then(response => response.json())
.then(data => data[0])
.then(repository => {
setRepositorys({
name: repository.name,
description: repository.description,
branchs: 1,
star: repository.stargazers_count,
tecnologi: repository.language,
link: repository.html_url
})
})

      .catch(error => console.error(error))

}, [])
