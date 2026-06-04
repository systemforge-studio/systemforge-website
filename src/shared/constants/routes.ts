export const SECTION_ID = {
  HOME: "home",
  PROJECTS: "projects",
  SERVICES: "services",
  STACK: "stack",
  ARCHITECTURE: "architecture",
  TEAM: "team",
  CONTACT: "contact",
} as const;

export const ROUTES = {
  HOME: `#${SECTION_ID.HOME}`,
  PROJECTS: `#${SECTION_ID.PROJECTS}`,
  SERVICES: `#${SECTION_ID.SERVICES}`,
  STACK: `#${SECTION_ID.STACK}`,
  ARCHITECTURE: `#${SECTION_ID.ARCHITECTURE}`,
  TEAM: `#${SECTION_ID.TEAM}`,
  CONTACT: `#${SECTION_ID.CONTACT}`,
} as const;

export const SECTION_IDS = Object.values(SECTION_ID);