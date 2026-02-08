#!/bin/bash

# GitHub Pages Deployment Script
# Run this to deploy your portfolio to GitHub Pages

echo "🚀 Deploying Portfolio to GitHub Pages"
echo "========================================"

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial portfolio commit"
else
    echo "✅ Git repository already initialized"
fi

# Prompt for GitHub username
read -p "Enter your GitHub username: " github_username

# Prompt for repository name
read -p "Enter repository name (default: portfolio): " repo_name
repo_name=${repo_name:-portfolio}

# Prompt for custom domain
read -p "Enter your Namecheap domain (e.g., yourdomain.com): " domain

# Create CNAME file
echo "$domain" > CNAME
echo "✅ Created CNAME file with domain: $domain"

# Add and commit CNAME
git add CNAME
git commit -m "Add custom domain"

echo ""
echo "📝 Next Steps:"
echo "=============="
echo ""
echo "1. Create a new repository on GitHub:"
echo "   https://github.com/new"
echo "   Repository name: $repo_name"
echo "   Make it PUBLIC"
echo ""
echo "2. Run these commands:"
echo "   git remote add origin https://github.com/$github_username/$repo_name.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Enable GitHub Pages:"
echo "   Go to: https://github.com/$github_username/$repo_name/settings/pages"
echo "   Source: Deploy from branch 'main'"
echo "   Click Save"
echo ""
echo "4. Configure Namecheap DNS:"
echo "   Login to Namecheap → Domain List → Manage → Advanced DNS"
echo "   Add these records:"
echo ""
echo "   Type: A Record, Host: @, Value: 185.199.108.153, TTL: Automatic"
echo "   Type: A Record, Host: @, Value: 185.199.109.153, TTL: Automatic"
echo "   Type: A Record, Host: @, Value: 185.199.110.153, TTL: Automatic"
echo "   Type: A Record, Host: @, Value: 185.199.111.153, TTL: Automatic"
echo "   Type: CNAME, Host: www, Value: $github_username.github.io., TTL: Automatic"
echo ""
echo "5. Wait 10-30 minutes for DNS propagation"
echo ""
echo "🎉 Your site will be live at: https://$domain"
echo ""
