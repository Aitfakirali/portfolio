import clsx from 'clsx';
import React from 'react';

import { breadcrumb } from './theme';
import { Icon } from '../icon/Icon';
import { Link } from '../link/Link';
import { Text } from '../typography/Text';

/**
 *
 */
type Page = {
  /**
   * the id of the page
   */
  id: string;
  /**
   * the label of the page
   */
  name: string;
  /**
   * the url to the page
   */
  href?: string;
  /**
   * indicates whether the page is the current page
   */
  current?: boolean;
};

/**
 *
 */
type BreadcrumbProps = {
  /**
   * the url of the home page
   */
  homeUrl?: string;
  /**
   * overrides or extends the default styles
   */
  className?: string;
  /**
   * change the appearance of the breadcrumb
   */
  variant?: keyof typeof breadcrumb;
  /**
   * list of pages
   */
  pages?: Page[];
  /**
   * limit the pages to be shown
   */
  showLimit?: boolean;
};

/**
 *
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  homeUrl,
  className = '',
  variant = 'default',
  pages = [],
  showLimit = false,
}) => {
  const list =
    homeUrl && pages.length > 2 && showLimit
      ? pages.slice(0, 1)
      : pages.length > 3 && showLimit
        ? pages.slice(0, 2)
        : pages;
  const lastPage = pages[pages.length - 1];

  return (
    <div className={clsx(breadcrumb[variant].wrapper, className)}>
      <ol role='list' className={breadcrumb[variant].list}>
        {homeUrl && (
          <li className={breadcrumb[variant].listElement}>
            <Link href={homeUrl} className={breadcrumb[variant].link}>
              <Text
                as='span'
                variant='text-base/Regular'
                className={breadcrumb[variant].link}
              >
                Accueil
              </Text>
            </Link>
          </li>
        )}
        {list.map((page, index) => {
          return (
            <li key={page.id} className={breadcrumb[variant].listElement}>
              {index == 0 && !homeUrl ? null : (
                <Icon
                  id='arrow-right'
                  className={breadcrumb[variant].separator}
                />
              )}

              <Link
                href={page.href ?? '#.'}
                className={
                  page.current
                    ? breadcrumb[variant].linkActive
                    : breadcrumb[variant].link
                }
                aria-current={page.current ? 'page' : undefined}
              >
                <Text
                  as='span'
                  variant='text-base/Regular'
                  className={breadcrumb[variant].link}
                >
                  {page.name}
                </Text>
              </Link>
            </li>
          );
        })}

        {list.length !== pages.length && (
          <>
            <li className={breadcrumb[variant].listElement}>
              <Icon
                id='arrow-right'
                className={breadcrumb[variant].separator}
              />
              <Text
                as='span'
                variant='text-base/Regular'
                className={breadcrumb[variant].link}
              >
                ...
              </Text>
            </li>

            <li className={breadcrumb[variant].listElement}>
              <Icon
                id='arrow-right'
                className={breadcrumb[variant].separator}
              />
              <Link
                href={lastPage.href ?? '#.'}
                className={
                  lastPage.current
                    ? breadcrumb[variant].linkActive
                    : breadcrumb[variant].link
                }
                aria-current={lastPage.current ? 'page' : undefined}
              >
                <Text
                  as='span'
                  variant='text-base/Regular'
                  className={breadcrumb[variant].link}
                >
                  {lastPage.name}
                </Text>
              </Link>
            </li>
          </>
        )}
      </ol>
    </div>
  );
};
