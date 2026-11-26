# Project log

Keep this up to date as you go — a few lines per work session is enough. It's much harder to reconstruct at the end.

**Name:** Etienne  
**Startup:** Newrep  
**Live link:** https://etiennepahlke.github.io/Fitness_startup/

---

## Work sessions

Copy this block for each session.

### Session 2 — Nov 26 — driver: Etienne

- **Goal for this session:** Build the trainer marketplace, the booking flow, and the network effects page.

- **Key prompts we gave Copilot** (paste the important ones):
  1. “Add a ‘Find a trainer’ page showing 10-12 fake trainer profiles... initials avatar, specialty, years of experience, price per check-in, star rating and number of reviews. Add filters for specialty and maximum price...”
  2. “Add a trainer profile view showing their bio, specialties, 3 short fake reviews and available time slots this week... Do NOT add any card or payment fields. Instead use a button labeled ‘Confirm demo booking (no payment taken)’...”
  3. “Add a page called ‘How it grows’ that visually shows a two-sided network effect. Include two sliders: number of trainers and number of users...”
- **What worked:** 12 trainers with working specialty and price filters. Profiles show a bio, reviews, time slots, and a demo booking with no payment fields. The How it grows page shows both sides of the network effect with live sliders and labels the numbers as illustrative.
- **What broke, and how we fixed it:** Copilot wrote its own Session 2 entry in my log twice because the log file was attached or because the template tells it to update the log. It wrote things that weren't accurate, so I discarded those changes in Source Control and changed the end of my prompts to “Do not edit anything in the project-notes folder.” The trainer section showed the old 3 cards with unstyled filters, and View profile only showed a bio, until the live site finished updating and I hard refreshed.
- **Committed?** Yes — “Added trainer page,” “Added booking flow,” and “Added network effects page.”

### Session 1 — Nov 26 — driver: Etienne

- **Goal for this session:** Rename the repo, turn on GitHub Pages, and build the home page and the plan quiz.

- **Key prompts we gave Copilot** (paste the important ones):
  1. “Replace the placeholder content of this starter site with a new site for Newrep, a platform where beginners get a free AI-generated fitness plan and can book cheap 15-minute video check-ins with certified personal trainers... Plain HTML, CSS and JavaScript only. No external libraries... Keep the existing footer text exactly as it is.”
  2. “Add a ‘Get my plan’ page with a short quiz: goal, experience level, days per week available, and equipment. When submitted, show a personalized weekly workout plan and simple, moderate nutrition guidance... no extreme calorie targets.”
  3. “On the ‘Get my plan’ section there are two problems. The quiz questions are squashed together... When I click ‘Build my plan’ the page reloads... Fix only these two things. Only edit the files. Don’t run any terminal commands or tests.”
- **What worked:** The home page came out clean and explains the product right away. The quiz builds a different weekly plan depending on the answers. Adding “don’t run any terminal commands” to my prompts stopped Copilot from getting stuck.
- **What broke, and how we fixed it:** Copilot got stuck on “confirmations pending” twice, and no approve buttons showed up, so I stopped it and committed the changes myself. I typed my commit message into the Copilot chat by mistake and it started a new task, so I stopped it and found the real commit box in Source Control. The quiz looked unstyled on the live site and the button reloaded the page; a hard refresh showed my browser was showing old cached files, and I also had Copilot fix the layout.
- **Committed?** Yes — “Built home page,” “Added plan quiz,” and “Fixed quiz layout and plan button.”

---

## Things that broke (running list)

| Date | What went wrong | What we tried | What finally fixed it |
|---|---|---|---|
| Nov 26 | Copilot got stuck on “confirmations pending” with no buttons. | Looked for approve buttons and made the chat panel bigger. | Stopped Copilot, committed manually, then added “Only edit the files. Don’t run any terminal commands or tests.” to every prompt. |
| Nov 26 | Typed the commit message into Copilot chat, and it started a new task. | Stopped it. | Used the Message box in the Source Control panel instead. |
| Nov 26 | Quiz looked unstyled on the live site, and the button reloaded the page. | Asked Copilot to fix the layout and the button. | Hard refresh (Cmd+Shift+R) because the browser was showing old cached files. |
| Nov 26 | Copilot edited my project log on its own with inaccurate notes. | Discarded the log changes before committing. | Added “Do not edit anything in the project-notes folder” to every prompt. |
| Nov 26 | Trainer section showed old cards, unstyled filters, and no booking after a commit. | Waited for GitHub Pages to update. | Hard refresh once the deploy finished. |

## What a real version would need

Everything we wanted but faked or left out — real logins, a real database, payments, security, moderation, an app, staff, etc. For each one, say **why** it's needed and roughly **how hard or expensive** you think it would be.

| Feature we faked or skipped | Why a real company would need it | How hard / expensive? |
|---|---|---|
| | | |

## Reflection (fill in at the end)

1. What surprised you most about building software with AI?
2. Which parts were easy, and which were hard? Why do you think that is?
3. If a competitor had the same AI tool, how long would it take them to copy your site?
