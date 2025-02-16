// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { productName } from 'content/strings/application';
import * as React from 'react';
import Helmet from 'react-helmet';
import { NamedFC } from '../../common/react/named-fc';

export type GuidanceTitleProps = {
    name: string;
};

export const GuidanceTitle = NamedFC<GuidanceTitleProps>('GuidanceTitle', ({ name }) => (
    <>
        <Helmet>
            <title>
                Guidance for {name} - {productName}
            </title>
        </Helmet>
        <h1>{name}</h1>
    </>
));
