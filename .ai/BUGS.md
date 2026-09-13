# Known Bugs & Issues — Bindhu Portfolio

---

## Active Bugs
*None.*

---

## Resolved Bugs
- **BUG-002: Advisory Services Click Navigation Synchronization & Pinned Scroll Coupling**
  - *Symptom:* When clicking "02 Household Guidance", "03 Transition Guidance", or "04 Specialized Guidance" in the Advisory Services navigator, the page scrolled to coordinate offsets, fighting with ScrollSmoother/ScrollTrigger momentum, or unexpectedly exiting the section into adjacent narrative. Pinned scroll-driven card switching created friction where users were forced to perform virtual scroll runways to read services.
  - *Root Cause:* Excessive architectural coupling between normal page scroll position and internal service card selection. Tying card switching to a pinned ScrollTrigger runway caused coordinate desynchronization, layout traps, and unnatural scroll-velocity demands.
  - *Fix Applied:* Fully decoupled page scroll from service selection. Completely removed the pinned ScrollTrigger runway, virtual scroll height (3200px), anticipatePin, and scroll-coordinate navigation. Implemented a spatially stable, unpinned two-column interactive composition: left column contains the 4 selectable service items; right column displays the selected service content in a height-stable CSS grid overlay. Card switching executes a refined, interruptible right-to-left editorial transition (`x: +28px -> 0, opacity: 0 -> 1` via `power2.out`), while `window.scrollY` remains 100% stationary. Page scrolling now flows naturally through `About -> Services -> How It Works` in standard document flow.
  - *Verification:* Verified across all single, multi-hop, and rapid interactions (01→02→03→04, 04→03→02→01, 01→04, 04→01, 02→04, 03→01, rapid sequences, repeat clicks, keyboard arrows/Home/End). 0px scroll displacement confirmed on every card switch. Normal page flow verified into `#process` with 0 gap/trap. Verified across 1440×900, 1280×800, 1024×768 desktop and 390×844, 320×568 mobile. 0 build errors, 0 console messages.


- **BUG-001: Advisory Services Content Visibility & Premature Section Release**
  - *Symptom:* When scrolling through Advisory Services, cards rushed past without sufficient reading time, Service 04 had virtually no resting plateau, and the subsequent "How It Works" (`#process`) section began appearing prematurely while Service 04 was still on screen. Additionally, 50/50 crossfading caused duplicate text ghosting during transitions.
  - *Root Cause:* Scroll runway of 2000px gave only ~356px travel per service; `#services` bottom padding (96px) failed to account for tall viewports ($>792\text{px}$), causing `#process` to bleed into view before the ScrollTrigger unpinned; transitions lacked staggered opacity separation.
  - *Fix Applied:* Expanded runway to 3200px (~800px per service); dedicated a full 800px reading plateau ($t = 3.00 \to 4.00$) to Service 04; applied dynamic bottom clearance `lg:pb-[max(7rem,calc(100vh-620px))]` keeping `#process` at least 30–60px below viewport until unpin; staged crossfades with non-overlapping opacity curves; refined card height to ~509–584px with responsive pin start.
  - *Verification:* Verified across 1440×900, 1280×800, 1024×768, 390×844, and 320×568. 0 console errors, 0 ghosting, clean section handoff. Fixed in `src/components/sections/Services.tsx`.

---

## Observations & Notes
- Greenfield workspace: No code has been executed yet, so no runtime or build errors exist.
- Bug tracker will be updated as implementation begins and testing reveals defects.

