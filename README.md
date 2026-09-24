# 🦊 Kitsune Shop

> 🛍️ Modern anime merchandise store built with **NestJS**, **PostgreSQL** and **Docker**.

**Kitsune Shop** — pet-проект интернет-магазина аниме-товаров.
Проект создаётся с упором на современную backend-архитектуру, удобную разработку и production-ready подход.

---

## ✨ Features

* 🔐 Authentication & authorization
* 👤 User accounts
* 📦 Product catalog
* 🏷️ Categories & brands
* 🛒 Shopping cart
* ❤️ Favorites
* 📧 Email verification
* 🔑 Secure password hashing
* ⚡ Redis for temporary data
* 🐘 PostgreSQL database
* 🐳 Docker-based development environment
* 📖 Swagger API documentation

---

## 🛠️ Tech Stack

### Backend

* **NestJS**
* **TypeScript**
* **Prisma ORM**
* **PostgreSQL**
* **Redis**
* **Docker / Docker Compose**
* **Swagger / OpenAPI**

### Development

* **Bun**
* **ESLint**
* **Prettier**

---

## 🚀 Getting Started

### 1. Install Bun

Kitsune Shop uses **Bun** as its package manager and JavaScript runtime.

Official installation instructions:

[Bun — Installation](https://bun.sh/docs/installation?utm_source=chatgpt.com)

After installation, verify that Bun is available:

```bash
bun --version
```

---

### 2. Clone the repository

```bash
git clone https://github.com/MemChoHero/KitsuneShop-Back.git
cd KitsuneShop-Back
```

---

### 3. Install dependencies

```bash
bun install
```

---

### 4. Configure environment variables

Create a `.env` file based on the provided example:

```bash
cp .env.example .env
```

Then configure the required environment variables.

> ⚠️ Do not commit your `.env` file to the repository.

---

### 5. Start the project

Build and start all required Docker containers:

```bash
docker compose up --build
```

The command starts the application together with its required infrastructure.

---

To stop the project:

```bash
docker compose down
```

To stop containers and remove their volumes:

```bash
docker compose down -v
```

---

## 📚 API Documentation

When the application is running, Swagger documentation is available at:

```text
http://localhost:3000/api
```

The exact Swagger path may depend on the current application configuration.

---

## 📁 Project Structure

```text
kitsune-shop/
├── src/
│   ├── auth/
│   ├── users/
│   ├── products/
│   ├── categories/
│   └── ...
│
├── prisma/
│   └── schema.prisma
│
├── docker-compose.yml
├── Dockerfile
├── package.json
├── bun.lock
└── README.md
```

---

## 🧑‍💻 Development

Start the project:

```bash
docker compose up --build
```

Run the application in the background:

```bash
docker compose up --build
```

View logs:

```bash
docker compose logs -f
```

Stop the application:

```bash
docker compose down
```

---

## 📌 Project Status

🚧 **In development**

Kitsune Shop is an educational pet project and is actively being developed.

New features, architectural improvements and infrastructure changes are being added over time.

---

## 📄 License

This project is created for educational and personal purposes.
