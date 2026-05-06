export interface TermsSection {
  heading: string;
  body: string;
}

export interface TermsData {
  title: string;
  lastUpdated: string;
  sections: TermsSection[];
}

export interface TermsApiResponse {
  status: string;
  data: TermsData;
}
