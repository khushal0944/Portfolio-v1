interface navItemsType {
	name: string;
	path: string;
	icon: string;
}

interface connectionItemsType {
	name: string;
	link: string;
	icon: string;
}

interface companyExperienceType {
	post: string;
	company: string;
	company_link: string;
	joiningEndDate: string;
	work: string[];
}

interface projectType {
	title: string;
	vercel_link?: string;
	github_link?: string;
	description: string;
	tags?: string[];
}

interface stackDataType {
	heading: string;
	items: {
		icon: string;
		appName: string;
		avg_color: string;
		websiteLink: string;
		description: string;
	}[];
}

interface educationDataType {
    institute: string,
    year: string,
    description: string,
    instituteLink: string,
    pursuing: boolean,
}