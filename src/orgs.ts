export enum OrgType {
    MAIN = "main",
    SIG = "sig",
    COMMITTEE = "committee",
    MISC = "misc",
}

export const Organizations = {
    "A01": { name: "ACM", type: OrgType.MAIN, shortcode: "acm" },
    "S01": { name: "SIGPwny", type: OrgType.SIG, shortcode: "sigpwny" },
    "S02": { name: "SIGCHI", type: OrgType.SIG, shortcode: "sigchi" },
    "S03": { name: "GameBuilders", type: OrgType.SIG, shortcode: "gamebuilders" },
    "S04": { name: "SIGAIDA", type: OrgType.SIG, shortcode: "sigaida" },
    "S05": { name: "SIGGRAPH", type: OrgType.SIG, shortcode: "siggraph" },
    "S06": { name: "ICPC", type: OrgType.SIG, shortcode: "icpc" },
    "S07": { name: "SIGMobile", type: OrgType.SIG, shortcode: "sigmobile" },
    "S08": { name: "SIGMusic", type: OrgType.SIG, shortcode: "sigmusic" },
    "S09": { name: "GLUG", type: OrgType.SIG, shortcode: "glug" },
    "S10": { name: "SIGNLL", type: OrgType.SIG, shortcode: "signll" },
    "S11": { name: "SIGma", type: OrgType.SIG, shortcode: "sigma" },
    "S12": { name: "SIGQuantum", type: OrgType.SIG, shortcode: "sigquantum" },
    "S13": { name: "SIGecom", type: OrgType.SIG, shortcode: "sigecom" },
    "S14": { name: "SIGPLAN", type: OrgType.SIG, shortcode: "sigplan" },
    "S15": { name: "SIGPolicy", type: OrgType.SIG, shortcode: "sigpolicy" },
    "S16": { name: "SIGARCH", type: OrgType.SIG, shortcode: "sigarch" },
    "S17": { name: "SIGRobotics", type: OrgType.SIG, shortcode: "sigrobotics" },
    "S18": { name: "SIGtricity", type: OrgType.SIG, shortcode: "sigtricity" },

    "C01": { name: "Infrastructure Committee", type: OrgType.COMMITTEE, shortcode: "infra" },
    "C02": { name: "Social Committee", type: OrgType.COMMITTEE, shortcode: "social" },
    "C03": { name: "Mentorship Committee", type: OrgType.COMMITTEE, shortcode: "mentorship" },
    "C04": { name: "Academic Committee", type: OrgType.COMMITTEE, shortcode: "academic" },
    "C05": { name: "Corporate Committee", type: OrgType.COMMITTEE, shortcode: "corporate" },
    "C06": { name: "Marketing Committee", type: OrgType.COMMITTEE, shortcode: "marketing" },

    "C07": { name: "Reflections | Projections", type: OrgType.COMMITTEE, shortcode: "reflproj" },
    "C08": { name: "HackIllinois", type: OrgType.COMMITTEE, shortcode: "hackillinois" },
} as const;

export const AllOrganizationNameList = Object.values(Organizations).map(x => x.name);
export type OrganizationId = keyof typeof Organizations;
export type Organization = (typeof Organizations)[OrganizationId];
export type OrganizationName = Organization["name"];

// Create a reverse lookup map from name to ID
export const OrganizationsByName = Object.entries(Organizations).reduce(
    (acc, [id, org]) => {
        if (acc[org.name]) {
            throw new Error(`Duplicate organization name: ${org.name}`);
        }
        acc[org.name] = id as OrganizationId;
        return acc;
    },
    {} as Record<OrganizationName, OrganizationId>
);

export function getOrgByName(name: OrganizationName): (Organization & { id: OrganizationId }) | undefined {
    const id = OrganizationsByName[name];
    if (!id) return undefined;

    return { ...Organizations[id], id };
}

export function getOrgsByType(type: OrgType): Array<Organization & { id: OrganizationId }> {
    return (Object.entries(Organizations) as Array<[OrganizationId, Organization]>)
        .filter(([_, org]) => org.type === type)
        .map(([id, org]) => ({ ...org, id }));
}