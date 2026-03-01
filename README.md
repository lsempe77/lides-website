# LIDES - Laboratorio de Innovación en Desarrollo Educativo y Social

Website for [www.lides.pe](https://www.lides.pe) hosted on GitHub Pages.

## Structure

```
website/
├── index.html          # Homepage (Spanish)
├── sobre.html          # About page (Spanish)
├── CNAME               # Custom domain config
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Navigation, animations, forms
└── img/                # Images (add your own)
    ├── logo.png
    ├── favicon.ico
    ├── hero-bg.jpg
    ├── about-photo.jpg
    ├── evidencia.jpg
    ├── about-team.jpg
    ├── mission.jpg
    ├── hanaq.jpg
    └── news-hanaq.jpg
```

## Setup on GitHub Pages

### 1. Create a GitHub repository

- Go to [github.com/new](https://github.com/new)
- Name it (e.g., `lides-website` or `lides.pe`)
- Make it **Public** (required for free GitHub Pages)

### 2. Push this code

```bash
cd website
git init
git add .
git commit -m "Initial LIDES website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 3. Enable GitHub Pages

- Go to your repo → **Settings** → **Pages**
- Source: **Deploy from a branch**
- Branch: **main** / **(root)**
- Click **Save**

### 4. Configure your custom domain (DNS)

In your domain registrar's DNS settings, **replace** the current Wix records:

**Remove these (Wix):**
- All A records pointing to `185.230.63.x`
- CNAME `www.lides.pe → cdn1.wixdns.net`

**Add these (GitHub Pages):**

| Type  | Host | Value               |
|-------|------|---------------------|
| A     | @    | 185.199.108.153     |
| A     | @    | 185.199.109.153     |
| A     | @    | 185.199.110.153     |
| A     | @    | 185.199.111.153     |
| CNAME | www  | YOUR_USERNAME.github.io |

- Keep the `hanaq.lides.pe` A record as-is (132.145.44.135)

### 5. Enable HTTPS

- In repo Settings → Pages → check **Enforce HTTPS**
- Wait a few minutes for the SSL certificate to be provisioned

## Images

Add your own images to the `img/` folder. The site references:

| File              | Where it's used                     | Recommended size |
|-------------------|-------------------------------------|------------------|
| `logo.png`        | Header & footer logo                | 200×200 px       |
| `favicon.ico`     | Browser tab icon                    | 32×32 px         |
| `hero-bg.jpg`     | Homepage hero background            | 1920×1080 px     |
| `about-photo.jpg` | "Who We Are" section                | 800×600 px       |
| `evidencia.jpg`   | "Evidence in Schools" section       | 800×600 px       |
| `about-team.jpg`  | About page header photo             | 800×600 px       |
| `mission.jpg`     | About page mission section          | 800×600 px       |
| `hanaq.jpg`       | Hanaq project section               | 800×600 px       |
| `news-hanaq.jpg`  | News card for Hanaq                 | 800×400 px       |

> Images have graceful fallbacks — the site works without them (colored gradients shown instead).

## Forms

Contact and newsletter forms use [Formspree](https://formspree.io/) (free tier: 50 submissions/month).

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form, get your form ID
3. Replace `YOUR_FORM_ID` in `index.html` and `sobre.html`

Until configured, forms will fall back to `mailto:info@lides.pe`.

## Cost Comparison

| Feature         | Wix          | GitHub Pages |
|-----------------|--------------|--------------|
| Hosting         | ~$17/month   | **Free**     |
| Custom domain   | Included     | **Free**     |
| SSL/HTTPS       | Included     | **Free**     |
| Storage         | Limited      | 1 GB (repo)  |
| Bandwidth       | Limited      | 100 GB/month |
| Forms           | Included     | Formspree (free tier) |

**Annual savings: ~$200/year**
