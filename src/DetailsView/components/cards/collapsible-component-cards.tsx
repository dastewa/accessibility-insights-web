// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { css } from '@uifabric/utilities';
import { ActionButton } from 'office-ui-fabric-react/lib/Button';
import * as React from 'react';

import {
    collapsibleContainer,
    collapsibleContainerContent,
    collapsibleControl,
    collapsibleTitle,
} from './collapsible-component-cards.scss';

export interface CollapsibleComponentCardsProps {
    header: JSX.Element;
    content: JSX.Element;
    headingLevel: number;
    contentClassName?: string;
    containerClassName?: string;
    buttonAriaLabel?: string;
}

interface CollapsibleComponentCardsState {
    showContent: boolean;
}

export class CollapsibleComponentCards extends React.Component<CollapsibleComponentCardsProps, CollapsibleComponentCardsState> {
    constructor(props: CollapsibleComponentCardsProps) {
        super(props);
        this.state = { showContent: true };
    }

    private onClick = (): void => {
        const newState = !this.state.showContent;
        this.setState({ showContent: newState });
    };

    public render(): JSX.Element {
        const showContent = this.state.showContent;
        const containerProps = { role: 'heading', 'aria-level': this.props.headingLevel };
        let contentWrapper = null;
        let collapsedCSSClassName = 'collapsed';

        if (showContent) {
            contentWrapper = <div className={css(this.props.contentClassName, collapsibleContainerContent)}>{this.props.content}</div>;
            collapsedCSSClassName = null;
        }

        return (
            <div className={css(this.props.containerClassName, collapsibleContainer, collapsedCSSClassName)}>
                <div {...containerProps}>
                    <ActionButton
                        className={collapsibleControl}
                        onClick={this.onClick}
                        aria-expanded={showContent}
                        ariaLabel={this.props.buttonAriaLabel}
                    >
                        <span className={collapsibleTitle}>{this.props.header}</span>
                    </ActionButton>
                </div>
                {contentWrapper}
            </div>
        );
    }
}
