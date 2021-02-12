import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import GitHubIssueButton from './GitHubIssueButton';
import Icon from './Icon';
import PageTools from './PageTools';
import useThemeTranslation from '../hooks/useThemeTranslation';

const SimpleFeedback = ({ pageTitle, issueBody, labels = [] }) => {
  const { t } = useThemeTranslation();
  const issueTitle = pageTitle ? `Feedback: ${pageTitle}` : 'Website feedback';

  return (
    <PageTools.Section
      css={css`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background: var(--divider-color);
        padding: 0.5rem 1rem;
        gap: 1rem;

        @supports not (gap: 1rem) {
          > :first-child {
            margin-right: 1rem;
          }
        }
      `}
    >
      <h6
        css={css`
          margin-bottom: 0;
        `}
      >
        {t('feedback.question')}
      </h6>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 0.25rem;

          @supports not (gap: 0.5rem) {
            a:first-of-type {
              margin-right: 0.25rem;
            }
          }
        `}
      >
        <GitHubIssueButton
          labels={[...labels, 'feedback', 'feedback-positive']}
          issueTitle={issueTitle}
          pageTitle={pageTitle}
          issueBody={issueBody}
          variant={GitHubIssueButton.VARIANT.LINK}
          size={GitHubIssueButton.SIZE.EXTRA_SMALL}
        >
          <Icon
            size="0.75rem"
            name="fe-thumbsup"
            css={css`
              margin-right: 0.5rem;
            `}
          />
          {t('feedback.positive')}
        </GitHubIssueButton>
        <GitHubIssueButton
          labels={[...labels, 'feedback', 'feedback-negative']}
          issueTitle={issueTitle}
          issueBody={issueBody}
          pageTitle={pageTitle}
          variant={GitHubIssueButton.VARIANT.LINK}
          size={GitHubIssueButton.SIZE.EXTRA_SMALL}
        >
          <Icon
            size="0.75rem"
            name="fe-thumbsdown"
            css={css`
              margin-right: 0.5rem;
            `}
          />
          {t('feedback.negative')}
        </GitHubIssueButton>
      </div>
    </PageTools.Section>
  );
};

SimpleFeedback.propTypes = {
  pageTitle: PropTypes.string,
  labels: PropTypes.arrayOf(PropTypes.string),
  issueBody: PropTypes.string,
};

export default SimpleFeedback;
