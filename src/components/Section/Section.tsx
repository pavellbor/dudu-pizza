import React from 'react';
import styles from './Section.module.scss';

type SectionProps = {
  title: string;
  children: React.ReactNode;
  leftColumnElement?: React.ReactNode;
  rightColumnElement?: React.ReactNode;
  footerElement?: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({
  title,
  children,
  leftColumnElement,
  rightColumnElement,
  footerElement,
}) => {
  return (
    <section className={styles.root}>
      <div className={styles.header}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>{title}</h2>
          {leftColumnElement}
        </div>
        {rightColumnElement}
      </div>
      {children}
      {footerElement && <div className={styles.footer}>{footerElement}</div>}
    </section>
  );
};

export default Section;
