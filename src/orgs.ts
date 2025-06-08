export const SIGList = [
    "SIGPwny",
    "SIGCHI",
    "GameBuilders",
    "SIGAIDA",
    "SIGGRAPH",
    "ICPC",
    "SIGMobile",
    "SIGMusic",
    "GLUG",
    "SIGNLL",
    "SIGma",
    "SIGQuantum",
    "SIGecom",
    "SIGPLAN",
    "SIGPolicy",
    "SIGARCH",
    "SIGRobotics",
    "SIGtricity",
] as [string, ...string[]];

export const CommitteeCoreList = [
    "Infrastructure Committee",
    "Social Committee",
    "Mentorship Committee",
    "Academic Committee",
    "Corporate Committee",
    "Marketing Committee",
] as [string, ...string[]];

export const CommitteePartnerList = ["Reflections | Projections", "HackIllinois"]

export const CoreOrganizationList = ["ACM", ...SIGList, ...CommitteeCoreList] as [string, ...string[]];

export const AllOrganizationList = [...CoreOrganizationList, ...CommitteePartnerList]