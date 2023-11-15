# Лабораторная работа №3
## Настройки CI/CD с помощью GitHub Actions
Для настройки GitHub Actions необходимо создать .yml файл в директории .github/workflows/.

```file.yml
name: Build and Push Docker image to Docker Hub

on:
  push:
    branches: ["main"]
jobs:
  push_to_registry:
    name: Push Docker image to Docker Hub
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: "/Lap3/git_cicd"
    steps:
      - name: Check out the repo
        uses: actions/checkout@v4

      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_ACCESS_TOKEN }}

      - name: Build and push Docker image
        uses: docker/build-push-action@v5
        with:
          context: ./Lap3/git_cicd/
          push: true
          tags: tienlong1106/git_cicd:latest
```
## Cпецифический
```yaml
name: Build and Push Docker image to Docker Hub
```

Это задает имя рабочего процесса GitHub Actions. В данном случае это «Создать и отправить образ Docker в Docker Hub».

```yaml
on:
  push:
    branches: ["main"]
```

Это определяет триггер для рабочего процесса. В этом случае рабочий процесс будет запускаться при каждом нажатии на «основную» ветку.

```yaml
jobs:
  push_to_registry:
    name: Push Docker image to Docker Hub
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: "/Lap3/git_cicd"
```

Определяет задание с именем «push_to_registry». Это задание будет выполняться в среде Ubuntu («ubuntu-latest»). Он также устанавливает рабочий каталог по умолчанию для задания.
```yaml
    steps:
      - name: Check out the repo
        uses: actions/checkout@v4
```

На этом этапе проверяется содержимое репозитория. В версии v4 используется действие `actions/checkout`.

```yaml
      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_ACCESS_TOKEN }}
```

На этом шаге используется `docker/login-action` для входа в Docker Hub. Он использует имя пользователя Docker Hub и токен доступа, хранящиеся как секреты в репозитории GitHub.

```yaml
      - name: Build and push Docker image
        uses: docker/build-push-action@v5
        with:
          context: ./Lap3/git_cicd/
          push: true
          tags: tienlong1106/git_cicd:latest
```

На этом этапе используется docker/build-push-action для создания и отправки образа Docker. Он определяет контекст сборки (`./Lap3/git_cicd/`), включает отправку (`push: true`) и устанавливает тег образа Docker (`tags: Tienlong1106/git_cicd:latest`).

Таким образом, этот рабочий процесс GitHub Actions запускается при отправке в «основную» ветку. Он проверяет репозиторий, входит в Docker Hub, а затем создает и отправляет образ Docker из указанного контекста с указанным тегом.
## Создать репозиторий в dockerhub
![result img2](./results/repo-dockerhub.png)
## Создать токен доступа к ключу
![result img2](./results/key_access_token.png)
## Добавить ключ и имя пользователя в github
![result img2](./results/add_key.png)
## Результат
![result img2](./results/result.png)
