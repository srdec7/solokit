# SoloKit Notion Business Hub v1.0

## Your All-in-One Solo Business Command Center

> One Notion workspace to run your entire solo business. Projects, finances, clients, goals — all in one place.

---

## 🚀 Quick Setup (2 minutes)

1. Click the Notion template link (provided with your purchase)
2. Click "Duplicate" in the top-right corner
3. The entire workspace is now yours — customize it to fit your business
4. Follow the section-by-section setup guide below

---

## 📋 Template Structure

This template includes **6 interconnected databases** and **4 dashboard views** designed specifically for solopreneurs.

---

## Section 1: 📊 Main Dashboard

Your business at a glance. Open this every morning.

### What's Included:
- **Revenue Tracker** — Monthly income widget showing current month vs. target
- **Active Projects** — Filtered view showing only in-progress projects
- **This Week's Tasks** — Auto-filtered to show tasks due this week
- **Quick Capture** — Inbox for new ideas, tasks, and notes
- **Key Metrics** — Customizable KPI cards

### Database Properties:
```
Revenue Tracker Database:
├── Date (Date)
├── Source (Select: Product Sales, Services, Affiliate, Other)
├── Amount (Number, USD)
├── Status (Select: Received, Pending, Invoiced)
├── Client (Relation → Clients DB)
├── Notes (Text)
└── Month (Formula: formatDate(prop("Date"), "YYYY-MM"))
```

### Views to Create:
1. **Monthly Summary** — Table grouped by Month, with sum of Amount
2. **By Source** — Board view grouped by Source
3. **This Month** — Filtered table showing current month only

---

## Section 2: 📁 Project Tracker

Manage every project from idea to completion.

### Database Properties:
```
Projects Database:
├── Project Name (Title)
├── Status (Select: 💡 Idea, 📋 Planning, 🔨 In Progress, ✅ Complete, ❌ Cancelled)
├── Priority (Select: 🔴 High, 🟡 Medium, 🟢 Low)
├── Start Date (Date)
├── Due Date (Date)
├── Client (Relation → Clients DB)
├── Revenue (Relation → Revenue DB)
├── Tasks (Relation → Tasks DB)
├── Progress (Rollup: % of related tasks completed)
├── Category (Select: Product, Client Work, Marketing, Operations, Content)
├── Notes (Text)
└── Files (Files & Media)
```

### Views:
1. **Kanban Board** — Board view grouped by Status (default view)
2. **Timeline** — Timeline view by Start Date → Due Date
3. **By Client** — Table grouped by Client
4. **Active Only** — Filtered to show only "In Progress" projects

### How to Use:
- Create a new project for every initiative (product launch, client job, marketing campaign)
- Link related tasks, clients, and revenue entries
- Move cards across the Kanban board as you progress
- Check the Progress rollup to see completion percentage

---

## Section 3: ✅ Task Manager

Your daily to-do system with smart filtering.

### Database Properties:
```
Tasks Database:
├── Task Name (Title)
├── Status (Select: ⬜ To Do, 🔄 In Progress, ✅ Done, 📅 Scheduled)
├── Priority (Select: 🔴 Urgent, 🟡 Important, 🟢 Low)
├── Due Date (Date)
├── Project (Relation → Projects DB)
├── Time Estimate (Number, in minutes)
├── Actual Time (Number, in minutes)
├── Category (Select: Build, Write, Market, Admin, Finance, Learn)
├── Recurring (Checkbox)
├── Notes (Text)
└── Energy Level (Select: 🧠 High Focus, 🙂 Medium, 😴 Low Energy)
```

### Views:
1. **Today's Focus** — Filter: Due Date is today OR Status is "In Progress", sorted by Priority
2. **This Week** — Filter: Due Date is within next 7 days
3. **By Project** — Table grouped by Project relation
4. **Eisenhower Matrix** — Board view with 4 columns: Urgent+Important, Important, Urgent, Neither
5. **Done Log** — Filtered to show completed tasks, sorted by date (for weekly review)

### Daily Workflow:
1. Open "Today's Focus" view every morning
2. Pick your top 3 tasks (mark as 🔄 In Progress)
3. Work in focused blocks
4. Mark done when complete
5. End of day: quick review of tomorrow's tasks

---

## Section 4: 👤 Client CRM

Track every relationship that matters to your business.

### Database Properties:
```
Clients Database:
├── Name (Title)
├── Company (Text)
├── Email (Email)
├── Phone (Phone)
├── Status (Select: 🟢 Active, 🟡 Lead, 🔵 Past Client, ⚪ Prospect)
├── Source (Select: Referral, Social Media, Cold Outreach, Inbound, Other)
├── Projects (Relation → Projects DB)
├── Revenue (Rollup: Sum of related Revenue entries)
├── Last Contact (Date)
├── Next Follow-up (Date)
├── Notes (Text)
├── Tags (Multi-select: VIP, Long-term, Quick Project, High Budget, Referral Partner)
└── Rating (Select: ⭐⭐⭐⭐⭐, ⭐⭐⭐⭐, ⭐⭐⭐, ⭐⭐, ⭐)
```

### Views:
1. **All Clients** — Default table, sorted by Last Contact
2. **Pipeline** — Board view grouped by Status
3. **Follow-up Due** — Filtered: Next Follow-up is before or on today
4. **Top Clients** — Sorted by Revenue (highest first)
5. **By Source** — Board view grouped by Source (see where clients come from)

### CRM Workflow:
1. Add every potential client as a "Prospect" or "Lead"
2. After first meeting → update to "Lead" with notes
3. When they pay → update to "Active", create a Project
4. After project → update to "Past Client"
5. Set follow-up dates to stay in touch (referrals come from here!)

---

## Section 5: 🎯 Goal Setting & OKRs

Quarterly goals with measurable key results.

### Database Properties:
```
Goals Database:
├── Goal (Title)
├── Quarter (Select: Q1 2025, Q2 2025, Q3 2025, Q4 2025)
├── Category (Select: Revenue, Growth, Product, Personal, Marketing)
├── Status (Select: 🎯 Active, ✅ Achieved, ❌ Missed, ⏸️ Paused)
├── Target (Number)
├── Current (Number)
├── Unit (Select: $, subscribers, customers, products, hours)
├── Progress (Formula: round(prop("Current") / prop("Target") * 100))
├── Key Results (Relation → Key Results DB)
├── Due Date (Date)
└── Reflection (Text — fill this in at end of quarter)
```

### Key Results Sub-Database:
```
Key Results Database:
├── Key Result (Title)
├── Goal (Relation → Goals DB)
├── Target (Number)
├── Current (Number)
├── Status (Select: On Track, At Risk, Behind, Complete)
├── Owner (Text — it's just you, but good habit)
└── Weekly Update (Text)
```

### Views:
1. **This Quarter** — Filtered by current quarter, showing progress bars
2. **Goal Board** — Board view grouped by Category
3. **Progress Dashboard** — Gallery view with progress visualization

### How to Use:
1. At the start of each quarter, set 3-5 goals
2. For each goal, define 2-3 measurable key results
3. Update "Current" numbers weekly
4. End of quarter: write reflections, adjust next quarter

---

## Section 6: 💡 Idea Vault & Swipe File

Never lose a good idea again.

### Database Properties:
```
Ideas Database:
├── Idea (Title)
├── Type (Select: Product, Content, Feature, Marketing, Partnership, Random)
├── Potential (Select: 🔥 High, 🟡 Medium, 🟢 Low)
├── Effort (Select: Quick Win, Medium, Big Project)
├── Status (Select: 💡 New, 🔍 Researching, ✅ Approved, 🚀 In Progress, ❌ Rejected)
├── Notes (Text)
├── Inspiration Source (URL)
├── Date Added (Date, auto-filled)
└── Related Project (Relation → Projects DB)
```

### Swipe File Properties:
```
Swipe File Database:
├── Item (Title)
├── Type (Select: Headline, Email, Ad, Landing Page, Tweet, Design, Pricing)
├── Source (URL)
├── Screenshot (Files & Media)
├── Why It Works (Text)
├── Tags (Multi-select)
└── Date Saved (Date)
```

### Views:
1. **Ideas Board** — Kanban by Status
2. **Quick Wins** — Filtered: Potential = High AND Effort = Quick Win
3. **Swipe by Type** — Board view grouped by Type

---

## 📐 Setup Instructions

### Step 1: Duplicate the Template
- Click the Notion share link
- Click "Duplicate" in the top-right
- Choose your workspace

### Step 2: Customize Your Categories
Go through each database and update the Select options:
- Revenue sources (match YOUR income sources)
- Project categories (match YOUR business areas)
- Client tags (match YOUR relationship types)

### Step 3: Add Your Data
Start with:
1. Add your current clients to the CRM
2. Add your active projects
3. Set this quarter's goals
4. Start logging revenue

### Step 4: Set Your Daily Routine
- **Morning (5 min):** Open Main Dashboard → check today's tasks
- **During work:** Update task status as you go
- **Evening (5 min):** Log any revenue, update project progress
- **Weekly (15 min):** Review goals, plan next week's tasks
- **Monthly (30 min):** Financial review, goal check-in

---

## 🔗 Database Relations Map

```
Main Dashboard
    │
    ├── Revenue Tracker ←──→ Clients
    │
    ├── Projects ←──→ Clients
    │       │
    │       └──→ Tasks
    │
    ├── Goals ──→ Key Results
    │
    └── Ideas ──→ Projects (when approved)
```

Everything connects. When you add a revenue entry and link it to a client, you can see total revenue per client. When you link tasks to projects, you see project completion percentage. It's all automatic.

---

## 🎨 Customization Tips

### Colors
- Use Notion's built-in color coding for priorities
- Red = Urgent/High, Yellow = Medium/Important, Green = Low/Easy

### Icons
- Add page icons to each database for visual navigation
- Recommended: 📊 Revenue, 📁 Projects, ✅ Tasks, 👤 Clients, 🎯 Goals, 💡 Ideas

### Sidebar Organization
Create this sidebar structure:
```
📌 Favorites
├── 📊 Main Dashboard
├── ✅ Today's Tasks
└── 💰 This Month's Revenue

🏠 SoloKit Hub
├── 📊 Dashboard
├── 📁 Projects
├── ✅ Tasks
├── 👤 Clients
├── 💰 Revenue
├── 🎯 Goals
├── 💡 Ideas
└── 📋 Swipe File
```

---

## 📊 Formulas Reference

### Revenue: Monthly Total
```
// In Revenue database - "Month" property
formatDate(prop("Date"), "YYYY-MM")
```

### Tasks: Overdue Flag
```
// Returns true if task is past due and not done
if(
  and(
    prop("Status") != "✅ Done",
    prop("Due Date") < now()
  ),
  true,
  false
)
```

### Goals: Progress Percentage
```
// In Goals database
round(prop("Current") / prop("Target") * 100)
```

### Projects: Days Until Due
```
// Countdown to deadline
dateBetween(prop("Due Date"), now(), "days")
```

### Client: Total Revenue
```
// Rollup property on Clients database
// Relation: Revenue entries
// Property: Amount
// Calculate: Sum
```

---

## 🔄 Update Log

- **v1.0** — Initial release: 6 databases, 4 dashboards, full documentation

---

## 💬 Need Help?

- **Setup questions?** Email us or DM on Twitter/X: @SoloKitHQ
- **Feature requests?** We update the template quarterly based on user feedback
- **Notion basics?** Check Notion's official guides at notion.so/guides

---

**Thank you for purchasing SoloKit Notion Business Hub!**

© 2025 SoloKit. All rights reserved.
