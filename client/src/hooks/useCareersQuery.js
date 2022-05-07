import { useStaticQuery, graphql } from "gatsby";

export const useCareersQuery = () => {
  const data = useStaticQuery(graphql`
  query Careers {
    wpPage {
      acf_careers {
        careers {
          link
          title
        }
      }
    }
  }
  
  `);

  return data['wpPage']['acf_careers']['careers']
};
