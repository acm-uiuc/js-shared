export enum OrgType {
    MAIN = "main",
    SIG = "sig",
    COMMITTEE = "committee",
    MISC = "misc",
}

// IDs are the source of truth
export const AllOrganizationIdList = [
    "A01",
    "S01", "S02", "S03", "S04", "S05", "S06", "S07", "S08", "S09",
    "S10", "S11", "S12", "S13", "S14", "S15", "S16", "S17", "S18",
    "C01", "C02", "C03", "C04", "C05", "C06", "C07", "C08",
] as const;

export type OrganizationId = (typeof AllOrganizationIdList)[number];

export type Organization = {
    name: string;
    type: OrgType;
    shortcode: string;
    color: string;
    stripeAccountId?: string;
};

// This MUST have an entry for every ID (compile error if missing)
export const Organizations: { readonly [K in OrganizationId]: Organization } = {
    "A01": { name: "ACM", type: OrgType.MAIN, shortcode: "acm", color: "#4577f8", stripeAccountId: "acct_19mShiDiGOXU9RuS" },
    "S01": { name: "SIGPwny", type: OrgType.SIG, shortcode: "sigpwny", color: "#33cc55" },
    "S02": { name: "SIGCHI", type: OrgType.SIG, shortcode: "sigchi", color: "#EEAE48" },
    "S03": { name: "GameBuilders", type: OrgType.SIG, shortcode: "gamebuilders", color: "#29386D" },
    "S04": { name: "SIGAIDA", type: OrgType.SIG, shortcode: "sigaida", color: "#BFDDFC" },
    "S05": { name: "SIGGRAPH", type: OrgType.SIG, shortcode: "siggraph", color: "#7896A7" },
    "S06": { name: "ICPC", type: OrgType.SIG, shortcode: "icpc", color: "#AF2A23" },
    "S07": { name: "SIGMobile", type: OrgType.SIG, shortcode: "sigmobile", color: "#0C7BBD" },
    "S08": { name: "SIGMusic", type: OrgType.SIG, shortcode: "sigmusic", color: "#F4DCA3" },
    "S09": { name: "GLUG", type: OrgType.SIG, shortcode: "glug", color: "#E94A27" },
    "S10": { name: "SIGNLL", type: OrgType.SIG, shortcode: "signll", color: "#F59A23" },
    "S11": { name: "SIGma", type: OrgType.SIG, shortcode: "sigma", color: "#4B65F2" },
    "S12": { name: "SIGQuantum", type: OrgType.SIG, shortcode: "sigquantum", color: "#233643" },
    "S13": { name: "SIGecom", type: OrgType.SIG, shortcode: "sigecom", color: "#00759A" },
    "S14": { name: "SIGPLAN", type: OrgType.SIG, shortcode: "sigplan", color: "#4577f8" },
    "S15": { name: "SIGPolicy", type: OrgType.SIG, shortcode: "sigpolicy", color: "#292929" },
    "S16": { name: "SIGARCH", type: OrgType.SIG, shortcode: "sigarch", color: "#155CD0" },
    "S17": { name: "SIGRobotics", type: OrgType.SIG, shortcode: "sigrobotics", color: "#B0B0B0" },
    "S18": { name: "SIGtricity", type: OrgType.SIG, shortcode: "sigtricity", color: "#4577f8" },
    "C01": { name: "Infrastructure Committee", type: OrgType.COMMITTEE, shortcode: "infra", color: "#4577f8" },
    "C02": { name: "Social Committee", type: OrgType.COMMITTEE, shortcode: "social", color: "#4577f8" },
    "C03": { name: "Mentorship Committee", type: OrgType.COMMITTEE, shortcode: "mentorship", color: "#4577f8" },
    "C04": { name: "Academic Committee", type: OrgType.COMMITTEE, shortcode: "academic", color: "#4577f8" },
    "C05": { name: "Corporate Committee", type: OrgType.COMMITTEE, shortcode: "corporate", color: "#4577f8" },
    "C06": { name: "Marketing Committee", type: OrgType.COMMITTEE, shortcode: "marketing", color: "#4577f8" },
    "C07": { name: "Reflections | Projections", type: OrgType.COMMITTEE, shortcode: "reflproj", color: "#4577f8" },
    "C08": { name: "HackIllinois", type: OrgType.COMMITTEE, shortcode: "hackillinois", color: "#4577f8" },
};

// Derived types
export type OrganizationName = (typeof Organizations)[OrganizationId]["name"];

// Reverse lookup type and value
export type OrganizationsByNameType = {
    [K in OrganizationId as (typeof Organizations)[K]["name"]]: K;
};

export const OrganizationsByName = Object.fromEntries(
    Object.entries(Organizations).map(([id, org]) => [org.name, id])
) as OrganizationsByNameType;

export const AllOrganizationNameList = AllOrganizationIdList.map(id => Organizations[id].name) as OrganizationName[];

// Helper to get ID from name (typed return)
export function getOrgIdByName<N extends OrganizationName>(name: N): OrganizationsByNameType[N] {
    return OrganizationsByName[name];
}

// Helper to get org by name (typed return)
export function getOrgByName<N extends OrganizationName>(
    name: N
): (typeof Organizations)[OrganizationsByNameType[N]] & { id: OrganizationsByNameType[N] } {
    const id = OrganizationsByName[name];
    return { ...Organizations[id], id };
}

// For cases where you have an unknown string and need to check
export function isValidOrgName(name: string): name is OrganizationName {
    return name in OrganizationsByName;
}

export function isValidOrgId(id: string): id is OrganizationId {
    return id in Organizations;
}

export function getOrgsByType(type: OrgType): Array<Organization & { id: OrganizationId }> {
    return AllOrganizationIdList
        .filter(id => Organizations[id].type === type)
        .map(id => ({ ...Organizations[id], id }));
}
