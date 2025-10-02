import { EnsureUniqueValues } from "util";

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

export const AllOrganizationList = [...CoreOrganizationList, ...CommitteePartnerList] as [string, ...string[]];

export type ACMOrganization = typeof AllOrganizationList[number];

export const OrganizationShortIdentifierMapping = {
    "ACM": "acm",
    "SIGPwny": "sigpwny",
    "SIGCHI": "sigchi",
    "GameBuilders": "gamebuilders",
    "SIGAIDA": "sigaida",
    "SIGGRAPH": "siggraph",
    "ICPC": "icpc",
    "SIGMobile": "sigmobile",
    "SIGMusic": "sigmusic",
    "GLUG": "glug",
    "SIGNLL": "signll",
    "SIGma": "sigma",
    "SIGQuantum": "sigquantum",
    "SIGecom": "sigecom",
    "SIGPLAN": "sigplan",
    "SIGPolicy": "sigpolicy",
    "SIGARCH": "sigarch",
    "SIGRobotics": "sigrobotics",
    "SIGtricity": "sigtricity",
    "Infrastructure Committee": "infra",
    "Social Committee": "social",
    "Mentorship Committee": "mentorship",
    "Academic Committee": "academic",
    "Corporate Committee": "corporate",
    "Marketing Committee": "marketing",
    "Reflections | Projections": "reflproj",
    "HackIllinois": "hackillinois",
} as const satisfies EnsureUniqueValues<Record<ACMOrganization, string>>;