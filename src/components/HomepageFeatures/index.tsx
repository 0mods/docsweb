import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const Features: FeatureItem[] = [
  {
    /* It's a crutch, but I can't do it any other way. */
    title: '',
    Svg: require('@site/static/img/doc/empty.svg').default,
    description: (<></>)
  },
  {
    title:'Nothing is here :D',
    Svg: require('@site/static/img/doc/empty.svg').default,
    description: (
      <>
        This page is currently in development! 
      </>
    )
  }
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {
            Features.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))
          }
        </div>
      </div>
    </section>
  );
}
