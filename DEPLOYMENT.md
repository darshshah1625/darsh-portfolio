# 🚀 Deployment Guide

## Quick Start - GitHub Pages (Recommended)

### Step 1: Run the deployment script
```bash
./deploy-github.sh
```

Or follow manual steps below:

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio` (or any name)
3. Make it **PUBLIC**
4. Don't initialize with README
5. Click "Create repository"

### Step 3: Push Your Code

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial portfolio commit"

# Add your GitHub repo (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes

Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`

### Step 5: Connect Your Namecheap Domain

#### A. Add CNAME file to your repo
```bash
echo "yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

#### B. Configure Namecheap DNS

1. Login to Namecheap
2. Go to **Domain List** → Click **Manage** on your domain
3. Go to **Advanced DNS** tab
4. Delete any existing A Records and CNAME Records for @ and www
5. Add these new records:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | 185.199.108.153 | Automatic |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |
| CNAME Record | www | YOUR_USERNAME.github.io. | Automatic |

**Important:** Don't forget the dot (.) at the end of `YOUR_USERNAME.github.io.`

6. Click the green checkmark to save each record

#### C. Enable HTTPS in GitHub

1. Go back to GitHub → Settings → Pages
2. Check "Enforce HTTPS" (wait 10-30 min if not available yet)

### Step 6: Wait for DNS Propagation

- DNS changes take 10-30 minutes (sometimes up to 24 hours)
- Check status: https://www.whatsmydns.net/

---

## Alternative: Vercel (Fastest)

### Quick Deploy

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd /Users/babyrage/Documents/bull-portfolio
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? portfolio
# - Directory? ./
# - Override settings? No
```

### Connect Domain

1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Domains**
4. Add your domain: `yourdomain.com`
5. Vercel will show you DNS records to add

**In Namecheap:**
- Add CNAME record: `@` → `cname.vercel-dns.com`
- Add CNAME record: `www` → `cname.vercel-dns.com`

---

## Alternative: Netlify

### Via Drag & Drop

1. Go to https://app.netlify.com/drop
2. Drag your portfolio folder
3. Site is live instantly!

### Connect Domain

1. Click **Domain settings**
2. Click **Add custom domain**
3. Enter your domain
4. Update Namecheap DNS with provided nameservers:
   - dns1.p01.nsone.net
   - dns2.p01.nsone.net
   - dns3.p01.nsone.net
   - dns4.p01.nsone.net

---

## Alternative: Namecheap Hosting

If you purchased hosting from Namecheap:

### Via cPanel

1. Login to cPanel (link in Namecheap email)
2. Go to **File Manager**
3. Navigate to `public_html`
4. Delete default files
5. Click **Upload**
6. Upload all your portfolio files
7. Your site is live at your domain!

### Via FTP

1. Get FTP credentials from Namecheap
2. Download FileZilla: https://filezilla-project.org/
3. Connect using:
   - Host: ftp.yourdomain.com
   - Username: (from Namecheap)
   - Password: (from Namecheap)
   - Port: 21
4. Upload files to `public_html` folder

---

## 🔧 Troubleshooting

### Site not loading after DNS change?
- Wait 30 minutes to 24 hours for DNS propagation
- Clear browser cache (Cmd+Shift+R on Mac)
- Check DNS: https://www.whatsmydns.net/

### HTTPS not working?
- Wait 10-30 minutes after DNS propagation
- Enable "Enforce HTTPS" in GitHub Pages settings
- Make sure CNAME file exists in your repo

### 404 Error?
- Check that files are in root directory (not in a subfolder)
- Verify `index.html` exists
- Check GitHub Pages is enabled

### Resume download not working?
- Update the resume path in index.html:
```html
<!-- Change this line -->
<a href="/Users/babyrage/Documents/Resumes/ResumePDFs/Darsh_Resume_Dev_V4.pdf" download>

<!-- To this (put resume in your portfolio folder) -->
<a href="./resume.pdf" download>
```

Then copy your resume:
```bash
cp "/Users/babyrage/Documents/Resumes/ResumePDFs/Darsh_Resume_Dev_V4.pdf" ./resume.pdf
git add resume.pdf
git commit -m "Add resume"
git push
```

---

## 📊 Comparison

| Feature | GitHub Pages | Vercel | Netlify | Namecheap |
|---------|-------------|--------|---------|-----------|
| Cost | Free | Free | Free | Paid |
| Setup Time | 10 min | 5 min | 5 min | 15 min |
| HTTPS | ✅ Auto | ✅ Auto | ✅ Auto | Manual |
| Custom Domain | ✅ | ✅ | ✅ | ✅ |
| Deploy Speed | Medium | Fast | Fast | Manual |
| Git Integration | ✅ | ✅ | ✅ | ❌ |

---

## 🎯 Recommended: GitHub Pages

**Why?**
- ✅ Completely free
- ✅ Automatic HTTPS
- ✅ Easy updates (just `git push`)
- ✅ Version control included
- ✅ Reliable (GitHub infrastructure)
- ✅ Perfect for portfolios

**Next Steps:**
1. Run `./deploy-github.sh`
2. Follow the prompts
3. Configure Namecheap DNS
4. Wait 30 minutes
5. Visit your domain! 🎉

---

Need help? Check:
- GitHub Pages Docs: https://docs.github.com/en/pages
- Namecheap DNS Guide: https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/
