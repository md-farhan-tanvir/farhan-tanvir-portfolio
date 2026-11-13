# Farhan Tanvir - Personal Portfolio Website

A portfolio website crafted for **Farhan Tanvir** (Web Developer & UI/UX Designer). Built with HTML5, CSS3, and JavaScript, styled with dark mode aesthetics, warm ember glows, and high-contrast orange typography.

---

## 🚀 Key Customizations Implemented

1. **Header & Navigation Segment**:
   - **Removed**: Top right "Start a Project" button in the navigation bar.
   - **Name Change**: Changed "ALEX RIVERA" to **"FARHAN TANVIR"** in the top brand logo and in the giant hero background typography.
   - **Navbar Cleanup**: Removed the "Services" link from the navbar pill.
   - **Section Removed**: Removed the entire "Services" section ("WHAT I CAN DO FOR YOU") from the page.
   - **Satisfied Clients Box Removed**: Removed the floating box with *"99.6% OF MY CLIENTS ARE SATISFIED"*.
   - **Second "Start a Project" Button Removed**: In the hero text area, kept only the sleek **"View My Work ↘"** button.
   - **Stats Ticker Bar Removed**: Removed the bottom ticker banner (*"99% POSITIVE REVIEWS"*, *"6 YEARS EXPERIENCE"*, and *"299+ DELIVERIES"*).

2. **"ABOUT ME" Segment**:
   - **Removed**: The "Book a Call" button; kept the **"More About Me ↗"** button.
   - **Text Updated**: Customized the statement to read *"I'M FARHAN TANVIR, A WEB DEVELOPER & UI/UX DESIGNER HELPING FOUNDERS AND TEAMS LAUNCH WEBSITES THAT LOOK SHARP, LOAD FAST AND QUIETLY TURN VISITORS INTO PAYING CLIENTS."*
   - **Infinite Moving Ticker**: Under *"TRUSTED BY TEAMS AT"*, replaced the previous company names with:
     - **InfoGram** ✦ **JhalMuri News** ✦ **Hult Prize at DU** ✦ **Voice of Business** ✦ **Travel Duniya**
     - Smooth, continuous infinite animation moving slowly from right to left.

3. **Portfolio & Interactive Case Studies**:
   - 4 featured project cards with crisp mockups: **Atlas Legal Partners**, **Trava Travel Platform**, **Ledgerly Finance Dashboard**, and **Maison Nord Store**.
   - Interactive modal popup with case study details (timeline, deliverables, tech stack, overview, and results) when clicking any project card.

4. **Testimonials**:
   - 3 authentic client testimonial cards featuring 5 orange stars, client quotes (updated with Farhan's name), and client avatars.

5. **Contact & Footer Segment**:
   - Giant impact statement: *"LET'S WORK TOGETHER"*.
   - One-click copy email button with instant tooltip feedback for `hello@farhantanvir.design`.
   - Interactive **"Start a Project"** contact modal with form validation and success message.

---

## 📁 Project Directory Structure

```text
farhan-tanvir-portfolio/
├── index.html              # Main semantic HTML structure
├── styles.css              # Custom dark theme styles, animations, and responsive layout
├── script.js               # Interactive modals, marquee, active nav scroll, clipboard
├── vercel.json             # Vercel deployment configuration with asset caching headers
├── package.json            # Project metadata and start scripts
├── .gitignore              # Files excluded from git tracking
├── README.md               # Deployment & setup documentation
└── assets/
    └── images/
        ├── hero-person.png             # Developer portrait with transparent cutout
        ├── project-atlas-legal.png     # Atlas Legal Partners mockup
        ├── project-trava.png           # Trava Travel Platform mockup
        ├── project-ledgerly.png        # Ledgerly Dashboard mockup
        ├── project-maison-nord.png     # Maison Nord Store mockup
        ├── avatar-sofia.png            # Sofia Lindqvist avatar
        ├── avatar-marcus.png           # Marcus Hale avatar
        └── avatar-mei.png              # Mei Tanaka avatar
```

---

## 🌐 How to Save to GitHub & Publish to Vercel (Free Plan)

Follow these simple steps so that every time you update your GitHub repository, Vercel will automatically publish the updated website:

### Step 1: Create a New GitHub Repository

1. Log in to [GitHub](https://github.com/).
2. In the top-right corner, click the **`+`** icon and select **New repository**.
3. Name your repository (for example: `farhan-tanvir-portfolio`).
4. Set the repository to **Public** (recommended for free personal portfolios).
5. Leave "Add a README file" unchecked (we already have one).
6. Click **Create repository**.

---

### Step 2: Upload Files to Your GitHub Repository

Choose whichever method is easiest for you:

#### Method A: Using Git Command Line (Recommended)

Open PowerShell or Terminal in the project folder (`C:\Users\dell\.gemini\antigravity\scratch\farhan-tanvir-portfolio`):

```bash
# 1. Initialize git
git init

# 2. Add all files
git add .

# 3. Commit files
git commit -m "Initial commit: Farhan Tanvir portfolio website"

# 4. Rename default branch to main
git branch -M main

# 5. Link to your GitHub repository (replace with your actual GitHub URL)
git remote add origin https://github.com/YOUR_USERNAME/farhan-tanvir-portfolio.git

# 6. Push to GitHub
git push -u origin main
```

#### Method B: Direct Web Upload (No Git Installation Needed)

1. On your newly created GitHub repository page, click **"uploading an existing file"**.
2. Drag and drop all the files and the `assets` folder from `C:\Users\dell\.gemini\antigravity\scratch\farhan-tanvir-portfolio` directly into your browser window.
3. In the commit message box at the bottom, type `"Initial commit"`.
4. Click **Commit changes**.

---

### Step 3: Deploy to Vercel (Free Plan) with Automatic Updates

1. Go to [Vercel](https://vercel.com/) and sign up or log in (choose **"Continue with GitHub"**).
2. On your Vercel Dashboard, click **Add New...** → **Project**.
3. Under **"Import Git Repository"**, you will see your `farhan-tanvir-portfolio` repository listed. Click **Import**.
4. In the Project Configuration:
   - **Framework Preset**: Select **Other** (or leave as auto-detected).
   - **Root Directory**: `./` (leave default).
   - **Build & Development Settings**: Leave blank (this is a static website, zero build step required).
5. Click **Deploy**.
6. Within **5 to 10 seconds**, your website will be live with a free SSL domain like:
   `https://farhan-tanvir-portfolio.vercel.app`

---

### 🔄 Automatic Publishing (CI/CD)

Whenever you edit any file in your GitHub repository (or push new commits), **Vercel will automatically detect the changes, build the site, and publish the update live within seconds**. You never need to manually redeploy!

---

## ✏️ How to Customize Further

- **Email Address**: Update `hello@farhantanvir.design` in `index.html` (lines 351, 355) and in `script.js` (line 104).
- **Social Links**: Replace the GitHub, LinkedIn, and Twitter links in `index.html` (lines 373-376) with your profile URLs.
- **Project Details**: Edit the descriptions, metrics, and tech stacks in `script.js` under `projectData`.
