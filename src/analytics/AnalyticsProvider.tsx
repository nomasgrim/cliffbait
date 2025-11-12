  'use client';

  import { useEffect } from 'react';
  import { usePathname } from 'next/navigation';
  import ReactGA from 'react-ga4';

  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

  const AnalyticsProvider = ({ children }:any) => {
      const pathname = usePathname();

      useEffect(() => {
        if (GA_MEASUREMENT_ID) {
          ReactGA.initialize(GA_MEASUREMENT_ID);
        }
      }, []);

      useEffect(() => {
        if (GA_MEASUREMENT_ID) {
          ReactGA.send({ hitType: 'pageview', page: pathname });
        }
      }, [pathname]);

      return <>{children}</>;
    };

    export default AnalyticsProvider;