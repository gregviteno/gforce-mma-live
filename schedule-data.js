/* =====================================================================
   G-FORCE CLASS SCHEDULE: edit this one file to update every page.
   ---------------------------------------------------------------------
   One line per class:
     { day: "Mon", start: "4:00 PM", end: "4:30 PM", program: "little-ninjas" }
   day      Mon Tue Wed Thu Fri Sat Sun
   program  one of the ids in GF_PROGRAMS below
   note     optional, e.g. "No-Gi" or "Advanced"
   Delete a line to remove a class. Copy a line to add one.

   ⚠ SAMPLE TIMES: G-Force hasn't sent its real schedule yet.
   Set GF_SCHEDULE_IS_SAMPLE to false once these are real.
   ===================================================================== */
window.GF_SCHEDULE_IS_SAMPLE = false;

window.GF_SCHEDULE = []; /* real times not in yet; see the source folder's schedule-data.js */

/* Program list: names, ages and pages. Edit ages here when G-Force confirms them. */
window.GF_PROGRAMS = {
  "little-ninjas":   { name: "Little Ninjas",        ages: "Ages 3–5",              group: "kids",   page: "little-ninjas.html" },
  "kids-kickboxing": { name: "Kids Kickboxing",      ages: "Ages 6+",               group: "kids",   page: "kids-kickboxing.html" },
  "kids-jiu-jitsu":  { name: "Kids Jiu-Jitsu",       ages: "Ages 6+",               group: "kids",   page: "kids-jiu-jitsu.html" },
  "girls-wrestling": { name: "Girls Wrestling",      ages: "Middle & High School",  group: "kids",   page: "girls-wrestling.html" },
  "kickboxing":      { name: "Kickboxing",           ages: "Adults · All Levels",   group: "adults", page: "kickboxing.html" },
  "jiu-jitsu":       { name: "Brazilian Jiu-Jitsu",  ages: "Adults · All Levels",   group: "adults", page: "jiu-jitsu.html" },
  "g-fit-360":       { name: "G-Fit 360",            ages: "Adults · 45 Minutes",   group: "adults", page: "g-fit-360.html" }
};
