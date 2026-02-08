# 🚀 Step-by-Step Deployment Instructions

Follow these exact steps to deploy your portfolio to your Namecheap domain.

---

## ✅ Step 1: Copy Your Resume

```bash
cp "/Users/babyrage/Documents/Resumes/ResumePDFs/Darsh_Resume_SDE_V7.pdf" resume.pdf
```

This copies your resume into the portfolio folder so it can be downloaded from your website.

---

## ✅ Step 2: Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial portfolio commit"
```

**What this does:**
- Creates a git repository in your portfolio folder
- Stages all your files
- Makes your first commit

---

## ✅ Step 3: Create GitHub Repository

1. **Go to:** https://github.com/new
2. **Fill in:**
   - Repository name: `portfolio` (or any name you like)
   - Description: "My personal portfolio website"
   - **Make it PUBLIC** ⚠️ (important for GitHub Pages free tier)
   - **DON'T** check "Add a README file"
   - **DON'T** add .gitignore or license
3. **Click:** "Create repository"

---

## ✅ Step 4: Connect Your Local Repo to GitHub

**Replace `YOUR_USERNAME` with your actual GitHub username:**

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

**Example:** If your GitHub username is `darshshah16`:
```bash
git remote add origin https://github.com/darshshah16/portfolio.git
git branch -M main
git push -u origin main
```

**You'll be prompted to login to GitHub** - use your credentials.

---

## ✅ Step 5: Enable GitHub Pages

1. **Go to your repository on GitHub:**
   - `https://github.com/YOUR_USERNAME/portfolio`

2. **Click the "Settings" tab** (top right)

3. **Click "Pages"** in the left sidebar

4. **Under "Source":**
   - Branch: Select `main`
   - Folder: Select `/ (root)`
   - Click **Save**

5. **Wait 1-2 minutes**

6. **Refresh the page** - you'll see:
   ```
   Your site is live at https://YOUR_USERNAME.github.io/portfolio/
   ```

7. **Click the link** to verify your site works!

---

## ✅ Step 6: Add Your Custom Domain

**Still in GitHub Settings → Pages:**

1. **Under "Custom domain":**
   - Enter your domain: `yourdomain.com` (replace with your actual domain)
   - Click **Save**

2. **This creates a CNAME file** in your repository automatically

3. **Wait for DNS check** (will show pending)

---

## ✅ Step 7: Configure Namecheap DNS

### A. Login to Namecheap

1. Go to: https://www.namecheap.com/
2. Click **Sign In**
3. Enter your credentials

### B. Access DNS Settings

1. Click **Domain List** (left sidebar)
2. Find your domain
3. Click **Manage** button next to it
4. Click **Advanced DNS** tab

### C. Delete Existing Records

**Delete these if they exist:**
- Any A Records with Host `@`
- Any CNAME Records with Host `www`
- Parking page records

**Keep these:**
- Email-related records (MX, TXT)
- Any other records you need

### D. Add New Records

Click **Add New Record** and add these **5 records**:

#### Record 1:
- **Type:** A Record
- **Host:** @
- **Value:** 185.199.108.153
- **TTL:** Automatic
- Click ✓ (checkmark)

#### Record 2:
- **Type:** A Record
- **Host:** @
- **Value:** 185.199.109.153
- **TTL:** Automatic
- Click ✓

#### Record 3:
- **Type:** A Record
- **Host:** @
- **Value:** 185.199.110.153
- **TTL:** Automatic
- Click ✓

#### Record 4:
- **Type:** A Record
- **Host:** @
- **Value:** 185.199.111.153
- **TTL:** Automatic
- Click ✓

#### Record 5:
- **Type:** CNAME Record
- **Host:** www
- **Value:** YOUR_USERNAME.github.io. ⚠️ **Don't forget the dot at the end!**
- **TTL:** Automatic
- Click ✓

**Example:** If your username is `darshshah16`:
- Value: `darshshah16.github.io.`

### E. Save Changes

All records should now show in your DNS settings. Changes are saved automatically.

---

## ✅ Step 8: Wait for DNS Propagation

**This is the hardest part - waiting! ⏰**

- **Minimum wait:** 10-30 minutes
- **Maximum wait:** 24-48 hours (rare)
- **Average wait:** 1-2 hours

### Check DNS Propagation Status:

1. Go to: https://www.whatsmydns.net/
2. Enter your domain: `yourdomain.com`
3. Select "A" record type
4. Click search
5. **Green checkmarks** = DNS is propagated in that region

---

## ✅ Step 9: Enable HTTPS (After DNS Works)

1. **Go back to GitHub:** Settings → Pages
2. **Check the box:** "Enforce HTTPS"
   - If greyed out, wait 10-30 more minutes
   - GitHub needs to verify your domain first
3. **Once enabled:** Your site will redirect HTTP to HTTPS automatically

---

## ✅ Step 10: Test Your Site!

Visit these URLs (replace with your domain):

1. `http://yourdomain.com` → Should redirect to HTTPS
2. `https://yourdomain.com` → Should load your portfolio
3. `https://www.yourdomain.com` → Should load your portfolio
4. Click "Download Resume" → Should download your PDF

**🎉 If all work, you're LIVE!**

---

## 📝 Summary of What You Created:

```
yourdomain.com
├── Hosted on: GitHub Pages
├── DNS: Namecheap
├── HTTPS: Automatic (Let's Encrypt via GitHub)
├── Deployment: Automatic on git push
└── Cost: $0 (FREE!)
```

---

## 🔄 How to Update Your Site Later:

```bash
# 1. Make changes to your files
# (edit index.html, css, js, etc.)

# 2. Commit and push
git add .
git commit -m "Updated portfolio"
git push

# 3. Wait 1-2 minutes
# Your site updates automatically!
```

---

## 🆘 Troubleshooting

### "Site not loading after 24 hours"
```bash
# Check if DNS is correct
dig yourdomain.com

# Should show GitHub's IPs:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

### "HTTPS not available"
- Wait 30 minutes after DNS propagates
- Make sure CNAME file exists in your repo
- Check GitHub Pages settings

### "Resume download not working"
```bash
# Make sure resume.pdf exists
ls -la resume.pdf

# If not, copy it:
cp "/Users/babyrage/Documents/Resumes/ResumePDFs/Darsh_Resume_SDE_V7.pdf" resume.pdf
git add resume.pdf
git commit -m "Add resume"
git push
```

### "404 Error"
- Check GitHub Pages is enabled
- Verify branch is set to `main`
- Make sure `index.html` is in root directory

---

## 📞 Need Help?

- GitHub Pages Docs: https://docs.github.com/en/pages
- Namecheap Support: https://www.namecheap.com/support/
- DNS Checker: https://www.whatsmydns.net/

---

## 🎯 Quick Reference

**Your GitHub repo:** `https://github.com/YOUR_USERNAME/portfolio`
**Your GitHub Pages URL:** `https://YOUR_USERNAME.github.io/portfolio/`
**Your custom domain:** `https://yourdomain.com`

**DNS Records:**
```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
CNAME www  YOUR_USERNAME.github.io.
```

---

**Ready? Start with Step 1!** 🚀
