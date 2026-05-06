/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface APIResponse
 */
export interface APIResponse {
    /**
     * 
     * @type {string}
     * @memberof APIResponse
     */
    status?: string;
    /**
     * 
     * @type {object}
     * @memberof APIResponse
     */
    data?: object | null;
    /**
     * 
     * @type {string}
     * @memberof APIResponse
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface ChangeHistoryItem
 */
export interface ChangeHistoryItem {
    /**
     * 
     * @type {string}
     * @memberof ChangeHistoryItem
     */
    changeId?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeHistoryItem
     */
    timestamp?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeHistoryItem
     */
    changedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeHistoryItem
     */
    fieldName?: string;
    /**
     * String-serialised previous value
     * @type {string}
     * @memberof ChangeHistoryItem
     */
    oldValue?: string;
    /**
     * String-serialised new value
     * @type {string}
     * @memberof ChangeHistoryItem
     */
    newValue?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeHistoryItem
     */
    action?: ChangeHistoryItemActionEnum;
}


/**
 * @export
 */
export const ChangeHistoryItemActionEnum = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    SUBMIT: 'SUBMIT',
    CANCEL: 'CANCEL'
} as const;
export type ChangeHistoryItemActionEnum = typeof ChangeHistoryItemActionEnum[keyof typeof ChangeHistoryItemActionEnum];

/**
 * 
 * @export
 * @interface CollateralItem
 */
export interface CollateralItem {
    /**
     * 
     * @type {string}
     * @memberof CollateralItem
     */
    collateralId?: string;
    /**
     * 
     * @type {string}
     * @memberof CollateralItem
     */
    collateralType?: string;
    /**
     * 
     * @type {string}
     * @memberof CollateralItem
     */
    titleDeedNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof CollateralItem
     */
    landArea?: string;
    /**
     * Thai Baht, 2 decimal places
     * @type {number}
     * @memberof CollateralItem
     */
    appraisalPrice?: number;
    /**
     * Thai Baht, 2 decimal places
     * @type {number}
     * @memberof CollateralItem
     */
    sellingPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof CollateralItem
     */
    location?: string;
}
/**
 * 
 * @export
 * @interface ContractDocument
 */
export interface ContractDocument {
    /**
     * 
     * @type {string}
     * @memberof ContractDocument
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ContractDocument
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ContractDocument
     */
    documentUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ContractDocument
     */
    isReviewed?: boolean;
}
/**
 * 
 * @export
 * @interface ContractGroup
 */
export interface ContractGroup {
    /**
     * 
     * @type {string}
     * @memberof ContractGroup
     */
    contractId?: string;
    /**
     * 
     * @type {string}
     * @memberof ContractGroup
     */
    contractType?: string;
    /**
     * 
     * @type {string}
     * @memberof ContractGroup
     */
    cfaType?: ContractGroupCfaTypeEnum;
    /**
     * Thai Baht, 2 decimal places
     * @type {number}
     * @memberof ContractGroup
     */
    creditLimit?: number;
    /**
     * 
     * @type {Array<ContractDocument>}
     * @memberof ContractGroup
     */
    documents?: Array<ContractDocument>;
}


/**
 * @export
 */
export const ContractGroupCfaTypeEnum = {
    CFA: 'CFA',
    T_L: 'T/L'
} as const;
export type ContractGroupCfaTypeEnum = typeof ContractGroupCfaTypeEnum[keyof typeof ContractGroupCfaTypeEnum];

/**
 * 
 * @export
 * @interface DocumentReviewRequest
 */
export interface DocumentReviewRequest {
    /**
     * 
     * @type {boolean}
     * @memberof DocumentReviewRequest
     */
    isReviewed: boolean;
}
/**
 * 
 * @export
 * @interface DocumentReviewResponse
 */
export interface DocumentReviewResponse {
    /**
     * 
     * @type {string}
     * @memberof DocumentReviewResponse
     */
    documentId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentReviewResponse
     */
    isReviewed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DocumentReviewResponse
     */
    reviewedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentReviewResponse
     */
    reviewedBy?: string;
}
/**
 * 
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface GetJobChanges200Response
 */
export interface GetJobChanges200Response {
    /**
     * 
     * @type {string}
     * @memberof GetJobChanges200Response
     */
    status?: string;
    /**
     * 
     * @type {JobChangesGetResponse}
     * @memberof GetJobChanges200Response
     */
    data?: JobChangesGetResponse;
    /**
     * 
     * @type {string}
     * @memberof GetJobChanges200Response
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface GetJobContracts200Response
 */
export interface GetJobContracts200Response {
    /**
     * 
     * @type {string}
     * @memberof GetJobContracts200Response
     */
    status?: string;
    /**
     * 
     * @type {JobContractsGetResponse}
     * @memberof GetJobContracts200Response
     */
    data?: JobContractsGetResponse;
    /**
     * 
     * @type {string}
     * @memberof GetJobContracts200Response
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface GetJobInfo200Response
 */
export interface GetJobInfo200Response {
    /**
     * 
     * @type {string}
     * @memberof GetJobInfo200Response
     */
    status?: string;
    /**
     * 
     * @type {JobInfoGetResponse}
     * @memberof GetJobInfo200Response
     */
    data?: JobInfoGetResponse;
    /**
     * 
     * @type {string}
     * @memberof GetJobInfo200Response
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface JobCancelRequest
 */
export interface JobCancelRequest {
    /**
     * 
     * @type {string}
     * @memberof JobCancelRequest
     */
    reason: string;
    /**
     * 
     * @type {string}
     * @memberof JobCancelRequest
     */
    comment?: string;
}
/**
 * 
 * @export
 * @interface JobChangesGetResponse
 */
export interface JobChangesGetResponse {
    /**
     * 
     * @type {string}
     * @memberof JobChangesGetResponse
     */
    jobId?: string;
    /**
     * 
     * @type {Array<ChangeHistoryItem>}
     * @memberof JobChangesGetResponse
     */
    changes?: Array<ChangeHistoryItem>;
    /**
     * 
     * @type {number}
     * @memberof JobChangesGetResponse
     */
    total?: number;
    /**
     * 
     * @type {number}
     * @memberof JobChangesGetResponse
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof JobChangesGetResponse
     */
    pageSize?: number;
}
/**
 * 
 * @export
 * @interface JobContractsGetResponse
 */
export interface JobContractsGetResponse {
    /**
     * 
     * @type {string}
     * @memberof JobContractsGetResponse
     */
    jobId?: string;
    /**
     * 
     * @type {Array<ContractGroup>}
     * @memberof JobContractsGetResponse
     */
    contracts?: Array<ContractGroup>;
}
/**
 * 
 * @export
 * @interface JobInfoGetResponse
 */
export interface JobInfoGetResponse {
    /**
     * 
     * @type {string}
     * @memberof JobInfoGetResponse
     */
    jobId?: string;
    /**
     * 
     * @type {string}
     * @memberof JobInfoGetResponse
     */
    jobStatus?: JobInfoGetResponseJobStatusEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof JobInfoGetResponse
     */
    tags?: Array<string>;
    /**
     * Each entry: 'branchCode - branchName'
     * @type {Array<string>}
     * @memberof JobInfoGetResponse
     */
    branch?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof JobInfoGetResponse
     */
    loanAgreementSigningDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof JobInfoGetResponse
     */
    spouseConsentSigningDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof JobInfoGetResponse
     */
    guaranteeSigningDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof JobInfoGetResponse
     */
    mortgageDate?: string | null;
    /**
     * Thai Baht, 2 decimal places
     * @type {number}
     * @memberof JobInfoGetResponse
     */
    appraisalPrice?: number | null;
    /**
     * Thai Baht, 2 decimal places
     * @type {number}
     * @memberof JobInfoGetResponse
     */
    sellingPrice?: number | null;
    /**
     * 
     * @type {number}
     * @memberof JobInfoGetResponse
     */
    cfaTotalCreditLimitOriginal?: number | null;
    /**
     * 
     * @type {number}
     * @memberof JobInfoGetResponse
     */
    cfaTotalCreditLimitCurrent?: number | null;
    /**
     * 
     * @type {number}
     * @memberof JobInfoGetResponse
     */
    cfaIncrementAmount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof JobInfoGetResponse
     */
    cfaSigningDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof JobInfoGetResponse
     */
    cfaRound?: number | null;
    /**
     * 
     * @type {LoanApplicantPage}
     * @memberof JobInfoGetResponse
     */
    loanApplicants?: LoanApplicantPage;
    /**
     * 
     * @type {Array<LoanDetail>}
     * @memberof JobInfoGetResponse
     */
    loanDetails?: Array<LoanDetail>;
    /**
     * 
     * @type {Array<CollateralItem>}
     * @memberof JobInfoGetResponse
     */
    collateralInfo?: Array<CollateralItem>;
}


/**
 * @export
 */
export const JobInfoGetResponseJobStatusEnum = {
    Pending_Start: 'Pending Start',
    In_Progress: 'In Progress',
    Completed: 'Completed',
    Cancelled: 'Cancelled'
} as const;
export type JobInfoGetResponseJobStatusEnum = typeof JobInfoGetResponseJobStatusEnum[keyof typeof JobInfoGetResponseJobStatusEnum];

/**
 * All fields optional — only provided fields are updated (partial update)
 * @export
 * @interface JobInfoUpdateRequest
 */
export interface JobInfoUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof JobInfoUpdateRequest
     */
    loanAgreementSigningDate?: string;
    /**
     * 
     * @type {string}
     * @memberof JobInfoUpdateRequest
     */
    spouseConsentSigningDate?: string;
    /**
     * 
     * @type {string}
     * @memberof JobInfoUpdateRequest
     */
    guaranteeSigningDate?: string;
    /**
     * 
     * @type {string}
     * @memberof JobInfoUpdateRequest
     */
    mortgageDate?: string;
    /**
     * 
     * @type {number}
     * @memberof JobInfoUpdateRequest
     */
    appraisalPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof JobInfoUpdateRequest
     */
    sellingPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof JobInfoUpdateRequest
     */
    cfaTotalCreditLimitOriginal?: number;
    /**
     * 
     * @type {number}
     * @memberof JobInfoUpdateRequest
     */
    cfaTotalCreditLimitCurrent?: number;
    /**
     * 
     * @type {number}
     * @memberof JobInfoUpdateRequest
     */
    cfaIncrementAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof JobInfoUpdateRequest
     */
    cfaSigningDate?: string;
    /**
     * 
     * @type {number}
     * @memberof JobInfoUpdateRequest
     */
    cfaRound?: number;
}
/**
 * 
 * @export
 * @interface JobStatusResponse
 */
export interface JobStatusResponse {
    /**
     * 
     * @type {string}
     * @memberof JobStatusResponse
     */
    jobId?: string;
    /**
     * 
     * @type {string}
     * @memberof JobStatusResponse
     */
    jobStatus?: JobStatusResponseJobStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof JobStatusResponse
     */
    updatedAt?: string;
}


/**
 * @export
 */
export const JobStatusResponseJobStatusEnum = {
    Pending_Start: 'Pending Start',
    In_Progress: 'In Progress',
    Completed: 'Completed',
    Cancelled: 'Cancelled'
} as const;
export type JobStatusResponseJobStatusEnum = typeof JobStatusResponseJobStatusEnum[keyof typeof JobStatusResponseJobStatusEnum];

/**
 * 
 * @export
 * @interface JobSubmitRequest
 */
export interface JobSubmitRequest {
    /**
     * 
     * @type {string}
     * @memberof JobSubmitRequest
     */
    comment?: string;
}
/**
 * 
 * @export
 * @interface LoanApplicant
 */
export interface LoanApplicant {
    /**
     * 
     * @type {string}
     * @memberof LoanApplicant
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof LoanApplicant
     */
    name?: string;
    /**
     * e.g. Borrower, Guarantor, Co-Borrower
     * @type {string}
     * @memberof LoanApplicant
     */
    role?: string;
    /**
     * 
     * @type {string}
     * @memberof LoanApplicant
     */
    idCardNumber?: string;
}
/**
 * 
 * @export
 * @interface LoanApplicantPage
 */
export interface LoanApplicantPage {
    /**
     * 
     * @type {Array<LoanApplicant>}
     * @memberof LoanApplicantPage
     */
    items?: Array<LoanApplicant>;
    /**
     * 
     * @type {number}
     * @memberof LoanApplicantPage
     */
    total?: number;
    /**
     * 
     * @type {number}
     * @memberof LoanApplicantPage
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof LoanApplicantPage
     */
    pageSize?: number;
}
/**
 * 
 * @export
 * @interface LoanDetail
 */
export interface LoanDetail {
    /**
     * 
     * @type {string}
     * @memberof LoanDetail
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof LoanDetail
     */
    productName?: string;
    /**
     * Thai Baht, 2 decimal places
     * @type {number}
     * @memberof LoanDetail
     */
    creditLimit?: number;
    /**
     * 
     * @type {number}
     * @memberof LoanDetail
     */
    outstandingBalance?: number;
    /**
     * Annual rate in percent
     * @type {number}
     * @memberof LoanDetail
     */
    interestRate?: number;
    /**
     * 
     * @type {string}
     * @memberof LoanDetail
     */
    loanType?: string;
    /**
     * Loan tenor in months
     * @type {number}
     * @memberof LoanDetail
     */
    tenor?: number;
}
/**
 * 
 * @export
 * @interface ReviewContractDocument200Response
 */
export interface ReviewContractDocument200Response {
    /**
     * 
     * @type {string}
     * @memberof ReviewContractDocument200Response
     */
    status?: string;
    /**
     * 
     * @type {DocumentReviewResponse}
     * @memberof ReviewContractDocument200Response
     */
    data?: DocumentReviewResponse;
    /**
     * 
     * @type {string}
     * @memberof ReviewContractDocument200Response
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface SubmitJob200Response
 */
export interface SubmitJob200Response {
    /**
     * 
     * @type {string}
     * @memberof SubmitJob200Response
     */
    status?: string;
    /**
     * 
     * @type {JobStatusResponse}
     * @memberof SubmitJob200Response
     */
    data?: JobStatusResponse;
    /**
     * 
     * @type {string}
     * @memberof SubmitJob200Response
     */
    message?: string;
}

/**
 * 
 * @export
 * @interface LoginRequest
 */
export interface LoginRequest {
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    password: string;
}

/**
 * 
 * @export
 * @interface LoginResponse
 */
export interface LoginResponse {
    /**
     * 
     * @type {string}
     * @memberof LoginResponse
     */
    token?: string;
    /**
     * 
     * @type {string}
     * @memberof LoginResponse
     */
    expiresAt?: string;
    /**
     * 
     * @type {UserResponse}
     * @memberof LoginResponse
     */
    user?: UserResponse;
}

/**
 * 
 * @export
 * @interface UserResponse
 */
export interface UserResponse {
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    fullName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    role?: string;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    branchCode?: string;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    branchName?: string;
}

/**
 * 
 * @export
 * @interface TermsContent
 */
export interface TermsContent {
    /**
     * 
     * @type {string}
     * @memberof TermsContent
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof TermsContent
     */
    lastUpdated?: string;
    /**
     * 
     * @type {Array<TermsSection>}
     * @memberof TermsContent
     */
    sections?: Array<TermsSection>;
}

/**
 * 
 * @export
 * @interface TermsSection
 */
export interface TermsSection {
    /**
     * 
     * @type {string}
     * @memberof TermsSection
     */
    heading?: string;
    /**
     * 
     * @type {string}
     * @memberof TermsSection
     */
    body?: string;
}

/**
 * 
 * @export
 * @interface TermsAcceptRequest
 */
export interface TermsAcceptRequest {
    /**
     * 
     * @type {string}
     * @memberof TermsAcceptRequest
     */
    acceptedAt: string;
}

/**
 * 
 * @export
 * @interface TermsResponse
 */
export interface TermsResponse {
    /**
     * 
     * @type {string}
     * @memberof TermsResponse
     */
    status?: string;
    /**
     * 
     * @type {TermsContent}
     * @memberof TermsResponse
     */
    data?: TermsContent;
    /**
     * 
     * @type {string}
     * @memberof TermsResponse
     */
    message?: string;
}
