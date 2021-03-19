import React, { useRef, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Footer from './SearchModal/Footer';
import Input from './SearchModal/Input';
import NoResults from './SearchModal/NoResults';
import Portal from './Portal';
import Result from './SearchModal/Result';
import ResultPreview from './SearchModal/ResultPreview';
import ScrollContainer from './SearchModal/ScrollContainer';
import useThemeTranslation from '../hooks/useThemeTranslation';
import { useQueryClient } from 'react-query';
import { useDebounce } from 'react-use';
import useKeyPress from '../hooks/useKeyPress';
import useScrollFreeze from '../hooks/useScrollFreeze';
import { animated, useTransition } from 'react-spring';
import { rgba } from 'polished';
import useSearch from './SearchModal/useSearch';
import { useStaticQuery, graphql } from 'gatsby';

const defaultFilters = [
  { name: 'docs', isSelected: false },
  { name: 'developer', isSelected: false },
  { name: 'opensource', isSelected: false },
];

const SearchModal = ({ onClose, isOpen }) => {
  const { t } = useThemeTranslation();
  const queryClient = useQueryClient();
  const searchInput = useRef();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filters, setFilters] = useState(defaultFilters);
  const { isLoading, results, isSuccess, fetchNextPage } = useSearch({
    searchTerm,
    filters,
  });
  const selectedRef = useRef();

  const transitions = useTransition(isOpen, null, {
    config: { tension: 220, friction: 22 },
    from: {
      opacity: 0,
      transform: 'scale(0.96)',
    },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.96)' },
  });

  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  useScrollFreeze(isOpen);
  useKeyPress('Escape', onClose, { ignoreTextInput: false });

  useKeyPress(
    ['ArrowUp', 'ArrowDown'],
    (e) => {
      if (e.key === 'ArrowUp' && selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      }

      if (e.key === 'ArrowDown' && selectedIndex < results.length - 1) {
        setSelectedIndex(selectedIndex + 1);
      }
    },
    { ignoreTextInput: false }
  );

  useKeyPress(
    'Enter',
    () => {
      if (selectedRef.current) {
        selectedRef.current.click();
        if (results[selectedIndex].url.startsWith(siteUrl)) {
          onClose();
        }
      }
    },
    { ignoreTextInput: false }
  );

  useEffect(() => {
    isOpen && searchInput.current.focus();
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchTerm]);

  const onIntersection = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  useDebounce(
    () => {
      if (searchTerm) {
        queryClient.setQueryData('swiftype', () => ({
          pages: [],
          pageParam: 1,
        }));

        fetchNextPage({ pageParam: 1 });
      }
    },
    200,
    [searchTerm, fetchNextPage]
  );

  useEffect(() => {
    queryClient.setQueryData('swiftype', () => ({
      pages: [],
      pageParam: 1,
    }));

    fetchNextPage({ pageParam: 1 });
  }, [filters, fetchNextPage, queryClient]);

  const selectedResult = results[selectedIndex];

  const onFilter = (filterName) => {
    const updatedFilters = filters.map(({ name, isSelected }) => {
      if (name === filterName) {
        return { name: name, isSelected: !isSelected };
      }
      return { name, isSelected };
    });
    setFilters(updatedFilters);
  };

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <Portal key={key}>
          <animated.div
            style={{ opacity: props.opacity }}
            css={css`
              position: fixed;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              padding: var(--site-content-padding);
              z-index: 100;
              background: ${rgba('#d5d7d7', 0.5)};

              .dark-mode & {
                background: hsla(195, 20%, 20%, 0.5);
              }

              em {
                border-radius: 0.125rem;
                padding: 0.125rem 0.25rem;
                color: var(--color-neutrals-800);
                background: var(--color-neutrals-200);
                font-style: normal;
                font-weight: bold;
                font-size: 85%;

                .dark-mode & {
                  color: var(--color-brand-300);
                  background: var(--color-dark-200);
                }
              }

              h2,
              h3,
              h4 {
                em {
                  font-size: inherit;
                }
              }
            `}
            onClick={onClose}
          >
            <animated.div
              onClick={(e) => e.stopPropagation()}
              style={props}
              css={css`
                --horizontal-spacing: 1rem;

                z-index: 101;
                max-width: 1024px;
                width: 100%;
                margin: auto;
                box-shadow: var(--shadow-4);
                max-height: calc(100vh - 2 * var(--site-content-padding));
                display: flex;
                flex-direction: column;
                position: relative;
              `}
            >
              <Input
                placeholder={t('searchInput.placeholder')}
                ref={searchInput}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                onFilter={onFilter}
                value={searchTerm}
                onClear={() => setSearchTerm('')}
                onCancel={onClose}
                loading={isLoading}
                filters={filters}
                css={
                  searchTerm &&
                  css`
                    input {
                      border-bottom-left-radius: 0;
                      border-bottom-right-radius: 0;
                    }
                  `
                }
              />

              {searchTerm && (
                <div
                  css={css`
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    flex-grow: 1;
                    background-color: white;
                    border-bottom-left-radius: 0.25rem;
                    border-bottom-right-radius: 0.25rem;
                    box-shadow: var(--shadow-6);
                    border: 1px solid var(--border-color);
                    border-top: none;
                    overflow: hidden;

                    .dark-mode & {
                      background: var(--color-dark-050);
                    }
                  `}
                >
                  {Boolean(results?.length) && (
                    <>
                      <ScrollContainer onIntersection={onIntersection}>
                        {results.map((result) => {
                          const resultIndex = results.indexOf(result);

                          return (
                            <Result
                              selected={resultIndex === selectedIndex}
                              ref={
                                resultIndex === selectedIndex
                                  ? selectedRef
                                  : null
                              }
                              key={result.id}
                              result={result}
                              onSelect={() => setSelectedIndex(resultIndex)}
                            />
                          );
                        })}
                      </ScrollContainer>
                      <ResultPreview result={selectedResult} />
                      <Footer />
                    </>
                  )}
                  {results.length === 0 && isSuccess && <NoResults />}
                </div>
              )}
            </animated.div>
          </animated.div>
        </Portal>
      )
  );
};

SearchModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default SearchModal;
