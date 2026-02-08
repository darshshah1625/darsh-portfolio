#!/bin/bash

echo "🚀 Portfolio Deployment Script"
echo "=============================="
echo ""

# Step 1: Copy resume
echo "📄 Step 1: Copying resume..."
if [ -f "/Users/babyrage/Documents/Resumes/ResumePDFs/Darsh_Resume_SDE_V7.pdf" ]; then
    cp "/Users/babyrage/Documents/Resumes/ResumePDFs/Darsh_Resume_SDE_V7.pdf" resume.pdf
    echo "✅ Resume copied successfully!"
else
    echo "❌ Resume not found at specified path"
    echo "Please check the path and try again"
    exit 1
fi

echo ""

# Step 2: Check if git is initialized
echo "📦 Step 2: Setting up Git..."
if [ ! -d .git ]; then
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

echo ""

# Step 3: Add and commit files
echo "💾 Step 3: Committing files..."
git add .
git commit -m "Initial portfolio commit with resume"
echo "✅ Files committed"

echo ""
echo "=============================="
echo "✅ Local setup complete!"
echo "=============================="
echo ""

# Step 4: Get GitHub username
read -p "Enter your GitHub username: " github_username

if [ -z "$github_username" ]; then
    echo "❌ GitHub username is required"
    exit 1
fi

echo ""
read -p "Enter your repository name (default: portfolio): " repo_name
repo_name=${repo_name:-portfolio}

echo ""
read -p "Enter your Namecheap domain (e.g., darshshah.com): " domain

if [ -z "$domain" ]; then
    echo "❌ Domain is required"
    exit 1
fi

echo ""
echo "=============================="
echo "📋 Configuration Summary"
echo "=============================="
echo "GitHub Username: $github_username"
echo "Repository Name: $repo_name"
echo "Custom Domain: $domain"
echo "=============================="
echo ""

# Check if remote already exists
if git remote | grep -q "origin"; then
    echo "⚠️  Remote 'origin' already exists"
    read -p "Do you want to update it? (y/n): " update_remote
    if [ "$update_remote" = "y" ]; then
        git remote remove origin
        git remote add origin "https://github.com/$github_username/$repo_name.git"
        echo "✅ Remote updated"
    fi
else
    git remote add origin "https://github.com/$github_username/$repo_name.git"
    echo "✅ Remote added"
fi

echo ""
echo "=============================="
echo "🎯 Next Steps (Manual)"
echo "=============================="
echo ""
echo "1️⃣  CREATE GITHUB REPOSITORY:"
echo "   Go to: https://github.com/new"
echo "   Repository name: $repo_name"
echo "   Make it PUBLIC"
echo "   Don't add README, .gitignore, or license"
echo "   Click 'Create repository'"
echo ""
echo "2️⃣  PUSH YOUR CODE:"
echo "   Run these commands:"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3️⃣  ENABLE GITHUB PAGES:"
echo "   Go to: https://github.com/$github_username/$repo_name/settings/pages"
echo "   Source: Deploy from branch 'main'"
echo "   Folder: / (root)"
echo "   Click Save"
echo "   Custom domain: $domain"
echo "   Click Save"
echo ""
echo "4️⃣  CONFIGURE NAMECHEAP DNS:"
echo "   Login to Namecheap → Domain List → Manage → Advanced DNS"
echo "   Delete existing A and CNAME records for @ and www"
echo "   Add these 5 records:"
echo ""
echo "   Type: A Record, Host: @, Value: 185.199.108.153"
echo "   Type: A Record, Host: @, Value: 185.199.109.153"
echo "   Type: A Record, Host: @, Value: 185.199.110.153"
echo "   Type: A Record, Host: @, Value: 185.199.111.153"
echo "   Type: CNAME, Host: www, Value: $github_username.github.io."
echo ""
echo "   ⚠️  Don't forget the dot (.) at the end of github.io."
echo ""
echo "5️⃣  WAIT FOR DNS PROPAGATION:"
echo "   Check status: https://www.whatsmydns.net/"
echo "   Enter: $domain"
echo "   Wait: 10-30 minutes (up to 24 hours)"
echo ""
echo "6️⃣  ENABLE HTTPS:"
echo "   After DNS works, go back to GitHub Pages settings"
echo "   Check 'Enforce HTTPS'"
echo ""
echo "=============================="
echo "🎉 Your site will be live at:"
echo "   https://$domain"
echo "=============================="
echo ""
echo "📖 For detailed instructions, see: DEPLOY_INSTRUCTIONS.md"
echo ""
