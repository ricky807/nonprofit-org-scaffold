import { useStaticQuery, graphql } from "gatsby";

export const useSliderQuery = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      wpPage {
        ACF_HOME {
          slides {
            heading
            subheading
            overlay
            buttons {
              buttontext
              color
              redirecturl
            }
            background {
              sourceUrl
            }
          }
        }
      }
    }
  `);

  return data['wpPage']['ACF_HOME']['slides'];
};
