// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { EnvironmentInfo } from 'common/environment-info-provider';
import { GetGuidanceTagsFromGuidanceLinks } from 'common/get-guidance-tags-from-guidance-links';
import { ReactFCWithDisplayName } from 'common/react/named-fc';
import { FixInstructionProcessor } from 'injected/fix-instruction-processor';
import { ScanResults } from 'scanner/iruleresults';

export type SectionProps = {
    fixInstructionProcessor: FixInstructionProcessor;
    pageTitle: string;
    pageUrl: string;
    description: string;
    scanDate: Date;
    environmentInfo: EnvironmentInfo;
    scanResult: ScanResults;
    toUtcString: (date: Date) => string;
    getCollapsibleScript: () => string;
    getGuidanceTagsFromGuidanceLinks: GetGuidanceTagsFromGuidanceLinks;
};

export type ReportSectionFactory = {
    BodySection: ReactFCWithDisplayName;
    ContentContainer: ReactFCWithDisplayName;
    HeaderSection: ReactFCWithDisplayName<SectionProps>;
    TitleSection: ReactFCWithDisplayName;
    SummarySection: ReactFCWithDisplayName<SectionProps>;
    DetailsSection: ReactFCWithDisplayName<SectionProps>;
    ResultsContainer: ReactFCWithDisplayName<SectionProps>;
    FailedInstancesSection: ReactFCWithDisplayName<SectionProps>;
    PassedChecksSection: ReactFCWithDisplayName<SectionProps>;
    NotApplicableChecksSection: ReactFCWithDisplayName<SectionProps>;
    FooterSection: ReactFCWithDisplayName<SectionProps>;
};
