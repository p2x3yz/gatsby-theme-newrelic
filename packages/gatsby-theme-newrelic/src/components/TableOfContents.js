import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { PageTools } from '@newrelic/gatsby-theme-newrelic';
import useActiveHash from '../hooks/useActiveHash';
import useDeepMemo from '../hooks/useDeepMemo';

const prop = (name) => (obj) => obj[name];

const TableOfContents = ({ headings }) => {
  const headingIds = useDeepMemo(() => headings.map(prop('id')), [headings]);
  const activeHash = useActiveHash(headingIds);

  return headings.length === 0 ? null : (
    <PageTools.Section
      css={css`
        display: flex;
        flex-direction: column;
        min-height: 150px;
      `}
    >
      <PageTools.Title>On this page</PageTools.Title>
      <nav
        css={css`
          margin-left: -1rem;
          margin-right: -1rem;
          overflow-y: auto;
        `}
      >
        <ul
          css={css`
            list-style: none;
            padding: 0;
            margin: 0;
          `}
        >
          {headings.map(({ id, text }) => {
            const isActive = activeHash === id;

            return (
              <li
                key={id}
                css={css`
                  margin: 0;
                `}
              >
                <a
                  href={`#${id}`}
                  className={isActive ? 'active' : null}
                  css={css`
                    display: flex;
                    align-items: center;
                    font-size: 0.875rem;
                    padding: 0.5rem 1rem;
                    color: var(--primary-text-color);
                    transition: background-color 0.2s ease-out,
                      color 0.2s ease-out;
                    text-decoration: none;
                    position: relative;
                    border-left: 4px solid transparent;

                    &.active {
                      color: var(--heading-text-color);
                      background: var(--color-neutrals-100);
                      border-left-color: var(--color-neutrals-400);

                      .dark-mode & {
                        background: var(--color-dark-200);
                        border-left-color: var(--color-dark-400);
                      }
                    }
                  `}
                >
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </PageTools.Section>
  );
};

TableOfContents.propTypes = {
  headings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TableOfContents;
